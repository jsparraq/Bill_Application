//Dependencias
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './css/Logo.css';
//Recursos
import { Navbar, Nav, NavItem, Button} from 'react-bootstrap';

//Actions


const Headeranonimo = () => {
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
        <Navbar.Collapse>
          <Nav>
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
