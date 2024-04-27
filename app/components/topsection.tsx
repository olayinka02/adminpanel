import React from 'react'
import Filter from './filter'
import Downloadbtn from './downloadbtn'

function Topsection() {
  return (
    <div className="flex md:flex-row lg:flex-row justify-between w-full">
        <Filter />
        <Downloadbtn />
      
    </div>
  )
}

export default Topsection
