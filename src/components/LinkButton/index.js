import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button';

export default function LinkButton ({ disabled = false, children, to }) {
  return disabled
    ? <Button disabled>{children}</Button>
    : <Link to={to}><Button>{children}</Button></Link>
    ;
}

LinkButton.propTypes = {
  to: React.PropTypes.string,
  children: React.PropTypes.node,
  disabled: React.PropTypes.bool,
};
