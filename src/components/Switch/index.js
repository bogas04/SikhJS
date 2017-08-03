import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';

const Status = styled.div`
  border: 5px solid darkgrey;
  border-radius: 5px;
  height: 0px;
  width: 28px;
  margin-left: 20px;
  transform: translate(-13px, 13px);
  display: inline-block;
  &::after {
    pointer-events: none;
    margin-right: 23px;
    overflow: hidden;
    content: ".";
    color: grey;
    transform: scale(9);
    transform-origin: 32% 84%;
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
  & + div {
    border-color: darkgrey;
  }
  & + div::after {
    color: grey;
  }
  &:checked + div {
    border-color: #139292;
  }
  &:checked + div::after {
    color: teal;
    transform: translate(172%, 0) scale(9);
  }
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
    user-select: none;
  }
`;

const Label = styled.label`
  padding: 0 10px;
  color: ${({ disabled }) => disabled ? 'grey' : 'inherit'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
    user-select: none;
  }
`;

export default function Switch({ children, checked, right = false, ...props }) {

  const leftView = (
    <Label {...props } id={children} >
      <div>
        <Checkbox type="checkbox" {...props} />
        <Status />
      </div>
      <div>
        {children}
      </div>
    </Label>
  );

  const rightView = (
    <Label {...props } id={children} >
      <div>
        {children}
      </div>
      <div>
        <Checkbox type="checkbox" {...props} />
        <Status />
      </div>
    </Label>
  );

  return right ? rightView : leftView;
}

Switch.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
