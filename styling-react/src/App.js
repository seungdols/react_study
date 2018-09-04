import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Button from './components/Button'
const cx = classNames.bind(styles);


class App extends Component {
  render() {

    return (
      <div>
          <Button>Button</Button>
      </div>
    );
  }
}

export default App;
