import React from 'react'
import './MonTauk.scss'
const Montauk = ({bg, title}:{bg:string, title:string}) => {
  return (
    <div className="montauk-wrapper" style={{backgroundImage:`url(${bg})`}}> 
    <div className="text">
      <svg viewBox="0 0 120 16" className="w-full px-8 h-full">
        <text
          x="50%"
          y="16"
          text-anchor="middle"
          fill="#fbf2ed"
          className="font-sans font-bold"
        >
          {title}
        </text>
      </svg>
    </div>
  </div>
  )
}

export default Montauk

