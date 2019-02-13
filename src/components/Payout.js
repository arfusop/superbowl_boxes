import React, {Component} from 'react'
import Card from '../components/styles/Card'
import CardHeader from '../components/styles/CardHeader'
import CardBody from '../components/styles/CardBody'

export default class Payout extends Component {
  state = {
    q1: 500,
    q2: 1000,
    q3: 500,
    q4: 2500,
    total: 5000
  };

  render() {
    const {q1, q2, q3, q4, total} = this.state;
    return (
      <Card
        gtr="40px 1fr"
        border="1px solid #cccccc"
        boxShadow="0 8px 6px -6px #FFE053">
        <CardHeader color="#fff" bgColor="#6d757d">Payouts</CardHeader>
        <CardBody bgColor="#5a8ae6" color="#fff">
          <div>1st Quarter: ${q1}</div>
          <div>2nd Quarter: ${q2}</div>
          <div>3rd Quarter: ${q3}</div>
          <div>4th Quarter: ${q4}</div>
          <div
            style={{
            width: '100%',
            borderTop: '2px solid #cccccc'
          }}/>
          <div>Total: ${total}</div>
        </CardBody>
      </Card>
    )
  }
}
