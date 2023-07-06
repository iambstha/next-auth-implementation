'use client'
import { useState, useEffect } from "react"

export default function Home() {
    const [fdata, setFdata] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fake = await fetch('https://fakestoreapi.com/products?limit=5');
                const fakedata = await fake.json();
                setFdata(fakedata)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <div>
                <span className=" text-2xl ">You can view this without signing in.</span>
                <ul>
                    {fdata?.map(d => <li className=" text-sm text-slate-500 ">{d.title}</li>)}
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

