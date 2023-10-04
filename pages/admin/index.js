import Layout from "../components/layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";



export default function AdminDashboard() {

  return (
    <>

      <Layout title="Admin Dashboard - Medical Service">
        <section className="flex justify-center">
          <div className="flex flex-col justify-center items-center w-full max-w-[1600px] min-h-screen">
            <div className="flex justify-center items-center w-full min-h-screen h-fit pt-[75px] bg-scroll bg-cover bg-center bg-[url('/hospital_admin_1.jpg')]">
              <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-3 px-4 py-10 items-center w-full h-full backdrop-filter backdrop-brightness-[.3]">
                <Link href="/admin/registerhospital" className="w-[300px] h-fit max-lg:justify-self-center lg:self-end lg:justify-self-end rounded-md transition duration-300 px-8 py-6 text-center text-[18px] leading-6 font-semibold text-gray-900 hover:text-white bg-sky-50 hover:bg-indigo-800" >Register Your Hospital</Link>
                <Link href="/admin/registerdoctor" className="w-[300px] h-fit max-lg:justify-self-center lg:self-end lg:justify-self-start rounded-md transition duration-300 px-8 py-6 text-center text-[18px] leading-6 font-semibold text-gray-900 hover:text-white bg-sky-50 hover:bg-indigo-800" >Register Doctors</Link>
                <Link href="/admin/doctors" className="w-[300px] h-fit max-lg:justify-self-center lg:self-start lg:justify-self-end rounded-md transition duration-300 px-8 py-6 text-center text-[18px] leading-6 font-semibold text-gray-900 hover:text-white bg-sky-50 hover:bg-indigo-800" >Manage Doctors</Link>
                <Link href="#" className="w-[300px] h-fit max-lg:justify-self-center lg:self-start lg:justify-self-start rounded-md transition duration-300 px-8 py-6 text-center text-[18px] leading-6 font-semibold text-gray-900 hover:text-white bg-sky-50 hover:bg-indigo-800" >Hospital Details</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>

    </>

  )

}
