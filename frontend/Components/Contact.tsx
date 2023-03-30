import React, { useEffect, useRef, useState } from 'react'
import {BiLink} from 'react-icons/bi'
import {AiOutlineInstagram,  AiFillGithub } from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {createTRPCProxyClient,httpBatchLink, loggerLink} from '@trpc/client'
import type {appRouterType} from '../../backend/types'
import Confetti from 'react-confetti'



const client = createTRPCProxyClient<appRouterType>({
  links: [
    loggerLink(),
    httpBatchLink({
      url : "https://nitins-folio-a2h5.onrender.com/trpc",
    }),
  ]
})

function Contact() {
  const [showConfetti, setShowConfetti] = useState<string>() 
  const height =  window.innerHeight;
  const [hideLine, setHideLine] = useState(false)
  const [formDetials, setFormDetials] = useState({
    name: '',
    email: '',
    phone: '', 
    subject: '',
    message: '' 
}) 
const nameRef = useRef<HTMLInputElement>(null!);
const phnRef = useRef<HTMLInputElement>(null!);
const emailRef = useRef<HTMLInputElement>(null!);
const subRef = useRef<HTMLInputElement>(null!);
const msgRef = useRef<HTMLTextAreaElement>(null!);



const onSubmit =  async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('shishi');
    
    setFormDetials( (prev: any) => ({
        ...prev,
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        phone: phnRef.current?.value,
        subject: subRef.current?.value,
        message: msgRef.current?.value
    }))

    // const result = client.stringOut.query()
    
    const result =  await client.fields.mutate({
      name: nameRef.current?.value!,
      email: emailRef.current?.value!,
      phoneNumber: parseInt(phnRef.current?.value!),
      subject: subRef.current?.value!,
      message: msgRef.current?.value!
    })
    console.log(result)
    if(!!result) {
      setShowConfetti(result)
    }
}

useEffect(() =>{
    if(window.innerWidth <= 1780) {
      setHideLine(true)
    }
    else {setHideLine(false)}

    addEventListener("resize", () =>{
      console.log(innerHeight, innerWidth)
      if(window.innerWidth <= 1780) {
        // console.log('yes');
          setHideLine(true)
        }
        else {setHideLine(false)}
    })
   
})

// useEffect(() => {
//     const controller = new AbortController();
//     try{
//         if(formDetials?.name !== "" && formDetials?.email !== "" && formDetials?.phone !== "" && formDetials?.subject !== "" && formDetials?.message !== "" ){
//             axios.post('https://kabadi-backend.onrender.com/home', {
//                 formDetials
//             })
//             .then((data) =>{
//                 setMsg(data.data.msg);
//             })
//             .catch((error) =>{
//                 console.log(error);
//             })
            
//         }
//         else {
//             console.log('wtf empty value!?')
//         }
// }
// catch(err) {
//     console.log(controller.signal.aborted)
// }
// return () => controller.abort();

// },[onSubmit])
console.log(showConfetti)
  return (
    <div style={{fontFamily: 'Ignazio'}} className=' sm:h-[1080px]  bg-[#171717]  shadow-lg contact'>
      <div className="grid grid-flow-row xl:grid-flow-col w-full h-full xl:grid-cols-3 relative m-auto  xs:mb-0 gap-y-20 xl:gap-y-0 justify-self-center mx-auto ">
        <div className="col-span-1 flex w-full relative left-20 xss:left-[90px] xs:left-36 xs+:left-28 sm:left-0 flex-col  sm:flex-row sm:absolute top-20  xl:relative  xl:top-[10%] xl:-translate-y-[70%]  m-auto xl:flex-col  gap-y-10 xl:gap-y-60 mb-10 xs:mb-0">
          <div className="flex flex-col gap-y-2 xs:gap-y-5 mt-4 xl:mt-10 mx-auto  ">
            <h1 style={{fontFamily: 'Coconat'}} className='font-semibold text-[#f9d5ca] text-xl xs+:text-3xl'>Portfolio</h1>
            <div className="text-white text-base xs+:text-xl tracking-wider items-center flex flex-col gap-y-1 ">
              <a href='https://github.com/Nautyy9/' className='justify-center flex hover:scale-110 transition duration-200 ease-in  gap-x-2'><AiFillGithub className='my-auto '></AiFillGithub>GitHub <BiLink className='my-auto'></BiLink> </a>
              {/* <p className='flex justify-center hover:scale-110 transition duration-200 ease-in w-28'><BiLink className='my-auto'></BiLink> </p> */}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-4  xl:mb-0 xs:gap-y-5 my-auto mx-auto">
            <h1 style={{fontFamily: 'Coconat'}} className='font-semibold  text-[#f9d5ca] text-center text-xl xs+:text-3xl '>Social</h1>
            <div className="text-white text-base xs+:text-xl tracking-wider items-center flex flex-col gap-y-1 ">
              <a href='https://www.linkedin.com/in/nitin-nautiyal-75a67619a/' className='justify-center flex hover:scale-110 transition duration-200 ease-in gap-x-2'><FaLinkedinIn className='my-auto'></FaLinkedinIn> LinkedIn <BiLink className='my-auto'></BiLink> </a>
              <a href='https://www.instagram.com/nautyy9/' className='flex justify-center hover:scale-110 transition duration-200 ease-in gap-x-2'><AiOutlineInstagram className='my-auto'></AiOutlineInstagram>Instagram <BiLink className='my-auto'></BiLink> </a>
              <a href='https://wa.me/919990989306' className='flex justify-center hover:scale-110 transition duration-200 ease-in gap-x-2'><BsWhatsapp className='my-auto'></BsWhatsapp>WhatsappMe!<BiLink className='my-auto'></BiLink> </a>
            </div>
          </div>
        </div>
        <div className={`col-span-2 h-max xl:h-4/5  m-auto xl:m-0 xl:translate-y-[-50%] xl:top-[50%]  grid grid-flow-row md:grid-flow-col md:grid-cols-3 relative  p-4 w-full xss:w-4/5 xl:w-full  xl+:w-11/12  rounded-md ${showConfetti? 'bg-[#171717]' : 'bg-gray-900/40'} mb-10 mx-auto`}>
                {!showConfetti ? <> <div className="sm:col-span-1  ">
                    <div className="  flex flex-col justify-end items-center w-full h-full">
                      <p  className='lg+:text-xl absolute top-[5%] md:top-[10%] left-10 text-white '>Say Hellow! 👋</p>
                      <h1  className='hidden md:inline-block text-lg text-clip lg+:text-3xl text-center  font-semibold text-[#f9d5ca] absolute xl:left-[1%] break:left-[5%] top-[45%]  w-64 lg+:w-80  -translate-y-[50%]'>Wanna be starting something ?</h1>
                      <p  className='hidden md:inline-block text-base tracking-tight w-60  lg+:text-xl absolute text-white lg+:w-80 xl:left-[1%] break:left-[10%] bottom-[10%]  text-center'>Feel free to reach out if you wanna collaborate with me,or simply have a chat</p>
                    </div>
                </div>
                <div className=' mx-auto xs:w-[300px] sm:col-span-2 relative  sm:w-full rounded-l-xl lg:rounded-l-none rounded-r-xl  h-max '>
                      <span className={!hideLine ? `text-white text-4xl rotate-90 bottom-[50%] translate-y-[50%]  -left-[30%] absolute  `: `hidden`}>______________________________</span>
                    <form onSubmit={(e) =>{onSubmit(e)}} className=' flex flex-col  mt-24 w-full md:top-0 sm:items-center sm:justify-center gap-y-10 h-max'>
                        <div className="flex flex-col  w-full sm:w-5/6 mx-auto  gap-2 ">
                            <label htmlFor='name' className='text-white font-medium text-xl w-full' >Name</label>
                            <input id="name" ref={nameRef}  type='text' placeholder='Name' className='border  border-white focus:border-[#f9d5ca] p-3 focus:outline-none  focus:border-2 text-white transition duration-100 ease-in rounded-lg bg-transparent'/> 
                        </div>
                        <div className="flex flex-col sm:flex-row  w-full sm:w-5/6 gap-y-10 sm:gap-2 mx-auto gap-x-4">
                            <div className="flex flex-col ">
                                <label htmlFor='ph-no' className='text-white font-medium text-xl ' >Phone Number</label>
                                <input ref={phnRef} id="ph-no" type='text' placeholder='Phone Number' className=' border  border-white focus:border-[#f9d5ca] p-3 focus:border-2 focus:outline-none  w-full  text-white  rounded-lg  bg-transparent transition duration-100 ease-in '/> 
                            </div>
                            <div className="flex flex-col ">
                                <label htmlFor='add' className='text-white font-medium text-xl ' >Email Address</label>
                                <input ref={emailRef} id="add" type='email' placeholder='Email' className='border  border-white focus:border-[#f9d5ca] p-3 focus:border-2 focus:outline-none w-full text-white transition duration-100 ease-in rounded-lg bg-transparent'/> 
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-5/6 mx-auto gap-2 ">
                            <label htmlFor='sub' className='text-white font-medium text-xl' >Subject</label>
                            <input ref={subRef} id="sub" type='text' placeholder='Subject' className='border  border-white focus:border-[#f9d5ca] p-3 focus:outline-none focus:border-2  text-white transition duration-100 ease-in rounded-lg bg-transparent'/> 
                        </div>
                        <div className="flex  flex-col  w-full  sm:w-5/6 mx-auto gap-2">
                            <label htmlFor='msg' className='text-white font-medium text-xl' >Message</label>
                            <textarea ref={msgRef} id="msg" rows={4} placeholder='Message' className='border  border-white focus:border-[#f9d5ca] p-3 focus:outline-none focus:border-2  text-white transition duration-100 ease-in rounded-lg  bg-transparent'/> 
                        </div>
                        <input type="submit" value="Submit" className="text-[#f4805b] border-2 border-[#f4805b] text-xl py-2 px-4 rounded-xl flex self-start ml-[10%] "/>
                    </form>
                </div>
                </> : <>
                <div className="bg-[#171717] col-span-3 xl:col-span-1 h-[600px] flex items-center xl:absolute xl:top-[15%]">
                  <div className=" flex  rounded-xl  w-full ">
                  <Confetti gravity={0.04} className='w-11/12 rounded-xl mx-auto h-full'></Confetti>
                  <h1 className='z-20 text-xl sm:text-3xl font-bold flex justify-center items-center text-white text-center'>{showConfetti}</h1>
                  </div>
                </div>
                </>}
        </div>
      </div>
    </div>
  )
}

export default Contact