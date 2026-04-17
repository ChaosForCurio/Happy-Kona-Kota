import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import CoffeeCup from './CoffeeCup';

export default function ThreeScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0.5, 5]} fov={35} />
          
          {/* Cinematic Lighting */}
          <ambientLight intensity={0.2} />
          <spotLight position={[5, 10, 5]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#orange" />
          
          <CoffeeCup />
          
          <ContactShadows 
            position={[0, -0.6, 0]} 
            scale={10} 
            blur={2.5} 
            far={2} 
            opacity={0.4} 
          />
          
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
