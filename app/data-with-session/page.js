'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function Home() {
  const [data, setData] = useState([])
  const {data: session } = useSession()
  useEffect(() => {
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
  }, [])

  console.log(data)
  if(!session){
    return <span>Please sign in to view this data.</span>
  }
  else{

    return <span>You can see this section, because you are signed in.</span>
  }

}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getServerSession(context.req, context.res, authOptions),
//     },
//   }
// }

