import React, { useEffect, useState } from 'react'
import TopMusic from '../../components/TopMusic'
import Playback from '../../components/Playback'
import { useAuth } from '../../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'
import CardList from '../../components/CardList'
function Dashboard({ code }) {
  const [play, setPlay] = useState([])
  const [playing, setPlaying = { setPlaying }] = useState(false)
  const accessToken = useAuth(code)
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })

  console.log(code);
  

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  return (
    <div className="col-span-8 overflow-y-auto h-screen ">
        <h1 className="font-bold pt-[50px] pl-[41px]  text-white text-[39px] mb-[29px] ">
          Good afternoon
        </h1>

    <div className=''>
      <CardList />
      <TopMusic

        setPlaying={setPlaying}
        accessToken={accessToken}
        setPlay={setPlay}
        partTitle={'Your top mixes'}
        defaultValue={'Billie Eilish'}
        searchText={""}
      />
      <TopMusic
        setPlaying={setPlaying}
        accessToken={accessToken}
        setPlay={setPlay}
        partTitle={'Made for you'}
        defaultValue={'Xamdam Sobirov'}
        searchText={""}
      />
      <TopMusic
        setPlaying={setPlaying}
        accessToken={accessToken}
        setPlay={setPlay}
        partTitle={'Recently played'}
        defaultValue={'Doston Ergashev'}
        searchText={""}
      />
      <TopMusic
        setPlaying={setPlaying}
        accessToken={accessToken}
        setPlay={setPlay}
        partTitle={'Jump back in'}
        defaultValue={'Shoxrux '}
        searchText={""}
      />
      <TopMusic
        setPlaying={setPlaying}
        accessToken={accessToken}
        setPlay={setPlay}
        partTitle={'Uniquely yours'}
        defaultValue={'Yulduz Usmonova'}
        searchText={""}
      />
      <Playback
        accessToken={accessToken}
        playing={playing}
        setPlaying={setPlaying}
        play={play}
      />
    </div>

    </div>
  )
}

export default Dashboard
