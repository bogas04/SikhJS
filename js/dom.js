'use strict';

let dom = {};

dom.$SGGS = document.getElementById('SGGS');
dom.$about = document.getElementById('about');
dom.$modalRoot = document.getElementById('modalRoot');
dom.$autoScroll = document.getElementById('autoScroll');
dom.$nightModer = document.getElementById('nightModer');
dom.$selectBaani = document.getElementById('selectBaani');
dom.$baaniWrapper = document.getElementById('baaniWrapper');
dom.$modalBody = dom.$modalRoot.querySelector('.modal-body');
dom.$fontSizeChanger = document.getElementById('fontChanger');

// Sets the body of the modal and calls .modal on it
dom.setAndCallModal = (content, options) => (dom.$modalBody.innerHTML = content) && $(dom.$modalRoot).modal(options);

// Toggles dark-mode by adding or removing .dark-mode on given object
dom.toggleDarkMode = $t => $t.classList.contains('dark-mode') ? $t.classList.remove('dark-mode') : $t.classList.add('dark-mode');

// Returns a function which accepts a value and set it to the passed object's given property
dom.set = (obj, prop) => {
  return val => {
    dom[obj][prop] = val;
    setTimeout(arguments.callee, 0);
  }
};

// Creates an element of type type and inits some properties based on config[]
dom.createElement = (type, config) => {
  let $t = document.createElement(type); 
  for(let prop in config)
    $t[prop] = config[prop];
  return $t;
};

// Takes an object having keys as the $keys of dom and adds eventListener for each object[key][0] event with function object[key][1]
dom.addEventListener = (obj) => {
  for(let $ele in obj) 
    for(let event in obj[$ele])
      dom[$ele].addEventListener(event, obj[$ele][event])
};

module.exports = dom;
