import React from 'react'
import PlayIcon from '../assets/Images/PlaylistPlayIcon.svg'
import LikeIcon from '../assets/Images/PlaylistLikeIcon.svg'
import DownLoadIcon from '../assets/Images/PlaylistDownloadIcon.svg'
import MoreIcon from '../assets/Images/PlaylistMoreIcon.svg'
import SearchIcon from '../assets/Images/PlaylistSearchIcon.svg'
import BottomIcon from '../assets/Images/PlaylistButtomIcon.svg'

function PlaylistLike() {
  return (
    <div>
      <div className="mt-[60px] flex items-center justify-between">
        <div className="flex items-center gap-[36px]">
          <img
            src={PlayIcon}
            alt="PlayIcon image"
            width={'72px'}
            height={'72px'}
          />
          <div className="flex items-center gap-[22px]">
            <img
              src={LikeIcon}
              alt="PlayIcon image"
              width={'52px'}
              height={'52px'}
            />
            <img
              src={DownLoadIcon}
              alt="PlayIcon image"
              width={'52px'}
              height={'52px'}
            />
            <img
              src={MoreIcon}
              alt="PlayIcon image"
              width={'44px'}
              height={'44px'}
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img
            src={SearchIcon}
            alt="Search image"
            width={'23px'}
            height={'23px'}
          />
          <div className="flex gap-[12px]">
            <p className="text-white">Custom Order</p>
            <img
              src={BottomIcon}
              alt="Search image"
              width={'14px'}
              height={'7px'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistLike
