import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Scrollytelling = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  // High-end spring physics for "liquid" smoothness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40, // Lower stiffness for more fluid motion
    damping: 20, // Balanced damping for smooth settling
    restDelta: 0.001,
  });

  const frameCount = 240;
  const images = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/sequence/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
        img.onload = () => {
          setLoadedCount((prev) => prev + 1);
        };
        img.onerror = () => {
          setLoadedCount((prev) => prev + 1);
        };
        images.current[i - 1] = img;
      }
    };
    preloadImages();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Complete the full sequence faster on mobile (by 60% scroll progress) to fit the mobile scroll ratio
  const scrollRange = isMobile ? [0, 0.6] : [0, 1];
  const frameIndex = useTransform(smoothProgress, scrollRange, [0, frameCount - 1], { clamp: true });

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

      if (img && img.complete && img.naturalWidth !== 0) {
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          img.width * ratio,
          img.height * ratio,
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

  const isVisible = loadedCount >= 20;

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full"
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>
    </div>
  );
};
