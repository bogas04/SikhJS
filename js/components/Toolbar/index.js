import React from 'react';

const style = {
  marginTop: -64,
  backgroundColor: 'teal',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
export default ({ title, children }) => (
  <div style={style}>
    <h4>{title}</h4>
    {children}
  </div>
);
