import styled from '@emotion/styled';

const CardBody = styled.div `
  /* height: 100px; */
  display: grid;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  justify-content: center;
  grid-gap: ${props => props.gridgap};
`;

export default CardBody;