import React from 'react';
import styled from 'emotion/react';
import GurbaniFont from '../../components/GurbaniFont';

const Wrapper = styled.div`
  padding: 0 5vw;
`;

export default class NotFound extends React.PureComponent {
  render() {
    const { pathname: url } = this.props.location;

    return (
      <Wrapper>
        <h1>
          <GurbaniFont>404 - ਮਾਫ਼ ਕਰ ਦੇਵੋ [ <code style={{ color: 'crimson' }}>{url}</code> ਪੰਨਾ ਮਿਲਿਆ ਨਹੀਂ [</GurbaniFont>
          404 - <code style={{ color: 'crimson' }}>{url}</code> Page not found.
        </h1>
      </Wrapper>
    );
  }
}

