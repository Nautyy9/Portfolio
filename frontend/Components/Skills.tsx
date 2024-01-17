import gsap, { Linear, Power0 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import {
  BackendScroll,
  Dbcms,
  FrontendScroll,
  SkillScroll,
  UtilitiesScroll,
} from "../utils/exports";

function Skills() {
  const sections = ["S", "e", "c", "t", "i", "o", "n", "🙃", "3"];
  const card_container = useRef<HTMLDivElement | null>(null!);
  const skill_container = useRef<HTMLDivElement | null>(null!);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      var xl2 = tl.fromTo(
        ".skillcard",
        { visibility: "hidden", scale: 0 },
        {
          scrollTrigger: {
            trigger: ".skillcard",
            start: "-300px 500px ",
            end: () => "2200px 200px",
            scrub: 2,
            // markers: true,
            toggleActions: "restart pause reverse reset",
            // invalidateOnRefresh: true,
          },
          scale: 1,
          autoAlpha: 1,
          position: "relative",
          top: 0,
          left: 0,
          transform: "none",
          duration: 10,
          ease: "elastic",
          stagger: 10,
        }
      );

      tl.fromTo(
        [".frontend", ".backend"],
        { left: "70%", duration: 3 },
        {
          scrollTrigger: {
            trigger: [".frontend", ".backend"],
            toggleActions: "restart pause reverse reset",
            start: "-200% center",
            end: "3000px 10%",
            scrub: 10,
            // outerHeight: 1000,
          },
          left: "-100%",
          duration: 30,
          stagger: 5,
          opacity: 1,
        }
      );

      tl.fromTo(
        [".utilities", ".extras"],
        { left: "100%", duration: 3 },
        {
          scrollTrigger: {
            trigger: [".utilities", ".extras"],
            toggleActions: "restart pause reverse reset",
            start: "-200% center",
            end: "1000px 10%",
            scrub: 5,
            // markers: true,
          },
          left: "-100%",
          duration: 5,
          stagger: 2,
          opacity: 1,
        }
      );
      if (window.innerWidth > 1250 && window.innerWidth <= 1670) {
        // console.log('1670')
        xl2._first.vars.scrollTrigger.start = "-300px center";
        xl2._first.vars.scrollTrigger.end = "2600px 200px";
      } else if (window.innerWidth > 787 && window.innerWidth <= 1250) {
        // console.log('1250')

        xl2._first.vars.scrollTrigger.start = "-200px center";
        xl2._first.vars.scrollTrigger.end = "3900px 200px";
      } else if (window.innerWidth <= 787) {
        // console.log('787')

        xl2._first.vars.scrollTrigger.start = "-300px center";
        xl2._first.vars.scrollTrigger.end = "7200px 200px";
      }
    },
    { scope: skill_container, revertOnUpdate: true }
  );
  // * note for future don't have nested child inside skill component since gsap has trigger on it

  return (
    <div
      ref={skill_container}
      className=" bg-[#171717] text-[#dfd3c3] flex-col items-center h-max skills relative overflow-hidden shadow-skills   "
    >
      <div className="flex w-max mt-10 ">
        <div className="flex leaf-div relative skills_heading ">
          <h1 className="text-5xl text-center flex   justify-center drop-shadow-sm">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center drop-shadow-sm">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center drop-shadow-sm">
            SKILLS
            <AiOutlineArrowDown className="h-10 border-4  border-[#f4805b]  rounded-full my-auto mx-10 w-10 px-1  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center drop-shadow-sm">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center drop-shadow-sm">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center drop-shadow-sm">
            SKILLS
            <AiOutlineArrowDown className="h-10 border-4 px-1 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h1>
        </div>
        <div className="flex  leaf-div relative skills_heading ">
          <h1 className="text-5xl text-center flex   justify-center ">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center ">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center ">
            SKILLS
            <AiOutlineArrowDown className="h-10 border-4 px-1 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center ">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center ">
            SKILLS
            <span className="h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner"></span>
          </h1>
          <h1 className="text-5xl text-center flex   justify-center ">
            SKILLS
            <AiOutlineArrowDown className="h-10 border-4 px-1 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner"></AiOutlineArrowDown>
          </h1>
        </div>
      </div>
      <div className="relative flex flex-wrap gap-20 mx-auto w-5/6 items-end  justify-around my-20 ">
        <div className="flex ">
          <div className="flex w-full leaf-div relative frontend">
            <FrontendScroll />
          </div>
        </div>
        <div className="  skillcard">
          <img
            src="assets/html.png"
            alt=""
            className="object-cover ml-1 mt-2 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            HTML
          </h3>
        </div>
        <div className="  skillcard  ">
          <img
            src="assets/css.png"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white "
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            CSS
          </h3>
        </div>
        <div className="  skillcard  ">
          <img
            src="assets/js.png"
            alt=""
            className="object-cover ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            JAVA SCRIPT
          </h3>
        </div>
        <div className="  skillcard  ">
          <img
            src="assets/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail-removebg-preview.png"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            REACT.JS
          </h3>
        </div>
        <div className="  skillcard  ">
          <img
            src="assets/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png"
            alt=""
            className="object-contain  ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            THREE.JS
          </h3>
        </div>
        <div className="  skillcard  ">
          <img
            src="assets/nextjs-boilerplate-logo.png"
            alt=""
            className="object-cover ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            NEXT.JS
          </h3>
        </div>
        <div className="flex ">
          <div className="flex w-full leaf-div relative backend">
            <BackendScroll />
          </div>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/logo-text-black.svg"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            tRPC
          </h3>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text-removebg-preview.png"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            EXPRESSJS
          </h3>
        </div>
        <div className="  skillcard  ">
          <img
            src="assets/png-transparent-web-development-node-js-socket-io-javascript-network-socket-modernization-miscellaneous-logo-web-application-removebg-preview.png"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            NODE.JS
          </h3>
        </div>
        <div className="flex w-full leaf-div relative utilities">
          <UtilitiesScroll />
        </div>
        <div className="  skillcard ">
          <img
            src="assets/typescript.svg"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            TYPESCRIPT
          </h3>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/socketio.png"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            SOCKET.IO
          </h3>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/Screenshot_2023-01-14_034806-removebg-preview.png"
            alt=""
            className="object-contain  ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            REACT QUERY
          </h3>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t-removebg-preview.png"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3
            style={{ fontFamily: "Ignazio" }}
            className="ml-3 skill_text text-xl"
          >
            REDUX-TOOLKIT
          </h3>
        </div>
        <div className="flex w-full leaf-div relative extras">
          <Dbcms />
        </div>
        <div className="  skillcard ">
          <img
            src="assets/prisma.jpeg"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            PRISMA
          </h3>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/download-removebg-preview.png"
            alt=""
            className="object-contain bg-white images shadow-md ml-1 shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            MONGO-DB
          </h3>
        </div>
        <div className="  skillcard ">
          <img
            src="assets/sanity.webp"
            alt=""
            className="object-contain ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            SANITY
          </h3>
        </div>
        <div className="  skillcard">
          <img
            src="assets/firebase.png"
            alt=""
            className="object-cover ml-1 bg-white images shadow-md shadow-white"
          />
          <h3 style={{ fontFamily: "Ignazio" }} className="skill_text text-xl">
            FIREBASE
          </h3>
        </div>
      </div>
      <div className="h-full absolute right-5  top-0 hidden xs+:flex justify-center text-2xl  my-[-100px] md+:my-auto items-center text-white tracking-wider">
        <button className="rotate-[180deg] -mt-80 break:mt-0 xl:p-2 text-white xl:py-4 bg-transparent">
          {/* {sections.map((section, id) => (
            <h1
              key={id}
              className="sec_part hover:scale-125 transition duration-200"
            >
              {section}
            </h1>
          ))} */}
        </button>
      </div>
    </div>
  );
}

export default Skills;
