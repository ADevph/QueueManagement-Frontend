import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

function DocDashboard(){
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchAllDoctors();
  }, []);

  const fetchAllDoctors = () => {
    // http.get('/doctors').then((res) => {
      // setDoctors(res.data);
    // });
  };


const deleteDoctor = async (id) => {
  try {
    // const response = await axios.delete(`/api/doctors/${id}`);

    if (response.status === 200) {
      console.log("Doctor deleted successfully");
    } else {
      console.error("Failed to delete doctor.");
    }
  } catch (error) {
    console.error("Error deleting doctor:", error);
  }
};


  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-4">All Doctors</h1>
      <hr className="font-extrabold p-2" />
      <table className="table">
        <thead>
        <tr>
        <th className="text-white">Serial</th>
        <th className="text-white">Name</th>
        <th className="text-white">Specialization</th>
        <th className="text-white">Action</th>
        </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{++index}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteDoctor(doctor.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocDashboard;
