import React from 'react'
import { CLIENT_ID } from '../hooks/useEnv'

function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`
  

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-green-500 via-black to-green-900">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-8 bg-opacity-80 bg-black backdrop-blur-md rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Spotify
        </h1>
        <p className="text-gray-300 mb-8">
          Your music, your vibe. Log in to access your personalized music
          library.
        </p>
        <a
          href={AUTH_URL}
          className="inline-block bg-green-500 text-white py-3 px-12 rounded-full text-lg font-semibold shadow-lg hover:bg-green-400 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          Log in to Spotify
        </a>
      </div>
    </div>
  )
}

export default Login
