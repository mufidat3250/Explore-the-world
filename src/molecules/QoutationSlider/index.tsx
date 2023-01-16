import React from 'react'
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
