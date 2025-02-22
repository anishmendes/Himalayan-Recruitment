import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/about/AboutPage";  // Matching the exact file name

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and related components
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Banner />
              <Subscribe />
              <Banner2 />
              <Footer />
            </>
          } />
          
          {/* Add About Us route */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
