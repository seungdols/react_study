import React, { Component } from 'react';
import styles from './App.css';

console.log(styles)
class App extends Component {
  render() {
    return (
      <div className={ [styles.box, styles.blue].join('') }>

      </div>
    );
  }
}

export default App;
