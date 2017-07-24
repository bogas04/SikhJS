import React from 'react';
import styled from 'emotion/react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Author, Raag, Raags, Authors, Home, Bookmarks, Hukamnama, Baani, SGGS, Nitnem, Calendar, Shabad, Shabads,
} from '../';

const mapStateToProps = ({ fontSize }) => ({ fontSize });

const BaaniWrapper = connect(mapStateToProps, null)(styled.div`
  transition: all 0.25s ease-in-out;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`);

const Content = () => (
  <div>
    <BaaniWrapper id="baaniWrapper">
      <Route path="/" component={Home} exact />
      <Route path="/sggs/:ang?" component={SGGS} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/shabads/:q([a-z]+)?" exact component={Shabads} />
      <Route path="/shabads/:id(\d+)" exact component={Shabad} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Route path="/authors" exact component={Authors} />
      <Route path="/authors/:id" component={Author} />
      <Route path="/raags" exact component={Raags} />
      <Route path="/raags/:id" component={Raag} />
      <Route path="/nitnem" exact component={Nitnem} />
      <Route path="/nitnem/:baani" component={Baani} />
      <Route path="/hukamnama" component={Hukamnama} />
    </BaaniWrapper>
  </div>
);

export default Content;