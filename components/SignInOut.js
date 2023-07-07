'use client'
import { useState, useEffect } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import { getProviders } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn,faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function SignInOut() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [providers, setProviders] = useState(null)
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <div>
      <div className=" py-4 text-slate-950 ">
        <div>
          {!session && providers &&
            Object.values(providers).map((provider) => {
              return <button
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)} 
              className='flex gap-2 justify-center items-center outline_btn border border-orange-300 bg-orange-300 p-1 px-4 hover:shadow rounded-lg opacity-80 hover:opacity-90'>
              <span>Google Sign In</span>
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            })}
          {session?.user && (
            <>
              <a className=' flex gap-2 justify-center items-center outline_btn border border-orange-300 bg-orange-300 p-1 px-4 hover:shadow rounded-lg opacity-80 hover:opacity-90' href={`/api/auth/signout`} 
                  onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
              <span>  Sign out</span>
              <FontAwesomeIcon icon={faSignOut} />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}