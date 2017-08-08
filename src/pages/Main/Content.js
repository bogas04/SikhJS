import React from 'react';
import styled from 'emotion/react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Author, Raag, Raags, Authors, Home, Bookmarks, Hukamnama, Baani,
  SGGS, Nitnem, Calendar, Shabad, Shabads, NotFound, Settings,
} from '../';
import { Search } from '../../components/Icons';
import FloatingIcon from '../../components/FloatingIcon';

const mapStateToProps = ({ fontSize }) => ({ fontSize });

const BaaniWrapper = connect(mapStateToProps, null)(styled.div`
  transition: all 0.25s ease-in-out;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  padding-bottom: 100px;
`);

const Content = () => (
  <div>
    <BaaniWrapper id="baaniWrapper">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sggs/:ang?" component={SGGS} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/shabads/:q([a-z]+)?" exact component={Shabads} />
        <Route path="/shabads/:id(\d+)" exact component={Shabad} />
        <Route path="/settings" component={Settings} />
        <Route path="/bookmarks" component={Bookmarks} />
        <Route path="/authors" exact component={Authors} />
        <Route path="/authors/:id" component={Author} />
        <Route path="/raags" exact component={Raags} />
        <Route path="/raags/:id" component={Raag} />
        <Route path="/nitnem" exact component={Nitnem} />
        <Route path="/nitnem/:baani" component={Baani} />
        <Route path="/hukamnama" component={Hukamnama} />
        <Route component={NotFound} />
      </Switch>
    </BaaniWrapper>
    <Route path="/shabads" exact>{
      ({ match }) => !match && <FloatingIcon to="/shabads">
        <Search height="30px" width="30px" />
      </FloatingIcon>
    }</Route>
  </div>
);

export default Content;