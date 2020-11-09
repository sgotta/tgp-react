import React, { Component } from 'react';
import TablaPersonas from '../components/TablaPersonas';

class Personajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      nombrepersonaje: '',
      filtroBusqueda: '',
      // eslint-disable-next-line react/no-unused-state
      error: '',
      // eslint-disable-next-line react/no-unused-state
      count: 0,
      items: [
        { name: 'someone', eye_color: 'marron' },
        { name: 'someoneElse', eye_color: 'miel' },
      ],
      selectValue: '',
    };
  }

  changeText = (e) => {
    // this.setState({nombrepersonaje:e.target.value});
    this.setState({ filtroBusqueda: e.target.value });
  };

  handleChangeFilter = (e) => {
    const { items } = this.state;
    this.setState({ selectValue: e.target.value });
    // eslint-disable-next-line no-console
    console.log(items);
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    const result = items.filter(
      (personaje) => personaje.eye_color === e.target.value
    );
    // eslint-disable-next-line no-console
    console.log(result);
  };

  //  _handleSubmit =(e)=>{
  //      e.preventDefault();
  //      this.setState({filtroBusqueda:this.state.nombrepersonaje});
  //      const filtro = this.state.filtroBusqueda;
  //      console.log("submitFILTRO "+filtro);
  // }

  render() {
    const { selectValue, filtroBusqueda } = this.state;
    return (
      <div className="container">
        <h1 className="text-left">Star Wars</h1>
        {/* <form onSubmit={this._handleSubmit}> */}
        <div className="row">
          <div className="col-sm-5">
            <div className="form-group text-left mb-3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Nombre del Personaje </label>
              <div className="input-group">
                <div className="input-group-append">
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <span className="btn btn-outline-secondary">🔍</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="filtro"
                  onChange={this.changeText}
                  placeholder="Búsqueda..."
                />
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="form-group text-left mb-3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Filtro color de ojos </label>
              <div className="input-group">
                <select
                  name="selectOjos"
                  placeholder="Seleccione"
                  className="form-control"
                  value={selectValue}
                  onChange={this.handleChangeFilter}
                >
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <option value="" disabled>
                    Color de ojos 👀
                  </option>
                  <option value="marron">Marrón</option>
                  <option value="miel">Miel</option>
                </select>
                <div className="input-group-append">
                  <span
                    aria-label="Borrar filtro color de ojos."
                    aria-labelledby="Botón limpiar filtro color de ojos."
                    role="button"
                    tabIndex={0}
                    className="btn btn-outline-secondary"
                    onClick={() => this.setState({ selectValue: '' })}
                    aria-hidden="true"
                  >
                    🗑
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1" style={{ paddingTop: '32px' }}>
            <button type="button" className="btn btn-primary">
              Buscar
            </button>
          </div>
        </div>

        {/* </form> */}

        <div className="row">
          {/* ver con dolo de pasar la responsabilidad de filtrar datos a la busqueda */}
          <TablaPersonas filtro={filtroBusqueda} />
        </div>
      </div>
    );
  }
}

export default Personajes;
