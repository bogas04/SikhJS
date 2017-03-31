import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: -64px;
  background-color: #606060;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
`;

export default function Toolbar ({ title = null, children }) {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      {children}
    </Wrapper>
  );
}

Toolbar.propTypes = {
  title: React.PropTypes.node,
  children: React.PropTypes.node,
};
