import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,LikedSongs,SingleSongs} from '../pages'

function CustomRouters() {
  return (
    <div className='col-span-8 h-screen overflow-y-auto bg-rose-500'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/single-songs/:id' element={<SingleSongs/>} />
        <Route path='/liked-songs' element={<LikedSongs/>} />
      </Routes>
    </div>
  )
}

export default CustomRouters
