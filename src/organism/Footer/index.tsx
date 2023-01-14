import React from "react";
import FooterLogo from "../../attom/Vectors/FooterLogo";
import './Footer.scss'

const link = ['EVENTS', 'OFFERS', 'ADA ACCESS', 'CONTACT', 'GALLERY', 'INSTAGRAM', 'FACEBOOK', 'PRIVACY POLICY', '']
const Footer = () => {
  return (
    <div className="footerWraper ">
     <div className="footer-content">
     <div className="flex  gap-[1rem]">
      <div className="">
      <FooterLogo />
      </div>
        <div>
          <i><p className="max-w-[12rem] text-[13px] font-[400] ">21 Oceanview Terrace Montauk, NY 11954 631 — 668 — 2050</p></i>
          <i>hello @ marrammontauk . com</i>
        </div>
      </div>
      <div className="max-w-[17rem] grid grid-cols-2 text-[14px] text-right space-x-[1rem]  text-white font-bold">
            {link.map((link, index)=> <a className="no-wrap">{link}</a>)}
      </div>
     </div>
    </div>
  );
};

export default Footer;
