import styled from "@emotion/styled";

const Card = styled.div `
	display: grid;
	padding: ${props => props.padding};
	margin: ${props => props.margin};
	border: ${props => props.border};
	border-radius: 5px;
	box-shadow: ${props => props.boxShadow};
	grid-template-columns: ${props => props.gtc};
	grid-template-rows: ${props => props.gtr}
`;

export default Card;
