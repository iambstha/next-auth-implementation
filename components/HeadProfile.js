'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const HeadProfile = () => {
    const { data: session } = useSession()
    if (!session) {
        return <span>You are not logged in!</span>
    }
    else {
        return (
            <div className=' flex  justify-center items-center gap-4 mb-2 w-full text-slate-400 '>
                {session?.user && session.user.image && (
                    <Image
                        src={session.user.image}
                        width={40}
                        height={40}
                        className=' border rounded-full overflow-hidden opacity-60 '
                        alt='image'
                    />
                )}
                <div>{session && <><span>Hello {session && session?.user.name}</span></>}</div>
            </div>
        )
    }

}

export default HeadProfile