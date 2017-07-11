import React from 'react';

import styled from 'emotion/react';

export default props => {
  const Input = styled.input``;
  return <Input type="range" {...props} />;
};
