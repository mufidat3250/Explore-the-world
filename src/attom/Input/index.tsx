import React from 'react'
import './Input.scss'
const Input = ({placeholder}:{placeholder:string}) => {
  return (
    <div className='input-wrapper'>
        <input type="text"  placeholder={placeholder}/>
    </div>
  )
}

export default Input