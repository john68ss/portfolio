'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SimpleAnimatedSphere({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.8, 32, 32]}>
      <MeshDistortMaterial
        color={color}
        distort={0.2}
        speed={1}
        roughness={0.2}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

function MinimalParticles() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(500 * 3); // Reduced from 5000 to 500
    
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02; // Much slower
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#8b5cf6"
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
        frameloop="demand" // Only render when needed
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        
        <MinimalParticles />
        
        {/* Only 2 spheres instead of 5 */}
        <SimpleAnimatedSphere 
          position={[-3, 1, -2]} 
          color="#3b82f6" 
        />
        <SimpleAnimatedSphere 
          position={[3, -1, -3]} 
          color="#8b5cf6" 
        />
      </Canvas>
    </div>
  );
}
