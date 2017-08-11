import styled from 'emotion/react';

export default styled.input`
  border-radius: 1px;
  background-color: #fafafa;
  border: 1px solid darkgrey;
  padding: 10px;
  margin: 5px;
  width: ${({ size }) => size ? `${size}px` : '280px'};
  max-width: 80vw;
  font-size: 16px;
  font-family: inherit;
  text-align: ${({ center }) => center ? 'center' : 'initial'};
  &:focus {
    outline: none;
    border-color: teal;
  }
`;
