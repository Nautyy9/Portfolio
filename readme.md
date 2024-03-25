<!-- context garbage -->

// if(innerHeight < 880 && innerWidth >695){
// scrollDistance = distFromTop + horizontalLength -windowWidth
// horizontalLength = scrolldiv_ref.current.scrollWidth -300
// distFromTop = work_ref.current.offsetTop ;
// work_ref.current.style.height =horizontalLength+ 600 + "px";
// }
// if(innerHeight < 880 && (innerWidth>595 && innerWidth <=695)){
// horizontalLength = scrolldiv_ref.current.scrollWidth +100
// distFromTop = work_ref.current.offsetTop + 100;
// work_ref.current.style.height =horizontalLength +300+ "px";
// }
// if(innerHeight < 880 && (innerWidth>495 && innerWidth<=595) ){
// horizontalLength = scrolldiv_ref.current.scrollWidth -200
// distFromTop = work_ref.current.offsetTop ;

    // work_ref.current.style.height =horizontalLength+500+ "px";

    // }
    // if(innerHeight < 880 &&  innerWidth<=495  ){
    //   horizontalLength  = scrolldiv_ref.current.scrollWidth + 600
    //   distFromTop = work_ref.current.offsetTop + 50;

    // work_ref.current.style.height =horizontalLength+500+"px";

    // }
    // if(window.innerWidth<=768){
    //   if(scrollTop >= distFromTop && scrollTop<=scrollDistance +500) {
    //     const value = scrollTop-distFromTop
    //     console.log('shiro9');

    //     scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
    //     section_ref.current.style.visibility = 'visible'
    //   }
    //   else if(scrollTop>scrollDistance +500){
    //     section_ref.current.style.visibility = 'hidden'
    //     scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"

    //   }
    //   else{
    //     console.log('suii9');
    // const value = scrollTop-distFromTop
    //     section_ref.current.style.visibility = 'hidden'
    //     scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
    //   }
    // }

<!-- context another garbage for innerWidth <=900px> -->

    // if(scrollTop >= distFromTop && scrollTop<=scrollDistance +300) {
      //   const value = scrollTop-distFromTop
      // console.log('shiro9');
      //   scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
      //   section_ref.current.style.visibility = 'visible'
      // }
      // else if(scrollTop>scrollDistance +300){
      //   section_ref.current.style.visibility = 'hidden'
      //   scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
      // }
      // else{
      // console.log('suii9');
      // const value = scrollTop-distFromTop
      //   section_ref.current.style.visibility = 'hidden'
      //   scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
      // work_ref.current.style.height = "auto";
      // }'

<!-- screen sizes adjustment -->

      if (scrollTop >= distFromTop && scrollTop <= scrollDistance + 200) {
        const value = scrollTop - distFromTop;
        // console.log('shiro2');

        scrolldiv_ref.current.style.transform =
          "translate3d(-" + value + "px, 0px, 0px)";
        // * hereeeeeeeeeeeeeee
      } else if (scrollTop > scrollDistance + 200) {
        // console.log('suii3');
        // * hereeeeeeeeeeeeeee

        scrolldiv_ref.current.style.transform =
          "translate3d(-" + value + "px, 0px, 0px)";
      } else {
        // console.log('suii3');
        // * hereeeeeeeeeeeeeee

        scrolldiv_ref.current.style.transform =
          "translate3d(-" + 0 + "px, 0px, 0px)";
      }
      if (scrollTop >= distFromTop && scrollTop <= scrollDistance + 200) {
        const value = scrollTop - distFromTop;
        // console.log('shiro1');

        scrolldiv_ref.current.style.transform =
          "translate3d(-" + value + "px, 0px, 0px)";
      } else if (scrollTop > scrollDistance + 200) {
        // console.log('suii1');

        scrolldiv_ref.current.style.transform =
          "translate3d(-" + value + "px, 0px, 0px)";
      } else {
        // console.log('suii1');

        scrolldiv_ref.current.style.transform =
          "translate3d(-" + 0 + "px, 0px, 0px)";
      }

<!-- use Effect from context -->

// useEffect(() =>{

// var scrollLength = 10;
// window.onscroll = (e:any) =>{
// const scrollTop = window.scrollY
// if(scrollTop> scrollLength){
// head_ref.current.style.transition= 'top .6s ease-in'
// head_ref.current.style.top = '-64px';
// }
// if(scrollTop > window.innerHeight-64){
// head_ref.current.style.boxShadow = '1px 1px 2px rgba(0,0,0,0.1)'
// }
// else {
// head_ref.current.style.boxShadow = 'inset 0px -2px 5px rgba(0,0,0,0.1)'
// head_ref.current.style.top = '0px';
// }
// console.log(scrollLength,'length' ,scrollTop, 'top');
// scrollLength = scrollTop;

// }

// }, [])

<!-- HOME GSAP -->

useGSAP(() => {
// const text = document.querySelector('.who');

    const tl = gsap.timeline();
    tl.set("#my-image", { opacity: 0, visibility: "hidden" });
    tl.set(".name", { visibility: "hidden", opacity: 0 });
    tl.from(".who", { opacity: 0, visibility: "hidden" });
    // if (window.innerWidth > 768) {
    //   tl.fromTo(
    //     [".bg_text4", ".bg_text3", ".bg_text2", ".bg_text1"],
    //     { y: -1000, x: 0 },
    //     { y: 0, x: 0, stagger: 0.2, ease: Power4.easeOut, duration: 1 }
    //   );
    //   tl.fromTo(
    //     [".bg_text1", ".bg_text2", ".bg_text3", ".bg_text4"],
    //     { letterSpacing: 0 },
    //     { letterSpacing: 10, stagger: 0.2, ease: Back.easeInOut, duration: 0.8 }
    //   );
    // }
    tl.fromTo(
      ".shade_text2",
      { x: 0, y: -200, opacity: 0 },
      { x: 0, opacity: 1, y: 0, duration: 1, ease: Power4.easeOut },
      "-=.1"
    );
    tl.fromTo(
      ".shade_text1",
      { x: 0, y: -100, opacity: 0 },
      { x: 0, opacity: 1, y: 0, duration: 1, ease: Power4.easeOut },
      "-=1.2"
    );
    tl.fromTo(
      ".h_name",
      { opacity: 0, scale: 1, x: 0, y: 100 },
      {
        opacity: 1,
        stagger: 0.1,
        repeatRefresh: false,
        ease: "back",
        duration: 0.3,
        x: 0,
        y: 0,
      },
      "-=.6"
    );
    tl.fromTo(
      ".h_surname",
      { opacity: 0, scale: 1, x: 0, y: 100 },
      { opacity: 1, stagger: 0.1, ease: "back", duration: 0.3, x: 0, y: 0 },
      "-=.2"
    );
    tl.to(".who", {
      opacity: 1,
      ease: Power4.easeOut,
      duration: 1,
      visibility: "visible",
    });

}, []);

<!-- inside setImage function -->

const tl = gsap.timeline();

    tl.fromTo(
      [".shade_text1", ".shade_text2"],
      { opacity: 1, scale: 1, x: 0, y: 0 },
      {
        opacity: 0,
        stagger: 0.1,
        scale: 0,
        ease: "back",
        duration: 0.2,
        x: 0,
        y: 0,
        visibility: "hidden",
      },
      "-=.3"
    );
    tl.fromTo(
      ".h_name",
      { opacity: 1, scale: 1, x: 0, y: 0 },
      {
        opacity: 0,
        stagger: 0.1,
        scale: 0,
        ease: "back",
        duration: 0.2,
        x: 0,
        y: 0,
      },
      "-=.3"
    );
    tl.fromTo(
      ".h_surname",
      { opacity: 1, scale: 1, x: 0, y: 0 },
      {
        opacity: 0,
        stagger: 0.1,
        scale: 0,
        ease: "back",
        duration: 0.2,
        x: 0,
        y: 0,
      },
      "-=.3"
    );
    // tl.fromTo(
    //   [".bg_text5", ".bg_text4", ".bg_text3", ".bg_text2", ".bg_text1"],
    //   { x: 0 },
    //   { stagger: 0.3, x: 2000 }
    // );
    // tl.to(".bg_text", { display: "none" });
    tl.fromTo(
      "#my-image",
      { opacity: 0, visibility: "hidden" },
      { opacity: 1, duration: 1, ease: Power4.easeOut, visibility: "visible" }
    );
    tl.fromTo(
      ".suii",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: Power4.easeOut,
        visibility: "visible",
      }
    );
    tl.to(
      ".name",
      {
        opacity: 1,
        scale: 1,
        visibility: "visible",
        duration: 2,
        ease: Power4.easeOut,
      },
      "-=7"
    );

<!-- skills animation  -->

/ gsap.registerPlugin(ScrollTrigger);

// useGSAP(
// () => {
// var xl2 = tl.fromTo(
// ".skillcard",
// { visibility: "hidden", scale: 0 },
// {
// scrollTrigger: {
// trigger: ".skillcard",
// start: "-300px 500px ",
// end: () => "2200px 200px",
// scrub: 2,
// // markers: true,
// toggleActions: "restart pause reverse reset",
// // invalidateOnRefresh: true,
// },
// scale: 1,
// autoAlpha: 1,
// position: "relative",
// top: 0,
// left: 0,
// transform: "none",
// duration: 6,
// ease: "elastic",
// stagger: 4,
// }
// );

// tl.fromTo(
// [".frontend", ".backend"],
// { left: "70%", duration: 3 },
// {
// scrollTrigger: {
// trigger: [".frontend", ".backend"],
// toggleActions: "restart pause reverse reset",
// start: "-200% center",
// end: "3000px 10%",
// scrub: 10,
// // outerHeight: 1000,
// },
// left: "-100%",
// duration: 30,
// stagger: 5,
// opacity: 1,
// }
// );

// tl.fromTo(
// [".utilities", ".extras"],
// { left: "100%", duration: 3 },
// {
// scrollTrigger: {
// trigger: [".utilities", ".extras"],
// toggleActions: "restart pause reverse reset",
// start: "-200% center",
// end: "1000px 10%",
// scrub: 5,
// // markers: true,
// },
// left: "-100%",
// duration: 4,
// stagger: 1,
// opacity: 1,
// }
// );
// if (window.innerWidth > 1250 && window.innerWidth <= 1670) {
// // console.log('1670')
// xl2.\_first.vars.scrollTrigger.start = "-300px center";
// xl2.\_first.vars.scrollTrigger.end = "2600px 200px";
// } else if (window.innerWidth > 787 && window.innerWidth <= 1250) {
// // console.log('1250')

// xl2.\_first.vars.scrollTrigger.start = "-200px center";
// xl2.\_first.vars.scrollTrigger.end = "3900px 200px";
// } else if (window.innerWidth <= 787) {
// // console.log('787')

// xl2.\_first.vars.scrollTrigger.start = "-300px center";
// xl2.\_first.vars.scrollTrigger.end = "7200px 200px";
// }
// },
// { scope: skill_container, revertOnUpdate: true }
// );
