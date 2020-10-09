import React from "react";
import { ListCards } from "../components/ListCards";

const Home = () => (
  <>
    <h3>
      Hola
      <span role="img" aria-label="Saludo">
        👋
      </span>
      esta es la página de inicio
    </h3>
    <ListCards />
  </>
);

export default Home;
