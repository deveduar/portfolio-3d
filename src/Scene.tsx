import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ReactNode, useEffect, useRef } from "react";

interface SceneProps {
  children: ReactNode;
}

function Scene({ children }: SceneProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (canvasRef.current?.contains(event.target as Node)) {
        event.preventDefault();
      }
    };

    document.body.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.body.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="canvas-container" ref={canvasRef}>
      <Canvas>
        {children}
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Scene;
