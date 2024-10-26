import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Avatar = () => {
  const avatarRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/avatar/avatar.gltf', (gltf) => {
      avatarRef.current = gltf.scene;
    });
  }, []);

  useFrame(() => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y += 0.01;  // Add slight rotation
    }
  });

  return avatarRef.current ? <primitive object={avatarRef.current} scale={1} /> : null;
};

export default function AvatarCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ height: '100vh' }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={true} />
      <Avatar />
    </Canvas>
  );
}
