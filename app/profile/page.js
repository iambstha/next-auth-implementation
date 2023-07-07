'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const { data: session, loading, status } = useSession()
    return (
        <div>
            <h2 className=' text-2xl pb-4 '>Your Profile Page</h2>
            {session ?
                <div className=' flex gap-4 justify-start items-start '>
                    <div><Image src={`${session.user.image}`} width={50} height={50} className=' rounded-full overflow-hidden ' /></div>
                    <ul className='  '>
                        <li>Name: {session.user.name}</li>
                        <li>Email: {session.user.email}</li>
                    </ul>
                </div>
            : <div>Please sign in.</div>}
        </div>
    )
}

export default page