import React from "react";
import Image from "next/image";
import cardamount from "../assets/cardamount.svg";

function Revenue() {
  return (
    <div className="w-full bg-[#222222] pt-3 pr-5 pl-5 pb-5 rounded-lg">
      <h2 className="text-sm">Total Revenue</h2>

      <div className="flex flex-col md:flex-col lg:flex-row">
        <div className="md:w-full lg:w-1/3 bg-transparent md:pr-0 lg:pr-6 ">
          <div className="flex flex-row  justify-between  mt-4  mb-5 sm:mb-5 md:mb-5 lg:mb-0">
            <div className="flex flex-row gap-3 items-center justify-start">
              <Image src={cardamount} alt="icon" width={38} height={38} />
              <div>
                <span className="text-xs font-normal">total fees</span>
                <h1 className="text-l font-bold">$ 63000</h1>
              </div>
            </div>

            <button className="bg-[#F1D017] h-7 rounded-md text-xs px-3 text-[#000000]">
              Withdraw
            </button>
          </div>
        </div>

        <div className="md:w-full lg:w-2/3 bg-[#2F2F2F] px-5 md:px-5 lg:px-0  pt-5 pb-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4 rounded-md">
          <div className="pb-2 border-b md:border-b md:border-r-0 lg:border-b-0 lg:border-r border-[#555555] lg:flex lg:justify-center lg:items-center md:flex md:justify-start ">
            <div>
              <span className="text-xs font-normal">total fees</span>
              <h1 className="text-l font-bold">$ 63000</h1>
            </div>
          </div>
          <div className="pb-2 border-b md:border-b md:border-r-0 lg:border-b-0 lg:border-r border-[#555555] lg:flex lg:justify-center lg:items-center md:flex md:justify-start">
            <div>
              <span className="text-xs font-normal">total fees</span>
              <h1 className="text-l font-bold">$ 63000</h1>
            </div>
          </div>
          <div className="pb-2 border-b md:border-b md:border-r-0 lg:border-b-0 lg:border-r border-[#555555] lg:flex lg:justify-center lg:items-center md:flex md:justify-start">
            <div>
              <span className="text-xs font-normal">total fees</span>
              <h1 className="text-l font-bold">$ 63000</h1>
            </div>
          </div>
          <div className="pb-2 border-none lg:flex lg:justify-center lg:items-center md:flex md:justify-start">
            <div>
              <span className="text-xs font-normal">total fees</span>
              <h1 className="text-l font-bold">$ 63000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
