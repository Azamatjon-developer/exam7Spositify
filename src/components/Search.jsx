import React, { useEffect, useState } from 'react'
import TopMusic from './TopMusic'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../hooks/useEnv'
import { useAuth } from '../hooks/useAuth'

function Search({ accessToken }) {
  const [searchText, setSearchText] = useState('')
  const [playing, setPlaying = { setPlaying }] = useState(false)

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken)
    }
  }, [accessToken])

  return (
    <div className="col-span-8 mx-auto py-10  w-full">
      <h2 className="text-white text-4xl font-bold  p-5">Search</h2>
      <form className="flex items-center space-x-4 p-5">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Enter your favorite music"
          className="w-full p-4 rounded-full text-black text-lg focus:outline-none focus:ring-4 focus:ring-green-400 placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-green-800 text-white py-2 px-6 rounded-full hover:from-green-600 hover:to-green-900 transition-all"
        >
          Search
        </button>
      </form>

      <TopMusic
        setPlaying={setPlaying}
        accessToken={accessToken}
        partTitle={'Search Music'}
        defaultValue={''}
        searchText={searchText}
      />
    </div>
  )
}

export default Search
