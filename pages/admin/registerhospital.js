import Layout from "../components/layout";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";


export default function RegisterHospitalByAdmin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();
    const[loading, setLoading] = useState(false);

    const onSubmit = async (data) => {

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/hospital/registration',
                {
                    hospitalname: data.hospitalname,
                    location: data.hospitallocation,
                    adminid: JSON.parse(localStorage.getItem('user')).id
                }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwtoken')}`,
                },
                withCredentials: true
            });

            if (response.data.error){
                if (response.data.error == "no token provided" || response.data.error == "invalid token") {
                    localStorage.clear();
                    router.push('/login');
                } else if (response.data.error == "token has expired") {
                    localStorage.clear();
                    router.push('/login');
                }
            }

            if (response.data.message == "Registration failed") {
                setSuccess("");
                setError("hospital registration failed");
            } else if (response.data.errors && response.data.errors.adminid[0] == "The adminid field is already exist.") {
                setSuccess("");
                setError(<span>you already registered 1 hospital before<br />you cannot register more than 1 hospital</span>);
            } else {
                setError("");
                setSuccess("Hospital Registered Successfully");
                reset();
                setTimeout(() => {
                    router.push('/admin');
                }, 3000);
            }
        }
        catch (error) {
            console.error(error);
            setError("something went wrong");
            setLoading(false);
        }
    }


    return (
        <>
            <Layout title="Register Hospital - Medical Service">
                <section className="flex justify-center">
                    <div className="flex flex-col justify-center items-center w-full min-h-screen max-w-[1600px] py-[75px]">
                        <h4 className="my-[20px] block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Register Hospital
                        </h4>
                        <hr className="w-8/12 border border-y-gray-300 mb-[20px]" />

                        <div className="relative flex items-center justify-center rounded-md bg-white shadow-md p-8 w-80 h-fit">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Hospital Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('hospitalname', { required: true })}
                                        placeholder="Enter Hospital Name"
                                        className="input-field bg-blue-100 px-2 py-1 rounded-lg text-gray-800"
                                    />
                                    {errors.hospitalname && (
                                        <p className="font-semibold text-center text-red-700 text-[12px] leading-4 pb-2">Hospital Name is required</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Hospital Location
                                    </label>
                                    <input
                                        type="text"
                                        {...register('hospitallocation', { required: true })}
                                        placeholder="Enter Hospital Location"
                                        className="input-field bg-blue-100 px-2 py-1 rounded-lg text-gray-800"
                                    />
                                    {errors.hospitallocation && (
                                        <p className="font-semibold text-center text-red-700 text-[12px] leading-4 pb-2">Hospital Location is required</p>
                                    )}
                                </div>

                                <button className="text-white bg-indigo-500 hover:bg-indigo-800 transition duration-300 w-full px-4 py-2 rounded-md mt-3" type="submit">
                                    Register Hospital
                                </button>
                                {error && (<p className="text-center font-semibold text-sm text-red-500 my-1">{error}</p>)}
                                {success && (<p className="text-center font-semibold text-sm text-green-500 my-1">{success}</p>)}


                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );

}
