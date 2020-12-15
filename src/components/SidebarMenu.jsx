import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/SidebarMenu.css';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';

const SidebarMenu = () => {
  const [collapse, setCollapse] = useState(true);

  const toggleNav = () => {
    const sidenav = document.getElementById('mySidenav');
    const main = document.getElementById('main');

    if (collapse) {
      sidenav.style.width = '55px';
      main.style.marginLeft = '55px';
    } else {
      sidenav.style.width = '170px';
      main.style.marginLeft = '170px';
    }

    setCollapse(!collapse);
  };

  return (
    <nav id="mySidenav" className="nav sidenav flex-column">
      <span id="closeMenu" className="closebtn" style={{ width: '100%' }}>
        {collapse ? (
          <BsFillCaretLeftFill
            onClick={toggleNav}
            className="float-right toggle-button"
            style={{ marginRight: '5px', marginBottom: '5px' }}
          />
        ) : (
          <BsFillCaretRightFill
            onClick={toggleNav}
            className="float-right toggle-button"
            style={{ marginRight: '5px', marginBottom: '5px' }}
          />
        )}
      </span>
      <Link to="/" className="nav-link active" title="Página de inicio">
        <span role="img" aria-label="Casa">
          🏠
        </span>
        <span>&nbsp;</span>
        {collapse ? 'Home' : ''}
      </Link>
      <Link to="/abm" className="nav-link" title="ABM Vehículos">
        <span role="img" aria-label="Átomo">
          ⚛️
        </span>
        <span>&nbsp;</span>
        {collapse ? 'ABM DataTable' : ''}
      </Link>
      <Link to="/peliculas" className="nav-link" title="Películas">
        <span role="img" aria-label="Películas">
          🎥
        </span>
        <span>&nbsp;</span>
        {collapse ? 'Películas' : ' '}
      </Link>
      <Link to="/personajes" className="nav-link" title="Personajes">
        <span role="img" aria-label="Personajes">
          😎
        </span>
        <span>&nbsp;</span>
        {collapse ? 'Personajes' : ''}
      </Link>
      <Link to="/productos" className="nav-link" title="Productos">
        <span role="img" aria-label="Productos">
          🛒
        </span>
        <span>&nbsp;</span>
        {collapse ? 'Productos' : ''}
      </Link>
      <Link to="/apicore" className="nav-link" title="API Core">
        <span role="img" aria-label="API Core">
          👨‍💻
        </span>
        <span>&nbsp;</span>
        {collapse ? 'API Core' : ''}
      </Link>
      <Link to="/dragAndDropTest" className="nav-link" title="Drag and Drop">
        <span role="img" aria-label="Drag and Dropyar">
          👨‍💻
        </span>
        <span>&nbsp;</span>
        {collapse ? 'Drag and Drop' : ''}
      </Link>
    </nav>
  );
};

export default SidebarMenu;
