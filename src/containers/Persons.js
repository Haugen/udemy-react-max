import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
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

const newPerson = () => {
  return {
    id: Math.random(),
    name: 'Tobias',
    age: Math.floor(Math.random() * 40)
  };
};

const mapStateToProps = state => {
  return {
    persons: state.persons,
    counter: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: () =>
      dispatch({ type: actionTypes.ADD_PERSON, person: newPerson() }),
    onDeletePerson: id =>
      dispatch({ type: actionTypes.DELETE_PERSON, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
