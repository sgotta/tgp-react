import React from 'react';
import PropTypes from 'prop-types';
import LibPeople from '../hooks/useLibPeople';

const TablaPersonas = (props) => {
  const { filtro } = props;

  // eslint-disable-next-line no-unused-vars
  const { error, isLoaded, count, items } = LibPeople(filtro);

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error.message}
      </div>
    );
  }
  if (count === 0) {
    return (
      <div className="alert alert-primary" role="alert">
        No hay resultados para la busqueda
      </div>
    );
  }
  return (
    <div className="container-fluid">
      <table
        id="example"
        className="table table-striped table-bordered  nowrap"
        width="90%"
      >
        <thead>
          <tr className="alert-dark">
            <th>First name</th>
            <th>Hair color</th>
            <th>Eyes Color</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.url}>
              <td>{item.name}</td>
              <td>{item.hair_color}</td>
              <td>{item.eye_color}</td>
              {/* <td>FILMS</td>  */}
              {/* <Link to="/Afip/sitImp/detalle">Detalle</Link> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TablaPersonas.propTypes = {
  filtro: PropTypes.string.isRequired,
};

export default TablaPersonas;
