import PropTypes from 'prop-types';
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
  to: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
