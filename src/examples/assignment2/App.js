import React, { Component } from 'react';
import Validator from './ValidatorComponent';

class App extends Component {

  state = {
    displayText: '',
    displayTextLength: 0
  }

  letterCount = (event) => {
    let workingState = {...this.state};
    let newText = event.target.value;

    workingState.displayText = newText;
    workingState.displayTextLength = newText.length;

    this.setState(workingState);
  }

  deleteLetterHandler = (letterIndex) => {
    let workingState = {...this.state};
    let displayTextChars = workingState.displayText.split('');
    displayTextChars.splice(letterIndex, 1);
    displayTextChars = displayTextChars.join('');

    this.setState({
      displayText: displayTextChars,
      displayTextLength: displayTextChars.length
    })
  }

  render() {
    return(
      <div className="App">
        <h1>A heading!!</h1>
        <input onChange={this.letterCount} value={this.state.displayText} />
        <Validator
          // Passing the function deleteLetterHandler down to ValidatorComponent
          // and then further down to CharComponent?
          state={this.state}
          deleteLetterHandler={(index) => this.deleteLetterHandler(index)}
        />
      </div>
    )
  }
}

export default App;