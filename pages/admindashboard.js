import React, { useState, useEffect } from 'react';
// import http from '../http'; // Assuming you have an http utility for making API requests

const AdminDashboard = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    fetchAllClinics();
  }, []);

  const fetchAllClinics = () => {
    http.get('/clinics').then((res) => {
      setClinics(res.data);
    });
  };

  const deleteClinic = (id) => {
    http.delete(`/clinics/${id}`).then((res) => {
      fetchAllClinics();
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-4">All Clinics</h1>
      <hr className="font-extrabold p-2" />
      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clinics.map((clinic, index) => (
            <tr key={clinic.id}>
              <td>{++index}</td>
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteClinic(clinic.id);
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

export default AdminDashboard;
