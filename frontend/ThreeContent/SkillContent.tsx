import React, { Suspense } from "react";

// import { Svg as logo } from "@react-three/drei";
// import CssLogo from "../public/assets/css.svg";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export default function SkillContent() {
  return (
    <div
      style={{
        height: "100vh",
        position: "absolute",
        width: "100vw",
        top: "300vh",
      }}
    >
      <Suspense fallback={null}></Suspense>
    </div>
  );
}
