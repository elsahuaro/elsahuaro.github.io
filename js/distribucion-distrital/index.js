var info = [
  { "lnominal": 288072, "secciones": 178, "urbanas": 136, "nourbanas": 42,
    "municipios": 11, "dels": 3, "curbanas": 18979, "cnourbanas": 5339 },
  { "lnominal": 333881, "secciones": 226, "urbanas": 186, "nourbanas": 40,
    "municipios": 11, "dels": 4, "curbanas": 24182, "cnourbanas": 4652 },
  { "lnominal": 304073, "secciones": 215, "urbanas": 201, "nourbanas": 14,
    "municipios": 1, "dels": 5, "curbanas": 24914, "cnourbanas": 1646 },
  { "lnominal": 291131, "secciones": 286, "urbanas": 135, "nourbanas": 151,
    "municipios": 41, "dels": 4, "curbanas": 18650, "cnourbanas": 18912 },
  { "lnominal": 295985, "secciones": 202, "urbanas": 183, "nourbanas": 19,
    "municipios": 1, "dels": 5, "curbanas": 24624, "cnourbanas": 2272 },
  { "lnominal": 320458, "secciones": 219, "urbanas": 189, "nourbanas": 30,
    "municipios": 1, "dels": 3, "curbanas": 26445, "cnourbanas": 4161 },
  { "lnominal": 268126, "secciones": 207, "urbanas": 110, "nourbanas": 97,
    "municipios": 7, "dels": 3, "curbanas": 14938, "cnourbanas": 13886 }
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
