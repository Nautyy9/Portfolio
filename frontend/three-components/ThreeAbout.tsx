import React, { Suspense, useState } from "react";
import { Mage } from "../gltf_jsx";
import { Html, useGLTF } from "@react-three/drei";

function ThreeAbout() {
  const humanModel = useGLTF("/static/Animations/human.glb");
  const [active, setActive] = useState<boolean>(true);
  // const scroll1 = useGLTF(
  //   "/static/mage_assets/hand_painted_-_scroll/scene.gltf"
  // );
  // const decor = useGLTF("/static/mage_assets/fantasy_decor_props/scene.gltf");
  // const scroll2 = useGLTF(
  //   "/static/mage_assets/hand_painted_-_scroll/scene.gltf"
  // );
  // * scroll2 === scroll1

  const scroll3 = useGLTF(
    "/static/mage_assets/magic_scroll_and_pen_with_feather/scene.gltf"
  );

  const scroll4 = useGLTF("/static/mage_assets/very_useful_scroll/scene.gltf");
  return (
    <>
      {/* <directionalLight intensity={1} />
      <ambientLight></ambientLight> */}
      <Html position={[-45, 10, 0]}>
        <div className="h-screen w-screen ">
          <div
            style={{ backgroundColor: "rgb(168 85 247)" }}
            className={` ${
              active && " "
            } flex  gap-x-5 w-max py-2 px-4 rounded-lg relative mb-10`}
          >
            <span
              style={
                active
                  ? {
                      transitionDuration: "3",
                      transitionTimingFunction: "ease-in",
                      transition: "ease-in",
                      width: "120px",
                      height: "42px",
                      position: "absolute",
                    }
                  : {
                      transitionDuration: "3",
                      transitionTimingFunction: "ease-in",
                      transition: "ease-in",
                      width: "100px",
                      height: "42px",
                      position: "absolute",
                      left: "57%",
                    }
              }
              className={`-z-10  border-white border-2 absolute  transition-transform duration-300  bg-transparent content-none rounded-lg ${
                active && " "
              }  `}
            ></span>
            <button
              className={`z-10 hover:text-white rounded-lg text-2xl py-1 px-4 transition-colors  duration-300 ease-in  text-center ${
                active ? "  text-white " : ""
              } `}
              onClick={() => setActive(true)}
            >
              Resume
            </button>
            <button
              className={` hover:text-white py-1 px-4 rounded-lg text-2xl transition-colors duration-300 ease-in  text-center ${
                !active ? "  text-white" : ""
              } `}
              onClick={() => setActive(() => false)}
            >
              About
            </button>
          </div>

          {!active && (
            <div className="absolute  inline-block">
              <div className="text-white flex flex-col h-full  gap-y-5 w-2/3">
                <h1>I Might be the developer you are looking for</h1>
                <h3>
                  Partnering with agencies and brands that value design and
                  development integrity.
                </h3>
                <h3>
                  Delivering highly executed front-end user experiences by
                  paying close attention to the nuances of design, optimization,
                  and performance.
                </h3>
              </div>
            </div>
          )}
        </div>
      </Html>
      <mesh
        visible={active}
        rotation={[0, Math.PI / 14, 0]}
        position={[-24, 0, 0]}
        scale-y={5}
        scale-x={8}
        scale-z={4}
      >
        <primitive object={scroll4.scene}></primitive>
      </mesh>
      <Suspense fallback={null}>
        <mesh
          scale={10}
          position={[20, -10, 0]}
          // rotation={[-Math.PI * 0.55, 0, 1]}
        >
          <primitive occlude object={humanModel.scene}></primitive>
        </mesh>
      </Suspense>
    </>
  );
}

export default ThreeAbout;
