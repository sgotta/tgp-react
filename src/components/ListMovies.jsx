import React from 'react';
import PropTypes from 'prop-types';
import ItemMovie from './ItemMovie';
import { useFetchMovies } from '../hooks/useFetchMovies';

const ListMovies = React.memo(({ search }) => {
  const state = useFetchMovies(
    'http://www.omdbapi.com/?apikey=cc92689&s=' +
      `${encodeURI(search.title)}&y=${search.year}&type=${search.type}`
  );

  return (
    <div className="container text-center">
      {state.data === undefined ? (
        <h4>Sin resultados</h4>
      ) : (
        <div className="card-grid">
          {state.loading ? (
            <div className="alert alert-primary" role="alert">
              Cargando ...
            </div>
          ) : (
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Año</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Detalle</th>
                </tr>
              </thead>
              <tbody>
                {state.data?.map((card) => {
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  return <ItemMovie key={card.id} {...card} />;
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
});

ListMovies.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  search: PropTypes.object.isRequired,
};

export default ListMovies;
