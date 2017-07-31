import PropTypes from 'prop-types';
import React from 'react';

import styled from 'emotion/react';

const Wrapper = styled.div`
  margin-top: -64px;
  background-color: #606060;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h2`
  background-color: #9a9a9a;
  margin: 0;
  margin-right: 10px;
  padding: 10px;
`;

export default function Toolbar ({ title = null, children }) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

Toolbar.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};
