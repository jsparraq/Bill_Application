import { INICIO } from '../../../components/Actions/principal';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('probar Popup', ()=>{
  const store = mockStore({RedirectSign: null})


    store.dispatch(INICIO());

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("INICIO");


})
