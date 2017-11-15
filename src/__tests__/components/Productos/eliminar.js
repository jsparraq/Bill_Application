import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import ProductosEliminar from '../../../components/Productos/eliminar';
import { REMOVEPRODUCTO  } from '../../../Actions/producto';
import { GETPRODUCTS } from '../../../Actions/producto';

const mockStore = configureStore();

it('Renderiza sin productos', () => {

  const store = mockStore({Productos: []});
  return store.dispatch(REMOVEPRODUCTO(),GETPRODUCTS())
    .then(() => {
      const wrapper = render(<ProductosEliminar store = {store}/>);
      expect(wrapper.find(".Producto").length).toBe(0);
    });
});


it('Renderiza con un producto', () => {

  const store = mockStore({Productos: [{nombre: "Gaseosa", precio: 1234, descripcion: "Hola", image: "" }]});

  return store.dispatch(REMOVEPRODUCTO(),GETPRODUCTS())
    .then(() => {
      const wrapper = render(<ProductosEliminar store = {store}/>);
      expect(wrapper.find(".Producto").length).toBe(0);
    });
});
