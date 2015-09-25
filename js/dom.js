'use strict';

let dom = {};

dom.$about = document.getElementById('about');
dom.$modalRoot = document.getElementById('modalRoot');
dom.$autoScroll = document.getElementById('autoScroll');
dom.$nightModer = document.getElementById('nightModer');
dom.$selectBaani = document.getElementById('selectBaani');
dom.$baaniWrapper = document.getElementById('baaniWrapper');
dom.$modalBody = dom.$modalRoot.querySelector('.modal-body');
dom.$fontSizeChanger = document.getElementsByName('font-size')[0];

// Takes an object having keys as the $keys of dom and adds eventListener for each object[key][0] event with function object[key][1]
dom.addEventListener = (arr) => { for(let key in arr) dom[key].addEventListener(arr[key][0], arr[key][1]) };

// Sets the body of the modal and calls .modal on it
dom.setAndCallModal = (content, options) => (dom.$modalBody.innerHTML = content) && $(dom.$modalRoot).modal(options);

// Toggles dark-mode by adding or removing .dark-mode on given object
dom.toggleDarkMode = $t => $t.classList.contains('dark-mode') ? $t.classList.remove('dark-mode') : $t.classList.add('dark-mode');

// Returns a function which accepts a value to set to the element passed to this function
dom.setInnerHTML = obj => (val) => dom[obj].innerHTML = val;

// Creates an element of type type and inits some properties based on config[]
dom.createElement = (type, config) => {
  let $t = document.createElement(type); 
  config = Array.isArray(config[0]) ? config : [config];
  config.forEach(kv => $t[kv[0]] = kv[1]);
  return $t;
};

module.exports = dom;
