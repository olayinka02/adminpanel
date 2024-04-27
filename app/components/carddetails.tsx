import React from 'react'
import Image from "next/image";
import totalrequest from "../assets/totalrequest.svg";
import cardamount from "../assets/cardamount.svg";
import cardissued from "../assets/cardissued.svg";
import freecard from "../assets/freecard.svg";


function Carddetails() {

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
  )
}

export default Carddetails
