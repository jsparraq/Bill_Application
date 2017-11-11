//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Recursos



class Perfil extends Component {
  constructor(){
    super();
    this.Perfildata = this.Perfildata.bind(this);
  }

  Perfildata(event) {
    event.preventDefault();
    const email = this.correoInput.value;
    const password = this.contrasenaInput.value;
    this.loginFormulario.reset();
    const usuario = {
      email,
      password
    }
  }



  render() {
    return (
      <div className="Perfil">
        <div className = "titulo text-center">
          <h3>{this.props.User.email}</h3>
        </div>
        <h1>Perfil</h1>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    User: state.User
  };
};

export default connect(mapStateToProps, null)(Perfil);
