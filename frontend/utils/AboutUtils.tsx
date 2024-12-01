import React from "react"

function AboutUtils({ content }: { content: string }) {
  return (
    <div className="flex flex-col w-full text-white md:text-xl text-sm xs:text-base text-center tracking-wider gap-y-5 ">
      {content}
      <span className="border-t-8  drop-shadow-sm w-11/12 mx-auto  border-[#f5e4bc] "></span>
      <span className="border-t-8  drop-shadow-sm w-2/3 mx-auto  border-[#f5e4bc] "></span>
      <span className="hidden md:inline-block border-t-8  drop-shadow-sm w-2/3 mx-auto  border-[#f5e4bc] "></span>
    </div>
  )
}

export default AboutUtils
