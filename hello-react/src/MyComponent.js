import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    // 2. transform-class-properties 사용
    static defaultProps = {
        name: "default name"
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    render() {
        return (
            <div>
                <p>Hello, My name is {this.props.name}.</p>
                <p>I am {this.props.age} old year. </p>
                <p>Number: {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>클릭</button>
            </div>
        )
    }
}

//1. defaultProps 지정
// MyComponent.defaultProps = {
//     name: "default name"
// }

// MyComponent.propTypes = {
//     name: PropTypes.string
// }

export default MyComponent