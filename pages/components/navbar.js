import Image from "next/image";
import Link from "next/link";
import NavBarOptions from "./nboptions";

export default function NavigationBar() {

    return (
        <>
            <div className="fixed z-[100] top-0 left-0 bg-white bg-opacity-95 backdrop-filter backdrop-blur-md h-[75px] w-full">
                <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto px-10 py-2">
                    <div className="flex justify-center items-center px-2">
                        <Link href="/" className="flex items-center justify-center">
                            <Image src="/q.png" alt="Logo" width={45} height={45} className="mr-3 object-cover origin-center" />
                            <span className="text-gray-700 text-[20px] font-semibold">Queue&nbsp;</span><span className="text-indigo-700 text-[20px] font-semibold">Management</span>
                        </Link>
                    </div>
                    <div className="font-semibold text-[15px] text-gray-900 mr-2 flex md:flex-row flex-col md:justify-evenly justify-center items-center md:gap-10 gap-4">
                        <Link href="/" className="hover:text-indigo-700 transition duration-200">Home</Link>
                        <NavBarOptions />
                    </div>
                </div>
            </div>
        </>
    );
}
