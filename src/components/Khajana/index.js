import React from 'react';

import { buildApiUrl } from 'khajana';

import Json from '../Json';

export default function Khajana ({ options, ...props }) {
  return (
    <Json url={buildApiUrl(options)} {...props} />
  );
}

Khajana.propTypes = {
  options: React.PropTypes.object,
};

