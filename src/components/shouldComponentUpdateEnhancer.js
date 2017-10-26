import React, { Component } from 'react';

export const notEqualsSome = keys => (c, n) => keys.some(key => c[key] !== n[key]);

export const notEqualsEvery = keys => (c, n) => keys.every(key => c[key] !== n[key]);

export default shouldComponentUpdate => FunctionalComponent => class extends Component {
  shouldComponentUpdate (nextProps) {
    return shouldComponentUpdate(this.props, nextProps);
  }
  render () {
    return <FunctionalComponent {...this.props} />;
  }
};
