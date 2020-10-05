import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-light bg-light sticky-top">
    <Link to="/" className="pl-3 navbar-brand">
      Home
    </Link>
  </nav>
);

export default Navbar;
