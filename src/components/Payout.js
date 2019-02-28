import React, { Component } from "react";
import Card from "../components/styles/Card";
import CardHeader from "../components/styles/CardHeader";
import CardBody from "../components/styles/CardBody";

export default class Payout extends Component {
	state = {
		q1: 0,
		q2: 0,
		q3: 0,
		q4: 0,
		total: 0
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState(
			{
				[name]: value
			},
			() => {
				const { q1, q2, q3, q4 } = this.state;
				const newTotal = Number(q1) + Number(q2) + Number(q3) + Number(q4);
				this.setState({ total: newTotal });
			}
		);
	};

	render() {
		const { q1, q2, q3, q4, total } = this.state;
		return (
			<Card
				gtr="40px 1fr"
				border="1px solid #EEF0F2"
				boxShadow="0 8px 6px -6px #FFE053"
			>
				<CardHeader color="#fff" bgColor="#6d757d">
					Payouts
				</CardHeader>
				<CardBody bgColor="#011638" color="#fff">
					<div className="payoutContainers">
						<span>Q1: $</span>
						<input
							name="q1"
							className="payoutInput"
							type="text"
							onChange={e => this.handleChange(e)}
							defaultValue={q1}
						/>
					</div>
					<div className="payoutContainers">
						<span>Q2: $</span>
						<input
							name="q2"
							className="payoutInput"
							type="text"
							onChange={e => this.handleChange(e)}
							defaultValue={q2}
						/>
					</div>
					<div className="payoutContainers">
						<span>Q3: $</span>
						<input
							name="q3"
							className="payoutInput"
							type="text"
							onChange={e => this.handleChange(e)}
							defaultValue={q3}
						/>
					</div>
					<div className="payoutContainers">
						<span>Q4: $</span>
						<input
							name="q4"
							className="payoutInput"
							type="text"
							onChange={e => this.handleChange(e)}
							defaultValue={q4}
						/>
					</div>
					<div
						style={{
							width: "100%",
							borderTop: "2px solid #EEF0F2"
						}}
					/>
					<div>Total: ${total}</div>
				</CardBody>
			</Card>
		);
	}
}
