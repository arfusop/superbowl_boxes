import styled from '@emotion/styled';

const Card = styled.div `
  /* width: 100%; */
  display: grid;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 8px 6px -6px black;
  /* justify-content: center; */
`;

export default Card;