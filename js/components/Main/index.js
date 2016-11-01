import React from 'react';
import { baanies, getSettings, setSettings } from '../../constants';
import Greeting from '../Greeting';
import styles from './styles';

import { Link } from 'react-router';
import { Throttle } from 'react-throttle';
import Hammer from 'react-hammerjs';
import { FooterDropDownSection, FooterLinkList, IconButton, Content, Slider, Button, Layout, Header, Drawer, Navigation } from 'react-mdl';

export default ({ children, onNightModeToggle, nightMode }) => {

  const handleSwipe = () => document.querySelector('.mdl-layout__drawer-button').click();

  const updateFontSize = v => {
    document.querySelector('#baaniWrapper').style.fontSize = `${20 * v}px`;
    let newSettings = getSettings();
    newSettings.fontSizeMultiplier = v;
    setSettings(newSettings);
  };

  const nBaanies = baanies.nitnem.map(({ title }) => <Link key={title} to={`/nitnem/${title}`}>{title}</Link>);

  return (
    <div style={styles.wrapper}>
      <Layout fixedHeader>

        <Header style={styles.header} title={`SikhJS`}>
          <Navigation>
            <Throttle time="200" handler="onChange" key={1}>
              <Slider min={0.25} max={1.75} step={0.1} defaultValue={getSettings().fontSizeMultiplier}
                onChange={e => updateFontSize(e.target.value)} />
            </Throttle>
            <IconButton onClick={e => onNightModeToggle()} name="invert_colors" />
          </Navigation>
        </Header>

        <Drawer title="SikhJS" style={styles.drawer(nightMode)}>
          <Navigation>
            <Link to={`/`} >Home</Link>
            <Link to={`/hukamnama`} >Hukamnama</Link>
            <Link to={`/sggs`} >Sri Guru Granth Sahib</Link>
            <Link to={`/nitnem`} >Nitnem</Link>
            <Link to={`/shabads`} >Search Shabads</Link>
            <Link to={`/calendar`} >Calendar</Link>
            <Link to={`/authors`} >Authors</Link>
            <Link to={`/raags`} >Raags</Link>
            <Link to={`/bookmarks`} >Bookmarks</Link>

            <a href="https://github.com/bogas04/SikhJS/issues/new" target="_blank">Report Issue</a>

            <Link to={`/about`}>About</Link>
          </Navigation>
        </Drawer>

        <Content>
          <Hammer onSwipe={handleSwipe} direction={Hammer.DIRECTION_HORIZONTAL}>
            <div id="baaniWrapper" style={styles.color(nightMode)}>
              {children || <Greeting />}
            </div>
          </Hammer>
        </Content>

      </Layout>
    </div>
  );
}

