
import Layout from "./Layout/layout";
import Title from "./Layout/title";
import Link from "next/link";

// import { useState, useEffect } from 'react';
// import axios from 'axios';

export default function RegisterPage () {

//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState('');



  
//   useEffect(() => {
//     setFullName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setPhone('');
//     setFile(null);
//     setError('');
//   }, []);


//   const handleChangeFullName = (e) => {
//     setFullName(e.target.value);
//   };

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleChangeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleChangePhone = (e) => {
//     setPhone(e.target.value);
//   };


//   const handleChangeFile = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!fullName || !email || !password || !confirmPassword || !phone || !file) {
//       console.log(fullName, email, password, confirmPassword, phone, file);
//       setError('All fields are required');
//     } else if (password !== confirmPassword) {
//       setError('Passwords do not match');
//     } else {
     
//     try {
//       postData()
//       setError("user created successfully");
//     } catch (e) {
//       setError(e);
//     }
//       setFullName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//       setPhone('');
//       setFile(null);
//       setError('');
//     }
//   };

//   async function postData() {
//    try {
//      const formData = new FormData();
//      formData.append('name', fullName);
//      formData.append('email', email);
//      formData.append('password', password);
//      formData.append('phone', phone);
//      formData.append('image', document.querySelector('#myfile').files[0]);
//     console.log(formData);
//      const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/student/signup/', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//     }
//      });
    

//      const data = response.data;
//      console.log(data);
//      } catch (error) {
//      console.error(error);
//      }
//     }

  return (
    <>

     <Title page="Registration"> </Title>

  <Layout>

  <div className="flex items-center justify-center h-screen">
  <div className="relative flex flex-col items-center justify-center rounded-xl bg-white shadow-md p-8 w-128">
    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Sign Up
  </h4>
  <p className="mt-1 mb-6 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    Enter your details to register.
  </p>


    <div className="mb-4 w-full">
      <label className="font-semibold text-xl text-black">First Name</label>
      <input type="text" name="fullName" placeholder="Enter your First name" className="input-field bg-blue-100 ml-8 p-1 rounded-lg" />
    </div>
    <div className="mb-4 w-full">
      <label className="font-semibold text-xl text-black">Last Name</label>
      <input type="text" name="fullName" placeholder="Enter your Last name" className="input-field bg-blue-100 ml-8 p-1 rounded-lg" />
    </div>


<div className="mb-4 w-full flex items-center">
  <div className="text-xl text-black font-semibold mr-2">Phone : +88</div>
  <input type="tel" name="phone" placeholder="" className="input-field bg-blue-100 ml-2 p-1 rounded-lg" />
</div>

<div className="mb-4 w-full flex items-center">
  <label className="font-semibold text-xl text-black mr-10">Gender</label>
  <div className="flex items-center space-x-8">
    <label className="flex items-center">
      <input type="radio" name="gender" value="male" className="mr-2" />
      Male
    </label>
    <label className="flex items-center">
      <input type="radio" name="gender" value="female" className="mr-2" />
      Female
    </label>
  </div>
</div>


    <div className="mb-4 w-full">
      <label className="font-semibold text-xl text-black">Email</label>
      <input type="email" name="email" placeholder="john.doe@example.com" className="input-field bg-blue-100 ml-14 p-1 rounded-lg" />
    </div>
    <div className="mb-4 w-full">
      <label className="font-semibold text-xl text-black">Password</label>
      <input type="password" name="password" placeholder="Enter Your Password" className="input-field bg-blue-100 ml-5 p-1 rounded-lg" />
    </div>
    <div className="mb-4 w-full">
      <label className="font-semibold text-xl text-black">Confirm Password</label>
      <input type="password" name="confirmPassword" placeholder=" Confirm Your Password" className="input-field bg-blue-100 ml-2 p-1 rounded-lg" />
    </div>
  
    <button className="btn btn-outline btn-secondary" type="submit">Register</button>
    <p className="mt-4 text-center font-semibold text-xl text-black">
      Already have an account?
      <Link className="text-pink-500 hover:text-blue-700" href="loginform" > Sign In </Link>
    </p>
  </div>
</div>


      </Layout>
    </>
  );
};

