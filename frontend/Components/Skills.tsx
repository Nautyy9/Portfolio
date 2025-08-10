import { useEffect, useRef, useState } from "react";
import { SkillUtils, ScrollElem, ImageElem } from "../utils/SkillUtils";
// import { backMap, dbMap, utilityMap, frontMap } from "../utils/skillsMapper"
import {
  AnimatePresence,
  motion,
  useAnimation,
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
  ExpressSvg,
  PythonSvg,
  ThreeSvg,
  TrpcSvg,
  TsSvg,
} from "../Assets/svgComponents/index";
import { imgTypesSkills } from "types/imageTypes";

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

const iconVar = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  },
  initial: {
    opacity: 0,
  },
};

function Skills() {
  // const sections = ["S", "e", "c", "t", "i", "o", "n", "🙃", "3"];
  // const image_container = useRef<HTMLDivElement | null>(null!)
  const [scrollX, setScrollX] = useState({
    fX: [0, 0.05],
    bX: [0.35, 0.55],
    uX: [0.55, 0.7],
    dX: [0.7, 0.85],
  });
  const skill_container = useRef<HTMLDivElement | null>(null!);
  const [isToggled, setIsToggled] = useState<boolean>();
  const [source, setSource] = useState<imgTypesSkills>({
    htmlImg: "https://utfs.io/f/ff41f5e0-c0b8-4c2c-9a1f-9d17852cdfe7-1wvcb.png",
    cssImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",
    expressImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    jsImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    mongoImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    nextImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    nodeImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    prismaImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    reactImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",
    firebaseImg:
      "https://utfs.io/f/66f4919f-9308-4d21-985a-fd8165ec51bc-9bekft.png",
    reactqueryImg:
      "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    sanityImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    socketImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    threeImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",

    tsImg: "https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z",
  });
  const { scrollYProgress } = useScroll({
    target: skill_container,
    offset: ["start end", "end center"],
  });

  const [partitions, setPartitions] = useState<number>();

  const iconAnim = useAnimation();
  const cardAnim = useAnimation();
  const htmlSvgAnim = useAnimation();
  const cssSvgAnim = useAnimation();
  const jsSvgAnim = useAnimation();
  const mongoSvgAnim = useAnimation();
  const reduxSvgAnim = useAnimation();
  const reactSvgAnim = useAnimation();
  const trpcSvgAnim = useAnimation();
  const prismaSvgAnim = useAnimation();
  const tsSvgAnim = useAnimation();
  const nodeSvgAnim = useAnimation();
  const nextSvgAnim = useAnimation();
  const pythonSvgAnim = useAnimation();
  const expressSvgAnim = useAnimation();

  useEffect(() => {
    if (isToggled) {
      iconAnim.start("initial");
      cardAnim.start("animate");
      htmlSvgAnim.start("initial");
      cssSvgAnim.start("initial");
      jsSvgAnim.start("initial");
      mongoSvgAnim.start("initial");
      reduxSvgAnim.start("initial");
      reactSvgAnim.start("initial");
      trpcSvgAnim.start("initial");
      prismaSvgAnim.start("initial");
      tsSvgAnim.start("initial");
      nodeSvgAnim.start("initial");
      nextSvgAnim.start("initial");
      pythonSvgAnim.start("initial");
      expressSvgAnim.start("initial");
    } else {
      iconAnim.start("animate");
      cardAnim.start("initial");
      htmlSvgAnim.start("animate");
      cssSvgAnim.start("animate");
      jsSvgAnim.start("animate");
      mongoSvgAnim.start("animate");
      reduxSvgAnim.start("animate");
      reactSvgAnim.start("animate");
      trpcSvgAnim.start("animate");
      prismaSvgAnim.start("animate");
      tsSvgAnim.start("animate");
      nodeSvgAnim.start("animate");
      nextSvgAnim.start("animate");
      pythonSvgAnim.start("animate");
      expressSvgAnim.start("animate");
    }
  });

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

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });
  useEffect(() => {
    resizeFunction();
    checkWrapping();

    return () => {
      resizeFunction(), checkWrapping();
    };
  }, []);

  useEffect(() => {
    const resize = (window.onresize = (e) => {
      debounce(resizeFunction)();
      debounce(checkWrapping)();
    });

    return () => window.removeEventListener("resize", resize);
  }, [window.onresize]);

  function checkWrapping() {
    // if (frontArr1 && frontArr1.length > 0) setFrontArr1([])
    // if (frontArr2 && frontArr2.length > 0) setFrontArr2([])
    // if (frontArr3 && frontArr3.length > 0) setFrontArr3([])
    if (window.matchMedia("(max-width: 1229px)").matches) {
      setPartitions(3);
    } else if (
      window.matchMedia("(min-width: 1229px) and (max-width: 1670px)").matches
    ) {
      setPartitions(2);
    } else {
      setPartitions(1);
    }
  }
  // useLayoutEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSource(htmlImage);
  //     console.log(htmlImage);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  const resizeFunction = () => {
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
  };

  function debounce(fn: () => void) {
    let timer: NodeJS.Timeout;
    return function () {
      if (timer) {
        clearTimeout(timer);
      } else {
        timer = setTimeout(() => fn(), 200);
      }
    };
  }

  // * note for future don't have nested child inside skill component since gsap has trigger on it
  return (
    <AnimatePresence mode="sync">
      <div
        ref={skill_container}
        id="skills"
        className=" bg-[#171717] text-[#dfd3c3] flex-col items-center h-max relative overflow-hidden"
      >
        <div className="flex w-max mt-10">
          <SkillUtils />
          <SkillUtils />
        </div>
        <div className="hidden relative md:flex flex-wrap md:gap-14 md+:gap-20 mx-auto w-5/6 items-end  justify-around py-20 overflow-visible ">
          <ScrollElem
            style={{ x: frontendX }}
            className="frontend"
            content="Front-End"
          />
          <>
            <ImageElem
              index={0}
              className="object-cover"
              src={source.htmlImg}
              setSource={setSource}
              content="HTML"
            />

            <ImageElem
              index={1}
              className="object-contain"
              src={source.cssImg}
              setSource={setSource}
              content="CSS"
            />
            <ImageElem
              index={partitions === 1 ? 2 : partitions === 2 ? 2 : 0}
              className="object-cover"
              src={source.jsImg}
              setSource={setSource}
              content="JAVA SCRIPT"
            />
            <ImageElem
              index={partitions === 1 ? 3 : partitions === 2 ? 0 : 1}
              className="object-contain"
              src={source.reactImg}
              setSource={setSource}
              content="REACTJS"
            />
            <ImageElem
              index={partitions === 1 ? 0 : partitions === 2 ? 1 : 0}
              className="object-contain"
              src={source.threeImg}
              setSource={setSource}
              content="THREE.JS"
            />
            <ImageElem
              index={partitions === 1 ? 1 : partitions === 2 ? 2 : 1}
              className="object-cover"
              src={source.nextImg}
              setSource={setSource}
              content="NEXT.JS"
            />
          </>

          <ScrollElem
            style={{ x: backendX }}
            className="backend"
            content="Back-End"
          />

          <>
            <ImageElem
              index={0}
              className="object-contain"
              src={source.expressImg}
              content="EXPRESS.JS"
              setSource={setSource}
            />
            <ImageElem
              index={partitions === 3 ? 0 : 2}
              className="object-contain"
              src={source.nodeImg}
              content="NODEJS"
              setSource={setSource}
            />
          </>
          <ScrollElem
            style={{ x: utiliiesX }}
            className="utilities "
            content="Utilities"
          />
          <>
            <ImageElem
              index={0}
              className="object-cover"
              src={source.tsImg}
              setSource={setSource}
              content="TYPESCRIPT"
            />

            <ImageElem
              index={1}
              className="object-contain"
              src={source.socketImg}
              setSource={setSource}
              content="SOCKET.IO"
            />

            <ImageElem
              index={partitions === 3 ? 0 : 2}
              className="object-contain"
              src={source.reactqueryImg}
              setSource={setSource}
              content="REACT QUERY"
            />
          </>
          <ScrollElem
            style={{ x: dbX }}
            className="extras  "
            content="DB-CMS-ORM"
          />
          <>
            <ImageElem
              index={0}
              className="object-contain"
              src={source.prismaImg}
              setSource={setSource}
              content="PRISMA"
            />

            <ImageElem
              index={1}
              className="object-contain"
              src={source.mongoImg}
              setSource={setSource}
              content="MONGODB"
            />

            <ImageElem
              index={partitions === 3 ? 0 : 2}
              className="object-contain"
              src={source.sanityImg}
              setSource={setSource}
              content="SANITY"
            />

            <ImageElem
              index={partitions === 1 ? 3 : partitions === 2 ? 0 : 1}
              className="object-contain"
              src={source.firebaseImg}
              setSource={setSource}
              content="FIREBASE"
            />
          </>
        </div>
        <div className=" md:hidden flex flex-col gap-y-20 my-20">
          <div className="flex w-full justify-center relative items-center gap-x-5">
            <div className="cursor-pointer flex w-[50%] justify-end  items-center">
              <h3 className=" text-3xl text-[#f9d5ca]">Techs</h3>
              <div
                className={` absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-6 outline  outline-2  ${
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
            <h3 className="ml-14 text-3xl text-[#f9d5ca] w-[50%]">Skills</h3>
          </div>
          <motion.div
            variants={iconVar}
            animate={iconAnim}
            className={` ${
              isToggled ? "hidden" : "flex"
            }  w-11/12 mx-auto flex-wrap gap-x-5 min-[310px]:gap-x-10 gap-y-10 justify-center items-center`}
          >
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <HtmlSvg
                anim={htmlSvgAnim}
                from="skills"
                className={"h-32 w-32  object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <CssSvg
                anim={cssSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <JsSvg
                anim={jsSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <ReactSvg
                anim={reactSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <ThreeSvg from="skills" className={"h-32 w-32 object-fill"} />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <NextSvg
                anim={nextSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <ReduxSvg
                anim={reduxSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <TrpcSvg
                anim={trpcSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <NodeSvg
                anim={nodeSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <TsSvg
                anim={tsSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <PythonSvg
                anim={pythonSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <PrismaSvg
                anim={prismaSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <MongoSvg
                anim={mongoSvgAnim}
                from="skills"
                className={"h-32 w-32 object-fill"}
              />
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=""
            >
              <ExpressSvg
                anim={expressSvgAnim}
                from="skills"
                className={"h-32 w-36 object-fill"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={iconVar}
            animate={cardAnim}
            className={` ${
              !isToggled ? "hidden" : "flex"
            }  flex-col  gap-y-10 w-4/5 mx-auto`}
          >
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=" bg-gray-900/70 shadow-lg shadow-gray-900/70 w-full max-h-max py-10 min-h-[250px] border border-gray-600"
            >
              <div className="flex flex-col w-11/12 mx-auto justify-center h-full gap-y-3">
                <img
                  src={source.htmlImg}
                  alt="__ideaBulb"
                  className="h-10 w-10"
                />
                <h3 className="text-[#f9d5ca]">
                  Strategic Technological Insight
                </h3>
                <p className="text-xl text-white">
                  Merging the best of marketing techniques with technology, I
                  identify and harness the potential of cutting-edge tools for
                  problem-solving and optimization.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=" bg-gray-900/70 shadow-lg shadow-gray-900/70 w-full max-h-max py-10 min-h-[250px] border border-gray-600"
            >
              <div className="flex flex-col w-11/12 mx-auto justify-center h-full gap-y-3">
                <img
                  src={source.htmlImg}
                  alt="__setting"
                  className="h-10 w-10"
                />
                <h3 className="text-[#f9d5ca]">Fusing Ideas with Technology</h3>
                <p className=" text-xl text-white">
                  Harnessing the mechanics of technology, I ensure ideas are
                  brought to life in their fullest potential, fueling growth and
                  transformation.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=" bg-gray-900/70 shadow-lg shadow-gray-900/70 w-full max-h-max py-10 min-h-[250px] border border-gray-600"
            >
              <div className="flex flex-col w-11/12 mx-auto justify-center h-full gap-y-3">
                <img
                  src={source.htmlImg}
                  alt="__search"
                  className="h-10 w-10"
                />
                <h3 className="text-[#f9d5ca]">
                  Innovative Technological Solutions
                </h3>
                <p className="text-xl text-white">
                  My passion for innovation ensures that the solutions I craft
                  are groundbreaking, helping organizations stay ahead in a
                  digital world.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar}
              animate={{ opacity: 1 }}
              className=" bg-gray-900/70 shadow-lg shadow-gray-900/70 w-full max-h-max py-10 min-h-[250px] border border-gray-600"
            >
              <div className="flex flex-col w-11/12 mx-auto justify-center h-full gap-y-3">
                <img
                  src={source.htmlImg}
                  alt="__brainStorm"
                  className="h-10 w-10"
                />
                <h3 className="text-[#f9d5ca]">
                  Tech-Infused Creative Thinking
                </h3>
                <p className="text-xl text-white">
                  Blending creativity and technology, I innovate in ways that
                  infuse traditional methods with the latest tech advancements.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Skills;
