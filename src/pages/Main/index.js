import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'emotion/react';
import Header from './Header';
import Content from './Content';
import { Search } from '../../components/Icons';
import FloatingIcon from '../../components/FloatingIcon';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

export default class Main extends React.PureComponent {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <Content />
        </Wrapper>
      </Router>
    );
  }
}