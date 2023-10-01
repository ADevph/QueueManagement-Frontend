

import Link from "next/link";
import dynamic from "next/dynamic";
// const Layout = dynamic(() => import('./Layout/layout'), {
//   ssr: false,
// })
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})



export default function Home( ) {
  return (
    <>
    
    <Title page="Home"> </Title>
    <div className="navbar-start">
  <img src="/q.png" alt="Logo" class="h-24 w-32 mr-2"></img>
    <Link href="/" className=" normal-case text-2xl  ">Queue<span className=" text-blue-800 text-4xl ">Management</span></Link> 
  </div>


<div className="hover:bg-cyan-200  text-4xl text-center text-black bg-slate-200 p-2"> 
<h1> Welcome Admin! </h1>
</div>

<div className="mt-4 flex items-center justify-center">
  
  <img src="../q.png" className=""></img>

 </div>
 <br></br>
    <br></br>


<div className=" flex items-center justify-center gap-10 p-4">
    <Link className="btn btn-outline bg-sky-100 hover:bg-blue-500" href="clinicform" >Add Your Clinic </Link>
    <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="docform" >Add Clinic Doctors </Link>
    <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="docdashboard" > Doctors Dashboard </Link>
    <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="admindashboard" > Clinic Dashboard </Link>
    <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="registerdoctor" > NewDoctor Register </Link>
    <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="registerhospital" > NewHospital Register </Link>

</div>
   






    </>

  )

}




