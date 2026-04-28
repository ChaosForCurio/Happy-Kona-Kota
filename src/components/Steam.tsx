import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Steam() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 40; // Fewer but larger, softer particles
  
  // Create a procedurally generated soft circle texture
  const steamTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128; // Higher res for smoothness
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 128, 128);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  const [positions, offsets] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const off = new Float32Array(particleCount); // Variation offsets
    
    for (let i = 0; i < particleCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 0.2;
        pos[i * 3 + 1] = Math.random() * 2;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
        off[i] = Math.random() * Math.PI * 2;
    }
    
    return [pos, off];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < particleCount; i++) {
        // 1. Rise up with varying vertical speed
        const verticalSpeed = 0.15 + (i % 3) * 0.05;
        positions[i * 3 + 1] += delta * verticalSpeed;
        
        // 2. Horizontal "Wisp" Drift (Swaying combined with some random noise)
        const xSway = Math.sin(time * 0.5 + offsets[i]) * 0.0015;
        const zSway = Math.cos(time * 0.4 + offsets[i] * 1.5) * 0.0015;
        
        positions[i * 3] += xSway;
        positions[i * 3 + 2] += zSway;
        
        // 3. Reset and randomize if they float too far or too high
        if (positions[i * 3 + 1] > 1.8) {
            positions[i * 3 + 1] = 0;
            positions[i * 3] = (Math.random() - 0.5) * 0.3;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
        }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    // Slow rotation for collective volume effect
    pointsRef.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={pointsRef} position={[0, 0.45, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.6}
        color="#ffffff"
        map={steamTexture}
        transparent
        opacity={0.08}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
