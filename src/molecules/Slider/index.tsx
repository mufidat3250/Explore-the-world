// import React from 'react'
import './Slider.scss'

const sliderImg = ['/public/images/slider1.webp', '/public/images/slider2.webp', '/public/images/slider3.webp', '/public/images/slider4.webp', '/public/images/slider5.webp', '/public/images/slider6.webp', '/public/images/slider7.webp']
const Slider = () => {
  return (
    <div className='slider'>
        {sliderImg.map((slider, index)=> <img src={slider} key={index}/>)}
    </div>
  )
}

export  {Slider}
import React, { useState, useRef } from "react";

interface Props {
  items: JSX.Element[];
}

const Carousel = (props: Props) => {
  const { items } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to handle previous button click
  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex = currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to handle next button click
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex = currentIndex + 1 === items.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to handle animation end
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <button onClick={handlePrevious}>Previous</button>
      <div 
        className="carousel-item flex w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform ease-out 0.5s" : "none"
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        {sliderImg.map((item, index) => (
          <div key={index} className="carousel-item-inner w-[100px]">
            <img src={item} className='w-full h-full shrink-0'/>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Carousel