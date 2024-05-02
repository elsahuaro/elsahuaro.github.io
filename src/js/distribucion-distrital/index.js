var info = [
  { "lnominal": 321908, "secciones": 185, "urbanas": 145, "nourbanas": 40,
    "municipios": 11, "dels": 3, "casbasicas": 185, "casconti": 328, "casextr": 17, "casesp": 6 },
  { "lnominal": 374524, "secciones": 231, "urbanas": 196, "nourbanas": 35,
    "municipios": 11, "dels": 4, "casbasicas": 231, "casconti": 370, "casextr": 12, "casesp": 6 },
  { "lnominal": 332303, "secciones": 210, "urbanas": 199, "nourbanas": 11,
    "municipios": 1, "dels": 5, "casbasicas": 210, "casconti": 320, "casextr": 5, "casesp": 2 },
  { "lnominal": 303130, "secciones": 277, "urbanas": 133, "nourbanas": 144,
    "municipios": 41, "dels": 4, "casbasicas": 277, "casconti": 265, "casextr": 18, "casesp": 3 },
  { "lnominal": 348793, "secciones": 223, "urbanas": 204, "nourbanas": 19,
    "municipios": 1, "dels": 5, "casbasicas": 223, "casconti": 316, "casextr": 36, "casesp": 4 },
  { "lnominal": 330861, "secciones": 237, "urbanas": 205, "nourbanas": 32,
    "municipios": 1, "dels": 3, "casbasicas": 237, "casconti": 324, "casextr": 12, "casesp": 4 },
  { "lnominal": 279461, "secciones": 207, "urbanas": 92, "nourbanas": 115,
    "municipios": 7, "dels": 3, "casbasicas": 207, "casconti": 264, "casextr": 14, "casesp": 3 }
];

function infoSeleccion(i) {
  document.getElementById("data-entries").style.visibility = "visible";
  var dels = info[i]["dels"];
  var municipios = info[i]["municipios"];
  var lnominal = info[i]["lnominal"];
  var secciones = info[i]["secciones"];
  var urbanas = info[i]["urbanas"];
  var nourbanas = info[i]["nourbanas"];
  var casbasicas = info[i]["casbasicas"];
  var casconti = info[i]["casconti"];
  var casextr = info[i]["casextr"];
  var casesp = info[i]["casesp"];
  // var curbanas = info[i]["curbanas"];
  // var cnourbanas = info[i]["cnourbanas"];
  document.getElementById("distrito").innerHTML = (i+1);
  document.getElementById("dels").innerHTML =  dels.toLocaleString('es-MX');
  document.getElementById("municipios").innerHTML = municipios.toLocaleString('es-MX');
  document.getElementById("lnominal").innerHTML = lnominal.toLocaleString('es-MX');
  document.getElementById("secciones").innerHTML = secciones.toLocaleString('es-MX');
  document.getElementById("urbanas").innerHTML = urbanas.toLocaleString('es-MX');
  document.getElementById("nourbanas").innerHTML = nourbanas.toLocaleString('es-MX');
    document.getElementById("casbasicas").innerHTML = casbasicas.toLocaleString('es-MX');
    document.getElementById("casconti").innerHTML = casconti.toLocaleString('es-MX');
    document.getElementById("casextr").innerHTML = casextr.toLocaleString('es-MX');
    document.getElementById("casesp").innerHTML = casesp.toLocaleString('es-MX');
  // document.getElementById("curbanas").innerHTML = curbanas.toLocaleString('es-MX');
  // document.getElementById("cnourbanas").innerHTML = cnourbanas.toLocaleString('es-MX');
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
