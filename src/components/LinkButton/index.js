import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button';

export default function LinkButton ({ disabled = false, children, to, ...otherProps }) {
  return disabled
    ? <Button disabled {...otherProps}>{children}</Button>
    : <Link to={to} {...otherProps}><Button>{children}</Button></Link>
    ;
}

LinkButton.propTypes = {
  to: React.PropTypes.string,
  children: React.PropTypes.node,
  disabled: React.PropTypes.bool,
};
