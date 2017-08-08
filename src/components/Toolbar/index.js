import PropTypes from 'prop-types';
import React from 'react';

import styled from 'emotion/react';

const Wrapper = styled.div`
  z-index: 1;
  user-select: none;
  margin-top: -64px;
  background-color: #606060;
  color: white;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  @media(min-width: 1000px) {
    position: sticky;
    top: 0;
  }
`;

const Title = styled.h2`
  cursor: default;
  background-color: #9a9a9a;
  margin: 0;
  margin-right: 10px;
  padding: 10px;
  @media(max-width: 1330px) {
    display: none;
  }
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
