import React, { ReactNode } from 'react'
import { experience } from '../../data'
import './Experience.scss'
const Experience = ({data}:{data:any}) => {
  return (
    <div className='experience' id={'experience'}>
        {data.map((data:any, index:number)=> <div className='' key={index}>
            {index % 2 == 0 && <div className='even-wrapper'>
                <img src={data.img} alt=""  className=''/>
                <div className='even-desc'>
                   <> {data.desc}</>
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
                  <div className='odd-img'>
                  
                  <img src={data.img} alt="" className=' w-full h-full' />
                  </div>

                </div>
            }
        </div>)}
    </div>
  )
}

export default Experience

