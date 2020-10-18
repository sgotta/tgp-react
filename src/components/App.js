import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";
import Main from "../components/Main";

const App = () => (
  <Router>
    <Navbar />
    <SidebarMenu />
    <div className="container-fluid">
      {/* <div className="row"> */}
      {/* <div className="col"> */}

      {/* </div> */}
      {/* <div className="col"> */}
      <Main />
      {/* </div> */}
      {/* </div> */}
    </div>
  </Router>
);

export default App;
