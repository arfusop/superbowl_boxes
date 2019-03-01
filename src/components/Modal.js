import React, {Component} from 'react'

export default class Modal extends Component {
  render() {
    const {children, toggle} = this.props;
    return (
      <div className="modal">
        <div className="modalContent">
          <button onClick={() => toggle(false)}>
            <i className="fas fa-times"></i>
          </button>
          {children}
        </div>
      </div>
    )
  }
}
