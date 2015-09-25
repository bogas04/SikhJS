'use strict';

window.jQuery = window.$ = require('jQuery');
const dom = require('./js/dom');
const mdLoad = require('./js/mdLoad');
const baanies = require('./js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw <br> vwihgurU jI kI Pqih';
//require('./js/sidenav.jsx')(dom.$menuWrapper);

baanies.forEach(n => dom.$selectBaani.appendChild(dom.createElement('option', ['innerHTML', n.name])));

dom.$baaniWrapper.appendChild(dom.createElement('h1', [['innerHTML', WKWF], ['className', 'greeting']]));

dom.$about.addEventListener('click', e => mdLoad.file('README.md').then(dom.setAndCallModal).catch(console.log));

dom.$nightModer.addEventListener('click', e => [e.currentTarget, dom.$baaniWrapper].forEach($t => $t.classList.contains('dark-mode') ? $t.classList.remove('dark-mode') : $t.classList.add('dark-mode')));

//dom.$autoScroll.addEventListener('click', e => setInterval(() => dom.$baaniWrapper.scrollBy(0, i), 200));

//dom.$fontSizeChanger.addEventListener('input', e => {
  //let a = dom.$baaniWrapper.querySelectorAll('*');
  //for(let i = 0; i < a.length; i++) {
    //a[i].style.fontSize = (30 * e.target.value + '%');
  //}
//});
dom.$fontSizeChanger.addEventListener('input', e => dom.$baaniWrapper.style.fontSize = (35 * e.target.value) + '%');
dom.$selectBaani.addEventListener('input', e => mdLoad.baani(e.target.value).then(b => dom.$baaniWrapper.innerHTML = b).catch(console.log));
