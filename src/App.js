import React, {Component} from 'react';
import {ThemeProvider} from 'emotion-theming';
import Header from './components/Header';
import GridContainer from './components/GridContainer';
import DataContainer from './components/DataContainer';
import Payout from './components/Payout';
import "./App.css";

class App extends Component {
  state = {
    allowReset: false,
    gameData: {},
    filledBoxCount: 0,
    scoreNumbers: [],
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

  randomAssignNames = () => {
    const {boxes} = this.state;
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newBoxes = [];
    boxes.forEach((box, index) => {
      const first = letters[Math.floor(Math.random() * letters.length)];
      const second = letters[Math.floor(Math.random() * letters.length)];
      newBoxes.push({initials: `${first}${second}`})
    });
    this.setState({boxes: newBoxes, filledBoxCount: 100})
  };

  randomizeArray() {
    let scores = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ];

    let currentIndex = scores.length;
    let temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = scores[currentIndex];
      scores[currentIndex] = scores[randomIndex];
      scores[randomIndex] = temporaryValue;
    }
    return scores;
  }

  assignScoreNumbers = () => {
    const homeScores = this.randomizeArray();
    const awayScores = this.randomizeArray();

    // for each home scores nested for each for each away score each nested loop
    // should return 1 full row of scores (1-10)
    let newScores = [];
    homeScores.forEach(home => {
      awayScores.forEach(away => {
        newScores.push([home, away])
      });
    });

    this.setState({scoreNumbers: newScores, allowReset: true})
  }

  resetNumbers = () => {
    this.setState({scoreNumbers: [], allowReset: false})
  }

  render() {
    const theme = {
      border: '1px solid #ccc'
    };

    const {gameData, boxes, filledBoxCount, scoreNumbers, allowReset} = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
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
                allowReset={allowReset}
                assignScoreNumbers={this.assignScoreNumbers}
                handleDataInput={this.handleDataInput}
                filledBoxes={filledBoxCount}
                resetNumbers={this.resetNumbers}/>
            </div>
            <GridContainer scoreNumbers={scoreNumbers} boxes={boxes} gameData={gameData}/>
          </div>
          <button className="rando" onClick={this.randomAssignNames}>Random Assign Initials</button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
