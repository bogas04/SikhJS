import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { LinkButton, Card as CardView } from '../../components/';
import styled from 'emotion/react';

const Capitalize = styled.span`
  text-transform: capitalize;
`;

export default function SearchCard(props) {
  const { transliteration, gurbani, shabadid, source } = props;

  return (
    <CardView
      title={<span className="gurbani-text">{gurbani.gurmukhi}</span>}
      text={<Capitalize>{transliteration}</Capitalize>}
      actions={[
        <LinkButton key={0} to={`/shabads/${shabadid}`}>
          Open Shabad
        </LinkButton>,
        <LinkButton key={1} to={`/SGGS/${source.pageno}`} disabled={source.id !== 'G'}>
          {`Open Ang ${source.pageno}`}
        </LinkButton>,
        <LinkButton key={2} to={`/SGGS/${source.pageno}`} disabled>
          Open Raag
        </LinkButton>,
      ]}
    />
  );
};

SearchCard.propTypes = {
  transliteration: PropTypes.string,
  gurbani: PropTypes.object,
  shabadid: PropTypes.string,
  source: PropTypes.object,
};