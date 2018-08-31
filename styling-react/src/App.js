import React, { Component } from 'react';
import classNames from 'classnames'
import styles from './App.css';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx('box','blue')}>

      </div>
    );
  }
}

export default App;
