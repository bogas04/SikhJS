import React from 'react';
import { Provider } from 'react-redux';
import { toggleOnlineMode } from '../../features/actions';
import store from '../../features/store';
import Main from '../Main';

export default props => (
  <Provider store={store} {...props}>
    <Main />
  </Provider>
);

// Online / Offline Detection
if (window) {
  window.addEventListener('online', () =>
    store.dispatch(toggleOnlineMode(true))
  );

  window.addEventListener('offline', () =>
    store.dispatch(toggleOnlineMode(false))
  );
}
