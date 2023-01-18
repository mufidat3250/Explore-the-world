import * as React from "react"
import { SVGProps } from "react"

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      // @ts-ignore
      enableBackground: "new 0 0 20 20",
    }}
    xmlSpace="preserve"
    fill="#fbf2ec"
    width={32}
    height={32}
    data-fill="#fbf2ec"
    data-stroke="none"
    {...props}
  >
    <path
      d="m10 20 1.8-1.8-6.9-6.9H20V8.7H4.9l6.9-6.9L10 0 0 10l10 10z"
      style={{
        fill: "#fbf2ec",
      }}
      transform="rotate(-180 10 10)"
    />
  </svg>
)

export default RightArrow