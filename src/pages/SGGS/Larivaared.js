import React from 'react';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';
import Orange from './Orange';

function Larivaared ({ larivaarAssist, enabled, children, style, ...props }) {
  const larivaaredChildren = children
    .split(' ')
    .map((akhar, index) => (
      larivaarAssist && akhar.indexOf('॥') < 0 && index % 2 === 0
        ? <Orange key={index}>{akhar}</Orange>
        : <span key={index}>{akhar}</span>
    ));

  return (
    <span style={{ margin: '0 5px', wordWrap: 'break-word', ...style }} {...props}>{
      enabled
        ? larivaaredChildren
        : children
    }
    </span>
  );
}

const shouldComponentUpdate = notEqualsSome([ 'larivaarAssist', 'children', 'enabled' ]);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(Larivaared);
