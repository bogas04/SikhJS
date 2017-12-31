import React from 'react';
import styled from 'emotion/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { decreaseFontSize, increaseFontSize, toggleNightMode, toggleOnlineMode } from '../../features/actions';
import { Information, Bug, Prayer } from '../../components/Icons';
import Nav, { NavItem } from '../../components/Nav';
import NightModeToggler from './NightModeToggler';

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

const Header = ({ online, decreaseFontSize, increaseFontSize, toggleNightMode }) => (
  <Nav online={online}>
    <NavItem>
      <StyledLink title="Home" to={`/`} >
        <Prayer />
      </StyledLink>
    </NavItem>
    <NavItem title="Adjust font size" pointer onClick={decreaseFontSize}>
      a
    </NavItem>
    <NavItem title="Adjust font size" pointer onClick={increaseFontSize}>
      A
    </NavItem>
    <NavItem onClick={toggleNightMode}>
      <NightModeToggler />
    </NavItem>

    <NavItem>
      <StyledAnchor
        title="About"
        href="https://github.com/bogas04/SikhJS"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Information />
      </StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor
        title="Report Issue"
        href="https://github.com/bogas04/SikhJS/issues/new"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Bug />
      </StyledAnchor>
    </NavItem>
  </Nav>
);

const mapDispatchToProps = { toggleOnlineMode, toggleNightMode, increaseFontSize, decreaseFontSize };

export default connect(({ onlineMode: online }) => ({ online }), mapDispatchToProps)(Header);
