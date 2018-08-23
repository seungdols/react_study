import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const text = "당신은 어떠신가요?";
    const condition = true;
    return (
      <Fragment>
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          condition ? 'True' : 'False'
        }
        {
          condition && '보여주세요'
        }
      </Fragment>
    );
  }
}

export default App;
