import React, { Component } from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Main, Raags, Authors, Bookmarks, Hukamnama, About, Baani, SGGS, Nitnem, Calendar, Shabad, Shabads } from './components';

import { getSettings, setSettings } from './constants';

export default class Root extends Component {
  constructor(p) {
    super(p);
    const { nightMode } = getSettings();
    this.state = { nightMode };
    document.body.style.backgroundColor = nightMode ? '#212121' : '';
  }
  toggleNightMode() {
    let newSettings = getSettings();
    newSettings.nightMode = !this.state.nightMode;
    setSettings(newSettings);
    document.body.style.backgroundColor = !this.state.nightMode ? '#212121' : '';
    this.setState({ nightMode: !this.state.nightMode });
  }
  render() {
    const App = props => (<Main onNightModeToggle={() => this.toggleNightMode()} nightMode={this.state.nightMode} {...props} />);

    return (
      <Router history={hashHistory} onUpdate={() => document.body.scrollTop = 0}>
        <Route path="/" component={App} >
          <Route path="about" component={About} />
          <Route path="sggs" component={SGGS} />
          <Route path="sggs/:ang" component={SGGS} />
          <Route path="calendar" component={Calendar} />
          <Route path="shabads" component={Shabads} />
          <Route path="bookmarks" component={Bookmarks} />
          <Route path="authors" component={Authors} />
          <Route path="raags" component={Raags} />
          <Route path="shabads/:q" component={Shabads} />
          <Route path="shabad/:id" component={Shabad} />
          <Route path="nitnem" component={Nitnem} />
          <Route path="nitnem/:baani" component={Baani} />
          <Route path="hukamnama" component={Hukamnama} />
        </Route>
      </Router>
    );
  }
}
