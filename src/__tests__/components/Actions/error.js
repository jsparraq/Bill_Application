import { ERROR } from '../../../components/Actions/error';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('probar error', ()=>{
  const store = mockStore({masage: null})

    const mensaje = "hola";
    store.dispatch(ERROR(mensaje));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("ERROR");
    expect(actions[0].message).not.toBeNull();

})
