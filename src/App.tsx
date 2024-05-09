// App.js
import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingMesh from "./mesh";

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
