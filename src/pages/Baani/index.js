import PropTypes from 'prop-types';
import React from 'react';
import { GurbaniFont, Markdown as FetchAndMarkdown } from '../../components';

export default class Baani extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate(nextProps) {
    const currentBaani = this.props.match.params.baani;
    const nextBaani = nextProps.match.params.baani;

    return nextBaani !== currentBaani;
  }
  render() {
    const { match: { params: { baani } } } = this.props;

    return (
      <GurbaniFont style={{ textAlign: 'center' }}>
        <FetchAndMarkdown url={`assets/docs/md/${baani}.md`} />
      </GurbaniFont>
    );
  }
}

Baani.propTypes = {
  match: PropTypes.object,
};
