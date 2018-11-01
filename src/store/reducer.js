import * as actionTypes from './actions';

const initialState = {
  persons: [],
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = action.person;
      const persons = [...state.persons];
      persons.push(newPerson);
      return {
        ...state,
        persons: persons
      };

    case actionTypes.DELETE_PERSON:
      let newPersons = state.persons.filter(
        person => person.id !== action.personId
      );
      return {
        ...state,
        persons: newPersons
      };

    default:
      return state;
  }
};

export default reducer;
