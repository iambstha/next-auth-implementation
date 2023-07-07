import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <ul className=' flex gap-4 text-blue-900 font-semibold'>
            <li className=' hover:underline '><Link href='/'>Home</Link></li>
            <li className=' hover:underline '><Link href='/user-list'>All User List</Link></li>
            <li className=' hover:underline '><Link href='/data-without-session'>Data without session</Link></li>
            <li className=' hover:underline '><Link href='/data-with-session'>Data with session</Link></li>
            <li className=' hover:underline '><Link href='/admin'>Only admin</Link></li>
        </ul>
    </div>
  )
}

export default Nav