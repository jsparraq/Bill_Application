import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemsanonimo from './data/anonimo';


const Items = (state = itemsanonimo, action) => {
	if(action.type === "LOGIN"){
		return action.items;
	}else if(action.type === "LOGOUT"){
		return itemsanonimo;
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

export default createStore(combineReducers({Productos, Popup, Message, RedirectSign , User, Role, Items}), applyMiddleware(logger, thunk));
