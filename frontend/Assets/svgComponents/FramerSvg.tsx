import * as React from "react"
const FramerSvg = (props: any) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z"
      fill="#ffffff"
      stroke="#000000"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="1"
      pathLength="1"
      strokeDashoffset="0px"
      strokeDasharray="1px 1px"
    />
  </svg>
)
export default FramerSvg
