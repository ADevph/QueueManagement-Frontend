import Image from "next/image";
import Link from "next/link";
import Layout from "./components/layout";



export default function Home() {
  return (
    <>

      <Layout title="Home - Queue Management">
        <section className="flex justify-center">
          <div className="flex flex-col justify-center items-center w-full max-w-[1600px] min-h-screen pt-[75px] pb-[50px]">
            <div className="text-4xl text-center text-black p-2">
              <h1> Welcome Here! </h1>
            </div>

            <div className="mt-4 flex items-center justify-center w-full">
              <Image src="/q.png" alt="image" width={200} height={200} className="object-cover origin-center" />
            </div>
          </div>
        </section>
      </Layout>

    </>

  )

}
