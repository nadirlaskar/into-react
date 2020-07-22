import React, { Component } from 'react';
// A class based component
class AppClass extends Component {
  // define a variable to store userInput
  userInput = null;
  // constructor is called when the component is 
  // about to be created for the first time
  constructor(){
      super();
      this.state = ["Class Sample","todo"];
  }
  // Render method of the class that is used to 
  // render calculate and return new updated ui for your component
  render(){
    // map array of strings to array of li tags
    let list = this.state.map(todo => <li>{todo}</li>);
    return (
        <div>
            <input ref={(inputElm)=>{this.userInput = inputElm;}}/>
            <button onClick={()=>{
                this.setState(this.state.concat(this.userInput.value));
                this.userInput.value = "";
            }}> Save Todo </button>
            <ul>
                {list}
            </ul>
        </div>
      );
  }
}

// Allow the function App defined above, 
// available for index.js to import.
export default AppClass;
