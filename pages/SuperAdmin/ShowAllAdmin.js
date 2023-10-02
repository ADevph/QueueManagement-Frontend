import { useRouter } from 'next/router';

function ShowAllAdmin() {
    const router = useRouter();
    const { data } = router.query;

    // Parse the JSON data if it's available
    const responseData = data ? JSON.parse(data) : null;

    return (
        <div>
            <h1>Show All Admins</h1>
            {responseData ? (
                <ul>
                    {responseData.map((admin, index) => (
                        <li key={index}>
                            <strong>Firstname:</strong> {admin.firstName}<br />
                            <strong>Lastname:</strong> {admin.lastName}<br />
                            <strong>Gender:</strong> {admin.gender}<br/>
                            <strong>Phone:</strong> {admin.phone}<br />
                            <strong>Email:</strong> {admin.email}<br />
                            <strong>Address:</strong> {admin.address}<br/>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ShowAllAdmin;
