import { useEffect, useRef, useState } from "react";
import { contextValue } from "../context/Context";
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
  const [fullHeight, setFullHeight] = useState("");
  const modalRef = useRef<HTMLDialogElement>(null);
  const activeImg = useRef<HTMLImageElement>(null);
  let imgdiv_ref = useRef<HTMLDivElement>(null);
  let imgdiv2_ref = useRef<HTMLDivElement>(null);
  let imgdiv3_ref = useRef<HTMLDivElement>(null);
  let imgdiv4_ref = useRef<HTMLDivElement>(null);
  // let main_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    vanilaTilt.init([
      imgdiv_ref?.current!,
      imgdiv2_ref?.current!,
      imgdiv3_ref?.current!,
      imgdiv4_ref?.current!,
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
    if (work_ref?.current) {
      if (work_ref.current.style.height > "2100px") {
        setFullHeight(work_ref.current.scrollHeight + "px");
        setMinHeight(true);
      }
    }
  }, [work_ref?.current]);
  useEffect(() => {
    const yo: any = window.addEventListener("scroll", () => {
      scrollRoll();
    });

    return () => window.removeEventListener("scroll", yo);
  });

  function scrollRoll() {
    if (work_ref?.current) {
      setFullHeight(work_ref.current.scrollHeight + "px");
    }
  }

  return (
    <div
      id="work"
      style={{
        height: fullHeight.length > 0 ? fullHeight : "3600px",
      }}
      className=" md+:h-max"
    >
      <div
        style={{
          fontFamily: "Coconat",
        }}
        ref={work_ref}
        className="drop-shadow-md shadow-work mx-auto  work relative "
      >
        <div
          className={`${
            !minHeight ? "top-0" : "top-0 "
          } sticky-wrapper my-auto w-full mx-auto md+:overflow-hidden  sticky z-10  md+:pt-0`}
        >
          <div
            style={{
              willChange: "transform",
              transform: "translate3d(0vw, 0px, 0px)",
              transformStyle: "preserve-3d",
            }}
            ref={scrolldiv_ref}
            className=" md+:scroll-div w-full md+:w-max h-max md+:h-screen flex flex-col md+:flex-row md+:relative fixed"
          >
            <div
              id="card_id"
              className=" min-h-screen h-max z-10 md+:z-0 w-full md+:w-screen  md+:bg-inherit sticky top-0 md+:relative md+:elements  md+:snap-both md+:snap-mandatory  flex "
            >
              <div
                className={` whitespace-nowrap mx-auto w-5/6 flex flex-col md+:flex-row  justify-center self-center md+:gap-y-0 md+:justify-around h-full ${
                  !minHeight ? "gap-y-20" : "gap-y-5"
                }  `}
              >
                <div className="  flex justify-center md+:justify-start w-full">
                  <div
                    className={`flex-col flex w-max   items-center  justify-center  ${
                      !minHeight ? "gap-y-5" : "gap-y-2"
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
                      className="hidden md+:flex w-full font-medium z-50 text-[#171717] justify-center  md+:flex-col  md+:flex-nowrap lg:flex-row flex-wrap gap-4 object-contain"
                      style={{ fontFamily: "Ignazio" }}
                    >
                      <img
                        onClick={() => {
                          if (activeImg.current)
                            activeImg.current.src = "/assets/finserve_2.png";
                          modalRef.current!.showModal();
                        }}
                        src="/assets/finserve_2.png"
                        className=" h-24 w-24  cursor-pointer md+:h-32 md+:w-72  lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out shadow-black "
                        alt="project_sample1"
                      />
                      <img
                        onClick={() => {
                          if (activeImg.current)
                            activeImg.current!.src = "/assets/finserve_1.png";
                          modalRef?.current!.showModal();
                        }}
                        src="/assets/finserve_1.png"
                        className=" h-24 w-24  cursor-pointer md+:h-32 md+:w-72 lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out shadow-black "
                        alt="project_sample2"
                      />
                    </div>
                  </div>
                </div>
                <div className="  w-full md+:h-2/3 md+:my-auto  justify-center md+:justify-end md+:items-center flex ">
                  <a target="_blank" href="https://djt-finserve.netlify.app/">
                    <div
                      ref={imgdiv_ref}
                      className={`md+:mt-14 lg:mt-0 cursor-not-allowed   bg-cover
                      ${
                        !minHeight
                          ? "h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px] sm:w-[550px] sm:h-[380px] md+:h-[500px] md+:w-[430px] xl:w-[600px] 2xl:w-[800px] gap-y-2"
                          : " h-[300px] w-[250px] xss:w-[300px]  xs:w-[350px] sm:w-[550px] md+:w-[430px]  xl:w-[600px] 2xl:w-[800px]"
                      }`}
                    >
                      <img
                        src="/assets/finserve_1.png"
                        className="h-full hover:scale-125  transition-transform duration-200 ease-in-out z-50  w-full object-cover bg-contain"
                        alt="project-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="card_id"
              className="min-h-screen h-max z-10 top-0  md+:z-0 w-full md+:w-screen   md+:bg-inherit sticky  md+:relative md+:elements md+:snap-both md+:snap-mandatory flex"
            >
              <div
                className={` whitespace-nowrap mx-auto w-5/6 flex flex-col md+:flex-row  justify-center self-center md+:gap-y-0 md+:justify-around  h-full   ${
                  !minHeight ? "gap-y-20" : "gap-y-5"
                }  `}
              >
                <div className=" flex justify-center md+:justify-start w-full">
                  <div
                    className={`flex-col flex w-max     items-center  justify-center  ${
                      !minHeight ? "gap-y-5" : "gap-y-2"
                    }`}
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
                      className="hidden md+:flex  w-3/4 md+:w-1/2 font-medium tracking-normal text-[#171717] justify-center  md+:flex-col lg:flex-row  md+:flex-nowrap gap-4 object-contain"
                      style={{ fontFamily: "Ignazio" }}
                    >
                      <img
                        onClick={() => {
                          if (activeImg.current)
                            activeImg.current.src = "/assets/scrap2.png";
                          modalRef.current!.showModal();
                        }}
                        src="/assets/scrap2.png"
                        className=" h-24 w-24  cursor-pointer md+:h-32 md+:w-72  lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out shadow-black "
                        alt="project_sample1"
                      />
                      <img
                        onClick={() => {
                          if (activeImg.current)
                            activeImg.current.src = "/assets/scrap3.png";
                          modalRef.current!.showModal();
                        }}
                        src="/assets/scrap3.png"
                        className="h-24 w-24  cursor-pointer md+:h-32 md+:w-72  lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out shadow-black "
                        alt="project_sample2"
                      />
                    </div>
                  </div>
                </div>
                <div className="  w-full md+:h-2/3 justify-center md+:justify-end z-50 items-center flex">
                  <a target="_blank" href="https://kabadi.vercel.app/">
                    <div
                      ref={imgdiv3_ref}
                      className={`md+:mt-14 lg:mt-0 cursor-not-allowed   bg-cover
                      ${
                        !minHeight
                          ? "h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px] sm:w-[550px] sm:h-[380px]  md+:h-[430px] md+:w-[430px] xl:h-[500px] xl:w-[600px] 2xl:w-[800px] gap-y-2"
                          : " h-[300px] w-[250px] xss:w-[300px]  xs:w-[350px] sm:w-[550px] md+:w-[430px]  xl:w-[600px] 2xl:w-[800px]"
                      }`}
                    >
                      <img
                        src="/assets/scrap_1.png"
                        className="h-full hover:scale-125 z-50 transition-transform duration-200 ease-in-out w-full object-cover justify-self-end bg-contain"
                        alt="project-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="card_id"
              className="min-h-screen h-max z-10  top-0 md+:z-0  w-full md+:w-screen  md+:bg-inherit sticky  md+:relative md+:elements md+:snap-both md+:snap-mandatory  flex "
            >
              <div
                className={` whitespace-nowrap mx-auto w-5/6 flex flex-col md+:flex-row  justify-center self-center md+:gap-y-0 md+:justify-around  h-full gap-x-10   ${
                  !minHeight ? "gap-y-20" : "gap-y-5"
                }  `}
              >
                <div className=" flex justify-center md+:justify-start  w-full">
                  <div
                    className={`flex-col flex w-max     items-center  justify-center  ${
                      !minHeight ? "gap-y-5" : "gap-y-5"
                    }`}
                  >
                    <h1 className="font-semibold md+:mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] ">
                      Image Gallery
                    </h1>
                    <h3 className="bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white">
                      self project
                    </h3>
                    <span className="hidden md+:block font-sans border-2 border-[#171717] xl+:font-semibold text-red-600 px-4 py-2">
                      This Website may load slow due to static serving
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
                      className="hidden md+:flex flex-col lg:flex-row justify-center flex-nowrap gap-4 object-contain"
                      style={{ fontFamily: "Ignazio" }}
                    >
                      <img
                        onClick={() => {
                          if (activeImg.current)
                            activeImg.current.src = "/assets/profile1.png";
                          modalRef.current!.showModal();
                        }}
                        src="/assets/profile1.png"
                        className=" h-24 w-24  cursor-pointer md+:h-32 md+:w-72  lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out shadow-black "
                        alt="project_sample1"
                      />
                      <img
                        onClick={() => {
                          if (activeImg.current)
                            activeImg.current.src = "/assets/profile2.png";
                          modalRef.current!.showModal();
                        }}
                        src="/assets/profile2.png"
                        className=" h-24 w-24  cursor-pointer md+:h-32 md+:w-72  lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out shadow-black "
                        alt="project_sample2"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-orange-400 w-full justify-center md+:justify-end z-50  flex">
                  <a
                    target="_blank"
                    href="https://imagegallery-eaha.onrender.com"
                  >
                    <div
                      ref={imgdiv4_ref}
                      className={`md+:mt-14 lg:mt-0 cursor-pointer   bg-cover
                      ${
                        !minHeight
                          ? "h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px] sm:w-[550px] sm:h-[380px]  md+:h-[430px] md+:w-[430px] xl:h-[500px] xl:w-[600px] 2xl:w-[800px] gap-y-2"
                          : " h-[300px] w-[250px] xss:w-[300px]  xs:w-[350px] sm:w-[550px] md+:w-[430px]  xl:w-[600px] 2xl:w-[800px]"
                      }`}
                    >
                      <img
                        src="/assets/profile3.png"
                        className="my-3  bg-cover  hover:scale-125 transition-transform duration-200 ease-in-out   w-full  h-[300px] "
                        alt="project-1"
                      />
                      <img
                        src="/assets/profile4.png"
                        className="hidden md+:block my-3 h-[300px] w-full   hover:scale-125 transition-transform duration-200 ease-in-out    bg-cover"
                        alt="project-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="card_id"
              className="min-h-screen h-max z-10 md+:z-0  w-full md+:w-screen  flex items-center md+:bg-inherit sticky top-0 md+:relative md+:elements md+:snap-both md+:snap-mandatory  md+:top-0 md+:flex"
            >
              <div
                className={` whitespace-nowrap mx-auto w-5/6 flex flex-col md+:flex-row  justify-center self-center md+:gap-y-0 md+:justify-around  h-full   ${
                  !minHeight ? "gap-y-20" : "gap-y-5"
                }  `}
              >
                <div className=" flex justify-center md+:justify-start w-full">
                  <div
                    className={`flex-col flex w-max     items-center  justify-center  ${
                      !minHeight ? "gap-y-5" : "gap-y-2"
                    }`}
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
                      className="font-medium tracking-normal text-[#171717] text-lg justify-center flex md+:flex-col lg:flex-row flex-nowrap md+:flex-wrap gap-4 object-contain"
                      style={{ fontFamily: "Ignazio" }}
                    >
                      <span className="font-sans border-2 border-[#171717] w-max font-semibold text-red-600 px-4 py-2">
                        Live preview not availble!{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-full  md+:h-2/3 justify-center md+:justify-end z-50 items-center flex">
                  <div
                    ref={imgdiv2_ref}
                    className={`md+:mt-14 lg:mt-0 cursor-not-allowed   bg-cover
                      ${
                        !minHeight
                          ? "h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px] sm:w-[550px] sm:h-[380px]  md+:h-[500px] md+:w-[500px] xl:h-[500px] xl:w-[600px] 2xl:w-[800px] gap-y-2"
                          : " h-[300px] w-[250px] xss:w-[300px]  xs:w-[350px] sm:w-[550px] md+:w-[430px]  xl:w-[600px] 2xl:w-[800px]"
                      }`}
                  >
                    <img
                      src="/assets/market.png"
                      className="z-50 h-full  hover:scale-125 transition-transform duration-200 ease-in-out   w-full object-cover bg-contain"
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
        <button className="rotate-[180deg]  p-2 py-4   h-max my-auto">
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
