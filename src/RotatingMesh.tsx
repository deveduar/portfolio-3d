// RotatingMesh.js
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingMeshProps {
  position: [number, number, number]; // Tipo para la propiedad de posición
}

function RotatingMesh(props: RotatingMeshProps) {
  const meshRef = useRef<Mesh>(null!);
  const { position } = props;
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshNormalMaterial /> */}
      <meshStandardMaterial color={"green"} wireframe></meshStandardMaterial>
    </mesh>
  );
}

export default RotatingMesh;
