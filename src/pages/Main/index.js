import React from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import styled from 'styled-components';

import Nav, { NavItem } from '../../components/Nav';

import Slider from '../../components/Slider';

import Emoji from '../../components/Emoji';

import FloatingIcon from '../../components/FloatingIcon';

import { getSettings, setSettings } from '../../constants';

import {
  Author, Raag, Raags, Authors, Bookmarks, Hukamnama, Baani, SGGS, Nitnem, Calendar, Shabad, Shabads,
} from '../';

import Greeting from '../Greeting';

import styles from './styles';

export default class Main extends React.Component {
  constructor (p) {
    super(p);

    const { nightMode } = getSettings();

    this.state = { nightMode };

    this.handleToggleNightMode = this.handleToggleNightMode.bind(this);

    this.handleFontSize = this.handleFontSize.bind(this);

    document.body.style.backgroundColor = nightMode ? '#212121' : '';

    document.body.style.color = nightMode ? 'white' : '';
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    const Content = () => <div>
      <div id="baaniWrapper">
        <Route path="/" component={Greeting} exact />
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
      </div>
    </div>;

    const StyledLink = styled(Link)`
      text-decoration: none;
      color: lightgrey;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 100%;
      &:hover {
        color: white;
      }
      &:active {
        color: darkgrey;
      }
    `;

    const StyledAnchor = styled.a`
      text-decoration: none;
      color: lightgrey;
      text-overflow: ellipsis;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      overflow: hidden;
      &:hover {
        color: white;
      }
      &:active {
        color: darkgrey;
      }
    `;

    const Header = () => <Nav>
      <NavItem>
        <StyledLink title="Home" to={`/`} >
          <Emoji>🙏🏼</Emoji>
        </StyledLink>
      </NavItem>
      <NavItem onClick={this.handleToggleNightMode} title="Night Mode" pointer>
        <Emoji>{this.state.nightMode ? '🌞' : '🌙'}</Emoji>
      </NavItem>
      <NavItem>
        <Slider
          title="Adjust Font Size"
          min={0.25}
          max={1.75}
          step={0.1}
          defaultValue={getSettings().fontSizeMultiplier}
          onChange={this.handleFontSize}
        />
      </NavItem>
      <NavItem>
        <StyledAnchor
          title="About"
          href="https://github.com/bogas04/SikhJS"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Emoji>ⓘ</Emoji>
        </StyledAnchor>
      </NavItem>
      <NavItem>
        <StyledAnchor
          title="Report Issue"
          href="https://github.com/bogas04/SikhJS/issues/new"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Emoji>🐞</Emoji>
        </StyledAnchor>
      </NavItem>
    </Nav>;

    return (
      <Router>
        <div style={styles.wrapper}>
          <Header />
          <Content />
          <Route path="/shabads" exact>{
            ({ match }) => !match && <FloatingIcon to="/shabads"><Emoji>🔍 </Emoji></FloatingIcon>
          }</Route>
        </div>
      </Router>
    );
  }

  handleToggleNightMode () {
    let newSettings = getSettings();

    newSettings.nightMode = !this.state.nightMode;

    setSettings(newSettings);

    document.body.style.backgroundColor = newSettings.nightMode ? '#212121' : '';

    document.body.style.color = newSettings.nightMode ? 'white' : '';

    this.setState({ nightMode: newSettings.nightMode });
  }

  handleFontSize ({ target: { value: v } }) {
    document.querySelector('#baaniWrapper').style.fontSize = `${20 * v}px`;

    let newSettings = getSettings();

    newSettings.fontSizeMultiplier = v;

    setSettings(newSettings);
  }
}
