import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Likes from '../pages/Dashboard/Likes'
import Playlist from '../pages/Dashboard/Playlist'
import Aside from '../components/Aside'
import Panel from '../components/Panel'
function CustomRoutes({ code }) {
  return (
    <div className="grid grid-cols-12">
      <Aside />
      <Routes>
        <Route path="/" element={<Dashboard code={code} />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
      <Panel />
    </div>
  )
}

export default CustomRoutes
