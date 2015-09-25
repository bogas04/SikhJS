'use strict';

window.jQuery = window.$ = require('jQuery');
const dom = require('./js/dom');
const mdLoad = require('./js/mdLoad');
const baanies = require('./js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw vwihgurU jI kI Pqih';
//require('./js/sidenav.jsx')(dom.$menuWrapper);

baanies.forEach(n => dom.$selectBaani.appendChild(dom.createElement('option', ['innerHTML', n.name])));

dom.$baaniWrapper.appendChild(dom.createElement('h1', [['innerHTML', WKWF], ['className', 'greeting']]));

dom.$about.addEventListener('click', e => mdLoad.file('README.md').then(dom.setAndCallModal).catch(console.log));

dom.$fontSizeChanger.addEventListener('input', e => dom.$baaniWrapper.style.fontSize = (65 * e.target.value) + '%');

dom.$selectBaani.addEventListener('input', e => mdLoad.baani(e.target.value).then(b => dom.$baaniWrapper.innerHTML = b).catch(console.log));
