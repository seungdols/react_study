import React, { Component } from 'react'

export default class IterationSample extends Component {

    state = {
        names: ['눈사람','고양이','강아지','멍멍이','댕댕이'],
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ""
        })
    }

    handleRemove = (index) => {
        const {names} = this.state;

        this.setState({
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map((name, index) => <li key={index} onDoubleClick={ () => this.handleRemove(index)}>{name}</li>)
        return (
            <div>
            <input type="text"
                onChange={this.handleChange}
                value={this.state.name}/>
            <button onClick={this.handleInsert}>추가</button>
            <ul>
                {nameList}
            </ul>
            </div>
        )
    }
}
