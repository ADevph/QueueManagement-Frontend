import SLayout from "../Layout/slayout";
import Title from "../Layout/title";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";


export default function RegisterDoctor() {
    const [hospitalname , setHospitalName] = useState("");
    const [hospitalNameError , setHospitalNameError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");
    const [adminid , setAdminId] = useState("");
    const [adminIdError , setAdminIdError] = useState("");

    const [error, setError] = useState("");
    const router = useRouter();
    const { handleSubmit } = useForm();
    const [loading,setLoading]=useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const onSubmit = async () => {
        setHospitalNameError("");
        setLocationError("");
        setAdminIdError("");


        if (!hospitalname) {
            setHospitalNameError("Enter Hospital Name");
            setLoading(false);
            return;
        }

        if (!location) {
            setLocationError("Enter Hospital Location.")
            setLoading(false);
            return;
        }
        if(!adminid) {
            setAdminIdError("Enter admin ID")
            setLoading(false);
            return;
        }



        // try {
        //     const response = await axios.post(
        //         "http://localhost:8000/api/hospital/registration",
        //         {
        //             hospitalname,
        //             location,
        //             adminid,
        //         }
        //     );
        //     console.log("Success");
        //     toast.success("Registration successful", {
        //         position: "top-right",
        //         autoClose: 3000,
        //     });
        // } catch (error) {
        //     setError(error.message);
        //     setLoading(false);
        //     toast.error("Registration failed", {
        //         position: "top-right",
        //         autoClose: 3000,
        //     });
        // }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/hospital/registration", // Replace with your actual backend endpoint URL
                {
                    hospitalname,
                    location,
                    adminid,
                }
            );

            console.log("Success");
            setSuccessMessage(error.message);
            setError('');
        } catch (error) {
            setError(error.message);
            setSuccessMessage('');
            setLoading(false);
        }
    };


    return (
        <>
            <Title page="Doctor Registration" />
            <SLayout>
                <div className="flex items-center justify-center h-screen">
                    <div className="relative flex flex-col items-center justify-center rounded-xl bg-white shadow-md p-8 w-128">
                        <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Doctor Registration
                        </h4>
                        <p className="mt-1 mb-6 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Enter Hospital details to register.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Hospital Name
                                </label>
                                <input
                                    type="text"
                                    name="hospitalname"
                                    placeholder="Enter Hospital Name"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setHospitalName(e.target.value)}
                                />
                                {hospitalNameError && (
                                    <p className="text-red-500">{hospitalNameError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Hospital Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter Hospital Location"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                {locationError && (
                                    <p className="text-red-500">{locationError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Admin ID
                                </label>
                                <input
                                    type="text"
                                    name="adminid"
                                    placeholder="Enter Hospital Location"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setAdminId(e.target.value)}
                                />
                                {adminIdError && (
                                    <p className="text-red-500">{adminIdError}</p>
                                )}
                            </div>

                            {/*<div>*/}
                            {/*    <input*/}
                            {/*        type="hidden"*/}
                            {/*        name="adminID"*/}
                            {/*        value={"adminID"} // Replace with the actual value of adminID get from backend in time of login to the system.*/}
                            {/*    />*/}
                            {/*</div>*/}

                            <button
                                className="btn btn-outline btn-secondary"
                                type="submit"
                            >
                                Register Hospital
                            </button>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    {successMessage && <div className="success-message">{successMessage}</div>}
                                    {error && <div className="error-message">{error}</div>}
                                </label>

                            </div>

                        </form>
                    </div>
                </div>
            </SLayout>
        </>
    );


}