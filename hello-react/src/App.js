import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const text = "당신은 어떠신가요?";
    return (
      <Fragment>
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
      </Fragment>
    );
  }
}

export default App;
