import { SVGProps } from "react"
const Phone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="ml-2 fill-current text-mar-fill-0"
    width={57}
    height={57}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70 70"
    {...props}
  >
    <path d="M35 70a35 35 0 1 1 35-35 35 35 0 0 1-35 35Zm0-68.3A33.3 33.3 0 1 0 68.3 35 33.29 33.29 0 0 0 35 1.7Z" />
    <path
      style={{
        fill: "#dccbc3",
      }}
      d="M37.5 18.3a14.3 14.3 0 0 0-14.3 14.3c0 7.9 14.3 24.1 14.3 24.1s14.3-16.2 14.3-24.1a14.3 14.3 0 0 0-14.3-14.3Zm0 20.9a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z"
      transform="translate(-2.5 -2.5)"
    />
  </svg>
)

export default Phone