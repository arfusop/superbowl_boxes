import React, {Component} from "react";
import Card from "./styles/Card";
import GridItem from "./styles/GridItem";
// import BoxNumber from "./styles/BoxNumber";
import Initials from "./styles/Initials";

export default class GridContainer extends Component {
		state = {
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
		};

		componentDidMount() {
				console.log(this.props.theme)
		}

		render() {
				const {boxes} = this.state;
				return (
						<Card gtc="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ">
								{boxes.map((box, index) => (
										<GridItem key={index}>
												<Initials>{box.initials}</Initials>
										</GridItem>
								))}
						</Card>
				);
		}
}
