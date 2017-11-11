//Dependencias
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

//Recursos
import { Navbar, Nav, NavItem, Button, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';

//Actions
import { LOGOUT } from '../../Actions/UserActions';

const Headeradministrador = ({ LOGOUT }) => {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to ='./principal' ><NavItem>Principal</NavItem></LinkContainer>
            <LinkContainer to ='./productos' ><NavItem>Menú</NavItem></LinkContainer>
            <LinkContainer to ='./reportes' ><NavItem>Reportes</NavItem></LinkContainer>
            <NavDropdown title="Producto" id="basic-nav-dropdown">
              <LinkContainer to ='./addProducto' ><MenuItem >Agregar producto</MenuItem></LinkContainer>
              <LinkContainer to ='./removeProducto' ><MenuItem >Eliminar producto</MenuItem></LinkContainer>
              <LinkContainer to ='./updateproductos' ><MenuItem >Editar producto</MenuItem></LinkContainer>
            </NavDropdown>
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
