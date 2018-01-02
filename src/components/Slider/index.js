import React from 'react';

import styled from 'react-emotion';

const Input = styled.input``;

export default props => {
  return <Input type="range" {...props} />;
};
