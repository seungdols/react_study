import React, { Component } from 'react';


class MyComponent extends Component {
    // 2. transform-class-properties 사용
    static defaultProps = {
        name: "default name"
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

export default MyComponent