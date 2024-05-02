if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

var diaDeLaJornada = new Date("2024-06-02T07:30:00").getTime();
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

