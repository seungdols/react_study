import React, { Component } from 'react'
import PageTemplate from './PageTemplate'
import TodoInputContainer from '../containers/TodoInputContainer'
import TodoListContainer from '../containers/TodoListContainer'

export default class App extends Component {

    render() {
        return (
            <PageTemplate>
                <TodoInputContainer />
                <TodoListContainer />
            </PageTemplate>
        )
    }
}
