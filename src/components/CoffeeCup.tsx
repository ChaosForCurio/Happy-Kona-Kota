import Steam from './Steam';

export default function CoffeeCup() {
  return (
    <group scale={1.5} rotation={[0.2, 0, 0]}>
      {/* Cup Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.6, 1.2, 32, 1, true]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.2} 
          metalness={0.8} 
          side={2} 
        />
      </mesh>

      {/* Cup Bottom */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Coffee Liquid */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.05, 32]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* Handle */}
      <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>

      <Steam />
    </group>
  );
}
