import Link from 'next/link'
import React from 'react'
import SignInOut from './SignInOut'

const Nav = () => {
  return (
    <div>
        <ul className=' flex flex-wrap gap-4 text-blue-900 font-semibold mt-2 md:mt-4 items-center'>
            <li className=' hover:underline '><Link className=' p-0 md:p-2 ' href='/'>Home</Link></li>
            <li className=' hover:underline '><Link className=' p-0 md:p-2 ' href='/profile'>Profile</Link></li>
            <li className=' hover:underline '><Link className=' p-0 md:p-2 ' href='/user-list'>User Lists</Link></li>
            <li className=' hover:underline '><Link className=' p-0 md:p-2 ' href='/data-without-session'>Without session</Link></li>
            <li className=' hover:underline '><Link className=' p-0 md:p-2 ' href='/data-with-session'>With session</Link></li>
            <li className=' hover:underline '><Link className=' p-0 md:p-2 ' href='/admin'>Admin</Link></li>
            <li><SignInOut /></li>
        </ul>
    </div>
  )
}

export default Nav