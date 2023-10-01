import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#fffbf6] to-[#fffcf9] h-fit">
                <div className="m-auto px-6 py-3 flex flex-col justify-between items-center">
                    <div className="w-full mt-8 flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-4">
                        <div className="flex md:flex-row flex-col md:pl-24 md:pr-8 px-8 md:justify-evenly justify-center items-center md:gap-10 gap-4">
                            <Link href="#"><h3 className="text-[14px] font-[500] text-gray-900 block">Terms of services</h3></Link>
                            <Link href="#"><h3 className="text-[14px] font-[500] text-gray-900 block">Privacy policy</h3></Link>
                        </div>

                        <div className="flex md:pl-8 md:pr-24 px-8 justify-evenly items-center gap-10">
                            <Link href="#"><Image src="https://img.icons8.com/material-rounded/48/facebook-new.png" alt="facebook-new" width="30" height="30" className="filter hover:drop-shadow-[0_2px_3px_rgba(120,120,120,0.90)] transition duration-300" /></Link>
                            <Link href="#"><Image src="https://img.icons8.com/material-rounded/48/instagram-new.png" alt="instagram-new" width="30" height="30" className="filter hover:drop-shadow-[0_2px_3px_rgba(120,120,120,0.90)] transition duration-300" /></Link>
                            <Link href="#"><Image src="https://img.icons8.com/material-rounded/48/youtube-play.png" alt="youtube-play" width="30" height="30" className="filter hover:drop-shadow-[0_2px_3px_rgba(120,120,120,0.90)] transition duration-300" /></Link>
                        </div>
                    </div>
                    <hr className="border-gray-300 w-11/12 mt-9" />
                    <p className="mt-2 mb-2 text-[11px] font-[400] text-gray-900">&copy; {new Date().getFullYear()} QM | All rights reserved.</p>
                </div>
            </div>
        </>
    );
}
