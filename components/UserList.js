import React from 'react'
import { connectionToDB } from '@/utils/database'
import User from '@/models/user'
import Image from 'next/image'

const UserList = async () => {
  await connectionToDB()
  const list = await User.find()
  return (
    <div>
      <h2>Total users: {list.length}</h2>
      <ul>
        <table className=' border' >
          <tr className=' border text-slate-700 '>
            <th className='p-2 border'>Profile Image</th>
            <th className='p-2 border'>Username</th>
            <th className='p-2 border'>Email</th>
          </tr>
          {list && list.map(d =>
            <tr key={d.id} className=' border text-slate-500 '>
              <td className=' p-2 flex justify-center '><div className=' rounded-full overflow-hidden '><Image src={d.image} width={40} height={40} className='rounded-full' /></div></td>
              <td className=' p-2 border '>{d.username}</td>
              <td className=' p-2 border '>{d.email}</td>
            </tr>
          )}
        </table>
      </ul>
    </div>
  )
}

export default UserList