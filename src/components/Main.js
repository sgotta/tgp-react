import React from "react";
import "./styles/Main.css";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/404";

const Main = () => (
  <main className="p-2 text-center">
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </main>
);

export default Main;
