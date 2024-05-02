import { motion } from "framer-motion";
const svgVar = {
  initial: {
    pathLength: 0,
    pathOffset: 0,
    // strokeDashoffset: 0,
    // strokeDasharray: 0,
    stroke: "orange",
  },
  animate: {
    pathLength: 1,
    pathOffset: 1,
    // strokeDashoffset: 0.7,
    // strokeDasharray: 1,
    stroke: "white",
  },
};
function ThreeSvg({ className, from }: { className: string; from: string }) {
  return (
    <motion.svg
      fill="black"
      height="2500"
      width="2500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="27 26 173.23 174.94"
      className={className}
    >
      <motion.g
        variants={svgVar}
        initial={{ pathLength: 0, strokeDasharray: "0 0", strokeDashoffset: 0 }}
        animate={{
          pathLength: 1,
          strokeDasharray: "1 1",
          strokeDashoffset: 0.2,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: 1,
          repeatType: "loop",
          repeatDelay: 0.5,
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        stroke="white"
        strokeWidth="3"
        opacity={1}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      >
        <motion.path
          animate="animate"
          initial="initial"
          style={{
            filter: "drop-shadow(0px 2px 6px white)",
          }}
          d="M70.213 200.94L27 26l173.23 49.874z"
        />
        <motion.path
          animate="animate"
          initial="initial"
          style={{
            filter: "drop-shadow(0px 2px 2px white)",
          }}
          d="M113.583 50.942l21.591 87.496-86.567-24.945z"
        />
        <motion.path
          animate="initial"
          initial="animate"
          style={{
            filter: "drop-shadow(0px 2px 2px white)",
          }}
          d="M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zM156.663 63.26l10.724 43.465-43.008-12.346zM92.108 125.39l10.724 43.465-43.008-12.346z"
        />
      </motion.g>
    </motion.svg>
  );
}

export default ThreeSvg;
