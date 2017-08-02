import React from 'react';
import Orange from './Orange';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';

function Larivaared({ larivaarAssist, enabled, children, ...props }) {
  return (
    <span {...props}>{
      !enabled
        ? children
        : children
          .split(' ')
          .map((akhar, index) => (
            larivaarAssist && akhar.indexOf('॥') < 0 && index % 2 === 0
              ? <Orange key={index}>{akhar}</Orange>
              : <span key={index}>{akhar}</span>
          ))
    }</span>
  );
}

const shouldComponentUpdate = notEqualsSome(['larivaarAssist', 'children']);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(Larivaared);