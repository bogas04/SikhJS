import React from 'react';
import styled from 'emotion/react';
import { BlockQuote } from '../../components';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';
import Larivaared from './Larivaared';

const Translation = styled.div`
  display: ${({ showTranslation, larivaar }) => showTranslation
    ? 'block'
    : larivaar
      ? 'inline-block'
      : 'inline'
  };
  @media(max-width: 500px) {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

function AngContent({ larivaarAssist, showTranslation, larivaar, lines }) {
  return (
    <span>
      {
        lines.map(({ id, text, translation }) =>
          <Translation className="line" key={id} showTranslation={showTranslation} larivaar={larivaar}>
            <Larivaared larivaarAssist={larivaarAssist} enabled={larivaar}>{text}</Larivaared>
            {showTranslation ? <BlockQuote className="english">{translation.text}</BlockQuote> : ''}
          </Translation>
        )
      }
    </span>
  );
}

const shouldComponentUpdate = (c, n) => (
  notEqualsSome(['larivaar', 'larivaarAssist', 'showTranslation'])(c, n) ||
  c.lines.some((v, i) => v.text !== n.lines[i].text)
);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(AngContent);