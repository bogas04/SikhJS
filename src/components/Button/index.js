import styled from 'emotion/react';

export default styled.button`
  color: ${({ dark }) => dark ? `white` : `black`};
  ${({ naked, noBorder }) => (
    naked
    ? `
        background-color: transparent;
        border: none;
        outline: none;
      `
    : `
        background-color: white;
        ${
         noBorder
           ? `
               border: none;
             `
           : `
               border: 1px solid grey;
               border-radius: 2px;
               box-shadow: 0px 0px 4px -1px #313131;
             `
        }
      `
  )}
  font-weight: 100;
  font-size: ${({ size = 16 }) => `${size}px`};
  margin: 2px 5px;
  padding: 5px 10px;
  transition: all 0.25s, color 0.125s;
  &:active {
    ${({ naked }) => (
      naked
      ? `
          color: grey;
        `
      : `
          border-color: teal;
        `
    )}
  }
  &:hover {
    ${({ naked, dark }) => (
      naked
      ? `
          color: ${dark ? 'white' : 'black'};
        `
      : `
          border-color: teal;
          background-color: teal;
          color: white;
        `
    )}
  }
`;
