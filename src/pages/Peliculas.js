import React, { useState } from "react";
import { ListCards } from "../components/ListCards";
import { FormSearch } from "../components/FormSearch";

const Peliculas = () => {
  console.log('se creo el componente Peliculas')
  
  const [search, setSearch] = useState({});

  return (
    <div className="container text-center">
      <div className="card-grid" >
        <h1>Busqueda de Peliculas</h1>
        <FormSearch setSearch={setSearch} />
        <hr />
        <ListCards search={search} />
      </div>
    </div>
  )
  
}

export default Peliculas;
