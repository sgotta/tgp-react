import React from "react";
import { Link } from "react-router-dom";
import "./styles/SidebarMenu.css";

const handleClick = (e) => {
  console.log(e.target.text);
};

const SidebarMenu = () => (
  <nav className="nav sidebar flex-column" onClick={handleClick}>
    <Link to="/" className="nav-link active">
      <span role="img" aria-label="Casa">
        🏠
      </span>{" "}
      Home
    </Link>
    <Link to="/404" className="nav-link">
      <span role="img" aria-label="Escarabajo">
        🐞
      </span>{" "}
      Página de error
    </Link>
  </nav>
);

export default SidebarMenu;
