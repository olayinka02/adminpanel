import React from "react";
import Image from "next/image";
import italy from "../assets/italy.svg";
import india from "../assets/india.svg";
import uk from "../assets/uk.svg";
import sweden from "../assets/sweden.svg";
import egypt from "../assets/egypt.svg";
import Topsection from "./topsection";


function Countrywise() {
  const CardbyCountry = [
    {
      serial: "01",
      image: italy,
      country: "Italy",
      users: "3652",
    },
    {
        serial: "02",
        image: india,
        country: "India",
        users: "1252",
      },
      {
        serial: "03",
        image: uk,
        country: "United Kingdom",
        users: "2812",
      },
      {
        serial: "04",
        image: sweden,
        country: "Sweden",
        users: "2822",
      },
      {
        serial: "01",
        image: egypt,
        country: "Egypt",
        users: "3652",
      },
  ];
  return (
    <div>
      <h1 className="text-sm mb-4">Card by Country</h1>
      <Topsection /><br/>
      <div className="overflow-x-auto">
        {/* Tabs */}
        <div className="flex">
          <div className="w-full h-16 bg-[#222222] border-b border-[#413D3D] p-3">
            <input
              type="text"
              className="border border-transparent rounded-xl py-2 px-4 w-1/3 focus:outline-none focus:border-grey-500 bg-[#282929] text-[#989898] text-xs"
              placeholder="search"
              // Adjust the top padding to create space
            />
          </div>
        </div>

        <table className="table-auto border-collapse w-full">
          <tbody>
            {/* Map through the data and render rows */}
            {CardbyCountry.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                  {item.serial}
                </td>
                <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                  <Image
                    src={item.image}
                    alt="country flag"
                    width={22}
                    height={20}
                  />
                </td>
                <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                  {item.country}
                </td>
                <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                  {item.users}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Countrywise;
