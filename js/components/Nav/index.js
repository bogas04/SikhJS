import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Input } from 'reactstrap';

export default class _Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nightMode: false
    };
  }
  render () {
    return (
      <Navbar className="bg-inverse" dark fixed="bottom" id="menuWrapper">
        /*
        <Button 
          className="navbar-toggler bg-inverse hidden-lg-up"
          data-toggle="collapse"
          data-target="#exCollapsingNavbar2"
          aria-controls="exCollapsingNavbar2"
          aria-expanded="false"
          aria-label="Toggle navigation"
          children="&#9776;"
        />
        */
        <NavbarBrand tag={Link} to="/" style = {{fontFamily: 'gurmukhi_heavy'}} children="Ç" />
        <div className="collapse navbar-toggleable-md" id="exCollapsingNavbar2">
          <Nav navbar >
            <NavItem><NavLink tag={Link} to={`/about`}> About </NavLink></NavItem>
            <NavItem><NavLink tag={Link} to={`/calendar`}> Calendar </NavLink></NavItem>
            <NavItem><NavLink tag={Link} to={`/sggs`}> Sri Guru Granth Sahib </NavLink></NavItem>
            <NavItem><NavLink tag={Link} to={`/nitnem`}> Nitnem </NavLink></NavItem>
          </Nav>
          <Nav className="pull-xs-right" navbar>
            <Form inline>
              <FormGroup>
                <Input
                  id = "fontChanger"
                  type = "range"
                  name = "font-size"
                  min = "1"
                  max = "10"
                  step = "0.1"
                  onChange = {(e) => this.updateFontSize(e)}
                />
              </FormGroup>
            </Form>
          </Nav>
          <Nav className="pull-xs-right" navbar>
            <NavItem onClick={e => { this.toggleNightMode(e); return false }}>
              <NavLink role="button">Night Mode</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      );
  }
  toggleNightMode (e) {
    //TODO: Handle this React way
    if (this.state.nightMode) {
      e.currentTarget.classList.remove('night-mode');
      document.getElementById('baaniWrapper').classList.remove('night-mode');
    } else {
      e.currentTarget.classList.add('night-mode');
      document.getElementById('baaniWrapper').classList.add('night-mode');
    }
    this.setState({
      nightMode : !this.state.nightMode
    });
  }
  updateFontSize (e) {
    document.getElementById('baaniWrapper').style.fontSize = ((35 * e.target.value) + '%');
  }
}
