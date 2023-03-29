import React from 'react'
import './loading.css'
function Loading() {
  return (
    <div className={ `h-screen w-full absolute z-50 bg-[#171717] flex items-center overflow-hidden` }>
      <div className="psoload   flex justify-center items-center ">
        <div className="straight"></div>
        <div className="curve"></div>
        <div className="center"></div>
        <div className="inner"></div>
    </div>
      </div>
  )
}

export default Loading