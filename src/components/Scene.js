import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Laptop } from './Laptop';
import { OrbitControls } from '@react-three/drei';
import  * as THREE from 'three'


function Scene() {
  return (
    <div className='container'>
      <Canvas  
        camera={{
          position: [0, 6, 25],
          fov: 50,
        }}  

        gl={{
          
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 3.4
        }}
      >
        <Suspense fallback={null} >
          <Laptop />
        </Suspense>
        
        <ambientLight intensity={0.5} color={'#fffff'} />
        
        <directionalLight 
          position={[10, 10, 10]} 
          color={'#ffffff'} 
          intensity={1.3} 
        />
        
        <OrbitControls  
          target={[0, 5, 1]} 
        />
      </Canvas>
    </div>
  );
}

export default Scene;
