'use strict';

/* For jQuery to work on CommonJS */
window.jQuery = window.$ = require('jQuery');

const dom = require(__dirname + '/dist/js/dom');
const mdLoad = require(__dirname + '/dist/js/mdLoad');
const baanies = require(__dirname + '/dist/js/baanies');
const WKWF = 'vwihgurU jI kw Kwlsw <br> vwihgurU jI kI Pqih';
const locs = { README: __dirname + '/README.md', SGGS: __dirname + '/docs/SGGS.md', CALENDAR: __dirname + '/docs/calendar.md' };

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
  $nightModer: {
    click: e => [e.currentTarget, dom.$baaniWrapper].forEach(dom.toggleDarkMode)
  },
  $fontSizeChanger: { 
    input: e => dom.$baaniWrapper.style.fontSize = ((35 * e.target.value) + '%')
  },
  $about: { 
    click: e => mdLoad.file(locs.README).then(dom.setAndCallModal('About SikhJS')).catch(console.log)
  },
  $SGGS: {
    click: e => {
      dom.$SGGS.innerHTML = 'Loading...';
      setTimeout(() => {
        mdLoad.file(locs.SGGS).then(d => { 
          dom.$baaniWrapper.innerHTML = d;
          dom.$baaniWrapper.classList.add('gurbani-text');
          dom.$baaniWrapper.classList.add('text-center');
          dom.$SGGS.innerHTML = 'Sri Guru Granth Sahib';
        }).catch(console.log);
      }, 100);
    }
  },
  $calendar: {
    click: e => mdLoad.file(locs.CALENDAR).then(d => {
      dom.$baaniWrapper.innerHTML = d;
      dom.$baaniWrapper.classList.remove('gurbani-text');
      dom.$baaniWrapper.classList.remove('text-center');
    }).catch(console.log)
  },
  $selectBaani: {
    input: e => mdLoad.baani(e.target.value).then(t => {
      dom.$baaniWrapper.innerHTML = t;
      dom.$baaniWrapper.classList.add('gurbani-text');
      dom.$baaniWrapper.classList.add('text-center');
      dom.$baaniWrapper.focus();
      dom.$baaniWrapper.scrollTop = 0;
    }).catch(e => console.log("error", e))
  }
});
