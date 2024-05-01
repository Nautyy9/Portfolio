import React, { Suspense } from "react";
import * as THREE from "three";
import {
  Environment,
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import CubeLoader from "./CubeLoader";
import { useFrame, useThree } from "@react-three/fiber";
function ThreeApp() {
  const { camera, gl } = useThree();
  // gl.setClearColor(new THREE.Color("#ff00f0"), 0.5);
  const threeMain = document.getElementById("three") as HTMLDivElement;
  useFrame((state, delta) => {
    if (window.innerWidth > 1280 && window.innerWidth < 1500) {
      threeMain.style.width = "40%";
      threeMain.classList.add("block");
      threeMain.classList.remove("hidden");
    } else if (window.innerWidth < 1280) {
      threeMain.classList.add("hidden");
      threeMain.classList.remove("block");
    } else {
      threeMain.style.width = "50%";
      threeMain.classList.add("block");
      threeMain.classList.remove("hidden");
    }
  });
  return (
    <>
      {/* <Environment background /> */}
      <OrbitControls
        dampingFactor={0.01}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 0.4}
        minDistance={25}
        maxDistance={40}
      />
      <directionalLight castShadow intensity={1} />
      <ambientLight intensity={0.5} />
      <Html position={[1, 5, 3]} occlude={[]} wrapperClass="label" center>
        <div className="text-center px-4">
          <h1 className="text-3xl transition text-white  whitespace-nowrap">
            Double click the CUBE!😇
          </h1>
        </div>
      </Html>
      <Suspense fallback={<FallbackComp scale={1.5} />}>
        <CubeLoader />
      </Suspense>
      <mesh rotation-x={-Math.PI * 0.5} receiveShadow position-y={-4.1}>
        <planeGeometry args={[50, 50]}></planeGeometry>
        <MeshReflectorMaterial
          resolution={1024}
          mirror={0.9}
        ></MeshReflectorMaterial>
      </mesh>
    </>
  );
}

export default ThreeApp;

function FallbackComp({ props }: any) {
  return (
    <mesh {...props}>
      <boxGeometry args={[7, 7, 7]}></boxGeometry>
      <meshNormalMaterial wireframe></meshNormalMaterial>
    </mesh>
  );
}
