import React from 'react'

import SpotifyWebPlayer from 'react-spotify-web-playback'
function Playback({ play, playing, setPlaying, accessToken }) {
  console.log(play)
  console.log(playing)
  return (
    <div>
      <SpotifyWebPlayer
        play={playing}
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
