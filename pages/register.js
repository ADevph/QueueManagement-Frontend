import Layout from "./components/layout";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setFirstNameError("");
    setLastNameError("");
    setGenderError("");
    setEmailError("");
    setPhoneError("");
    setConfirmPasswordError("");
    setPasswordError("");
    setAddressError("");

    if (!firstName) {
      setFirstNameError("Enter Your First Name");
      setLoading(false);
      return;
    }
    //   const firstNamePattern = /^[A-Za-z0-9 ]{1,20}$/;
    // if (!firstNamePattern.test(firstName)) {
    //   setFirstNameError("First name can only contain letters, numbers, and spaces. Maximum length is 20 characters.");
    //   setLoading(false);
    //   return;
    // }

    if (!lastName) {
      setLastNameError("Enter Your Last Name");
      setLoading(false);
      return;
    }
    if (!phone) {
      setPhoneError("Enter Your Phone Number");
      setLoading(false);
      return;
    }
    if (!gender) {
      setGenderError("Select Your Gender");
      setLoading(false);
      return;
    }
    if (!email) {
      setEmailError("Enter Your Email");
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
    if (password !== confirmPassword) {
      setConfirmPasswordError("Confirm Password Should be same as Password");
      setLoading(false);
      return;
    }
    if (!address) {
      setAddressError("Enter Your Address");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/patient/registration',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          gender: data.gender,
          email: data.email,
          password: data.password,
          confirm_password: data.confirmPassword,
          address: data.address
        }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      if (response.data.message == "Registration successful. Please verify your email") {
        setError("");
        setSuccess("Registration successful<br />Please verify your email");
        reset();
        setTimeout(() => {
          router.push('/login');
        }, 4000);
      } else if (response.data.message == "Registration is successful but verification email is not sent" || response.data.message == "Registration failed") {
        setSuccess("");
        setError(response.data.message);
      } else {
        setSuccess("");
        setError("Registration failed. Try again with valid information");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>

      <Layout title="Registration - Medical Service">
        <section className="flex justify-center">
          <div className="flex flex-col justify-center items-center w-full min-h-screen max-w-[1600px] py-[75px]">
            <h4 className="my-[20px] block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Sign Up
            </h4>
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
                    placeholder="Enter your First name"
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
                    placeholder="Enter your Last name"
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
                    pattern="^(\+880|0)(1[3-9]\d{8})$"
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
                    placeholder="Enter Your Password"
                    className="input-field bg-blue-100 p-1 rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!.@>#$%^&*+-_<?])[a-zA-Z\d~!.@>#$%^&*+-_<?]{8,}$"
                    title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
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
                    placeholder=" Confirm Your Password"
                    className="input-field bg-blue-100 p-1 rounded-lg"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordError && (
                    <p className="text-center font-semibold text-sm text-red-500">{confirmPasswordError}</p>
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
                    placeholder="Enter Your Address"
                    className="w-full rounded-lg bg-blue-100 border-2 border-gray-400 focus:border-indigo-600 focus:caret-indigo-500 font-[600] text-[13px] outline-0 py-1 px-3 leading-8 transition duration-300 ease-in-out"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {addressError && (
                    <p className="text-center font-semibold text-sm text-red-500">{addressError}</p>
                  )}
                </div>

                <button className="text-white bg-indigo-500 hover:bg-indigo-800 w-full px-4 py-2 rounded-md" type="submit">
                  Register
                </button>
                {error && (<p className="text-center font-semibold text-sm text-red-500 my-1">{error}</p>)}
                {success && (<p className="text-center font-semibold text-sm text-green-600 my-1">{success}</p>)}

                <p className="mt-4 text-center font-semibold text-sm text-black">Already have an account?
                  <Link href="/login" className="text-indigo-500 hover:text-blue-800"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
