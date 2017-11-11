//Dependencias
import firebase from 'firebase';

/**
 * Esta función se conecta con firebase y verifica si el producto ya existe y si
 * este no existe agrega la información a la base de datos e ingresa la imagen a
 * la función storage de firebase
 * @param {[type]} producto Producto a ingresar a firebase
 */
const ADDPRODUCT = (producto) => {
  return dispatch => {
    return firebase.database().ref("productos").once("value")
      .then(function(snapshot) {
        if(snapshot.child(producto.name).exists()){
          dispatch({
            type: "ERROR",
            message: "Producto con este nombre ya existe"
          });
        }else{
          const storage = firebase.storage().ref(`Productos/${producto.name}`);
          const task = storage.put(producto.img);
          task.on('state_changed' , snapshot => {
          }, error => {
            dispatch({
              type: "ERROR",
              message: error.message
            });
          }, () => {
            const product = {
              nombre: producto.name,
              precio: producto.price,
              descripcion: producto.desc,
              image: task.snapshot.downloadURL
            };
            firebase.database().ref('productos/' + producto.name).set(product);
            dispatch({
              type:"SUCCESS"
            })

          });
        }
      });
  }
}

/**
 * Se conecta a firebase para revisar todos los productos que hay en la base de
 * datos y retorna un arreglo con los productos
 */
const GETPRODUCTS = () => {
  return dispatch => {
    return firebase.database().ref().child("productos").once("value", function(snapshot) {
      let productos = [];
      snapshot.forEach(function(child) {

        const producto = {
          nombre: child.val().nombre,
          precio: child.val().precio,
          imagen: child.val().image,
          descripcion: child.val().descripcion
        };
        productos = productos.concat(producto);
      });
      dispatch({
        type: "MOSTRAR",
        productos
      })
    });
  }
}

const REMOVEPRODUCTO = (producto) => {
  return dispatch => {
    firebase.database().ref('productos/' + producto.nombre).remove();
    firebase.storage().ref('Productos/' + producto.nombre).delete();
    dispatch({
      type:"SUCCESS"
    });
  }
}

const UPDATEPRO = (producto) => {
  return {
    type:"UPDATE",
    producto
  }
}

const UPDATESPRODUCTO = (producto) => {
  if(producto.imagen === null){
    
  }else{

  }
  return {
    type:"SUCCESS"
  }
}

export { ADDPRODUCT, GETPRODUCTS, REMOVEPRODUCTO, UPDATEPRO, UPDATESPRODUCTO };
