'use strict';

window.jQuery = window.$ = require('jQuery');
const dom = require('./js/dom');
const mdLoad = require('./js/mdLoad');
const baanies = require('./js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw <br> vwihgurU jI kI Pqih';

baanies.forEach(n => dom.$selectBaani.appendChild(dom.createElement('option', { innerHTML: n})));
dom.$baaniWrapper.appendChild(dom.createElement('h1', { innerHTML: WKWF, className: 'greeting'}));

dom.addEventListener({
  $fontSizeChanger: { input:  e => dom.$baaniWrapper.style.fontSize = (35 * e.target.value) + '%'}
  ,$nightModer:     { click: e => [e.currentTarget, dom.$baaniWrapper].forEach(dom.toggleDarkMode)}
  ,$about:          { click: e => mdLoad.file('README.md').then(dom.setAndCallModal).catch(console.log)}
  ,$SGGS:           { click: e => mdLoad.file('docs/SGGS.md').then(dom.set('$baaniWrapper', 'innerHTML')).catch(console.log)}
  ,$selectBaani:    { input: e => mdLoad.baani(e.target.value).then(dom.set('$baaniWrapper', 'innerHTML')).catch(console.log)}
});

// Some ES6 shit
//dom.$nightModer.addEventListener('click', e => dom.toggleDarkMode(...[e.currentTarget, dom.$baaniWrapper]));
//dom.$autoScroll.addEventListener('click', e => setInterval(() => dom.$baaniWrapper.scrollBy(0, i), 200));
