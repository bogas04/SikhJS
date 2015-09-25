'use strict';

let dom = {};

dom.$about = document.getElementById('about');
dom.$modalRoot = document.getElementById('modalRoot');
dom.$autoScroll = document.getElementById('autoScroll');
dom.$nightModer = document.getElementById('nightModer');
dom.$menuWrapper = document.getElementById('menuWrapper');
dom.$selectBaani = document.getElementById('selectBaani');
dom.$baaniWrapper = document.getElementById('baaniWrapper');
dom.$modalBody = dom.$modalRoot.querySelector('.modal-body');
dom.$fontSizeChanger = document.getElementsByName('font-size')[0];

dom.setAndCallModal = (content, options) => (dom.$modalBody.innerHTML = content) && $(dom.$modalRoot).modal(options);

dom.createElement = (type, config) => {
  let $t = document.createElement(type); 
  config = Array.isArray(config[0]) ? config : [config];
  config.forEach(kv => $t[kv[0]] = kv[1]);
  return $t;
};

module.exports = dom;
