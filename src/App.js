import React, {Component} from 'react';
import Header from './components/Header';
import Card from './components/styles/Card';
import Grid from './components/styles/Grid';

class App extends Component {
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
            <Card>Payout Info</Card>
            <Card>Data Entry</Card>
            <Card>Submit and assign #'s</Card>
          </div>
          <Grid>Boxes Grid</Grid>
        </div>
      </div>
    );
  }
}

export default App;
