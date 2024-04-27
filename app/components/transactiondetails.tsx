import React from 'react'
import Image from "next/image";
import transactionno from "../assets/transactionno.svg";
import uk from "../assets/uk.svg";
import sweden from "../assets/sweden.svg";



function Transactiondetails() {
  return (
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
        <svg
          className="mt-3"
          width="13"
          height="9"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.89845 9.95401C7.42307 10.6127 6.44227 10.6127 5.96689 9.95401L0.559297 2.46103C-0.00917816 1.67333 0.553672 0.573012 1.52508 0.573012H12.3403C13.3117 0.573012 13.8745 1.67333 13.306 2.46103L7.89845 9.95401Z"
            fill="#F1D017"
          />
        </svg>
        <div>
          <span className="text-xs font-normal text-[#ACACAC]">
            total transaction
          </span>
          <h1 className="text-l font-bold">$536.00</h1>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <svg
          className="mt-3"
          width="13"
          height="9"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83226 1.33823C6.30764 0.679522 7.28845 0.679523 7.76383 1.33823L13.1714 8.83121C13.7399 9.61891 13.177 10.7192 12.2056 10.7192H1.39045C0.419045 10.7192 -0.143805 9.61891 0.42467 8.8312L5.83226 1.33823Z"
            fill="#605F5F"
          />
        </svg>
        <div>
          <span className="text-xs font-normal text-[#ACACAC]">
            total transaction
          </span>
          <h1 className="text-l font-bold">$536.00</h1>
        </div>
      </div>
    </div>
    <div className="flex flex-row gap-2 justify-start pt-2">
      <Image src={uk} alt="country flag" width={22} height={20} />
      <div>
        <span className="text-xs">
          <b className="text-'white'">United Kingdom </b>{" "}
          <span className="text-[#CACACA]">
            has the highest number of total credit
          </span>
        </span>
      </div>
    </div>

    <div className="flex flex-row gap-2 justify-start pt-3 pb-2">
      <Image src={sweden} alt="country flag" width={22} height={20} />
      <div>
        <span className="text-xs">
          <b className="text-'white'">Sweden </b>{" "}
          <span className="text-[#CACACA]">
            has the highest number of total debit
          </span>
        </span>
      </div>
    </div>
  </div>
  
  )
}

export default Transactiondetails
