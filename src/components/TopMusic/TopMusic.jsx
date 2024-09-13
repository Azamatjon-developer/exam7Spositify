import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { useAuth } from '../../hooks/useAuth'
import { CLIENT_ID } from '../../hooks/useEnv'

function TopMusic({code}) {
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
    spotifyApi.searchTracks('Doston Ergashev').then((res) => {
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

  console.log(tracks)

  return ( 
    <div>
      {tracks.map((item , index) => (
        <div key={index}>
          <img src={item.img} alt="image " />
          <div>
            <h2>
              {tracks.trackName }
            </h2>
            <strong>
              {tracks.artistName}
            </strong>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopMusic