//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Recursos
import { Button, Glyphicon,Table, Panel, Grid, Row, Col, FormGroup, ControlLabel, Label, FormControl } from 'react-bootstrap';
import Popup from '../Extras/Pop-up';

const loginStyles = {
  width: "60%",
  maxWidth: "400px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};



class Perfil extends Component {



  render() {
    return (
      <div className="Perfil">
        <div className = "titulo text-center">
          <h3>Perfil</h3>
        </div>
        <div style = {loginStyles}>
          <form ref = {(form) => {this.loginForm = form}}>
            <FormGroup  >
              <ControlLabel><Label>Nombre de Usuario</Label></ControlLabel>
              <FormControl type = "text" placeholder = {this.props.User.displayName} inputRef = {(input) => {this.nameProductInput = input}}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup >
              <ControlLabel><Label>Contraseña de Usuario</Label></ControlLabel>
              <FormControl type = "text" placeholder = "Colocar nueva contraseña" inputRef = {(input) => {this.descProductInput = input}}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup className = "text-center">
              <Button  ref = "target" bsStyle="success" type="button" onClick={this.handleAddProduct}> Actualizar el Perfil </Button>
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

export default connect(mapStateToProps, null)(Perfil);
