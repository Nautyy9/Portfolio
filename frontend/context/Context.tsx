import { useAnimation } from "framer-motion";
import React, { createContext, useEffect, useRef, useContext } from "react";
import { Event } from "three";

const ContextValue = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const head_ref = useRef<HTMLDivElement>(null);
  const work_ref = useRef<HTMLDivElement>(null);
  const scrolldiv_ref = useRef<HTMLDivElement>(null);
  const section_ref = useRef<HTMLDivElement>(null);

  if (location.pathname === "/") {
    return {
      menuRef,
      head_ref,
      work_ref,
      scrolldiv_ref,
      section_ref,
    };
  } else return {};
};

export type ReturnedType = ReturnType<typeof ContextValue>;

const authContext = createContext<ReturnedType>(null!);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const menuRef = useRef<HTMLDivElement>(null);
  const head_ref = useRef<HTMLDivElement>(null);
  const work_ref = useRef<HTMLDivElement>(null);
  const scrolldiv_ref = useRef<HTMLDivElement>(null);
  const section_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = (window.onscroll = (e: Event) => {
      debounce(scrollRoll)();
    });
    return () => window.removeEventListener("scroll", scroll);
  }, [window.onscroll, window.onresize]);
  function scrollRoll() {
    if (!scrolldiv_ref.current || !work_ref.current) return;

    var windowWidth = window.innerWidth;

    var horizontalLength: number = 0;

    horizontalLength = scrolldiv_ref.current.scrollWidth;
    var distFromTop: number = 0;
    distFromTop = work_ref.current.offsetTop;
    // console.log(distFromTop);
    var scrollDistance = distFromTop + horizontalLength - windowWidth;
    // console.log(windowWidth, horizontalLength, distFromTop, scrollDistance);

    work_ref.current.style.height = horizontalLength + "px";

    var scrollTop = window.scrollY;
    // console.log(scrollTop);
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      const value = scrollTop - distFromTop;
      scrolldiv_ref.current.style.transform =
        "translate3d(-" + value + "px, 0px, 0px)";
    } else if (scrollTop > scrollDistance) {
      scrolldiv_ref.current.style.transform =
        "translate3d(-" + (horizontalLength - windowWidth) + "px, 0px, 0px)";
    } else {
      scrolldiv_ref.current.style.transform =
        "translate3d(-" + 0 + "px, 0px, 0px)";
    }
  }
  function debounce(func: () => void) {
    var timer: NodeJS.Timer;
    return function () {
      if (timer) clearTimeout(timer);
      else {
        timer = setTimeout(() => func(), 100);
      }
    };
  }

  const value = {
    menuRef,
    head_ref,
    work_ref,
    scrolldiv_ref,
    section_ref,
  };
  const second_value = {};
  if (location.pathname === "/") {
    return (
      <authContext.Provider value={value}>{children}</authContext.Provider>
    );
  } else {
    return (
      <authContext.Provider value={second_value}>
        {children}
      </authContext.Provider>
    );
  }
}
export const contextValue = () => useContext<ReturnedType>(authContext);

export default ContextProvider;
