import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import Productos from '../../../components/Productos';

const mockStore = configureStore();

it('Renderiza sin productos', () => {

  const store = mockStore({Productos: []});

  const wrapper = render(<Productos store = {store}/>);
  expect(wrapper.find(".Producto").length).toBe(0);
});


it('Renderiza con un producto', () => {

  const store = mockStore({Productos: [{nombre: "Gaseosa", precio: 1234, descripcion: "Hola", image: "" }]});

  const wrapper = render(<Productos store = {store}/>);
  expect(wrapper.find(".Producto").length).toBe(1);
});
