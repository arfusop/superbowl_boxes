import React, {Component} from "react";
import Card from "./styles/Card";
import CardHeader from "./styles/CardHeader";
import CardBody from "./styles/CardBody";
import Modal from './Modal';
import EmailForm from './EmailForm';
// import emailjs from 'emailjs-com';

export default class DataContainer extends Component {
		state = {
				box: null,
				initials: null,
				showModal: false
		};

		componentDidUpdate(prevState) {
				const {showModal} = this.state;
				if (prevState.showModal !== showModal && showModal) {
						// Click listener to close modal whenever clicking outside of modal content
						document.addEventListener('click', e => {
								if (e.target.className == 'modal') {
										this.toggleModal(false);
								}
						})

						// Keyboard listener to close modal whenever escape key is clicked
						document.onkeydown = e => {
								if (e.keyCode == 27) {
										this.toggleModal(false);
								}
						}

						// touch listener
						document.addEventListener('touchstart', e => {
								if (e.target.className == 'modal') {
										this.toggleModal(false);
								}
						})
				}
		}

		handleChange = (e, label) => {
				// allow for ints ONLY
				const {value} = e.target;
				if (label === 'box') {
						// split value
						const split = value.split('');
						let includesNAN = false;
						split.forEach(element => {
								const v = parseInt(element);
								if (isNaN(v)) {
										includesNAN = true;
								}
						});

						// stop deleting of values from triggering warning

						if (!includesNAN) {
								console.log('is an int');
								// allow for comma separated ints
								this.setState({
										[label]: label === "box"
												? parseInt(value)
												: value
								});
						} else {
								console.log('NOT an int');
								// set alert to allow user to know
								alert('Please ensure to only enter a number between 1-100 for the boxes input.');
						}
				} else {
						this.setState({
								[label]: label === "box"
										? parseInt(value)
										: value
						});
				}
		};

		handleEmailClick = () => {
				this.setState({showModal: true});
				// const email_id = 'phil_arfuso'; const template_id = 'template_rTyVoLGd';
				// emailjs.send(email_id, template_id, )
				// 1. take a canvas screen shot of the payouts & the box grid
				// 2. open modal
				// 3. append the canvas images to the modal
				// 4. modal needs a confirm send email btn
		};

		toggleModal = bool => {
				this.setState({showModal: bool})
		}

		render() {
				const {allowReset, assignScoreNumbers, filledBoxes, handleDataInput, resetNumbers} = this.props;
				const {box, initials, showModal} = this.state;

				return (
						<React.Fragment>
								<Card
										gtr="40px 1fr"
										border="1px solid #EEF0F2"
										boxShadow="0 8px 6px -6px #FFE053">
										<CardHeader color="#fff" bgColor="#6d757d">
												Assign Boxes:
										</CardHeader>
										{filledBoxes < 100
												? (
														<CardBody bgColor="#011638" color="#fff" gridgap="10px">
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
																				type="string"
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
														<CardBody bgColor="#001539" gtr="1fr">
																{allowReset
																		? (
																				<div className="shareContainer">
																						<button onClick={resetNumbers} className="shareBtns">
																								<i className="fas fa-trash-alt"/>
																						</button>
																						<button onClick={this.handleEmailClick} className="shareBtns">
																								<i className="fas fa-envelope"/>
																						</button>
																						<button onClick={() => window.print()} className="shareBtns">
																								<i className="fas fa-print"/>
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
								{showModal && (
										<Modal className="fadeIn" headerMsg="Send Email" toggle={this.toggleModal}>
												<EmailForm/>
										</Modal>
								)}
						</React.Fragment>
				);
		}
}