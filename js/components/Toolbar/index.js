import React from 'react';

const style = {
  marginTop: -64,
  backgroundColor: '#606060',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: 5,
  alignItems: 'center',
};
export default ({ title = null, children }) => (
  <div style={style}>
    {title && <h4>{title}</h4>}
    {children}
  </div>
);
