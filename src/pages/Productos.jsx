import React from 'react';
import FilterableProductTable from '../components/productos/FilterableProductTable';

const PRODUCTS = [
  {
    category: 'Artículos deportivos',
    price: '$49.99',
    stocked: true,
    name: 'Pelota fútbol 5',
  },
  {
    category: 'Artículos deportivos',
    price: '$9.99',
    stocked: true,
    name: 'Pelota de básquet',
  },
  {
    category: 'Artículos deportivos',
    price: '$29.99',
    stocked: false,
    name: 'Botines fútbol 5',
  },
  {
    category: 'Electrónica',
    price: '$99.99',
    stocked: true,
    name: 'Samsung S10',
  },
  {
    category: 'Electrónica',
    price: '$399.99',
    stocked: false,
    name: 'Motorola G8 Plus',
  },
  {
    category: 'Electrónica',
    price: '$199.99',
    stocked: true,
    name: 'Xiaomi Mi A3',
  },
];
const Productos = () => {
  return (
    <div className="container">
      <div
        className="alert alert-light alert-dismissible fade show mb-0"
        role="alert"
      >
        Este ejemplo esta basado en el artículo de la documentación oficial
        <span>&nbsp;&quot;</span>
        <a
          href="https://es.reactjs.org/docs/thinking-in-react.html"
          target="blank"
          className="alert-link"
        >
          Pensando en React
        </a>
        <span>&quot;.</span>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <h1 className="text-left">Productos</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

export default Productos;
