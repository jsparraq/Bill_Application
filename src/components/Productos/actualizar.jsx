//Dependencias
import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Recursos
import { Button, Glyphicon,Table, Panel } from 'react-bootstrap';

//Actions
import { UPDATEPRODUCTO  } from '../../Actions/producto';
import { GETPRODUCTS } from '../../Actions/producto';


const loginStyles = {
  width: "80%",
  maxWidth: "500px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

class ActualizarProductos extends Component {

  componentWillMount(){
    this.props.GETPRODUCTS();
  }

  render() {

    if(this.props.redirect === true){
      return <Redirect to = '/principal' />
    }


    return (
      <Panel>
        <Table fill style = {loginStyles}>
          <tbody>
            {this.props.productos.map((producto,key) =>
              <tr key = {key}>
                <td> {producto.nombre}</td>
                <td className ="text-right"><Button bsSize="xsmall" bsStyle="info" onClick = {() => this.props.REMOVEPRODUCTO(producto)}> <Glyphicon glyph="refresh"/></Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </Panel>
    );
  }
}


const mapStateToProps = state => {
  return {
    productos: state.Productos,
    redirect: state.RedirectSign
  };
};

const mapDispatchToProps = dispatch => {
  return {
    UPDATEPRODUCTO(producto){
      dispatch(UPDATEPRODUCTO(producto));
    },GETPRODUCTS(){
      dispatch(GETPRODUCTS());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActualizarProductos);
