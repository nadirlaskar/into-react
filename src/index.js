// Use when JSX is converted to React.createElement
// on transpilation of react code to normal javascript.
import React from 'react';
// Used to manupulate actual DOM of website
import ReactDOM from 'react-dom';
// Import our component, from the file App.js
// we don't need to write the extension .js for js files
import App from './App'; 
// Telling react to inject the app into the root element of 
// the actual DOM, check the index.html file to find a div
// with id #root.
ReactDOM.render(<App/>,document.getElementById('root'));
