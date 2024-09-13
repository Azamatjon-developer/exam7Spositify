import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiHome } from 'react-icons/ci'
function Aside() {
  return (
    <div className=" col-span-2 h-[100vh] bg-black text-white">
      <ul>
        <NavLink>
          <div className='flex items-center  gap-[10px]'>
            <CiHome className='scale-125 text-[18px]' /> Home 
          </div>
          <div className='flex items-center  gap-[10px]'>
            <CiHome className='scale-125 text-[18px]' /> Search 
          </div>
          <div className='flex items-center  gap-[10px]'>
            <CiHome className='scale-125 text-[18px]' /> Your Library 
          </div>
        </NavLink>
      </ul>
    </div>
  )
}

export default Aside
