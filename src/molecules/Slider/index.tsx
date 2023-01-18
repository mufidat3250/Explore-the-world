import React from 'react'
import  Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import RightArrow from '../../attom/Vectors/RightArrow';
import ArrowLeft from '../../attom/Vectors/ArrowLeft';

// import { investors } from '../../data';


const Sliders = ({
  children,
  heading,
}: {
  children?: React.ReactNode;
  heading?: string;
}) => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider {...settings} className="">
        {children}
      </Slider>
    </div>
  );
};

export default Sliders;

export const ButtonSlider = ({ children }: { children: React.ReactNode }) => {
  let settings = {
    Infinity: true,
    // dots: true,
    slideToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="relative w-full">
        {children}
      </Slider>
    </div>
  );
};

const SampleNextArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      className=" absolute right-[10px] top-[0] bottom-0  flex justify-center items-center cursor-pointer  "
      onClick={onClick}
    >
      <RightArrow className='text-[4rem] text-white' />
    </div>
  );
};

const SamplePreviousArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      className=" cursor-pointer absolute left-[10px] top-[0] bottom-0  z-50 flex justify-center items-center"
      onClick={onClick}
    >
      <ArrowLeft className=' text-white text-[4rem]' />
    </div>
  );
};