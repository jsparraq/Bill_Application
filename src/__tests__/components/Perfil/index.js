import React from 'react';
import { render,mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Perfil from '../../../components/Perfil';
import {Provider} from 'react-redux';

const mockStore = configureStore();
const inicio={
  displayName:null,
  photoURL:null
}

const inicio2={
  displayName:"hola",
  photoURL:null
}


it('Renderiza con store inicial', () => {

  const store = mockStore({User: inicio});

  const wrapper = render(
    <Provider store = {store}>
    <Perfil />
  </Provider>
  );
  expect(wrapper.find(".Perfil").length).toBe(0);
});

it('Renderiza con store', () => {

  const store = mockStore({User: inicio2});

  const wrapper = render(
  <Provider store = {store}>
    <Perfil />
  </Provider>
  );
  expect(wrapper.find('div.titulo').length).toBe(1);
});

it('Renderiza con store formula', () => {

  const store = mockStore({User: inicio2});

  const wrapper = render(
  <Provider store = {store}>
    <Perfil />
  </Provider>
  );
  expect(wrapper.find('div.formula').length).toBe(1);
});


it('Renderiza con store FormGroup', () => {

  const store = mockStore({User: inicio2});
  const wrapper = render(
  <Provider store = {store}>
    <Perfil />
  </Provider>
  );
  expect(wrapper.find('form.formula').length).toBe(1);
});
