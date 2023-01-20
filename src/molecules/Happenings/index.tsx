import './Hapenings.scss'
import {happenings} from './../../data'
import Menu from '../../attom/Menu.tsx'
import { accordionImg } from '../../entity/accordion'
import { useEffect } from 'react'

const Happenings = () => {
  const swtichImg = accordionImg.use(); 
  // console.log(swtichImg)
  // console.log(happenings[swtichImg].img, 'check' , swtichImg)
return (
    <div className='happenings-wrapper' id='happenings'>
       <div className='container'>
       <h1>HAPPENINGS</h1>
        <div className='tourism '>
            <img src={happenings[swtichImg]?.img} alt=""/>
            <div>
            {happenings.map((data, index)=> <Menu data={data} key={`menu--${index}`} lastIndex={index=== happenings.length-1}/>)}
            </div>
        </div>
       </div>
    </div>
  )
}

export default Happenings