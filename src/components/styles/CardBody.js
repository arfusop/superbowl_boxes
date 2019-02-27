import styled from '@emotion/styled';

const CardBody = styled.div `
  /* height: 100px; */
  display: grid;
  padding: 10px;
  border-bottom: 1px solid #EEF0F2;
  justify-content: center;
  grid-gap: ${props => props.gridgap};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  grid-template-columns: ${props => props.gtr};
`;

export default CardBody;