import React from 'react'
import { NavLink } from 'react-router-dom'
import asideHome from "../assets/Images/AsideHome.svg"
import asideSearch from "../assets/Images/AsideSearch.svg"
import asideLibrary from "../assets/Images/AsideLibriry.svg"

function Aside() {
  return (
    <div className="col-span-2 h-[100vh] bg-black">
      <ul className="mt-[70px] px-[22px]">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-[10px] text-white bg-gray-800 p-[10px] rounded-lg transition-all duration-200"
              : "flex items-center gap-[10px] text-gray-400 hover:text-white hover:bg-gray-800 p-[10px] rounded-lg transition-all duration-200"
          }
        >
          <img src={asideHome} alt="asideHomeImage" width="32px" height="32px" />
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-[10px] text-white bg-gray-800 p-[10px] rounded-lg transition-all duration-200"
              : "flex items-center gap-[10px] text-gray-400 hover:text-white hover:bg-gray-800 p-[10px] rounded-lg transition-all duration-200"
          }
        >
          <img src={asideSearch} alt="asideSearchImage" width="32px" height="32px" />
          Search
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-[10px] text-white bg-gray-800 p-[10px] rounded-lg transition-all duration-200"
              : "flex items-center gap-[10px] text-gray-400 hover:text-white hover:bg-gray-800 p-[10px] rounded-lg transition-all duration-200"
          }
        >
          <img src={asideLibrary} alt="asideLibraryImage" width="32px" height="32px" />
          Your Library
        </NavLink>
      </ul>
    </div>
  )
}

export default Aside
