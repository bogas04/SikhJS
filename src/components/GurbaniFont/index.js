import styled from 'emotion/react';

export default styled.div`
  line-height: 1em;
  display: ${({ inline }) => inline ? 'inline' : 'block'};
  font-family: ${({ disabled }) => disabled ? 'inherit' : 'gurmukhi_heavy' };
  & input {
    font-family: ${({ disabled }) => disabled ? 'inherit' : 'gurmukhi_heavy' };
  }
`;
