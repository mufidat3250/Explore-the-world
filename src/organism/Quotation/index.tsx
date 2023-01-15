import React from "react";
import QuotationSLider from "../../molecules/QoutationSlider";
import { quotations } from "../../data";
import Sliders from "../../molecules/Slider";
import QSLider from "../../molecules/QoutationSlider";
import './Quotation.scss'
const Quotations = () => {
  return (
    <div className="quotation-wrapper">
     <p className="text-[3rem]">"</p>

     <Sliders>
{quotations.map((quotation, index) => (
   <div key={index}>
     <i>
       <p>{quotation}</p>
     </i>
   </div>
 ))}
     </Sliders>
     <p className="text-[3rem]">"</p>

    </div>
  );
};

export default Quotations;
