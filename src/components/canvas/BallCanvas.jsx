/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "./../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.icon]);

  return <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.25} />
    <directionalLight intensity={0.5} position={[0, 0, 0.05]} />
    <mesh
      castShadow
      receiveShadow
      scale={2.85}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={81}
        flatShading
      />
      <Decal
       map={decal}
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        />


    </mesh>
  </Float>;
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      style={{ width: "100%", height: "100%" }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
