import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import { Nav, Greeting, Hukamnama, About, Baani, SGGS, Nitnem, Calendar, Shabad, Shabads } from './components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = ({ children }) => {
  return (
    <div>
      <Nav />
      <div id="baaniWrapper">
        {children || <Greeting />}
      </div>
    </div>
  );
};

render(
  <MuiThemeProvider>
    <Router history={hashHistory} onUpdate={() => document.getElementById('baaniWrapper').scrollTop = 0}>
      <Route path="/" component={App} >
        <Route path="about" component={About}/>
        <Route path="sggs" component={SGGS} />
        <Route path="sggs/:ang" component={SGGS} />
        <Route path="calendar" component={Calendar}/>
        <Route path="shabads" component={Shabads}/>
        <Route path="shabads/:shabad" component={Shabad}/>
        <Route path="nitnem" component={Nitnem}/>
        <Route path="nitnem/:baani" component={Baani}/>
        <Route path="hukamnama" component={Hukamnama}/>
      </Route>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root')
);
