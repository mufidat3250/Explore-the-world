import './HeroSection.scss'
import { useRef } from 'react'

const HeroSection = () => {
  const vidRef = useRef();
  return (
    <div className='hero-wrapper' id='home'>
      <div className="herosection">
      <div className='hero-title'>
      <h4>Here is to Life's simple pleasures this </h4>
      <h1>WINTER</h1></div>      
        <video className="  object-cover h-full w-full" muted loop autoPlay>
      <source src="videos/hero-index.mp4" type="video/mp4"/>
</video>
      </div>
   <div className='desc '>
   <p >A truly unique oceanfront experience located in the heart of Montauk, marram is a ninety-six room boutique resort hotel, offering barefoot luxury and essential experiences that invite you to focus on <i>life’s simple pleasures.</i></p>
   </div>
    </div>
  )
}

export default HeroSection