import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { contextValue } from '../context/Context'
import  vanilaTilt from 'vanilla-tilt'
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb,SiExpress,SiSocketdotio} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'

function Work() {
  const {work_ref , scrolldiv_ref, section_ref} = contextValue()
  const [minHeight, setMinHeight] = useState(false)
  
  let imgdiv_ref = useRef<HTMLDivElement>(null!)
  let imgdiv2_ref = useRef<HTMLDivElement>(null!)
  let imgdiv3_ref = useRef<HTMLDivElement>(null!)
  let imgdiv4_ref = useRef<HTMLDivElement>(null!)

  useEffect(() =>{
    vanilaTilt.init([imgdiv_ref.current, imgdiv2_ref.current, imgdiv3_ref.current, imgdiv4_ref.current])
    // document.cookie = "name=nitin;value=suiiiii"
  }, [vanilaTilt])
  const sections =['S','e','c','t','i','o','n','🙃','4']
  
  useEffect(() =>{
    console.log(work_ref.current)
    if(work_ref.current.style.height > '2100px'){
      console.log('in')
      setMinHeight(true)
    }
  }, [work_ref])
  return (
    

    <div className=''>

    <div style={{fontFamily: 'Coconat'}}  ref={work_ref} className='bg-[#f5e4bc] h-[90%] mx-auto  work  drop-shadow-md shadow-work relative ' >
      <div className={` ${!setMinHeight ? ' top-[100px]' : 'top-[50px] '} sticky-wrapper w-full mx-auto overflow-hidden sticky z-10 py-10 md:pt-0`}>
        <div style={{willChange: 'transform', transform: 'translate3d(0vw, 0px, 0px)', transformStyle: 'preserve-3d'}}  ref={scrolldiv_ref} className="scroll-div  h-screen  flex relative">
          <div className="elements h-full snap-both snap-mandatory gap-x-40 gap-y-20 md:gap-y-0">
            <div className={` flex flex-col md:flex-row justify-start ${!setMinHeight ? "gap-y-20" : "gap-y-10" }  md:gap-y-0 md:justify-start items-center mx-auto  h-full  `}>
              <div className={`flex-col flex  md:w-1/2   items-center justify-center  ${!setMinHeight ? "gap-y-5" : "gap-y-3" }`}>
                
                <h1 className='font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] '>DJT FINSERVE</h1>
                <h3 className='bg-[#5C4033] py-0.5 md+:py-1  lg+:py-2 px-2  lg+:text-lg  text-white'>internship</h3>
                <div className=" flex gap-5 justify-center mx-auto  md:gap-10">
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <AiFillHtml5  className='h-full w-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                  <SiJavascript  className='h-full w-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                  <DiCss3  className='w-full h-full'/>
                  </div>
                  <p></p>
                </div>
                  <h2 className='text-lg md+:text-2xl'>Preview</h2>
                <div className='w-3/4 md:w-1/2 font-medium  text-[#171717] justify-center flex md:flex-col  md:flex-nowrap lg:flex-row flex-wrap gap-4 object-contain' style={{fontFamily: 'Ignazio'}}>
                  <img src="/assets/finserve_2.png" className=' h-20 w-20 md:h-full cursor-pointer md:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black rounded-md' alt="project_sample1" />
                  <img src="/assets/finserve_1.png" className=' h-20 w-20 md:h-full cursor-pointer md:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black rounded-md' alt="project_sample2" />
                </div>
              </div>
              <div className="md:w-1/2 md:h-4/5 md:my-auto  justify-center   md:items-center flex">
                <a target="_blank" href='https://djt-finserve.netlify.app/'>
                  <div ref={imgdiv_ref} className="rounded-lg cursor-not-allowed  h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px]  md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover">
                    <img src="/assets/finserve_1.png" className='h-full  hover:scale-105 transition-transform duration-200 ease-in-out rounded-md w-full object-cover bg-contain' alt="project-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="elements h-full snap-both snap-mandatory  ">
            <div className={` flex flex-col md:flex-row justify-start md:justify-center items-center ${!setMinHeight ? "gap-y-20" : "gap-y-10" } md:gap-y-0 mx-auto  h-full  `}>
              <div className={`flex-col flex  md:w-1/2   items-center justify-center ${!setMinHeight ? "gap-y-5" : "gap-y-3" } `}>
                <h1 className='font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] '>Kabadi [Scrap]</h1>
                <h3 className='bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white'>client</h3>
                <div className=" flex gap-5 justify-center mx-auto  md:gap-10">
                <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <SiReact  className='h-full w-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                  <SiTypescript  className='h-full w-full'/>
                  </div>
                </div>
                  <h2 className='text-lg md+:text-2xl'>Preview</h2>
                <div className='w-3/4 md:w-1/2  font-medium tracking-normal text-[#171717]  justify-center flex md:flex-col lg:flex-row flex-wrap md:flex-nowrap gap-4 object-contain' style={{fontFamily: 'Ignazio'}}>
                  <img src="/assets/scrap2.png" className='h-20 w-20 md:h-full cursor-pointer md:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black rounded-md' alt="project_sample1" />
                  <img src="/assets/scrap3.png" className='h-20 w-20 md:h-full cursor-pointer md:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black rounded-md' alt="project_sample2" />
                </div>
              </div>
              <div className="md:w-1/2 md:h-4/5   justify-center   items-center flex">
                <a target="_blank" href='https://kabadi.vercel.app/'>
                  <div ref={imgdiv3_ref} className="rounded-lg cursor-not-allowed  h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px]  md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover">
                    <img src="/assets/scrap_1.png" className='h-full   hover:scale-105 transition-transform duration-200 ease-in-out  rounded-md w-full object-cover bg-contain' alt="project-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="elements h-full snap-both snap-mandatory  ">
            <div className={` flex flex-col md:flex-row justify-start md:justify-center items-center ${!setMinHeight ? "gap-y-20" : "gap-y-10" } md:gap-y-0 mx-auto  h-full  `}>
              <div className={`flex-col flex  md:w-1/2   items-center justify-center ${!setMinHeight ? "gap-y-5" : "gap-y-3" } `}>
                <h1 className='font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] '>Image Gallery</h1>
                <h3 className='bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white'>self project</h3>
                <div className=" flex gap-5 justify-center mx-auto  md:gap-10">
                <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <SiNodedotjs  className='h-full w-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <SiExpress  className='h-full w-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <SiMongodb  className='w-full h-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <SiJavascript  className='w-full h-full'/>
                  </div>
                </div>
                <h2 className='text-lg md+:text-2xl'>Preview</h2>
                <div className='w-3/4 md:w-1/2  font-medium tracking-normal text-[#171717] text-lg justify-center flex md:flex-col  lg:flex-row flex-nowrap md:flex-wrap gap-4 object-contain' style={{fontFamily: 'Ignazio'}}>
                  <img src="/assets/profile1.png" className='h-20 w-20 md:h-full cursor-pointer md:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black rounded-md' alt="project_sample1" />
                  <img src="/assets/profile2.png" className='h-20 w-20 md:h-full cursor-pointer md:w-full lg:h-28 lg:w-28 lg+:h-40 lg+:w-40 object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-black rounded-md' alt="project_sample2" />
                </div>
              </div>
              <div className="md:w-1/2 md:h-4/5   justify-center   items-center flex">
                <a target="_blank" href='https://imagegallery-eaha.onrender.com'>
                  <div ref={imgdiv4_ref} className=" h-[250px] w-[250px] border-2 border-black xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px]  md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover">
                    <img src="/assets/profile3.png" className='my-3 h-max  object-contain  hover:scale-105 transition-transform duration-200 ease-in-out  rounded-md w-full  bg-cover' alt="project-1" />
                    <img src="/assets/profile4.png" className='my-3 h-max  object-contain  hover:scale-105 transition-transform duration-200 ease-in-out  rounded-md w-full  bg-cover' alt="project-1" />

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="elements h-full snap-both snap-mandatory  ">
            <div className={` flex flex-col md:flex-row justify-start md:justify-center items-center ${!setMinHeight ? "gap-y-20" : "gap-y-10" } md:gap-y-0 mx-auto  h-full  `}>
              <div className={`flex-col flex  md:w-1/2   items-center justify-center ${!setMinHeight ? "gap-y-5" : "gap-y-3" } `}>

                <h1 className='font-semibold mb-2 text-2xl md+:text-3xl lg+:text-4xl text-[#171717] '>Smart Cart</h1>
                <h3 className='bg-[#5C4033] py-1  lg+:py-2 px-2  lg+:text-lg text-white'>internship</h3>
                <div className=" flex gap-5 justify-center mx-auto  md:gap-10">
                <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                    <SiReact  className='h-full w-full'/>
                  </div>
                  <div className="h-8 w-8 lg+:h-16 lg+:w-16 border-gray-700 border-2">
                  <SiSocketdotio  className='h-full w-full'/>
                  </div>
                </div>
                <h2 className='text-lg md+:text-2xl'>Preview</h2>
                <div className='w-3/4 md:w-1/2  font-medium tracking-normal text-[#171717] text-lg justify-center flex md:flex-col lg:flex-row flex-nowrap md:flex-wrap gap-4 object-contain' style={{fontFamily: 'Ignazio'}}>
                  <span className='border-2 border-[#171717] w-max font-semibold text-red-600 px-4 py-2'>Live preview not availble! </span>
                </div>
              </div>
              <div className="md:w-1/2 md:h-4/5   justify-center   items-center flex">  
                  <div ref={imgdiv2_ref} className="cursor-not-allowed  h-[250px] w-[250px] xss:h-[300px] xss:w-[300px] xs:h-[350px] xs:w-[350px]  md+:h-[430px] md+:w-[430px] lg+:h-[500px] lg+:w-[500px]  object-cover  bg-cover">
                    <img src="/assets/market.png" className='h-full  hover:scale-105 transition-transform duration-200 ease-in-out  rounded-md w-full object-cover bg-contain' alt="project-1" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div style={{visibility: 'hidden', fontFamily: 'Coconat'}} ref={section_ref} className=" h-full -z-1 text-center hidden xs+:flex  text-[#5C4033] py-4 px-1  fixed  right-10 sm:right-5  top-[50%] translate-y-[-50%] md+:my-auto  tracking-normal">
        <button className="rotate-[180deg] bg-[#f5e4bc] p-2 py-4  h-max my-auto">
          { sections.map((section, id) => (
            <h1 key={id} className='sec_part  hover:scale-125 transition duration-200  textxt-2xl'>{section}</h1> 
            ))
}
        </button>  
      </div>
    </div>
  )
}

export default Work