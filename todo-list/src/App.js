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

    handleToggle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggledTodo = {
            ...todos[index],
            done: !todos[index].done
        };

        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggledTodo,
                ...todos.slice(index+1, todos.length)
            ]
        });
   }

    render() {
        const {input, todos} = this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle
        } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
                <TodoList todos={todos} onToggle={handleToggle} />
            </PageTemplate>
        )
    }
}
