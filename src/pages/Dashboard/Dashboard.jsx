import React, { useState } from 'react'
import { Input } from 'antd'
import TopMusic from '../../components/TopMusic/TopMusic'

function Dashboard({ code }) {
  const [title, setTitle] = useState('')

  return (
    <div className="col-span-8 overflow-y-auto h-screen">
      <Input
        className="w-[400px] p-2 text-[18px]"
        type="text"
        placeholder="Searching"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <TopMusic code={code} />
      <h2 className=" text-[39px]">Good afternoon</h2>
    </div>
  )
}

export default Dashboard
