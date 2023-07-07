'use client'
import { useState, useEffect } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import { getProviders } from "next-auth/react"

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
      <div className=" py-4 ">
        <div>
          {!session && providers &&
            Object.values(providers).map((provider) => {
              return <button
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)} 
              className='outline_btn border border-orange-300 bg-orange-300 p-1 px-4 hover:shadow rounded-lg opacity-80 hover:opacity-90'>
              Sign In With Google
            </button>
            })}
          {session?.user && (
            <>
              <a className='outline_btn border border-orange-300 bg-orange-300 p-1 px-4 hover:shadow rounded-lg opacity-80 hover:opacity-90' href={`/api/auth/signout`} 
                  onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}