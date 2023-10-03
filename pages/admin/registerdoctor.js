import Layout from "../components/layout";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";


export default function RegisterDoctor() {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [gender, setGender] = useState("");
    const [genderError, setGenderError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [specializationError, setSpecializationError] = useState("");
    const [hospitalId, setHospitalId] = useState("");
    const [hospitalIdError, setHospitalIdError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        setFirstNameError("");
        setLastNameError("");
        setGenderError("");
        setEmailError("");
        setPhoneError("");
        setAddressError("");
        setSpecializationError("");
        setHospitalIdError("");
        setPasswordError("");
        setConfirmPasswordError("");


        if (!firstName) {
            setFirstNameError("Enter Doctor's First Name");
            setLoading(false);
            return;
        }
        else {
            const FirstNameRegex = /^[A-Za-z-]{1,}$/;
            if (!FirstNameRegex.test(firstName)) {
                setFirstNameError("First name can only contain letters and hyphens. min length is 1 character");
                setLoading(false);
                return;
            }
        }

        if (!lastName) {
            setLastNameError("Enter Doctor's Last Name");
            setLoading(false);
            return;
        }
        else {
            const LastNameRegex = /^[A-Za-z-]{1,}$/;
            if (!LastNameRegex.test(lastName)) {
                setLastNameError("Last name can only contain letters and hyphens. min length is 1 character");
                setLoading(false);
                return;
            }
        }

        if (!phone) {
            setPhoneError("Enter Doctor's Phone Number");
            setLoading(false);
            return;
        }
        else {
            const phonePattern = /^(\+880|0)(1[3-9]\d{8})$/;
            if (!phonePattern.test(phone)) {
                setPhoneError("Invalid Bangladeshi Number");
                setLoading(false);
                return;
            }
        }

        if (!gender) {
            setGenderError("Select Doctor's Gender");
            setLoading(false);
            return;
        }

        if (!email) {
            setEmailError("Enter Doctor's Email");
            setLoading(false);
            return;
        }
        else {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                setEmailError("Enter a valid email address");
                setLoading(false);
                return;
            }
        }

        if (!password) {
            setPasswordError("Enter an Initial Password for Doctor");
            setLoading(false);
            return;
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Confirm the Password for Doctor");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Confirm Password should be same as Password");
            setLoading(false);
            return;
        }

        if (!specialization) {
            setSpecializationError("Enter Doctor's Specialization");
            setLoading(false);
            return;
        }

        if (!hospitalId) {
            setHospitalIdError("Enter Associated Hospital ID");
            setLoading(false);
            return;
        }

        if (!address) {
            setAddressError("Enter Doctor's Address");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/doctor/registration',
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    gender: data.gender,
                    email: data.email,
                    password: data.password,
                    confirm_password: data.confirmPassword,
                    specialization: data.specialization,
                    hospitalid: data.hospitalid,
                    address: data.address
                }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwtoken')}`,
                },
                withCredentials: true
            });

            if (response.data.error) {
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
                setError("doctor registration failed");
            } else if (response.data.message == "Doctor table registration failed") {
                setSuccess("");
                setError(<span>doctor registration failed<br />server side error</span>);
            } else {
                setError("");
                setSuccess("Doctor Registered Successfully");
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
            return;
        }
    }





    return (
        <>

            <Layout title="Register Doctor - Medical Service">
                <section className="flex justify-center">
                    <div className="flex flex-col justify-center items-center w-full min-h-screen max-w-[1600px] py-[75px]">
                        <h4 className="my-[20px] block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Register Doctor
                        </h4>
                        <hr className="w-8/12 border border-y-gray-300 mb-[20px]" />

                        <div className="relative flex items-center justify-center rounded-md bg-white shadow-md p-8 w-80 h-fit">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        {...register('firstName')}
                                        placeholder="Doctor's First Name"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {firstNameError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{firstNameError}</p>
                                    )}
                                </div>
                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        {...register('lastName')}
                                        placeholder="Doctor's Last Name"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {lastNameError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{lastNameError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        {...register('phone')}
                                        placeholder="+8801XXXXXXXXX"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setPhone(e.target.value)}
                                        title="Enter a valid Bangladeshi phone number"
                                    />
                                    {phoneError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{phoneError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Gender
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="male"
                                                name="gender"
                                                {...register('gender')}
                                                value="male"
                                                className="mr-2 checked:accent-indigo-600"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <label htmlFor="male" className="font-semibold text-sm text-black">
                                                Male
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="female"
                                                name="gender"
                                                {...register('gender')}
                                                value="female"
                                                className="mr-2 checked:accent-indigo-600"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <label htmlFor="female" className="font-semibold text-sm text-black">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    {genderError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{genderError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        {...register('email')}
                                        placeholder="john.doe@example.com"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setEmail(e.target.value)}
                                        title="Enter a valid email address (e.g., john.doe@example.com)"
                                    />
                                    {emailError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{emailError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        {...register('password')}
                                        placeholder="Password for Doctor"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setPassword(e.target.value)}
                                        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!.@>#$%^&*+-_<?])[a-zA-Z\d~!.@>#$%^&*+-_<?]{8,}$"
                                        title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                                    />
                                    {passwordError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{passwordError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        {...register('confirmPassword')}
                                        placeholder="Confirm Password for Doctor"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {confirmPasswordError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{confirmPasswordError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Specialization
                                    </label>
                                    <input
                                        type="text"
                                        name="specialization"
                                        {...register('specialization')}
                                        placeholder="Doctor's Specialization"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setSpecialization(e.target.value)}
                                    />
                                    {specializationError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{specializationError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Hospital ID
                                    </label>
                                    <input
                                        type="number"
                                        name="hospitalid"
                                        {...register('hospitalid')}
                                        placeholder="Hospital ID"
                                        className="input-field bg-blue-100 p-1 rounded-lg"
                                        onChange={(e) => setHospitalId(e.target.value)}
                                    />
                                    {hospitalIdError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{hospitalIdError}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full justify-center mb-4">
                                    <label className="font-semibold text-sm text-black">
                                        Address
                                    </label>
                                    <textarea
                                        rows={2}
                                        name="address"
                                        {...register('address')}
                                        placeholder="Doctor's Address"
                                        className="w-full rounded-lg bg-blue-100 border-2 border-gray-400 focus:border-indigo-600 focus:caret-indigo-500 font-[600] text-[13px] outline-0 py-1 px-3 leading-8 transition duration-300 ease-in-out"
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    {addressError && (
                                        <p className="text-center font-semibold text-sm text-red-500">{addressError}</p>
                                    )}
                                </div>

                                <button className="text-white bg-indigo-500 hover:bg-indigo-800 w-full px-4 py-2 rounded-md" type="submit">
                                    Register Doctor
                                </button>
                                {error && (<p className="text-center font-semibold text-sm text-red-500 my-1">{error}</p>)}
                                {success && (<p className="text-center font-semibold text-sm text-green-600 my-1">{success}</p>)}

                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );

}
