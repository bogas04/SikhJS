import styled from 'react-emotion';

export default styled.button`
  color: ${({ dark }) => dark ? `white` : `black`};
  background-color: ${({ naked }) => naked ? 'transparent' : 'white'};
  border: 1px solid darkgrey;
  outline: ${({ naked }) => naked ? 'none' : 'initial'};
  border-radius: '2px';
  font-weight: 100;
  font-size: ${({ size = 16 }) => `${size}px`};
  margin: 2px 5px;
  padding: 5px 10px;
  transition: all 0.25s, color 0.125s;
  &:active {
    color: ${({ naked }) => naked ? 'grey' : 'inherit'};
    border-color: ${({ naked }) => naked ? 'inherit' : 'teal'};;
  }
  &:hover {
    color: ${({ naked, dark }) => naked && !dark ? 'black' : 'white'};
    background-color: ${({ naked }) => naked ? 'inherit' : 'teal'};
    border-color: ${({ naked }) => naked ? 'inherit' : 'teal'};
  }
`;
