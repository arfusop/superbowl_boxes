import React, {Component} from 'react'

export default class EmailForm extends Component {
  render() {
    return (
      <div className="emailForm">
        <input className="emailInput" type="text" placeholder="Name"/>
        <input className="emailInput" type="email" placeholder="Email"/>
        <input className="emailInput" type="text" placeholder="Message"/>
      </div>
    )
  }
}
