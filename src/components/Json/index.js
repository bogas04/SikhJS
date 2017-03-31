import React from 'react';

import Fetch from '../Fetch';

/* eslint-disable react/jsx-no-bind */
export default props => <Fetch initialValue={[]} transform={r => r.json()} {...props} />;
