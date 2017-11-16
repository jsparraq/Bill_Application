//Dependencias
import React, {Component} from 'react';
import { connect } from 'react-redux';

//Recursos
import { Panel, Table } from 'react-bootstrap';
import './css/index.css';

//Actions
import { GETPRODUCTS } from '../../Actions/producto';

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

class Productos extends Component {
  componentWillMount(){
    this.props.GETPRODUCTS();
  }
  render (){
    return(
      <div className="Perfil">
        <div className = "Galeria" style = {loginStyles.Galeria1}>
          {this.props.productos.map((product,key) =>
            <div className="thumbnail" key={key} style = {loginStyles.Producto1}>
              <img src={product.imagen} alt={product.nombre} />
              <div className="caption">
                <h4>{product.nombre}</h4>
                <h5>Precio: ${product.precio}</h5>
                <h5>{product.descripcion}</h5>
              </div>
            </div>
            
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productos: state.Productos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GETPRODUCTS(){
      dispatch(GETPRODUCTS());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Productos);
