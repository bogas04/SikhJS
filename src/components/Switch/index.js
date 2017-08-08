import React from 'react';
import styled from 'emotion/react';
import PropTypes from 'prop-types';

const Dot = styled('div')`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background-color: grey;
  margin: 0;
  padding: 0;
  pointer-events: none;
  cursor: pointer;
  transition: transform .25s;
  margin-top: -.6rem;
  margin-left: -.2rem;
`;

const Status = styled('div')`
  border: 5px solid darkgrey;
  border-radius: 5px;
  height: 0px;
  width: 28px;
  margin-left: 20px;
  transform: translate(-13px, 13px);
  display: inline-block;
  margin-top: -1rem;
`;

const Checkbox = styled('input')`
  display: none;
  opacity: 0;
  & + div {
    border-color: darkgrey;
  }
  &:checked + div {
    border-color: #139292;
  }
  &:checked + .status .dot {
    background-color: teal;
    transform: translate(1rem, 0);
  }
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
    user-select: none;
  }
`;

const Label = styled('label')`
  padding: 0 10px;
  color: ${({ disabled }) => (disabled ? 'grey' : 'inherit')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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

function Switch({ children, checked, right = false, ...props }) {
  const checkbox = (
    <div style={{ display: 'flex' }}>
      <Checkbox type='checkbox' {...props} />
      <Status className='status'>
        <Dot className='dot' />
      </Status>
    </div>
  );
  
  return (
    <Label {...props} id={children}>
      {right ? children : checkbox}
      {right ? checkbox : children}
    </Label>
  );
}

Switch.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool
};

export default Switch;