import React from 'react';
import { connect } from 'react-redux';
import styled from 'emotion/react';
import { SETTINGS } from '../../constants';

const Wrapper = styled.div`
  line-height: 2em;
  padding: 10px;
  text-align: center;
  @media(max-width: 700px) {
    text-align: left;
  }
`;

class Shabad extends React.PureComponent {
  render() {
    const { gurbani, unicode, translation, transliteration } = this.props;
    return (
      <Wrapper>
        {
          gurbani
            .map(({ shabad }) => (
              <div key={shabad.id}>
                <span className="gurbani-text">
                  {
                    unicode
                      ? shabad.gurbani.unicode
                      : shabad.gurbani.gurmukhi
                  }
                </span>
                {
                  transliteration && (
                    <div><i>{shabad.transliteration}</i></div>
                  )
                }
                {
                  translation && (
                    <blockquote style={{ margin: 0, padding: 10 }}>{shabad.translation.english.ssk}</blockquote>
                  )
                }
              </div>
            ))
        }
      </Wrapper>
    );
  }
};

const mapStateToProps = ({ settings }) => ({
  unicode: settings[SETTINGS.UNICODE],
  translation: settings[SETTINGS.TRANSLATION],
  transliteration: settings[SETTINGS.TRANSLITERATION],
});

export default connect(mapStateToProps)(Shabad);