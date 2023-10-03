import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

function DocSearch() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchDocList, setSearchDocList] = useState([]);

  const onSubmit = async () => {
    if (!search) {
      setSearchError("Search by doctor name is required.");
      return;
    }

    try {
      const storeUser = JSON.parse(localStorage.getItem("user"));
      const token = storeUser.token;

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/search/active",
        {
          query: search,
        }
      );

      setSearchDocList(response.data.doctors);
      console.log(response.data.doctors);
    } catch (error) {
      console.error("Error while fetching search results:", error);
    }
  };

  const handleAppointmentClick = async (doctorId) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create/appointment",
        {
          patient_id: userId,
          doctor_id: doctorId,
        }
      );
     console.log("appoinment created");
    } catch (error) {
      console.error("Error while creating an appointment:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            name="search"
            {...register("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Go</button>
          <br />
          {searchError && <p>{searchError}</p>}
        </div>
      </form>
      <hr />
      <div>
        {searchDocList.length > 0 ? (
          <ul>
            {searchDocList.map((doctor, index) => (
              <li key={index}>
                <p>
                  Doctor Name: {doctor.first_name} {doctor.last_name}
                </p>
                <p>Gender: {doctor.gender}</p>
                <p>Specialist: {doctor.specialization}</p>
                <p>Hospital: {doctor.hospitalname}</p>
                <p>Location: {doctor.location}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleAppointmentClick(doctor.id);
                  }}
                >
                  Appointment
                </button>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No search results found.</p>
        )}
      </div>
    </div>
  );
}

export default DocSearch;
