import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  state = {
    person: {
      name: '',
      age: ''
    }
  };

  onChangeHandler = event => {
    let updatePerson = { ...this.state.person };
    updatePerson[event.target.name] = event.target.value;
    this.setState({ person: updatePerson });
  };

  makePerson = () => {
    const person = {
      id: Math.random(),
      name: this.state.person.name,
      age: this.state.person.age
    };

    document.querySelector('#name-field').value = '';
    document.querySelector('#age-field').value = '';

    this.setState({
      person: {
        name: '',
        age: ''
      }
    });

    return person;
  };

  render() {
    return (
      <div>
        Name:{' '}
        <input
          onChange={this.onChangeHandler}
          id="name-field"
          name="name"
          type="text"
        />
        Age:{' '}
        <input
          onChange={this.onChangeHandler}
          id="age-field"
          name="age"
          type="text"
        />
        <AddPerson
          personAdded={() => this.props.onAddPerson(this.makePerson())}
        />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons,
    counter: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: person =>
      dispatch({ type: actionTypes.ADD_PERSON, person: person }),
    onDeletePerson: id =>
      dispatch({ type: actionTypes.DELETE_PERSON, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
