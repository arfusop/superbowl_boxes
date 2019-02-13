import styled from "@emotion/styled";

const Initials = styled.div `
	border: 1px solid #ccc;
	display: grid;
	justify-content: center;
  align-items: center;
  border: ${props => props.border};
	background-color: ${props => props.backgroundColor};
`;

export default Initials;
