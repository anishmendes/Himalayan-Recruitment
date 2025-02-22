import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* Company Info */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Himalayan Recruitment</h1>
            <p className="text-dark2">
              Connecting skilled professionals with top employers. Our goal is to 
              provide reliable recruitment solutions to help businesses and individuals succeed.
            </p>
          </div>
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">Home</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Jobs</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Employers</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Contact</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Resources</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">Career Advice</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Resume Tips</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Interview Prep</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">About Us</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="text-dark2 space-y-2">
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> London, UK</p>
              <p className="flex items-center gap-2"><FaPhone /> +44 1234 567890</p>
              <p className="flex items-center gap-2"><FaEnvelope /> info@himalayanrecruitment.com</p>
            </div>
            {/* Social Media */}
            <div className="flex space-x-6 py-3">
              <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                <FaFacebook />
              </a>
              <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                <FaInstagram />
              </a>
              <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
