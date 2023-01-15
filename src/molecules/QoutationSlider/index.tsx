import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import QuotationRight from '../../attom/Vectors/QoutationRightIcon';
import QuotationLeft from '../../attom/Vectors/QuotaionLeft';

const QSLider = ({
  children,
  heading,
}: {
  children?: React.ReactNode;
  heading?: string;
}) => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
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
      <QuotationRight className='text-[4rem] text-white' />
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
      <QuotationLeft className=' text-white text-[4rem]' />
    </div>
  );
};
