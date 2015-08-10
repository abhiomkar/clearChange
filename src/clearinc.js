/*
  clearInc
  Make the number transition smooth on increment or decrement

  Usage:
  clearInc(<dom-element>, <number>);

  Example:
  clearInc(document.querySelector('.online-viewers'), 123);
*/

window.clearInc = function(dom, value) {
  var duration = 600;
  var step = 20;

  var curVal = parseInt(dom.innerHTML);
  curVal = isNan(curVal) ? 0 : curVal;
  var cur = curVal;
  var inc = (value - curVal)/step;

  dom.classList.add('clear-change-flash');

  if (value > curVal) {
    // increment accordingly for each step in duration
    for (var i=0; i <= duration; i+=(duration/step)) {
      window.setTimeout(function() {
        cur += inc;
        cur = Math.round(cur);
        if (cur >= value) {
          dom.innerHTML = value;
        }
        else {
          dom.innerHTML = cur;
        }
      }, i);

      window.setTimeout(function() {
          dom.classList.remove('clear-change-flash');
      }, duration);
    }

    window.setTimeout(function() {
      dom.innerHTML = value;
    }, i);

  }
  else if (value < curVal) {
    // decrement accordingly for each step in duration
    // where, inc is a negative value
    for (var i=0; i <= duration; i+=(duration/step)) {
      window.setTimeout(function() {
        cur += inc;
        cur = Math.round(cur);
        if (cur <= value) {
          dom.innerHTML = value;
        }
        else {
          dom.innerHTML = cur;
        }
      }, i);

      window.setTimeout(function() {
          dom.classList.remove('clear-change-flash');
      }, duration);
    }

    window.setTimeout(function() {
      dom.innerHTML = value;
    }, i);
  }
};
