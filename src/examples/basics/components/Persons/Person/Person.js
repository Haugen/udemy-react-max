import React, { Component } from 'react';

import styles from '../../../index.module.css';

class Person extends Component {
  render() {
    let buttonClass = styles.Blue;

    return (
      <div className={styles.Person}>
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

export default Person;
