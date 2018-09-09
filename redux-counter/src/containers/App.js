import React, { Component } from 'react'
import CounterListContainer from './CounterListContainer'
import Buttons from '../components/Buttons'
import getRandomColor from '../lib/getRandomColor'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
    render() {
        const {onCreate, onRemove} = this.props
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                    ></Buttons>
                <CounterListContainer />
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
})

export default connect(null, mapToDispatch)(App)
