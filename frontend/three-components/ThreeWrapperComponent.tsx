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
import { ThreeHome } from "./index";
import { useRef } from "react";

import { Leva, useControls } from "leva";
import {
  HomeContent,
  AboutContent,
  ContactContent,
  SkillContent,
  WorkContent,
} from "../ThreeContent/index";
// import { Canvas, useLoader } from "@react-three/fiber";

function ThreeWrapperComponent() {
  return (
    <>
      <ScrollControls pages={4} damping={0.5}>
        <Scroll>
          <ThreeHome />
        </Scroll>
        <Scroll html>
          <HomeContent />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default ThreeWrapperComponent;
