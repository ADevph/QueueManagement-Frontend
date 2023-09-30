import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const ClinicForm = () => {
  const [clinicData, setClinicData] = useState({
    name: '',
    address: '',
    googleMapsLocation: '',
  });

  const handleChange = (e) => {
    setClinicData({ ...clinicData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await http.post('/clinics', clinicData);
      router.push('/admindashboard'); // Redirect to admin dashboard after successful submission
    } catch (error) {
      console.error('Error occurred while adding clinic:', error);
    }
  };

  return (

    
    <div className="max-w-full mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">

<div className="navbar-start ">
  <img src="/q.png" alt="Logo" class="h-24 w-32 mr-2"></img>
    <Link href="/" className=" normal-case text-2xl  ">Queue<span className=" text-blue-800 text-4xl ">Management</span></Link> 
  </div>

      <h2 className="text-2xl font-semibold mb-4">Add Clinic</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Clinic Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={clinicData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={clinicData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="googleMapsLocation" className="block text-sm font-medium text-gray-600">
            Google Maps Location
          </label>
          <input
            type="text"
            id="googleMapsLocation"
            name="googleMapsLocation"
            value={clinicData.googleMapsLocation}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Add Clinic
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClinicForm;
