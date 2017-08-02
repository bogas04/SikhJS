import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';

const Status = styled.span`
  border: 5px solid darkgrey;
  border-radius: 5px;
  height: 0px;
  width: 28px;
  margin-left: 20px;
  transform: translate(-13px, 13px);
  display: inline-block;
  &::after {
    pointer-events: none;
    content: ".";
    color: grey;
    transform: scale(9);
    transform-origin: 6% 84%;
    transition: transform .25s;
    display: block;
  }
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
    user-select: none;
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
    transform: translate(33%, 0) scale(9);
  }
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
    user-select: none;
  }
`;

const Label = styled.label`
  color: ${({ disabled }) => disabled ? 'grey' : 'inherit'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
    user-select: none;
  }
`;

export default function Switch({ children, left = true, ...props }) {
  return (
    <Label {...props}>
      <Checkbox type="checkbox" {...props} />
      {left ? null : children}
      <Status />
      {left ? children : null}
    </Label>
  );
}

Switch.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
