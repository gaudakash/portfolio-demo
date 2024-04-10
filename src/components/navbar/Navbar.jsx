import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="src/assests/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="src/assests/instagram.png" alt="insta" />
          </a>
          <a href="#">
            <img src="src/assests/youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="src/assests/dribbble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
