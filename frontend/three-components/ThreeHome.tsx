import {
  useScroll,
  Sparkles,
  useFBX,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Room, Carpet, Mage, FinalModel } from "../gltf_jsx/index";
import { GiCoinsPile } from "react-icons/gi";

function ThreeHome() {
  const scroll = useScroll();
  const sparkleRef = useRef<THREE.Points<
    THREE.BufferGeometry,
    THREE.Material | THREE.Material[]
  > | null>(null);

  const roomRef = useRef<THREE.Group | null>(null);

  const [sparkle, setSparkle] = useState<boolean>(true);
  const ballref = useRef<THREE.Mesh | null>(null);
  // const ballModel = useFBX("/static/wizards_room/last_one.fbx");

  // const { animations: ballAnim } = ballModel;
  // const { actions: ballAction } = useAnimations<THREE.AnimationClip>(
  // ballAnim,
  //   ballref
  // );

  // useEffect(() => {
  //   if (ballAction["SphereAction"]) {
  //     console.log(ballAction);
  //     ballAction["SphereAction"].reset().setDuration(15).fadeIn(0.5).play();
  //   }

  //   return () => {
  //     ballAction["SphereAction"]!.reset().fadeOut(0.5).stop();
  //   };
  // });

  useFrame((state, delta) => {
    const position = ballref.current?.position;
    // console.log(position);
    // console.log(scroll.offset, tl.current.duration())
    if (scroll.offset > 0) {
      setSparkle(false);
    }
    if (scroll.offset === 0) {
      setSparkle(true);
    }
    let angle = state.clock.getElapsedTime();
    if (sparkleRef.current) {
      sparkleRef.current.position.y += Math.sin(angle) * 0.01;
      sparkleRef.current.position.x += Math.sin(angle) * 0.02;
      // sparkleRef.current.position.y = -Math.sin(1) * 0.04;
    }
  });

  return (
    <>
      <Suspense fallback={null}>
        {/* <Mage
          scale={10}
          position={[-25, -10, 0]}
          rotation={[-Math.PI * 0.55, 0, 1]}
        />

        <mesh
          rotation-y={Math.PI / 2}
          ref={ballref}
          position={[-26, -10, 0]}
          scale={0.09}
        ></mesh> */}
        {/* <primitive
          object={ballModel}
          position={[-22, 3, 10]}
          scale={10}
          ref={ballref}
        /> */}
        <Carpet scale={5} rotation-y={Math.PI / 2} position={[-24, -15, 3]} />
        {sparkle && (
          <Sparkles
            count={1}
            ref={sparkleRef}
            rotation-y={Math.PI / 2}
            size={500}
            noise={0}
            // attach={ballref.current}
            position={[-22, 3, 10]}
            speed={1}
          />
        )}
        <FinalModel
          scale={10}
          position={[-25, -12, 0]}
          rotation={[0, 0.5, 0]}
        />
      </Suspense>

      <Suspense fallback={null}>
        <Room
          roomRef={roomRef}
          scale={[8, 8, 8]}
          position={[0, -18, 10]}
          rotation-z={0.6}
          rotation-x={-Math.PI * 0.5}
        />
        {/* <Sparkles
          color={"hotpink"}
          scale={[30, -30, 40]}
          speed={0.8}
          size={50}
          position={[20, 0, 5]}
          count={20}
          // onWheel={(e) => console.log(e)}
        /> */}
      </Suspense>
    </>
  );
}
export default ThreeHome;

// function MageFallbackMesh(props: THREE.Mesh | undefined) {
//   return (
//     <mesh position={[-25, -5, 7]} scale={2}>
//       <boxGeometry args={[10, 10, 5]}></boxGeometry>
//       <meshBasicMaterial wireframe color={"lightblue"} />
//     </mesh>
//   );
// }

// function HomeFallbackMesh(props: THREE.Mesh | undefined) {
//   return (
//     <mesh position={[-18, -17, 15]}>
//       <boxGeometry args={[12, 12, 12]}></boxGeometry>
//       <meshBasicMaterial wireframe color={"brown"} />
//     </mesh>
//   );
// }
