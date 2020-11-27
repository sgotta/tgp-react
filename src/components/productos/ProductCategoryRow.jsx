import React from 'react';
import PropTypes from 'prop-types';

const ProductCategoryRow = (props) => {
  const { category } = props;
  return (
    <tr>
      <th colSpan="2" className="text-left bg-gradient-info">
        {category}
      </th>
    </tr>
  );
};

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategoryRow;
