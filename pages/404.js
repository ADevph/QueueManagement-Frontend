import Link from "next/link"
import Head from "next/head";
import { useRouter } from "next/router";

export default function NotFound404() {
    const router = useRouter();


    return (
        <>
            <Head>
                <title>404 | Page Not Found</title>
            </Head>
            <div className="flex flex-col p-4 justify-center items-center h-screen w-full">
                <h3 className="mt-2 text-[60px] font-bold text-[#2b4149] tracking-widest">404</h3>
                <span className="my-2 font-[500] text-[#2b4149] text-xl">Page Not Found</span>
                <button type="button" onClick={() => router.back()} className="mt-8 font-semibold text-base text-[#112b35] hover:text-[#4b7281]">
                    Back to Previous
                </button>
            </div>
        </>
    );
}
