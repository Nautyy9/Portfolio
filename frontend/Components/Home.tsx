import gsap, { Back, Power4 } from 'gsap';
import  { useEffect,  useId } from 'react'
import { BsArrow90DegRight } from 'react-icons/bs'
import { Link } from 'react-scroll';
import Swal from 'sweetalert2'

function Home() {
  const id = useId();
  const Fname = ['n', 'i', 't', 'i', 'n']
  const Lname = ['n', 'a', 'u', 't', 'i', 'y', 'a', 'l',];
  const sections = ['S', 'e', 'c', 't', 'i', 'o', 'n', '🙃', '1']
  const text = 'nitinnautiyal-webdeveloper/designer'
  const roundText = text.split("")
  // const suii = useNavigation()

  useEffect(() => {

    // const text = document.querySelector('.who');
    const tl = gsap.timeline()
    tl.set('#my-image', { opacity: 0, visibility: 'hidden' })
    tl.set('.name', { visibility: 'hidden', opacity: 0 })
    tl.from('.who', { opacity: 0, visibility: 'hidden' })
    if (window.innerWidth > 768) {
      tl.fromTo(['.bg_text4', '.bg_text3', '.bg_text2', '.bg_text1'], { y: -1000, x: 0 }, { y: 0, x: 0, stagger: .2, ease: Power4.easeOut, duration: 1, })
      tl.fromTo(['.bg_text1', '.bg_text2', '.bg_text3', '.bg_text4'], { letterSpacing: 0 }, { letterSpacing: 10, stagger: .2, ease: Back.easeInOut, duration: .8, })
    }
    tl.fromTo('.shade_text2', { x: 0, y: -200, opacity: 0 }, { x: 0, opacity: 1, y: 0, duration: 1, ease: Power4.easeOut }, '-=.1')
    tl.fromTo('.shade_text1', { x: 0, y: -100, opacity: 0 }, { x: 0, opacity: 1, y: 0, duration: 1, ease: Power4.easeOut }, '-=1.2')
    tl.fromTo('.h_name', { opacity: 0, scale: 1, x: 0, y: 100 }, { opacity: 1, stagger: .1, repeatRefresh: false, ease: 'back', duration: .3, x: 0, y: 0 }, '-=.6')
    tl.fromTo('.h_surname', { opacity: 0, scale: 1, x: 0, y: 100 }, { opacity: 1, stagger: .1, ease: 'back', duration: .3, x: 0, y: 0 }, '-=.2')
    tl.to('.who', { opacity: 1, ease: Power4.easeOut, duration: 1, visibility: 'visible' })
  }, [])


  const setImages = () => {
    const text = document.querySelector('.who');
    // const name = document.querySelector('.name'); 

    text!.classList.add('hidden')
    const tl = gsap.timeline();

    tl.fromTo('#tree-image', { opacity: 1, visibility: 'visible' }, { opacity: 0, duration: .15, ease: Power4.easeOut, visibility: 'hidden' })
    tl.fromTo(['.shade_text1', '.shade_text2'], { opacity: 1, scale: 1, x: 0, y: 0 }, { opacity: 0, stagger: .1, scale: 0, ease: 'back', duration: .2, x: 0, y: 0, visibility: 'hidden' }, '-=.3')
    tl.fromTo('.h_name', { opacity: 1, scale: 1, x: 0, y: 0 }, { opacity: 0, stagger: .1, scale: 0, ease: 'back', duration: .2, x: 0, y: 0 }, '-=.3')
    tl.fromTo('.h_surname', { opacity: 1, scale: 1, x: 0, y: 0 }, { opacity: 0, stagger: .1, scale: 0, ease: 'back', duration: .2, x: 0, y: 0 }, '-=.3')
    tl.fromTo(['.bg_text5', '.bg_text4', '.bg_text3', '.bg_text2', '.bg_text1'], { x: 0 }, { stagger: .3, x: 2000 })
    tl.to('.bg_text',{display: 'none'})
    tl.fromTo('#my-image', { opacity: 0, visibility: 'hidden' }, { opacity: 1, duration: 1, ease: Power4.easeOut, visibility: 'visible' })
    tl.fromTo('.suii', { opacity: 0, visibility: 'hidden' }, { opacity: 1, duration: 1, stagger: .2, ease: Power4.easeOut, visibility: 'visible' })
    tl.to('.name', { opacity: 1, scale: 1, visibility: 'visible', duration: 2, ease: Power4.easeOut, }, '-=7')

  }

  function animateSpring(name: string) {
    const tl = gsap.timeline();
  }
  return (
      <div className='home shadow-md z-10  bg-[#171717] text-[#dfd3c3] overflow-hidden'>
        <div className="">
          <div style={{ fontFamily: 'Coconat' }} className="text-[#f4805b]/40 flex flex-col z-20 text-[16px]   xs:ml-0 left-[7%]  lg:left-[10%] font-semibold absolute  top-[44.7%] md:top-[44.2%] translate-y-[-60%]">
            <div className=" flex mt-2">
              {
                Fname?.map((name, id) =>
                (
                  <h3 key={`${id}-h-fname-${id}`} className='drop-shadow-md text-4xl xs:text-6xl md:text-8xl  h_name cursor-pointer hover:animate-rubberBand' onMouseOver={() => animateSpring(name)}>
                    {name}
                  </h3>
                )
                )
              }
            </div>
            <div className="flex">
              {
                Lname?.map((name, id) =>
                (
                  <h3 key={`${id}-h-lname-${id}`} className=' text-4xl xs:text-6xl md:text-8xl mt-2 h_surname hover:animate-rubberBand' >
                    {name}
                  </h3>
                )
                )
              }
            </div>
            <div className=" text-[#dfd3c3] flex cursor-help relative max-w-max who top-12  xs:top-20">
              
              <div onClick={setImages} className='absolute transition-all ease-in-out duration-400  line-through  px-3 py-1 decoration-[#f4805b] hover:decoration-transparent bottom-1/2  hover:border-[3px] border-[#f4805b]  '>
                <p className=' xs:text-xl md:text-2xl  ' >
                  WHO?
                </p>
              </div>
            </div>
          </div>
          <div className="text-[#dfd3c3] font-semibold  xs:ml-0 left-[7%] lg:left-[10%] gap-y-2 text-4xl mt-1 xs:mt-0 xs:text-6xl md:text-8xl  flex flex-col -z-1 absolute top-[44.9%] md:top-[45%] translate-y-[-60%]">
            <div className='shade_text1'>nitin</div>
            <div className='shade_text2'>nautiyal</div>
          </div>
        </div>
        <div className="hidden  xs+:flex h-full z-10 absolute right-0  top-0  justify-center w-16  my-[-100px] md+:my-auto items-center">
          <button className="rotate-[180deg]">
            {sections.map((section, id) => (
              <h1 key={id} className=' sec_part hover:scale-125 transition duration-200'>{section}</h1>
            ))
            }
          </button>
        </div>

        <div className="h-full w-full  relative flex justify-end img_div -mx-10 z-10"  >
          {/* <img src="assets/1325107.svg" alt="tree" className='h-full  bg-gradient-to-t from-[#5C4033]  to-[#2d411b] absolute right-0' id='tree-image' ref={treeImage_ref} /> */}
          <div className="round_img backdrop-blur-[10px]" id='my-image'>
          </div>
          <div className="round_text" id='my-image'>
            {
              roundText.map((char: string, i: number) => (
                <span key={i} className='suii text-[#f9d5ca]' style={{ transform: `rotate(${i * 10}deg)` }}>{char}</span>
              ))
            }
          </div>
        </div>

        <div className="bg_text absolute h-screen hidden text-opacity-40  xl:gap-y-28 xl:flex flex-col mix-blend-soft-light justify-end text-right  blur-[1px]  top-[45%]   text-8xl w-full  left-0">
          <div className="bg_text1 " style={{ textShadow: '2px 2px 2px black' }}>DEVELOPER</div>
          <div className="bg_text2 " style={{ textShadow: '2px 2px 2px black' }}>DESIGNER</div>
          <div className="bg_text3 " style={{ textShadow: '2px 2px 2px black' }}>DANCER</div>
          <div className="bg_text4 " style={{ textShadow: '2px 2px 2px black' }}>FOOTBALLER</div>
        </div>
        <div style={{ fontFamily: 'Coconat' }} className="font-semibold tracking-tight flex flex-col absolute left-[5.5%] w-4/5 h-[90%] top-[60%]  translate-y-[-50%] xs:h-auto  xs:top-[23%]  sm:w-5/6 sm:top-[24%] text-[18px] xss:text-[20px]  xs:text-[25px] sm:text-3xl md:text-4xl md:w-1/2 md:tracking-normal md:top-[30%] md+:w-[32%] md+:top-[45%] md+:tracking-widest lg:w-1/3 text-[#f5e4bc] name">
          Hey there, I am Nitin Nautiyal, Freelancer & Front-End Developer
          <p className='text-gray-500 text-base tracking-tighter xss:text-lg sm:text-xl mt-3 sm:mt-6  font-bold font-[Georgia, Times New Roman, Times, sans-serif] xss:tracking-wide '>I love creating beautiful user experiences.</p>
          <Link to='contact' spy={true} smooth={true} offset={100} duration={1000} className='text-base font-semibold text-[#f4805b] border-2 border-[#f4805b] rounded-full flex justify-center items-start overflow-hidden tracking-tight absolute hover:animate-pulse hover:scale-105 duration-300 ease-in w-max h-10 py-2 px-5  mb-10  xss:mb-2 xs:mb-0 left-[50%] translate-x-[-50%] xs:left-0 xs:translate-x-0 bottom-0 xss:bottom-10  xs:bottom-[-30%] sm:bottom-[-40%] md:bottom-[-20%] md:tracking-normal md:mt-10 xl:bottom-[-40%]   '>Get in touch
            <BsArrow90DegRight className='h-5 w-5  ml-3 mt-1  rotate-90 my-auto'></BsArrow90DegRight>
          </Link>
        </div>
      </div>
  )
}

export default Home

// <div className="img_div h-[50%] w-[400px]  mx-60 absolute top-[50%] translate-y-[-50%] rounded-full bg-cover bg-no-repeat bg-center bg-[url(../public/assets/IMG-20190701-WA0001_-_Copy-removebg-preview.png)]">
{/* <div className=" text-7xl h-full w-full rounded-full absolute  ">
{
  roundText.map((char, i) =>(
    <span className={`absolute w-full h-full transform rotate-[${i*10})deg] origin-[0px 100px] text-[1.2em]`}>{char}</span>
  ))
}
</div>
</div> */}