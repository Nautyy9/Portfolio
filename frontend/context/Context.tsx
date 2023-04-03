import React, { createContext, useEffect, useRef, useContext } from 'react'

const ContextValue = () =>{
    const menuRef = useRef<HTMLDivElement>(null!);
    const head_ref = useRef<HTMLDivElement>(null!);
    const work_ref = useRef<HTMLDivElement>(null!)
    const scrolldiv_ref = useRef<HTMLDivElement>(null!) 
    const section_ref = useRef<HTMLDivElement>(null!) 
    return (
        {menuRef, head_ref, work_ref, scrolldiv_ref, section_ref}
    )
}
type ChildrenType = {
    children: React.ReactNode
}

type ReturnedType = ReturnType<typeof ContextValue>

const authContext  = createContext<ReturnedType>(null!);

function Context({children}: ChildrenType ) {
    const menuRef = useRef<HTMLDivElement>(null!);
    const head_ref = useRef<HTMLDivElement>(null!);
    const work_ref = useRef<HTMLDivElement>(null!)
    const scrolldiv_ref = useRef<HTMLDivElement>(null!) 
    const section_ref = useRef<HTMLDivElement>(null!) 
    // useEffect(() =>{

    //     var scrollLength = 10;
    //     window.onscroll = (e:any) =>{
    //       const scrollTop = window.scrollY
    //       if(scrollTop> scrollLength){
    //         head_ref.current.style.transition= 'top .6s ease-in'
    //         head_ref.current.style.top = '-64px';
    //       }
    //       if(scrollTop > window.innerHeight-64){
    //         head_ref.current.style.boxShadow = '1px 1px 2px rgba(0,0,0,0.1)'
    //       }
    //      else {
    //         head_ref.current.style.boxShadow =  'inset 0px -2px 5px rgba(0,0,0,0.1)'
    //         head_ref.current.style.top = '0px';
    //       }
    //       // console.log(scrollLength,'length' ,scrollTop, 'top');
    //       scrollLength = scrollTop;
          
    //     }
        
    //   }, [])
      useEffect(() =>{
        var cleanup = true
        var windowWidth = window.innerWidth;
        var horizontalLength = scrolldiv_ref.current.scrollWidth;
        var distFromTop = work_ref.current.offsetTop+50;
        var scrollDistance = distFromTop + horizontalLength -windowWidth-100;
        // console.log(windowWidth, horizontalLength, distFromTop, scrollDistance);
        work_ref.current.style.height =horizontalLength+ "px";
        if(cleanup){
        window.onscroll = (e: any) =>{
          var scrollTop = window.scrollY;
          if(innerHeight < 880 && innerWidth >695){
            scrollDistance = distFromTop + horizontalLength -windowWidth
            horizontalLength  = scrolldiv_ref.current.scrollWidth -300
            distFromTop = work_ref.current.offsetTop ;
          work_ref.current.style.height =horizontalLength+ 600 + "px";
          } 
            if(innerHeight < 880 &&  (innerWidth>595 && innerWidth <=695)){
            horizontalLength  = scrolldiv_ref.current.scrollWidth +100
            distFromTop = work_ref.current.offsetTop + 100;
            work_ref.current.style.height =horizontalLength +300+ "px";
          }
          if(innerHeight < 880 &&  (innerWidth>495 && innerWidth<=595) ){
            horizontalLength  = scrolldiv_ref.current.scrollWidth -200
            distFromTop = work_ref.current.offsetTop ;

          work_ref.current.style.height =horizontalLength+500+ "px";

          }
          if(innerHeight < 880 &&  innerWidth<=495  ){
            horizontalLength  = scrolldiv_ref.current.scrollWidth + 600
            distFromTop = work_ref.current.offsetTop + 50;

          work_ref.current.style.height =horizontalLength+500+"px";

          }
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
          //     // const value = scrollTop-distFromTop
          //     section_ref.current.style.visibility = 'hidden'
          //     scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
          //   }
          // }
    
          if(window.innerWidth <=900){
            if(scrollTop >= distFromTop && scrollTop<=scrollDistance +300) {
              const value = scrollTop-distFromTop
              // console.log('shiro9');

              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
              section_ref.current.style.visibility = 'visible'
            }
            else if(scrollTop>scrollDistance +300){
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"

            }
            else{
              // console.log('suii9');
              // const value = scrollTop-distFromTop
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
            }
          }
            else if(window.innerWidth >900 &&  window.innerWidth <= 1200){
            if(scrollTop >= distFromTop && scrollTop<=scrollDistance +200) {
              const value = scrollTop-distFromTop
              // console.log('shiro3');

              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
              section_ref.current.style.visibility = 'visible'
            }
            else if(scrollTop>scrollDistance +200){
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"

            }
            else{
              // console.log('suii4');
              // const value = scrollTop-distFromTop
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
            }
          }
          else if(window.innerWidth>1200 && window.innerWidth<=1500){
            if(scrollTop >= distFromTop && scrollTop<=scrollDistance+200) {
              const value = scrollTop-distFromTop
              // console.log('shiro2');

              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
              section_ref.current.style.visibility = 'visible'
            }
            else if(scrollTop>scrollDistance+200){
              // console.log('suii3');
              
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
            }
            else {
              // console.log('suii3');
              
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
            }
          }
          else if(window.innerWidth>1500 ){
            if(scrollTop >= distFromTop && scrollTop<=scrollDistance+200) {
              const value = scrollTop-distFromTop
              // console.log('shiro1');
              
              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
              section_ref.current.style.visibility = 'visible'
            }
            else if(scrollTop>scrollDistance+200){
              // console.log('suii1');
              
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+value+"px, 0px, 0px)"
            }
            else{
              // console.log('suii1');
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
            }
          }
            else{
              // console.log('suii2');
              section_ref.current.style.visibility = 'hidden'
              scrolldiv_ref.current.style.transform = "translate3d(-"+0+"px, 0px, 0px)"
            }
        }
      }
        return () =>{
          cleanup = false
        }
      })

    

      const value  = {
        menuRef,
        head_ref,
        work_ref,
        scrolldiv_ref,
        section_ref
      }

return (
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
  )
}
export const contextValue = () =>  useContext<ReturnedType>(authContext);

export default Context