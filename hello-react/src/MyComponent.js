import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // 2. transform-class-properties 사용
    static defaultProps = {
        name: "default name"
    }

    static propTypes = {
        name: PropTypes.string
    }

    render() {
        return (
            <div>
                Hello, My name is {this.props.name}.
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