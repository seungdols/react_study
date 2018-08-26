import React, { Component } from 'react'

export default class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="input text in here" onChange={(e) => {console.log(e.target.value)}}/>
            </div>
        )
    }
}
