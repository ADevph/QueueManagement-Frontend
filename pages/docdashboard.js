import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

function DocDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchAllDoctors();
    setMsg("");
  }, []);

  const fetchAllDoctors = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const userId = userData.id;
      const token = userData.token; 

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.get(`http://127.0.0.1:8000/api/view/appointment/${userId}`);
      setDoctors(response.data);
    } catch (error) {
      console.error("Error while fetching doctors:", error);
    }
  };

  const next = async (id) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/sms/notification/${id}`);
      if (response.data.message === "SMS send Successfully.") {
        setMsg("Notification send");
      } else {
        setMsg("Notification send failed");
      }
    } catch (error) {
      console.error("Error while sending notification:", error);
      setMsg("Try again");
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-4"> Doctors Dashboard</h1>
      <hr className="font-extrabold p-2" />
      <p>{msg}</p> {/* Display the message here */}
      <table className="table">
        <thead>
          <tr>
            <th className="text-white">Serial</th>
            <th className="text-white">Name</th>
            <th className="text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{++index}</td>
              <td>{doctor.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    next(doctor.id);
                  }}
                >
                  Next
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocDashboard;
