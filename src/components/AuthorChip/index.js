import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'emotion/react';
import { GurbaniFont, Chip, Json } from '../';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function AuthorChip ({ english, gurmukhi, id, ...otherProps }) {
  if (english) {
    return (
      <StyledLink to={`/authors/${id}`} {...otherProps}>
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
      }
      </Json>
    </StyledLink>
  );
}

AuthorChip.propTypes = {
  english: PropTypes.string,
  gurmukhi: PropTypes.string,
  id: PropTypes.number,
};

export default AuthorChip;
