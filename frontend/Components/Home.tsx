import { useEffect, useRef, useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { IoCubeOutline } from "react-icons/io5";
import { AnimatePresence, delay, motion, useAnimation } from "framer-motion";
import gsap, { Elastic } from "gsap";
import CubeCanvas from "../cube/CubeCanvas";

const textVar = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: -100,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const innerText = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const nameVariant = {
  initial: { x: -50, y: 50, scale: 0 },
  animate: (i: number) => ({
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 0.4,
      delay: 3 + i * 0.5,
    },
  }),
};

function Home() {
  const Fname = ["n", "i", "t", "i", "n"];
  const Lname = ["n", "a", "u", "t", "i", "y", "a", "l"];
  const backText = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const text = "nitinnautiyal-webdeveloper/designer";
  const roundText = text.split("");
  const CubeRef = useRef<HTMLDivElement | null>(null);
  const miniCube = useRef<HTMLDivElement | null>(null);
  const [showText, setShowText] = useState(false);
  const setImages = () => {
    const text = document.querySelector(".who");
    // const name = document.querySelector('.name');
    // threeCube.classList.add("hidden");
    miniCube.current?.classList.remove("xl:hidden");
    CubeRef.current?.classList.add("hidden");
    text!.classList.add("hidden");
  };

  // const [scope, animate] = useAnimate();
  const pathRef = useRef<SVGPathElement>(null);
  const lineDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // window.onpointermove = (e) => {
    //   console.log(e.clientY);
    // };
    if (!lineDivRef.current) return;
    lineDivRef.current.onmousemove = (e) => {
      // console.log(lineDivRef.current?.getBoundingClientRect());
      updateWidth(e.offsetY + 70);
    };
    lineDivRef.current.onmouseout = (e) => {
      if (!pathRef.current) return;
      gsap.to(pathRef.current, {
        attr: { d: "M-10,80 Q60,80 100,80" },
        ease: Elastic.easeOut.config(2, 0.4),
      });
    };
  });

  function updateWidth(val: number) {
    if (!pathRef.current) return;

    pathRef.current.setAttribute("d", `M-10,80 Q60 ${val}  100,80`);
  }

  // useEffect(() => {
  //   if (!nameRef.current) return;
  //   if (showText) {
  //     nameRef.current.classList.add("hidden");
  //   } else {
  //     nameRef.current.classList.remove("hidden");
  //   }
  // });
  // const controls = useAnimation();

  // const springX = useTransform(
  //   x,
  //   [160, 80, 160, 20, 120, 100, 90, 100, 80], // Adjust the range based on your requirement
  //   [160, 80, 160, 20, 120, 100, 90, 100, 80] // Adjust the displacement based on your requirement
  // );

  // const handleDragEnd = () => {
  //   controls.start({
  //     x: 0,
  //     transition: { type: "spring", stiffness: 500, damping: 30 },
  //   });
  // };

  // function showText() {
  //   if (!backText.current) return;
  //   if (!nameRef.current) return;
  //   nameRef.current.classList.add("hidden");
  //   backText.current.classList.remove("hidden");
  //   backText.current.classList.add("flex");
  //   backText.current.classList.remove("");
  // }
  // console.log(showText);
  return (
    <>
      <div
        style={{
          fontFamily: "Bluu",
        }}
        id="home"
        className="relative bg-[#121212] inset-0 home min-h-[850px] h-screen shadow-md font-bold z-10  text-[#dfd3c3] overflow-hidden"
      >
        <AnimatePresence mode="sync">
          {!showText && (
            <div
              ref={nameRef}
              className="  relative h-full w-11/12 md:w-5/6  mx-auto  "
            >
              <div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //   delayChildren: 3,
                //   delay: 3,
                //   when: "afterChildren",
                // }}
                className=" text-[#f4805b]/40  left-0 w-full  text-[16px] pt-11 font-bold absolute top-1/2 -translate-y-1/2 "
              >
                <motion.div className="flex mt-2 ">
                  {Fname?.map((name, id) => (
                    <motion.h1
                      variants={nameVariant}
                      animate={{ ...nameVariant.animate(id) }}
                      initial="initial"
                      key={`${id}-h-fname-${id}`}
                      className="  pl-[5px] md:pl-0 drop-shadow-md text-7xl md:text-9xl h_name cursor-pointer hover:animate-rubberBand"
                    >
                      {name}
                    </motion.h1>
                  ))}
                </motion.div>
                <div className="flex ">
                  {Lname?.map((name, id) => (
                    <motion.h1
                      variants={nameVariant}
                      animate={{ ...nameVariant.animate(id) }}
                      initial="initial"
                      key={`${id}-h-lname-${id}`}
                      className=" pl-[6px] md:pl-0  text-7xl md:text-9xl mt-2 h_surname hover:animate-rubberBand"
                    >
                      {name}
                    </motion.h1>
                  ))}
                </div>
                <div
                  onClick={() => setShowText((prev) => !prev)}
                  className=" cursor-pointer  duration-300  text-[#dfd3c3] flex  relative max-w-max top-0"
                >
                  <div
                    ref={lineDivRef}
                    onClick={setImages}
                    style={{
                      fontFamily: "CG",
                    }}
                    className=" relative z-50  transition-all ease-in-out px-3 py-1 "
                  >
                    <svg
                      preserveAspectRatio="xMidYMid "
                      stroke="#f4805b"
                      strokeWidth={2}
                      strokeLinecap="square"
                      fill="none"
                      style={{
                        zIndex: 100,
                        height: "100px",
                        // background: "yellow",
                        width: "100%",
                        position: "absolute",
                        left: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <motion.path
                        style={{
                          position: "absolute",
                        }}
                        initial={{ translateY: "-30%", opacity: 0, scaleX: 0 }}
                        animate={{
                          translateY: "-30%",
                          opacity: 1,
                          scaleX: 1,
                        }}
                        transition={{ duration: 1, delay: 7 }}
                        viewBox="0px 100px"
                        ref={pathRef}
                        d="M10,80 Q190,80 290,80"
                      >
                        {" "}
                      </motion.path>
                    </svg>

                    <motion.h6
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 1, delay: 7 }}
                      className="z-[80] text-xl  xs:text-2xl"
                    >
                      WHO?
                    </motion.h6>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none text-[#dfd3c3] tracking-widest md:tracking-normal font-semibold  gap-y-2  mt-1 xs:mt-0 text-7xl md:text-9xl  flex flex-col -z-1 absolute top-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 6 }}
                  className="shade_text1"
                >
                  nitin
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 6 }}
                  className="shade_text2"
                >
                  nautiyal
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        <div
          className="z-50 flex cursor-pointer animate-pulse transition hover:scale-125 duration-300 xl:hidden absolute bottom-5 right-5"
          ref={miniCube}
          onClick={() => {
            window.location.href = "/three-js";
          }}
        >
          <span className="text-xl text-center m-auto">3D😇 {"-->"}</span>
          <IoCubeOutline className=" w-[50px] h-[50px] text-blue-700" />
        </div>

        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            exit={{ opacity: 0 }}
            className=" flex justify-end img_div -mx-5 min-[400px]:-mx-10 "
          >
            <div className="round_img " id="my-image"></div>
            <div className="round_text" id="my-image">
              {roundText.map((char: string, i: number) => (
                <span
                  key={i}
                  className=" text-[#f9d5ca]"
                  style={{ transform: `rotate(${i * 10}deg)` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {showText && (
          <motion.div
            style={{ fontFamily: "CG" }}
            ref={backText}
            className="md+:flex name z-40 absolute top-[40%] xs:top-[45%] md:top-1/2 -translate-y-1/2 lg:top-0 items-center  lg:translate-y-0  mx-auto text-clip xss:text-center md:text-left   w-11/12 md:w-5/6 inset-0 font-semibold tracking-tight  text-[18px] xss:text-[20px]  xs:text-[25px] sm:text-3xl md:text-3xl md:tracking-normal  md+:tracking-widest  text-[#f5e4bc] "
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVar}
              className="md:w-1/2 md+:w-1/2 flex flex-col gap-y-10"
            >
              <div className="flex flex-col gap-y-3 ">
                <motion.h2 variants={innerText} className="">
                  Hey there, I am Nitin Nautiyal, Freelancer & Front-End
                  Developer
                </motion.h2>
                <motion.h3 variants={innerText} className="text-gray-200  ">
                  I love creating beautiful user experiences.
                </motion.h3>
              </div>
              <motion.div
                variants={innerText}
                className="w-max mx-auto md:mx-0 "
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={1000}
                  className=" text-base font-semibold text-[#f4805b] border-2 border-[#f4805b] flex self-center md:self-start py-2 px-5 cursor-pointer hover:animate-pulse hover:scale-110 duration-300 transition ease-in-out "
                >
                  Get in touch
                  <BsArrow90DegRight className="h-5 w-5  ml-3 mt-1  rotate-90 my-auto"></BsArrow90DegRight>
                </Link>
              </motion.div>
            </motion.div>
            {/* </div> */}
          </motion.div>
        )}
      </div>
      <CubeCanvas cubeRef={CubeRef} />
    </>
  );
}

export default Home;

// <div className="img_div h-[50%] w-[400px]  mx-60 absolute top-[50%] translate-y-[-50%] rounded-full bg-cover bg-no-repeat bg-center bg-[url(../public/assets/IMG-20190701-WA0001_-_Copy-removebg-preview.png)]">
{
  /* <div className=" text-7xl h-full w-full rounded-full absolute  ">
{
  roundText.map((char, i) =>(
    <span className={`absolute w-full h-full transform rotate-[${i*10})deg] origin-[0px 100px] text-[1.2em]`}>{char}</span>
  ))
}
</div>
</div> */
}
