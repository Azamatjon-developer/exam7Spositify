import React, { useState } from 'react'
import { Input } from 'antd'
import TopMusic from '../../components/TopMusic'

function Dashboard({ code }) {
  const [title, setTitle] = useState('')

  return (
    <div className="col-span-8 overflow-y-auto h-screen ">
      <Input
        className="w-[400px] mx-auto p-2 text-[18px]"
        type="text"
        placeholder="Searching"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <TopMusic code={code} />
      <TopMusic />
      <TopMusic />

    </div>
  )
}

export default Dashboard
