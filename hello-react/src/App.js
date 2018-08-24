import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent'
class App extends Component {
  render() {
    return (
      <MyComponent name="seungdols" age={28} />
    );
  }
}

export default App;
