//Dependencias
import {app as conexion} from '../components/conexion';

//Recursos

/**
 * Esta función se conecta con firebase, en un primer momento revisa si el correo
 * ya está registrado, luego revisa si elijieron el rol de empleado o administrador
 * y si es así entonces compara con la contraseña que hay en la base de datos si
 * coincide agrega este usuario y si elijio el rol de cliente este ingresa de un vez
 * al usuario. Para terminar loggea al usuario de una vez.
 * @param {[type]} Usuario usuario a ingresar
 */
const ADDUSER = Usuario => {
  return dispatch => {
    return conexion.auth().fetchProvidersForEmail(Usuario.email)
      .then((providers) => {
        if(providers.length === 0){
          return conexion.auth().createUserWithEmailAndPassword(Usuario.email,Usuario.password);
        }else{
          dispatch({
            type: "ERROR",
            message: "Correo ya registrado"
          });
        }
      }).then((user) => {
        if(user){
          if(Usuario.role === "Cliente"){
            conexion.database().ref('users/'+ user.uid).set({
              correo: Usuario.email,
              name: Usuario.nombre,
              role: Usuario.role
            });
            conexion.auth().signInWithEmailAndPassword(Usuario.email, Usuario.password);
            dispatch({
              type: "LOGIN",
              user: conexion.auth().currentUser,
              auth: true,
              role: Usuario.role
            });
          }else{
            conexion.database().ref("passwords/").orderByChild("Admin").once("child_added", function(snapshot) {
              if(snapshot.val().Employee === Usuario.password2 || snapshot.val().Admin === Usuario.password2){
                conexion.database().ref('users/'+ user.uid).set({
                  correo: Usuario.email,
                  name: Usuario.nombre,
                  role: Usuario.role
                });
                conexion.auth().signInWithEmailAndPassword(Usuario.email, Usuario.password);
                dispatch({
                  type: "LOGIN",
                  user: conexion.auth().currentUser,
                  auth: true,
                  role: Usuario.role
                });
              }else{
                dispatch({
                  type: "ERROR",
                  message: "No coinciden contraseñas"
                });
              }
            });
          }
        }
      }).catch((error) => {
        dispatch({
          type: "ERROR",
          message: error.message
        });
      });
  }
}


/**
 * Esta función se conecta a firebase y comprueba el loggeo de un usuario. En un
 * inicio revisa que el correo si esté registrado si es así revisa el tipo el role
 * del usuario para poder enviar el navegador indicado
 * @param {[type]} Usuario usuario a loggearse
 */
const LOGIN = Usuario => {
  return dispatch => {
    return conexion.auth().fetchProvidersForEmail(Usuario.email)
      .then((providers) => {
        if(providers.length === 0){
          dispatch({
            type: "ERROR",
            message: "No existe ningún usuario con este correo"
          });
        }else{
          conexion.auth().signInWithEmailAndPassword(Usuario.email, Usuario.password).then((user) => {
            conexion.database().ref("users/").child(user.uid).on("value", function(snapshot) {
              dispatch({
                type: "LOGIN",
                user: conexion.auth().currentUser,
                auth: true,
                role: snapshot.val().role
              });
            }
            );
          }).catch(function(error) {
            // Handle Errors here.
            dispatch({
              type: "ERROR",
              message: error.message
            });
          });
        }
      }).catch((error) => {
        dispatch({
          type: "ERROR",
          message: error.message
        });
      });
  }
}

/**
 * Está función se conecta con conexion y cierra sesión del usuario actual
 */
const LOGOUT = () => {
  return dispatch => {
    return conexion.auth().signOut()
      .then(() => {
        dispatch({
          type: "LOGOUT"
        });
      }).catch((error) => {
        dispatch({
          type: "ERROR",
          message: error.message
        });
      })
  }
}

export { ADDUSER, LOGIN, LOGOUT };
