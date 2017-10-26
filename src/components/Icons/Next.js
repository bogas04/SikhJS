import React from 'react';
import Previous from './Previous';

export default ({ style = {}, ...props }) => (
  <Previous
    style={{ ...style, transform: `rotateY(180deg)` }}
    {...props}
  />
);
