  import React from 'react'
  import { NavLink } from 'react-router-dom'
  import asideHome from "../assets/Images/AsideHome.svg"
  import asideSearch from "../assets/Images/AsideSearch.svg"
  import asideLibrary from "../assets/Images/AsideLibriry.svg"
  import asidePlaylist from "../assets/Images/AsidePlaylist.svg"
  import asideLiked from "../assets/Images/AsideLaked.svg"


  function Aside() {
    return (
      <div className="col-span-2 h-screen overflow-y-auto bg-black">
        <ul className="mt-[70px] px-[22px]">
            <NavLink to={"/"}>
              <div className='flex items-center gap-4 text-white  font-bold mb-[20px] '>
                <img src={asideHome} alt="asideHomeImg" />
                <p className='text-18px leading-6'>Home</p>
              </div>
            </NavLink>
            <NavLink to={"/search"}>
              <div className='flex items-center gap-4 text-white  font-bold mb-[20px] '>
                <img src={asideSearch} alt="asideHomeImg" />
                <p className='text-18px leading-6'>Search</p>
              </div>
            </NavLink>
            <NavLink>
              <div className='flex items-center gap-4 text-white  font-bold mb-[50px] '>
                <img src={asideLibrary} alt="asideHomeImg" />
                <p className='text-18px leading-6'>Your Library</p>
              </div>
            </NavLink>
            <NavLink>
              <div className='flex items-center gap-4 text-white  font-bold mb-[20px] '>
                <img src={asidePlaylist} alt="asideHomeImg" />
                <p className='text-18px leading-6'>Create Playlist</p>
              </div>
            </NavLink>
            <NavLink to={"/likes"}>
              <div className='flex items-center gap-4 text-white  font-bold mb-[20px] '>
                <img src={asideLiked} alt="asideHomeImg" />
                <p className='text-18px leading-6'>Liked Songs</p>
              </div>
            </NavLink>
        </ul>
        <div className='text-[#B3B3B3] pt-[42px]  pl-[22px] h-screen overflow-y-auto  flex flex-col space-y-3'>
          <p>Chill Mix</p>
          <p> Insta Hits</p>
          <p>Your Top Songs 2021</p>
          <p>Mellow Songs</p>
          <p>Anime Lofi & Chillhop Music</p>
          <p>BG Afro “Select” Vibes</p>
          <p>Afro “Select” Vibes</p>
          <p>Happy Hits!</p>
          <p>Deep Focus</p>
          <p>Instrumental Study</p>
          <p>OST Compilations</p>
          <p>Nostalgia for old souled mill...</p>
          <p>Mixed Feelings...</p>
        </div>
      </div>
    )
  }

  export default Aside
