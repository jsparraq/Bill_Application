//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Recursos
import './css/Header.css';

//Actions
import { LOGOUT } from '../../Actions/UserActions';

class Headergeneral extends Component{
  render() {
    const Headergen = this.props.Headergen;
    return(
      <div>
        Titulo
        <Headergen />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Headergen: state.Header
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LOGOUT(){
      dispatch(LOGOUT());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headergeneral);


/*<div>
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
            <Button onClick={() => this.props.LOGOUT()} bsStyle = "danger" href = './principal' ><Glyphicon glyph="log-out" /></Button>
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
</div>*/
