import React from "react";
import "./styles/Main.css";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ABMDataTable from "../pages/ABM";
import NotFound from "../pages/404";


const Main = () => (
  <main id="main" className="pt-4 text-center">
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Abm" component={ABMDataTable} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </main>
);

export default Main;
