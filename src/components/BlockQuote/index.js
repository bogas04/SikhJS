import styled from 'react-emotion';
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
  margin: 0;
  margin-bottom: 1em;
  padding: 0;
  padding-left: 1em;
  line-height: 1.6em;
  font-size: inherit;
  border-left: 3px solid grey;
  animation: ${slide} normal .25s;
`;
