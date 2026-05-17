import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useHydrated } from "@tanstack/react-router";

const AnimatedObject = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#d4af37" // Harvest Gold
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Hero3D = () => {
  const hydrated = useHydrated();
  if (!hydrated) return null;

  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <spotLight position={[-5, 5, 5]} angle={0.2} intensity={0.8} />
          <AnimatedObject />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </Suspense>
    </div>
  );
};
