import React from 'react';
import styled from 'emotion/react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SOURCES } from 'khajana';
import {
  Author, Raag, Raags, Authors, Home, Bookmarks, Hukamnama, Baani,
  SGGS, Nitnem, Calendar, Shabad, Shabads, NotFound, Settings,
} from '../';
import pageTitleEnchancer from '../pageTitleEnchancer';
import { Search } from '../../components/Icons';
import { DisplayOnScroll, FloatingIcon } from '../../components';

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

const propsToParamTitle = param => props => props.match.params[param];
const propsToSGGSTitle = props => 'Sri Guru Granth Sahib - Ang ' + props.match.params.ang;
const Content = () => (
  <div>
    <BaaniWrapper id="baaniWrapper">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sggs/:ang?" component={pageTitleEnchancer(propsToSGGSTitle)(SGGS)} />
        <Route path="/calendar" component={pageTitleEnchancer('Calendar')(Calendar)} />
        <Route path="/shabads/:q([a-z]+)?" exact component={pageTitleEnchancer('Search Shabads')(Shabads)} />
        <Route path="/shabads/:id(\d+)" exact component={Shabad} />
        <Route path="/settings" component={pageTitleEnchancer('Settings')(Settings)} />
        <Route path="/bookmarks" component={pageTitleEnchancer('Bookmarks')(Bookmarks)} />
        <Route path="/authors" exact component={pageTitleEnchancer('Authors')(Authors)} />
        <Route path="/authors/:id/:name?" component={pageTitleEnchancer(propsToParamTitle('name'))(Author)} />
        <Route path="/raags" exact component={pageTitleEnchancer('Raags')(Raags)} />
        <Route path="/raags/:id/:name" component={pageTitleEnchancer(propsToParamTitle('name'))(Raag)} />
        <Route path="/nitnem" exact component={pageTitleEnchancer('Nitnem')(Nitnem)} />
        <Route path="/nitnem/:baani" component={pageTitleEnchancer(propsToParamTitle('baani'))(Baani)} />
        <Route path="/hukamnama" component={pageTitleEnchancer('Hukamnama')(Hukamnama)} />
        <Route component={NotFound} />
      </Switch>
    </BaaniWrapper>
    <Route path="/shabads" exact>{({ match }) => !match && (
      <DisplayOnScroll>
        <FloatingIcon to="/shabads">
          <Search height="30px" width="30px" />
        </FloatingIcon>
      </DisplayOnScroll>
    )}</Route>
  </div>
);

export default Content;