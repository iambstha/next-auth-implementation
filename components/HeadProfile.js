'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const HeadProfile = () => {
    const { data: session } = useSession()
    if (!session) {
        return <span>You are not logged in!</span>
    }
    else {
        return (
            <div>
                {session && <><span>Signed in as {session && session?.user.name}</span></>}
            </div>
        )
    }

}

export default HeadProfile