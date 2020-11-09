import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Container,
  Button,
  Table,
} from 'reactstrap';
import { autos } from '../array-autos.json';

const datos = autos;

class ABM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datos,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        modelo: '',
        marca: '',
        año: '',
        precio: '',
      },
    };
  }

  static onKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\+|-/.test(keyValue)) event.preventDefault();
  }

  handleChange = (e) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value,
      },
    });
  };

  insertar = () => {
    const { form, data } = this.state;
    const valorNuevo = { ...form };
    // eslint-disable-next-line no-console
    console.log(valorNuevo);
    valorNuevo.id = data.length + 1;
    const lista = data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  eliminar = (dato) => {
    const { data } = this.state;
    // eslint-disable-next-line no-alert
    const opcion = window.confirm(
      `Estás Seguro que deseas Eliminar el elemento ${dato.id}`
    );
    if (opcion === true) {
      let contador = 0;
      const arreglo = data;
      // eslint-disable-next-line array-callback-return
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador += 1;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  editar = (dato) => {
    const { data } = this.state;
    let contador = 0;
    const arreglo = data;
    // eslint-disable-next-line array-callback-return
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].modelo = dato.modelo;
        arreglo[contador].marca = dato.marca;
        arreglo[contador].año = dato.año;
        arreglo[contador].precio = dato.precio;
      }
      contador += 1;
    });
    // eslint-disable-next-line no-console
    console.log(`Editar: ${dato}`);
    this.setState({ data: arreglo, modalActualizar: false });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  render() {
    const { data, modalInsertar, modalActualizar, form } = this.state;
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
          <Table striped hover>
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
              {data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.modelo}</td>
                  <td>{dato.marca}</td>
                  <td>{dato.año}</td>
                  <td>{Intl.NumberFormat('es-ES').format(dato.precio)}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                    </Button>{' '}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* modal insertar */}
        <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Nuevo Automóvil</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="modelo">Modelo</Label>

              <input
                className="form-control"
                name="modelo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="marca">Marca</Label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="año">Año</Label>
              <input
                className="form-control"
                name="año"
                type="number"
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
              />
            </FormGroup>
            <FormGroup>
              <Label for="precio">Precio</Label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
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
        <Modal isOpen={modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="modelo">Modelo</Label>

              <input
                className="form-control"
                readOnly
                name="modelo"
                type="text"
                value={form.modelo}
              />
            </FormGroup>
            <FormGroup>
              <Label for="marca">Marca</Label>
              <input
                className="form-control"
                name="marca"
                readOnly
                type="text"
                onChange={this.handleChange}
                value={form.marca}
              />
            </FormGroup>
            <FormGroup>
              <Label for="año">Año</Label>
              <input
                className="form-control"
                name="año"
                type="text"
                onChange={this.handleChange}
                value={form.año}
              />
            </FormGroup>
            <FormGroup>
              <Label for="precio">Precio</Label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={form.precio}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(form)}>
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ABM;
