(function(window, document, undefined) {
  "use strict";

  setMainMargins();

  window.onresize = setMainMargins;

  function setMainMargins() {
    var main = document.getElementsByTagName('main')[0];
    var header = document.getElementsByTagName('header')[0];
    var footer = document.getElementsByTagName('footer')[0];

    main.style.marginTop = window.getComputedStyle(header).height
    main.style.marginBottom = window.getComputedStyle(footer).height
  }
})(window, document);
