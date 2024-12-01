import { Cloud, Clouds, Scroll, ScrollControls } from "@react-three/drei"
import * as THREE from "three"
import { ThreeHome } from "./index"
import { useEffect, useRef } from "react"

// import { Leva, useControls } from "leva";
// import {
//   HomeContent,
//   AboutContent,
//   ContactContent,
// } from "../ThreeContent/index";
import { useThree } from "@react-three/fiber"
import { store } from "../stateManager/valtio"
// import { Canvas, useLoader } from "@react-three/fiber";

function ThreeWrapperComponent() {
  const { controls } = store
  const regress = useThree((state) => state.performance.regress)
  // const { cloudColor, x, y, z, ...config } = useControls("background", {
  //   seed: { value: 10, min: 1, max: 100, step: 1 },
  //   segments: { value: 30, min: 1, max: 80, step: 1 },
  //   volume: { value: 14, min: 0, max: 100, step: 0.1 },
  //   opacity: { value: 0.4, min: 0, max: 1, step: 0.01 },
  //   fade: { value: 10, min: 0, max: 400, step: 1 },
  //   growth: { value: 10, min: 0, max: 20, step: 1 },
  //   speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   x: { value: 10, min: -100, max: 100, step: 1 },
  //   y: { value: 0, min: -100, max: 100, step: 1 },
  //   z: { value: 0, min: -100, max: 100, step: 1 },
  //   cloudColor: "white",
  // });
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    // if(control())
    // controls().current.addEventListener("change", regress);
    // return () => controls?.current.removeEventListener("change", regress);
  }, [regress])
  return (
    <>
      <ScrollControls pages={7} damping={0.5}>
        <Scroll>
          <ThreeHome />
          <Clouds
            // ref={cloudsRef}
            material={THREE.MeshLambertMaterial}
            position={[0, -100, 0]}
            limit={10}
          >
            <Cloud
              concentrate="inside"
              color={"white"}
              volume={70}
              opacity={0.8}
              position={[0, -15, 50]}
              bounds={[5, 0, 0]}

              // setting position here would make the postion of one cloud w.r.t to other i.e, seperation distance
            />
          </Clouds>
        </Scroll>
        <Scroll html>
          {/* <HomeContent />
          <AboutContent />
          <ContactContent /> */}
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default ThreeWrapperComponent
