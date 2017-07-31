import PropTypes from 'prop-types';
import React from 'react';

import FetchAndMarkdown from '../../components/Markdown';

export default class Baani extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    const { match: { params: { baani } } } = this.props;

    return (
      <div className="gurbani-text" style={{ textAlign: 'center' }} >
        <FetchAndMarkdown url={`assets/docs/md/${baani}.md`} />
      </div>
    );
  }
}

Baani.propTypes = {
  match: PropTypes.object,
};
