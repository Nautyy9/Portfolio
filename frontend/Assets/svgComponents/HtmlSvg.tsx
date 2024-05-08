import { AnimationControls, motion } from "framer-motion";
import React, { useEffect } from "react";

const htmlVar = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 2,
  },
};

function HtmlSvg({
  className,
  from,
  anim,
}: {
  className: string;
  from: string;
  anim?: AnimationControls;
}) {
  useEffect(() => {});
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="80%"
      height="80%"
      className={className}
      viewBox="0 0 50 50"
    >
      {from === "skills" ? (
        <motion.path
          variants={htmlVar}
          animate={anim}
          transition={{
            duration: 3,
          }}
          fill="#000000"
          fillOpacity={1}
          strokeWidth="0.5px"
          stroke="darkorange"
          strokeLinecap="square"
          d="M 9 7 L 12 41 L 26 45 L 40 41 C 41 29.667 42 18.333 43 7 L 9 7 z M 11.183594 9 L 40.816406 9 L 38.128906 39.455078 L 26 42.919922 L 13.871094 39.455078 L 11.183594 9 z M 18.550781 15 L 17.589844 27 L 30.580078 27 L 30.169922 32 L 26 32.619141 L 21.880859 32 L 21.699219 30 L 17.839844 30 L 18.230469 35 L 25.990234 37 L 33.759766 35 L 34.75 23 L 22.089844 23 L 22.410156 19 L 30.769531 19 L 31 21 L 34.699219 21 L 34 15 L 18.550781 15 z"
          className=""
          style={{
            filter: "drop-shadow(0px 2px 4px darkorange)",
          }}
          opacity="1"
        ></motion.path>
      ) : (
        <path
          fill="darkorange"
          stroke="black"
          strokeWidth={0.5}
          strokeLinecap="square"
          d="M 9 7 L 12 41 L 26 45 L 40 41 C 41 29.667 42 18.333 43 7 L 9 7 z M 11.183594 9 L 40.816406 9 L 38.128906 39.455078 L 26 42.919922 L 13.871094 39.455078 L 11.183594 9 z M 18.550781 15 L 17.589844 27 L 30.580078 27 L 30.169922 32 L 26 32.619141 L 21.880859 32 L 21.699219 30 L 17.839844 30 L 18.230469 35 L 25.990234 37 L 33.759766 35 L 34.75 23 L 22.089844 23 L 22.410156 19 L 30.769531 19 L 31 21 L 34.699219 21 L 34 15 L 18.550781 15 z"
          className="transition-colors duration-200"
          opacity="1"
          // strokeDashoffset="1"
          // strokeDasharray="0px 0px"
        />
      )}
    </motion.svg>
  );
}

export default HtmlSvg;
