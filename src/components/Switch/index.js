import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';

const Status = styled.span`
  border: 5px solid darkgrey;
  border-radius: 5px;
  height: 0px;
  width: 28px;
  transform: translate(-13px, 17px);
  display: inline-block;
  &::after {
    content: ".";
    margin: -488% -10px;
    font-size: 170px;
    color: grey;
    transform: translate(-13px, -14px);
    display: block;
  }
`;

const Checkbox = styled.input`
  & {
    opacity: 0;
  }
  & + span {
    border-color: darkgrey;
  }
  & + span::after {
    color: grey;
  }
  &:checked + span {
    border-color: #139292;
  }
  &:checked + span::after {
    color: teal;
    transform: translate(14px, -14px);
  }
`;

const Label = styled.label`
  color: ${({ disabled }) => disabled ? 'grey' : 'inherit'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export default function Switch({ children, ...props }) {
  return (
    <Label {...props}>
      <Checkbox type="checkbox" {...props} />
      <Status />
      {children}
    </Label>
  );
}

Switch.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
