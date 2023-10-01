

import Link from "next/link"

export default function PatientHeader(){

return (
    <>
 

<div className="bg-sky-700  navbar text-white">
  <div className="navbar-start">
  <img src="/q.png" alt="Logo" class="h-24 w-32 mr-2"></img>
    <Link href="/" className=" normal-case text-2xl  ">Queue<span className=" text-cyan-300 text-4xl ">Management</span></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
 



  <div class="dropdown ml-12">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-800 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Others</a>
          <ul class="">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-2xl">
    {/* <li className="hover:bg-blue-300 rounded-lg"> <Link href="announcement">  </Link></li> */}

    
      <li tabindex="0">
        <details  className=" rounded-lg">
          <summary className="hover:text-black hover:bg-blue-300 ">Others</summary>
          <ul class="bg-cyan-600 text-black hover:bg-blue-200 rounded-lg ">
            <li> <Link href="notices"> blank </Link></li>
            <li><Link href="about"> About Us </Link></li>
          </ul>
        </details>
      </li>
      <li className="hover:bg-blue-300 rounded-lg ml-2"><Link href="contact">Contact Us</Link></li>
    </ul>
  





    <ul className="menu menu-horizontal px-1 text-2xl">
      {/* <li> <Link href="/"> Home </Link></li> */}
      <li> <Link href=""> </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 text-2xl">

      <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="loginform" > Sign In </Link> </li>
      <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="admin" > Admin </Link> </li>
      <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="registration" > Sign Up </Link></li>
    
    </ul>
 
  </div>
</div>


       </>
)

}