import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'

function Playlist() {
  const location = useLocation()
  const spotifyApi = new SpotifyWebApi()
  const track = location.state?.track
  const [artistMusics, setArtistMusic] = useState([])

  useEffect(() => {
    spotifyApi
      .searchTracks(track.artistName)
      .then((res) => setArtistMusic(res.body.tracks.items))
  }, [track])

  return (
    <>
      <section id='playlist' className="col-span-8 h-screen overflow-y-auto">
        {track ? (
          <div className="pt-[29px] pl-[41px] pb-[62px] pr-[32px]">
            <div className='flex items-center gap-10'>
              <img
                src={track.img}
                alt={track.trackName}
                width={'297px'}
                height={'297px'}
              />
              <div>
                <p className='font-medium text-[16px] tracking-tight text-white'>PUBLIC PLAYLIST</p>
                <h2 className='text-[64px] text-white font-bold'>{track.trackName}</h2>
                <p className='text-white font-medium text-[20px]'>{track.artistName}</p>
                <p className='text-slate-500 text-[18px] pt-[12px]'>Made for  <b className='text-white'>davedirect3</b> <span> 34 songs, 2hr 01 min</span> </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No track data available</p>
        )}
      </section>
    </>
  )
}

export default Playlist
