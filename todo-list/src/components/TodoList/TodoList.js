import React, { Component } from 'react'
import TodoItem from '../TodoItem'

export default class TodoList extends Component {
    render() {
        const {todos} = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem key={todo.id} done={todo.done}>{todo.text}</TodoItem>
            )
        );
        return (
            <div>
                {todoList}
            </div>
        )
    }
}
