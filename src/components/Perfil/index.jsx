//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Recursos
import { Button, FormGroup, ControlLabel, Label, FormControl } from 'react-bootstrap';
import Popup from '../Extras/Pop-up';

import { EDITPERFIL } from '../../Actions/UserActions';
import { ERROR } from '../../Actions/error';


const loginStyles = {
  width: "60%",
  maxWidth: "400px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};



class Perfil extends Component {


  EditPerfil(event) {
    event.preventDefault();
    const nombre =this.nameProductInput.value;
    const password = this.passwordProductInput.value;
    const Cpassword = this.CpasswordProductInput.value;
    const img1 = this.imageInput.value;
    const img = this.imageInput.files[0];
    this.perfilForm.reset();
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(img1)&&img1!==''){
      this.props.ERROR("El archivo que adjunto no es una imagen o un gif");
    }else{
      const usuario = {
        nombre,
        password,
        Cpassword,
        img
      }

      this.props.EDITPERFIL(usuario);
  }
}

  render() {
    return (
      <div className="Perfil">
        <div className = "titulo text-center">
          <h3>Perfil</h3>
        </div>
        <div style = {loginStyles}>
          <form ref = {(form) => {this.perfilForm = form}}>
            <FormGroup >
              <img src = {this.props.User.photoURL} className = "img" alt= {this.props.User.photoURL} />
              <ControlLabel><Label>Imagen del producto</Label></ControlLabel>
              <FormControl type = "file" inputRef = {(input) => {this.imageInput = input}}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup  >
              <ControlLabel><Label>Nombre de Usuario</Label></ControlLabel>
              <FormControl type = "text" placeholder = {this.props.User.displayName} inputRef = {(input) => {this.nameProductInput = input}}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup >
              <ControlLabel><Label>Contraseña de Usuario</Label></ControlLabel>
              <FormControl type = "password" placeholder = "Colocar nueva contraseña" inputRef = {(input) => {this.passwordProductInput = input}}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup >
              <ControlLabel><Label>Confirmar Contraseña</Label></ControlLabel>
              <FormControl type = "password" placeholder = "Confirmar contraseña" inputRef = {(input) => {this.CpasswordProductInput = input}}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup className = "text-center">
              <Button  ref = "target" bsStyle="success" type="submit" onClick={this.EditPerfil.bind(this)}> Actualizar el Perfil </Button>
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
    User: state.User
  };
};

const mapDispatchToProps = dispatch => {
  return {
    EDITPERFIL(user){
      dispatch(EDITPERFIL(user));
    },
    ERROR(message){
      dispatch(ERROR(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
