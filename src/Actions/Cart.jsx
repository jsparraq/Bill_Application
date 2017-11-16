import firebase from 'firebase';

const ADDTOCART = (producto) => {
  return {
    type: "ADDTOCART",
    producto
  }
}

const REMOVETOCART = (products,posicion) => {
  let productos = [];
  for (var i = 0; i < products.length; i++) {
    if(Number(i) - Number(posicion) !== 0){
      productos.push(products[i]);
    }
  }
  return {
    type: "REMOVETOCART",
    productos
  }
}

const CREATEBILL = (Cart, Usuario,Valor) => {
  return dispatch => {
    let bill = firebase.database().ref('factura').push();
    bill.set({
      Productos: Cart,
      Usuario,
      Valor
    });
    dispatch({
      type: "SUCCESS"
    });
  }
}

export { ADDTOCART, REMOVETOCART, CREATEBILL };
