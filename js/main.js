'use strict';

/* For jQuery to work on CommonJS */
window.jQuery = window.$ = require('jQuery');

const dom = require('./js/dom');
const baanies = require('./js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw <br> vwihgurU jI kI Pqih';

/* Initial greeting */
dom.$baaniWrapper.appendChild(dom.createElement('h1', { innerHTML: WKWF, className: 'greeting'}));

/* Initializing the baanies */
baanies.forEach((n, i) => {
  if(i === 0 || i === 7) {
    dom.$selectBaani.appendChild(dom.createElement('hr'));
  }
  dom.$selectBaani.appendChild(dom.createElement('option', { innerHTML: n, value: n }))
});

/* Event listeners */
dom.addEventListener(require('./js/eventListeners'));
