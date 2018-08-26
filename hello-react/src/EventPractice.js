import React, { Component } from 'react'

export default class EventPractice extends Component {

    state = {
        message: ""
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" value={this.state.message}
                placeholder="input text in here" onChange={(e) => {
                    this.setState({
                        message: e.target.value
                    })
                }}/>
            </div>
        )
    }
}
