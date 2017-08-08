import React from 'react';
import { Link } from 'react-router-dom';
import { keyframes } from 'emotion';
import styled from 'emotion/react';

const SplashIn = keyframes`
  from { transform: scale(3) perspective(500px); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const Wrapper = styled.div`
  display: flex;
  user-select: none;
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
  padding: 15px 50px;
  flex: 1;
  background: linear-gradient(141deg, #1d8881 0%, #2b9eab 51%, #2387ad 75%);
  text-align: center;
  border: 1px solid black;
  transition: all 0.25s;
  text-transform: uppercase;
  text-overflow: ellipsis;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  color: #0a0a0a;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  }
  @media(max-width: 800px) {
    padding: 25px 5px;
  }
  @media(max-width: 500px) {
    padding: 25px 0px;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Heading>
        ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ
        <br />
        ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਹਿ 
      </Heading>
      <HomeWrapper>
        <HomeLink to="/hukamnama">Hukamnama</HomeLink>
      </HomeWrapper>
      <HomeWrapper>
        <HomeLink to="/nitnem">Nitnem</HomeLink>
        <HomeLink to="/sggs">Sehaj Paath</HomeLink>
      </HomeWrapper>
      <HomeWrapper>
        <HomeLink to="/authors">Authors</HomeLink>
        <HomeLink to="/raags">Raags</HomeLink>
      </HomeWrapper>
      <HomeWrapper>
        <HomeLink to="/bookmarks">Bookmarks</HomeLink>
        <HomeLink to="/settings">Settings</HomeLink>
      </HomeWrapper>
    </Wrapper>
  );
};
