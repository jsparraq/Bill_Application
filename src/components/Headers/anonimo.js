//Dependencias
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

//Recursos
import { Navbar, Nav, NavItem, Button} from 'react-bootstrap';

//Actions

const Headeranonimo = () => {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to ='./principal' ><NavItem>Principal</NavItem></LinkContainer>
            <LinkContainer to ='./productos' ><NavItem>Menú</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to ="./Registro" key = {1}><NavItem> <Button bsStyle = "info">Registrate</Button></NavItem></LinkContainer>
            <LinkContainer to ="./Log_in" key = {2}><NavItem> <Button bsStyle = "success">Ingresa</Button></NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Headeranonimo;
