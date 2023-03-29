import gsap, { Linear, Power0 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

function Skills() {

  const sections =['S','e','c','t','i','o','n','🙃','3']
  useEffect(() =>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline();
    var xl2 = tl.fromTo(['.card1', '.card2','.card3','.card4','.card5','.card6','.card7','.card8', , '.card9','.card10','.card11','.card12','.card13','.card14','.card15', '.card16', '.card17'],{opacity: 0, scale: 0}, { scrollTrigger: {
      trigger: ['.card1' , '.card2','.card3','.card4','.card5','.card6','.card7','.card8', '.card9','.card10','.card11','.card12','.card13','.card14','.card15','.card16', '.card17'] ,
      start: "-300px 500px ",
      end: '2200px 200px',
      scrub: 1,
      // markers: true,
      toggleActions:"restart pause reverse reset",
    }, scale: 1, opacity: 1, position: 'relative', top:0, left: 0, transform: 'none', duration:10, ease: 'elastic', stagger: 10})

    tl.fromTo(['.frontend', '.backend'], { left: '100%', duration: 3},{ scrollTrigger: {
    trigger: ['.frontend', '.backend' ],
    toggleActions:"restart pause reverse reset",
    start: "-700% center",
    end: '5000% 10%',
    scrub: 5,
    // markers: true,
  },left: '-100%',duration: 10, stagger: .5,  opacity:1}, '+=200')

  tl.fromTo([ '.utilities', '.extras'], { left: '100%', duration: 3},{ scrollTrigger: {
    trigger: [ '.utilities', '.extras' ],
    toggleActions:"restart pause reverse reset",
    start: "-400% center",
    end: '1000% 10%',
    scrub: 5,
    // markers: true,
  },left: '-100%',duration: 10, stagger: 4,  opacity:1})

  if(window.innerWidth>1250 && window.innerWidth <=1670){
    // console.log('1670')
    xl2._first.vars.scrollTrigger.start = "-300px center"
    xl2._first.vars.scrollTrigger.end = '2600px 200px';
  }
  else if(window.innerWidth>787&& window.innerWidth<=1250){
  // console.log('1250')

    xl2._first.vars.scrollTrigger.start = "-200px center"
    xl2._first.vars.scrollTrigger.end = '3900px 200px'
  }
  else if(window.innerWidth <=787){
  // console.log('787')

    xl2._first.vars.scrollTrigger.start = "-300px center"
    xl2._first.vars.scrollTrigger.end = '7200px 200px'
  }
  })


  return (
    <div   className=' bg-[#171717] text-[#dfd3c3] flex-col items-center h-max skills relative overflow-hidden shadow-skills   '>
        <div className="flex w-max">
          <div className="flex leaf-div relative skills_heading ">
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>SKILLS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>SKILLS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
          </div>
          <div className="flex  leaf-div relative skills_heading ">
          <h1 className='text-5xl text-center flex  mt-10 justify-center '>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>SKILLS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>SKILLS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>SKILLS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
          </div>
        </div>
      <div  className="relative  flex flex-wrap gap-20 mx-auto w-5/6 items-end  justify-around my-20 ">
        
        <div className="flex ">
          <div className="flex w-full leaf-div relative frontend">
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Front End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden  w-72 card1  rounded-lg">
          <img src="assets/html.png" alt="" className='object-cover ml-1 mt-2 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>HTML</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="leaf1" className=' leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="leaf2" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="leaf3" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="leaf4" className='leaf' />
            </span>
            {/* <span>
              <img src="assets/leaf5.png" alt="leaf5" className='leaf' />
            </span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card2  rounded-lg">
          <img src="assets/css.png" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white ' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>CSS</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' /></span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card3  rounded-lg">
          <img src="assets/js.png" alt="" className='object-cover ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>JAVA SCRIPT</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' /></span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card4  rounded-lg">
          <img src="assets/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail-removebg-preview.png" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>REACT.JS</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf5.png" alt="" className='leaf' />
            </span>
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card5  rounded-lg">
          <img src="assets/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" alt="" className='object-contain  ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>THREE.JS</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf4.png" alt="" className='leaf' /></span> */}
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' />
            </span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card6  rounded-lg">
          <img src="assets/nextjs-boilerplate-logo.png" alt="" className='object-cover ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>NEXT.JS</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf5.png" alt="" className='leaf' />
              </span>
          </div>
        </div>
        <div className="flex ">
          <div className="flex w-full leaf-div relative backend">
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>Back End<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
          
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden text-[#dfd3c3] w-72 card7  rounded-lg">
          <img src="assets/logo-text-black.svg" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>tRPC</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' /></span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden text-[#dfd3c3] w-72 card8  rounded-lg">
          <img src="assets/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text-removebg-preview.png" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>EXPRESSJS</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' /></span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card9  rounded-lg">
          <img src="assets/png-transparent-web-development-node-js-socket-io-javascript-network-socket-modernization-miscellaneous-logo-web-application-removebg-preview.png" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>NODE.JS</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' />
            </span> */}
          </div>
        </div>
       
        <div className="flex w-full leaf-div relative utilities">
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center drop-shadow-sm'>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex mt-10 justify-center '>Utilities<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-10  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
          
          </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card10 rounded-lg">
          <img src="assets/typescript.svg" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>TYPESCRIPT</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' />
            </span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card11  rounded-lg">
          <img src="assets/socketio.png" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>SOCKET.IO</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf4.png" alt="" className='leaf' /></span> */}
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' />
            </span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card12  rounded-lg">
          <img src="assets/Screenshot_2023-01-14_034806-removebg-preview.png" alt="" className='object-contain  ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>REACT QUERY</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf5.png" alt="" className='leaf' />
              </span>
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card13  rounded-lg">
          <img src="assets/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t-removebg-preview.png" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='ml-3 skill_text'>REDUX-TOOLKIT</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' />
            </span> */}
          </div>
        </div>
        <div className="flex w-full leaf-div relative extras">
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center drop-shadow-sm'>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<span className='h-2 my-auto mx-10 w-40  bg-[#dfd3c3] shadow-inner'></span></h1>
            <h1 className='text-5xl text-center flex  mt-10 justify-center '>DB-CMS<AiOutlineArrowDown className='h-10 border-4 border-[#f4805b]  rounded-full my-auto mx-10 w-14  text-[#f4805b] shadow-inner'></AiOutlineArrowDown></h1>
          
          </div>
          <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden text-[#dfd3c3] w-72 card14  rounded-lg">
          <img src="assets/prisma.jpeg" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>PRISMA</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            {/* <span>
            <img src="assets/leaf5.png" alt="" className='leaf' /></span> */}
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card15  rounded-lg">
          <img src="assets/download-removebg-preview.png" alt="" className='object-contain bg-white images shadow-md ml-1 shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>MONGO-DB</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
                <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf5.png" alt="" className='leaf' />
            </span>
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden    text-[#dfd3c3] w-72 card16  rounded-lg">
          <img src="assets/sanity.webp" alt="" className='object-contain ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>SANITY</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf5.png" alt="" className='leaf' />
              </span>
          </div>
        </div>
        <div className=" h-80 flex flex-col justify-center items-center gap-y-2 overflow-hidden  text-[#dfd3c3] w-72 card17  rounded-lg">
          <img src="assets/firebase.png" alt="" className='object-cover ml-1 bg-white images shadow-md shadow-white' />
          <h3 style={{fontFamily: 'Ignazio'}} className='skill_text'>FIREBASE</h3>
          <div className="flex w-full leaf-div justify-end gap-x-1  mt-3 mr-4">
            <span>
              <img src="assets/leaf1.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf2.webp" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf3.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf4.png" alt="" className='leaf' />
            </span>
            <span>
              <img src="assets/leaf5.png" alt="" className='leaf' />
              </span>
          </div>
        </div>
      </div>
      <div className="h-full absolute right-5  top-0 hidden xs+:flex justify-center text-2xl  my-[-100px] md+:my-auto items-center text-white tracking-wider">
        <button className="rotate-[180deg] xl:bg-[#f5e4bc] xl:p-2 xl:text-black break:text-white xl:py-4 break:bg-transparent">
          { sections.map((section, id) => (
            <h1 key={id} className='   sec_part hover:scale-125 transition duration-200'>{section}</h1> 
          ))
}
        </button>  
      </div>
    </div>
  )
}

export default Skills