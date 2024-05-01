import { MotionValue, motion } from "framer-motion";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

function SkillUtils() {
  return (
    <div className="flex  relative skills_heading ">
      {Array.from({ length: 12 }).map((_, i) =>
        i % 2 === 0 ? (
          <h1
            key={i}
            className="text-5xl text-center flex   justify-center drop-shadow-sm"
          >
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
        ) : (
          <h1
            key={i}
            className="text-5xl text-center flex   justify-center drop-shadow-sm"
          >
            SKILLS
            <AiOutlineArrowDown className="h-10 border-4  border-[#f4805b]  rounded-full my-auto mx-10 w-10 px-1  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h1>
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
      style={style}
      className={`flex w-full leaf-div relative whitespace-nowrap ${className}`}
    >
      {Array.from({ length: 6 }).map((_, i) =>
        i % 2 === 0 ? (
          <h1
            key={i}
            className="text-5xl text-center flex  m-auto justify-center drop-shadow-sm"
          >
            {content}
            <AiOutlineArrowDown className="h-10 w-10 border-4 border-[#f4805b] rounded-full m-auto mx-10 px-1 py-1  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h1>
        ) : (
          <h1
            key={i}
            className="text-5xl text-center flex  m-auto justify-center drop-shadow-sm"
          >
            {content}
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
        )
      )}
    </motion.div>
  );
}

function ImageElem({
  content,
  src,
  className,
}: {
  className: string;
  src: string;
  content: string;
}) {
  return (
    <div className=" skillcard">
      <img
        src={src}
        alt=""
        className={` ml-1 mt-2 bg-white images shadow-md shadow-white ${className}`}
      />
      <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
        {content}
      </h3>
    </div>
  );
}

export default null;
export { SkillUtils, ScrollElem, ImageElem };
