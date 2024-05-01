import { motion } from "framer-motion";

function CssSvg({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      className={className}
    >
      <motion.path
        fill="#000000"
        initial={{
          pathLength: 0,
          pathOffset: 1.8,
          strokeDashoffset: 0,
          strokeDasharray: 0,
          stroke: "white",
        }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          strokeDashoffset: 0.3,
          strokeDasharray: 0.8,
          stroke: "blue",
        }}
        transition={{
          duration: 3,
          delay: 0,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        strokeWidth="0.8"
        stroke="rgba(3, 98, 252)"
        strokeLinecap="round"
        d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"
        className="transition-colors duration-200"
        opacity="1"
        strokeDasharray="1px 1px"
      />
    </svg>
  );
}

export default CssSvg;
