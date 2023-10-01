import Layout from "./Layout/layout";
import Title from "./Layout/title";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


export default function RegisterDoctor() {
    const [hospitalName , setHospitalName] = useState("");
    const [hospitalNameError , setHospitalNameError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");

    const [error, setError] = useState("");
    const router = useRouter();
    const { handleSubmit } = useForm();
    const[loading,setLoading]=useState(false);

    const onSubmit = async () => {
        setHospitalNameError("");
        setLocationError("");

        if (!hospitalName) {
            setHospitalNameError("Enter Hospital Name");
            setLoading(false);
            return;
        }

        if (!location) {
            setLocationError("Enter Hospital Location.")
            setLoading(false);
            return;
        }

        try {
            //const response = await.axios.post......................


            console.log("Success");
        }
        catch (error) {
            setError(error);
            setLoading(false);
            return;
        }
    }


    return (
        <>
            <Title page="Doctor Registration" />
            <Layout>
                <div className="flex items-center justify-center h-screen">
                    <div className="relative flex flex-col items-center justify-center rounded-xl bg-white shadow-md p-8 w-128">
                        <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Doctor Registration
                        </h4>
                        <p className="mt-1 mb-6 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Enter doctor details to register.
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

                            <div>
                                <input
                                    type="hidden"
                                    name="adminID"
                                    value={"adminID"} // Replace with the actual value of adminID get from backend in time of login to the system.
                                />
                            </div>

                            <button
                                className="btn btn-outline btn-secondary"
                                type="submit"
                            >
                                Register Hospital
                            </button>
                            {error && (<p className="text-red-500">{error}</p>)}


                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );


}