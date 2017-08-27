import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import styled from 'emotion/react';
import Header from './Header';
import Content from './Content';
import { Search } from '../../components/Icons';
import FloatingIcon from '../../components/FloatingIcon';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

injectGlobal`
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
  }
  p::selection, span::selection, a::selection, div::selection, blockquote::selection {
    background-color: orange !important;
    color: black !important;
  }
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