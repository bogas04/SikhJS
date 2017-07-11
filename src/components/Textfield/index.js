import styled from 'emotion/react';

export default styled.input`
  border-radius: 5px;
  box-shadow: 0px 0px 14px 1px #c3c3c3 inset, 0px 0px 5px 1px #313131;
  border: none;
  padding: 10px;
  margin: 5px;
  ${({ size }) => size && `width: ${size}px`}
  font-size: 16px;
  ${({ center }) => center && 'text-align: center;'}
  &:focus {
    outline: none;
  }
`;
