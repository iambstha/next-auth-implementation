import Link from "next/link";

export default async function Home() {


  return (
    <div>
      <h2 className=" text-2xl ">Homepage</h2>
      <p>Highly motivated by the original next auth <Link href='https://next-auth-example.vercel.app/' className=" text-blue-500 hover:underline " target="_blank">example</Link> site. </p>
    </div>
  )
}

