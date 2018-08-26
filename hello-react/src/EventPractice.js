import React, { Component } from 'react'

export default class EventPractice extends Component {

    state = {
        message: ""
    }

    constructor(props){
        super(props)
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.message)
        this.setState({
            message: ""
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" value={this.state.message}
                placeholder="input text in here" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}
