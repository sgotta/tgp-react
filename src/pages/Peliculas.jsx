import React, { useState } from 'react';
import ListMovies from '../components/ListMovies';
import FormSearchMovies from '../components/FormSearchMovies';

const Peliculas = () => {
  const [search, setSearch] = useState({});

  return (
    <div className="container text-center">
      <div className="card-grid">
        <h1>Busqueda de Peliculas</h1>
        <FormSearchMovies setSearch={setSearch} />
        <hr />
        <ListMovies search={search} />
      </div>
    </div>
  );
};

export default Peliculas;
