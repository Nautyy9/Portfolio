import gsap from "gsap";
// import ScrollSmoother from 'gsap/ScrollSmoother'
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillHome,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { motion } from "framer-motion";
import { contextValue } from "../context/Context";
import {
  linkRoute,
  GotoRouteLarge,
  GotoRouteSmall,
} from "../utils/headerUtils";

const nameWrapper = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const nameVar = {
  hidden: {
    scale: 0,
    opacity: 0,
    x: -100,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const linkWrapper = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
      duration: 3,
    },
  },
};
const linkVar = {
  hidden: {
    x: 100,
  },
  animate: {
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

// const staggerItems = stagger(0.1, {
//   startDelay: 0.5,
// });

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const { menuRef } = contextValue();
  const tl = gsap.timeline();
  // const [scope, animate] = useAnimate();
  // const linkRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (!linkRef.current) return;
  //   animate(
  //     linkRef.current,
  //     { opacity: [0, 1], x: [100, 0] },
  //     { delay: staggerItems, duration: 3 }
  //   );
  //   animate(
  //     scope.current,
  //     { opacity: [0, 1], y: [-100, 0] },
  //     { delay: staggerItems, duration: 0.3 }
  //   );
  // }, []);
  useEffect(() => {
    tl.fromTo(
      ".anim",
      { y: -200 },
      { y: 0, duration: 0.5, ease: "Power2.easeIn" }
    );
  });

  function setMenu() {
    setToggleMenu(true);
    if (toggleMenu) {
      menuRef?.current!.classList.add("open");
      return setToggleMenu(false);
    } else {
      menuRef?.current!.classList.remove("open");
      return setToggleMenu(true);
    }
  }
  return (
    <div
      id="header"
      className="overflow-x-hidden w-screen h-14 xs:h-16 flex items-center ring-2  ring-[#292823] text-[#292823] fixed header z-40 top-0 "
    >
      <div className="mx-5 w-full  xss:w-11/12  md+:w-5/6 xss:mx-auto flex items-center justify-between xss:justify-between  ">
        <motion.div className="flex">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={nameWrapper}
            className="inline-flex self-center "
          >
            <motion.img
              variants={nameVar}
              src="https://utfs.io/f/656b25e1-68be-4358-a697-bf593d578da9-1zbfv.png"
              alt="port_img"
              className="h-9 xs:mr-2  object-contain "
            />
            <motion.h2
              variants={nameVar}
              style={{
                fontFamily: "Bluu",
              }}
              className="font-bold text-2xl xl:text-3xl m-auto xs+:pr-4 md+:pr-0 whitespace-nowrap  "
            >
              Nitin's Folio
            </motion.h2>
          </motion.div>
          <motion.span
            initial={{ scale: 0, y: -100 }}
            animate={{
              scale: 1,
              y: 0,
              transition: { duration: 0.5, delay: 2 },
            }}
            className="hidden md:flex  md+:pl-6 lg:pl-10 border-r-4 animate-pulse  h-8 my-auto border-[#000000]   md:mx-auto "
          ></motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1,
            staggerChildren: 0.5,
            delayChildren: 0.3,
          }}
          className=" hidden md:flex lg:justify-start text-sm font-semibold  md:gap-4 md+:gap-0 xl:gap-5 xl+:gap-8  "
        >
          <GotoRouteLarge path="home" content="Home" />
          <GotoRouteLarge path="about" content="About Me" />
          <GotoRouteLarge path="skills" content="Skills" />
          <GotoRouteLarge path="work" content="Work" />
          <GotoRouteLarge path="contact" content="Contact" />
        </motion.div>
        <div className="hidden  md:flex justify-end col-span-1 ">
          <motion.div
            variants={linkWrapper}
            initial="hidden"
            animate="animate"
            className=" flex md:justify-end w-full h-full  gap-2  lg:gap-5 "
          >
            {linkRoute.map((val, ind) => {
              return (
                <motion.div variants={linkVar} key={ind}>
                  {val}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="col-span-2 md:hidden flex justify-end ">
          <div ref={menuRef} className="menu-btn" onClick={setMenu}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
      {!toggleMenu && (
        <div
          id="header_dropdown"
          className="anim border-t-2 border-[#171717] shadow-black mt-14 xs:mt-16 h-max flex flex-col xs:flex-row justify-center xs:justify-around items-center xs:items-start bg-[#f5e4bc] text-[#292823] header fixed z-50 top-0 w-screen text-shade-dark  "
        >
          <div className="routes flex flex-col my-5">
            <h2
              style={{ fontFamily: "Bluu" }}
              className="text-5xl border-b-2 border-black "
            >
              Route
            </h2>
            <div className="flex flex-col items-start mt-3 gap-2">
              <div className="flex xs:flex-col gap-2 gap-x-5 ">
                <GotoRouteSmall
                  path="home"
                  content={"Home"}
                  menuRef={menuRef}
                  setToggle={setToggleMenu}
                  icon={
                    <AiFillHome className="border border-[#171717] h-8 w-8 p-[3px] mr-1"></AiFillHome>
                  }
                />
                <GotoRouteSmall
                  path="about"
                  content={"About Me"}
                  menuRef={menuRef}
                  setToggle={setToggleMenu}
                  icon={
                    <SiAboutdotme className=" border border-[#171717] h-8 w-8 p-[4px]  mr-1"></SiAboutdotme>
                  }
                />
              </div>
              <div className="flex xs:flex-col gap-2 gap-x-5">
                <GotoRouteSmall
                  path="skills"
                  content={"Skills"}
                  menuRef={menuRef}
                  setToggle={setToggleMenu}
                  icon={
                    <GiSkills className="border border-[#171717] h-8 w-8 p-[4px] mr-1"></GiSkills>
                  }
                />
                <GotoRouteSmall
                  path="work"
                  content={"Work"}
                  menuRef={menuRef}
                  setToggle={setToggleMenu}
                  icon={
                    <GrPersonalComputer className="border border-[#171717] h-8 w-8 p-[3px] mr-1"></GrPersonalComputer>
                  }
                />
              </div>
              <GotoRouteSmall
                path="contact"
                content={"Contact"}
                menuRef={menuRef}
                setToggle={setToggleMenu}
                icon={
                  <AiOutlineContacts className="border border-[#171717] h-8 w-8 p-[2px] mr-1"></AiOutlineContacts>
                }
              />
            </div>
          </div>
          <div className=" handles flex flex-col  my-5  ">
            <h2
              style={{ fontFamily: "Bluu" }}
              className="text-5xl border-b-2 border-black"
            >
              Handles
            </h2>
            <div className="flex xs:flex-col mt-3 gap-2 items-start ">
              <div className="flex flex-col gap-2 ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nitin-nautiyal-75a67619a/"
                  className="flex justify-self-start  text-center text-[20px]"
                >
                  <FaLinkedinIn
                    aria-hidden="true"
                    className=" mr-1 border border-[#171717] h-8 w-8 p-[3px]  bg-transparent "
                  ></FaLinkedinIn>
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Nautyy9/"
                  className="flex justify-self-start  text-center text-[20px]"
                >
                  <AiFillGithub
                    aria-hidden="true"
                    className="mr-1 border border-[#171717] h-8 w-8 p-[2px] bg-transparent "
                  ></AiFillGithub>
                  Github
                </a>
              </div>
              <div className="flex flex-col gap-2 ">
                <a
                  target="_blank"
                  href="https://wa.me/919990989306"
                  className="flex justify-self-start text-center text-[19px]"
                >
                  <BsWhatsapp
                    className="mr-1 border border-[#171717] h-8 w-8 p-[4px]  bg-transparent "
                    aria-hidden="true"
                  ></BsWhatsapp>
                  Whatsapp
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/nautyy9/"
                  className="mr-1 justify-self-start flex  text-center text-[20px]"
                >
                  <AiOutlineInstagram
                    aria-hidden="true"
                    className="mr-1 border border-[#171717] h-8 w-8 p-[1px]  bg-transparent "
                  ></AiOutlineInstagram>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
