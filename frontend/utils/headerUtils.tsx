import React, { Dispatch, SetStateAction } from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
type largeScreenType = {
  path: string;
  content: string;
};

type smallScreenType = {
  path: string;
  content: string;
  icon?: any;
  setToggle: Dispatch<SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement> | undefined;
};

function GotoRouteLarge({ path, content }: largeScreenType) {
  return (
    <motion.div>
      <Link
        to={path}
        spy={true}
        smooth={true}
        offset={-64}
        duration={1000}
        className={
          "cursor-pointer whitespace-nowrap py-1.5 md:py-3 px-2 min-[800px]:px-3  md+:px-4 h-full lg+:px-6 hover:scale-110 transition-all hover:bg-black/10  ease-in-out  text-lg lg+:text-xl "
        }
      >
        {content}
      </Link>
    </motion.div>
  );
}

function GotoRouteSmall({
  path,
  content,
  icon,
  setToggle,
  menuRef,
}: smallScreenType) {
  return (
    <React.Fragment>
      <Link
        to={path}
        spy={true}
        onClick={() => {
          menuRef?.current!.classList.remove("open");
          setToggle!(true);
        }}
        smooth={true}
        offset={-64}
        duration={1000}
        className={"cursor-pointer text-lg flex text-[20px] justify-start"}
      >
        {icon}
        {content}
      </Link>
    </React.Fragment>
  );
}
const linkRoute = [
  <div className="h-6 ">
    <a
      target="_blank"
      href="https://www.linkedin.com/in/nitin-nautiyal-75a67619a/"
    >
      <FaLinkedinIn
        aria-hidden="true"
        className="h-full w-full transition-colors duration-300 hover:text-blue-600 bg-transparent "
      ></FaLinkedinIn>
    </a>
    {/* <a  target='_blank' href='https://www.linkedin.com/in/nitin-nautiyal-75a67619a/'><FaLinkedinIn aria-hidden='true' className='w-full h-full  bg-transparent'></FaLinkedinIn></a> */}
  </div>,
  <div className="h-6 ">
    <a target="_blank" href="https://github.com/Nautyy9/">
      <AiFillGithub
        aria-hidden="true"
        className="w-full h-full transition-colors duration-300 hover:text-gray-600 bg-transparent "
      ></AiFillGithub>
    </a>
  </div>,
  <div className="h-6 ">
    <a target="_blank" href="https://wa.me/919990989306">
      <BsWhatsapp
        className="w-full h-full transition-colors duration-300 hover:text-green-700 bg-transparent "
        aria-hidden="true"
      ></BsWhatsapp>
    </a>
  </div>,
  <div className="h-6 ">
    <a target="_blank" href="https://www.instagram.com/nautyy9/">
      <AiOutlineInstagram
        aria-hidden="true"
        className="insta w-full h-full transition-colors duration-300 hover:text-white rounded-lg    "
      ></AiOutlineInstagram>
    </a>
  </div>,
];

export default null;
export { GotoRouteLarge, GotoRouteSmall, linkRoute };
