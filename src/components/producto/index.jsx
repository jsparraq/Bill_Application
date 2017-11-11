//Dependencias
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Recursos
import { Label, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Popup from '../Extras/Pop-up';

//Actions
import { ERROR } from '../../Actions/error';
import { ADDPRODUCT } from '../../Actions/producto';

const loginStyles = {
  width: "80%",
  maxWidth: "500px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

class AddProducto extends Component{
  constructor(){
    super();
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(){
    let name = this.nameProductInput.value.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const price = this.priceProductInput.value;
    const desc = this.descProductInput.value;
    const img1 = this.imageInput.value;
    const img = this.imageInput.files[0];
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    this.loginForm.reset();
    if(name === "" || price === "" || desc === "" || !img){
      this.props.ERROR("Hay campos vacios");
    }else if(!allowedExtensions.exec(img1)){
      this.props.ERROR("El archivo que adjunto no es una imagen o un gif");
    }else{
      const product = {
        name,
        price,
        desc,
        img
      }
      this.props.ADDPRODUCT(product);
    }
  }

  render(){

    if(this.props.redirect === true){
      return <Redirect to = '/principal' />
    }

    return(
      <div style = {loginStyles}>
        <div className = "titulo text-center">
          <h3>Agrega un producto</h3>
        </div>
        <br/>
        <form ref = {(form) => {this.loginForm = form}}>
          <FormGroup  >
            <ControlLabel><Label>Nombre del producto</Label></ControlLabel>
            <FormControl type = "text" inputRef = {(input) => {this.nameProductInput = input}}/>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup  >
            <ControlLabel><Label>Precio del producto</Label></ControlLabel>
            <FormControl type = "number" inputRef = {(input) => {this.priceProductInput = input}}/>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup >
            <ControlLabel><Label>Descripción del producto</Label></ControlLabel>
            <FormControl componentClass = "textarea" inputRef = {(input) => {this.descProductInput = input}}/>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup >
            <ControlLabel><Label>Imagen del producto</Label></ControlLabel>
            <FormControl type = "file" inputRef = {(input) => {this.imageInput = input}}/>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup className = "text-center">
            <Button  ref = "target" bsStyle="success" type="button" onClick={this.handleAddProduct}> Agregar producto </Button>
            <Popup/>
          </FormGroup>
        </form>
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
    ERROR(message){
      dispatch(ERROR(message));
    },
    ADDPRODUCT(product){
      dispatch(ADDPRODUCT(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProducto);
