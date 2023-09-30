import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from './layout/layout';
import Link from 'next/link';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [errormsg, setErrormsg] = useState('');
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login',
                {
                    email: data.email,
                    password: data.password
                }, {
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.data == "invalid credentials") {
                setErrormsg(response.data);
            } else {
                //write code to set cookies
                console.log(response.data);
                router.push('/');
            }
        } catch (error) {
            console.error(error);
            setErrormsg("something went wrong!");
        }
    };

    return (
        <>

            <Layout title="Login - Queue Management">
                <section className="bg-cover bg-center bg-[url('/apple_bg.jpg')]">
                    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-black bg-opacity-60">
                        <div className='flex w-full mt-[100px] justify-center'>
                            <h1 className="text-2xl font-semibold text-neutral-50">Login</h1>
                        </div>
                        <div className="bg-slate-100 w-80 h-fit p-8 border rounded-md shadow-lg mt-4 mb-[70px] mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
                                <div className='flex flex-col'>

                                    <div className="relative h-fit w-full">
                                        <input type="email" id="email" placeholder="" {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} className="peer text-[13px] leading-6 text-gray-700 w-full p-2 mb-2 rounded-md bg-transparent font-sans font-normal outline outline-0 transition-all border-2 border-t-transparent border-gray-200 focus:border-indigo-500 focus:border-t-transparent disabled:border-0" />
                                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-bold leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:font-bold peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                            Email
                                        </label>
                                    </div>
                                    {
                                        errors.email &&
                                        <div className="flex items-center justify-center w-full h-fit overflow-hidden">
                                            {
                                                errors.email.type === 'required' ?
                                                    <p className="font-semibold text-red-700 text-[12px] leading-4 pb-2">email is required</p>
                                                    :
                                                    <p className="font-semibold text-red-700 text-[12px] leading-4 pb-2">please enter a valid email</p>
                                            }
                                        </div>
                                    }

                                    <div className='py-1 flex items-center justify-end w-full my-1'>
                                        <Link href="#" className='font-semibold text-sm text-indigo-600 block'>Forgot password?</Link>
                                    </div>
                                    <div className="relative h-fit w-full">
                                        <input type="password" id="password" placeholder="" {...register('password', { required: true })} className="peer text-[13px] leading-6 text-gray-700 w-full p-2 mb-2 rounded-md bg-transparent font-sans font-normal outline outline-0 transition-all border-2 border-t-transparent border-gray-200 focus:border-indigo-500 focus:border-t-transparent disabled:border-0" />
                                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-bold leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:font-bold peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                            Password
                                        </label>
                                    </div>
                                    {
                                        errors.password &&
                                        <div className="flex items-center justify-center">
                                            <p className="font-semibold text-red-700 text-[12px] leading-4 pb-3">password is required</p>
                                        </div>
                                    }

                                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 mt-6 transition-all w-full text-white text-[16px] font-bold py-2 px-4 rounded-md">Login</button>
                                    {
                                        errormsg &&
                                        <div className="flex items-center justify-center w-full h-fit overflow-hidden">
                                            <p className="font-semibold text-red-700 text-[12px] leading-4 py-2">{errormsg}</p>
                                        </div>
                                    }
                                    <div className='flex w-full mt-4 justify-center'>
                                        <h4 className='font-semibold text-sm text-gray-700 py-2'>Don&apos;t have an account?&nbsp;&nbsp;<Link href="/signup" className='text-indigo-600'>Sign up</Link></h4>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
