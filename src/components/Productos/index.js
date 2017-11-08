//Dependencias
import React from 'react';
import { connect } from 'react-redux';

//Recursos
import './css/index.css';

//Actions


export const Productos =  ({ productos })=> {
    return (
      <div className = "Galeria">
        {productos.map((producto, key) =>
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

const mapStateToProps = state => {
  return {
    productos: state.Productos
  };
};




export default connect(mapStateToProps, null)(Productos);
