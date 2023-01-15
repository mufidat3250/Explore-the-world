import { useState } from "react";
import { quotations } from "../../data";
import QSLider from "../../molecules/QoutationSlider";
import "./Quotation.scss";
const data = [
  "ARCHITECTURAL DIGEST",
  "VOGUE",
  "COOL HUNTING",
  "CONDÉ NAST TRAVELER",
];
const Quotations = () => {
  const [quotation, setQuotation] = useState("");
  return (
    <div className="quotation-wrapper">
      <div className="quotation-container">
        <p className="text-[3rem] absolute left-[50%] top-0 text-[#8e7e6d]">
          "
        </p>
        <QSLider>
          {quotations.map((quotation, index) => {
            return (
              <div key={index} className="text-center  text-[1.375rem] p-14">
                <i>
                  <p>{quotation}</p>
                </i>
              </div>
            );
          })}
        </QSLider>
        <p className="text-[3rem] absolute left-[50%] bottom-0 text-[#8e7e6d]">
          "
        </p>

        {/* <div className="mt-[2rem] flex justify-center items-center gap-9">
          {data.map((data, index) => (
            <div
              key={index}
              className="font-[400] text-[1.375rem] text-[#8e7e6d] font-sans cursor-pointer"              
            >
              {data}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Quotations;
