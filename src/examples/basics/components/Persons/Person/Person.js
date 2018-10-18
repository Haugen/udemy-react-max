import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

import styles from '../../../index.module.css';

class Person extends Component {
  render() {
    let buttonClass = styles.Blue;

    return (
      <div className={styles.Person}>
        <AuthContext.Consumer>
          {auth => (auth ? <p>Authenticated!</p> : null)}
        </AuthContext.Consumer>
        <p>
          My name is {this.props.name} and I'm {this.props.age} years old.
        </p>
        <button className={buttonClass} onClick={this.props.deletePerson}>
          Delete person
        </button>
        <input onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
