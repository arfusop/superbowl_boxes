import React, {Component} from "react";
import Card from "./styles/Card";
import CardHeader from "./styles/CardHeader";
import CardBody from "./styles/CardBody";

export default class DataContainer extends Component {
  state = {
    box: null,
    initials: null
  };

  handleChange = (e, label) => {
    this.setState({
      [label]: label === "box"
        ? parseInt(e.target.value)
        : e.target.value
    });
  };

  render() {
    const {allowReset, assignScoreNumbers, filledBoxes, handleDataInput, resetNumbers} = this.props;
    const {box, initials} = this.state;

    return (
      <Card
        gtr="40px 1fr"
        border="1px solid #cccccc"
        boxShadow="0 8px 6px -6px #FFE053">
        <CardHeader color="#fff" bgColor="#6d757d">
          Assign Boxes:
        </CardHeader>
        {filledBoxes < 100
          ? (
            <CardBody bgColor="#5a8ae6" color="#fff" gridgap="10px">
              <div
                style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "10px"
              }}>
                <input
                  id="boxNumbers"
                  className="inputs boxesInput"
                  placeholder="Box #s"
                  type="number"
                  min="1"
                  max="100"
                  defaultValue={box}
                  onChange={e => this.handleChange(e, "box")}/>
                <input
                  id="initials"
                  className="inputs initialsInput"
                  placeholder="Initials"
                  type="text"
                  defaultValue={initials}
                  onChange={e => this.handleChange(e, "initials")}/>
              </div>
              <button
                disabled={box == null || initials == null}
                className="submitBtn"
                onClick={() => handleDataInput({box, initials})}>
                Submit&nbsp;&nbsp;{" "} {box == null || initials == null
                  ? (<i className="fas fa-ban"/>)
                  : (<i className="fas fa-check-circle"/>)}
              </button>
            </CardBody>
          )
          : (
            <CardBody gtr="1fr">
              {allowReset
                ? (
                  <div className="shareContainer">
                    <button onClick={resetNumbers} className="shareBtns">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="shareBtns">
                      <i className="fas fa-envelope"></i>
                    </button>
                    <button onClick={() => window.print()} className="shareBtns">
                      <i className="fas fa-print"></i>
                    </button>
                  </div>
                )
                : (
                  <button className="numberAssign" onClick={assignScoreNumbers}>
                    Assign Scores
                  </button>
                )}

            </CardBody>
          )}
      </Card>
    );
  }
}
