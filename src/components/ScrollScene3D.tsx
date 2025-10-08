import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Rotação baseada no scroll
      meshRef.current.rotation.y = scrollY.current * 0.001;
      meshRef.current.rotation.x = scrollY.current * 0.0005;
      
      // Escala baseada no scroll
      const scale = 1 + Math.sin(scrollY.current * 0.001) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const ScrollScene3D = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ScrollScene3D;
