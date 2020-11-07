var info = [
  { "lnominal": 288072, "secciones": 178, "urbanas": 138, "nourbanas": 40,
    "municipios": 11, "dels": 3, "casillas": 495, "curbanas": 390, "cnourbanas": 105 },
  { "lnominal": 333881, "secciones": 226, "urbanas": 189, "nourbanas": 37,
    "municipios": 11, "dels": 4, "casillas": 565, "curbanas": 487, "cnourbanas": 78 },
  { "lnominal": 304073, "secciones": 215, "urbanas": 203, "nourbanas": 12,
    "municipios": 1, "dels": 5, "casillas": 1004, "curbanas": 927, "cnourbanas": 77 },
  { "lnominal": 291131, "secciones": 286, "urbanas": 135, "nourbanas": 151,
    "municipios": 41, "dels": 4, "casillas": 547, "curbanas": 297, "cnourbanas": 250 },
  { "lnominal": 295985, "secciones": 202, "urbanas": 184, "nourbanas": 18,
    "municipios": 1, "dels": 5, "casillas": 1004, "curbanas": 927, "cnourbanas": 77 },
  { "lnominal": 320458, "secciones": 219, "urbanas": 191, "nourbanas": 28,
    "municipios": 1, "dels": 3, "casillas": 552, "curbanas": 449, "cnourbanas": 103 },
  { "lnominal": 268126, "secciones": 207, "urbanas": 90, "nourbanas": 117,
    "municipios": 7, "dels": 3, "casillas": 474, "curbanas": 241, "cnourbanas": 233 }
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
    scene: [LoadingScene, MapScene],
    backgroundColor: "#FFFFFF",
    parent: "distribucion-distrital"
  };

  document.getElementById("data-entries").style.visibility = "hidden";

  var game = new Phaser.Game(config);
}
