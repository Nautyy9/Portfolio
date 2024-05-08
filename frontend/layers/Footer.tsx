import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp, BsArrowUpRight } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-scroll";
function Footer() {
  return (
    <div
      id="footer"
      className=" w-full h-max   flex text-[#171717] z-50 footer"
    >
      <div className="w-full my-10 xs:w-11/12 mx-auto gap-y-10 md:w-5/6 flex flex-col justify-between  h-full ">
        <div className=" text-5xl flex flex-col w-full justify-center gap-y-10 sm:gap-x-32 text-[#171717]   ">
          <div className="w-11/12 mx-auto flex flex-col ">
            <p className="text-lg">Wanna Collaborate?</p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1000}
              className="cursor-pointer gap-x-10 flex  "
            >
              <h2
                style={{ fontFamily: "Bluu" }}
                className="text-4xl  font- sm:text-6xl"
              >
                Let's Talk
              </h2>
              <BsArrowUpRight className="hidden sm:inline-block h-10 w-10 my-auto" />
            </Link>
          </div>
          <div className="flex gap-x-4 xss:gap-x-8 xs:gap-x-10 md:gap-x-16 lg:gap-24 xl:gap-x-32 items-center my-auto justify-center border-y-2 border-[#171717]">
            <a target="_blank" href="https://github.com/Nautyy9/">
              <AiFillGithub className="hover:scale-125  h-7 w-7  sm:h-11 sm:w-11  text-[#171717] hover:text-gray-700 transition-colors duration-200 ease-in" />
            </a>
            /
            <a target="_blank" href="https://wa.me/919990989306">
              <BsWhatsapp className="hover:scale-125  h-7 w-7 sm:h-10 sm:w-10  text-[#171717] hover:text-green-600 transition-colors duration-200 ease-in" />
            </a>
            /
            <a target="_blank" href="https://www.instagram.com/nautyy9/">
              <FaInstagram className="hover:scale-125  h-7 w-7 sm:h-10 sm:w-10 text-[#171717]  rounded-xl hover:text-white  insta" />
            </a>
            /
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nitin-nautiyal-75a67619a/"
            >
              <FaLinkedinIn className="hover:scale-125  h-7 w-7 sm:h-10 sm:w-10  text-[#171717] hover:text-blue-600 transition-colors duration-200 ease-in" />
            </a>
          </div>
        </div>
        <div className="relative  grid grid-flow-row sm:grid-flow-col columns-3   md:items-end gap-y-3 md:gap-y-2  xl:gap-x-20 whitespace-nowrap  ">
          <div className=" flex-wrap gap-y-10 flex w-full col-span-1   justify-around  text-xl  sm:text-2xl">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1000}
              className="hover:scale-110 h-max max-[300px]:w-28 w-32 text-center hover:bg-black/10 cursor-pointer border-2 border-[#171717] transition-all ease-in-out py-0.5 px-1.5"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1000}
              className="hover:scale-110 max-[300px]:w-28 w-32 text-center h-max hover:bg-black/10 cursor-pointer border-2 border-[#171717] transition-all ease-in-out py-0.5 px-1.5"
            >
              Contact
            </Link>
          </div>
          <Link
            style={{ fontFamily: "Bluu" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={1000}
            className="order-first sm:order-none   h-max w-max  place-self-center justify-self-center col-span-1 md:block whitespace-nowrap cursor-pointer text-4xl border-y-2 border-[#171717] "
          >
            Nitin's Folio
          </Link>
          <div className="flex-wrap gap-y-10 col-span-1  flex w-full justify-around  text-xl sm:text-2xl">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1000}
              className="hover:scale-110 max-[300px]:w-28 w-32 text-center h-max hover:bg-black/10 cursor-pointer border-2 border-[#171717] transition-all ease-in-out py-0.5 px-1.5"
            >
              About Me
            </Link>
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1000}
              className="hover:scale-110 max-[300px]:w-28 w-32 text-center h-max  hover:bg-black/10 cursor-pointer border-2 border-[#171717] transition-all ease-in-out py-0.5 px-1.5"
            >
              Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
