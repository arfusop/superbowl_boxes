import React, {Component} from 'react';
import {ThemeProvider} from 'emotion-theming';
import Header from './components/Header';
import GridContainer from './components/GridContainer';
import DataContainer from './components/DataContainer';
import Payout from './components/Payout';
import "./App.css";

class App extends Component {
  state = {
    gameData: {},
    filledBoxCount: 0,
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
    const {boxes} = this.state;
    let newBoxes = boxes;
    const index = data.box - 1; // -1 to reset the box number to the index of the array
    newBoxes[index].initials = data.initials;
    this.setState({
      boxes: newBoxes,
      filledBoxCount: this.state.filledBoxCount + 1
    });
  }

  render() {
    const theme = {
      border: '1px solid #ccc'
    };

    const {gameData, boxes, filledBoxCount} = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
          fontFamily: 'Poppins, sans-serif'
        }}>
          <Header/>
          <div className="contentContainer">
            <div
              style={{
              display: 'grid',
              gridGap: '20px'
            }}>
              <div
                style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridGap: 10
              }}>
                <Payout/>
              </div>
              <DataContainer
                handleDataInput={this.handleDataInput}
                filledBoxes={filledBoxCount}/>
            </div>
            <GridContainer boxes={boxes} gameData={gameData}/>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

// <Card border="1px solid #cccccc">Submit and assign #'s</Card>

export default App;
