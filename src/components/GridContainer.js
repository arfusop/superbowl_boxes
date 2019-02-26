import React, {Component} from "react";
import Card from "./styles/Card";
import GridItem from "./styles/GridItem";
// import BoxNumber from "./styles/BoxNumber";
import Initials from "./styles/Initials";

export default class GridContainer extends Component {
		render() {
				const {boxes, scoreNumbers} = this.props;
				return (
						<div
								style={{
								display: "grid",
								boxShadow: "0 8px 6px -6px #FFE053"
						}}>
								<div
										style={{
										display: "grid",
										gridTemplateRows: "40px 1fr",
										borderRight: "5px solid #6d757d",
										borderBottom: "5px solid #6d757d",
										borderLeft: "5px solid #6d757d",
										borderRadius: 3
								}}>
										<div
												style={{
												backgroundColor: "#6E767D",
												color: "#fff",
												display: "grid",
												justifyContent: "center",
												alignItems: "center",
												fontSize: 18
										}}>
												NE Patriots - LA Rams
										</div>
										<Card className="boxGrid" boxShadow="">
												{boxes.map((box, index) => {
														return (
																<GridItem key={index}>
																		<Initials
																				border={box.initials
																				? "1px solid #FFE053"
																				: "1px solid #6E767D"}
																				backgroundColor={box.initials
																				? "#5a8ae6"
																				: "#fff"}>
																				<div
																						style={{
																						backgroundColor: box.initials
																								? ""
																								: "#fff",
																						color: "tomato",
																						textAlign: "center"
																				}}>
																						{scoreNumbers.length
																								? `${scoreNumbers[index][0]} - ${scoreNumbers[index][1]}`
																								: index + 1}
																				</div>
																				{box.initials}
																		</Initials>
																</GridItem>
														);
												})}
										</Card>
								</div>
						</div>
				);
		}
}
