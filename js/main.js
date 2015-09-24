'use strict';

window.jQuery = window.$ = require('jQuery');

const loadBaani = require('./js/loadBaani');
const baanies = require('./js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw vwihgurU jI kI Pqih';

let dom = {
  $baaniWrapper: document.getElementById('baaniWrapper'),
  $selectBaani: document.getElementById('selectBaani'),
  $fontSizeChanger: document.getElementsByName('font-size')[0],
  createElement: (type, config) => {
    let $t = document.createElement(type); 
    config = Array.isArray(config[0]) ? config: [config];
    config.forEach(kv => $t[kv[0]] = kv[1]);
    return $t;
  }
};


baanies.forEach(n => dom.$selectBaani.appendChild(dom.createElement('option', ['innerHTML', n.name])));
dom.$baaniWrapper.appendChild(dom.createElement('h1', [['innerHTML', WKWF], ['className', 'greeting']]));
dom.$fontSizeChanger.addEventListener('input', e => dom.$baaniWrapper.style.fontSize = (120 * e.target.value) + '%');
dom.$selectBaani.addEventListener('input', e => loadBaani(e.target.value).then(b => dom.$baaniWrapper.innerHTML = b).catch(console.log));
