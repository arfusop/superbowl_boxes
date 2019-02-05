import React, {Component} from 'react';
import Card from "./styles/Card";
import CardHeader from './styles/CardHeader';
import CardBody from './styles/CardBody';

export default class DataContainer extends Component {
  state = {
    box: null,
    initials: null
  };

  handleChange = (e, label) => {
    this.setState({
      [label]: label === 'box'
        ? parseInt(e.target.value)
        : e.target.value
    })
  }

  render() {
    const {handleDataInput} = this.props;
    const {box, initials} = this.state;

    return (
      <Card gtr="40px 1fr" border="1px solid #cccccc">
        <CardHeader>Assign Boxes:</CardHeader>
        <CardBody>
          <label htmlFor="boxNumbers">
            Box Number:
            <input
              id="boxNumbers"
              type="number"
              value={box}
              onChange={e => this.handleChange(e, 'box')}/>
          </label>
          <label htmlFor="initials">
            Initials:
            <input
              id="initials"
              type="text"
              value={initials}
              onChange={e => this.handleChange(e, 'initials')}/>
          </label>
          <button onClick={() => handleDataInput()}>Submit</button>
        </CardBody>
      </Card>
    )
  }
}
