//Dependencias
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

//Recursos
import { Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

//Actions
import { LOGOUT } from '../../Actions/UserActions';

const Headeradministrador = ({ LOGOUT }) => {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to ='./principal' ><NavItem>Principal</NavItem></LinkContainer>
            <LinkContainer to ='./productos' ><NavItem>Menú</NavItem></LinkContainer>
            <LinkContainer to ='./factura' ><NavItem>Factura</NavItem></LinkContainer>
            <LinkContainer to ='./facturas' ><NavItem>Compras</NavItem></LinkContainer>
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
