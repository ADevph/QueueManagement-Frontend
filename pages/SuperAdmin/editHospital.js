import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';




const SLayout = dynamic(() => import('../Layout/slayout'), {
    ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
    ssr: false,
})


export function editHospital() {

    const router = useRouter();
    const { id } = router.query;


    return (
        <>
            <Title page="Super Admin Dashboard"> </Title>
            <SLayout>


                <div>
                    <h1>Edit Hospital</h1>
                    <p>ID: {id}</p>
                    {/* You can use 'id' in your component as needed */}
                </div>


            </SLayout>
        </>
    )
}
export default editHospital;