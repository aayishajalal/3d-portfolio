import { useGLTF } from "@react-three/drei";
import React from "react";
import birdScene from "../assets/3d/bird.glb";
//1. import birdScene 2. {scene, animations} = useGLTF(birdScene) 3. <mesh> <primitive object={scene} /> </mesh>

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
