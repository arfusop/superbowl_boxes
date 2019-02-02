import styled from "@emotion/styled";

const Card = styled.div`
	display: grid;
	padding: ${props => props.padding};
	margin: ${props => props.margin};
	border: 1px solid #cccccc;
	border-radius: 5px;
	box-shadow: 0 8px 6px -6px black;
	grid-template-columns: ${props => props.gtc};
`;

export default Card;
