 /* eslint-disable import/no-unassigned-import */

import React from 'react';
import { render } from 'react-dom';
import 'unfetch/polyfill';
import Root from './pages/Root';

render(<Root />, document.getElementById('root'));

// Service Worker Registeration
if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('service-worker.js', { scope: './' })
    .then(reg => console.log('Registration succeeded. Scope is ' + reg.scope))
    .catch(console.error)
  ;
}
