import Link from "next/link";
import dynamic from "next/dynamic";

const SLayout = dynamic(() => import('../Layout/slayout'), {
    ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
    ssr: false,
})

export default function Home( ) {
    return (
        <>
            <Title page="Super Admin Dashboard"> </Title>
            <SLayout>

            <div className="hover:bg-cyan-200  text-4xl text-center text-black bg-slate-200 p-2">
                <h1> Welcome Super Admin! </h1>
            </div>

            <div className="mt-4 flex items-center justify-center">

                <img src="../q.png" className=""></img>

            </div>
            <br></br>
            <br></br>


            <div className=" flex items-center justify-center gap-10 p-4">
                <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="registerdoctor" > New Doctor Register </Link>
                <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="registerhospital" > New Hospital Register </Link>
                <Link className="btn btn-outline bg-sky-100  hover:bg-blue-500" href="registerAdmin" > Admin Register </Link>

            </div>



            </SLayout>



        </>

    )

}




