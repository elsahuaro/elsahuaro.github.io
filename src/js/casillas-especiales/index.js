var map = false;

var estados = [
  "No existe",
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila",
  "Colima", "Chiapas", "Chihuahua", "Ciudad de México", "Durango", "Guanajuato",
  "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit",
  "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán",
  "Zacatecas",
]

var circunscripcion = [2, 3, 8, 10, 14, 18, 25];

var ce_data = [
  {"id":1,"sec":295,"mun":"Caborca","id_mun":46,"id_man":80,"lat":30.724,"long":-112.15808,
   "def":1,"del":3,"del_rom":"III"},
  {"id":2,"sec":636,"mun":"Pto. Peñasco","id_mun":53,"id_man":53,"lat":31.32937,"long":-113.53112,
   "def":1,"del":2,"del_rom":"II"},
  {"id":3,"sec":652,"mun":"SLRC","id_mun":55,"id_man":61,"lat":32.48568,"long":-114.78963,
   "def":1,"del":1,"del_rom":"I"},
  {"id":4,"sec":1328,"mun":"Gral. P. Elías C.","id_mun":70,"id_man":3,"lat":31.86284,"long":-112.84904,
   "def":1,"del":3,"del_rom":"III"},
  {"id":5,"sec":14,"mun":"Agua Prieta","id_mun":2,"id_man":1,"lat":31.31927,"long":-109.55768,
   "def":2,"del":7,"del_rom":"VII"},
  {"id":6,"sec":26,"mun":"Agua Prieta","id_mun":2,"id_man":1,"lat":31.30909,"long":-109.56299,
   "def":2,"del":7,"del_rom":"VII"},
  {"id":7,"sec":145,"mun":"Naco","id_mun":27,"id_man":58,"lat":31.32116,"long":-109.94821,
   "def":2,"del":7,"del_rom":"VII"},
  {"id":8,"sec":171,"mun":"Nogales","id_mun":30,"id_man":1,"lat":31.32819,"long":-110.96456,
   "def":2,"del":5,"del_rom":"V"},
  {"id":9,"sec":171,"mun":"Nogales","id_mun":30,"id_man":1,"lat":31.32819,"long":-110.96444,
   "def":2,"del":5,"del_rom":"V"},
  {"id":10,"sec":223,"mun":"Nogales","id_mun":30,"id_man":6,"lat":31.27953,"long":-110.94086,
   "def":2,"del":4,"del_rom":"IV"},
  {"id":11,"sec":590,"mun":"Hermosillo","id_mun":49,"id_man":59,"lat":29.08971,"long":-111.05211,
   "def":3,"del":11,"del_rom":"XI"},
  {"id":12,"sec":590,"mun":"Hermosillo","id_mun":49,"id_man":59,"lat":29.09001,"long":-111.05154,
   "def":3,"del":11,"del_rom":"XI"},
  {"id":13,"sec":1013,"mun":"Empalme","id_mun":60,"id_man":14,"lat":27.95231,"long":-110.8136,
   "def":4,"del":14,"del_rom":"XIV"},
  {"id":14,"sec":1047,"mun":"Guaymas","id_mun":61,"id_man":33,"lat":27.92487,"long":-110.9088,
   "def":4,"del":13,"del_rom":"XIII"},
  {"id":15,"sec":1048,"mun":"Guaymas","id_mun":61,"id_man":13,"lat":27.92142,"long":-110.89783,
   "def":4,"del":13,"del_rom":"XIII"},
  {"id":16,"sec":439,"mun":"Hermosillo","id_mun":49,"id_man":99,"lat":29.09774,"long":-110.93122,
   "def":5,"del":12,"del_rom":"XII"},
  {"id":17,"sec":439,"mun":"Hermosillo","id_mun":49,"id_man":99,"lat":29.09761,"long":-110.93137,
   "def":5,"del":12,"del_rom":"XII"},
  {"id":18,"sec":510,"mun":"Hermosillo","id_mun":49,"id_man":32,"lat":29.07822,"long":-110.93001,
   "def":5,"del":12,"del_rom":"XII"},
  {"id":19,"sec":510,"mun":"Hermosillo","id_mun":49,"id_man":32,"lat":29.07837,"long":-110.92949,
   "def":5,"del":12,"del_rom":"XII"},
  {"id":20,"sec":777,"mun":"Cajeme","id_mun":59,"id_man":104,"lat":27.51457,"long":-109.93294,
   "def":6,"del":16,"del_rom":"XVI"},
  {"id":21,"sec":806,"mun":"Cajeme","id_mun":59,"id_man":34,"lat":27.49625,"long":-109.96133,
   "def":6,"del":17,"del_rom":"XVII"},
  {"id":22,"sec":844,"mun":"Cajeme","id_mun":59,"id_man":24,"lat":27.48142,"long":-109.94664,
   "def":6,"del":16,"del_rom":"XVI"},
  {"id":23,"sec":1198,"mun":"Huatabampo","id_mun":64,"id_man":74,"lat":26.8225,"long":-109.63495,
   "def":7,"del":21,"del_rom":"XXI"},
  {"id":24,"sec":1234,"mun":"Navojoa","id_mun":65,"id_man":61,"lat":27.08128,"long":-109.44619,
   "def":7,"del":19,"del_rom":"XIX"},
  {"id":25,"sec":1248,"mun":"Navojoa","id_mun":65,"id_man":25,"lat":27.0785,"long":-109.44227,
   "def":7,"del":19,"del_rom":"XIX"},
];

const initMap = (zoom) => {
  map = L.map("map").setView([29.5026, -112], zoom);
  L.tileLayer.wms('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  for (var ce of ce_data) {
    L.marker([ce["lat"], ce["long"]]).addTo(map)
     .bindPopup(
       ce["mun"] + ' sección ' + ce["sec"] +
       '<br><br><button class="sm-button" onclick="elegirCE('+ ce["id"] +')">Seleccionar</button>'
     );
  }
  document.getElementById("el-estado").addEventListener('input', cambioEstadoCB);
}

const cambioEstadoCB = (e) => {
  cambioEstado(e.srcElement.value);
}

var claveEstado = false;

const cambioEstado = (e) => {
  var nombre = document.getElementById("estado-nombre");
  if (e == "") {
    nombre.innerText = "Sonora";
    claveEstado = 26;
    return;
  }
  var est = parseInt(e);
  if (!est) {
    nombre.innerText = estados[0];
    claveEstado = false;
  } else if (1 <= est && est < estados.length) {
    nombre.innerText = estados[est];
    claveEstado = est;
  } else {
    nombre.innerText = estados[0];
    claveEstado = false;
  }
}

var ceData = false;

const actualizarCE = (id) => {
  let ceinfo = document.getElementById("ce-info");
  ceinfo.style.display = "none";
  var sel = false;
  for (var ce of ce_data) {
    if (ce["id"] == id) {
      sel = ce;
      break;
    }
  }
  if (!sel) {
    return;
  }
  map.fitBounds(L.latLngBounds([L.latLng(sel["lat"], sel["long"])]));
  document.getElementById("ce-del").innerText = sel["del_rom"];
  document.getElementById("ce-def").innerText = sel["def"];
  document.getElementById("ce-mun").innerText = sel["mun"];
  document.getElementById("ce-sec").innerText = sel["sec"];
  ceinfo.style.display = "flex";
  document.getElementById('pv-info').style.display = "none";
  document.getElementById("secerr").style.display = "none";
  document.getElementById("circerr").style.display = "none";
  document.getElementById("mismaerr").style.display = "none";
  ceData = sel;

  document.getElementById("elector").scrollIntoView(true);
}

const elegirCE = (id) => {
  actualizarUrl(id);
  actualizarCE(id);
}

function revisarUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get("id");
  return parseInt(pageParam);
}

function actualizarUrl(id) {
  if (history.pushState) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set("id", id);
    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
    window.history.pushState({path: newurl}, '', newurl);
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("id", id);
    window.location.search = urlParams.toString();
  }
}

const puedeVotar = () => {
  document.getElementById("secerr").style.display = "none";
  document.getElementById("circerr").style.display = "none";
  document.getElementById("mismaerr").style.display = "none";
  var pvinfo = document.getElementById('pv-info');
  var sec = parseInt(document.getElementById("la-secc").value);
  if (!claveEstado || !sec) {
    pvinfo.style.display = "none";
    return;
  }

  puedeVotarLimpio();
  pvinfo.style.display = "flex";
  document.getElementById("puede-votar").scrollIntoView(true);
  
  var est = claveEstado;
  if (est == 26) {
    fetch("/data/identidad-electoral/" + sec + ".json")
      .then(response => response.json())
      .then(json => {
        const DEL = json['properties']['DEL'];
        const DEF = json['properties']['DEF'];
        const MUN = json['properties']['Municipio ID'];

        /*
           El algoritmo es válido cuando el estado tiene una sola
           circunscripcion local.
         */
        if (sec == ceData['sec']) {
          puedeVotarLimpio();
          pvinfo.style.display = "none";
          document.getElementById("mismaerr").style.display = "flex";
          return;
        } else {
          siGubernatura();
        }

        if (MUN == ceData['id_mun']) {
          siAyun();
        } else {
          noAyun();
        }

        if (DEL == ceData['del']) {
          siDipLoc();
        } else {
          siDipLocRP();
        }

        if (DEF == ceData['def']) {
          siDipFed();
        } else {
          siDipFedRP();
        }
      }).catch(function(error) {
        puedeVotarLimpio();
        pvinfo.style.display = "none";
        document.getElementById("secerr").style.display = "flex";
      });
  } else if (circunscripcion.includes(est)) {
    noGubernatura();
    noDipLoc();
    noAyun();
    siDipFedRP();
  } else {
    puedeVotarLimpio();
    pvinfo.style.display = "none";
    document.getElementById("circerr").style.display = "flex";
  }
}

const noCol = 'red';
const siCol = 'green';

const siGubernatura = () => {
  var elt = document.getElementById('vota-puede-gub');
  elt.innerText = 'SI';
  elt.style['color'] = siCol;
  elt = document.getElementById('cajon-gub-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral del estado de Sonora.'
}

const noGubernatura = () => {
  var elt = document.getElementById('vota-puede-gub');
  elt.innerText = 'NO';
  elt.style['color'] = noCol;
  elt = document.getElementById('cajon-gub-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral fuera del estado de Sonora.';
}

const siDipLoc = () => {
  var elt = document.getElementById('vota-puede-dip-loc');
  elt.innerText = 'SI';
  elt.style['color'] = siCol;
  elt = document.getElementById('dip-loc-tipo');
  elt.innerText = '';
  elt = document.getElementById('cajon-dip-loc-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral dentro del distrito electoral local de la casilla especial.'
}

const siDipLocRP = () => {
  var elt = document.getElementById('vota-puede-dip-loc');
  elt.innerText = 'SI';
  elt.style['color'] = siCol;
  elt = document.getElementById('dip-loc-tipo');
  elt.innerText = 'Representación Proporcional';
  elt = document.getElementById('cajon-dip-loc-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral fuera del distrito electoral local de la casilla especial, pero dentro del estado de Sonora.'
}

const noDipLoc = () => {
  var elt = document.getElementById('vota-puede-dip-loc');
  elt.innerText = 'NO';
  elt.style['color'] = noCol;
  elt = document.getElementById('dip-loc-tipo');
  elt.innerText = '';
  elt = document.getElementById('cajon-dip-loc-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral fuera del estado de Sonora.';
}

const siAyun = () => {
  var elt = document.getElementById('vota-puede-ayun');
  elt.innerText = 'SI';
  elt.style['color'] = siCol;
  elt = document.getElementById('cajon-ayun-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral dentro del municipio de la casilla especial.'
}

const noAyun = () => {
  var elt = document.getElementById('vota-puede-ayun');
  elt.innerText = 'NO';
  elt.style['color'] = noCol;
  elt = document.getElementById('cajon-ayun-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral fuera del municipio de la casilla especial.';
}

const noDipFed = () => {
  var elt = document.getElementById('vota-puede-dip-fed');
  elt.innerText = 'NO';
  elt.style['color'] = noCol;
  elt = document.getElementById('dip-fed-tipo');
  elt.innerText = '';
  elt = document.getElementById('cajon-dip-fed-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral fuera de la Circunscripción 1.';
}

const siDipFed = () => {
  var elt = document.getElementById('vota-puede-dip-fed');
  elt.innerText = 'SI';
  elt.style['color'] = siCol;
  elt = document.getElementById('dip-fed-tipo');
  elt.innerText = '';
  elt = document.getElementById('cajon-dip-fed-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral dentro del distrito electoral federal de la casilla especial.'
}

const siDipFedRP = () => {
  var elt = document.getElementById('vota-puede-dip-fed');
  elt.innerText = 'SI';
  elt.style['color'] = siCol;
  elt = document.getElementById('dip-fed-tipo');
  elt.innerText = 'Representación Proporcional';
  elt = document.getElementById('cajon-dip-fed-inner');
  elt.innerText = 'La credencial del elector corresponde a una sección electoral fuera del estado de Sonora, pero dentro de la Circunscripción 1.'
}

const puedeVotarLimpio = () => {
  document.getElementById('vota-puede-gub').innerText = '';
  document.getElementById('vota-puede-dip-loc').innerText = '';
  document.getElementById('dip-loc-tipo').innerText = '';
  document.getElementById('vota-puede-ayun').innerText = '';
  document.getElementById('vota-puede-dip-fed').innerText = '';
  document.getElementById('dip-fed-tipo').innerText = '';
}

const toggleCajon = (elmId) => {
  var elm = document.getElementById(elmId);
  if (!elm) {
    return;
  }
  if (elm.style['max-height'] == '0px') {
    elm.style['max-height'] = '100vh';
  } else {
    elm.style['max-height'] = '0px';
  }
}

window.addEventListener("load", function() {
  let zoom = 6;
  if (window.matchMedia("all and (min-width:1366px)").matches) {
    zoom = 7;
  }
  initMap(zoom);
  var id = revisarUrl();
  if (id) {
    actualizarCE(id);
  }
  cambioEstado(document.getElementById("el-estado").value);
});
