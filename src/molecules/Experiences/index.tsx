import React from 'react'
import { experience } from '../../data'
const Experience = () => {
  return (
    <div className='experience'>
        {experience.map((data, index)=> <div className=''>
            {index % 2 == 0 && <div className='grid grid-rows lg:grid-cols-2 w-full'>
                <img src={data.img} alt=""  className='w-full object-cover'/>
                <div className=' px-[2.5rem] md:px-[3.5rem] flex item-center flex-col justify-center text-[1.375rem]  text-base mt-8 md:mt-0  md:mb-0 mb-4'>
                   <p className=''> {data.desc}</p>
                   <div className='mt-[2.8125rem]'>
                   {data.button}
                   </div>
                </div>
            </div> }
            {
                index %2 !==0 && <div className='grid grid-rows lg:grid-cols-2 '>
                    <div className=' md:px-[3.5rem] flex item-center text-base  flex-col justify-center text-[1.375rem] max-w-[90%] mx-auto order-2 lg:order-1 mt-8 md:mt-0 md:mb-0 mb-4'>
                    {data.desc}
                    <div className='mt-[2.8125rem] md:mb-[2rem] lg:mb-[0]'>
                   {data.button}
                   </div>
                    </div>
                    <img src={data.img} alt="" className=' order-1 lg:order-2' />

                </div>
            }
        </div>)}
    </div>
  )
}

export default Experience