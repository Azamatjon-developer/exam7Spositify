import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'
import PlaylistLike from '../../components/playlistLike'
import ActiveIcon from '../../assets/Images/PlaylistActive.svg'

function Playlist() {
  const location = useLocation()
  const spotifyApi = new SpotifyWebApi()
  const track = location.state?.track
  const [artistMusics, setArtistMusic] = useState([])

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
                Made for <b className="text-white">davedirect3</b>{' '}
                <span className="ml-2">34 songs, 2hr 01 min</span>
              </p>
            </div>
          </div>

          <PlaylistLike />

          <div className="mt-8">
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 text-[#B3B3B3] text-sm">
              <div className="w-[5%]">#</div>
              <div className="w-[45%]">TITLE</div>
              <div className="w-[30%]">ALBUM</div>
              <div className="w-[15%]">DATE ADDED</div>
              <div className="w-[5%] text-right">
                <img
                  src={ActiveIcon}
                  alt="ActiveIcon"
                  width={'28px'}
                  height={'28px'}
                />
              </div>
            </div>

            {artistMusics.length > 0 ? (
              artistMusics.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 hover:bg-[#1f1f1f] transition-colors duration-200"
                >
                  <div className="w-[5%] text-gray-400">{index + 1}</div>
                  <div className="w-[45%] text-white flex items-center gap-4">
                    <img
                      src={item.album.images[0].url}
                      alt={item.name}
                      className="w-[50px] h-[50px] rounded-md"
                    />
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-gray-400 text-sm">
                        {item.artists[0].name}
                      </p>
                    </div>
                  </div>
                  <div className="w-[30%] text-gray-400">{item.album.name}</div>
                  <div className="w-[15%] text-gray-400">3:25</div>
                  <div className="w-[5%] text-right">
                    <img
                      src={ActiveIcon}
                      alt="Like"
                      width={'20px'}
                      height={'20px'}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 mt-6">
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
