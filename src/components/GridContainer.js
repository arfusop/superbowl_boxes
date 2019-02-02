import React, { Component } from "react";
import Card from "./styles/Card";
import BoxNumber from "./styles/BoxNumber";
import GridItem from "./styles/GridItem";

export default class GridContainer extends Component {
	state = {
		boxes: [
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			},
			{
				initials: ""
			}
		]
	};
	render() {
		const { boxes } = this.state;
		return (
			<Card gtc="1fr 1fr 1fr 1fr 1fr">
				{boxes.map((box, index) => (
					<GridItem key={index}>
						<BoxNumber>{index + 1}</BoxNumber>
					</GridItem>
				))}
			</Card>
		);
	}
}
