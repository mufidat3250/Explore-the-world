import React from 'react'
import { experience } from '../../data'
const Experience = () => {
  return (
    <div className='experience'>
        {experience.map((data, index)=> <div className=''>
            {index % 2 == 0 && <div className='grid grid-cols-2'>
                <img src={data.img} alt="" />
                <div className='px-[3.5rem] flex item-center flex-col justify-center text-[1.375rem] '>
                    {data.desc}
                   <div className='mt-[2.8125rem]'>
                   {data.button}
                   </div>
                </div>
            </div> }
            {
                index %2 !==0 && <div className='grid grid-cols-2'>
                    <div className='px-[3.5rem] flex item-center flex-col justify-center text-[1.375rem]'>
                    {data.desc}
                    <div className='mt-[2.8125rem]'>
                   {data.button}
                   </div>
                    </div>
                    <img src={data.img} alt="" />

                </div>
            }
        </div>)}
    </div>
  )
}

export default Experience