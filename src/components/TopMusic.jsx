import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../hooks/useEnv'
import { useNavigate } from 'react-router-dom';
function TopMusic({ searchText, partTitle, setPlay, accessToken, setPlaying }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, searchText]);

  const [tracks, setTracks] = useState([])
  

  useEffect(() => {
    spotifyApi.searchTracks(searchText).then((res) => {
      setTracks(res.body.tracks.items.map((item) => {
          const data = {
            img: item.album.images[0].url,
            artistName: item.artists[0].name,
            trackName: item.name,
            uri: item.uri,
          }
          
          return data
        }),
      )
    })

  }, [accessToken, searchText])
  function handlePlayMusic(item) {
    setPlay(item.uri)
    setPlaying(true)
  }
  const [show, setShow] = useState(4)
  const navigate = useNavigate()
  return (
    <>
      <div className="flex items-center justify-between px-[42px] pt-[50px]">
        <h2 className="font-bold text-white text-[30px]">{partTitle}</h2>
        <button
          className="text-[#ADADAD] font-bold text-[16px]"
          onClick={() => setShow(show === 4 ? tracks.length : 4)} 
        >
          {show === 4 ? 'SEE ALL' : 'SHOW LESS'}
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto p-5">
        {tracks.slice(0, show).map((item, index) => (
          <div
            onClick={() => {
              handlePlayMusic(item)
              navigate('/playlist', { state: { track: item } });
            }}
            className="min-w-[224px] card-bg p-5 rounded-lg shadow-lg hover:scale-110 transition transform duration-300 cursor-pointer"
            key={index}
          >
            <img
              src={item.img}
              alt={item.trackName}
              className="mb-[25px] rounded-[8px]"
              width={'182px'}
              height={'182px'}
            />
            <div className="flex flex-col">
              <h2 className="text-[20px] tracking-tight font-bold text-white line-clamp-1 mb-[8px]">
                {item.trackName}
              </h2>
              <p className="text-sm font-medium text-gray-400">
                {item.artistName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TopMusic
