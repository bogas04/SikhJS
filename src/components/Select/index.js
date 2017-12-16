import styled from 'react-emotion';

export default styled.select`
  width: 300px;
  border: 1px solid darkgrey;
  background-color: #fafafa;
  text-overflow: ellipsis;
  outline: none;
  overflow: hidden;
  margin: 5px;
  height: 41px;
  border: none;
  max-width: 80vw;
  font-size: 20px;
  padding: 5px;
  &:focus, &:active {
    border-color: teal;
  }
`;
