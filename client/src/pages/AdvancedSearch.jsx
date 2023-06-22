import React from "react";

const FormPage = () => {
  return (
    <div className="container mx-auto p-4">
      <form className="mt-4">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow border-[1px]">
          <form className="space-y-4">
            <h1 className="text-4xl font-bold text-[#414141]">Advanced Search</h1>
            <p className="text-gray-600 my-2">
              You can perform advanced search using the form below
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
              <div className="flex items-center">
                <label htmlFor="tkid" className="w-full md:w-1/4">
                  TKID:
                </label>
                <input
                  id="tkid"
                  name="tkid"
                  type="text"
                  placeholder="Enter TKID"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="keywords" className="w-full md:w-1/4">
                  Keywords:
                </label>
                <input
                  id="keywords"
                  name="keywords"
                  type="text"
                  placeholder="Enter Keywords"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="tenderNo" className="w-full md:w-1/4">
                  Tender No:
                </label>
                <input
                  id="tenderNo"
                  name="tenderNo"
                  type="text"
                  placeholder="Enter Tender No"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="location" className="w-full md:w-1/4">
                  Location:
                </label>
                <select
                  id="location"
                  name="location"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  <option value="">All Locations</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="GoaGujarat">GoaGujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Multi State">Multi State</option>
                  <option value="Nagal">Nagal</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>

                </select>
              </div>

              <div className="flex items-center">
                <label htmlFor="organization" className="w-full md:w-1/4">
                  Organization:
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Enter Organization"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="contractType" className="w-full md:w-1/4">
                  Form Of Contract:
                </label>
                <select
                  id="contractType"
                  name="contractType"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  <option value="">Please select Contract type</option>
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className="flex items-center">
                <label htmlFor="minValue" className="w-full md:w-1/4">
                  Tender Min Value:
                </label>
                <input
                  id="minValue"
                  name="minValue"
                  type="text"
                  placeholder="Enter Tender Min Value"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="maxValue" className="w-full md:w-1/4">
                  Tender Max Value:
                </label>
                <input
                  id="maxValue"
                  name="maxValue"
                  type="text"
                  placeholder="Enter Tender Max Value"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="portal" className="w-full md:w-1/4">
                  Portal:
                </label>
                <select
                  id="portal"
                  name="portal"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  <option value="">All Portals</option>
                  <option value="">GeM</option>
                  <option value="">Railway</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-red-700 text-white rounded  focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                Search
              </button>
              <button
                type="reset"
                className="ml-4 px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
};

export default FormPage;


// import React from 'react';

// const options = {
//   // Options for Region or Country
//   regionOrCountry: [
//     { label: 'Africa', value: 'Africa' },
//     { label: 'All Africa', value: 'All Africa' },
//     // Add more options...
//   ],
//   // Options for Sectors
//   sectors: [
//     { label: 'Agriculture and Food', value: 'Agriculture and Food' },
//     { label: 'Computer Hardware and Software Services', value: 'Computer Hardware and Software Services' },
//     // Add more options...
//   ],
//   // Options for Financier
//   financiers: [
//     { label: 'Select Financier', value: '' },
//     { label: 'All Financiers', value: 'All Financiers' },
//     // Add more options...
//   ],
// };

// const FormPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Advance Search</h1>
//       <p className="text-gray-600 mt-2">You can perform advanced search using the form below</p>

//       <form className="mt-4">
//         <div className="mb-4">
//           <label htmlFor="totRefNo" className="block font-bold mb-2">
//             TOT Ref. No.
//           </label>
//           <input
//             type="text"
//             id="totRefNo"
//             placeholder="Tenders On Time Reference Number"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="docRefNo" className="block font-bold mb-2">
//             Doc Ref. No.
//           </label>
//           <input
//             type="text"
//             id="docRefNo"
//             placeholder="Document Reference Number"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="regionOrCountry" className="block font-bold mb-2">
//             Region or Country
//           </label>
//           <select
//             id="regionOrCountry"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           >
//             {options.regionOrCountry.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="sectors" className="block font-bold mb-2">
//             Sectors
//           </label>
//           <select
//             id="sectors"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           >
//             {options.sectors.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="cpvNumber" className="block font-bold mb-2">
//             Products or CPV Number
//           </label>
//           <input
//             type="text"
//             id="cpvNumber"
//             placeholder="Enter Products or CPV Number"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="financiers" className="block font-bold mb-2">
//             Financier
//           </label>
//           <select
//             id="financiers"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           >
//             {options.financiers.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="publishDate" className="block font-bold mb-2">
//             Publish Date
//           </label>
//           <input
//             type="date"
//             id="publishDate"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="closingDate" className="block font-bold mb-2">
//             Closing Date
//           </label>
//           <input
//             type="date"
//             id="closingDate"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-700 focus:border-red-700"
//           />
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-red-700 text-white px-4 py-2 rounded-md  focus:outline-none focus:bg-red-600"
//           >
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormPage;
