import React from 'react';
import './styles/Main.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ABMDataTable from '../pages/ABM';
import Peliculas from '../pages/Peliculas';
import NotFound from '../pages/404';
import Personajes from '../pages/Personajes';
import Productos from '../pages/Productos';

const Main = () => (
  <main id="main" className="pt-4 text-center">
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/abm" component={ABMDataTable} />
        <Route exact path="/peliculas" component={Peliculas} />
        <Route exact path="/personajes" component={Personajes} />
        <Route exact path="/productos" component={Productos} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </main>
);

export default Main;
