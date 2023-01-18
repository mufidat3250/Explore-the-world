import React from 'react'
import './Hapenings.scss'
import {happenings} from './../../data'
import Menu from '../../attom/Menu.tsx'

const Happenings = () => {
  return (
    <div className='happenings-wrapper' id='happenings'>
        <h1>HAPPENINGS</h1>
        <div className='tourism'>
            <img src="/images/happenings.webp" alt="" />
            <div>
            {happenings.map((data, index)=> <Menu data={data} key={`menu--${index}`} lastIndex={index=== happenings.length-1}/>)}
            </div>
        </div>
    </div>
  )
}

export default Happenings