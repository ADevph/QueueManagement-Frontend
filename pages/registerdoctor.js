import Layout from "./Layout/layout";
import Title from "./Layout/title";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


export default function RegisterDoctor() {
    const [firstName , setFirstName] = useState("");
    const [firstNameError , setFirstNameError] = useState("");
    const [lastName , setLastName] = useState("");
    const [lastNameError , setLastNameError] = useState("");
    const [gender, setGender] = useState("");
    const [genderError, setGenderError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [specialization , setSpecialization] = useState("");
    const [specializationError , setSpecializationError] = useState("");
    const [description , setDescription] = useState("");
    const [descriptionError , setDescriptionError] = useState("");
    const [hospitalName , setHospitalName] = useState("");
    const [hospitalNameError , setHospitalNameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { handleSubmit } = useForm();
    const[loading,setLoading]=useState(false);

    const onSubmit = async () => {
        setLoading(true);
        setFirstNameError("");
        setLastNameError("");
        setGenderError("");
        setEmailError("");
        setPhoneError("");
        setSpecializationError("");
        setDescriptionError("");
        setHospitalNameError("");
        setPasswordError("");
        setConfirmPasswordError("");


        if (!firstName) {
            setFirstNameError("Enter First Name");
            setLoading(false);
            return;
        }
        else {
            const setFirstNameError = /^[A-Za-z0-9 ]{1,20}$/;
            if (!setFirstNameError.test(firstName)) {
                setFirstNameError("First name can only contain letters, numbers, and spaces. Maximum length is 20 characters.");
              setLoading(false);
              return;
            }
        }

        if (!lastName) {
            setLastNameError("Enter Last Name");
            setLoading(false);
            return;
        }
        else {
            const setFirstNameError = /^[A-Za-z0-9 ]{1,20}$/;
            if (!setFirstNameError.test(lastName)) {
                setLastNameError("Last name can only contain letters, numbers, and spaces. Maximum length is 20 characters.");
                setLoading(false);
                return;
            }
        }

        if (!phone) {
            setPhoneError("Enter Doctor Phone Number");
            setLoading(false);
            return;
        }
        else {
            const phonePattern = /^(01[3456789][0-9]{8})$/;
            if (!phonePattern.test(phone)) {
                setPhoneError("Wrong Input");
                setLoading(false);
                return;
            }
        }

        if (!gender) {
            setGenderError("Enter Your Gender");
            setLoading(false);
            return;
        }
        if (!email) {
            setEmailError("Enter Your Email");
            setLoading(false);
            return;
        }
        else {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email)) {
                setEmailError("Wrong email Input");
                setLoading(false);
                return;
            }
        }

        if (!specialization) {
            setSpecializationError("Enter Doctor Specialization");
            setLoading(false);
            return;
        }

        if (!description) {
            setDescriptionError("Enter Doctor Description");
            setLoading(false);
            return;
        }

        if (!hospitalName) {
            setHospitalNameError("Enter Hospital name");
            setLoading(false);
            return;
        }

        if (!password) {
            setPasswordError("Enter Your Password");
            setLoading(false);
            return;
        }
        if (!confirmPassword) {
            setConfirmPasswordError("Enter Confirm Password");
            setLoading(false);
            return;
        }
        else {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/;
            if (!passwordPattern.test(password)) {
                setPasswordError("Use uppercase, lowercase, number, special character");
                setLoading(false);
                return;
            }
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError("Confirm Password Should be same as Password");
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
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter first name"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {firstNameError && (
                                    <p className="text-red-500">{firstNameError}</p>
                                )}
                            </div>


                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter last name"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {lastNameError && (
                                    <p className="text-red-500">{lastNameError}</p>
                                )}
                            </div>


                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Gender
                                </label>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            value="male"
                                            className="mr-2 text-blue-500"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        <label htmlFor="male" className="text-xl text-black">
                                            Male
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            value="female"
                                            className="mr-2 text-blue-500"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        <label htmlFor="female" className="text-xl text-black">
                                            Female
                                        </label>
                                    </div>
                                </div>
                                {genderError && (
                                    <p className="text-red-500">{genderError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Phone: +88
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder=""
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setPhone(e.target.value)}
                                    pattern="^\01\d{8,}$"
                                    title="Enter a valid Bangladeshi phone number starting with +88"
                                />
                                {phoneError && (
                                    <p className="text-red-500">{phoneError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setEmail(e.target.value)}
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    title="Enter a valid email address (e.g., john.doe@example.com)"
                                />
                                {emailError && (
                                    <p className="text-red-500">{emailError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Specialization
                                </label>
                                <input
                                    type="text"
                                    name="specialization"
                                    placeholder="Enter Doctor Specialization"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setSpecialization(e.target.value)}
                                />
                                {specializationError && (
                                    <p className="text-red-500">{specializationError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Enter Doctor Description"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {descriptionError && (
                                    <p className="text-red-500">{descriptionError}</p>
                                )}
                            </div>

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
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setPassword(e.target.value)}
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                    title="Password must be at least 8 characters long and contain at least one letter and one number"
                                />
                                {passwordError && (
                                    <p className="text-red-500">{passwordError}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold text-xl text-black">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder=" Confirm Your Password"
                                    className="input-field bg-blue-100 p-1 rounded-lg text-gray-700"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordError && (
                                    <p className="text-red-500">{confirmPasswordError}</p>
                                )}
                            </div>

                            <button
                                className="btn btn-outline btn-secondary"
                                type="submit"
                            >
                                Register Doctor
                            </button>
                            {error && (<p className="text-red-500">{error}</p>)}


                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );


}