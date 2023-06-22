import React from "react";

const TenderCard = ({ heading, subheading, details }) => {
  return (
    <div className="mx-auto bg-white overflow-hidden border-[2px] rounded-lg shadow-lg">
      <div className="p-8">
        <div className="uppercase tracking-wide text-xs text-red-700">
          {heading}
        </div>
        <div className="text-sm text-gray-600 mt-2">{subheading}</div>
        <div className="text-sm text-gray-600 mt-2">{details}</div>
      </div>
    </div>
  );
};

const Home3 = () => {
  return (
    <div className="mx-auto p-4 max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        <span
          className="
  border-b-4 border-red-700"
        >
          Latest
        </span>{" "}
        Local Tenders, Government Tenders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TenderCard
          heading="84280762"
          subheading="Deadline: 17 Jun 2023"
          details="India
Supply Of Miscellaneous And Electrical Items, Training Articles And Washing Charge Etc."
        />
        <TenderCard
          heading="84280751"
          subheading="Deadline: 22 Jun 2023"
          details="India
Aluminium Tower Bolt 250 Mm (Quantity Required: 30 Nos)"
        />
        <TenderCard
          heading="84280750"
          subheading="Deadline: 22 Jun 2023"
          details="India
Brass Screws of Size 20 Mm (Quantity Required: 2000 Nos)"
        />
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-red-700 font-medium hover:underline">
          View More Local Tenders
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-700">
        <span
          className="
  border-b-4 border-red-700"
        >
          Latest
        </span>{" "}
        Global Tenders, Government Tenders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TenderCard
          heading="84279414"
          subheading="Deadline: 20 Jun 2023"
          details="Ethiopia
Consultancy Services to Strengthen Community Health Workforce Programs and Systems"
        />
        <TenderCard
          heading="84272619"
          subheading="Deadline: 27 Jun 2023"
          details="Suriname
C-Suite Management Advisor to the Suriname Investment and Trade Agency"
        />
        <TenderCard
          heading="84272490"
          subheading="Deadline: 22 Jul 2023"
          details="Panama
Insumos Y Equipamiento Para Laboratorios Del Ministerio De Salud"
        />
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-red-700 font-medium hover:underline">
          View More Global Tenders
        </a>
      </div>
    </div>
  );
};

export default Home3;
