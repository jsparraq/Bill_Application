//Dependencias
import React,{ Component } from 'react';

//Recursos
import './css/Footer.css';

//Actions

class Footer extends Component {
  render (){
    return (
      <div className = "Footer">
        <p className = "Simon" >Hecho por Simon Zea</p>
        <p className = "Sebastian" >Hecho por Sebastian Parra</p>
      </div>
    );
  }
}

export default Footer;
