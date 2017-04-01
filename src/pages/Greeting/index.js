import React from 'react';

import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

import GurbaniFont from '../../components/GurbaniFont';

const SplashIn = keyframes`
  from { transform: scale(3) perspective(500px); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100% ;
  padding-bottom: 25vh;
  animation: ${SplashIn} 0.25s ease-in;
`;

const Heading = styled.h1`
  font-size: 5vw !important;
  font-weight: 100;
  text-align: center;
  line-height: 1.4em !important;
`;

const HomeWrapper = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  justify-content: center;
`;

const HomeLink = styled(Link)`
  display: block;
  padding: 25px 50px;
  flex: 1;
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  text-align: center;
  border: 1px solid black;
  transition: all 0.25s;
  text-transform: uppercase;
  text-overflow: ellipsis;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  color: black;
  margin: 10px;
  border-radius: 5px;
  &:hover {
    background: linear-gradient(141deg, #4fe8dd 0%, #4ff8fb 51%, #5cf5ec 75%);
  }
`;

export default () => {
  return (
    <Wrapper>
      <Heading>
        <GurbaniFont>
          vwihgurU jI kw Kwlsw
          <br />
          vwihgurU jI kI Pqih
        </GurbaniFont>
      </Heading>
      <HomeWrapper>
        <HomeLink to="/hukamnama">Hukamnama</HomeLink>
        <HomeLink to="/sggs">Sehaj Paath</HomeLink>
      </HomeWrapper>
      <HomeWrapper>
        <HomeLink to="/nitnem">Nitnem</HomeLink>
        <HomeLink to="/bookmarks">Bookmarks</HomeLink>
      </HomeWrapper>
      <HomeWrapper>
        <HomeLink to="/authors">Authors</HomeLink>
        <HomeLink to="/raags">Raags</HomeLink>
      </HomeWrapper>
    </Wrapper>
  );
};
