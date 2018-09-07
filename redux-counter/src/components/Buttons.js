import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Buttons = ({onCreate, onRemove}) => {
  return (
    <div className="Buttons" >
      <div className="btn add" onClick={onCreate} >Create Counter</div>
      <div className="btn remove" onClick={onRemove} >Remove Counter</div>
    </div>
  )
}

Buttons.propTypes = {
  onCreate: Proptypes.func,
  onRemove: Proptypes.func,
}

Buttons.defaultProps = {
  onCreate: () => console.warn('onCreate not defined'),
  onRemove: () => console.warn('onRemove not defined')
}

export default Buttons