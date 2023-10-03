import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";


const SLayout = dynamic(() => import('../Layout/slayout'), {
    ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
    ssr: false,
})


export function ShowAllAdmin() {

    const deleteAdmin = (id) => {
        axios
            .delete(`http://localhost:8000/api/admin/delete/${id}`)

            .catch((error) => {
                console.error('Error deleting task:', error);
            });
    };

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'http://localhost:8000/api/admin/all';

        axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data); // Set the fetched data
                setIsLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading to false in case of an error
            });
    }, []);



    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    };
    const headerCellStyle = {
        backgroundColor: '#00008B',
    };
    const cellStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#000000',
        textColor: ''
    };

    return (
        <>
            <Title page="Super Admin Dashboard"> </Title>
            <SLayout>

                <div className="hover:bg-cyan-200  text-4xl text-center text-black bg-slate-200 p-2">
                    <h1> All Admin List </h1>
                </div>


            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={headerCellStyle}>Admin ID</th>
                            <th style={headerCellStyle}>First Name</th>
                            <th style={headerCellStyle}>Last Name</th>
                            <th style={headerCellStyle}>Gender</th>
                            <th style={headerCellStyle}>Phone</th>
                            <th style={headerCellStyle}>Email</th>
                            <th style={headerCellStyle}>Address</th>
                            <th style={headerCellStyle}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={cellStyle}>{item.id}</td>
                                <td style={cellStyle}>{item.first_name}</td>
                                <td style={cellStyle}>{item.last_name}</td>
                                <td style={cellStyle}>{item.gender}</td>
                                <td style={cellStyle}>{item.phone}</td>
                                <td style={cellStyle}>{item.email}</td>
                                <td style={cellStyle}>{item.address}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>{deleteAdmin(item.id)}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/*<div>*/}
            {/*    {isLoading ? (*/}
            {/*        <p>Loading...</p>*/}
            {/*    ) : (*/}
            {/*        <div>*/}
            {/*            /!* Display your fetched data here *!/*/}
            {/*            <pre>{JSON.stringify(data, null, 2)}</pre>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}

            </SLayout>

        </>
    );
}

export default ShowAllAdmin;
