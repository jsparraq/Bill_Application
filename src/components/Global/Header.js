//Dependencias
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

//Recursos
import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import './css/Header.css';

//Actions
import { LOGOUT } from '../../Actions/UserActions';

class Header extends Component{
  render() {
    return(
      <div>
        <div className = "fondo">
        	Titulo
        </div>
        <Navbar collapseOnSelect>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav>
              {this.props.items && this.props.items.map((item, key) => <LinkContainer to ={item.url} key = {key}><NavItem>{item.title}</NavItem></LinkContainer>)}
            </Nav>
            {this.props.auth
              ?(
                <Navbar.Form pullRight>
                  <Button onClick={() => this.props.LOGOUT()} bsStyle = "danger"><Glyphicon glyph="log-out" /></Button>
                </Navbar.Form>
              )
              :(
                <Navbar.Form pullRight>
                  <Button bsStyle="info" href = './Registro' >Registrate</Button>{' '}
                  <Button bsStyle="success" href = './Log_in' >Ingresa</Button>
                </Navbar.Form>
              )
            }

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let auth = true;
  if(state.User === null){
    auth = false;
  }
  return {
    User: state.User,
    auth: auth,
    items: state.Items
  };
};



const mapDispatchToProps = dispatch => {
  return {
    LOGOUT(){
      dispatch(LOGOUT());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
