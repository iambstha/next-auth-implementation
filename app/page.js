'use client'
import { useState, useEffect } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
// import { authOptions } from "./api/auth/[...nextauth]/route"
import { getProviders } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  const [data, setData] = useState([])
  const loading = status === "loading"
  const [providers, setProviders] = useState(null)
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    setUpProviders()
  }, [])

  console.log(data)

  return (
    <header>
      <div>
        <p>
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
              <span className=" mr-4 ">
                <small>Signed in as</small> <strong>{session.user.email ?? session.user.name}</strong>
              </span>
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
        </p>
      </div>
      <div className=" p-2 ">
        <h3 className=" font-semibold underline underline-offset-2 ">Available free data</h3>
       <ul>
       {data?.lists.map(d => <li>{d.name}</li>)}
       </ul>
      </div>
    </header>
  )
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getServerSession(context.req, context.res, authOptions),
//     },
//   }
// }

