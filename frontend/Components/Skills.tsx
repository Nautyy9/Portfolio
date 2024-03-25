import React, { useCallback, useEffect, useRef, useState } from "react";
import { SkillUtils, ScrollElem } from "../utils/SkillUtils";
import { frontMap, backMap, dbMap, utilityMap } from "../utils/skillsMapper";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const cardVar = {
  hidden: { opacity: 0, scale: 0 },
  animate: (val: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5 * val,
      type: "spring",
      ease: "easeInOut",
    },
  }),
};
// const innerVar = {
//   hidden: {
//     scale: 0,
//     opacity: 0,
//   },
//   animate: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.2,
//       type: "spring",
//       ease: "easeInOut",
//     },
//   },
// };

const springConfig = {
  stiffness: 100,
  damping: 60,
  restDelta: 0.01,
};
const newConfig = {
  stiffness: 20,
  damping: 60,
  restDelta: 0.01,
};

function Skills() {
  // const sections = ["S", "e", "c", "t", "i", "o", "n", "🙃", "3"];
  const card_container = useRef<HTMLDivElement | null>(null!);
  const [scrollX, setScrollX] = useState({
    fX: [0, 0.05],
    bX: [0.35, 0.55],
    uX: [0.55, 0.7],
    dX: [0.7, 0.85],
  });
  const skill_container = useRef<HTMLDivElement | null>(null!);
  const { scrollYProgress } = useScroll({
    target: skill_container,
    offset: ["start end", "end center"],
  });
  // console.log(scrollX);
  const scaleCard = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 1]),
    newConfig
  );

  const frontendX = useSpring(
    useTransform(scrollYProgress, scrollX.fX, [2000, -150]),
    springConfig
  );
  const backendX = useSpring(
    useTransform(scrollYProgress, scrollX.bX, [1500, -150]),
    springConfig
  );
  const utiliiesX = useSpring(
    useTransform(scrollYProgress, scrollX.uX, [1500, -150]),
    springConfig
  );
  const dbX = useSpring(
    useTransform(scrollYProgress, scrollX.dX, [1500, -160]),
    springConfig
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  useEffect(() => {
    once();
  }, []);
  useEffect(() => {
    const resize = (window.onresize = (e) => {
      once();
    });
    return () => window.removeEventListener("resize", resize);
  }, [window.onresize]);
  const once = useCallback(() => {
    if (window.innerWidth <= 1229) {
      setScrollX((prev) => ({
        ...prev,
        fX: [0, 0.2],
        bX: [0.25, 0.45],
        uX: [0.4, 0.65],
        dX: [0.65, 0.85],
      }));
    } else if (window.innerWidth <= 1671 && window.innerWidth > 1229) {
      setScrollX((prev) => ({
        ...prev,
        fX: [0, 0.3],
        bX: [0.3, 0.5],
        uX: [0.5, 0.6],
        dX: [0.6, 0.8],
      }));
    } else {
      setScrollX((prev) => ({
        ...prev,
        fX: [0, 0.2],
        bX: [0.2, 0.55],
        uX: [0.55, 0.7],
        dX: [0.7, 0.85],
      }));
    }
  }, [scrollX]);
  // * note for future don't have nested child inside skill component since gsap has trigger on it

  return (
    <div
      ref={skill_container}
      id="skills"
      className=" bg-[#171717] text-[#dfd3c3] flex-col items-center h-max skills relative overflow-hidden shadow-skills   "
    >
      <div className="flex w-max mt-10 ">
        <SkillUtils />
        <SkillUtils />
      </div>
      <div className="hidden relative md:flex flex-wrap md:gap-14 md+:gap-20 mx-auto w-5/6 items-end  justify-around py-20 ">
        <ScrollElem
          style={{ x: frontendX }}
          className="frontend"
          content="Front-End"
        />

        {frontMap.map((val, i) => {
          return (
            <motion.div
              variants={cardVar}
              initial="hidden"
              whileInView="animate"
              viewport={{ amount: 0.5, once: true }}
              custom={i}
            >
              {val}
            </motion.div>
          );
        })}
        <ScrollElem
          style={{ x: backendX }}
          className="backend"
          content="Back-End"
        />

        {backMap.map((val, i) => {
          return (
            <motion.div
              className=""
              variants={cardVar}
              initial="hidden"
              whileInView="animate"
              viewport={{ amount: 0.7, once: true }}
              custom={i}
            >
              {val}
            </motion.div>
          );
        })}
        <ScrollElem
          style={{ x: utiliiesX }}
          className="utilities "
          content="Utilities"
        />
        {utilityMap.map((val, i) => {
          return (
            <motion.div
              className=""
              variants={cardVar}
              initial="hidden"
              whileInView="animate"
              viewport={{ amount: 0.8, once: true }}
              custom={i}
            >
              {val}
            </motion.div>
          );
        })}
        <ScrollElem
          style={{ x: dbX }}
          className="extras  "
          content="DB-CMS-ORM"
        />
        {dbMap.map((val, i) => {
          return (
            <motion.div
              className=""
              variants={cardVar}
              initial="hidden"
              whileInView="animate"
              viewport={{ amount: 1, once: true }}
              custom={i}
            >
              {val}
            </motion.div>
          );
        })}
      </div>
      <div className=" md:hidden"></div>
      {/* <div className="h-full absolute right-5  top-0 hidden xs+:flex justify-center text-2xl  my-[-100px] md+:my-auto items-center text-white tracking-wider">
        <button className="rotate-[180deg] -mt-80 break:mt-0 xl:p-2 text-white xl:py-4 bg-transparent">
          {sections.map((section, id) => (
            <h1
              key={id}
              className="sec_part hover:scale-125 transition duration-200"
            >
              {section}
            </h1>
          ))}
        </button> 
      </div> */}
    </div>
  );
}

export default Skills;
