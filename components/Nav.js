import Link from 'next/link'
import React from 'react'
import SignInOut from './SignInOut'

const Nav = () => {
  return (
    <div>
        <ul className=' flex gap-4 text-blue-900 font-semibold my-4 items-center'>
            <li className=' hover:underline '><Link className=' p-2 ' href='/'>Home</Link></li>
            <li className=' hover:underline '><Link className=' p-2 ' href='/profile'>Profile</Link></li>
            <li className=' hover:underline '><Link className=' p-2 ' href='/user-list'>All User List</Link></li>
            <li className=' hover:underline '><Link className=' p-2 ' href='/data-without-session'>Data without session</Link></li>
            <li className=' hover:underline '><Link className=' p-2 ' href='/data-with-session'>Data with session</Link></li>
            <li className=' hover:underline '><Link className=' p-2 ' href='/admin'>Only admin</Link></li>
            <li><SignInOut /></li>
        </ul>
    </div>
  )
}

export default Nav