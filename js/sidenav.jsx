var React = require('react');
var SideNav = require("react-sidenav");

module.exports = ($container) => {
  React.render(
    React.createElement(
    <SideNav.Menu itemHeight="32px" >
      <SideNav.MenuItem itemKey="truck">
        <SideNav.ILeftItem className="fa fa-truck">
          Truck
        </SideNav.ILeftItem>
      </SideNav.MenuItem>
      <SideNav.MenuItem itemKey="bed">
        <SideNav.ILeftItem className="fa fa-bed">
          Bed
        </SideNav.ILeftItem>
      </SideNav.MenuItem>
      <SideNav.MenuItem itemKey="camera">
        <SideNav.ILeftItem className="fa fa-camera">
          Camera
        </SideNav.ILeftItem>
      </SideNav.MenuItem>
    </SideNav.Menu>),
    $container
  )
};
