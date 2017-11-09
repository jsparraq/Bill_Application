//Dependencias
import React from 'react';
import { connect } from 'react-redux';

//Recursos
import { Button, Glyphicon,Table, Panel } from 'react-bootstrap';
import './css/eliminar.css';

//Actions
import { REMOVEPRODUCTO  } from '../../Actions/producto';


const loginStyles = {
  width: "80%",
  maxWidth: "500px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};


export const EliminarProductos =  ({ productos, REMOVEPRODUCTO })=> {
    return (
      <Panel>
        <Table fill style = {loginStyles}>
          <tbody>
            {productos.map((producto,key) =>
              <tr key = {key}>
                <td> {producto.nombre}</td>
                <td className ="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick = {() => REMOVEPRODUCTO(producto)}> <Glyphicon glyph="trash"/></Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </Panel>
    );
  }

const mapStateToProps = state => {
  return {
    productos: state.Productos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    REMOVEPRODUCTO(producto){
      dispatch(REMOVEPRODUCTO(producto));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EliminarProductos);
