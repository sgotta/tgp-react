import React from 'react';
import PropTypes from 'prop-types';

const ProductRow = (props) => {
  const { product } = props;
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-danger">{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

ProductRow.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};

// NOTA (Simón): Si la propiedad no es requerida se tiene que agregar un valor por defecto.
// ProductRow.defaultProps = {
//   product: PropTypes.shape({
//     category: 'Categoría por defecto',
//     price: '$00.00',
//     stocked: true,
//     name: 'Nombre por defecto',
//   }),
// };

export default ProductRow;
