import { useRouter } from 'next/router';

function ShowAllDoctor() {
    const router = useRouter();
    const { data } = router.query;

    // Parse the JSON data if it's available
    const responseData = data ? JSON.parse(data) : null;

    return (
        <div>
            <h1>Show All Doctor</h1>
            {responseData ? (
                <ul>
                    {responseData.map((admin, index) => (
                        <li key={index}>
                            <strong>Firstname:</strong> {admin.firstName}<br />
                            <strong>Lastname:</strong> {admin.lastName}<br />
                            <strong>Gender:</strong> {admin.gender}<br/>
                            <strong>Phone:</strong> {admin.phone}<br />
                            <strong>Email:</strong> {admin.email}<br />
                            <strong>Specialization:</strong> {admin.specialization}<br/>
                            <strong>Description:</strong> {admin.description}<br/>
                            <strong>Hospital Id:</strong> {admin.hospitalid}<br/>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ShowAllDoctor;
