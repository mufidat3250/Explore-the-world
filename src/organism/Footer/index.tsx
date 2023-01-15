import React from "react";
import FooterLogo from "../../attom/Vectors/FooterLogo";
import './Footer.scss'

const link = ['EVENTS', 'OFFERS', 'ADA ACCESS', 'CONTACT', 'GALLERY', 'INSTAGRAM', 'FACEBOOK', 'PRIVACY POLICY', '']
const Footer = () => {
  return (
    <div className="footerWraper ">
     <div className="footer-content">
     <div className="flex gap-[1rem]">
      <div className="">
      <FooterLogo />
      </div>
        <div className="max-w-[10rem] text-[#dac0a9]">
          <i><p className="max-w-[12rem] lg:max-w-[12rem] text-[14px] md:text-[13px] font-bold ">21 Oceanview Terrace <br /> Montauk, NY 11954 <br /> 631 — 668 — 2050</p></i>
          <i className="text-[10px] font-bold">hello @ marrammontauk . com</i>
        </div>
      </div>
      <div className="max-w-[17rem]  text-[10px] grid grid-cols-2 md:text-[14px] text-right space-x-[1rem]  text-[#dac0a9] font-bold -order-1 md:order-1">
            {link.map((link, index)=> <a className="no-wrap">{link}</a>)}
      </div>
     </div>
    </div>
  );
};

export default Footer;
