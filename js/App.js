import React from 'react';
import { Nav, Greeting, } from './components';

export default const App = ({ children }) => {
  return (
    <div>
      <Nav onNightModeToggle={() => this.toggleNightMode()}/>
      <div id="baaniWrapper" style={this.state.nightMode ? { backgroundColor: '#212121', color: white } : {}}>
        {children || <Greeting />}
      </div>
    </div>
  );
};

