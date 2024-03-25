import React from "react";

function AboutUtils({ content }: { content: string }) {
  return (
    <div className="flex flex-col w-full text-white md:text-xl text-sm xs:text-base text-center tracking-wider ">
      {content}
      <span className="border-t-8  drop-shadow-sm w-11/12 mx-auto  border-[#f5e4bc] "></span>
      <br></br>
      <span className="border-t-8  drop-shadow-sm w-2/3 mx-auto  border-[#f5e4bc] "></span>
      <br></br>
      <span className="hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto  border-[#f5e4bc] "></span>
      <br></br>
    </div>
  );
}

export default AboutUtils;
