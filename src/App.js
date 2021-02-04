import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
    console.log(this.state.showPerson)
  }

  nameChangeHandler = (event) => {
    console.log("namechange")
    this.setState( {
      persons: [
        { id:'qwee', name: 'Max', age: 28 },
        { id:'qwe2e',name: event.target.value, age: 29 },
        { id:'qwe4e',name: 'Stephanie', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
                />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.toggleNameHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
