import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'
import PlaylistLike from '../../components/playlistLike'
import { ClockIcon } from '../../assets/Images/Icons'
import { CiHeart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEvent } from '../../Redux/Wishlist'
import { FaHeart } from 'react-icons/fa'
import Playback from '../../components/Playback'

function Playlist() {
  const location = useLocation()
  const spotifyApi = new SpotifyWebApi()
  const track = location.state?.track
  const [artistMusics, setArtistMusic] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wishlist = useSelector((s) => s.heart.value)
  useEffect(() => {
    if (!track) return
    spotifyApi
      .searchTracks(track.artistName)
      .then((res) => setArtistMusic(res.body.tracks.items))
  }, [track])

  return (
    <section
      id="playlist"
      className="col-span-8 h-screen overflow-y-auto p-[30px] bg-[#121212] text-white"
    >
      {track ? (
        <div className="pb-[62px]">
          <div className="flex items-center gap-10 mb-10">
            <img
              src={track.img}
              alt={track.trackName}
              className="w-[297px] h-[297px] rounded-lg shadow-lg"
            />
            <div>
              <p className="text-sm tracking-tight text-gray-400 mb-2">
                PUBLIC PLAYLIST
              </p>
              <h2 className="text-5xl font-bold text-white mb-2">
                {track.trackName}
              </h2>
              <p className="text-xl text-white mb-2">{track.artistName}</p>
              <p className="text-lg text-gray-400">
                Julia Wolf, ayokay, Khalid, and more
              </p>
              <p className="text-sm text-gray-500 pt-[12px]">
                Made for <b className="text-white">davedirect3</b>
                <span className="ml-2">34 songs, 2hr 01 min</span>
              </p>
            </div>
          </div>

          <PlaylistLike />

          <div className="mt-8 grid grid-cols-12 gap-4 text-[#B3B3B3]">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TITLE</div>
            <div className="col-span-3">ALBUM</div>
            <div className="col-span-2">DATE ADDED</div>
            <div className="col-span-1 text-right">
              <ClockIcon className="w-5 h-5 mx-auto" />
            </div>

            {artistMusics.length > 0 ? (
              artistMusics.map((item, index) => (
                <div
                  key={item.id}
                  className="contents hover:bg-[#282828] duration-300 transition-transform rounded-xl py-3 hover:shadow-lg"
                >
                  <div className="col-span-1 text-gray-400">{index + 1}</div>

                  <div className="col-span-5 text-white flex items-center gap-4">
                    <img
                      src={item.album.images[0]?.url}
                      alt={item.name}
                      className="w-[50px] h-[50px] rounded-md transition-transform duration-300 hover:scale-105"
                    />
                    <div>
                      <p className="font-medium hover:text-[#1DB954] transition-colors duration-300">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
                        {item.artists[0]?.name}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-3 text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
                    {item.album.name}
                  </div>

                  <div className="col-span-2 text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
                    3:25
                  </div>

                  <div
                    className="col-span-1 text-right cursor-pointer"
                    onClick={() => dispatch(toggleEvent(item))}
                  >
                    {wishlist?.some((s) => s.id === item.id) ? (
                      <FaHeart className="scale-150 text-[#63CF6C] hover:text-[#1DB954] transition-colors duration-300" />
                    ) : (
                      <CiHeart className="scale-150 text-gray-400 hover:text-[#1DB954] transition-colors duration-300" />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-12 text-center text-gray-400 mt-6">
                No tracks available.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-400 mt-6">
          No track data available
        </p>
      )}
    </section>
  )
}

export default Playlist
