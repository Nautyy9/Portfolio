import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import "./three.css";
import { Leva, useControls } from "leva";
import { Outlet } from "react-router-dom";
import { OrbitControls, Stars } from "@react-three/drei";

function ThreeApp() {
  // const bg_texture = useLoader(THREE.TextureLoader, "assets/bg_4.jpeg");
  const dlRef = useRef<THREE.DirectionalLight>(null!);
  // useHelper(dlRef, THREE.DirectionalLightHelper, 1);
  const { color } = useControls("background", {
    color: { value: "#211414" },
  });
  const { blur, near, far } = useControls({
    blur: { value: 0.5, min: 0, max: 1 },
    near: { value: 1, min: 1, max: 1000 },
    far: { value: 1, min: 1, max: 1000 },
  });

  return (
    <>
      <div className="three-app">
        <Leva collapsed />
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 1,
            far: 100,
            position: [4, 10, 50],
          }}
        >
          <OrbitControls maxZoom={50} minZoom={10} enableZoom={false} />
          <directionalLight
            ref={dlRef}
            intensity={2}
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
          <ambientLight intensity={0} />
          <Stars
            radius={20}
            depth={10}
            count={100}
            factor={2}
            saturation={5}
            fade
            speed={2}
          />
          <Outlet />
        </Canvas>
      </div>
    </>
  );
}

export default ThreeApp;
