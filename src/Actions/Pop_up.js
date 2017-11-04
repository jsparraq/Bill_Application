/**
 * Esta función se comunica con el store informando que cerrando la ventana
 * emergente para que el store actualice el estado de visión de la ventana
 * emergente
 */
const CERRAR = () => {
  return {
    type: "CERRAR"
  }
}

export { CERRAR };
