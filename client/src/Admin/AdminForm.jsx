import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const [formValues, setFormValues] = useState({
    summary: '',
    sector: '',
    cpvNo: '',
    country: '',
    state: '',
    city: '',
    procurementSummarySummary: '',
    procurementSummaryDeadline: '',
    noticeType: '',
    totNo: '',
    documentNo: '',
    competition: '',
    financier: '',
    ownership: '',
    tenderValue: '',
    purchaser: '',
    paddress: '',
    pcity: '',
    pdistrict: '',
    pstate: '',
    ppin: '',
    ptelfax: '',
    email: '',
    url: '',
    description: '',
    organization: '',
    tenderDetailNoticeType: '',
    product: '',
  });

  function clearInputValue() {
    setFormValues({
      summary: "",
      sector: "",
      cpvNo: "",
      country: "",
      state: "",
      city: "",
      procurementSummarySummary: "",
      procurementSummaryDeadline: "",
      noticeType: "",
      totNo: "",
      documentNo: "",
      competition: "",
      financier: "",
      ownership: "",
      tenderValue: "",
      purchaser: "",
      paddress: "",
      pcity: "",
      pdistrict: "",
      pstate: "",
      ppin: "",
      ptelfax: "",
      email: "",
      url: "",
      description: "",
      organization: "",
      tenderDetailNoticeType: "",
      product: "",
    });
  }


  const handleFormSubmit = async (e) => {
    console.log()
    e.preventDefault();
    const response = await fetch('http://localhost:5000/apiTender/tenderdetails/add-tender', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0OTFiY2Y5ZWUyMmQ3OWNjMzA5MWQzOCIsInVzZXJJZCI6IjgzOGRmZSIsIm5hbWUiOiJNYXJpZSBQZXJleiIsImVtYWlsIjoiYXNobGV5aG9kc0BleGFtcGxlLm9yZyIsInVzZXJSb2xlIjoidXNlciIsInVzZXJDYXRlZ29yeSI6ImNvbnRyYWN0b3IiLCJwaG9uZU51bWJlciI6IjAwMTEzLTE5Mi01NjU0eDQ4MSIsImNvdW50cnkiOiJCb3Rzd2FuYSIsInN0YXRlIjoiTWlzc291cmkiLCJjaXR5IjoiS2VubmV0aGhhdmVuIiwiX192IjowfSwiaWF0IjoxNjg3MjcyNzQ4fQ.7CoLHhsy6sGqnrbXUNFCLgAB__8n0Tc28vv8kFHDgzU',

        // auth: `${JSON.parse(localStorage.getItem('token'))}`
      },
      body: JSON.stringify(formValues),
    });

    console.log(response);
    clearInputValue();
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const showForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mx-auto py-8 md:max-w-7xl">
      <div className="space-y-8">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <form
            onSubmit={handleFormSubmit}
            className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
          >
            <h1 className="text-3xl font-bold text-center mb-4">
              Admin Tenders Forms
            </h1>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Summery
              </label>
              <input required
                type="text"
                id="summary" name="summary" value={formValues.summary} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Sector
              </label>
              <input required
                type="text"
                id="sector" name="sector" value={formValues.sector} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="flex items-center">
                <AiOutlinePhone className="mr-2" />
                CPV No
              </label>
              <input
                type="text"
                id="cpvNo" name="cpvNo" value={formValues.cpvNo} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Country
              </label>
              <input required
                type="text"
                id="country" name="country" value={formValues.country} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                State
              </label>
              <input required
                type="text"
                id="state" name="state" value={formValues.state} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                City
              </label>
              <input required
                type="text"
                id="city" name="city" value={formValues.city} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Procurement Summary
              </label>
              <input required
                type="text"
                id="procurementSummarySummary" name="procurementSummarySummary" value={formValues.procurementSummarySummary} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Procurement Deadline
              </label>
              <input required
                type="date"
                id="procurementSummaryDeadline" name="procurementSummaryDeadline" value={formValues.procurementSummaryDeadline} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Notice type
              </label>
              <input required
                type="text"
                id="noticeType" name="noticeType" value={formValues.noticeType} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                TOT NO
              </label>
              <input required
                type="text"
                id="totNo" name="totNo" value={formValues.totNo} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Documentation NO
              </label>
              <input required
                type="text"
                id="documentNo" name="documentNo" value={formValues.documentNo} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Competition
              </label>
              <input required
                type="text"
                id="competition" name="competition" value={formValues.competition} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Financer
              </label>
              <input required
                type="text"
                id="financier" name="financier" value={formValues.financier} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Ownership
              </label>
              <input required
                type="text"
                id="ownership" name="ownership" value={formValues.ownership} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Tender Value
              </label>
              <input required
                type="text"
                id="tenderValue" name="tenderValue" value={formValues.tenderValue} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                purchaser
              </label>
              <input required
                type="text"
                id="purchaser" name="purchaser" value={formValues.purchaser} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Address
              </label>
              <input required
                type="text"
                id="paddress" name="paddress" value={formValues.paddress} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                City
              </label>
              <input required
                type="text"
                id="pcity" name="pcity" value={formValues.pcity} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Distic
              </label>
              <input required
                type="text"
                id="pdistrict" name="pdistrict" value={formValues.pdistrict} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                State
              </label>
              <input required
                type="text"
                id="pstate" name="pstate" value={formValues.pstate} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Pin-code
              </label>
              <input required
                type="text"
                id="ppin" name="ppin" value={formValues.ppin} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Fax
              </label>
              <input 
                type="text"
                id="ptelfax" name="ptelfax" value={formValues.ptelfax} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Email
              </label>
              <input required
                type="email"
                id="email" name="email" value={formValues.email} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                URL
              </label>

              <input required
                type="text"
                id="url" name="url" value={formValues.url} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Description
              </label>
              <input
                type="text"
                id="description" name="description" value={formValues.description} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="organization" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Organization
              </label>
              <input required
                type="text"
                id="organization" name="organization" value={formValues.organization} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="notice" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Tender Notice Type
              </label>
              <input
                type="text"
                id="tenderDetailNoticeType" name="tenderDetailNoticeType" value={formValues.tenderDetailNoticeType} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="product" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Product
              </label>
              <input required
                type="text"
                id="product" name="product" value={formValues.product} onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            
            <button
              type="submit"
              className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Forms;




