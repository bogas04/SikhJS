import React, { Component } from 'react';
import { Link } from 'react-router';
import { Throttle } from 'react-throttle';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';

export default class Nav extends Component {
  constructor(p) {
    super(p);
    this.state = {
      nightMode: false,
      showDrawer: false,
    };
  }
  render () {
    return (
      <div>
        <AppBar
          style={{ top: 0, left: 0, position: 'fixed' }}
          title="SikhJS"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={e => this.toggleDrawer()}
        />
        <Drawer open={this.state.showDrawer} docked={false} width={200} onRequestChange={e => this.toggleDrawer()}>
          <Link to={`/`}><MenuItem onTouchTap={e => this.toggleDrawer()}>Home</MenuItem></Link>
          <Link to={`/hukamnama`}><MenuItem onTouchTap={e => this.toggleDrawer()}>Hukamnama</MenuItem></Link>
          <Link to={`/calendar`}><MenuItem onTouchTap={e => this.toggleDrawer()}>Calendar</MenuItem></Link>
          <Link to={`/sggs`}><MenuItem onTouchTap={e => this.toggleDrawer()}>Sri Guru Granth Sahib</MenuItem></Link>
          <Link to={`/nitnem`}><MenuItem onTouchTap={e => this.toggleDrawer()}>Nitnem</MenuItem></Link>
          <Link to={`/shabads`}><MenuItem onTouchTap={e => this.toggleDrawer()}>Shabads</MenuItem></Link>
          <Link to={`/about`}><MenuItem onTouchTap={e => this.toggleDrawer()}>About</MenuItem></Link>
          <MenuItem>Font Size<Throttle time="200" handler="onChange"><Slider min={1} max={10} step={0.1} onChange={(e, v) => this.updateFontSize(v)} /></Throttle></MenuItem>
          <MenuItem><Toggle label="Night Mode" onToggle={e => this.toggleNightMode(e)} /></MenuItem>
        </Drawer>
      </div>
    );
  }
  toggleDrawer() {
    this.setState({ showDrawer: !this.state.showDrawer });
  }
  toggleNightMode (e) {
    let { nightMode } = this.state;
    const $baaniWrapper = document.getElementById('baaniWrapper');
    $baaniWrapper.classList.toggle('night-mode');
    this.setState({ nightMode : !nightMode });
  }
  updateFontSize (v) {
    document.querySelectorAll('.gurbani-text').forEach(e => {
      e.style.fontSize = ((35 * v) + '%');
    });
  }
}
