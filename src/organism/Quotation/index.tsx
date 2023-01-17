import { useState } from "react";
import QuotationRight from "../../attom/Vectors/QoutationRightIcon";
import QuotationLeft from "../../attom/Vectors/QuotaionLeft";
import "./Quotation.scss";
const data = [
  { title: "ARCHITECTURAL DIGEST", desc: "MARRAM … describes their vibe as “barefoot luxury.” It’s apparent from the movement you arrive." },
  {
    title: "VOGUE",
    desc: "Rarities like , a beautiful new beachfront property, are a reminder that peace, quiet and mindfulness were once the hamlet’s primary draw.",
  },
  {
    title: "COOL HUNTING",
    desc: "Finally, a hotel experience with everything you need, and nothing you don't. Walk to the ocean and into town to enjoy the best that Montauk has to offer in people, place and cuisine.",
  },
  {
    title: "CONDÉ NAST TRAVELER",
    desc: "MARRAM—the English word for the wild seagrass that is found all around the hotel, often planted in elegant dunes—has a prime spot right on the beach.",
  },
];
const Quotations = () => {
  const [quotation, setQuotation] = useState("");
  const [currentIndex , SetcurrentIndex] = useState(0)

  const prevSlide = ()=>{
      let isFirstSlide = currentIndex===0
      let newIndex = isFirstSlide ? data.length-1: currentIndex-1
      SetcurrentIndex(newIndex)
  }
const nextSlide = ()=>{
  let isLastSlide = currentIndex == data.length-1
  let newIndex = isLastSlide ? 0: currentIndex+1
  SetcurrentIndex(newIndex)
}
const changeText = (index:number)=>{
      SetcurrentIndex(index)
}
  return (
    <div className="quotation-wrapper">
      <div className="quotation-container">
        <p className="text-[3rem] absolute left-[50%] top-0 text-[#8e7e6d] cursor-pointer">
          "
        </p>
          <div className="flex items-center  lg:space-x-[7.3125rem]" >
            <QuotationLeft onClick={prevSlide}/>
              <div className="w-[59.9375rem] text-center text-[1.375rem]">
               <i> {data[currentIndex].desc}</i>
              </div>
          <QuotationRight onClick={nextSlide} className=''/>
          </div>
        <span className="text-[3rem] absolute left-[50%] bottom-[100px] text-[#8e7e6d] cursor-pointer" >
          "
        </span>

        <div className="mt-[6rem]  justify-center items-center gap-9 hidden lg:flex">
          {data.map((data, index) => (
            <div
              key={index}
              className={`font-[400] text-[1.375rem]  font-sans cursor-pointer ${currentIndex===index?'text-[#e39881]':'text-[#8e7e6d]'}`} 
              onClick={()=>changeText(index)}             
            >
              {data.title}
            </div>
          ))}
        </div>
        <div className="flex text-[#e39881] justify-center mt-[4rem] md:hidden duration-500 animate translate-x-3">{data[currentIndex].title}</div>
      </div>
    </div>
  );
};

export default Quotations;
