import { useGLTF } from "@react-three/drei";
import React from "react";
import skyScene from "../assets/3d/sky.glb";
//why 3d object for sky than an image --- while rotating the island the clouds needs to move like a sphere
const Sky = () => {
  const sky = useGLTF(skyScene);
  return (
    /*primitive - object can be returned 
     ---> inside <mesh> as sky is not going to have any other animations like island
    */
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
