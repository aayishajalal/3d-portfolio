import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import birdScene from "../assets/3d/bird.glb";
//1. import birdScene 2. {scene, animations} = useGLTF(birdScene) 3. <mesh> <primitive object={scene} /> </mesh>
/* 
  To animate 3d models

  1. const ref = useRef() and pass it inside <mesh ref={ref}>
  2. const {actions} = useAnimations({animations, ref})
  
  To animate the bird
  3. useEffect(()=>{
      actiond["Take 001"].play()
    },[])
  
  To change the position in the frame  - fiber lib
  4. useFrame((_,delta)=>{
      update the position 
    })
    
    but in this usecase the bird needs to move up down & approach the 
    island as time goes 
    useFrame(({clock, camera})=>{
      })
*/
const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);

  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //use sin function for the bird up down movement in Y axis as time moves --> clock
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    //check if bird reached certain endpoint
    if (birdRef.current.position.x > camera.position.x + 10) {
      //bird reached certain endpoint changed dir backwards and rotate 180 degree
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      //change dir forward and reset bird's rotation
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      //moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
