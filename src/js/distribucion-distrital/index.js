var info = [
  { "lnominal": 295892, "secciones": 176, "urbanas": 136, "nourbanas": 40,
    "municipios": 11, "dels": 3, "casillas": 509, "curbanas": 401, "cnourbanas": 108 },
  { "lnominal": 347470, "secciones": 221, "urbanas": 186, "nourbanas": 35,
    "municipios": 11, "dels": 4, "casillas": 595, "curbanas": 513, "cnourbanas": 82 },
  { "lnominal": 323490, "secciones": 214, "urbanas": 201, "nourbanas": 13,
    "municipios": 1, "dels": 5, "casillas": 536, "curbanas": 498, "cnourbanas": 38 },
  { "lnominal": 289546, "secciones": 276, "urbanas": 133, "nourbanas": 143,
    "municipios": 41, "dels": 4, "casillas": 551, "curbanas": 292, "cnourbanas": 259 },
  { "lnominal": 307942, "secciones": 199, "urbanas": 182, "nourbanas": 17,
    "municipios": 1, "dels": 5, "casillas": 522, "curbanas": 473, "cnourbanas": 49 },
  { "lnominal": 320299, "secciones": 231, "urbanas": 199, "nourbanas": 32,
    "municipios": 1, "dels": 3, "casillas": 559, "curbanas": 471, "cnourbanas": 88 },
  { "lnominal": 271610, "secciones": 205, "urbanas": 90, "nourbanas": 115,
    "municipios": 7, "dels": 3, "casillas": 480, "curbanas": 243, "cnourbanas": 237 }
];

function infoSeleccion(i) {
  document.getElementById("data-entries").style.visibility = "visible";
  var dels = info[i]["dels"];
  var municipios = info[i]["municipios"];
  var lnominal = info[i]["lnominal"];
  var secciones = info[i]["secciones"];
  var urbanas = info[i]["urbanas"];
  var nourbanas = info[i]["nourbanas"];
  var curbanas = info[i]["curbanas"];
  var cnourbanas = info[i]["cnourbanas"];
  document.getElementById("distrito").innerHTML = (i+1);
  document.getElementById("dels").innerHTML =  dels.toLocaleString('es-MX');
  document.getElementById("municipios").innerHTML = municipios.toLocaleString('es-MX');
  document.getElementById("lnominal").innerHTML = lnominal.toLocaleString('es-MX');
  document.getElementById("secciones").innerHTML = secciones.toLocaleString('es-MX');
  document.getElementById("urbanas").innerHTML = urbanas.toLocaleString('es-MX');
  document.getElementById("nourbanas").innerHTML = nourbanas.toLocaleString('es-MX');
  document.getElementById("curbanas").innerHTML = curbanas.toLocaleString('es-MX');
  document.getElementById("cnourbanas").innerHTML = cnourbanas.toLocaleString('es-MX');
}

window.onload = function() {
  var config = {
    width: 670,
    height: 670,
    maxWidth: 670,
    maxHeight: 670,
    scene: [LoadingScene, MapScene],
    backgroundColor: "#FFFFFF",
    parent: "distribucion-distrital",
    scale: {
      mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    input: {
      touch: {
        capture: true
      }
    }
  };

  document.getElementById("data-entries").style.visibility = "hidden";

  var game = new Phaser.Game(config);
}
