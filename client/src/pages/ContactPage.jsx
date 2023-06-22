import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="container mx-auto py-8 md:max-w-7xl">
      <div className="space-y-8">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1687066253~exp=1687066853~hmac=42f23f007ad72bd2ca440a69684ce6508082c1182b3c54179addffc4163960af"
            className="w-4/5 md:w-1/2"
            alt="Contact illustration"
          />
          <form
            onSubmit={handleFormSubmit}
            className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
          >
            <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
            <div className="mb-4">
              <label htmlFor="name" className="flex items-center">
                <AiOutlineUser className="mr-2" />
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="flex items-center">
                <AiOutlinePhone className="mr-2" />
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="flex items-center">
                <AiOutlineMail className="mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="services" className="flex items-center">
                Select Services
              </label>
              <select
                id="services"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Tenders">Tenders</option>
                <option value="Joint Venture">Joint Venture</option>
                <option value="Auction (Material)">Auction (Material)</option>
                <option value="Tender Result">Tender Result</option>
              </select>
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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlinePhone className="text-red-700 text-3xl mb-2" />
          <span className="font-semibold">Phone</span>
          <p className="mt-2">Sales: 8875515555 </p>
          {/*<p>Support: 8875515555 </p>*/}
        </motion.div>
        <motion.div
          className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RiMapPin2Line className="text-red-700 text-3xl mb-2" />
          <span className="font-semibold">Address</span>
          <p className="mt-2">
            S-3, Vinayak Jaipur, fwefsdfrgh, loream dndnvnuidnvuwzxm,njd n
            sjvbvsbdj vvjhbwejk as, 300000
          </p>
        </motion.div>
        <motion.div
          className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlineMail className="text-red-700 text-3xl mb-2" />
          <span className="font-semibold">E-Mail</span>
          <p className="mt-2">Info@tender.com</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUsPage;
