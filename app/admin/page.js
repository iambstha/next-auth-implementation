import React from 'react'

const page = () => {
  return (
    <div>
        <p className=" text-2xl ">This page can be accessed only by admin. </p>
        <p>This page is using <a target='_blank' href="https://next-auth.js.org/configuration/nextjs#middleware" className=' text-blue-600 hover:underline '>middleware</a>.</p>
        <p>Try signing out & visiting this page.</p>
    </div>
  )
}

export default page