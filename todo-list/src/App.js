import React, { Component } from 'react'
import PageTemplate from './components/PageTemplate'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
export default class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInput />
                <TodoList />
            </PageTemplate>
        )
    }
}
