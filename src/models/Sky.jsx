import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";
//why 3d object for sky than an image --- while rotating the island the clouds needs to move like a sphere
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  /*useRef() - to store and persist the mutable state */
  const skyRef = useRef();

  //changes for frame ]
  useFrame((_, delta) => {
    if (isRotating) skyRef.current.rotation.y += 0.15 * delta;
  });

  return (
    /*primitive - object can be returned 
     ---> inside <mesh> as sky is not going to have any other animations like island
    */
    //pass the ref inside the mesh
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
