import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Scrollytelling = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Use a spring for smoother frame transitions (Awwwards level smoothness)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameCount = 240;
  const images = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/sequence/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoaded(true);
          }
        };
        images.current[i - 1] = img;
      }
    };
    preloadImages();
  }, []);

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!context || !canvas) return;
      
      const index = Math.round(frameIndex.get());
      const img = images.current[index];
      
      if (img && img.complete) {
        // Draw image with "object-fit: cover" logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Premium tone — balanced for readable foreground text
        context.filter = "saturate(1.35) contrast(1.05) brightness(1.08)";
        
        context.drawImage(
          img, 0, 0, img.width, img.height,
          centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
        );
      }
      
      requestAnimationFrame(render);
    };
    
    const animationFrame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-white">
      {/* The actual image sequence canvas */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.78 : 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
      </motion.div>

      {/* Fully transparent background to let the sequence shine */}
    </div>
  );
};
