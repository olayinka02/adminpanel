import React from 'react'

function Filter() {
  return (
    <div className="flex gap-2">
       <input
       
          type="text"
          className="border border-transparent rounded-xl w-20 py-2 px-4 focus:outline-none focus:border-grey-500 bg-[#282929] text-[#989898] text-xs"
          placeholder="Today"
         
        />
         <input
          type="text"
          className="border border-transparent rounded-xl w-20 py-2 px-4 focus:outline-none focus:border-grey-500 bg-[#282929] text-[#989898] text-xs"
          placeholder="Category"
         
        />
    </div>
  )
}

export default Filter
