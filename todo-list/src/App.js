import React, { Component } from 'react'
import PageTemplate from './components/PageTemplate'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
export default class App extends Component {

    state = {
        input: ""
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        })
    }


    render() {
        const {input} = this.state;
        const {
            handleChange
        } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input} />
                <TodoList />
            </PageTemplate>
        )
    }
}
