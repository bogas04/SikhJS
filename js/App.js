import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Nav from './components/Nav';
import Greeting from './components/Greeting';
import About from './components/About';
import Baani from './components/Baani';
import SGGS from './components/SGGS';
import Nitnem from './components/Nitnem';
import Calendar from './components/Calendar';
import Shabad from './components/Shabad';
import Shabads from './components/Shabads';

const App = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className = "text-center" id = "baaniWrapper" tabIndex={0}>
        {children || <Greeting />}
      </div>
    </div>
  );
};

render((
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
    </Route>
  </Router>
), document.getElementById('root'));
