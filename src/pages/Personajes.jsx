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
      items: [],
    };
  }

  changeText = (e) => {
    // this.setState({nombrepersonaje:e.target.value});
    this.setState({ filtroBusqueda: e.target.value });
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
        </div>

        {/* </form> */}

        <div className="row">
          <TablaPersonas filtro={filtroBusqueda} />
        </div>
      </div>
    );
  }
}

export default Personajes;
