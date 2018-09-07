import React from 'react'
import PropTypes from 'prop-types';
import './Counter.css'

const Counter = ({number, color, onIcrement, onDecrement, onSetColor}) => {

        return (
            <div
                className="Counter"
                onClick={onIcrement}
                onContextMenu={(e) => {
                    e.preventDefault();
                    onDecrement();
                }}
                onDoubleClick={onSetColor}
                style={{backgroundColor: color}} >
                {number}
            </div>
        )
}

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIcrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
}

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIcrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined'),
}

export default Counter;