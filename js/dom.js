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
dom.$modalTitle = dom.$modalRoot.querySelector('.modal-title');

// Sets the body of the modal and calls .modal on it
dom.setAndCallModal = title => (content, options) => {
  dom.$modalBody.innerHTML = content;
  dom.$modalTitle.innerHTML = title;
  $(dom.$modalRoot).modal(options);
};

// Toggles dark-mode by adding or removing .dark-mode on given object
dom.toggleDarkMode = $t => $t.classList.contains('dark-mode') ? $t.classList.remove('dark-mode') : $t.classList.add('dark-mode');

// Returns a function which accepts a value and set it to the passed object's given property
dom.set = (obj, prop) => {
  return val => {
    let props = prop.split('.');
    // TODO: Consider cases where prop can have more than one dots 
    props.length > 1 ? dom[obj][props[0]][props[1]] = val : dom[obj][prop] = val;
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
