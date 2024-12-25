import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef(); //access & persists mutable state and changes w/o re-rendering -- direct DOM elemts or 3D models 
  const { scene, animations } = useGLTF(planeScene);
  //define actions - animation ref
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
