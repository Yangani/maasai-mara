;(function() {
  'use strict';
  //Selecting html elements
  var imghero = document.getElementById('tilt-mover'),
      header = document.getElementById('header'),
      tilt = document.getElementById('tilt'),
      btn = document.getElementById('start'),
      body = document.getElementById('body');


      btn.addEventListener('click', function(ev){
        ev.preventDefault();
        body.classList.toggle('front');
      });