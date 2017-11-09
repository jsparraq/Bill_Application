import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Headeradministrador from './components/Headers/Administrador';
import Headeranonimo from './components/Headers/anonimo';
import Headerempleado from './components/Headers/empleado';
import Headercliente from './components/Headers/cliente';

const Header = (state = Headeranonimo, action) => {
	if(action.type === "LOGIN"){
		if(action.role === "Administrador"){
			return Headeradministrador;
		}else if(action.role === "Empleado"){
			return Headerempleado;
		}else{
			return Headercliente;
		}
	}else if(action.type === "LOGOUT"){
		return Headeranonimo;
	}
	return state;
}

const Role = (state = "Anonimo", action) => {
 if(action.type === "LOGIN" ){
		return action.role;
	}
	return state;
}

const User = (state = null, action) => {
if(action.type === "LOGOUT"){
		return null;
	}else if(action.type === "LOGIN"){
		return action.user;
	}
	return state;
}

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

const Message  = (state = null, action) => {
	if(action.type === "ERROR"){
		return action.message;
	}
	return state;
};

const Popup  = (state = null, action) => {
	if(action.type === "ERROR"){
		return  true;
	}else if(action.type === "CERRAR"){
		return  false;
	}
	return state;
};

const Productos = (state = [], action) => {
	if(action.type === "MOSTRAR"){
		return action.productos
	}
	return state;
};


const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

export default createStore(combineReducers({Header, Productos, Popup, Message, RedirectSign , User, Role}), applyMiddleware(logger, thunk));
