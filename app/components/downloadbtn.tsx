import React from 'react'

function Downloadbtn() {
  return (
    <button className="bg-[#F1D017] h-7 rounded-md text-xs px-3 flex gap-2 justify-center item-center py-1 text-[#000000]">
    
    <span className="hidden md:hidden lg:inline">Download</span>
    
    <svg className="md:inline-block lg:hidden" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M5 8L10 13M10 13L15 8M10 13V1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
  
  )
}

export default Downloadbtn
