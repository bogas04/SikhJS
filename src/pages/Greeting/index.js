import React from 'react';

import styled, { keyframes } from 'styled-components';

import GurbaniFont from '../../components/GurbaniFont';

const SplashIn = keyframes`
  from { transform: scale(3); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100% ;
`;

const Heading = styled.h1`
  animation: ${SplashIn} 0.25s ease-in;
  font-size: 10vw !important;
  font-weight: 100;
  text-align: center;
  line-height: 1.4em !important;
`;

export default () => {
  return (
    <Wrapper>
      <GurbaniFont>
        <Heading>
          vwihgurU jI kw Kwlsw
          <br />
          vwihgurU jI kI Pqih
        </Heading>
      </GurbaniFont>
    </Wrapper>
  );
};
