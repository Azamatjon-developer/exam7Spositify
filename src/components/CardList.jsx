import React from 'react'
import Chill from '../assets/Images/card1.png'
import Pop from '../assets/Images/card4.png'
import Daily from '../assets/Images/card2.png'
import Folk from '../assets/Images/card3.png'
import Daily5 from '../assets/Images/card5.png'
import Daily4 from '../assets/Images/card6.png'

function CardList({ artistName, artistImage }) {
  return (
    <div className="pt-[50px] pl-[41px] ">
      <div className="flex items-center mb-[16px] gap-[31px]">
        <div className="text-white w-[44%]  rounded-[8px]  border-[2px] border-[#18188fc6]  h-[82px] flex items-center gap-[21px]">
          <img
            width={'82px'}
            height={'82px'}
            src={Chill}
            alt="Chill images"
          />
          <h2> Chill Mix </h2>
        </div>
        <div className="text-white w-[44%]  border-[#18188fc6] rounded-[8px] flex  border-[2px] border-slate-500 items-center gap-[21px]">
          <img width={'82px'} height={'82px'} src={Pop} alt="Chill images" />
          <h2> Pop Mix </h2>
        </div>
      </div>

      <div className="flex items-center mb-[16px] gap-[31px]">
        <div className="text-white w-[44%]  rounded-[8px]  border-[2px] border-[#18188fc6]  h-[82px] flex items-center gap-[21px]">
          <img
            width={'82px'}
            height={'82px'}
            src={Daily}
            alt="Chill images"
          />
          <h2> Daily Mix 1</h2>
        </div>
        <div className="text-white w-[44%]  border-[#18188fc6] rounded-[8px] flex  border-[2px] border-slate-500 items-center gap-[21px]">
          <img width={'82px'} height={'82px'} src={Daily5} alt="Chill images" />
          <h2> Daily Mix 5 </h2>
        </div>
      </div>

      <div className="flex items-center mb-[16px] gap-[31px]">
        <div className="text-white w-[44%]  rounded-[8px]  border-[2px] border-[#18188fc6]  h-[82px] flex items-center gap-[21px]">
          <img
            width={'82px'}
            height={'82px'}
            src={Folk}
            alt="Chill images"
          />
          <h2> Folk & Acoustic Mix </h2>
        </div>
        <div className="text-white w-[44%]  border-[#18188fc6] rounded-[8px] flex  border-[2px] border-slate-500 items-center gap-[21px]">
          <img width={'82px'} height={'82px'} src={Daily4} alt="Chill images" />
          <h2> Daily Mix 4 </h2>
        </div>
      </div>
    </div>
  )
}

export default CardList
