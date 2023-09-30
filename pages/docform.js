import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

const DoctorForm = () => {
  const router = useRouter();
  const [docName, setDocName] = useState("");
  const [docNameError, setDocNameError] = useState("");
  const [specilization, setSpecilization] = useState("");
  const [specilizationError, setSpecilizationError] = useState("");
  const [docDescription, setDocDescription] = useState("");
  const [docDescriptionError, setDocDescriptionError] = useState("");
  const { handleSubmit } = useForm();

  useEffect(() => {
    ////page Validation Logic Should be here.................
  }, []);

  const onSubmit = async () => {
    if (!docName) {
      setDocNameError("Enter the Doctor's Name");
      return;
    }
    if (!specilization) {
      setSpecilizationError("Enter the Specialization");
      return;
    }
    if (!docDescription) {
      setDocDescriptionError("Enter the Doctor's Description");
      return;
    }

    try {
      // You can add your Axios POST request here
      // await axios.post('/your-api-endpoint', {
      //   docName,
      //   specilization,
      //   docDescription,
      // });

      // Redirect or perform other actions after successful submission
      console.log("Form submitted successfully!");
      router.push("/docdashboard");
    } catch (error) {
      console.error('Error occurred while adding doctor:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Doctor's Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setDocName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
          {docNameError && (
            <p className="text-black">{docNameError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            onChange={(e) => setSpecilization(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
          {specilizationError && (
            <p className="text-black">{specilizationError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Doctor Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => setDocDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
          {docDescriptionError && (
            <p className="text-black">{docDescriptionError}</p>
          )}
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
