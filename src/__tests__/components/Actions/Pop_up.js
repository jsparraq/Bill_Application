import { CERRAR } from '../../../Actions/Pop_up';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('probar Popup', ()=>{
  const store = mockStore({Popup: null})


    store.dispatch(CERRAR());

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("CERRAR");


})
