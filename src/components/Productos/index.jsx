//Dependencias
import React, {Component} from 'react';
import { connect } from 'react-redux';

//Recursos
import './css/index.css';

//Actions
import { GETPRODUCTS } from '../../Actions/producto';


class Productos extends Component {
  componentWillMount(){
    this.props.GETPRODUCTS();
  }
  render (){
    return(
      <div className = "Galeria">
        {this.props.productos.map((producto, key) =>
          <div className = "Producto" key = {key}>
            <div className = "Titulo text-center"> {producto.nombre}</div>
            <div>
              <img src = {producto.imagen} className = "img" alt= {producto.nombre} />
              <div className = "Precio"> Precio : {producto.precio}</div>
              <div className = "Descripcion"> {producto.descripcion}</div>
            </div>
          </div>
        )}
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
