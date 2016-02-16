;(function() {
  'use strict';
  //Selecting DOM elements
  var imghero = document.getElementById('tilt-mover'),
      header = document.getElementById('header'),
      tilt = document.getElementById('tilt'),
      btn = document.getElementById('start'),
      body = document.getElementById('body');


      btn.addEventListener('click', function(ev){
        ev.preventDefault();
        body.classList.toggle('front');
      });

  //Dynamic display for the images on the DOM window
  var win = { width: window.innerWidth, height: window.innerHeight };
  function throttle(fn, delay) {
    var allowSample = true;
    return function(e) {
      if (allowSample) {
        allowSample = false;
        setTimeout(function() { allowSample = true; }, delay);
        fn(e);
      }
    };
  }

}());