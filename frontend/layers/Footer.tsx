import { AiFillGithub } from 'react-icons/ai'
import {BsWhatsapp,  BsArrowUpRight} from 'react-icons/bs'
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import { Link } from 'react-scroll'
function Footer() {
  return (
    <div className='w-full h-max md:h-96 bg-[#f5e4bc] flex  text-[#171717]  shadow-lg z-50 p-2  footer'>
      <div className=" flex flex-col justify-between  w-full h-full border-2 lg:border-none border-[#171717] p-4 lg:py-0 lg:px-4">
        <div className="text-5xl flex flex-col w-full justify-center gap-y-14 sm:gap-x-32 text-[#171717] my-10  ">
          <div className="flex flex-col xs:pl-20 xl:pl-32 xl+:pl-36">
            <p className='text-lg'>Wanna Collaborate?</p>
            <Link to='contact' spy={true} smooth={true} offset={-64} duration={1000} className="gap-x-10 flex  ">
              <p className='text-6xl'>Let's Talk</p>
              <BsArrowUpRight className='hidden sm:inline-block h-10 w-10 my-auto'/> 
            </Link >
          </div>
            <div className="flex gap-x-4 sm:gap-x-10 md:gap-x-20 lg:gap-x-32 items-center my-auto justify-center border-y-2 border-[#171717]">

            <a target='_blank' href='https://github.com/Nautyy9/' ><AiFillGithub className=' h-11 w-11  text-[#171717] hover:text-gray-700 transition-colors duration-200 ease-in'/></a>/
            <a target='_blank' href='https://wa.me/919990989306' ><BsWhatsapp  className=' h-10 w-10  text-[#171717] hover:text-green-600 transition-colors duration-200 ease-in'/></a>/
            <a target="_blank" href='https://www.instagram.com/nautyy9/'><FaInstagram  className=' h-10 w-10 text-[#171717]  rounded-xl hover:text-white  insta'/></a>/
            <a target='_blank' href='https://www.linkedin.com/in/nitin-nautiyal-75a67619a/'><FaLinkedinIn className=' h-10 w-10  text-[#171717] hover:text-blue-600 transition-colors duration-200 ease-in'/></a>
          </div>
        </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-y-5 md:gap-y-2 md:items-end font-medium xl:gap-x-20   my-5 sm:my-2  ">
        <div className="flex gap-x-10 text-2xl">
          <Link to='skills' spy={true} smooth={true} offset={-64} duration={1000} className='  hover:bg-black/20 transition-colors duration-200 rounded-lg py-2 px-3'>Skills</Link>
          <Link to='work' spy={true} smooth={true} offset={-64} duration={1000} className=' hover:bg-black/20 transition-colors duration-200 rounded-lg py-2 px-3'>Work</Link>
        </div>
        <Link to='home' spy={true} smooth={true} offset={-64} duration={1000} className='text-4xl border-y-2 border-[#171717] '>Nitin's Folio</Link>
        <div className="flex gap-x-10 text-2xl">
          <Link to='about' spy={true} smooth={true} offset={-64} duration={1000} className=' hover:bg-black/20 transition-colors duration-200 rounded-lg py-2 px-3'>About Me</Link>
          <Link to='contact' spy={true} smooth={true} offset={-64} duration={1000} className=' hover:bg-black/20 transition-colors duration-200 rounded-lg py-2 px-3'>Contact</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer