import React, { Component } from "react";
import Card from "./styles/Card";
import GridItem from "./styles/GridItem";
// import BoxNumber from "./styles/BoxNumber";
import Initials from "./styles/Initials";

export default class GridContainer extends Component {
	render() {
		const { boxes, scoreNumbers } = this.props;
		return (
			<div
				style={{
					display: "grid",
					boxShadow: "0 8px 6px -6px #FFE053"
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateRows: "40px 1fr",
						borderRight: "5px solid #6d757d",
						borderBottom: "5px solid #6d757d",
						borderLeft: "5px solid #6d757d",
						borderRadius: 3
					}}
				>
					<div
						style={{
							backgroundColor: "#6E767D",
							color: "#fff",
							display: "grid",
							justifyContent: "center",
							alignItems: "center",
							fontSize: 18
						}}
					>
						NE Patriots - LA Rams
					</div>
					<Card className="boxGrid" boxShadow="">
						{boxes.map((box, index) => {
							let num;
							if (scoreNumbers.length) {
								const home = scoreNumbers[0];
								const away = scoreNumbers[1];
								const zeroes = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
								const ones = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
								const twos = [2, 12, 22, 32, 42, 52, 62, 72, 82, 92];
								const threes = [3, 13, 23, 33, 43, 53, 63, 73, 83, 93];
								const fours = [4, 14, 24, 34, 44, 54, 64, 74, 84, 94];
								const fives = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];
								const sixes = [6, 16, 26, 36, 46, 56, 66, 76, 86, 96];
								const sevens = [7, 17, 27, 37, 47, 57, 67, 77, 87, 97];
								const eights = [8, 18, 28, 38, 48, 58, 68, 78, 88, 98];
								const nines = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

								console.log(index);
								if (zeroes.includes(index)) {
									num = `${home[0]} - ${away[0]}`;
								} else if (ones.includes(index)) {
									num = `${home[1]} - ${away[1]}`;
								} else if (twos.includes(index)) {
									num = `${home[2]} - ${away[2]}`;
								} else if (threes.includes(index)) {
									num = `${home[3]} - ${away[3]}`;
								} else if (fours.includes(index)) {
									num = `${home[4]} - ${away[4]}`;
								} else if (fives.includes(index)) {
									num = `${home[5]} - ${away[5]}`;
								} else if (sixes.includes(index)) {
									num = `${home[6]} - ${away[6]}`;
								} else if (sevens.includes(index)) {
									num = `${home[7]} - ${away[7]}`;
								} else if (eights.includes(index)) {
									num = `${home[8]} - ${away[8]}`;
								} else if (nines.includes(index)) {
									num = `${home[9]} - ${away[9]}`;
								}
							} else {
								num = index + 1;
							}
							return (
								<GridItem key={index}>
									<Initials
										border={
											box.initials ? "1px solid #FFE053" : "1px solid #6E767D"
										}
										backgroundColor={box.initials ? "#5a8ae6" : "#fff"}
									>
										<div
											style={{
												backgroundColor: box.initials ? "" : "#fff",
												color: "tomato",
												textAlign: "center"
											}}
										>
											{num}
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
