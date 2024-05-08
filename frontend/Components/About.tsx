import React, { useEffect, useRef, useState } from "react";
import vanilaTilt from "vanilla-tilt";
import { HiOutlineDownload } from "react-icons/hi";
import AboutUtils from "../utils/AboutUtils";
function About() {
  const [hover, setHover] = useState(false);
  // const sections = ["S", "e", "c", "t", "i", "o", "n", "🙃", "2"];
  let card_ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setHover(false);
    card_ref.current.onpointerover = () => {
      if (window.innerWidth < 900) {
        setHover(false);
      } else {
        setHover(true);
      }
    };
    card_ref.current.onpointerout = () => {
      setHover(false);
    };
    vanilaTilt.init(card_ref.current);
    // console.log(card_ref);
  }, []);

  return (
    <div
      style={{
        boxShadow:
          "0px -4px 4px  rgba(0,0,0,0.15), 4px 0px 4px  rgba(0,0,0,0.15),0px 4px 4px rgba(0,0,0,0.15), -4px 0px 4px  rgba(0,0,0,0.15)",
      }}
      id="about"
      className="about bg-[#f5e4bc] text-[#292823] relative flex lg:h-[1080px] "
    >
      <div className="my-10 w-full xss:w-11/12 mx-auto lg:w-5/6   flex flex-col md+:flex-row">
        <div className="flex w-full">
          <div className="flex  flex-col  justify-center items-center gap-y-4   w-11/12 mx-auto ">
            <h3
              style={{ fontFamily: "Bluu" }}
              className="  text-center text-2xl  sm:text-3xl lg+:text-4xl  underline lg:no-underline font-semibold mb-4 mt-20  lg:w-auto "
            >
              {" "}
              I Might be the Developer you are looking for...
            </h3>
            <div className="flex flex-col gap-y-2 sm:gap-y-4 w-5/6  self-center">
              <p
                style={{ fontFamily: "Ignazio" }}
                className=" font-medium text-lg  xs:text-xl  w-auto"
              >
                Partnering with agencies and brands that value design and
                development integrity.
              </p>
              <p className=" font-medium text-lg xs:text-xl ">
                Delivering highly executed front-end user experiences by paying
                close attention to the nuances of design, optimization, and
                performance.
              </p>
            </div>
            <div className="flex flex-col xs+:flex-row lg:flex-col  gap-y-8 lg+:flex-row mb-10 mt-5 lg:mt-10  lg:gap-x-10 w-full  items-center xs+:items-start lg:items-center lg+:items-start justify-around">
              <div className="flex flex-col items-center gap-y-4 ">
                <h3 className=" text-[22px] py-1 text-xl xs:text-2xl mx-auto px-4 border-2 border-black ">
                  Status
                </h3>
                <p className=" text-xl border-black border-b">Fresher</p>
              </div>
              <div className="flex flex-col gap-y-4 items-center">
                <h1 className=" text-[22px] py-1 xs:text-2xl mx-auto border-2 px-4 border-black ">
                  Services
                </h1>
                <p className="text-xl  border-black border-b">Development</p>
                <p className="text-xl border-black border-b  text-center ">
                  Front-end Development
                </p>
                <p className="text-xl  border-black border-b">
                  Back-end Development
                </p>
                <p className="text-xl  border-black border-b">Type-safe Code</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col items-center justify-center  ">
          <div
            ref={card_ref}
            style={{ fontFamily: "Ignazio" }}
            className={
              hover
                ? "border-2 border-[#171717] card  duration-500 ease-in  cursor-pointer  pb-14 h-[550px] xs:h-[600px]  md:h-[735px]   min-[300px]:w-11/12 xs:w-5/6 sm:w-2/3 md+:w-full  min-[1100px]:w-11/12 xl:w-4/5 min-[1500px]:w-2/3 bg-white opacity-90 flex flex-col    rotate-45 shadow-lg shadow-gray-600 drop-shadow-md"
                : "relative px-6 md:px-0 min-[1700px]:px-6 pb-14 h-full xss:h-[550px] xs:h-[600px]  md:h-[735px]   min-[300px]:w-11/12 xs:w-5/6 sm:w-2/3 md+:w-full  min-[1100px]:w-11/12 xl:w-4/5 min-[1500px]:w-2/3  cursor-pointer transition-colors duration-500 ease-in bg-black/90 flex flex-col  rotate-45 shadow-lg shadow-gray-600 drop-shadow-md"
            }
          >
            {hover ? (
              <div className="w-full h-full relative ">
                <a
                  href="/assets/Nitin's Resume.pdf"
                  download="nitin_resume.pdf"
                >
                  <img
                    src="https://utfs.io/f/19e4656f-8030-4bd5-95f4-fda9776656d2-2se.png"
                    className="text-white object-fill bg-cover absolute h-full w-full"
                    alt="img"
                  />
                  <div className="shaded absolute w-full h-[40%]  -bottom-14 bg-gradient-to-b from-gray-200 to-black  opacity-90  justify-center items-center  flex-col flex">
                    <div className="flex">
                      <h1
                        style={{ fontFamily: "Ignazio" }}
                        className="text-white text-xl xs:text-3xl"
                      >
                        My Resume
                      </h1>
                      <HiOutlineDownload className="h-5 w-5 ml-2 my-auto  text-white"></HiOutlineDownload>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div className="h-full ">
                <a
                  href="/assets/Nitin's Resume.pdf"
                  download="nitin_resume.pdf"
                >
                  <div className=" flex  items-center relative">
                    <h1 className="text-white drop-shadow-lg text-base xs:text-xl md:text-3xl absolute xs:ml-2 col-span-1">
                      MY RESUME
                    </h1>
                    <div className="flex h-max w-full xs:mr-2 flex-col   items-end col-span-2 text-white text-xl  text-center ">
                      <span className="border-t-8  drop-shadow-sm mt-5 w-1/2  border-[#f5e4bc] "></span>
                      <br></br>
                      <span className="border-t-8  drop-shadow-sm w-1/2  border-[#f5e4bc] "></span>
                      <br></br>
                    </div>
                  </div>
                  <div className="head flex  w-full h-full ">
                    <div className="w-1/2 flex flex-col justify-around items-center ">
                      <AboutUtils content="EDUCATION" />
                      <AboutUtils content="EXPERIENCE" />
                      <div className=" flex md:w-full justify-center items-center border-[#f4805b] border-2 p-1 xs:p-2 xs:ml-4 ">
                        <p className=" text-white  text-center text-base xs:text-xl ">
                          Click to download
                        </p>
                        <HiOutlineDownload
                          size={25}
                          className=" h-max w-max inset-0 md:border-0 rounded-full border-2 border-[#f4805b] p-1 xs:p-2 ml-3 my-auto text-[#f4805b]"
                        ></HiOutlineDownload>
                      </div>
                    </div>
                    <div className="w-1/2  flex flex-col justify-around ">
                      <AboutUtils content="SKILLS" />
                      <AboutUtils content="PROJECTS" />
                      <AboutUtils content="LANGUAGES" />
                      <AboutUtils content="INTERESTS" />
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" h-full absolute right-0  top-0 hidden  self-center text-2xl   items-center mr-5">
        <button className="rotate-[180deg]">
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

export default About;
