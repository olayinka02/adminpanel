import React from 'react'
import Link from "next/link";


function Login() {
  return (
    
        <section className="relative mt-4 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-center">

<span className="w-full  font-bold font-inter">
  <h1>Login to Admin</h1>
</span>

<div className="relative mt-4 w-full">
  <input
    type="text"
    className="border border-transparent rounded-md py-2 px-4 w-full focus:outline-none focus:border-grey-500 bg-[#282929] text-[#989898] text-xs"
    placeholder="Enter your email"
    style={{ paddingTop: "2rem" }} 
  />
  <label
    htmlFor="input"
    className="absolute top-0 left-0 px-4 pt-2 pointer-events-none text-[#FFFFF] text-xs"
  >
    Email Address
  </label>
</div>
<div className="relative mt-4 w-full">
  <input
    type="text"
    className="border border-transparent rounded-md py-2 px-4 w-full focus:outline-none focus:border-grey-500 bg-[#282929] text-[#989898] text-xs"
    placeholder="******"
    style={{ paddingTop: "2rem" }} 
  />
  <label
    htmlFor="input"
    className="absolute top-0 left-0 px-4 pt-2 pointer-events-none text-[#FFFFF] text-xs"
  >
    Password
  </label>
</div>

<div className="relative mt-4 w-full font-light font-inter text-xs flex flex-col justify-start items-start">
  forget Password ?
</div>

<Link href="/dashboard" className="inline-block bg-[#F1D017] hover:bg-[#E5C408] w-full text-center text-black py-2 px-4 rounded-[52px] mt-9 font-medium font-inter text-sm">

<span className="inline-block align-middle">Login</span>

</Link>


</section>
   
  )
}

export default Login
