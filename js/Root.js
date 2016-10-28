import React, { Component } from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import { getSettings, setSettings } from './constants';
import { Raags, Authors, Bookmarks, Nav, Greeting, Hukamnama, About, Baani, SGGS, Nitnem, Calendar, Shabad, Shabads } from './components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white, darkBlack, fullBlack, } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Root extends Component {
  constructor(p) {
    super(p);
    const { nightMode } = getSettings();
    this.state = { nightMode };
  }
  toggleNightMode() {
    let newSettings = getSettings();
    newSettings.nightMode = !this.state.nightMode;
    setSettings(newSettings);
    this.setState({ nightMode: !this.state.nightMode });
  }
  render() {
    const App = ({ children }) => {
      return (
        <div>
          <Nav onNightModeToggle={() => this.toggleNightMode()}/>
          <div id="baaniWrapper" style={this.state.nightMode ? { backgroundColor: darkBlack, color: white } : {}}>
            {children || <Greeting />}
          </div>
        </div>
      );
    };
    const darkTheme = Object.assign({}, darkBaseTheme, { canvasColor: darkBlack });

    return <MuiThemeProvider {... (this.state.nightMode ? { muiTheme: getMuiTheme(darkTheme) } : {}) }>
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
    </MuiThemeProvider>
  }
}
