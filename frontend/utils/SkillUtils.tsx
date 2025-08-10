import {
  MotionValue,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import { imgTypes } from "../types/imageTypes";
import {
  cssImg,
  expressImg,
  htmlImg,
  jsImg,
  mongoImg,
  nextImg,
  nodeImg,
  prismaImg,
  reactImg,
  reactqueryImg,
  sanityImg,
  socketImg,
  threeImg,
  tsImg,
  firebaseImg,
} from "../utils/imagesExporter";

const cardVar = {
  hidden: { opacity: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5 * i,
      type: "spring",
      ease: "easeInOut",
    },
  }),
};

function SkillUtils() {
  return (
    <div
      style={{ fontFamily: "Bluu" }}
      className="flex  relative skills_heading "
    >
      {Array.from({ length: 12 }).map((_, i) =>
        i % 2 === 0 ? (
          <h3
            key={i}
            className="text-5xl text-center flex   justify-center drop-shadow-sm"
          >
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h3>
        ) : (
          <h3
            key={i}
            className="text-5xl text-center flex   justify-center drop-shadow-sm"
          >
            SKILLS
            <AiOutlineArrowDown className="h-10 border-4  border-[#f4805b]  rounded-full my-auto mx-10 w-10 px-1  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h3>
        )
      )}
    </div>
  );
}

function ScrollElem({
  className,
  content,
  style,
}: {
  className: string;
  content: string;
  style: { x: MotionValue<number> };
}) {
  return (
    <motion.div
      transition={{ type: "spring", ease: "bounce" }}
      style={{ ...style, fontFamily: "Bluu" }}
      className={`flex w-full leaf-div relative whitespace-nowrap ${className}`}
    >
      {Array.from({ length: 6 }).map((_, i) =>
        i % 2 === 0 ? (
          <h3
            key={i}
            className="text-5xl text-center flex  m-auto justify-center drop-shadow-sm"
          >
            {content}
            <AiOutlineArrowDown className="h-10 w-10 border-4 border-[#f4805b] rounded-full m-auto mx-10 px-1 py-1  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h3>
        ) : (
          <h3
            key={i}
            className="text-5xl text-center flex  m-auto justify-center drop-shadow-sm"
          >
            {content}
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h3>
        )
      )}
    </motion.div>
  );
}

function ImageElem({
  content,
  src,
  className,
  index,
  setSource,
}: {
  className: string;
  src: string;
  content: string;
  index: number;
  setSource?: React.Dispatch<React.SetStateAction<imgTypes>>;
}) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value === 1) {
      setShouldAnimate(true);
    }
  });

  return (
    <motion.div
      ref={imageRef}
      variants={cardVar}
      initial="hidden"
      animate={shouldAnimate && "animate"}
      custom={index}
      className="skillcard"
    >
      <img
        src={src}
        onError={() =>
          setSource!(() => ({
            htmlImg,
            cssImg,
            expressImg,
            jsImg,
            mongoImg,
            nextImg,
            nodeImg,
            prismaImg,
            reactImg,
            reactqueryImg,
            sanityImg,
            socketImg,
            threeImg,
            tsImg,
            firebaseImg,
          }))
        }
        alt=""
        className={`ml-1 mt-2 bg-white images shadow-md shadow-white ${className}`}
      />
      <h3 className="skill_text font-bellota text-xl">{content}</h3>
    </motion.div>
  );
}

export default null;
export { SkillUtils, ScrollElem, ImageElem };
