import React from 'react'
import { experience } from '../../data'
const Experience = () => {
  return (
    <div className='experience'>
        {experience.map((data, index)=> <div className=''>
            {index % 2 == 0 && <div className='grid grid-rows lg:grid-cols-2 w-full'>
                <img src={data.img} alt=""  className='w-full object-cover'/>
                <div className='px-[3.5rem] flex item-center flex-col justify-center text-[1.375rem]'>
                   <p className=''> {data.desc}</p>
                   <div className='mt-[2.8125rem]'>
                   {data.button}
                   </div>
                </div>
            </div> }
            {
                index %2 !==0 && <div className='grid grid-rows lg:grid-cols-2 '>
                    <div className='lg:px-[3.5rem] flex item-center flex-col justify-center text-[1.375rem] max-w-[90%] mx-auto'>
                    {data.desc}
                    <div className='mt-[2.8125rem] md:mb-[2rem] lg:mb-[0]'>
                   {data.button}
                   </div>
                    </div>
                    <img src={data.img} alt="" className='' />

                </div>
            }
        </div>)}
    </div>
  )
}

export default Experience