import gsap from 'gsap'
// import ScrollSmoother from 'gsap/ScrollSmoother'
import React, { useEffect, useState } from 'react'
import { AiOutlineInstagram, AiFillGithub, AiFillHome, AiOutlineContacts } from 'react-icons/ai'
import { BsWhatsapp, BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { GiSkills } from 'react-icons/gi'
import { GrPersonalComputer } from 'react-icons/gr'
import { Link } from 'react-scroll'
import { contextValue } from '../context/Context'
function Header() {
  const [toggleMenu, setToggleMenu] = useState(true)
  const { menuRef } = contextValue()
  const tl = gsap.timeline()
  useEffect(() => {

    tl.fromTo('.anim', { y: -200 }, { y: 0, duration: 0.5, ease: 'Power2.easeIn' })

  })

  function setMenu() {
    setToggleMenu(true)
    if (toggleMenu) {
      menuRef.current.classList.add('open')
      return setToggleMenu(false)
    }
    else {
      menuRef.current.classList.remove('open')
      return setToggleMenu(true)
    }

  }
  return (
    <div style={{fontFamily: 'Coconat'}} className="">

      <div   className="bg-[#f5e4bc] text-[#292823] header fixed z-40 top-0 w-screen text-shade-dark grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5  items-center h-16 ">
        <div className="ml-5  xss:ml-12 xl:ml-16 flex col-span-1 ">
          <div className="flex  justify-center sm:m-auto gap-1 md:gap-3">
            <img src="assets/logo.png" alt="port_img" className='h-10 m-auto  object-contain ' />
            <h3 style={{fontFamily: 'Ignazio'}} className='m-auto xs+:pr-4 text-xl font-bold whitespace-nowrap sm:font-bold    '>Nitin's Folio</h3>
          </div>
          <span className='border-r-2  h-8 my-auto border-[#3333] hidden md:flex md:mx-auto '></span>
        </div>
        <div className='hidden md:flex lg:justify-start text-sm font-semibold  tracking-tighter md:gap-3  lg:gap-5  xl:gap-10  col-span-1 md:col-span-2 ml-3 xl:col-span-3'>
          <Link to='home' spy={true} smooth={true} offset={-64} duration={1000} className="hover:scale-110 transition-all  hover:bg-black/30  rounded-lg ease-in-out py-1.5  px-3 text-base ">Home</Link>
          <Link to='about' spy={true} smooth={true} offset={-64} duration={1000} className="hover:scale-110 transition-all  whitespace-nowrap hover:bg-black/30 rounded-lg ease-in-out py-1.5  px-3 text-base ">About Me</Link>
          <Link to='skills' spy={true} smooth={true} offset={-64} duration={1000} className="hover:scale-110 transition-all  hover:bg-black/30 rounded-lg ease-in-out py-1.5  px-3 text-base ">Skills</Link>
          <Link to='work' spy={true} smooth={true} offset={-64} duration={1000} className="hover:scale-110 transition-all  hover:bg-black/30 rounded-lg ease-in-out py-1.5  px-3 text-base ">Work</Link>
          <Link to='contact' spy={true} smooth={true} offset={-64} duration={1000} className="hover:scale-110 transition-all  hover:bg-black/30 rounded-lg ease-in-out py-1.5  px-3 text-base ">Contact</Link>
          </div>
        <div className="hidden md:flex justify-end mx-3 col-span-1 ml-10 mr-7" >
          <div className=" flex md:justify-end mx-3 gap-2 md:gap-3 lg:gap-5 " data-animation='to-top'>

            <div className="h-5 ">
              <a target='_blank' href='https://www.linkedin.com/in/nitin-nautiyal-75a67619a/'><FaLinkedinIn aria-hidden='true' className='h-6 transition-colors duration-300 hover:text-blue-600 w-6  bg-transparent '></FaLinkedinIn></a>
              {/* <a  target='_blank' href='https://www.linkedin.com/in/nitin-nautiyal-75a67619a/'><FaLinkedinIn aria-hidden='true' className='h-6 w-6  bg-transparent'></FaLinkedinIn></a> */}
            </div>
            <div className="h-6 overflow-hidden">
              <a target='_blank' href='https://github.com/Nautyy9/'><AiFillGithub aria-hidden='true' className='h-6 w-6 transition-colors duration-300 hover:text-gray-600 bg-transparent '></AiFillGithub></a>
              <a target='_blank' href='https://github.com/Nautyy9/'><AiFillGithub aria-hidden='true' className='h-6 w-6 transition-colors duration-300 hover:text-gray-600 bg-transparent'></AiFillGithub></a>
            </div>
            <div className="h-6 overflow-hidden">
              <a target='_blank' href='https://wa.me/919990989306'><BsWhatsapp className='h-6 w-6  transition-colors duration-300 hover:text-green-700 bg-transparent ' aria-hidden='true'></BsWhatsapp></a>
              <a target='_blank' href='https://wa.me/919990989306'><BsWhatsapp className='h-6 w-6  transition-colors duration-300 hover:text-green-700 bg-transparent' aria-hidden='true'></BsWhatsapp></a>
            </div>
            <div className="h-6 overflow-hidden ">
              <a target="_blank" href='https://www.instagram.com/nautyy9/'><AiOutlineInstagram aria-hidden='true' className='insta h-7 w-6 transition-colors duration-300 hover:text-white rounded-lg  bg-transparent  '></AiOutlineInstagram></a>
              <a target="_blank" href='https://www.instagram.com/nautyy9/'><AiOutlineInstagram aria-hidden='true' className='insta h-7 w-6 transition-colors duration-300 hover:text-white rounded-lg  bg-transparent '></AiOutlineInstagram></a>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:hidden flex justify-end mr-5 xs:mr-7">
          <div ref={menuRef} className="menu-btn" onClick={setMenu}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>

      </div>
      {!toggleMenu && <div className=" anim border-t-2 border-[#171717] shadow-black mt-16 h-max flex flex-col xs:flex-row justify-center xs:justify-around items-center xs:items-start bg-[#f5e4bc] text-[#292823] header fixed z-50 top-0 w-screen text-shade-dark  ">
        <div className="routes flex flex-col my-5">
          <h1 className='border-b-2 border-black '>Route</h1>
          <div className="flex flex-col items-start mt-3 gap-2">
            <div className="flex xs:flex-col gap-2 gap-x-5">
              <Link to='home' spy={true} onClick={() => {
                menuRef.current.classList.remove('open')
                setToggleMenu(true)
              }} smooth={true} offset={-200} duration={1000} className='text-lg flex text-[20px] justify-start'><AiFillHome className='border border-[#171717] h-8 w-8 p-1 mr-1'></AiFillHome>Home</Link>
              <Link to='about' spy={true} smooth={true} offset={-345} duration={1000} className='text-lg flex text-[20px] justify-start'><SiAboutdotme className=' border border-[#171717] h-8 w-8 p-1  mr-1'></SiAboutdotme>About</Link>
            </div>
            <div className="flex xs:flex-col gap-2 gap-x-5">
              <Link to='skills' spy={true} smooth={true} offset={-345} duration={1000} className='text-lg flex text-[20px] justify-start'><GiSkills className='border border-[#171717] h-8 w-8 p-1 mr-1'></GiSkills>Skills</Link>
              <Link to='work' spy={true} smooth={true} offset={-345} duration={1000} className='text-lg flex text-[20px] justify-start ml-1 xs:ml-0'><GrPersonalComputer className='border border-[#171717] h-8 w-8 p-1 mr-1'></GrPersonalComputer>Work</Link>
            </div>
            <Link to='contact' spy={true} smooth={true} offset={-345} duration={1000} className='text-lg flex text-[20px] justify-start'><AiOutlineContacts className='border border-[#171717] h-8 w-8 p-1 mr-1'></AiOutlineContacts>Contact</Link>
          </div>
        </div>
        <div className="handles flex flex-col  my-5  ">
          <h1 className='border-b-2 border-black'>Handles</h1>
          <div className="flex xs:flex-col mt-3 gap-2 items-start ">
            <div className="flex flex-col gap-2 ">
              <a target='_blank' href='https://www.linkedin.com/in/nitin-nautiyal-75a67619a/' className='flex justify-self-start  text-center text-[20px]'><FaLinkedinIn aria-hidden='true' className=' mr-1 border border-[#171717] h-8 w-8 p-1  bg-transparent '></FaLinkedinIn>LinkedIn</a>
              <a target='_blank' href='https://github.com/Nautyy9/' className='flex justify-self-start  text-center text-[20px]'><AiFillGithub aria-hidden='true' className='mr-1 border border-[#171717] h-8 w-8 p-1 bg-transparent '></AiFillGithub>Github</a>
            </div>
            <div className="flex flex-col gap-2 ">
              <a target='_blank' href='https://wa.me/919990989306' className='flex justify-self-start text-center text-[19px]'><BsWhatsapp className='mr-1 border border-[#171717] h-8 w-8 p-1  bg-transparent ' aria-hidden='true'></BsWhatsapp>Whatsapp</a>
              <a target="_blank" href='https://www.instagram.com/nautyy9/' className='mr-1 justify-self-start flex  text-center text-[20px]'><AiOutlineInstagram aria-hidden='true' className='mr-1 border border-[#171717] h-8 w-8 p-1  bg-transparent '></AiOutlineInstagram>Instagram</a>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Header