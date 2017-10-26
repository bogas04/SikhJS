import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';
import { SOURCES } from 'khajana';
import { GurbaniFont, LinkButton, Card as CardView } from '../../components/';

const Capitalize = styled.span`
  text-transform: capitalize;
`;

export default function SearchCard (props) {
  const { transliteration, gurbani, shabadid, source } = props;

  return (
    <CardView
      title={<GurbaniFont>{gurbani.gurmukhi}</GurbaniFont>}
      text={<Capitalize>{transliteration}</Capitalize>}
      actions={[
        <LinkButton key={0} to={`/shabads/${shabadid}`}>
          Open Shabad
        </LinkButton>,
        <LinkButton key={1} to={`/SGGS/${source.pageno}`} disabled={source.id !== 'G'}>
          {`${SOURCES[source.id]} Ang ${source.pageno}`}
        </LinkButton>,
        <LinkButton key={2} to={`/SGGS/${source.pageno}`} disabled>
          Open Raag
        </LinkButton>,
      ]}
    />
  );
}

SearchCard.propTypes = {
  transliteration: PropTypes.string,
  gurbani: PropTypes.object,
  shabadid: PropTypes.string,
  source: PropTypes.object,
};
