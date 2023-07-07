import React from 'react'
import { connectionToDB } from '@/utils/database'
import User from '@/models/user'

const UserList = async () => {
    await connectionToDB()
    const list = await User.find()

    console.log(list[0].email)

  return (
    <div>
      <h2>Total users: {list.length}</h2>
      <ul>
      {list && list.map(d => <li className=' text-sm text-slate-500 ' key={d.id}>{d.username}</li> )}
      </ul>
    </div>
  )
}

export default UserList