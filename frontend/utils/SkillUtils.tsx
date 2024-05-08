import { MotionValue, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

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
}: {
  className: string;
  src: string;
  content: string;
  index: number;
}) {
  return (
    <motion.div
      variants={cardVar}
      initial={{ ...cardVar.hidden }}
      whileInView={cardVar.animate(index)}
      viewport={{ once: true, amount: 0.5 }}
      className=" skillcard"
    >
      <img
        src={src}
        alt=""
        className={` ml-1 mt-2 bg-white images shadow-md shadow-white ${className}`}
      />
      <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
        {content}
      </h3>
    </motion.div>
  );
}

export default null;
export { SkillUtils, ScrollElem, ImageElem };
