import React from "react";
import { ListCards } from "../components/ListCards";

const Peliculas = () => (
  <React.Fragment>
    <h1 className="text-left">
      Películas
      <span role="img" aria-label="Saludo">
        🎥
      </span>
    </h1>
    <h2 className="text-left">Las mejores películas</h2>
    <ListCards />
  </React.Fragment>
);

export default Peliculas;
