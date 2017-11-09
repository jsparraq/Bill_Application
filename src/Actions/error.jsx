/**
 * Esta función recibe el mensaje del error y se lo envía al store
 * para poder mostrar el error en un pop up
 * @param {[type]} message Descripción del error
 */
const ERROR = message => {
  return {
    type: "ERROR",
    message
  }
}

export { ERROR };
