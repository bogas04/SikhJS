import React from 'react';

import styled from 'emotion/react';

const Input = styled.input``;

export default props => {
  return <Input type="range" {...props} />;
};
