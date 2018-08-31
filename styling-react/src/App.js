import React, { Component } from 'react';
import classNames from 'classnames'
import styles from './App.css';

console.log(styles)
class App extends Component {
  render() {
    return (
      <div className={ classNames(styles.box, styles.blue) }>

      </div>
    );
  }
}

export default App;
