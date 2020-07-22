import React from "react";
// make sure to install the prop-types dependencies
// proptypes is used to define types for your component props.
import PropTypes from 'prop-types';
// Functional component to render an array of items
// using props provided from the parent, App.js
function TodoList(props) {
  // Destruct the property from the props passed by parent
  let { todos,color } = props;
  // Map the array of string to array of li items
  let listElems = todos.map(todo => <li style={{color: color}}>{todo}</li>);
  // return todo list elements
  return <ol>{listElems}</ol>;
}
// Add proptypes to let parent component know about the
// expected proptypes and their types
TodoList.propTypes = {
    // Here we are defining a proptype to receive array of strings
    todos: PropTypes.arrayOf(PropTypes.string),
    // Here we are defining a proptype to define the color of the 
    // list item text
    color: PropTypes.string
}
// Export to allow App.js,
// To import TodoList function by default.
export default TodoList;