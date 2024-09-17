import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Likes from '../pages/Dashboard/Likes'
import Playlist from '../pages/Dashboard/Playlist'
import Aside from '../components/Aside'
import Panel from '../components/Panel'
import Search from '../components/Search'
import { CLIENT_ID } from '../hooks/useEnv'
import SpotifyWebApi from 'spotify-web-api-node'
import { useAuth } from '../hooks/useAuth'
import Playback from '../components/Playback'
function CustomRoutes({ code }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })
  const accessToken = useAuth(code)
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])
  return (
    <div className="grid grid-cols-12">
      <Aside />
      <main className="col-span-8">
        <Routes>
          <Route path="/" element={<Dashboard accessToken={accessToken} />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route
            path="/search"
            element={<Search accessToken={accessToken} />}
          />
        </Routes>
        <Playback accessToken={accessToken} />
      </main>
      <Panel />
    </div>
  )
}
export default CustomRoutes
