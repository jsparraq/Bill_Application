import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
//Producto
import Productos from './components/Productos';
import actualizareproductos from './components/Productos/actualizar';
import Removeproducto from './components/Productos/eliminar';

import Principal from './components/Principal';
import Compras from './components/Compras';
import addProducto from './components/producto';
import Page404 from './components/Page404';
import Registro from './components/Sign_up';
import Log_in from './components/Log_in';



const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/productos" component={ Productos } />
      <Route exact path="/compras" component={ Compras } />
      <Route exact path="/addProducto" component={ addProducto } />
      <Route exact path="/removeProducto" component={ Removeproducto } />
      <Route exact path="/Registro" component = { Registro }/>
      <Route exact path="/principal" component={ Principal } />
      <Route exact path="/updateproductos" component={ actualizareproductos } />
      <Route exact path="/Log_in" component={ Log_in } />
      <Route exact path="/" component={ Principal } />
      <Route exact component={Page404} />
    </Switch>
  </App>;


export default AppRoutes;
