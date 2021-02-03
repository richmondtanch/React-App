import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'




const app = props => {
  const [personState,setPersonsState] = useState({
      persons: [
        { name: "Max", age: 28},
        { name: "Manu", age: 85},
        { name: "Stefanie", age: 6}
      ],
      otherstate: "some other shit"
  });

  const switchNameHandler = () => {
    setPersonsState({persons:[
        { name: "Max", age: 123},
        { name: "Manu", age: 234},
        { name: "Stefanie", age: 345}
    ]})
  }

    return (
       <div className="App">
        <p className="App-intro">
          Hello World
        </p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personState.persons[0].name} 
          age={personState.persons[0].age}/>
        <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}></Pers
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div> 


//      return React.createElement("div", null, React.createElement("h1",{className:"App"},"Hi, Im a React App!!!"))
    );
  }


export default app;

// state = {
//   persons: [
//     { name: "Max", age: 28},
//     { name: "Manu", age: 85},
//     { name: "Stefanie", age: 6}
//   ],
//   otherstate: "some other shit"
// }

// switchNameHandler = () => {
//   this.setState({persons:[
//     { name: "Max", age: 123},
//     { name: "Manu", age: 234},
//     { name: "Stefanie", age: 345}
//   ]
// })
// }


