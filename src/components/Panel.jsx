import React from 'react'
import { IoIosPersonAdd } from 'react-icons/io'
import { FiX } from 'react-icons/fi'
import userPanel from '../assets/Images/userPanel.svg'
function Panel() {
  return (
    <>
      <div className="col-span-2 bg-black px-[15px]">
        <div className=" flex justify-between pt-[29px]">
          <h2 className="text-[#CCCCCC] text-[18px]">Friend Activity</h2>
          <div className="flex">
            <IoIosPersonAdd className="text-white text-[24px]" />
            <FiX className="text-white text-[24px]" />
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          <p className="text-[#CCCCCC] pt-[39px] text-[16px]">
            Let friends and followers on Spotify see what you’re listening to.
          </p>
          <img src={userPanel} alt="user" width={'179px'} height={'62px'} />
          <img src={userPanel} alt="user" width={'179px'} height={'62px'} />
          <img src={userPanel} alt="user" width={'179px'} height={'62px'} />
          <p className="text-[#CCCCCC] pt-[21px] text-[16px]">Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
          <button type='button' className='py-[18px] px-[60px] bg-white rounded-[40px] mt-[23px] font-bold text-[#171717] text-center tracking-tight md:tracking-wide'>SETTINGS</button>
        </div>
      </div>
    </>
  )
}

export default Panel
