import React from "react";
import { AnimationControls, motion } from "framer-motion";
const svgVar = {
  initial: {
    pathLength: 0,
    pathOffset: 0,
    strokeDashoffset: 0,
    strokeDasharray: 0,
  },
  animate: {
    pathLength: 1,
    pathOffset: 2,
    strokeDashoffset: 0.3,
    strokeDasharray: 1,
  },
};

function NextSvg({
  className,
  from,
  anim,
}: {
  className: string;
  from: string;
  anim?: AnimationControls;
}) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      className={className}
    >
      {from === "skills" ? (
        <motion.path
          variants={svgVar}
          animate={anim}
          transition={{
            duration: 5,
            delay: 0,
            ease: "easeInOut",
            repeat: 2,
            repeatType: "reverse",
            repeatDelay: 0.1,
          }}
          fill="black"
          strokeWidth="0.5"
          stroke="rgba(255, 255, 255, 1) "
          strokeLinecap="round"
          d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
          className="transition-colors duration-200"
          opacity="1"
          style={{
            filter: "drop-shadow(0px 0px 2px white)",
          }}
        />
      ) : (
        <path
          fill="black"
          strokeWidth="1"
          stroke="rgba(255, 255, 255, 1) "
          strokeLinecap="round"
          d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
          className="transition-colors duration-200"
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        />
      )}
    </motion.svg>
  );
}

export default NextSvg;
