import React from 'react';
import styled from 'react-emotion';
import { BlockQuote } from '../../components';
import { English } from '../../components/GurbaniFont';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';
import Larivaared from './Larivaared';

const Translation = styled.div`
  display: ${({ showTranslation }) => showTranslation
    ? 'block'
    : 'inline'
  };
  @media(max-width: 500px) {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

function AngContent ({ larivaarAssist, showTranslation, larivaar, lines }) {
  return (
    <span>
      {
        lines.map(({ id, text, translation }) =>
          (
            <Translation key={id} className="line" showTranslation={showTranslation}>
              <Larivaared larivaarAssist={larivaarAssist} enabled={larivaar}>{text}</Larivaared>
              {showTranslation ? <English><BlockQuote>{translation.text}</BlockQuote></English> : ''}
            </Translation>
          )
        )
      }
    </span>
  );
}

const shouldComponentUpdate = (c, n) => (
  notEqualsSome([ 'larivaar', 'larivaarAssist', 'showTranslation' ])(c, n)
  || c.lines.some((v, i) => v.text !== n.lines[i].text)
);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(AngContent);
