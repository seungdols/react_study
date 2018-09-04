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

    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleInsert = () => {

        const {todos, input} = this.state;

        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };

        this.setState({
            todos: [...todos, newTodo],
            input: ""
        })
    }

    render() {
        const {input, todos} = this.state;
        const {
            handleChange,
            handleInsert
        } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
                <TodoList todos={todos} />
            </PageTemplate>
        )
    }
}
