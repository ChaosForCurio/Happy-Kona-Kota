import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, PerspectiveCamera, ContactShadows, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import CoffeeCup from './CoffeeCup';

export default function ThreeScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={30} />
          
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 1.8} 
            minPolarAngle={Math.PI / 3} 
            makeDefault 
          />
          
          {/* Cinematic Lighting */}
          <ambientLight intensity={0.2} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={10} 
            castShadow 
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[-5, 5, -5]} intensity={3} color="#f59e0b" />
          <rectAreaLight width={5} height={5} position={[5, 1, 2]} intensity={5} color="white" />
          
          <CoffeeCup />
          
          <ContactShadows 
            position={[0, -0.65, 0]} 
            scale={12} 
            blur={2} 
            far={1.5} 
            opacity={0.4} 
          />
          
          <Environment preset="apartment" />
          
          {/* Post-processing for that premium glow */}
          <EffectComposer enableNormalPass={false}>
            <Bloom 
              luminanceThreshold={1.0} 
              mipmapBlur 
              intensity={0.4} 
              radius={0.3} 
            />
            <Noise opacity={0.015} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
