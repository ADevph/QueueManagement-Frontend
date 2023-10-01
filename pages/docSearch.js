import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

function DocSearch() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const onSubmit = async () => {
    try {
      //axios request by search.......
    //   const response = await axios.post(`api/${search}`,{
    //     userid
    //   });
      setSearchList(response.data);
    } catch (error) {

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
      <hr></hr>
      <div>
        {searchList.length > 0 ? (
          <ul>
            {searchList.map((result, index) => (
              <li key={index}>{result}</li>
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
