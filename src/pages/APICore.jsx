import React, { useState } from 'react';
import useFetchAPICore from '../hooks/useFetchAPICore';

const APICore = () => {
  const { productos, setProductos } = useState([]);
  useFetchAPICore(() => setProductos);
  // eslint-disable-next-line no-console
  console.log(productos);
  return (
    <div>
      <h1>API Core</h1>
    </div>
  );
};

export default APICore;
