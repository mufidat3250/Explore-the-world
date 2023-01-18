import React from 'react'
// import '../MonTauk/MonTauk.scss'
const Marram
 = ({bg, title}:{bg:string, title:string}) => {
  return (
    <div className="h-[100vh] object-cover flex justify-center items-center" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}> 
    <div className="">
      <h1 className='text-[#fbf2ed] font-bold text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem]'> {title}</h1>
    </div>
  </div>
  )
}

export default Marram


