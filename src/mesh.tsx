// RotatingMesh.js
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function RotatingMesh() {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} onWheel={(e) => e.stopPropagation()}>
      <boxGeometry args={[5, 4, 4, 5]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default RotatingMesh;
