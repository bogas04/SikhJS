import styled from 'emotion/react';
import { keyframes } from 'emotion';

export const slide = keyframes`
  from {
    transform: translate(-20px, 0);
  }
  to {
    transform: translate(0, 0);
  }
`;

export default styled.blockquote`
  margin: 5px 0;
  padding: 0;
  padding-left: 15px;
  font-size: inherit;
  border-left: 3px solid grey;
  animation: ${slide} normal .25s;
`;
