import React from 'react';
import { Provider } from 'react-redux';
import store from '../../features/store';
import Main from '../Main';

export default props => (
  <Provider store={store} {...props}>
    <Main />
  </Provider>
);