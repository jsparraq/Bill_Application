//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Recursos

//Actions
import { INICIO } from '../../Actions/principal';


class Principal extends Component {

  componentWillMount(){
    this.props.INICIO();
    let hoy = new Date();
    let dd = hoy.getDate();
    let mm = hoy.getMonth()+1; //hoy es 0!
    let yyyy = hoy.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    hoy = mm+'/'+dd+'/'+yyyy;
    console.log(hoy);
  }

  render() {
    return (
      <div className="Principal">
        <h1>Home</h1>
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
    INICIO(){
      dispatch(INICIO());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Principal);
