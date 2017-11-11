import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Headeradministrador from './components/Headers/Administrador';
import Headeranonimo from './components/Headers/anonimo';
import Headerempleado from './components/Headers/empleado';
import Headercliente from './components/Headers/cliente';

/**
 * [Header description]
 * @param {[type]} [state=Headeranonimo] [description]
 * @param {[type]} action                [description]
 */
const Header = (state = Headeranonimo, action) => {
	if(action.type === "LOGIN"){
		console.log("LOGIN");
		if(action.role === "Administrador"){
			console.log("LOGIN_AD");
			return Headeradministrador;
		}else if(action.role === "Empleado"){
			console.log("LOGIN_EM");
			return Headerempleado;
		}else{
			console.log("LOGIN");
			return Headercliente;
		}
	}else if(action.type === "LOGOUT"){
		return Headeranonimo;
	}
	return state;
}

/**
 * [Role description]
 * @param {String} [state="Anonimo"] [description]
 * @param {[type]} action            [description]
 */
const Role = (state = "Anonimo", action) => {
 if(action.type === "LOGIN" ){
		return action.role;
	}else if(action.type === "LOGOUT"){
		return "Anonimo";
	}
	return state;
}


/**
 * [User description]
 * @param {[type]} [state=null] [description]
 * @param {[type]} action       [description]
 */
const User = (state = null, action) => {
if(action.type === "LOGOUT"){
		return null;
	}else if(action.type === "LOGIN"){
		return action.user;
	}
	return state;
}


/**
 * [RedirectSign description]
 * @param {[type]} [state=null] [description]
 * @param {[type]} action       [description]
 */
const RedirectSign = (state = null, action) => {
	if (action.type === "SUCCESS"){
		return true;
	}else if(action.type === "LOGIN"){
		return true;
	}else if(action.type === "INICIO"){
		return false;
	}
	return state;
}


/**
 * [Message description]
 * @param {[type]} [state=null] [description]
 * @param {[type]} action       [description]
 */
const Message  = (state = null, action) => {
	if(action.type === "ERROR"){
		return action.message;
	}
	return state;
};


/**
 * [Popup description]
 * @param {[type]} [state=null] [description]
 * @param {[type]} action       [description]
 */
const Popup  = (state = null, action) => {
	if(action.type === "ERROR"){
		return  true;
	}else if(action.type === "CERRAR"){
		return  false;
	}
	return state;
};


/**
 * [Productos description]
 * @param {Array}  [state=[]] [description]
 * @param {[type]} action     [description]
 */
const Productos = (state = [], action) => {
	if(action.type === "MOSTRAR"){
		return action.productos;
	}
	return state;
};

/**
 * [Producto description]
 * @param {[type]} [state=null] [description]
 * @param {[type]} action       [description]
 */
const Producto = (state = null,action) => {
	if(action.type === "UPDATE"){
		return action.producto;
	}
	return state;
}


/**
 * [logger description]
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */
const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

export default createStore(combineReducers({Producto, Header, Productos, Popup, Message, RedirectSign , User, Role}), applyMiddleware(logger, thunk));
