//Dependencias
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

//Recursos
import { Navbar, Nav, NavItem, Button, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import './css/Logo.css';

//Actions
import { LOGOUT } from '../../Actions/UserActions';

const Headeradministrador = ({ LOGOUT }) => {
    return(
      <Navbar inverse collapseOnSelect className="NavheaderT">
        <Navbar.Header className="Navheader">
          <Navbar.Brand>
            <LinkContainer to ='./principal' >
            <img className ="Tituloimg" src ="https://firebasestorage.googleapis.com/v0/b/mi-bill.appspot.com/o/Cero%20Papel.PNG?alt=media&token=fe7df350-41e0-4378-84e4-48a72b1be883"
               alt= "Cargando" to='./principal'/>
             </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="Naviga text-left">
          <Nav >
            <LinkContainer to ='./productos' ><NavItem>Menú</NavItem></LinkContainer>
            <LinkContainer to ='./facturas' ><NavItem>Compras</NavItem></LinkContainer>
            <NavDropdown title="Producto" id="basic-nav-dropdown">
              <LinkContainer to ='./addProducto' ><MenuItem >Agregar producto</MenuItem></LinkContainer>
              <LinkContainer to ='./removeProducto' ><MenuItem >Eliminar producto</MenuItem></LinkContainer>
              <LinkContainer to ='./updateproductos' ><MenuItem >Editar producto</MenuItem></LinkContainer>
            </NavDropdown>
            <LinkContainer to ='./perfil' ><NavItem>Perfil</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to ="./principal" key = {1}><NavItem> <Button onClick={() => LOGOUT()} bsStyle = "danger"><Glyphicon glyph="log-out" /></Button></NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


const mapDispatchToProps = dispatch => {
  return {
    LOGOUT(){
      dispatch(LOGOUT());
    }
  }
}

export default connect(null, mapDispatchToProps)(Headeradministrador);
