//Dependencias
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Recursos
import {  Radio, Label, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Popup from '../Extras/Pop-up';

//Actions
import { ADDUSER } from '../../Actions/UserActions';
import { ERROR } from '../../Actions/error';

const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

class AddUser extends Component{
  constructor(){
    super();
    this.handleSign_up = this.handleSign_up.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.state = {
      control: "disabled",
      role: ""
    }
  };

  handleRole(event){
    if(event.target.id === "Cliente"){
      this.setState({
        control: "disable",
        role: "Cliente"
      });
      this.AdminInput.value = "";
    }else if (event.target.id === "Empleado"){
      this.setState({
        control: "",
        role: "Empleado"
      });
    }else if (event.target.id === "Administrador"){
      this.setState({
        control: "",
        role: "Administrador"
      });
    }
  }

    handleSign_up(event){
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const nombre = this.nameInput.value;
    const radio1 = this.inputRadio1.checked;
    const radio2 = this.inputRadio2.checked;
    const radio3 = this.inputRadio3.checked;
    const passwordemployee = this.AdminInput.value;
    if(radio1 || radio2 || radio3){
      if(email !== "" && password !== "" && nombre !== ""){
        const user = {
          email: email,
          password: password,
          nombre: nombre,
          role: this.state.role,
          password2: passwordemployee
        };
        this.setState({
          control: "disable"
        })
        this.loginForm.reset();
        this.props.ADDUSER(user);
      }else{
        this.loginForm.reset();
        this.props.ERROR("Hay campos vacios");
      }
    }else{
      this.loginForm.reset();
      this.props.ERROR("Selecciona un tipo de usuario");
    }
  }
  render(){
    if(this.props.redirect === true){
      return <Redirect to = '/principal' />
    }
    return(
      <div className = "Perfil">
      <div className = "text-center" style = {loginStyles}>
        <div className = "titulo text-center">
          <h3>Registrate</h3>
        </div>
        <form onSubmit={(event) => {this.handleSign_up(event)}} ref = {(form) => {this.loginForm = form}}>
          <FormGroup >
            <ControlLabel><Label> Nombre </Label></ControlLabel>
            <FormControl id = "nombre" type = "text" inputRef = {(input) => {this.nameInput = input}}/>
          </FormGroup>
          <FormGroup >
            <ControlLabel><Label>Email</Label></ControlLabel>
            <FormControl id = "email" type = "email" inputRef = {(input) => {this.emailInput = input}}/>
          </FormGroup>
          <FormGroup >
            <ControlLabel><Label>Contraseña</Label></ControlLabel>
            <FormControl id = "password" type = "password" inputRef = {(input) => {this.passwordInput = input}}/>
          </FormGroup>
          <FormGroup onClick = {this.handleRole} >
            <Radio id = "Cliente" name="radioGroup" inputRef={(input) => { this.inputRadio1 = input; }} inline>Cliente</Radio>{' '}
            <Radio id = "Empleado" name="radioGroup" inputRef={(input) => { this.inputRadio2 = input; }} inline>Empleado</Radio>{' '}
            <Radio id = "Administrador" name="radioGroup" inputRef={(input) => { this.inputRadio3 = input; }} inline>Administrador</Radio>
          </FormGroup>
          <FormGroup >
            <ControlLabel><Label>Contraseña de administrador o de empleado</Label></ControlLabel>
            <FormControl id = "password" type = "password" disabled = {this.state.control} inputRef = {(input) => {this.AdminInput = input}}/>
          </FormGroup>
          <FormGroup>
              <Button ref = "target" type="submit" bsStyle = "success" >Registrate</Button>
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
    ADDUSER(user){
      dispatch(ADDUSER(user));
    },
    ERROR(message){
      dispatch(ERROR(message));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
