import { Leva } from "leva";
import CubeBackground from "./CubeBackgroud";
import React, { MutableRefObject } from "react";
import { Canvas } from "@react-three/fiber";

type all = {
  cubeRef: MutableRefObject<HTMLDivElement | null>;
};

export default function CubeCanvas({ cubeRef }: all) {
  return (
    <div
      ref={cubeRef}
      className="z-50 w-1/2 h-full app_container cursor-pointer "
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [4, 10, 50],
        }}
      >
        <CubeBackground />
      </Canvas>
    </div>
  );
}
