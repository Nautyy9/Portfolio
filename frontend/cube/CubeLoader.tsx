import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
function CubeLoader() {
  const model = useGLTF("static/steel_cube/scene.gltf");
  model.scene.castShadow = true;
  model.scene.receiveShadow = true;

  const groupContainerRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    groupContainerRef.current!.rotation.y += delta * 0.3;
    const angle = state.clock.getElapsedTime();

    groupContainerRef.current!.position.y += Math.sin(angle) * 0.003;

    groupContainerRef.current!.position.x += Math.cos(angle) * 0.005;
  });

  return (
    <group
      ref={groupContainerRef}
      name="groupContainer"
      onPointerEnter={() => (document.body.style.cursor = "pointer")}
      onPointerLeave={() => (document.body.style.cursor = "default")}
      onDoubleClick={() => {
        window.location.href = "/three-js";
      }}
    >
      <primitive ref={modelRef} object={model.scene} scale={3} />

      <mesh position-z={3}>
        <planeGeometry args={[5, 5]}></planeGeometry>
        <meshNormalMaterial
          wireframe
          side={THREE.DoubleSide}
        ></meshNormalMaterial>
      </mesh>
      <mesh position-z={-3}>
        <planeGeometry args={[5, 5]}></planeGeometry>
        <meshNormalMaterial
          wireframe
          side={THREE.DoubleSide}
        ></meshNormalMaterial>
      </mesh>
      <mesh rotation-y={Math.PI / 2} position-x={-3}>
        <planeGeometry args={[5, 5]}></planeGeometry>
        <meshNormalMaterial
          wireframe
          side={THREE.DoubleSide}
        ></meshNormalMaterial>
      </mesh>
      <mesh rotation-x={Math.PI / 2} position-y={3}>
        <planeGeometry args={[5, 5]}></planeGeometry>
        <meshNormalMaterial
          wireframe
          side={THREE.DoubleSide}
        ></meshNormalMaterial>
      </mesh>
      <mesh rotation-x={Math.PI / 2} position-y={-3}>
        <planeGeometry args={[5, 5]}></planeGeometry>
        <meshNormalMaterial
          wireframe
          side={THREE.DoubleSide}
        ></meshNormalMaterial>
      </mesh>
      <mesh rotation-y={Math.PI / 2} position-x={3}>
        <planeGeometry args={[5, 5]}></planeGeometry>
        <meshNormalMaterial
          wireframe
          side={THREE.DoubleSide}
        ></meshNormalMaterial>
      </mesh>
    </group>
  );
}

export default CubeLoader;
