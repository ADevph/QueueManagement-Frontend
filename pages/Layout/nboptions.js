import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import { UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

export default function NavBarOptions() {
    const [patient, setPatient] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            //write code to check if user is logged in using jwt token

        }
    }, []);

    const [clicked, setClicked] = useState(false);

    const handleMouseClick = () => {
        setClicked(!clicked);
    };

    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:8000/api/logout')
            console.log(response.data);
            //write code to clear cookies
            setPatient(null);
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {
                patient !== null ? (
                    <div className='flex md:flex-row flex-col md:justify-evenly justify-center items-center md:gap-10 gap-4'>
                        <div className="relative flex">
                            <button className="flex justify-center group" onClick={handleMouseClick}>
                                <UserCircleIcon className="h-6 w-6 text-gray-900 hover:text-indigo-700 transition duration-300" />
                            </button>
                            {clicked && (
                                <>
                                    <button tabIndex={-1} onClick={handleMouseClick} className="fixed inset-0 w-full h-screen -z-[5] cursor-default"></button>
                                    <div className="flex flex-col justify-center items-start absolute px-5 py-5 z-[5] top-[30px] right-[8px] rounded-[8px] bg-indigo-100 h-fit w-[180px] font-[500] text-gray-900 shadow-lg shadow-gray-300 space-y-4">
                                        <Link href="#" className="text-[15px] hover:text-indigo-700 transition duration-200">Profile</Link>
                                        <Link href="#" className="text-[15px] hover:text-indigo-700 transition duration-200">Change Password</Link>
                                        <Link href="#" className="text-[15px] hover:text-indigo-700 transition duration-200">Settings</Link>
                                        <button className="flex justify-center items-center group" onClick={handleLogout}>
                                            <span className="text-[15px] group-hover:text-indigo-700 transition duration-200 cursor-pointer">Logout</span>
                                            <ArrowRightOnRectangleIcon className="h-4 w-4 ml-1 group-hover:text-indigo-700 transition duration-200" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center md:gap-10 gap-4 text-[15px]">
                        <Link href="/" className="hover:text-indigo-700 transition duration-200">Home</Link>
                        <Link href="/register" className="hover:text-indigo-700 transition duration-200">Sign Up</Link>
                        <Link href="/login"><button className="flex justify-center items-center w-fit h-fit text-white bg-indigo-700 border-0 py-2 px-6 transition duration-200 hover:bg-indigo-900 rounded-[24px]">Login</button></Link>
                    </div>
                )
            }
        </>
    );
}
