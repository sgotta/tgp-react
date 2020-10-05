import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";
import Main from "../components/Main";

const App = () => (
  <Router>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SidebarMenu />
        </div>
        <div className="col-10">
          <Main />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
