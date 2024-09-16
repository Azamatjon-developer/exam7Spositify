import React from 'react'
import Heart from '../../assets/Images/LikedHeart.png'
import User from '../../assets/Images/LikesUser.svg'
import PlaylistLike from '../../components/playlistLike'
import { useSelector } from 'react-redux'
import { ClockIcon } from '../../assets/Images/Icons'
import { FaHeart } from 'react-icons/fa'

function Likes() {
  const wishlist = useSelector((s) => s.heart.value)
  console.log(wishlist)
  return (
    <div
      id="likes"
      className="col-span-8 h-screen overflow-y-auto bg-gradient-to-b from-[#181818] to-[#121212] text-white p-[30px]"
    >
      {/* Header Section */}
      <div className="flex items-center gap-10 mb-[32px]">
        <img
          src={Heart}
          alt="HeartImage"
          className="w-[297px] h-[297px] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div>
          <p className="text-xs tracking-wide text-gray-300 mb-2 uppercase">
            Public <br /> Playlist
          </p>
          <h2 className="text-6xl font-extrabold text-white mb-2 hover:text-[#1DB954] transition-colors duration-300">
            Liked Songs
          </h2>
          <div className="flex items-center gap-4 mt-[12px]">
            <img
              src={User}
              alt="userImage"
              className="w-[30px] h-[30px] rounded-full border-2 border-[#1DB954]"
            />
            <p className="text-lg text-white font-semibold">
              davedirect3 <span className="text-gray-400">34 songs</span>
            </p>
          </div>
        </div>
      </div>

      <PlaylistLike />

      {/* Table Headers */}
      <div className="mt-8 grid grid-cols-12 gap-4 text-[#B3B3B3] text-sm border-b border-gray-900 pb-2 uppercase font-semibold">
        <div className="col-span-1">#</div>
        <div className="col-span-5">Title</div>
        <div className="col-span-3">Album</div>
        <div className="col-span-2">Date Added</div>
        <div className="col-span-1 flex justify-end text-right">
          <ClockIcon className="w-5 h-5 mx-auto" />
        </div>
      </div>

      {/* Song List */}
      <div className="">
        {wishlist?.length > 0 ? (
          wishlist.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 items-center py-4 hover:bg-[#1e4552] transition-all duration-300 ease-in-out rounded-xl px-2"
            >
              {/* Song Number */}
              <div className="col-span-1 text-gray-400">{index + 1}</div>

              {/* Song Info */}
              <div className="col-span-5 flex items-center gap-4">
                <img
                  src={item.album.images[1]?.url || item.album.images[0]?.url}
                  alt={item.name}
                  className="w-[55px] h-[55px] rounded-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <div>
                  <p className="text-white font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.artists[0]?.name}
                  </p>
                </div>
              </div>

              {/* Album Info */}
              <div className="col-span-3 text-gray-400">{item.album.name}</div>

              {/* Date Added */}
              <div className="col-span-2  text-white">{item.album.release_date}</div>

              {/* Like Icon */}
              <div className="col-span-1 text-right flex items-center justify-end gap-2 text-center">
                <FaHeart className="text-[#63CF6C] hover:text-red-500 transition-colors duration-300 cursor-pointer scale-125" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-12 text-gray-400">
            No liked songs yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default Likes
