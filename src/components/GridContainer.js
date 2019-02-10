import React, {Component} from "react";
import Card from "./styles/Card";
import GridItem from "./styles/GridItem";
// import BoxNumber from "./styles/BoxNumber";
import Initials from "./styles/Initials";

export default class GridContainer extends Component {
		render() {
				const {gameData, boxes} = this.props;
				let pats = 'New England Patriots';
				pats = pats.replace(/ /g, '');
				let split = pats.split('');
				return (
						<div
								style={{
								display: 'grid',
								gridTemplateColumns: '40px 1fr',
								boxShadow: '0 8px 6px -6px black'
						}}>
								<div
										style={{
										display: 'grid',
										gridTemplateRows: '.5fr 12fr'
								}}>
										<div
												style={{
												backgroundColor: '#0a244d',
												borderTopLeftRadius: '5px'
										}}></div>
										<div
												style={{
												backgroundColor: '#0a244d',
												color: '#fff',
												display: 'grid',
												justifyContent: 'center',
												alignItems: 'center'
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
										gridTemplateRows: '40px 1fr'
								}}>
										<div
												style={{
												backgroundColor: '#0a244d',
												color: '#fff',
												display: 'grid',
												justifyContent: 'center',
												alignItems: 'center'
										}}>
												Los Angeles Rams
										</div>
										<Card border='' gtc="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ">
												{boxes.map((box, index) => (
														<GridItem border="1px solid #0a244d" key={index}>
																<Initials>{box.initials}</Initials>
														</GridItem>
												))}
										</Card>
								</div>
						</div>
				);
		}
}
