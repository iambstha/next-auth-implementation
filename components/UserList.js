import React from 'react'
import { connectionToDB } from '@/utils/database'
import User from '@/models/user'
import Image from 'next/image'

const UserList = async () => {
  await connectionToDB()
  const list = await User.find()
  return (
    <div className=' flex flex-col justify-center w-full text-center '>
      <h2 className=' text-2xl pb-2 text-center '>All Users</h2>
      <h3 className=' pb-2 '>Total users: {list.length}</h3>
      <ul className=' flex justify-center items-center ' >
        <table className=' ' >
          <thead>
            <tr className=' border text-slate-700 bg-slate-100 '>
              <th className='p-2 border'>Profile Image</th>
              <th className='p-2 border'>Username</th>
              <th className='p-2 border'>Email</th>
            </tr>
          </thead>
          {list && list.map(d =>
            <tbody>
              <tr key={d.id} className=' border text-slate-500 '>
                <td className=' p-2 flex justify-center '><div className=' rounded-full overflow-hidden '><Image alt='image' src={d.image} width={40} height={40} className='rounded-full' /></div></td>
                <td className=' p-2 border '>{d.username}</td>
                <td className=' p-2 border '>{d.email}</td>
              </tr>
            </tbody>
          )}
        </table>
      </ul>
    </div>
  )
}

export default UserList