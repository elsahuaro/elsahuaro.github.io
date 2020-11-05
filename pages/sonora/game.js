var info = [
  { "lnominal": 288072, "secciones": 178, "urbanas": 136, "rurales": 42, "municipios": 11 },
  { "lnominal": 333881, "secciones": 226, "urbanas": 186, "rurales": 40, "municipios": 11 },
  { "lnominal": 304073, "secciones": 215, "urbanas": 201, "rurales": 14, "municipios": 1 },
  { "lnominal": 291131, "secciones": 286, "urbanas": 135, "rurales": 151, "municipios": 41 },
  { "lnominal": 295985, "secciones": 202, "urbanas": 183, "rurales": 19, "municipios": 1 },
  { "lnominal": 320458, "secciones": 219, "urbanas": 189, "rurales": 30, "municipios": 1 },
  { "lnominal": 268126, "secciones": 207, "urbanas": 110, "rurales": 97, "municipios": 7 }
];

function infoSeleccion(i) {
  document.getElementById("data-entries").style.visibility = "visible";
  var lnominal = info[i]["lnominal"];
  var secciones = info[i]["secciones"];
  var urbanas = info[i]["urbanas"];
  var rurales = info[i]["rurales"];
  document.getElementById("distrito").innerHTML = "" + (i+1);
  document.getElementById("lnominal").innerHTML = "" + lnominal;
  document.getElementById("secciones").innerHTML = "" + secciones;
  document.getElementById("urbanas").innerHTML = "" + urbanas;
  document.getElementById("rurales").innerHTML = "" + rurales;
}

window.onload = function() {
  var config = {
    width: 670,
    height: 670,
    scene: [LoadingScene, MapScene],
    backgroundColor: "#FFFFFF",
    parent: "info-sonora"
  };

  document.getElementById("data-entries").style.visibility = "hidden";

  var game = new Phaser.Game(config);
}
