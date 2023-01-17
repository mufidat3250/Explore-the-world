import React from 'react'
import './MonTauk.scss'
const Montauk = ({bg, title}:{bg:string, title:string}) => {
  return (
    <div className="montauk-wrapper"> 
    <div className='absolute font-[700] md:text-[8rem] text-[3.5rem] lg:text-[10rem] text-white'>
    <h1>MONTACK</h1>     

    </div>
    <div className=" h-full w-full">
    <video className="  object-cover h-full w-full" muted loop autoPlay>
      <source src="videos/montauk.mp4" type="video/mp4"/>
</video>
    </div>
  </div>
  )
}

export default Montauk

