import {app as conexion} from '../components/conexion';


const EDITPERFIL = Usuario => {
  return dispatch => {
    let user = conexion.auth().currentUser;
    if(user===null){
      dispatch({
        type: "ERROR",
        message: "Usuario no ingresado"
      });
    }else {

      if(Usuario.nombre!==''){
          user.updateProfile({
            displayName: Usuario.nombre
          })
            .catch(function(error) {
              // Handle Errors here.
              dispatch({
                type: "ERROR",
                message: error.message
              });
            });
          conexion.database().ref('users/'+ user.uid).update({
                  name: Usuario.nombre
                })
                  .catch(function(error) {
                    // Handle Errors here.
                    dispatch({
                      type: "ERROR",
                      message: error.message
                    });
        });
        }
      if(Usuario.password!=='' && Usuario.password === Usuario.Cpassword){
            user.updatePassword(Usuario.password).then(function() {
            })
            .catch(function(error) {
              // Handle Errors here.
              dispatch({
                type: "ERROR",
                message: error.message
              });
            });
          }
      if(Usuario.img!==null){
              const storage = conexion.storage().ref(`users/${user.uid}`);
              const task = storage.put(Usuario.img);
              task.on('state_changed' , snapshot => {
                  }, error => {
                    dispatch({
                      type: "ERROR",
                      message: error.message
                    });
                  }, () => {
                      user.updateProfile({
                              photoURL: task.snapshot.downloadURL
                            }).catch(function(error) {
                                // Handle Errors here.
                                dispatch({
                                  type: "ERROR",
                                  message: error.message
                                });
                            });
                    });
          }

          return conexion.database().ref('users/').once("child_added",
            function(snapshot) {
                        dispatch({
                          type: "LOGIN",
                          user: user,
                          role: snapshot.val().role
                        });
                     })
              .catch(function(error) {
                // Handle Errors here.
                dispatch({
                  type: "ERROR",
                  message: error.message
                });
              });
      }
   }
}


export { EDITPERFIL };
