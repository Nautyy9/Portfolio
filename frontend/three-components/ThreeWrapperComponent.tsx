import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  Stars,
  useHelper,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { ThreeAbout, ThreeHome } from "./index";
import { useRef } from "react";

import { Leva, useControls } from "leva";
import {
  HomeContent,
  AboutContent,
  ContactContent,
} from "../ThreeContent/index";
// import { Canvas, useLoader } from "@react-three/fiber";

function ThreeWrapperComponent() {
  return (
    <>
      <ScrollControls pages={3} damping={0.5}>
        <Scroll>
          <ThreeHome />
        </Scroll>
        <Scroll html>
          {/* <HomeContent />
          <AboutContent />
          <ContactContent /> */}
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default ThreeWrapperComponent;
