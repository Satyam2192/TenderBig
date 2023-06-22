import React, { useState, useEffect } from "react";
import axios from "axios";

function DashboardCard07() {


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/apiTender/userdetails/allusers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6ImFkbWluIiwidXNlclJvbGUiOiJhZG1pbiIsIm5hbWUiOiJtYXJpYV9kZXYifSwiaWF0IjoxNjg3MzYwMDc5fQ.wO9YRs2R7o-6UTyQ8JqFt0rDmRkbCB0YB6p3njWi8T0",

              // auth: `${JSON.parse(localStorage.getItem('token'))}`
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Users
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Users</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">email</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Phone Number</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Country</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">City</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {userData.map((user) => (
                <tr key={user._id}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800 dark:text-slate-100">
                        {user.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{user.email}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">
                      {user.phoneNumber}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{user.country}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">
                      {user.city}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
