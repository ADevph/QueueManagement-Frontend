import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

function DocSearch() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState({ hospitals: [], doctors: [], users: [] });

  const onSubmit = async () => {
    try {
      var storeUser = JSON.parse(localStorage.getItem('user'));
      let token = storeUser.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post("http://127.0.0.1:8000/api/search/active", {
        query: search,
      }, config);

      setSearchList(response.data);
      console.log(response.data);

    } catch (error) {
      console.error("Error while fetching search results:", error);
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
        </div>
      </form>
      <hr />
      <div>
        {(searchList.hospitals.length > 0 || searchList.doctors.length > 0 || searchList.users.length > 0) ? (
          <div>
            <h2>Hospitals</h2>
            <ul>
              {searchList.hospitals.map((hospital, index) => (
                <li key={index}>
                  {hospital.hospitalname}, {hospital.location}
                </li>
              ))}
            </ul>

            <h2>Doctors</h2>
            <ul>
              {searchList.doctors.map((doctor, index) => (
                <li key={index}>{doctor.specialization}</li>
              ))}
            </ul>

            {/* Uncomment this section if you want to display user results */}
            {/* <h2>Users</h2>
            <ul>
              {searchList.users.map((user, index) => (
                <li key={index}>
                  {user.first_name} {user.last_name}, {user.address}, {user.email}
                </li>
              ))}
            </ul> */}
          </div>
        ) : (
          <p>No search results found.</p>
        )}
      </div>
    </div>
  );
}

export default DocSearch;
