import styled from '@emotion/styled';

const CardHeader = styled.div `
  display: grid;
  border-bottom: 1px solid #EEF0F2;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};

`;

export default CardHeader;