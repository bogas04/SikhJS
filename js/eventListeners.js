'use strict';

const mdLoad = require('./mdLoad');
const locs = { README: '../README.md', SGGS: '../docs/SGGS.md' };

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
  $selectBaani: {
    input: e => mdLoad.baani(e.target.value).then(t => {
      dom.$baaniWrapper.innerHTML = t;
      dom.$baaniWrapper.focus();
      dom.$baaniWrapper.scrollTop = 0;
      dom.$baaniWrapper.firstChild.className = 'hovered';
    }).catch(console.log)
  },
  $baaniWrapper: {
    keydown: e => {
      let hoveredElement = dom.$baaniWrapper.querySelector('.hovered') || dom.$baaniWrapper.firstChild;
      // Capturing the strokes
      switch(e.keyCode) {
        case 38: case 74: // arrowUp & j
          hoveredElement.classList.remove('hovered');
          hoveredElement.nextElementSibling.className = 'hovered';
          break;
        case 40: case 75: // arrowDown & k
          hoveredElement.classList.remove('hovered');
          hoveredElement.previousElementSibling.className = 'hovered';
          break;
      }
      // Proper scrolling
      dom.$baaniWrapper.scrollTop = (hoveredElement.offsetTop - dom.$baaniWrapper.offsetHeight/2);
    }
  }
};
