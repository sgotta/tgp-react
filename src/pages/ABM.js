import React, { Component } from "react";
import {autos} from '../array-autos.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Container,
  Button,
  Table,
} from "reactstrap";

const data = autos;

class ABM extends Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      modelo: "",
      marca: "",
      año: "",
      precio: "",
    },
  };


  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].modelo = dato.modelo;
        arreglo[contador].marca = dato.marca;
        arreglo[contador].año = dato.año;
        arreglo[contador].precio = dato.precio;
      }
      contador++;
    });
    console.log("Editar: "+dato);
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    console.log(valorNuevo);
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };


  onKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
     if (/\+|-/.test(keyValue))
       event.preventDefault();
   }

  render() {
    return (
      <>
        <h3>Prueba ABM</h3>
        <Container>
          <br />
          <Button
            className="btnInsertar"
            color="success"
            onClick={() => this.mostrarModalInsertar()}
          >
            NUEVO
          </Button>
          <br />
          <br />
          <Table striped  hover>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Año</th>
                <th>Precio</th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.modelo}</td>
                  <td>{dato.marca}</td>
                  <td>{dato.año}</td>
                  <td>{Intl.NumberFormat("es-ES").format(dato.precio)}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    ><FontAwesomeIcon icon={faEdit}/>
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* modal insertar */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Nuevo Automóvil</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Modelo</label>

              <input
                className="form-control"
                name="modelo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Marca</label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Año</label>
              <input
                className="form-control"
                name="año"
                type="number"
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress.bind(this)}
              />
            </FormGroup>
            <FormGroup>
              <label>Precio</label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress.bind(this)}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Aceptar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        {/* modal editar */}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
               Modelo
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.modelo}
              />
            </FormGroup>            
            <FormGroup>
              <label>
                Marca 
              </label>
              <input
                className="form-control"
                name="marca"
                readOnly
                type="text"
                onChange={this.handleChange}
                value={this.state.form.marca}
              />
            </FormGroup>           
            <FormGroup>
              <label>
                Año
              </label>
              <input
                className="form-control"
                name="año"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.año}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Precio
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

      </>
    );
  }
}

export default ABM;
