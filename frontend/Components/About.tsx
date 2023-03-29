import React, { useEffect, useRef , useState} from 'react'
import  vanilaTilt from 'vanilla-tilt'
import {HiOutlineDownload} from 'react-icons/hi'
function About() {
  const [hover, setHover] = useState(false)
  const sections =['S','e','c','t','i','o','n','🙃','2']
  let card_ref = useRef<HTMLDivElement >(null!);
  useEffect(() =>{
    setHover(false)
    card_ref.current.onmouseover = () =>{
      setHover(true)
    }
    card_ref.current.onmouseout = () =>{
      setHover(false)
    }
    vanilaTilt.init(card_ref.current)
    // console.log(card_ref);
    
  } , [])

  return (
    <div style={{boxShadow: '0px -4px 4px  rgba(0,0,0,0.15), 4px 0px 4px  rgba(0,0,0,0.15),0px 4px 4px rgba(0,0,0,0.15), -4px 0px 4px  rgba(0,0,0,0.15)' }} className='about bg-[#f5e4bc] text-[#292823] relative flex lg:h-[1080px] '>
      <div className="  grid grid-flow-row lg:grid-flow-col xl+:grid-cols-2">
        <div className="col-span-1  flex"  style={{fontFamily: 'Coconat'}}>
          <div className="flex justify-center items-start lg:items-center flex-col gap-y-4 w-5/6 xs:w-3/4 mx-auto">

          <h1 className='text-[28px] text-lg xs:text-xl lg+:text-2xl  underline lg:no-underline xs:font-semibold mb-4 mt-20 xs:w-3/4 lg:w-auto '>Specializing in refined digital web experiences with a focus on animated, responsive, and interactive content.</h1> 
          <h2 className='text-sm text-[18px] xs:text-lg lg+:text-xl xs:w-11/12 lg:w-auto' style={{fontFamily: 'Coconat'}}>Partnering with agencies and brands that value design and development integrity.</h2> 
          <h2 className='text-sm text-[18px]  xs:text-lg lg+:text-xl xs:w-11/12 lg:w-auto'>Delivering highly executed front-end user experiences by paying close attention to the nuances of design, optimization, and performance.</h2>
          <div className="flex flex-col  xs+:flex-row lg:flex-col gap-y-8 lg+:flex-row mb-10 mt-5 lg:mt-10  lg:gap-x-10 w-full items-center justify-center xs:justify-between lg:justify-around xs+:pr-20 md:pr-40 lg:pr-0   xl:mr-20">
            <div className=" flex flex-col items-center gap-y-2 xs:ml-4">
              <h1 className='text-base text-[22px] xs:text-2xl mx-auto px-2 border-2 border-black '>Status</h1>
              <h3 className='text-base text-[18px] border-b border-black text-center w-max xs:px-2 mx-auto mt-2'>Fresher</h3>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              <h1 className='text-base text-[22px] xs:text-2xl mx-auto border-2 px-2 border-black '>Services</h1>
              <h3 className='text-base text-[18px]  mt-2 border-b border-black text-center w-max xs:px-2 mx-auto'>Development</h3>
              <h6 className='text-sm underline text-[16px] text-center mt-2'>Front-end Development</h6>
              <h6 className='text-sm underline text-[16px] text-center mt-2'>Back-end Development</h6>
              <h6 className='text-sm underline text-[16px] text-center mt-2'>Type-safe Code</h6>

            </div>
          </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto pt-10 pb-20   xs:m-0 xs:w-full col-span-1 flex flex-col items-center lg:mr-32 xl+:mr-12  lg+:mb-0">
          <div ref={card_ref} style={{fontFamily: 'Ignazio'}} className={hover? "border-2 border-[#171717] card cursor-pointer transition-colors duration-500 ease-in h-[500px] w-full xss:w-[300px] xs:h-[600px] xs:w-[400px] md:h-[735px] md:w-[550px] bg-black opacity-90 flex flex-col my-auto rotate-45 shadow-lg shadow-gray-600 drop-shadow-md": " p-6 card cursor-pointer transition-colors duration-500 ease-in h-[500px] w-full xss:w-[300px] xs:h-[600px] xs:w-[400px] md:h-[735px] md:w-[550px] bg-black opacity-90 flex flex-col my-auto rotate-45 shadow-lg shadow-gray-600 drop-shadow-md"}>
            { hover ? <div className='w-full h-full   relative ' >
              <a  href='/assets/resume.pdf' download="nitin_resume.pdf">
                <img src="/assets/s1.png" className='text-white object-fill bg-cover absolute h-full w-full' alt="img"/>
                <div className="shaded absolute w-full h-[40%] p-2 bottom-0 bg-gradient-to-b from-gray-200 to-black  opacity-90  justify-center items-center  flex-col flex">
                  <div className="flex">
                    <h1 style={{fontFamily: 'Ignazio'}} className="text-white text-xl xs:text-3xl">My Resume</h1>
                    <HiOutlineDownload className='h-5 w-5 ml-2 my-auto text-white'></HiOutlineDownload>
                  </div>
                </div>
              </a>

            </div> :
              <div>
            <div className="head flex relative">  
              <h1 className='text-white drop-shadow-lg text-base xs:text-xl md:text-3xl absolute xs:ml-2 col-span-1'>MY RESUME</h1> 
              <div className="flex h-max w-full xs:mr-2 flex-col  items-end col-span-2 text-white text-xl  text-center ">
                <span className='border-t-8  drop-shadow-sm mt-5 w-1/2 rounded-full border-[#f5e4bc] '></span><br></br>
                <span className='border-t-8  drop-shadow-sm w-1/2 rounded-full border-[#f5e4bc] '></span><br></br>
              </div>
            </div>
            <div className="mid flex w-full h-full">
              <div className="w-1/2 flex flex-col justify-around ">
                <div className="flex flex-col text-white md:text-xl text-sm xs:text-base text-center tracking-wider ">EDUCATION
                  <span className='border-t-8  drop-shadow-sm w-11/12 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                    <span className='border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                    <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>  
                </div>
                <div className="flex flex-col text-white text-center tracking-wider md:text-xl text-sm xs:text-base ">EXPERIENCE
                  <span className='border-t-8  drop-shadow-sm w-11/12 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                    <span className='border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                    <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                    <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                    <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                </div>
                <div className="flex absolute bottom-0 border-red-500 border-2 p-1 xs:p-2 mb-2">
                  <p className='text-white  text-base xs:text-xl '>Click to download</p>
                  <HiOutlineDownload className='h-5 w-5 ml-2 my-auto text-red-500'></HiOutlineDownload>
                </div>

              </div>
                <div className="w-1/2 flex flex-col justify-around ">
                  <div className="flex flex-col text-white text-center tracking-wider md:text-xl text-sm xs:text-base ">SKILLS
                    <span className='border-t-8  drop-shadow-sm w-11/12 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>  
                  </div>
                  <div className="flex flex-col text-white text-center tracking-wider md:text-xl text-sm xs:text-base">PROJECTS
                    <span className='border-t-8  drop-shadow-sm w-11/12 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                  </div>
                  <div className="flex flex-col text-white text-center tracking-wider  md:text-xl text-sm xs:text-base">LANGUAGES
                    <span className='border-t-8  drop-shadow-sm w-11/12 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                  </div>
                  <div className="hidden md:flex flex-col text-white text-center tracking-wider text-xl">INTERESTS
                    <span className='border-t-8  drop-shadow-sm w-11/12 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                      <span className='hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto rounded-full border-[#f5e4bc] '></span><br></br>
                  </div>
                </div>
            </div>
              </div>
            }
          </div>
        </div>
      </div>





      <div className="h-full absolute right-0  top-0 hidden xs+:flex justify-center text-2xl  my-[-100px] md+:my-auto items-center mr-5">
        <button className="rotate-[180deg]">
          { sections.map((section, id) => (
            <h1 key={id} className='sec_part hover:scale-125 transition duration-200'>{section}</h1> 
          ))
}
        </button>  
      </div>
    </div>
  )
}

export default About