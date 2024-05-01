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
import {
  CssSvg,
  HtmlSvg,
  JsSvg,
  MongoSvg,
  NextSvg,
  NodeSvg,
  PrismaSvg,
  ReactSvg,
  ReduxSvg,
  SanitySvg,
  SocketSvg,
  ThreeSvg,
  TrpcSvg,
  TsSvg,
} from "../Assets/svgComponents/index";

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

const toggleVar = {
  initial: {
    x: 0,
  },
  animate: {
    x: 24,
  },
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
  const [isToggled, setIsToggled] = useState<boolean>();
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
      <div className=" md:hidden flex flex-col gap-y-20 my-20">
        <div className="flex w-full justify-center relative items-center gap-x-5">
          <div className="cursor-pointer flex w-[60%] justify-end items-center gap-x-5">
            <h3 className="">Skills</h3>
            <div
              className={` h-6 outline  outline-2  ${
                isToggled ? "bg-[#f5e4bc]   outline-black" : "bg-black  "
              } w-12`}
              onClick={() => setIsToggled(!isToggled)}
            >
              <motion.div
                variants={toggleVar}
                animate={isToggled ? "animate" : "initial"}
                transition={{
                  duration: 1,
                  damping: 20,
                  stiff: 90,
                  type: "spring",
                }}
                className={` m-1 h-4 w-4 ${
                  isToggled ? "on bg-black" : "off bg-[#f5e4bc]"
                } `}
              ></motion.div>
            </div>
          </div>
          <h3 className="w-[50%]">Contribution</h3>
        </div>
        <div className="flex flex-wrap gap-x-5 min-[310px]:gap-x-8 gap-y-10 justify-center items-center">
          <HtmlSvg className={"h-32 w-32 object-fill"} />
          <CssSvg className={"h-32 w-32 object-fill"} />
          <JsSvg className={"h-32 w-32 object-fill"} />
          <ReactSvg className={"h-32 w-32 object-fill"} />
          <ThreeSvg className={"h-32 w-32 object-fill"} />
          <NextSvg className={"h-32 w-32 object-fill"} />
          <ReduxSvg className={"h-32 w-32 object-fill"} />
          <TrpcSvg className={"h-32 w-32 object-fill"} />
          <NodeSvg className={"h-32 w-32 object-fill"} />
          <TsSvg className={"h-32 w-32 object-fill"} />
          <SocketSvg className={"h-32 w-32 object-fill"} />
          <PrismaSvg className={"h-32 w-32 object-fill"} />
          <MongoSvg className={"h-32 w-32 object-fill"} />
          <SanitySvg className={"h-32 w-32 object-fill"} />
        </div>
        {/* <motion.img
            src="../public/assets/html.svg"
            alt="css_svg"
            className="h-32 w-32 object-fill"
          />
          <motion.img
            src="../public/assets/css.svg"
            alt="css_svg"
            className="h-32 w-32 object-fill"
          />
          <motion.img
            src="../public/assets/js.svg"
            alt="css_svg"
            className="h-32 w-32 object-fill"
          />
          <motion.img
            src="../public/assets/react.svg"
            alt="css_svg"
            className="h-32 w-32 object-fill"
          />
          <motion.img
            src="../public/assets/threejs.svg"
            alt="css_svg"
            className="h-32 w-32 object-fill"
          />
          <motion.img
            src="../public/assets/next.svg"
            alt="css_svg"
            className="h-32 w-32 object-fill"
          />
        </div>
        <motion.img
          src="../public/assets/typescript.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/trpc.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/socket.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/sanity.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/redux.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/prisma.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/node.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/mongodb.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        />
        <motion.img
          src="../public/assets/firebase.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        /> */}
        {/* <motion.img
          src="../public/assets/git.svg"
          alt="css_svg"
          className="h-32 w-32 object-fill"
        /> */}
      </div>
    </div>
  );
}

export default Skills;
