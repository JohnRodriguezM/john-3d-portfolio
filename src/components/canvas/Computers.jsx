/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

import './css/Computer.css'

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh
    >
      <hemisphereLight intensity={1} groundColor="gray" />
      <pointLight intensity={1.5} />
      <SpotLight
        intensity={1}
        position={[-20, 20, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
        
      />

      <primitive
        object={computer.scene}
        scale={0.90}
        position={[0, -2.25, -1.2]}
        rotation={[-0, -0, -0.09]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [canvasHeight, setCanvasHeight] = useState(2000);
  const canvasRef = useRef();

  const handleResize = () => {
    const canvas = canvasRef.current;
    const container = canvas.parentNode;
    const { width } = container.getBoundingClientRect();



    setCanvasHeight(Math.min(width * 0.63, 500));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${Math.min(width * 0.63, 500)}px`;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
  className="mt-96 xs:mt-80  md:mt-96 lg:mt-72"
      style={{
        //marginTop: "14rem",
        cursor: "all-scroll",
        position: "absolute",
        width: "100%",
        height: `${canvasHeight}px`,
        animation: " levitate 2s ease-in-out infinite alternate",
        filter: "drop-shadow(10px 10px 100px rgba(153, 50, 204, 0.75))"

      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 3], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
        ref={canvasRef}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </section>
  );
};

export default ComputersCanvas;


/*const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  )
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
};

export default ComputersCanvas*/

/*import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Suspense } from 'react';



const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 300px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;*/
