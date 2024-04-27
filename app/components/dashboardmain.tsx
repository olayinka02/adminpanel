import React from "react";
import totalrequest from "../assets/totalrequest.svg";
import cardamount from "../assets/cardamount.svg";
import cardissued from "../assets/cardissued.svg";
import freecard from "../assets/freecard.svg";
import transactionno from "../assets/transactionno.svg";

import Image from "next/image";

function Dashboardmain() {
  const CardData = [
    {
      id: "1",
      icon: totalrequest,
      name: "Total No. of Request",
      value: "1608",
    },
    {
      id: "2",
      icon: cardissued,
      name: "Total No. of card issued",
      value: "362",
    },
    {
      id: "3",
      icon: freecard,
      name: "Total free Card left",
      value: "340",
    },
    {
      id: "4",
      icon: cardamount,
      name: "Total Amount on Card",
      value: "$905",
    },
  ];

  return (
    <div>
      <h1 className="text-sm mb-4">Dashboard</h1>


      <div className="flex flex-col gap-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {CardData.map((item, index) => (
          <div className="w-full bg-[#222222] py-5 rounded-lg px-5">
            <div className="flex flex-row gap-2 items-center justify-start">
              <Image src={item.icon} alt="icon" width={38} height={38} />
              <div>
                <span className="text-xs font-normal">{item.name}</span>
                <h1 className="text-l font-bold">{item.value}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
        <div className="sm:w-full md:w-full lg:w-2/3 bg-[#222222]">
          Content for column 1
        </div>
        <div className="sm:w-full md:w-full lg:w-1/3 bg-[#222222] rounded-xl p-5">

        <div className="flex flex-row gap-2 items-center justify-start pb-4 border-b border-[#545252] ">
              <Image src={transactionno} alt="icon" width={38} height={38} />
              <div>
                <span className="text-xs font-normal">total transaction</span>
                <h1 className="text-l font-bold">$536.00</h1>
              </div>
        </div>

        <div className="flex flex-row gap-2 items-center justify-between pt-2 pb-4  ">
              
              <div className="flex flex-row gap-2">
              <svg className="mt-3" width="13" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.89845 9.95401C7.42307 10.6127 6.44227 10.6127 5.96689 9.95401L0.559297 2.46103C-0.00917816 1.67333 0.553672 0.573012 1.52508 0.573012H12.3403C13.3117 0.573012 13.8745 1.67333 13.306 2.46103L7.89845 9.95401Z" fill="#F1D017"/>
              </svg>
              <div>
                <span className="text-xs font-normal text-[#ACACAC]">total transaction</span>
                <h1 className="text-l font-bold">$536.00</h1>
              </div>
              </div>


              <div className="flex flex-row gap-2">
              <svg className="mt-3" width="13" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83226 1.33823C6.30764 0.679522 7.28845 0.679523 7.76383 1.33823L13.1714 8.83121C13.7399 9.61891 13.177 10.7192 12.2056 10.7192H1.39045C0.419045 10.7192 -0.143805 9.61891 0.42467 8.8312L5.83226 1.33823Z" fill="#605F5F"/>
              </svg>
              <div>
                <span className="text-xs font-normal text-[#ACACAC]">total transaction</span>
                <h1 className="text-l font-bold">$536.00</h1>
              </div>
              </div>

        </div>

        </div>
      </div>

      </div>



    </div>
  );
}

export default Dashboardmain;
