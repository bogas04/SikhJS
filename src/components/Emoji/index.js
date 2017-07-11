import styled from 'emotion/react';

export default styled.span`
  color: transparent;
  text-shadow: ${({ color = 'white' }) => `0 0 0 ${color}`};
`;
