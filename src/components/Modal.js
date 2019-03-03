import React, {Component} from 'react'

export default class Modal extends Component {
  render() {
    const {children, headerMsg, toggle} = this.props;
    return (
      <div className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <span>{headerMsg}</span>
            <button className="closeBtn" onClick={() => toggle(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modalBody">
            {children}
          </div>
        </div>
      </div>
    )
  }
}
