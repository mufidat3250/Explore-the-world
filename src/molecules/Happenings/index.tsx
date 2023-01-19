import './Hapenings.scss'
import {happenings} from './../../data'
import Menu from '../../attom/Menu.tsx'
import { accordionImg } from '../../entity/accordion'

const Happenings = () => {
  const swtichImg = accordionImg.use(); 
  // console.log(happenings[swtichImg].img, 'check')
   return (
    <div className='happenings-wrapper' id='happenings'>
        <h1>HAPPENINGS</h1>
        <div className='tourism'>
            <img src={happenings[swtichImg].img} alt="" />
            <div>
            {happenings.map((data, index)=> <Menu data={data} key={`menu--${index}`} lastIndex={index=== happenings.length-1}/>)}
            </div>
        </div>
    </div>
  )
}

export default Happenings