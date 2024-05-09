import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mesh from "./mesh";

function Scene() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <OrbitControls />
        <Mesh />
      </Canvas>
    </div>
  );
}

export default Scene;
