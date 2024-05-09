// App.js
import { useState } from "react";
import "./App.css";
import Scene from "./Scene";
import Mesh from "./RotatingMesh";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Deveduar</h1>
      <Scene>
        <Mesh />
      </Scene>
      
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
