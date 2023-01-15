import React, { ReactNode } from 'react'
import { experience } from '../../data'
import './Experience.scss'
const Experience = ({data}:{data:any}) => {
  return (
    <div className='experience' id={'experience'}>
        {data.map((data:any, index:number)=> <div className=''>
            {index % 2 == 0 && <div className='even-wrapper'>
                <img src={data.img} alt=""  className='w-full object-cover'/>
                <div className='even-desc'>
                   <p className=''> {data.desc}</p>
                   <div className='mt-[2.8125rem]'>
                   {data.button}
                   </div>
                </div>
            </div> }
            {
                index %2 !==0 && <div className='odd-wrapper'>
                    <div className='odd-desc'>
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

