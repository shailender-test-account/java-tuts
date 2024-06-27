import React from "react";
import Testimonial from "../assets/testimonial1.jpeg";
import { IoTriangleSharp } from "react-icons/io5";

function TCard() {
  return (
    <div className="p-6 bg-[#1b2430] text-[#ffffff] group-hover:blur-sm hover:!blur-none col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 cursor-pointer rounded-md relative hover:scale-105 transition-all duration-500 overflow-hidden">
      <div className="bg-[#17cf97] absolute top-0 left-0 w-full">
        <p className="m-0 p-2 relative">June 27, 2024 <IoTriangleSharp className="absolute bottom-[-13px] text-[#17cf97] right-10 rotate-180"/></p>
      </div>
      <p className="mt-5 text-justify">
        An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota
        aliquip democritum pro in, nec democritum intellegam ne.
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <img
          src={Testimonial}
          alt=""
          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
        />
        <div>
          <p className="text-lg font-semibold text-[#17cf97]">Leroy Jenkins</p>
          <p className="text-sm dark:text-gray-600 text-slate-300">
            CTO of Company Co.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TCard;
