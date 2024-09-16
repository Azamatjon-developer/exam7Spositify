import React from 'react'
import Heart from '../../assets/Images/LikedHeart.png'
import User from '../../assets/Images/LikesUser.svg'
import PlaylistLike from '../../components/playlistLike'
function Likes() {
  return (
    <div id="likes" className="col-span-8">
      <div className="pt-[28px] pl-[42px] pb-[31px] pr-[32px]">
        <div className="flex  items-center text-white mb-[32px]">
          <img src={Heart} alt="HeartImage" width={'297px'} height={'297px'} />
          <div className="">
            <p className="font-medium text-[16px]">
              PUBLIC <br /> PLAYLIST
            </p>
            <h2 className="font-bold text-[89px]">Liked Songs</h2>
            <div className="flex items-center gap-[5px] mt-[12px]">
              <img src={User} alt="userImage" width={'30px'} height={'30px'} />
              <p>
                davedirect3 <span>34 songs</span>{' '}
              </p>
            </div>
          </div>
        </div>
        <PlaylistLike />
      </div>
    </div>
  )
}

export default Likes
