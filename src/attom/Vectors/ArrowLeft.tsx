import * as React from "react"
import { SVGProps } from "react"

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#fbf2ec"
    width={32}
    height={32}
    data-fill="#fbf2ec"
    data-stroke="none"
    {...props}
  >
    <path
      d="m10 20 1.8-1.8-6.9-6.9H20V8.7H4.9l6.9-6.9L10 0 0 10Z"
      style={{
        fill: "#fbf2ec",
      }}
    />
  </svg>
)

export default ArrowLeft
