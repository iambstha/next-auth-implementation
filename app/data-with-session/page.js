'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function Home() {
  const {data: session } = useSession()

  if(!session){
    return <span className=" text-2xl ">Please sign in to view this data.</span>
  }
  else{

    return <span className=" text-2xl ">You can see this section, because you are signed in.</span>
  }

}

