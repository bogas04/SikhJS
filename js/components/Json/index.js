import React from 'react';
import Fetch from '../Fetch';

export default props => <Fetch initialValue={[]} transform={r => r.json()} {...props} />;
