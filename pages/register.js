import Layout from "./components/layout";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

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
  const [error, setError] = useState("");
  const router = useRouter();
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    setFirstNameError("");
    setLastNameError("");
    setGenderError("");
    setEmailError("");
    setPhoneError("");
    setConfirmPasswordError("");
    setPasswordError("");

    if (!firstName) {
      setFirstNameError("Enter Your First Name First");
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
      setGenderError("Enter Your Gender");
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
    try {
      //const response = await.axios.post......................


      console.log("Success");
    } catch (error) {
      setError(error);
      setLoading(false);
      return;
    }
  };

  return (
    <>

      <Layout title="Registration - Queue Management">
        <section className="flex justify-center">
          <div className="flex flex-col justify-center items-center w-full min-h-screen max-w-[1600px] py-[75px]">
            <h4 className="my-[20px] block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Sign Up
            </h4>
            <div className="relative flex items-center justify-center rounded-xl bg-white shadow-md p-8 w-fit">

              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mb-4">
                  <label className="font-semibold text-xl text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your First name"
                    className="input-field bg-blue-100 p-1 rounded-lg"
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
                    name="lastName"
                    placeholder="Enter your Last name"
                    className="input-field bg-blue-100 p-1 rounded-lg"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {lastNameError && (
                    <p className="text-red-500">{lastNameError}</p>
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
                    className="input-field bg-blue-100 p-1 rounded-lg"
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
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    className="input-field bg-blue-100 p-1 rounded-lg"
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
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input-field bg-blue-100 p-1 rounded-lg"
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
                    className="input-field bg-blue-100 p-1 rounded-lg"
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
                  Register
                </button>
                {error && (<p className="text-red-500">{error}</p>)}

                <p className="mt-4 text-center font-semibold text-xl text-black">
                  Already have an account?
                  <a href="/login" className="text-pink-500 hover:text-blue-700">Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}