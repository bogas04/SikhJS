import React from 'react';

import styled from 'styled-components';

export default props => {
  const Input = styled.input``;
  return <Input type="range" {...props} />;
};
