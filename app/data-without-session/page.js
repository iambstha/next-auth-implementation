'use client'
import { useState, useEffect } from "react"

export default function Home() {
  const [data, setData] = useState([])
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

  return (
    <div>
      <div>
        <span>You can view this without signing in.</span>
        <ul>
        {data?.lists?.map(d => <li>{d.name}</li> )}
        </ul>
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getServerSession(context.req, context.res, authOptions),
//     },
//   }
// }

