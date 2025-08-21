import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import PrivacyPolicy from "./pages/Privacy";
import DisclaimerPage from "./pages/Disclaimer";
import TermsAndConditions from "./pages/Terms";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      {/* All routes wrapped with Layout */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes will render inside <Outlet /> of Layout */}
        <Route index element={<Home />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
