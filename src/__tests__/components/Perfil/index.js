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




it('Renderiza con store inicial', () => {

  const store = mockStore({User: inicio});

  const wrapper = render(
    <Provider store = {store}>
    <Perfil />
  </Provider>
  );
  expect(wrapper.find(".Perfil").length).toBe(0);
});
