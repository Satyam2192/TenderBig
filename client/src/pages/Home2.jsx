import React from "react";

const TenderCard = ({ heading, subheading }) => {
  return (
    <div className="mx-2 bg-white overflow-hidden rounded-lg ">
      <div className="py-8">
        <div className="uppercase tracking-wide text-xs text-red-700">
          {heading}
        </div>
        <a
          href="#"
          className="block text-xs leading-tigh font-medium text-gray-600 hover:underline mt-2"
        >
          {subheading}
        </a>
      </div>
    </div>
  );
};

const Home2 = () => {
  return (
    <>
      <div className=" mx-auto p-4 max-w-7xl ">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          <span
            className="
  border-b-4 border-red-700"
          >
            Latest
          </span>{" "}
          government tenders, online tenders, Public Tender, Bids and Tender
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 iteam-center">
          <div className="flex items-center ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://www.defenceprocurementinternational.com/Content/Features/Images/defence-tenders-inside.jpg"
              alt="Logo"
            />
            <TenderCard
              heading="Defence Tenders"
              subheading="Tenders from Defence Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://www.freightender.com/wp-content/uploads/2020/03/coche_def.jpg"
              alt="Logo"
            />
            <TenderCard
              heading="Transport Tenders"
              subheading="Tenders from Transport Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1563068261-13ebbdf16aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Logo"
            />
            <TenderCard
              heading="Electrical Tenders"
              subheading="Tenders from Electrical Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Power_pole.jpg/800px-Power_pole.jpg"
              alt="Logo"
            />
            <TenderCard
              heading="Software Tenders"
              subheading="Tenders from Software Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Logo"
            />
            <TenderCard
              heading="Construction Tenders"
              subheading="Tenders from Construction Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://content.jdmagicbox.com/comp/def_content/digital-printers/shutterstock-1187101078-digital-printers-4-vw57s.jpg"
              alt="Logo"
            />
            <TenderCard
              heading="Printing Tenders"
              subheading="Tenders from Printing Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=910&q=80"
              alt="Logo"
            />
            <TenderCard
              heading="Canteen Tenders"
              subheading="Tenders from Canteen Industries"
            />
          </div>
          <div className="flex items-center  ">
            <img
              className="h-[60px] w-[60px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=858&q=80"
              alt="Logo"
            />
            <TenderCard
              heading="Solar Tenders"
              subheading="Tenders from Solar Industries"
            />
          </div>
        </div>
        <div className="flex justify-center m-10">
          <button className="bg-red-700 p-3 rounded-lg text-white   border-[2px]  hover:border-black">
            View More Tenders Categories
          </button>
        </div>
      </div>
    </>
  );
};

export default Home2;
