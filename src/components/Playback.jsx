import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback'
function Playback({accessToken , play,setPlaying}) {
  return (
    <div>
      <SpotifyWebPlayer 
      token={accessToken}
      uris={play ? [play] : []} 
      callback={(e) => {
        if (e.isPlaying) {
          setPlaying(false)
        }
      }}  
      />
    </div>
  )
}

export default Playback
