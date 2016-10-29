import React, { Component } from 'react';
import { Link } from 'react-router';

import { baanies, getSettings, setSettings } from '../../constants';
import { Throttle } from 'react-throttle';

import { Content, Slider, Button, Layout, Header, Drawer, Navigation } from 'react-mdl';

export default ({ children, onNightModeToggle }) => {
  const updateFontSize = (v) => {
    document.querySelector('#baaniWrapper').style.fontSize = `${20 * v}px`;
    let newSettings = getSettings();
    newSettings.fontSizeMultiplier = v;
    setSettings(newSettings);
  };
  const nBaanies = baanies.nitnem.map(({ title }) => <Link to={`/nitnem/${title}`}>{title}</Link>);


  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Layout fixedHeader>
        <Header title={`SikhJS`} />
        <Drawer title="SikhJS">
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
            <Throttle time="200" handler="onChange" key={1}>
              <Slider min={0.25} max={1.75} step={0.1} defaultValue={getSettings().fontSizeMultiplier}
                onChange={e => updateFontSize(e.target.value)} />
            </Throttle>
            <Button ripple onClick={e => onNightModeToggle()}>Night Mode</Button>
            <a href="https://github.com/bogas04/SikhJS/issues/new" target="_blank">Report Issue</a>
            <Link to={`/about`}>About</Link>
          </Navigation>
        </Drawer>
        <Content>
          {children}
        </Content>
      </Layout>
    </div>
  );
}
