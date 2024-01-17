import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ReturnedType, contextValue } from "../context/Context";
import vanilaTilt from "vanilla-tilt";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import DialogComponent from "./DialogComponent";
function Work() {
  const { work_ref, scrolldiv_ref } = contextValue();

  const [minHeight, setMinHeight] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null!);
  const activeImg = useRef<HTMLImageElement>(null!);
  let imgdiv_ref = useRef<HTMLDivElement>(null!);
  let imgdiv2_ref = useRef<HTMLDivElement>(null!);
  let imgdiv3_ref = useRef<HTMLDivElement>(null!);
  let imgdiv4_ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    vanilaTilt.init([
      imgdiv_ref.current,
      imgdiv2_ref.current,
      imgdiv3_ref.current,
      imgdiv4_ref.current,
    ]);
    // document.cookie = "name=nitin;value=suiiiii"
  }, [vanilaTilt]);

  // const sections = ["S", "e", "c", "t", "i", "o", "n", "🙃", "4"];
  // useEffect(() => {
  //   window.onscroll = () => {
  //     modalRef.current.close();
  //   };
  // });

  useEffect(() => {
    // console.log(work_ref?.current);
    if (work_ref?.current) {
      // console.log(work_ref.current);
      if (work_ref.current.style.height > "2100px") {
        // console.log("in");
        setMinHeight(true);
      }
    }
  }, [work_ref?.current]);

  return (
    <div className=" h-[3680px] bg-[#f5e4bc]  md+:h-max">
      <div
        style={{ fontFamily: "Coconat" }}
        ref={work_ref}
        className="  drop-shadow-md shadow-work mx-auto  work relative "
      >
        <div
          className={` ${
            !setMinHeight ? " top-[100px]" : "top-[50px] "
          } sticky-wrapper  w-full mx-auto overflow-hidden sticky z-10  md+:pt-0`}
        >
          <div
            style={{
              willChange: "transform",
              transform: "translate3d(0vw, 0px, 0px)",
              transformStyle: "preserve-3d",
            }}
            ref={scrolldiv_ref}
            className="md+:scroll-div w-full md+:w-max  h-max  md+:h-screen  flex flex-col  md+:flex-row md+:relative fixed"
          >
            <div className="z-10 md+:z-0 w-full md+:w-screen bg-[#f5e4bc]  md+:bg-inherit sticky top-0 md+:relative md+:elements h-screen md+:snap-both md+:snap-mandatory ">
              <div
                className={` flex flex-col md+:flex-row justify-center ${
                  !setMinHeight ? "gap-y-20" : "gap-y-10"
                }  md+:gap-y-0 md+:justify-start items-center mx-auto  h-screen  `}
              >
                <div
                  className={`flex-col flex  md+:w-1/2   items-center justify-center  ${
                    !setMinHeight ? "gap-y-5" : "gap-y-3"
                  }`}
                >
                  <h1 className="font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] ">
                    DJT FINSERVE
                  </h1>
                  <h3 className="bg-[#5C4033] py-0.5 md+:py-1  lg+:py-2 px-2  lg+:text-lg  text-white">
                    internship
                  </h3>
                  <div className=" flex gap-5 justify-center mx-auto  md+:gap-10">
                    <div className="h-8 w-8  sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <AiFillHtml5 className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiJavascript className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <DiCss3 className="w-full h-full" />
                    </div>
                    <p></p>
                  </div>
                  <h2 className="text-lg md+:text-2xl">Preview</h2>
                  <div
                    className=" md+:w-1/2 font-medium z-50 text-[#171717] justify-center flex md+:flex-col  md+:flex-nowrap lg:flex-row flex-wrap gap-4 object-contain"
                    style={{ fontFamily: "Ignazio" }}
                  >
                    <img
                      onClick={() => {
                        if (activeImg.current)
                          activeImg.current.src = "/assets/finserve_2.png";
                        modalRef.current!.showModal();
                      }}
                      src="/assets/finserve_2.png"
                      className=" h-32 w-32 md+:h-full cursor-pointer md+:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black "
                      alt="project_sample1"
                    />
                    <img
                      onClick={() => {
                        if (activeImg.current)
                          activeImg.current!.src = "/assets/finserve_1.png";
                        modalRef.current.showModal();
                      }}
                      src="/assets/finserve_1.png"
                      className=" h-32 w-32 md+:h-full cursor-pointer md+:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black "
                      alt="project_sample2"
                    />
                  </div>
                </div>
                <div className="md+:w-1/2 md+:h-2/3 md+:my-auto  justify-center   md+:items-center flex">
                  <a target="_blank" href="https://djt-finserve.netlify.app/">
                    <div
                      ref={imgdiv_ref}
                      className=" cursor-not-allowed  h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px] sm:w-[550px] sm:h-[380px]  md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover"
                    >
                      <img
                        src="/assets/finserve_1.png"
                        className="h-full hover:scale-105  transition-transform duration-200 ease-in-out z-50  w-full object-cover bg-contain"
                        alt="project-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="z-10  md+:z-0 w-full md+:w-screen bg-[#f5e4bc] md+:bg-inherit sticky top-0 md+:relative md+:elements h-screen md+:snap-both md+:snap-mandatory  ">
              <div
                className={` flex flex-col md+:flex-row justify-center items-center ${
                  !setMinHeight ? "gap-y-20" : "gap-y-10"
                } md+:gap-y-0 mx-auto  h-screen  `}
              >
                <div
                  className={`flex-col flex  md+:w-1/2   items-center justify-center ${
                    !setMinHeight ? "gap-y-5" : "gap-y-3"
                  } `}
                >
                  <h1 className="font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] ">
                    Kabadi [Scrap]
                  </h1>
                  <h3 className="bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white">
                    client
                  </h3>
                  <div className=" flex gap-5 justify-center mx-auto  md+:gap-10">
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiReact className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiTypescript className="h-full w-full" />
                    </div>
                  </div>
                  <h2 className="text-lg md+:text-2xl">Preview</h2>
                  <div
                    className="w-3/4 md+:w-1/2 font-medium tracking-normal text-[#171717]  justify-center flex md+:flex-col lg:flex-row  md+:flex-nowrap gap-4 object-contain"
                    style={{ fontFamily: "Ignazio" }}
                  >
                    <img
                      onClick={() => {
                        if (activeImg.current)
                          activeImg.current.src = "/assets/scrap2.png";
                        modalRef.current!.showModal();
                      }}
                      src="/assets/scrap2.png"
                      className="h-32 w-32 cursor-pointer  lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black "
                      alt="project_sample1"
                    />
                    <img
                      onClick={() => {
                        if (activeImg.current)
                          activeImg.current.src = "/assets/scrap3.png";
                        modalRef.current!.showModal();
                      }}
                      src="/assets/scrap3.png"
                      className="z-50 h-32 w-32  cursor-pointer lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black "
                      alt="project_sample2"
                    />
                  </div>
                </div>
                <div className="md+:w-1/2 md+:h-2/3 justify-center z-50 items-center flex">
                  <a target="_blank" href="https://kabadi.vercel.app/">
                    <div
                      ref={imgdiv3_ref}
                      className=" cursor-pointer h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[330px] sm:h-[300px] xs:w-[350px] sm:w-[550px]    md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover"
                    >
                      <img
                        src="/assets/scrap_1.png"
                        className="h-full hover:scale-105 z-50 transition-transform duration-200 ease-in-out w-full object-cover bg-contain"
                        alt="project-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="z-10 md+:z-0  w-full md+:w-screen bg-[#f5e4bc] md+:bg-inherit sticky top-0 md+:relative md+:elements h-screen md+:snap-both md+:snap-mandatory  ">
              <div
                className={` flex flex-col md+:flex-row justify-center items-center ${
                  !setMinHeight ? "gap-y-20" : "gap-y-10"
                } md+:gap-y-0 mx-auto h-screen  `}
              >
                <div
                  className={`flex-col flex  md+:w-1/2 items-center justify-center ${
                    !setMinHeight ? "gap-y-5" : "gap-y-3"
                  } `}
                >
                  <h1 className="font-semibold md+:mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] ">
                    Image Gallery
                  </h1>
                  <h3 className="bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white">
                    self project
                  </h3>
                  <span className="hidden md+:block font-sans border-2 border-[#171717] w-max xl+:font-semibold text-red-600 px-4 py-2">
                    This Website may load slow due to static file serving{" "}
                  </span>

                  <div className=" flex gap-5 justify-center mx-auto  md+:gap-10">
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiNodedotjs className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiExpress className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiMongodb className="w-full h-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiJavascript className="w-full h-full" />
                    </div>
                  </div>
                  <h2 className="text-lg md+:text-2xl">Preview</h2>
                  <div
                    className="md+:mb-10 w-3/4 md+:w-1/2  font-medium tracking-normal text-[#171717] text-lg justify-center flex md+:flex-col lg:flex-row xl+:flex-wrap  flex-nowrap gap-4 object-contain"
                    style={{ fontFamily: "Ignazio" }}
                  >
                    <img
                      onClick={() => {
                        if (activeImg.current)
                          activeImg.current.src = "/assets/profile1.png";
                        modalRef.current!.showModal();
                      }}
                      src="/assets/profile1.png"
                      className="z-50 h-32 w-32 md+:h-full cursor-pointer md+:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black "
                      alt="project_sample1"
                    />
                    <img
                      onClick={() => {
                        if (activeImg.current)
                          activeImg.current.src = "/assets/profile2.png";
                        modalRef.current!.showModal();
                      }}
                      src="/assets/profile2.png"
                      className="h-32 w-32 md+:h-full cursor-pointer md+:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black "
                      alt="project_sample2"
                    />
                  </div>
                </div>
                <div className="md+:w-1/2 md+:h-2/3 justify-center items-center flex">
                  <a
                    target="_blank"
                    href="https://imagegallery-eaha.onrender.com"
                  >
                    <div
                      ref={imgdiv4_ref}
                      className=" h-[250px] w-[250px] border-2 border-black xss:h-[300px] xss:w-[300px] xs:h-[350px] sm:h-[370px] xs:w-[350px] sm:w-[550px] md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover"
                    >
                      <img
                        src="/assets/profile3.png"
                        className="my-3   bg-cover  hover:scale-105 transition-transform duration-200 ease-in-out   w-full  h-[340px] md+:h-max"
                        alt="project-1"
                      />
                      <img
                        src="/assets/profile4.png"
                        className="hidden md+:block my-3 h-max  object-contain  hover:scale-105 transition-transform duration-200 ease-in-out   w-full  bg-cover"
                        alt="project-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <img
              src="assets/line_2.svg"
              className="bg-yellow-500 w-full rotate-90 h-full object-center absolute  "
            ></img> */}

            <div className="z-10 md+:z-0  w-full md+:w-screen bg-[#f5e4bc] md+:bg-inherit sticky top-0 md+:relative md+:elements h-screen md+:snap-both md+:snap-mandatory  ">
              <div
                className={`flex z-30  flex-col md+:flex-row justify-center items-center ${
                  !setMinHeight ? "gap-y-20" : "gap-y-10"
                } md+:gap-y-0 mx-auto  h-screen  `}
              >
                <div
                  className={`flex-col flex  md+:w-1/2  items-center justify-center ${
                    !setMinHeight ? "gap-y-5" : "gap-y-3"
                  } `}
                >
                  <h1 className="font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] ">
                    Smart Cart
                  </h1>
                  <h3 className="bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white">
                    internship
                  </h3>
                  <div className=" flex gap-5 justify-center mx-auto  md+:gap-10">
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiReact className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                      <SiSocketdotio className="h-full w-full" />
                    </div>
                  </div>
                  <h2 className="text-lg md+:text-2xl">Preview</h2>
                  <div
                    className="w-3/4 md+:w-1/2  font-medium tracking-normal text-[#171717] text-lg justify-center flex md+:flex-col lg:flex-row flex-nowrap md+:flex-wrap gap-4 object-contain"
                    style={{ fontFamily: "Ignazio" }}
                  >
                    <span className="font-sans border-2 border-[#171717] w-max font-semibold text-red-600 px-4 py-2">
                      Live preview not availble!{" "}
                    </span>
                  </div>
                </div>
                <div className="md+:w-1/2 md+:h-1/2   justify-center items-center flex">
                  <div
                    ref={imgdiv2_ref}
                    className="cursor-not-allowed h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px] sm:w-[550px] sm:h-[400px]  md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover"
                  >
                    <img
                      src="/assets/market.png"
                      className="z-50 h-full  hover:scale-105 transition-transform duration-200 ease-in-out   w-full object-cover bg-contain"
                      alt="project-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogComponent modalRef={modalRef} activeImg={activeImg} />
      {/* <div
        style={{ visibility: "hidden", fontFamily: "Coconat" }}
        ref={section_ref}
        className=" h-full text-center hidden xs+:flex  text-[#5C4033] py-4 fixed  right-10 sm:right-5  top-[50%] translate-y-[-50%] md+:my-auto z-1 tracking-normal"
      >
        <button className="rotate-[180deg] bg-[#f5e4bc] p-2 py-4   h-max my-auto">
          {sections.map((section, id) => (
            <h1
              key={id}
              className="sec_part  hover:scale-125 transition duration-200 text-2xl"
            >
              {section}
            </h1> 
          ))}
        </button>
      </div> */}
    </div>
  );
}

export default Work;
