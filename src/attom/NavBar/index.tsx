import React, { useState } from "react";
import "./NavBar.scss";
import { FaAlignJustify } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const tabs = [
    "stay",
    "dine",
    "refresh",
    "explore",
    "offers",
    "experiences",
    "reserve",
  ];
  const [open, setOpen] = useState(false);
  console.log('open')
  return (
    <div className="NavBar">
      <div className="nav-wrapper">
        <a href="#" className="logo">
          MARRAM
        </a>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <a key={index} className="tab">
              {tab}
            </a>
          ))}
        </div>
        <FaAlignJustify className="menu" onClick={() => {
          setOpen(!open)         
        }} />
<div className=" tabs mobile">
            <FaTimes className="cancel"/>
            {tabs.map((tab, index) => (
              <a key={index} className="tabb">
                {tab}
              </a>
            ))}
          </div>
</div>
      {/* <div className=""></div> */}
    </div>
  );
};

export default NavBar;
