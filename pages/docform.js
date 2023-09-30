import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import http from '../http'; // Assuming you have an http utility for making API requests

const DoctorForm = () => {
  const router = useRouter();
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialization: '',
    description: '', // Assuming you need to associate doctors with clinics
  });

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await http.post('/doctors', doctorData);
      router.push('/docdashboard'); // Redirect to doctor dashboard after successful submission
    } catch (error) {
      console.error('Error occurred while adding doctor:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Doctor's Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctorData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={doctorData.specialization}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
           Doctor Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={doctorData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
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






// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// // import http from '../http'; // Assuming you have an http utility for making API requests

// const DoctorForm = () => {
//   const router = useRouter();
//   const [doctorData, setDoctorData] = useState({
//     name: '',
//     specialization: '',
//     description: '', // Assuming you need to associate doctors with clinics
//     schedule: {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: '',
//       saturday: '',
//       sunday: '',
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('schedule.')) {
//       // If it's a schedule field, update the nested state
//       setDoctorData({
//         ...doctorData,
//         schedule: {
//           ...doctorData.schedule,
//           [name.split('.')[1]]: value,
//         },
//       });
//     } else {
//       // If it's a regular field, update the main state
//       setDoctorData({ ...doctorData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await http.post('/doctors', doctorData);
//       router.push('/docdashboard'); // Redirect to doctor dashboard after successful submission
//     } catch (error) {
//       console.error('Error occurred while adding doctor:', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">Add Doctor</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//             Doctor's Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={doctorData.name}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">
//             Specialization
//           </label>
//           <input
//             type="text"
//             id="specialization"
//             name="specialization"
//             value={doctorData.specialization}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-600">
//             Clinic ID
//           </label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={doctorData.description}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">Schedule</label>
//           <div className="grid grid-cols-2 gap-4">
//             {Object.keys(doctorData.schedule).map((day) => (
//               <div key={day}>
//                 <label htmlFor={`schedule.${day}`} className="text-sm text-gray-600 block mb-1">
//                   {day.charAt(0).toUpperCase() + day.slice(1)}
//                 </label>
//                 <input
//                   type="text"
//                   id={`schedule.${day}`}
//                   name={`schedule.${day}`}
//                   value={doctorData.schedule[day]}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-6">
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//             Add Doctor
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DoctorForm;
