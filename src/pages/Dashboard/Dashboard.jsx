import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import TopMusic from '../../components/TopMusic'
import Playback from '../../components/Playback'
import { useAuth } from '../../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'

function Dashboard({ code }) {
  const [title, setTitle] = useState('')
  const [play, setPlay] = useState([])
  const [playing, setPlaying = { setPlaying }] = useState(false)
  const accessToken = useAuth(code)
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,

  })

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  
  return (
    <div className="col-span-8 overflow-y-auto h-screen ">
      <div>
        <Input
          className="w-[400px] mx-auto p-2 text-[18px]"
          type="text"
          placeholder="Searching"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={'Your top mixes'} searchText={'Ummon'} />
      <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={'Made for you'} searchText={'Xamdam Sobirov'} />
      <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={'Recently played'} searchText={'Doston Ergashev'} />
      <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={'Jump back in'} searchText={'Doston Ergashev'} />
      <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={'Uniquely yours'} searchText={'Ummon'} />

      <Playback
        className={'!bg-black'}
        accessToken={accessToken}
        playing={playing}
        setPlaying={setPlaying}
        play={play}
      />
    </div>
  )
}

export default Dashboard
