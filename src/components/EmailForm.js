import React, {Component} from 'react';
import {emailjs} from 'emailjs-com';

export default class EmailForm extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSend = () => {
    console.log('send email');
    // const {name, email, message} = this.state; const params = {   name,
    // email_to: email } emailjs   .send('phil_arfuso', 'template_rTyVoLGd', params)
    //   .then(res => console.log(res))   .catch(err => console.log(err))
  };

  render() {
    const {name, email, message} = this.state;
    return (
      <React.Fragment>
        <div className="emailForm">
          <input
            onChange={e => this.handleChange(e)}
            className="emailInput"
            type="text"
            defaultValue={name}
            name="name"
            placeholder="Name"/>
          <input
            onChange={e => this.handleChange(e)}
            className="emailInput"
            type="email"
            defaultValue={email}
            name="email"
            placeholder="Email"/>
          <input
            onChange={e => this.handleChange(e)}
            className="emailInput"
            type="text"
            defaultValue={message}
            name="message"
            placeholder="Message"/>
        </div>
        <button className="emailSubmit" onClick={this.handleSend}>Submit</button>
      </React.Fragment>
    )
  }
}
