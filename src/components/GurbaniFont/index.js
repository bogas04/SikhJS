import styled from 'styled-components';

export default styled.div`
  line-height: 1em;
  display: ${({ inline }) => inline ? 'inline' : 'block'};
  ${({ disabled }) => disabled
    ? `
      `
    : `
        font-family: gurmukhi_heavy;
        & input {
          font-family: gurmukhi_heavy;
        }
      `
  }
`;
