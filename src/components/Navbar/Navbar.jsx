import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../../assets/logo.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Jobs", path: "/job" },
  { id: 4, title: "Employers", path: "/employers" },
  { id: 5, title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Himalayan Recruitment Logo" className="h-[80px] w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 text-lg font-medium">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="relative py-2 px-4 hover:text-secondary transition-all group"
                >
                  {menu.title}
                  <span className="absolute w-2 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100 transition-all"></span>
                </Link>
              </li>
            ))}
            <button className="primary-btn px-4 py-2">Sign In</button>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose className="text-4xl" /> : <IoMdMenu className="text-4xl" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden  top-full left-0 w-full bg-blue-200 shadow-md"
        >
          <ul className="flex flex-col items-center py-4 space-y-3 text-lg font-medium">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-2 text-center hover:text-secondary"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn px-4 py-2">Sign In</button>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
