import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=' p-8 flex flex-col flex-wrap justify-center items-center border-t mt-4 md:mt-8 '>
        <p>Created by: <Link target='_blank' href='https://bishal-shrestha.com.np/' className=' text-blue-500 hover:underline '>Bishal Shrestha</Link> aka <Link  target='_blank' className=' text-blue-500 hover:underline ' href='https://github.com/iambstha'>@iambstha</Link></p>
        <ul className=' flex justify-center items-center gap-8 p-2 md:p-4 text-slate-500'>
            <li ><Link href='/' className=' flex items-center gap-2 hover:text-slate-700 hover:underline'> <FontAwesomeIcon icon={faHome} className=' text-xs ' />  Home</Link></li>
            <li ><Link target='_blank' href='https://github.com/iambstha/next-auth-implementation' className=' flex items-center gap-2 hover:text-slate-700 hover:underline '><FontAwesomeIcon icon={faGithub} />  Github repo </Link></li>
        </ul>
    </div>
  )
}

export default Footer