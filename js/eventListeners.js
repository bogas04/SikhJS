'use strict';

const mdLoad = require('./mdLoad');
const locs = { README: 'README.md', SGGS: 'docs/SGGS.md', CALENDAR: 'docs/calendar.md' };

module.exports = {
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
    click: e => mdLoad.file(locs.SGGS).then(dom.set('$baaniWrapper', 'innerHTML')).catch(console.log)
  },
  $calendar: {
    click: e => mdLoad.file(locs.CALENDAR).then(d => {
      dom.$baaniWrapper.innerHTML = d;
      dom.$baaniWrapper.classList.remove('gurbani-text');
    }).catch(console.log)
  },
  $selectBaani: {
    input: e => mdLoad.baani(e.target.value).then(t => {
      dom.$baaniWrapper.innerHTML = t;
      dom.$baaniWrapper.focus();
      dom.$baaniWrapper.scrollTop = 0;
    }).catch(console.log)
  }
};
