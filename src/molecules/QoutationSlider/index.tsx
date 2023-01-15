import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';

const QSLider = ({
  children,
  heading,
}: {
  children?: React.ReactNode;
  heading?: string;
}) => {
  let settings = {
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />,
   
  };
  return (
    <div className="relative">
      <Slider {...settings} className="">
        {children}
      </Slider>
    </div>
  );
};

export default QSLider;

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
      <FaChevronRight className='text-[4rem] text-white' />
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
      <FaChevronLeft className=' text-white text-[4rem]' />
    </div>
  );
};