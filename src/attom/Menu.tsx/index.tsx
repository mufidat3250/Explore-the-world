import { useState } from "react";
import "./Menu.scss";
import { setImg } from "../../entity/accordion";
const Menu = ({data, lastIndex}: { data: any; lastIndex: boolean }) => {
  const [submenu, setsubmenu] = useState(false);
 
  return (
    <div
      className={`menu-wrapper ${
        lastIndex && "border-b-[1px] py-[1rem] border-[#e0d2c9] "
      }`}
    >
      <div className="single-detail" onClick={()=> {
        setsubmenu(!submenu)
        setImg(data.id)

      }}>
        <div className=" flex flex-col">
          <p className="text-[#6f7071] text-[1rem] font-[Heldane-display]">
            {data.title}
          </p>
          <i className="font-[600]">
            <h3 className="text-[#c14c2b] md:text-[1.375rem]  font-[600] font-[mabry]">
              {data.subtitle}
            </h3>
          </i>
        </div>
        <p className="text-[2rem]">
          {submenu ? (
            <div className="timesIcon"></div>
          ) : (
            <div className="plusIcon"></div>
          )}
        </p>
      </div>

      {submenu && <p className="mt-[1rem] font-[Heldane-display] text-[1.375rem] text-[#6f7071]">{data.desc}</p>}
    </div>
  );
};

export default Menu;
