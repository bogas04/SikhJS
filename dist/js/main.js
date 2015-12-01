'use strict'

/* For jQuery to work on CommonJS */
;
window.jQuery = window.$ = require('jQuery');

var dom = require(__dirname + '/dist/js/dom');
var mdLoad = require(__dirname + '/dist/js/mdLoad');
var baanies = require(__dirname + '/dist/js/baanies');
var WKWF = 'vwihgurU jI kw Kwlsw <br> vwihgurU jI kI Pqih';
var locs = { README: __dirname + '/README.md', SGGS: __dirname + '/docs/SGGS.md', CALENDAR: __dirname + '/docs/calendar.md' };

/* Initial greeting */
dom.$baaniWrapper.appendChild(dom.createElement('h1', { innerHTML: WKWF, className: 'greeting' }));

/* Initializing the baanies */
baanies.forEach(function (n, i) {
  if (i === 0 || i === 7) {
    dom.$selectBaani.appendChild(dom.createElement('hr'));
  }
  dom.$selectBaani.appendChild(dom.createElement('option', { innerHTML: n, value: n }));
});

/* Event listeners */
dom.addEventListener({
  $nightModer: {
    click: function click(e) {
      return [e.currentTarget, dom.$baaniWrapper].forEach(dom.toggleDarkMode);
    }
  },
  $fontSizeChanger: {
    input: function input(e) {
      return dom.$baaniWrapper.style.fontSize = 35 * e.target.value + '%';
    }
  },
  $about: {
    click: function click(e) {
      return mdLoad.file(locs.README).then(dom.setAndCallModal('About SikhJS')).catch(console.log);
    }
  },
  $SGGS: {
    click: function click(e) {
      dom.$SGGS.innerHTML = 'Loading...';
      setTimeout(function () {
        mdLoad.file(locs.SGGS).then(function (d) {
          dom.$baaniWrapper.innerHTML = d;
          dom.$baaniWrapper.classList.add('gurbani-text');
          dom.$baaniWrapper.classList.add('text-center');
          dom.$SGGS.innerHTML = 'Sri Guru Granth Sahib';
        }).catch(console.log);
      }, 100);
    }
  },
  $calendar: {
    click: function click(e) {
      return mdLoad.file(locs.CALENDAR).then(function (d) {
        dom.$baaniWrapper.innerHTML = d;
        dom.$baaniWrapper.classList.remove('gurbani-text');
        dom.$baaniWrapper.classList.remove('text-center');
      }).catch(console.log);
    }
  },
  $selectBaani: {
    input: function input(e) {
      return mdLoad.baani(e.target.value).then(function (t) {
        dom.$baaniWrapper.innerHTML = t;
        dom.$baaniWrapper.classList.add('gurbani-text');
        dom.$baaniWrapper.classList.add('text-center');
        dom.$baaniWrapper.focus();
        dom.$baaniWrapper.scrollTop = 0;
      }).catch(function (e) {
        return console.log("error", e);
      });
    }
  }
});