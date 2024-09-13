import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { useAuth } from '../hooks/useAuth'
import { CLIENT_ID } from '../hooks/useEnv'

function TopMusic({ code }) {
  const accessToken = useAuth(code)
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })
  
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    spotifyApi.searchTracks('Xamdam Sobirov').then((res) => {
      setTracks(
        res.body.tracks.items.map((item) => {
          const data = {
            img: item.album.images[0].url,
            artistName: item.artists[0].name,
            trackName: item.name,
            uri: item.artists[0],
          }
          return data
        }),
      )
    })
  }, [accessToken])

  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-4">
      {tracks.map((item, index) => (
        <div
          className="bg-gray-900 text-white rounded-lg shadow-lg hover:scale-110 transition transform duration-300 cursor-pointer"
          key={index}
        >
          <img src={item.img} alt={item.trackName} className="rounded-t-lg w-full h-56 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold truncate">{item.trackName}</h2>
            <p className="text-sm font-medium text-gray-400">{item.artistName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopMusic
