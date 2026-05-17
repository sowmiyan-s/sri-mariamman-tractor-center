import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState, Component, type ReactNode } from "react";

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { failed: false };
  }
  componentDidCatch() {
    this.setState({ failed: true });
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const AnimatedObject = () => (
  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
    <Sphere args={[1, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        color="#d4af37"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  </Float>
);

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export const Hero3D = () => {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(hasWebGL());
  }, []);

  if (!supported) return null;

  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <WebGLErrorBoundary>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
            <spotLight position={[-5, 5, 5]} angle={0.2} intensity={0.8} />
            <AnimatedObject />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
};
