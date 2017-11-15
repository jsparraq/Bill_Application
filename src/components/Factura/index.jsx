import React, { Component } from 'react';
import { Button, Glyphicon, Panel, Table,Grid,Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { ADDTOCART, REMOVETOCART } from '../../Actions/producto';
import { ERROR } from '../../Actions/error';

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
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  render() {
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
                        <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.REMOVETOCART(product)}><Glyphicon glyph="trash" /></Button></td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4" style={loginStyles.footer}>
                        Total: ${this.props.Cart.reduce((sum, product) => sum + Number(product.precio), 0)}
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

  addToCart(product) {

  }
}

const mapStateToProps = state => {
  return {
    products: state.Productos,
    Cart: state.Cart
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
    REMOVETOCART(producto){
      dispatch(REMOVETOCART(producto))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Factura);
