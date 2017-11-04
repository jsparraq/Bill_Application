//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Recursos
import { Modal, Button} from 'react-bootstrap';

//Actions
import { CERRAR } from '../../Actions/Pop_up';

class Popup extends Component {
  	render() {
	    return (
			<div>
				<Modal show={this.props.Show} onHide = {() => this.props.CERRAR()}>
					<Modal.Header closeButton>
						<Modal.Title>Error</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.Message}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => this.props.CERRAR()}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
	    );
  	}
}

const mapStateToProps = state => {
  return {
    Show: state.Popup,
		Message: state.Message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CERRAR(){
      dispatch(CERRAR());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Popup);
