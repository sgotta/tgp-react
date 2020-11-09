import React from 'react';
import PropTypes from 'prop-types';

const ItemMovie = (props) => {
  const { id, title, year, type } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{year}</td>
      <td>{type}</td>
      <td id={id}>
        <span role="img" aria-label="Saludo">
          🎥
        </span>
      </td>
    </tr>
  );
};

ItemMovie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ItemMovie;
