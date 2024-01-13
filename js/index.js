"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("function"!=typeof e&&("object"!==_typeof(e)||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;g<d;g++)a.call(e,c[g])&&h.push(c[g]);return h}}()),Object.entries||(Object.entries=function(a){// preallocate the Array
for(var b=Object.keys(a),c=b.length,d=Array(c);c--;)d[c]=[b[c],a[b[c]]];return d});/*
var diaDeLaJornada = new Date("2021-06-06T07:00:00").getTime();
var timerParaJornada;
function actualizarConteo() {
  var now = new Date().getTime();
  var delta = diaDeLaJornada - now;
  var dias = Math.floor(delta / (1000 * 60 * 60 * 24));
  var horas = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((delta % (1000 * 60)) / 1000);
  var conteo = document.getElementById("countdown");
  if (!conteo) {
    clearInterval(timerParaJornada);
    return;
  }
  if (delta < 0) {
    clearInterval(timerParaJornada);
    dias = 0;
    horas = 0;
    minutos = 0;
    segundos = 0;
  }
  conteo.innerHTML = "<span>" + dias + "</span> " + (dias == 1 ? "día" : "días") + " "
                   + "<span>" + horas + "</span> " + (horas == 1 ? "hora" : "horas") + " "
                   + "<span>" + minutos + "</span> " + (minutos == 1 ? "minuto" : "minutos") + " "
                   + "<span>" + segundos + "</span> " + (segundos == 1 ? "segundo" : "segundos") + " ";
}

actualizarConteo();

window.onload = function() {
  actualizarConteo();
  clearInterval(timerParaJornada);
  timerParaJornada = setInterval(actualizarConteo, 1000);
};
 */function hideToplevelOverlay(){var a=document.getElementById("infpol");a.style.display="none",document.body.style.overflow="auto"}
