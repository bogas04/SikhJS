'use strict';

/* For jQuery to work on CommonJS */
window.jQuery = window.$ = require('jQuery');

const dom = require('./js/dom');
const mdLoad = require('./js/mdLoad');
const baanies = require('./js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw <br> vwihgurU jI kI Pqih';
const locs = { README: __dirname + '/README.md', SGGS: __dirname + '/docs/SGGS.md' };

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
dom.addEventListener({
  $nightModer:       { click: e => [e.currentTarget, dom.$baaniWrapper].forEach(dom.toggleDarkMode)}
  ,$fontSizeChanger: { input: e => dom.$baaniWrapper.style.fontSize = ((35 * e.target.value) + '%')}
  ,$about:           { click: e => mdLoad.file(locs.README).then(dom.setAndCallModal('About SikhJS')).catch(console.log)}
  ,$SGGS:            { click: e => mdLoad.file(locs.SGGS).then(dom.set('$baaniWrapper', 'innerHTML')).catch(console.log)}
  ,$selectBaani:     { input: e => mdLoad.baani(e.target.value).then(dom.set('$baaniWrapper', 'innerHTML')).catch(console.log)}
});
