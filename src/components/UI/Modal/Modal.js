import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} closeModal={this.props.closeModal} />
        <div className={classes.Modal} style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
          <button className={classes.CloseModal} 
            onClick={() => this.props.closeModal()}>X</button>
          {this.props.children}
        </div>
      </>
    );
  }
};

Modal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func
}

export default Modal;