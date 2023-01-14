import React from 'react'
import './Button.scss'

const Button = ({title}:{title:string}) => {
  return (
    <div className='btn-wrapper'>{title}</div>
  )
}

export default Button