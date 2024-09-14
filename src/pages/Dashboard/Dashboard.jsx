import React, { useState } from 'react'
import { Input } from 'antd'
import TopMusic from '../../components/TopMusic'
import Playback from '../../components/Playback'

function Dashboard({ code }) {
  const [title, setTitle] = useState('')
  const [playing, setPlaying] = useState(false)
  return (
    <div className="col-span-8 overflow-y-auto h-screen ">
      <Input
        className="w-[400px] mx-auto p-2 text-[18px]"
        type="text"
        placeholder="Searching"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <TopMusic partTitle={'Your top mixes'} searchText={'Ummon'} />
      <TopMusic partTitle={'Made for you'} searchText={'Ummon'} />
      <TopMusic partTitle={'Recently played'} searchText={'Doston Ergashev'} />
      <TopMusic partTitle={'Jump back in'} searchText={'Doston Ergashev'} />
      <TopMusic partTitle={'Uniquely yours'} searchText={'Ummon'} />

      <Playback playing={playing} setPlaying={setPlaying} />
    </div>
  )
}

export default Dashboard
