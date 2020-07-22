// Inlcude the react library items for creating react element
import React, { useState } from 'react';
import TodoList from './TodoList';
// variable used to store reference to the user <input>
let userInput = null; 

// A function App called by React to update actual DOM 
function App() {
  // State variable create using useState function from react library
  // useState returns an array containing two items 
  // "current-value" and a fn to update the state variable
  let [todos, updateTodo] = useState(["Sample","todo"]);
  // Map array of strings like,
  // ["Sample","todo"] => [<li>Sample</li>,<li>todo</li>]
  // using the map method of arrays
  // return HTML to insert into real DOM
  return (
    <div>
        <input ref={(inputElm)=>{
            // this fn is called when input tag is inserted into the DOM
            userInput = inputElm; // assign ref to inputElm from DOM
        }}/>
        <button onClick={()=>{ // called when user clicks on button elem 
            // call the updateTodo method returned from useState earlier
            // to update the state, doing this will inform react to update 
            // the UI as state as changed.
            updateTodo(todos.concat(userInput.value));
            userInput.value = ""; // reset input
        }}> Save Todo </button>
        <TodoList color="blue" todos={todos}/>
    </div>
  );
}

// Allow the function App defined above, 
// available for index.js to import.
export default App;
