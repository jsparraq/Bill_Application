//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Recursos
import './css/Content.css';

//Actions

class Content extends Component {
  static PropTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

export default Content;
