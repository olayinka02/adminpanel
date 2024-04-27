import React from "react";
import Image from "next/image";

import LineDemo from "./linedemo";
import Transactiondetails from "./transactiondetails";
import Carddetails from "./carddetails";
import Revenue from "./revenue";
import Topsection from "./topsection";

function Dashboardmain() {
  return (
    <div>
      <h1 className="text-sm mb-4">Dashboard</h1>

      <div className="flex flex-col gap-4">
        <Topsection />
        <Carddetails />

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
          <div className="sm:w-full md:w-full p-4 lg:w-2/3 bg-[#222222] rounded-xl">
            <LineDemo />
          </div>

          <Transactiondetails />
        </div>

        <Revenue />

      </div>
    </div>
  );
}

export default Dashboardmain;
