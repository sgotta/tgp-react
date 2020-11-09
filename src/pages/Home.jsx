import React from 'react';

const imagen = require('../images/web.png');

const Home = () => (
  <>
    <div className="row border-and-shadow">
      <div className="col pt-5 pl-5">
        <h1 className="text-left">
          Hola
          <span role="img" aria-label="Saludo">
            👋
          </span>
        </h1>
        <h2 className="text-left">Esta es la página de inicio</h2>
        <p className="text-justify lead">
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
          sit amet fermentum.
        </p>
        <button type="button" className="btn btn-primary float-left mb-5">
          Conocer más
        </button>
      </div>
      <div className="col text-center">
        <img
          className="mx-auto d-sm-none d-md-block"
          style={{ width: '60%', height: 'auto' }}
          src={imagen}
          alt="Web y átomo"
        />
      </div>
    </div>
  </>
);

export default Home;
