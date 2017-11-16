//Dependencias
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Recursos
import { FormGroup, ControlLabel, FormControl, Button, Label} from 'react-bootstrap';
import Popup from '../Extras/Pop-up';

//Actions
import { LOGIN } from '../../Actions/UserActions';
import { ERROR } from '../../Actions/error';


//Assets
const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

class Login extends Component {
  constructor(){
    super();
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
  }

  authWithEmailPassword(event) {
    event.preventDefault();
    const email = this.correoInput.value;
    const password = this.contrasenaInput.value;
    this.loginFormulario.reset();
    const usuario = {
      email,
      password
    }
    this.props.LOGIN(usuario);
  }

  render() {

    if(this.props.redirect === true){
      return <Redirect to = '/' />
    }

    return (
      <div className="Perfil">
        <div className = "text-center" style = {loginStyles}>
          <div className = "titulo text-center">
            <h3>Ingresa</h3>
          </div>
          <form onSubmit={(event) => {this.authWithEmailPassword(event)}} ref = {(form) => {this.loginFormulario = form}}>
            <FormGroup >
              <ControlLabel><Label>Email</Label></ControlLabel>
              <FormControl id = "email" type = "email" inputRef = {(input) => {this.correoInput = input}}/>
            </FormGroup>
            <FormGroup >
              <ControlLabel><Label>Contraseña</Label></ControlLabel>
              <FormControl id = "password" type = "password" inputRef = {(input) => {this.contrasenaInput = input}}/>
            </FormGroup>
            <FormGroup>
                <Button ref = "target" type="submit" bsStyle = "success" >Ingresa</Button>
                <Popup/>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.RedirectSign
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LOGIN(user){
      dispatch(LOGIN(user));
    },
    ERROR(message){
      dispatch(ERROR(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
