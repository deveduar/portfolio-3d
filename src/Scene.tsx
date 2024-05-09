import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
}

function Scene({ children }: SceneProps) {
  

  return (
    <div className="canvas-container">
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
