import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Tender = () => {
  const { referenceNo } = useParams();
  const [tenderDetails, setTenderDetails] = useState(null);

  useEffect(() => {
    const fetchTenderDetails = async () => {
      try {
        const baseUrl = "/apiTender/tenderdetails/tender";
        const response = await axios.get(`${baseUrl}/${referenceNo}`);
        const tenderDetails = response.data.Product[0];
        console.log("tender id ", referenceNo);
        setTenderDetails(tenderDetails);
      } catch (error) {
        console.error("Error fetching tender details:", error);
      }
    };

    if (referenceNo) {
      fetchTenderDetails();
    }
  }, [referenceNo]);

  if (!tenderDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center space-x-2 animate-bounce">
          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl ">
      <h1 className="text-3xl font-bold mb-8">Tender Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 ">
        <div className="bg-white rounded-lg shadow-md p-6 border-gray-400 border-[1px]">
          <h2 className="text-2xl font-bold mb-4 text-red-700">
            Procurement Summary
          </h2>
          <p className="mb-2">
            <span className="font-bold">Country:</span>{" "}
            {tenderDetails.procurementSummary.country}
          </p>
          <p className="mb-2">
            <span className="font-bold">Summary:</span>{" "}
            {tenderDetails.procurementSummary.summary}
          </p>
          <p>
            <span className="font-bold">Deadline:</span>{" "}
            {tenderDetails.procurementSummary.deadline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-gray-400 border-[1px]">
            <h2 className="text-2xl font-bold mb-4 text-red-700">
              Other Information
            </h2>
            <p className="mb-2">
              <span className="font-bold">Notice Type:</span>{" "}
              {tenderDetails.otherInformation.noticeType}
            </p>
            <p className="mb-2">
              <span className="font-bold">TOT Ref.No.:</span>{" "}
              {tenderDetails.otherInformation.totNo}
            </p>
            <p className="mb-2">
              <span className="font-bold">Document Ref. No.:</span>{" "}
              {tenderDetails.otherInformation.documentNo}
            </p>
            <p className="mb-2">
              <span className="font-bold">Competition:</span>{" "}
              {tenderDetails.otherInformation.competition}
            </p>
            <p className="mb-2">
              <span className="font-bold">Financier:</span>{" "}
              {tenderDetails.otherInformation.financier}
            </p>
            <p className="mb-2">
              <span className="font-bold">Purchaser Ownership:</span>{" "}
              {tenderDetails.otherInformation.ownership}
            </p>
            <p>
              <span className="font-bold">Tender Value:</span>{" "}
              {tenderDetails.otherInformation.tenderValue}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-gray-400 border-[1px]">
            <h2 className="text-2xl font-bold mb-4 text-red-700">
              Purchaser's Detail
            </h2>
            <p className="mb-2">
              <span className="font-bold">Purchaser:</span>{" "}
              {tenderDetails.purchaserDetail.purchaser}
            </p>
            <p className="mb-2">
              <span className="font-bold">Address:</span>{" "}
              {tenderDetails.purchaserDetail.address}
            </p>
            <p className="mb-2">
              <span className="font-bold">City:</span>{" "}
              {tenderDetails.purchaserDetail.city}
            </p>
            <p className="mb-2">
              <span className="font-bold">District:</span>{" "}
              {tenderDetails.purchaserDetail.district}
            </p>
            <p className="mb-2">
              <span className="font-bold">State:</span>{" "}
              {tenderDetails.purchaserDetail.state}
            </p>
            <p className="mb-2">
              <span className="font-bold">Pin:</span>{" "}
              {tenderDetails.purchaserDetail.pin}
            </p>
            <p className="mb-2">
              <span className="font-bold">Tel/Fax:</span>{" "}
              {tenderDetails.purchaserDetail.telfax}
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span>{" "}
              {tenderDetails.purchaserDetail.email}
            </p>
            <p>
              <span className="font-bold">URL:</span>{" "}
              {tenderDetails.purchaserDetail.url}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-gray-400 border-[1px]">
          <h2 className="text-2xl font-bold mb-4 text-red-700">
            Tender Details
          </h2>
          <p className="mb-2">
            <span className="font-bold">Country:</span>{" "}
            {tenderDetails.tenderDetail.country}
          </p>
          <p className="mb-2">
            <span className="font-bold">Description:</span>{" "}
            {tenderDetails.tenderDetail.description}
          </p>
          <p className="mb-2">
            <span className="font-bold">Publish Date:</span>{" "}
            {tenderDetails.tenderDetail.publishDate}
          </p>
          <p className="mb-2">
            <span className="font-bold">UN Organization:</span>{" "}
            {tenderDetails.tenderDetail.organization}
          </p>
          <p>
            <span className="font-bold">Type of Notice:</span>{" "}
            {tenderDetails.tenderDetail.noticeType}
          </p>
        </div>

        {/* Render other relevant tender details */}
        {/* To Render documents
        <div className="bg-white rounded-lg shadow-md p-6 border-gray-400 border-[1px]">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Documents</h2>
          {tenderDetails.documents.map((document, index) => (
            <p key={index}>Document {index + 1}: {document}</p>
          ))}
        </div>
        */}
      </div>
    </div>
  );
};

export default Tender;
