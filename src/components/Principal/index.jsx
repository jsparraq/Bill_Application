//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Recursos

//Actions
import { INICIO } from '../../Actions/principal';
import './css/index.css';

class Principal extends Component {

  componentWillMount(){
    this.props.INICIO();
    
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
