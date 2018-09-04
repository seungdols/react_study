import React, { Component } from 'react'
import PageTemplate from './components/PageTemplate'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
export default class App extends Component {

    state = {
        input: "",
        todos: [
            {id: 0, text: 'Learn React', done: true},
            {id: 1, text: 'Try to Component Styling', done: false},
        ]
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        })
    }


    render() {
        const {input, todos} = this.state;
        const {
            handleChange
        } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input} />
                <TodoList todos={todos} />
            </PageTemplate>
        )
    }
}
