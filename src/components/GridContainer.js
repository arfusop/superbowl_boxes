import React, {Component} from "react";
import Card from "./styles/Card";
import GridItem from "./styles/GridItem";
// import BoxNumber from "./styles/BoxNumber";
import Initials from "./styles/Initials";

export default class GridContainer extends Component {
		render() {
				const {gameData, boxes} = this.props;
				let pats = 'NEW ENGLAND PATRIOTS';
				pats = pats.replace(/ /g, '');
				let split = pats.split('');
				return (
						<div
								style={{
								display: 'grid',
								gridTemplateColumns: '40px 1fr',
								boxShadow: '0 8px 6px -6px #FFE053'
						}}>
								<div
										style={{
										display: 'grid',
										gridTemplateRows: '.5fr 9fr'
								}}>
										<div
												style={{
												backgroundColor: '#6E767D',
												borderTopLeftRadius: '5px'
										}}></div>
										<div
												style={{
												backgroundColor: '#6E767D',
												color: '#fff',
												display: 'grid',
												justifyContent: 'center',
												alignItems: 'center',
												textAlign: 'center',
												fontSize: 18
										}}>
												<div>
														{split.map((el, index) => (
																<div
																		style={{
																		marginTop: el === 'P' && 5
																}}
																		key={index}>{el}</div>
														))}
												</div>
										</div>
								</div>
								<div
										style={{
										display: 'grid',
										gridTemplateRows: '40px 1fr',
										borderRight: '5px solid #6d757d',
										borderBottom: '5px solid #6d757d',
										borderTopRightRadius: '3px'
								}}>
										<div
												style={{
												backgroundColor: '#6E767D',
												color: '#fff',
												display: 'grid',
												justifyContent: 'center',
												alignItems: 'center',
												fontSize: 18
										}}>
												LOS ANGELES RAMS
										</div>
										<Card className="boxGrid" boxShadow="">
												{boxes.map((box, index) => (
														<GridItem key={index}>
																<Initials
																		border={box.initials
																		? "1px solid #FFE053"
																		: "1px solid #6E767D"}
																		backgroundColor={box.initials
																		? "#5a8ae6"
																		: "#fff"}>{box.initials}</Initials>
														</GridItem>
												))}
										</Card>
								</div>
						</div>
				);
		}
}
