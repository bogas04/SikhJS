import PropTypes from 'prop-types';
import React from 'react';

import { buildApiUrl } from 'khajana';

import Json from '../Json';

export default class Khajana extends React.PureComponent {
  render() {
    const { options, ...props } = this.props;
    return (
      <Json url={buildApiUrl(options)} {...props} />
    );
  }
}

Khajana.propTypes = {
  options: PropTypes.object,
};

