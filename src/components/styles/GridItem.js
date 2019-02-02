import styled from "@emotion/styled";

const GridItem = styled.div `
	display: grid;
	border: ${props => props.border};
	height: 50px;
`;

export default GridItem;
