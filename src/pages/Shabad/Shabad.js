import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { SETTINGS } from '../../constants';
import { BlockQuote, GurbaniFont } from '../../components';

const Wrapper = styled.div`
  line-height: 2em;
  padding: 10px;
  text-align: center;
  @media(max-width: 700px) {
    text-align: left;
  }
`;

const Transliteration = styled.div`
  color: grey;
  font-style: italic;
`

class Shabad extends React.PureComponent {
  render () {
    const { gurbani, unicode, translation, transliteration } = this.props;
    return (
      <Wrapper>
        {
          gurbani
            .map(({ shabad }) => (
              <div key={shabad.id}>
                {
                  unicode
                    ? shabad.gurbani.unicode
                    : <GurbaniFont>{shabad.gurbani.gurmukhi}</GurbaniFont>
                }
                {
                  transliteration && (
                    <Transliteration>
                      {shabad.transliteration}
                    </Transliteration>
                  )
                }
                {
                  translation && (
                    <BlockQuote style={{ color: '#bababa' }}>
                      {shabad.translation.english.ssk}
                    </BlockQuote>
                  )
                }
              </div>
            ))
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ settings }) => ({
  unicode: settings[SETTINGS.UNICODE],
  translation: settings[SETTINGS.TRANSLATION],
  transliteration: settings[SETTINGS.TRANSLITERATION],
});

export default connect(mapStateToProps)(Shabad);
