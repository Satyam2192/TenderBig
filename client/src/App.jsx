import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdvancedSearch from "./pages/AdvancedSearch";
import TenderListingPage from "./pages/TenderListingPage";
import ContactUsPage from "./pages/ContactPage";
import Tender from "./pages/Tender";
import Forms from "./components/Forms";
import Admin from "./Admin/Admin";
import AdminForm from "./Admin/AdminForm";
import SubscribePage from "./pages/Subscribe"

const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advance-search" element={<AdvancedSearch />} />
        <Route path="/tenders" element={<TenderListingPage />} />
        <Route path="/tender/:referenceNo" element={<Tender />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/forms" element={<AdminForm />} />
        <Route path="/subscribe" element={<SubscribePage />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>

    
  );
};

export default App;
