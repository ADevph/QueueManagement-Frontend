import React, { useState, useEffect } from 'react';
// import http from '../http'; // Assuming you have an http utility for making API requests

const DocDashboard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchAllDoctors();
  }, []);

  const fetchAllDoctors = () => {
    http.get('/doctors').then((res) => {
      setDoctors(res.data);
    });
  };

  const deleteDoctor = (id) => {
    http.delete(`/doctors/${id}`).then((res) => {
      fetchAllDoctors();
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-4">All Doctors</h1>
      <hr className="font-extrabold p-2" />
      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Action</th>
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
