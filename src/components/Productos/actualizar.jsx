//Dependencias
import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Recursos
import { Button, Glyphicon,Table, Panel, Grid, Row, Col, FormGroup, ControlLabel, Label, FormControl } from 'react-bootstrap';
import Popup from '../Extras/Pop-up';

//Actions
import { UPDATEPRO  } from '../../Actions/producto';
import { GETPRODUCTS } from '../../Actions/producto';


const loginStyles = {
  width: "60%",
  maxWidth: "400px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

class ActualizarProductos extends Component {

  render() {
    return (
      <Grid>
          <Row>
            <Col sm={6}>
              <Panel>
                <Table fill style = {loginStyles}>
                  <tbody>
                    {this.props.productos.map((producto,key) =>
                      <tr key = {key}>
                        <td> {producto.nombre}</td>
                        <td className ="text-right"><Button bsSize="xsmall" bsStyle="info" onClick = {() => this.props.UPDATEPRO(producto)}><Glyphicon glyph="refresh"/></Button></td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Panel>
            </Col>
            <Col sm={6}>
              <div style = {loginStyles}>
                <form ref = {(form) => {this.loginForm = form}}>
                  <img src = {this.props.Producto.imagen} className = "img" alt= {this.props.Producto.nombre} />
                  <FormGroup  >
                    <ControlLabel><Label>Nombre del producto</Label></ControlLabel>
                    <FormControl type = "text" placeholder = {this.props.Producto.nombre} inputRef = {(input) => {this.nameProductInput = input}}/>
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup  >
                    <ControlLabel><Label>Precio del producto</Label></ControlLabel>
                    <FormControl type = "number" placeholder = {this.props.Producto.precio} inputRef = {(input) => {this.priceProductInput = input}}/>
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup >
                    <ControlLabel><Label>Descripción del producto</Label></ControlLabel>
                    <FormControl componentClass = "textarea" placeholder = {this.props.Producto.descripcion} inputRef = {(input) => {this.descProductInput = input}}/>
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup >
                    <ControlLabel><Label>Imagen del producto</Label></ControlLabel>
                    <FormControl type = "file" inputRef = {(input) => {this.imageInput = input}}/>
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup className = "text-center">
                    <Button  ref = "target" bsStyle="success" type="button" onClick={this.handleAddProduct}  disabled = {this.props.enable}> Actualizar producto </Button>
                    <Popup/>
                  </FormGroup>
                </form>
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }
}


const mapStateToProps = state => {
  let Producto = state.Producto;
  let enable = false;
  if(Producto === null){
    enable = true;
    Producto = {
      nombre: "-----",
      precio: "00000",
      descripcion: "-----",
      imagen: ""
    }
  }
  return {
    productos: state.Productos,
    redirect: state.RedirectSign,
    Producto,
    enable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    UPDATEPRO(producto){
      dispatch(UPDATEPRO(producto));
    },GETPRODUCTS(){
      dispatch(GETPRODUCTS());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActualizarProductos);
