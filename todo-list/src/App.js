import React, { Component } from 'react'
import PageTemplate from './components/PageTemplate'
import TodoInput from './components/TodoInput'
export default class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInput />
            </PageTemplate>
        )
    }
}
