import { useEffect, useRef, useState } from "react";
import { BiLink } from "react-icons/bi";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
// import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
// import type { appRouterType } from "types-for-frontend/types";
import Confetti from "react-confetti";
import emailjs from "@emailjs/browser";
import { envClientSchema } from "../env";

// const client = createTRPCProxyClient<appRouterType>({
//   links: [
//     loggerLink(),
//     httpBatchLink({
//       url: "https://nitins-folio-odwi.onrender.com/trpc",
//     }),
//   ],
// });

type formDetailType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function Contact() {
  const [showConfetti, setShowConfetti] = useState<boolean>();
  // const height = window.innerHeight;
  const [hideLine, setHideLine] = useState(false);
  const [formDetials, setFormDetials] = useState<formDetailType>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null!);
  const phnRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const subRef = useRef<HTMLInputElement>(null!);
  const msgRef = useRef<HTMLTextAreaElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null);
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setFormDetials((prev: formDetailType) => ({
  //     ...prev,
  //     name: nameRef.current?.value,
  //     email: emailRef.current?.value,
  //     phone: phnRef.current?.value,
  //     subject: subRef.current?.value,
  //     message: msgRef.current?.value,
  //   }));

  //   // const result = client.stringOut.query()

  //   const result = await client.fields.mutate({
  //     name: nameRef.current?.value!,
  //     email: emailRef.current?.value!,
  //     phoneNumber: parseInt(phnRef.current?.value!),
  //     subject: subRef.current?.value!,
  //     message: msgRef.current?.value!,
  //   });
  //   if (!!result) {
  //     setShowConfetti(result);
  //   }
  // };

  function onSubmit(e: any) {
    e.preventDefault();
    // console.log(formDetials);
    if (
      !formDetials.message ||
      !formDetials.email ||
      !formDetials.name ||
      !formDetials.phone ||
      !formDetials.subject
    ) {
      setShowMessage("Please fill in values");
      return null;
    }
    const templateParams = {
      from_name: name,
      from_email: formDetials.email,
      to_name: envClientSchema.SERVICE_NAME,
      message: formDetials.message,
      phone: formDetials.phone,
      subject: formDetials.subject,
    };
    emailjs
      .send(
        envClientSchema.SERVICE_ID,
        envClientSchema.TEMPLATE_ID,
        templateParams,
        { publicKey: envClientSchema.PUBLIC_KEY }
      )
      .then((res) => {
        setFormDetials((prev: formDetailType) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }));
        setShowConfetti(true);
        setShowMessage(
          "We appreciate you reaching out! We'll be in touch shortly."
        );
      })
      .catch((err) => {
        setShowMessage(
          "Error while sending request please try again after some time "
        );
      });
  }
  function debounce(fn: any) {
    let timer: NodeJS.Timeout;
    return async function () {
      if (timer) {
        clearTimeout(timer);
      } else {
        timer = setTimeout(() => {
          fn();
        }, 300);
      }
    };
  }

  useEffect(() => {
    // console.log(contactRef.current?.offsetHeight);
    if (window.innerWidth <= 1780) {
      setHideLine(true);
    } else {
      setHideLine(false);
    }

    addEventListener("resize", () => {
      if (window.innerWidth <= 1780) {
        // console.log('yes');
        setHideLine(true);
      } else {
        setHideLine(false);
      }
    });
  });

  return (
    <div
      style={{ fontFamily: "Ignazio" }}
      ref={contactRef}
      id="contact"
      className="min-h-[1280px]  md+:min-h-[1080px] h-screen  bg-[#171717]  shadow-lg contact"
    >
      <div className="flex flex-col xl:flex-row w-full h-full relative items-center justify-center gap-y-10 xl:gap-y-0 ">
        <div className="flex w-full lg+:w-1/2 justify-center  flex-col sm:flex-row xl:flex-col gap-y-10  xl:gap-y-60  ">
          <div className="flex flex-col gap-y-2 xs:gap-y-5 mx-auto  ">
            <h2
              style={{ fontFamily: "Bluu" }}
              className="font-semibold text-[#f9d5ca] text-4xl xs+:text-5xl"
            >
              Portfolio
            </h2>
            <div className="text-white text-base xs+:text-xl tracking-wider items-center flex flex-col gap-y-1 ">
              <a
                href="https://github.com/Nautyy9/"
                className="justify-center flex hover:scale-110 transition duration-200 ease-in  gap-x-2"
              >
                <AiFillGithub className="my-auto "></AiFillGithub>GitHub{" "}
                <BiLink className="my-auto"></BiLink>{" "}
              </a>
              {/* <p className='flex justify-center hover:scale-110 transition duration-200 ease-in w-28'><BiLink className='my-auto'></BiLink> </p> */}
            </div>
          </div>
          <div className="flex flex-col gap-y-2   xl:mb-0 xs:gap-y-5 mx-auto">
            <h1
              style={{ fontFamily: "Bluu" }}
              className="font-semibold  text-[#f9d5ca] text-center text-4xl xs+:text-5xl "
            >
              Social
            </h1>
            <div className="text-white text-base xs+:text-xl tracking-wider items-center flex flex-col gap-y-1 ">
              <a
                href="https://wa.me/919990989306"
                className="flex justify-center hover:scale-110 transition duration-200 ease-in gap-x-2"
              >
                <BsWhatsapp className="my-auto"></BsWhatsapp>WhatsappMe!
                <BiLink className="my-auto"></BiLink>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/nitin-nautiyal-75a67619a/"
                className="justify-center flex hover:scale-110 transition duration-200 ease-in gap-x-2"
              >
                <FaLinkedinIn className="my-auto"></FaLinkedinIn> LinkedIn{" "}
                <BiLink className="my-auto"></BiLink>{" "}
              </a>
              <a
                href="https://www.instagram.com/nautyy9/"
                className="flex justify-center hover:scale-110 transition duration-200 ease-in gap-x-2"
              >
                <AiOutlineInstagram className="my-auto"></AiOutlineInstagram>
                Instagram <BiLink className="my-auto"></BiLink>{" "}
              </a>
            </div>
          </div>
        </div>
        <div
          className={`z-30  h-max xl:h-4/5 flex flex-col  md:flex-row relative w-full px-10 xs:px-5 sm:px-0 xs:w-4/5 md:w-11/12 lg+:w-5/6 xl:w-full xs:mx-auto xl+:w-11/12   ${
            showConfetti ? "bg-none" : "bg-gray-900/70"
          } `}
        >
          {!showConfetti ? (
            <>
              {" "}
              <div className=" pt-10 md:pt-0 ">
                <div className="  flex flex-col justify-center items-center md:py-16 w-full h-full ">
                  <div className="flex items-start justify-center h-2/3 text-center   w-full">
                    <p className="text-xl text-white ">Say Hellow! 👋</p>
                  </div>
                  <div className="hidden h-full md:flex flex-col w-full  justify-between mx-auto">
                    <h1 className=" flex text-3xl  text-center  font-semibold text-[#f9d5ca]   w-64 lg+:w-80  mx-auto   ">
                      Wanna be starting something ?
                    </h1>
                    <p className=" inline md+:ml-8 lg+:ml-14 border-4 border-dotted  p-2  text-lg tracking-tight w-full lg+:text-xl  text-white lg+:w-80   text-center">
                      I'm always interested in collaborating on creative
                      projects. Feel free to reach out and chat about potential
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mx-auto px-4 w-full  relative my-auto sm:w-full  h-max ">
                {/* <span
                  className={
                    !hideLine
                      ? `text-white text-4xl rotate-90 bottom-[50%] translate-y-[50%]  -left-[30%] absolute  `
                      : `hidden`
                  }
                >
                  ______________________________
                </span> */}
                <form
                  onSubmit={(e) => {
                    debounce(onSubmit(e));
                  }}
                  className=" flex flex-col w-full my-10  md:top-0 sm:items-center sm:justify-center gap-y-10 h-max"
                >
                  <div className="flex flex-col  w-full sm:w-5/6 md:w-full md+:w-5/6 mx-auto  gap-2 ">
                    <label
                      htmlFor="name"
                      className="text-white font-medium text-xl w-full"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      ref={nameRef}
                      type="text"
                      placeholder="Name"
                      onChange={(e) => (formDetials.name = e.target.value)}
                      className="border text-xl border-white focus:border-[#f9d5ca] p-3 focus:outline-none  focus:border-2 text-white focus:text-black transition duration-200 ease-in-out bg-transparent focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row w-full sm:w-5/6 md:w-full md+:w-5/6 gap-y-10 gap-2  gap-x-4">
                    <div className="flex flex-col w-full gap-2">
                      <label
                        htmlFor="ph-no"
                        className="text-white font-medium text-xl "
                      >
                        Phone Number
                      </label>
                      <input
                        ref={phnRef}
                        id="ph-no"
                        type="text"
                        placeholder="Phone Number"
                        onChange={(e) => (formDetials.phone = e.target.value)}
                        className=" border text-xl border-white focus:border-[#f9d5ca] p-3 focus:border-2 focus:outline-none  w-full  text-white    bg-transparent transition duration-100 ease-in "
                      />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <label
                        htmlFor="add"
                        className="text-white font-medium text-xl "
                      >
                        Email Address
                      </label>
                      <input
                        ref={emailRef}
                        onChange={(e) => (formDetials.email = e.target.value)}
                        id="add"
                        type="email"
                        placeholder="Email"
                        className="border text-xl border-white focus:border-[#f9d5ca] p-3 focus:border-2 focus:outline-none w-full text-white transition duration-100 ease-in  bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full sm:w-5/6 md:w-full md+:w-5/6 mx-auto gap-2 ">
                    <label
                      htmlFor="sub"
                      className="text-white font-medium text-xl"
                    >
                      Subject
                    </label>
                    <input
                      ref={subRef}
                      onChange={(e) => (formDetials.subject = e.target.value)}
                      id="sub"
                      type="text"
                      placeholder="Subject"
                      className="border text-xl  border-white focus:border-[#f9d5ca] p-3 focus:outline-none focus:border-2  text-white transition duration-100 ease-in  bg-transparent"
                    />
                  </div>
                  <div className="flex  flex-col  w-full  sm:w-5/6 md:w-full md+:w-5/6 mx-auto gap-2">
                    <label
                      htmlFor="msg"
                      className="text-white font-medium text-xl"
                    >
                      Message
                    </label>
                    <textarea
                      ref={msgRef}
                      onChange={(e) => (formDetials.message = e.target.value)}
                      id="msg"
                      rows={4}
                      placeholder="Message"
                      className="border text-xl border-white focus:border-[#f9d5ca] p-3 focus:outline-none focus:border-2  text-white transition duration-100 ease-in   bg-transparent"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="cursor-pointer hover:scale-110 hover:animate-pulse duration-300  text-[#f4805b] border-2 border-[#f4805b] text-xl py-2 px-4 flex self-start sm:ml-[8%]   "
                  />
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="bg-none  col-span-3 xl:col-span-1 h-[600px] flex items-center xl:absolute xl:top-[15%]">
                <div className="flex w-full justify-center items-center">
                  <Confetti
                    gravity={0.04}
                    className="w-11/12 mx-auto h-full"
                  ></Confetti>
                  <h1 className="z-20 text-3xl font-bold  text-center  text-white ">
                    {showMessage + "🙂"}
                  </h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
