import styled from 'emotion/react';

export default styled.button`
  color: ${({ dark }) => dark ? `white` : `black`};
  background-color: ${({ naked }) => naked ? 'transparent' : 'white'};
  border: ${({ naked, noBorder }) => naked ? 'none' : (noBorder ? 'none' : '1px solid grey')};
  outline: ${({ naked }) => naked ? 'none' : 'auto'};
  border-radius: ${({ naked, noBorder }) => !naked && !noBorder ? '2px' : 'auto'};
  box-shadow: ${({ naked, noBorder }) => !naked && !noBorder ? '0px 0px 4px -1px #313131' : 'auto'};
  font-weight: 100;
  font-size: ${({ size = 16 }) => `${size}px`};
  margin: 2px 5px;
  padding: 5px 10px;
  transition: all 0.25s, color 0.125s;
  &:active {
    color: ${({ naked }) => naked ? 'grey' : 'inherit' };
    border-color: ${({ naked }) => naked ? 'inherit' : 'teal' };;
  }
  &:hover {
    color: ${({ naked, dark }) => naked && !dark ? 'black' : 'white'};
    background-color: ${({ naked }) => !naked ? 'teal' : 'inherit'};
    border-color: ${({ naked }) => !naked ? 'teal' : 'inherit'};
  }
`;