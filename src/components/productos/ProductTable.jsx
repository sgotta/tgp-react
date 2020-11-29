import React from 'react';
import PropTypes, { shape } from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import ProductCategoryRow from './ProductCategoryRow';
// eslint-disable-next-line import/no-unresolved
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    const { filterText } = this.props;
    const { inStockOnly } = this.props;

    const rows = [];
    let lastCategory = null;
    const { products } = this.props;
    products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    if (rows.length !== 0) {
      return (
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th className="w-60">Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
    return (
      <div className="alert alert-info" role="alert">
        Oh :( nada por aquí, lo siento!
      </div>
    );
  }
}

ProductTable.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(shape).isRequired,
};

export default ProductTable;
