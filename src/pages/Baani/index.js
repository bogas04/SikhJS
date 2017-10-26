import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';
import { GurbaniFont, Markdown as FetchAndMarkdown } from '../../components';

const Wrapper = styled.div`
  line-height: 2em;
  padding: 10px;
  text-align: center;
  @media(max-width: 700px) {
    text-align: left;
  }
`;

export default class Baani extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate (nextProps) {
    const currentBaani = this.props.match.params.baani;
    const nextBaani = nextProps.match.params.baani;

    return nextBaani !== currentBaani;
  }
  render () {
    const { match: { params: { baani } } } = this.props;

    return (
      <GurbaniFont style={{ textAlign: 'center' }}>
        <Wrapper>
          <FetchAndMarkdown url={`assets/docs/md/baanies/${baani}.md`} />
        </Wrapper>
      </GurbaniFont>
    );
  }
}

Baani.propTypes = {
  match: PropTypes.object,
};
