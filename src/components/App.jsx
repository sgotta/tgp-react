import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import Navbar from './Navbar';
import SidebarMenu from './SidebarMenu';
import Main from './Main';

const App = () => (
  <Router>
    <Navbar />
    <SidebarMenu />
    <div className="container-fluid">
      <Main />
    </div>
  </Router>
);

export default App;
