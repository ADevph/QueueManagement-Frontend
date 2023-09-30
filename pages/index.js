
import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})



export default function Home() {

  return (
    <>

      <Layout>

        <div className="hover:bg-cyan-200  text-4xl text-center text-black bg-slate-200 p-2">
          <h1> Welcome! </h1>
        </div>

        <div className="mt-4 flex items-center justify-center">

          <img src="../q.png" className=""></img>

        </div>
        <br></br>
        <br></br>





      </Layout>


    </>

  )

}