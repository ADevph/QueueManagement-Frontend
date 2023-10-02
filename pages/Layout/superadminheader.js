
import React from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Superadminheader() {

    return (
        <>
            <div className="bg-sky-700  navbar text-white">
                <div className="navbar-start">
                    <img src="/q.png" alt="Logo" class="h-24 w-32 mr-2"></img>
                    <Link href="/" className=" normal-case text-2xl  ">Queue<span className=" text-cyan-300 text-4xl ">Management</span></Link>
                </div>


                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="../SuperAdmin/superAdmin"> Home</Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="../SuperAdmin/ShowAllAdmin"> Admin</Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="../SuperAdmin/ShowAllDoctor"> Doctor</Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="../SuperAdmin/ShowAllHospital"> Hospital </Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="../SuperAdmin/ShowAllPatient"> Patient </Link></li>
                        <li className="hover:bg-blue-400 rounded-lg"> <Link className="" href="/" > Logout</Link></li>
                    </ul>

                </div>
            </div>
        </>
    )
}