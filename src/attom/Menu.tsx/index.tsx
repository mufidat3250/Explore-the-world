import React, { useState } from "react";
import "./Menu.scss";

const Menu = ({ data, lastIndex }: { data: any , lastIndex:boolean}) => {
  console.log(data);
  const [submenu, setsubmenu] = useState(false);
  const showSubmenu = () => setsubmenu((prev) => !prev);

  return (
    <div className={`menu-wrapper ${lastIndex && 'border-b-[1px] py-[1rem] border-[#e0d2c9] '}`}>
      <div className="single-detail" onClick={showSubmenu}>
        <div className=" flex flex-col">
          <p className="text-[#6f7071] md:text-[1.375rem]">{data.title}</p>
          <i className="font-[600]">
            <h3 className="text-[#c14c2b] md:text-[1.375rem]  font-[600]">
              {data.subtitle}
            </h3>
          </i>
        </div>
        <p className="text-[2rem]">
          {submenu ? (
            <div className="timesIcon">
            </div>
          ) : (
            <div className="plusIcon">
            </div>
            
          )}
        </p>
      </div>

      {submenu && <p className="mt-[1rem] font-serif">{data.desc}</p>}
    </div>
  );
};

export default Menu;
