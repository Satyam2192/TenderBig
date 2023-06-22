import React, { useState } from "react";

const RegionItem = ({ heading, items }) => {
  return (
    <div className="pb-8">
      <h3 className="text-lg font-bold pb-4">{heading}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className=" font-medium mt-2">
        <a href="#" className="text-white p-3 ml-3 mb-5 rounded-lg text-[12px]">
          View More
        </a>
      </div>
    </div>
  );
};

const RegionItem2 = ({ heading, subhed, items }) => {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-bold mb-3">{heading}</h3>
      <h1 className="mb-3">{subhed}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="font-medium mt-2">
        <a href="#" className="text-white p-3 ml-3 mb-5 rounded-lg text-[12px]">
          View More
        </a>
      </div>
    </div>
  );
};

const Home4 = () => {
  const regions = [
    "Western Africa Tenders",
    "Central Africa Tenders",
    "Eastern Africa Tenders",
  ];

  const regions1 = [
    "Central Asia Tenders",
    "Eastern Asia Tenders",
    "Southern Asia Tenders",
  ];

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/800px-Flag_of_Austria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1280px-Flag_of_Bahrain.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1280px-Flag_of_Bulgaria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
  ];

  const countries = [
    "Argentina Tenders",
    "Australia Tenders",
    "Austria Tenders",
    "Bahrain Tenders",
    "Belgium Tenders",
    "Brazil Tenders",
    "Bulgaria Tenders",
    "Canada Tenders",
  ];

  const geoPolitical = [
    "APAC Tenders",
    "BRICS Tenders",
    "COMESA Tenders",
    "CIS Tenders",
    "Middle East Tenders",
    "MENA Tenders",
    "SAARC Tenders",
    "Gulf Countries Tenders",
  ];

  const fundingAgencies = [
    "African Devp Bank (AfDB) Tenders",
    "Asian Devp Bank (ADB) Tenders",
    "Caribbean Devp Bank (CDB) Tenders",
    "EBRD Tenders",
    "JICA Tenders",
    "UNDP Tenders",
    "World Bank Tenders",
    "WHO Tenders",
  ];

  const [showContent, setShowContent] = useState(true);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="py-4 max-w-7xl mx-6 sm:mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-[#4a4a68]  ">
        <span className="border-b-4 border-red-700">Browse</span> Tenders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="hidden md:flex justify-center flex-col">
          <div>
            <RegionItem2
              heading="REGIONS"
              subhed="Africa Tenders"
              items={regions}
            />
          </div>
          <div>
            <h1>Asia Tenders</h1>
            <RegionItem2 heading="" items={regions1} />
          </div>
        </div>

        <div className="hidden md:flex">
          <div className="mt-[50px]">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-6 h-auto mb-[16.5px] mr-2"
              />
            ))}
          </div>
          <div>
            <RegionItem heading="COUNTRIES" items={countries} />
          </div>
        </div>

        <div className="hidden md:flex">
          <RegionItem heading="GEO-POLITICAL" items={geoPolitical} />
        </div>

        <div className="hidden md:flex">
          <RegionItem heading="FUNDING AGENCIES" items={fundingAgencies} />
        </div>
      </div>
      <div className="sm:hidden ">
        <div className="sm:hidden grid grid-cols-2">
          <button className="bg-red-700 font-medium text-white p-3 mr-3 mb-5 rounded-lg text-[12px]">
            REGIONS
          </button>
          <button className="bg-red-700 font-medium text-white p-3 ml-3 mb-5 rounded-lg text-[12px]">
            COUNTRIES
          </button>
          <button className="bg-red-700 font-medium text-white p-3 mr-3 mb-5 rounded-lg text-[12px]">
            GEO-POLITICAL
          </button>
          <button className="bg-red-700 font-medium text-white p-3 ml-3 mb-5 rounded-lg text-[12px]">
            AGENCIES
          </button>
          <button className="bg-red-700 font-medium text-white p-3 mr-3 mb-5 rounded-lg text-[12px]">
            III SECTORS
          </button>
          <button className="bg-red-700 font-medium text-white p-3 ml-3 mb-5 rounded-lg text-[12px]">
            INDIAN STATES
          </button>
          <button className="bg-red-700 font-medium text-white p-3 mr-3 mb-5 rounded-lg text-[12px]">
            INDIAN CITIES
          </button>
          <button className="bg-red-700 font-medium text-white p-3 ml-3 mb-5 rounded-lg text-[12px]">
            PURCHASERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home4;
