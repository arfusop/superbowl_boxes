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
        <CardBody gridgap="10px">
          <div
            style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '10px'
          }}>
            <input
              id="boxNumbers"
              placeholder="Box #"
              type="number"
              defaultValue={box}
              onChange={e => this.handleChange(e, 'box')}/>
            <input
              id="initials"
              placeholder="Initials"
              type="text"
              defaultValue={initials}
              onChange={e => this.handleChange(e, 'initials')}/>

          </div>
          <button onClick={() => handleDataInput({box, initials})}>Submit</button>
        </CardBody>
      </Card>
    )
  }
}
