import React from "react";
import { AnimationControls, motion } from "framer-motion";
const svgVar = {
  initial: {
    pathLength: 0,
    pathOffset: 2,
    strokeDashoffset: 0,
    strokeDasharray: 0,
  },
  animate: {
    pathLength: 1,
    pathOffset: 0,
    strokeDashoffset: 0.3,
    strokeDasharray: 0.8,
  },
};

function MongoSvg({
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
            duration: 3,
            delay: 0,
            ease: "easeInOut",
            repeat: 2,
            repeatType: "reverse",
            repeatDelay: 0,
          }}
          fill="black"
          strokeWidth="0.5"
          stroke="lightgreen"
          strokeLinecap="round"
          d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z M23 28H25V36H23z M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z "
          className="transition-colors duration-200"
          opacity="1"
          style={{
            filter: "drop-shadow(0px 0px 4px lightgreen)",
          }}
        />
      ) : (
        <path
          fill="lightgreen"
          stroke="black"
          strokeLinecap="round"
          d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z M23 28H25V36H23z M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z "
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

export default MongoSvg;
