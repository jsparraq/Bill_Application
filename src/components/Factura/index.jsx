import React, { Component } from 'react';
import { Button, Glyphicon, Panel, Table, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ADDTOCART, REMOVETOCART, CREATEBILL } from '../../Actions/Cart';
import { GETPRODUCTS } from '../../Actions/producto';
import { ERROR } from '../../Actions/error';
import { USERS } from '../../Actions/UserActions';

const loginStyles = {
  Galeria1 : {
    'display': 'flex',
    'flexWrap': 'wrap',
    'maxWidth': '1100px',
    'marginRight': 'auto',
    'marginLeft': 'auto'
  },
  Producto1 : {
    'boxSizing': 'border-box',
    'margin': '1em',
    'overflow': 'hidden',
    'width': '150px',
    'borderRadius': '8px',
    'position': 'relative'
  },
  footer: {
    'fontWeight': 'bold'
  }
};

class Factura extends Component {

  componentWillMount(){
    this.props.GETPRODUCTS();
    this.props.USERS();
  };


  handleBill(){
    console.log("Entro");
    let user = this.userInput.value;
    let valor = this.props.Cart.reduce((sum, product) => sum + Number(product.precio), 0);
    let carrito = [];
    for (var i = 0; i < this.props.Cart.length; i++) {
      let producto = {
        nombre: this.props.Cart[i].nombre,
        precio: this.props.Cart[i].precio
      }
      carrito.push(producto);

    }
    let hoy = new Date();
    let dd = hoy.getDate();
    let mm = hoy.getMonth()+1; //hoy es 0!
    let yyyy = hoy.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    hoy = mm+'/'+dd+'/'+yyyy;
    this.props.CREATEBILL(carrito, user, valor, hoy);
  }

  render() {

    if(this.props.redirect === true){
      return <Redirect to = '/principal' />
    }

    return (
      <div>
        <Grid>
          <Row>
            <Col sm={8}>
              <div className = "Galeria" style = {loginStyles.Galeria1}>
                {this.props.products.map((product,key) =>
                  <div className="thumbnail" key={key} style = {loginStyles.Producto1}>
                    <img src={product.imagen} alt={product.nombre} />
                    <div className="caption">
                      <h4>{product.nombre}</h4>
                      <p>
                        <Button bsStyle="primary" onClick={() => this.props.ADDTOCART(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col sm={4}>
              <Panel header="Shopping Cart">
                <Table fill>
                  <tbody>
                    {this.props.Cart.map((product,key) =>
                      <tr key={key}>
                        <td>{product.nombre}</td>
                        <td className="text-right">${product.precio}</td>
                        <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.REMOVETOCART(this.props.Cart,key)}><Glyphicon glyph="trash" /></Button></td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4" style={loginStyles.footer}>
                        Total: ${this.props.Cart.reduce((sum, product) => sum + Number(product.precio), 0)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" >
                        <FormGroup controlId="formControlsSelect">
                          <ControlLabel> Cliente </ControlLabel>
                          <FormControl componentClass="select" placeholder="select" inputRef = {(input) => {this.userInput = input}}>
                            {this.props.Usuarios.map((usuario, key) =>
                              <option key = {key} value = {usuario.correo}> {usuario.correo} </option>
                            )}
                          </FormControl>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" >
                        <Button ref = "target" bsStyle = "success" onClick = {(event) => {this.handleBill(event)}} disabled = {this.props.enable} >Generar factura</Button>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}



const mapStateToProps = state => {
  let enable = true;
  if(state.Usuarios.length > 0){
    if(state.Cart.length > 0){
      enable = false;
    }
  }
  return {
    products: state.Productos,
    Cart: state.Cart,
    Usuarios: state.Usuarios,
    redirect: state.RedirectSign,
    enable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ADDTOCART(producto){
      dispatch(ADDTOCART(producto))
    },
    ERROR(message){
      dispatch(ERROR(message));
    },
    REMOVETOCART(productos,posicion){
      dispatch(REMOVETOCART(productos,posicion))
    },
    USERS(){
      dispatch(USERS())
    },
    CREATEBILL(Cart, Usuario, Valor, Fecha){
      dispatch(CREATEBILL(Cart, Usuario, Valor, Fecha))
    },
    GETPRODUCTS(){
      dispatch(GETPRODUCTS());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Factura);
