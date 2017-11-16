//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Recursos
import { Button, Glyphicon,Table, Panel, Grid, Row, Col } from 'react-bootstrap';

//Actions
import { BILLS, BILL } from '../../Actions/Cart';

const loginStyles = {
  width: "60%",
  maxWidth: "400px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

//Actions
class Facturas extends Component {
  componentWillMount(){
    this.props.BILLS();
  }

  render() {
    return (
      <Grid>
          <Row>
            <Col sm={6}>
              <Panel>
                <Table fill style = {loginStyles}>
                  <tbody>
                    {this.props.Facturas.map((Factura,key) =>
                      <tr key = {key}>
                        <td> Número de factura: {Factura.Numero}</td>
                        <td className ="text-right"><Button bsSize="xsmall" bsStyle="info" onClick = {() => this.props.BILL(Factura)} ><Glyphicon glyph="plus-sign"/></Button></td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Panel>
            </Col>
            <Col sm={6}>
              <div style = {loginStyles}>
                <h3 className = "text-center">Factura {this.props.factura.Numero}</h3>
                <p> Fecha {this.props.factura.Fecha}</p>
                <Panel>
                  <Table fill >
                    <tbody>
                      <tr >
                        <td><h4> Producto </h4></td>
                        <td><h4> Precio </h4></td>
                      </tr>
                      {this.props.factura.Productos.map((Producto,key) =>
                        <tr key = {key}>
                          <td> {Producto.nombre} </td>
                          <td> {Producto.precio} </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Panel>
                  <p> Pago:$ {this.props.factura.Pago}</p>
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }
}

const mapStateToProps = state => {
  let fact = state.factura;
  if(fact === null){
    fact = {
      Numero: "---",
      Pago: "---",
      Productos: []
    }
  }
  return {
    Facturas: state.Facturas,
    factura: fact
  };
};


const mapDispatchToProps = dispatch => {
  return {
    BILLS(){
      dispatch(BILLS())
    },
    BILL(factura){
      dispatch(BILL(factura));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facturas);
