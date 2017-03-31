import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Json from '../Json';

import Chip from '../Chip';

import GurbaniFont from '../GurbaniFont';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function AuthorChip ({ english, gurmukhi, id }) {
  if (english) {
    return (
      <StyledLink to={`/authors/${id}`}>
        <Chip>
          <span>{english} <GurbaniFont inline>{gurmukhi}</GurbaniFont></span>
        </Chip>
      </StyledLink>
    );
  }

  return (
    <StyledLink to={`/authors/${id}`}>
      <Json url={`assets/docs/json/authors/${id}.json`} showLoader={false}>{
        ({ loading = true, data = {} }) => (
          <Chip>
            {loading ? 'Loading' : `${data.author} ${data.gurmukhi}`}
          </Chip>
        )
      }</Json>
    </StyledLink>
  );
}

AuthorChip.propTypes = {
  english: React.PropTypes.string,
  gurmukhi: React.PropTypes.string,
  id: React.PropTypes.number,
};

export default AuthorChip;
