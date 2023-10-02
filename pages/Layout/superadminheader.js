
import React from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Superadminheader() {

    const handleAdminLinkClick = () => {
        axios.get('/') // Replace with show all admin API endpoint
            .then(response => {
                const router = useRouter();
                router.push({
                    pathname: '/ShowAllAdmin',
                    query: {data: JSON.stringify(response.data)}
                });
                console.log(response.data);
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                console.error(error);
            });
    };

    const handleDoctorLinkClick = () => {
        axios.get('/') //Replace with show all doctor API endpoint
            .then(response => {
                const router = useRouter();
                router.push({
                    pathname: '/ShowAllDoctor',
                    query: {data: JSON.stringify(response.data)}
                });
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleHospitalLinkClick = () => {
        axios.get('/') //Replace with show all hospital API endpoint
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handlePatientLinkClick = () => {
        axios.get('/') //Replace with show all patient API endpoint
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };



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
                {/*<div class="navbar-center hidden lg:flex">*/}
                {/*    <ul class="menu menu-horizontal px-1 text-2xl">*/}
                {/*        /!* <li className="hover:bg-blue-300 rounded-lg"> <Link href="announcement">  </Link></li> *!/*/}


                {/*        <li tabindex="0">*/}
                {/*            <details  className=" rounded-lg">*/}
                {/*                <summary className="hover:text-black hover:bg-blue-300 ">Others</summary>*/}
                {/*                <ul class="bg-cyan-600 text-black hover:bg-blue-200 rounded-lg ">*/}
                {/*                    <li> <Link href="notices"> SuperAdmin </Link></li>*/}
                {/*                    <li><Link href="about"> About Super Admin </Link></li>*/}
                {/*                </ul>*/}
                {/*            </details>*/}
                {/*        </li>*/}
                {/*        <li className="hover:bg-blue-300 rounded-lg ml-2"><Link href="contact">Contact Us</Link></li>*/}
                {/*    </ul>*/}

                {/*    <ul className="menu menu-horizontal px-1 text-2xl">*/}
                {/*        /!* <li> <Link href="/"> Home </Link></li> *!/*/}
                {/*        <li> <Link href=""> </Link></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="/" onClick={handleAdminLinkClick}> Admin</Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="/" onClick={handleDoctorLinkClick}> Doctor</Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="/" onClick={handleHospitalLinkClick}> Hospital </Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="/" onClick={handlePatientLinkClick}> Patient </Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="/" > Logout</Link></li>
                    </ul>

                </div>
            </div>
        </>
    )
}