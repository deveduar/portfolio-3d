import { useState, useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";


function RotatingMesh() {
 const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[5, 4, 4, 5]} />
      <meshNormalMaterial />
    </mesh>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Deveduar</h1>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <OrbitControls />
          <RotatingMesh />
        </Canvas>
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
