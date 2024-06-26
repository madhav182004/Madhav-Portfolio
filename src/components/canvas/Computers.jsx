import React from 'react'
import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  return (
      <mesh>
          <hemisphereLight intensity={1} groundColor="black" />
          <spotLight
            position={[-1, 3, 1]}
            angle={2}
            intensity={200}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={10} />
          <primitive
              object={computer.scene}
              scale={isMobile ? 0.4 : 0.65}
              position={isMobile?[0,-1.8,-0.3]:[0, -2.5, -0.3]}
              rotation={[-0.01, -0.2, -0.1]}
          />
      </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile,setisMobile] = useState(false);

  //add a listener for changes to the screen size
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //set the intial value of the "isMobile" state variable 
    setisMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = () =>{
      setisMobile(event.matches);
    };

    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  return (
      <Canvas
          frameloop="demand"
          shadows
          camera={{
              position: [20, 3, 5],
              fov: 25,
          }}
          gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
              />
              <Computers isMobile={isMobile}/>
          </Suspense>
          <Preload all />
      </Canvas>
  );
};
export default ComputersCanvas;
