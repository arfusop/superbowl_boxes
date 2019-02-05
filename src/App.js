import React, {Component} from 'react';
import {ThemeProvider} from 'emotion-theming';
import Header from './components/Header';
import GridContainer from './components/GridContainer';
import DataContainer from './components/DataContainer';
import Card from './components/styles/Card';
import Payout from './components/Payout';
// import {getGameData} from './api';

class App extends Component {
  state = {
    gameData: {},
    boxes: [
      {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }, {
        initials: ""
      }
    ]
  }

  componentDidMount() {
    // const data = getGameData();
    let data;
    fetch('http://www.nfl.com/liveupdate/scores/scores.json').then((response) => {
      return response.json();
    }).then((myJson) => {
      data = myJson;
      this.setState({gameData: data})
      return data;
    }).catch(err => console.log(err));
  }

  handleDataInput = data => {
    console.log(data);
  }

  render() {
    const theme = {
      border: '1px solid #ccc'
    };

    const {gameData, boxes} = this.state;

    return (
      <ThemeProvider theme={theme}>
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
              <div
                style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: 10
              }}>
                <Payout/>
                <Card border="1px solid #cccccc">Submit and assign #'s</Card>
              </div>
              <DataContainer handleDataInput={this.handleDataInput}/>
            </div>
            <GridContainer boxes={boxes} gameData={gameData}/>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
