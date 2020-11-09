import React, { useEffect, useState } from 'react';
import ItemMovie from './ItemMovie';

// eslint-disable-next-line react/prop-types
const ListMovies = React.memo(({ search }) => {
  // "Yo mantendría las variables de estado independientes." -Simón.
  const [state, setstate] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const { title, year, type } = search;

    fetch(
      'http://www.omdbapi.com/?apikey=cc92689&s=' +
        `${encodeURI(title)}&y=${year}&type=${type}`
    )
      .then((res) => res.json())
      .then(({ Search }) =>
        Search?.map((item) => {
          return {
            id: item.imdbID,
            title: item.Title,
            year: item.Year,
            type: item.Type,
          };
        })
      )
      .then((cards) => {
        setstate({
          data: cards,
          loading: false,
        });
      });
  }, [search]);

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

export default ListMovies;
