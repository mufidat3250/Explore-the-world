import React from "react";
import Button from "../../attom/Button";
import Input from "../../attom/Input";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className=" max-w-[89%] mx-auto lg:max-w-[50%] lg:ml-[4rem] pt-[4.5rem] pb-[4rem] lg:pt-[5.625rem] lg:pb-[5.25rem]">
      <div className="text-[#d7726a]">
        <p className="text-[1.375rem]">
          <strong className="text-[1.375rem]">STAY IN TOUCH </strong>{" "}
          <span className="text-[#665052]">
            There’s always something going on here. Stay in the loop for events,
            experiences and more.
          </span>
        </p>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 gap-[1rem] mt-[3.625rem] mb-[1rem]">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email Address" />
        </div>
        <div className="max-w-[7.8125rem] mt-[1rem  ]">
          <Button title={"Submit"} />
        </div>
        <i className="text-[12px] text-[#b9918e]">Privacy Policy</i>
      </div>
    </div>
  );
};

export default Contact;
