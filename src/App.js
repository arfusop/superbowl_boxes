import React, {Component} from 'react';
import Header from './components/Header';
import GridContainer from './components/GridContainer';
import Card from './components/styles/Card';
import Payout from './components/Payout';
import getGameData from './api';

class App extends Component {
  componentDidMount() {
    const data = getGameData();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div
          style={{
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gridGap: '20px'
        }}>
          <div
            style={{
            display: 'grid',
            gridGap: '20px'
          }}>
            <Payout/>
            <Card>Data Entry</Card>
            <Card>Submit and assign #'s</Card>
          </div>
          <GridContainer/>
        </div>
      </div>
    );
  }
}

export default App;
