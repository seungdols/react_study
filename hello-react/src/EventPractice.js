import React, { Component } from 'react'

export default class EventPractice extends Component {

    state = {
        username: "",
        message: ""
    }

    constructor(props){
        super(props)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username + ": " + this.state.message)
        this.setState({
            message: "",
            username: ""
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" value={this.state.username}
                placeholder="input username in here" onChange={this.handleChange}/>
                <input type="text" name="message" value={this.state.message}
                placeholder="input text in here" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}
