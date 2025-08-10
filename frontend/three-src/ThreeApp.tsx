import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import "./three.css";
import { Leva, useControls } from "leva";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  CameraControls,
  Cloud,
  Clouds,
  OrbitControls,
  Stars,
  useScroll,
} from "@react-three/drei";
import { store } from "../stateManager/valtio";

function ThreeApp() {
  let { controls } = store;
  controls = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [pathname]);
  // const bg_texture = useLoader(THREE.TextureLoader, "https://utfs.io/f/e5ace38f-8203-45ef-9e62-52a8a81ada04-3yb9d1.jpg");
  const dlRef = useRef<THREE.DirectionalLight>(null!);

  const { color } = useControls("background", {
    color: { value: "#211414" },
  });

  useEffect(() => {
    const handleErrors = (event: any) => {
      console.error("Three.js error:", event.error);
    };
    window.addEventListener("error", handleErrors);
    return () => window.removeEventListener("error", handleErrors);
  }, []);
  // useHelper(dlRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <div className="three-app " style={{ fontFamily: "Bluu" }}>
        {/* <h1 className="w-full h-full flex items-center justify-center text-white ">
          Under Development
        </h1> */}
        <Leva collapsed />
        <Canvas
          aria-label="3D Portfolio Scene"
          role="img"
          shadows
          camera={{
            fov: 45,
            near: 1,
            far: 100,
            position: [4, 10, 50],
          }}
        >
          {/* <CameraControls /> */}
          <OrbitControls
            ref={controls}
            maxZoom={50}
            minZoom={10}
            enableZoom={false}
          />
          <directionalLight
            ref={dlRef}
            intensity={1}
            castShadow
            position={[0, 30, 50]}
            lookAt={() => new THREE.Vector3(0, 0, 0)}
          />
          {/* <Environment
        blur={blur}
        map={bg_texture}
        background
        near={near}
        far={far}
        resolution={64}
      ></Environment> */}
          <color attach="background" args={[color]} />
          <ambientLight intensity={0.1} />
          <Stars
            radius={20}
            depth={10}
            count={100}
            factor={2}
            saturation={5}
            fade
            speed={2}
          />

          {/* <ambientLight intensity={Math.PI / 1.5} /> */}
          {/* <spotLight
            position={[0, 40, 0]}
            decay={0}
            distance={45}
            penumbra={1}
            intensity={100}
          />
          <spotLight
            position={[-20, 0, 10]}
            color="red"
            angle={0.15}
            decay={0}
            penumbra={-1}
            intensity={30}
          /> */}
          {/* <spotLight
            position={[20, -10, 10]}
            color="red"
            angle={0.2}
            decay={0}
            penumbra={-1}
            intensity={20}
          /> */}
          <Outlet />
        </Canvas>
      </div>
    </>
  );
}

export default ThreeApp;
