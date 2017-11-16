import { USERS } from '../../Actions/UserActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

function fetchData () {
  return dispatch => {
    return fetch('/users.json') // Some async action with promise
      .then(() => dispatch(success()))
  };
}


it('probar Popup', ()=>{
  const store = mockStore({});

  const user = {
    email: "administrador@bill.com",
    password: "12345678",
    nombre: "12345678",
    role: "administrador",
    password2: ""
  };

  return store.dispatch(fetchData())
  .then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual(success())
  })


})
