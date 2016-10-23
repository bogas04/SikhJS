import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { baanies } from '../../constants';
import { Throttle } from 'react-throttle';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';

export default withRouter(class Nav extends Component {
  constructor(p) {
    super(p);
    this.state = {
      nightMode: false,
      showDrawer: false,
    };
  }
  render () {
    const { push } = this.props.router
      , nBaanies = baanies.nitnem.map(({ title }) => <MenuItem key={title} onTouchTap={e => { push(`/nitnem/${title}`); this.toggleDrawer(); }} primaryText={title} />);
    return (
      <div>
        <AppBar
          style={{ top: 0, left: 0, position: 'fixed' }} title="SikhJS"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={e => this.toggleDrawer(e)}
        />
        <Drawer open={this.state.showDrawer} docked={false} width={350} onRequestChange={e => this.toggleDrawer()}>
          <MenuItem onTouchTap={e => { push(`/`); this.toggleDrawer()}} primaryText="Home" />
          <MenuItem onTouchTap={e => { push(`/hukamnama`); this.toggleDrawer(); }} primaryText="Hukamnama" />
          <MenuItem onTouchTap={e => { push(`/sggs`); this.toggleDrawer(); }} primaryText="Sri Guru Granth Sahib" />
          <MenuItem onTouchTap={e => { push(`/nitnem`); this.toggleDrawer(); }} primaryText="Nitnem" nestedItems={nBaanies} />
          <MenuItem onTouchTap={e => { push(`/shabads`); this.toggleDrawer(); }} primaryText="Shabads" /> 
          <MenuItem onTouchTap={e => { push(`/calendar`); this.toggleDrawer(); }} primaryText="Calendar" />
          <MenuItem onTouchTap={e => { push(`/about`); this.toggleDrawer(); }} primaryText="About" />
          <MenuItem>
            Font Size
            {' '}
            <Throttle time="200" handler="onChange">
              <Slider min={0.5} max={1.5} step={0.1} defaultValue={1} onChange={(e, v) => this.updateFontSize(v)} />
            </Throttle>
          </MenuItem>
          <MenuItem><Toggle label="Night Mode" onToggle={e => this.toggleNightMode(e)} /></MenuItem>
        </Drawer>
      </div>
    );
  }
  toggleDrawer(e) {
    this.setState({ showDrawer: !this.state.showDrawer });
    e && e.stopPropagation() && e.preventDefault();
  }
  toggleNightMode (e) {
    let { nightMode } = this.state;
    document.body.classList.toggle('night-mode');
    this.setState({ nightMode : !nightMode });
  }
  updateFontSize (v) { document.querySelector('#baaniWrapper').style.fontSize = `${20 * v}px`; }
})
