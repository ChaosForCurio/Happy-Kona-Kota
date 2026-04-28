import { useMemo } from 'react';
import * as THREE from 'three';
import Steam from './Steam';

export default function CoffeeCup() {
  // 1. Refined Cup Profile (Lathe Geometry)
  // X = radius from Y axis, Y = height
  const cupPoints = useMemo(() => [
    new THREE.Vector2(0, 0),          // Center Bottom
    new THREE.Vector2(0.45, 0),       // Bottom Edge
    new THREE.Vector2(0.47, 0.05),    // Foot Out
    new THREE.Vector2(0.45, 0.08),    // Foot In
    new THREE.Vector2(0.55, 0.4),     // Body Taper Start
    new THREE.Vector2(0.8, 1.0),      // Main Body
    new THREE.Vector2(0.85, 1.15),    // Rim Flare Start
    new THREE.Vector2(0.88, 1.2),     // Top Rim Top
    new THREE.Vector2(0.84, 1.2),     // Top Rim Inner
    new THREE.Vector2(0.78, 1.0),     // Inner Wall
    new THREE.Vector2(0.5, 0.4),      // Inner Mid
    new THREE.Vector2(0.4, 0.15),     // Inner Base
    new THREE.Vector2(0, 0.12)        // Inner Center Floor
  ], []);

  // 2. Matching Saucer Profile
  const saucerPoints = useMemo(() => [
    new THREE.Vector2(0, 0),          // Center
    new THREE.Vector2(0.7, 0),        // Base Plate Area
    new THREE.Vector2(0.8, 0.05),     // Curve Up
    new THREE.Vector2(1.6, 0.15),     // Outer Flare
    new THREE.Vector2(1.7, 0.25),     // Rim Outer
    new THREE.Vector2(1.7, 0.28),     // Rim Top
    new THREE.Vector2(1.6, 0.28),     // Rim Inner
    new THREE.Vector2(1.4, 0.18),     // Inner Slope
    new THREE.Vector2(0.7, 0.08),     // Inner Base Flat
    new THREE.Vector2(0, 0.08)        // Inner Center
  ], []);

  // 3. Organic Handle Curve
  const handleCurve = useMemo(() => {
    return new THREE.CubicBezierCurve3(
      new THREE.Vector3(0.65, 0.9, 0),   // Top Attachment
      new THREE.Vector3(1.3, 1.0, 0),    // Top Bend
      new THREE.Vector3(1.3, 0.2, 0),    // Bottom Bend
      new THREE.Vector3(0.5, 0.35, 0)    // Bottom Attachment
    );
  }, []);

  return (
    <group scale={1.1} rotation={[0.1, 0, 0]} position={[0, -0.4, 0]}>
      
      {/* ☕ The Cup Body */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[cupPoints, 128]} />
        <meshPhysicalMaterial 
          color="#080808" 
          roughness={0.05} 
          metalness={0.4}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          reflectivity={1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* 🍽️ The Saucer */}
      <mesh position={[0, -0.05, 0]} receiveShadow castShadow>
        <latheGeometry args={[saucerPoints, 128]} />
        <meshPhysicalMaterial 
          color="#080808" 
          roughness={0.05} 
          metalness={0.4}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          reflectivity={1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* 🫳 The Organic Handle */}
      <mesh position={[0, 0, 0]} castShadow>
        <tubeGeometry args={[handleCurve, 64, 0.07, 16, false]} />
        <meshPhysicalMaterial 
          color="#080808" 
          roughness={0.05} 
          metalness={0.4}
          clearcoat={1.0}
        />
      </mesh>

      {/* ☕ The Coffee Liquid */}
      <mesh position={[0, 0.42, 0]}>
        {/* Slightly concave cylinder for surface tension effect */}
        <cylinderGeometry args={[0.74, 0.65, 0.04, 64]} />
        <meshPhysicalMaterial 
          color="#2B1B12" 
          roughness={0.02} 
          metalness={0.1}
          transmission={0.1}
          thickness={0.5}
          envMapIntensity={3}
        />
      </mesh>

      {/* ✨ The Crema / Foam Edge */}
      <mesh position={[0, 0.445, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.68, 0.74, 128]} />
        <meshStandardMaterial 
          color="#967969" 
          transparent 
          opacity={0.4} 
          roughness={1}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* 💨 Steam Effect */}
      <Steam />
      
    </group>
  );
}
