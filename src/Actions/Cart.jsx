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

const CREATEBILL = (Cart, Usuario, Valor) => {
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

const BILLS = () => {
  return dispatch => {
    return firebase.database().ref().child('factura').once("value", function(snapshot) {
      let facturas = [];
      snapshot.forEach(function(child) {
        let factura = {
          Numero: facturas.length + 1,
          Pago: child.val().Valor,
          Productos: child.val().Productos
        }
        if(firebase.auth().currentUser !== null){
          if(firebase.auth().currentUser.email === child.val().Usuario){
            facturas = facturas.concat(factura);
          }
        }
      });
      dispatch({
        type: "MOSTRARBILLS",
        facturas
      })
    });
  }
}

const BILL = (factura) => {
  return {
    type: "FACTURA",
    factura
  }
}



export { ADDTOCART, REMOVETOCART, CREATEBILL, BILLS, BILL };
