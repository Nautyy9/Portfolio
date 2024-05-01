import { motion } from "framer-motion";
import React from "react";
const svgVar = {
  initial: {
    pathLength: 0,
    pathOffset: 1.5,
    strokeDashoffset: 0,
    strokeDasharray: 0,
  },
  animate: {
    pathLength: 1,
    pathOffset: 0,
    strokeDashoffset: 0.8,
    strokeDasharray: 0.5,
  },
};

function SocketSvg({ className }: { className: string }) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      version="1.1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <motion.g
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 3,
          delay: 0,
          ease: "easeInOut",
        }}
      >
        <motion.path
          // stroke="black"
          d="M96.4465116,7.38232558 C128.714419,-0.893023256 164.375814,3.92930233 192.833488,21.492093 C228.673488,42.9246512 252.070698,83.467907 252.666047,125.20186 C253.975814,167.352558 232.007442,209.146047 196.703256,232.066977 C157.410233,258.500465 103.054884,259.512558 62.9283721,234.388837 C22.027907,209.979535 -1.8455814,160.744186 4.28651163,113.473488 C9.22790698,63.5237209 47.8065116,19.467907 96.4465116,7.38232558 L96.4465116,7.38232558 L96.4465116,7.38232558 Z"
          fill="white"
        ></motion.path>
        <motion.path
          strokeWidth="3"
          // stroke="red"
          d="M91.5051163,27.8027907 C152.468837,3.39348837 227.244651,48.4613953 233.555349,113.830698 C243.378605,172.651163 194.56,232.424186 134.965581,234.150698 C78.2883721,239.806512 23.5162791,191.76186 21.9088372,134.846512 C17.6818605,88.7665116 48.0446512,43.0437209 91.5051163,27.8027907 L91.5051163,27.8027907 L91.5051163,27.8027907 Z"
          fill="black"
        ></motion.path>
        <motion.path
          // stroke="white"
          d="M97.6372093,121.689302 C124.963721,99.3637209 151.694884,76.264186 179.616744,54.5934884 C164.971163,77.0976744 149.908837,99.304186 135.263256,121.808372 C122.701395,121.867907 110.139535,121.867907 97.6372093,121.689302 L97.6372093,121.689302 L97.6372093,121.689302 Z"
          fill="white"
        ></motion.path>
        <motion.path
          strokeWidth="2"
          // stroke="red"
          d="M120.736744,134.132093 C133.35814,134.132093 145.92,134.132093 158.48186,134.310698 C130.976744,156.517209 104.364651,179.795349 76.3832558,201.406512 C91.0288372,178.902326 106.091163,156.636279 120.736744,134.132093 L120.736744,134.132093 L120.736744,134.132093 Z"
          fill="white"
        ></motion.path>
      </motion.g>
    </svg>
  );
}

export default SocketSvg;
