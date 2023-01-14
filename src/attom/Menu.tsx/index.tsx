import React, { useState } from 'react'
import './Menu.scss'
import {FaTimes, FaMinus} from 'react-icons/fa'

const Menu = ({data}:{data:any}) => {
    console.log(data)
    const [submenu, setsubmenu] = useState(false)
    const showSubmenu = ()=>setsubmenu((prev)=>!prev)

    
  return (
    <div className='menu-wrapper'>
        <div className='single-detail' onClick={showSubmenu}>
            <div className=' flex flex-col'>
                <p className='text-[#6f7071] text-[1.375rem]'>{data.title}</p>
               <i className='font-[600]'>
               <h3 className='text-[#c14c2b] text-[1.375rem]  font-[600]'>{data.subtitle}</h3>
               </i>
            </div>
            <p className='text-[2rem]'>{submenu ?<FaTimes className='text-gray-400 text-[12px]'/>: <FaMinus className='text-gray-400 text-[12px]'/>}</p>
        </div>
       
       {submenu && <p className='mt-[1rem] font-serif'>{data.desc}</p>}       
    </div>
  )
}

export default Menu