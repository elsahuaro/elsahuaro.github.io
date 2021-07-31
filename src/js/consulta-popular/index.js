var data = false;
var data_uts = false;
var data_mesas = false;
var map = false;
var sidebar = false;
var secLayer = false;
var mesasLayer = false;
var selectedSec = false;
var selectedLayer = false;
var otherSelected = false;

var defFilter = 'todos';
var tipo = 'uts';
var alfa = 0.2;

function initMap() {
  map = L.map('map');
  map.setView([29.1026, -110.97732], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(map);
  sidebar = L.control.sidebar({
    container: 'sidebar',
    autopan: true,
  }).addTo(map);
  map.on('click', function(event) { resetSelection(); });
  sidebar.open('datos');
}

function resetSelection() {
  undoSelection();
  var elm = document.getElementById('sec-table');
  elm.innerHTML = '';
}

function undoSelection() {
  if (selectedLayer) {
    selectedLayer.setStyle(dispatchStyle()({ properties: selectedSec }));
    for (var other of utToSecLayers[selectedLayer.feature.properties['ut']] || []) {
      other.setStyle(dispatchStyle()({ properties: other.feature.properties }));
    }
  }
  selectedSec = false;
  selectedLayer = false;
}

function doSelection() {
  if (selectedLayer) {
    selectedLayer.setStyle({
      color: '#ffff00',
      weight: 4,
    });
    if (tipo == 'tsecs') {
      for (var other of utToSecLayers[selectedLayer.feature.properties['ut']]) {
        other.setStyle({
          color: '#ffff00',
          weight: 4,
        });
      }
    }
  }
}

initMap();

window.addEventListener('load', function() {
  fetch("/data/unidades_territoriales_data.json")
    .then(response => response.json())
    .then(json => {
      fetch("/data/secciones_cp_data.json")
        .then(response => response.json())
        .then(json2 => {
          fetch("/data/mesas_receptoras_data.json")
            .then(response => response.json())
            .then(json3 => {
              document.getElementById('def-select').value='todos';
              document.getElementById('tipo-select').value='uts';
              document.getElementById('alpha-select').value='20';
              setupData(json, json2, json3);
              setupMap();
              setupBaseMap();
            });
        });
    });
});

function setupData(json_uts, json_secs, json_mesas) {
  data = json_secs;
  data_uts = json_uts;
  data_mesas = json_mesas;
}

function setupMap() {
  if (!map) {
    initMap();
  }
  if (map && secLayer && mesasLayer) {
    map.removeLayer(secLayer);
    map.removeLayer(mesasLayer);
  }
}

var utToSecLayers = {};

function setupBaseMap() {
  secLayer = L.geoJSON((tipo == 'uts' ? data_uts : data), {
    style: dispatchStyle(),
    filter: dispatchFilter(),
    onEachFeature: callbackInstall(),
  }).addTo(map);
  mesasLayer = L.geoJSON(data_mesas, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 4,
        fillColor: "#ff0078",
        color: "#000",
        weight: 1,
        opacity: 1.0, // alfa,
        fillOpacity: 1.0, // alfa,
      });
    },
    filter: dispatchFilter(),
  }).addTo(map);
  if (tipo == 'tsecs') {
    utToSecLayers = {};
    secLayer.eachLayer(function (layer) {
      var sec = layer.feature.properties['sec'];
      var ut = layer.feature.properties['ut'];
      if (!utToSecLayers.hasOwnProperty(ut)) {
        utToSecLayers[ut] = [layer];
      } else {
        utToSecLayers[ut].push(layer);
      }
    });
  }
  resetSelection();
}

function flyToFocus() {
  var bounds = secLayer.getBounds();
  if (bounds.isValid()) {
    var offset = document.querySelector('.leaflet-sidebar-content').getBoundingClientRect().width;
    map.flyToBounds(bounds, {paddingTopLeft: [offset,0]});
  }
}

function dispatchStyle() {
  switch (tipo) {
    case 'uts': return utsStyle;
    case 'tsecs': return secStyle;
    default: return plainStyle;
  }
}

function dispatchFilter() {
  if (defFilter) return defsFilter;
  return function(feature, layer) {
    return true;
  }
}

const onClickGeom = (feature, layer) => {
  undoSelection();
  selectedSec = feature.properties;
  selectedLayer = layer;
  doSelection();
  var elm = document.getElementById('sec-table');
  if (tipo == 'uts') {
    elm.innerHTML = tableHTML_UTS(selectedSec);
  } else {
    elm.innerHTML = tableHTML(selectedSec);
  }
  sidebar.open('datos');
}

const clickHandler = (feature, layer) => {
  return (event) => {
        L.DomEvent.stop(event);
        onClickGeom(feature, layer);
  }
}

function callbackInstall() {
  return function(feature, layer) {
    layer.on({
      click: clickHandler(feature, layer),
    })
  }
}

var def_colors = ['#5F4690','#1D6996','#38A6A5','#0F8554','#73AF48','#EDAD08','#E17C05','#CC503E','#94346E','#6F4070','#994E95','#666666'];

function utsStyle(feature) {
  return {
    color: '#000000',
    weight: 1.0,
    opacity: 1.0, // alfa,
    fill: true,
    fillColor: def_colors[feature.properties['def']-1],
    fillOpacity: alfa,
  }
}

function secStyle(feature) {
  var color = feature.properties['sede'] == feature.properties['sec'] ? (
    def_colors[8]
  ) : (!feature.properties['sede'] ? (
    def_colors[11]
  ) : def_colors[10]);
  return {
    color: '#000000',
    weight: 1.0,
    opacity: 1.0, // alfa,
    fill: true,
    fillColor: color,
    fillOpacity: alfa,
  }
}

function plainStyle(feature) {
  return {
    color: '#000000',
    weight: 1.0,
    opacity: 1.0, // alfa,
    fill: true,
    fillColor: '#b5261e',
    fillOpacity: alfa,
  };
}

function defsFilter(feature, layer) {
  if (defFilter == 'todos') {
    return true;
  } else {
    return Number(defFilter) == feature.properties['def'];
  }
}

function filtraDEF(event) {
  defFilter = event.target.value;
  setupMap();
  setupBaseMap();
  flyToFocus();
}

function filtraTipo(event) {
  tipo = event.target.value;
  setupMap();
  setupBaseMap();
}

function cambiaAlpha(event) {
  alfa = Number(event.target.value)/100.0;
  setupMap();
  setupBaseMap();
}

function tableHTML(props) {
  var def = props['def'];
  var mesas = props['mesas'];
  var mun = props['mun'];
  var sec = props['sec'];
  var secs = props['secs'];
  var sede = props['sede'];
  var ut = props['ut'];
  var sut = ut.split('_')[1];
  var secsstr = secs.length ? secs.join(', ') : '??';
  var domicilio = props['domicilio'];
  var ubicacion = props['ubicacion'];
  var referencia = props['referencia'];

  var txt = `
<h2>Sección ${sec}</h2>
<br />
<div class="info-row">
<div><strong>Unidad territorial</strong> <span>${sut}</span></div>
<div><strong>Distrito</strong> <span>${def}</span></div>
<div><strong>Municipio sede</strong> <span>${mun}</span></div>
<div><strong>Sección sede</strong> <span>${sede ? sede : '??' }</span></div>
</div>
<div class="info-row">
<div><strong>Secciones en UT</strong> <span>${secsstr}</span></div>
</div>
  `;

  if (mesas.length) {
    txt += `
<div class="mesas">
<hr>
<h3>Mesas receptoras</h3>
<div class="mesas-row">
<div><strong>Domicilio</strong> <span>${domicilio}</span></div>
<div><strong>Ubicación</strong> <span>${ubicacion}</span></div>
<div><strong>Referencia</strong> <span>${referencia}</span></div>
</div>
    `
    for (var x of mesas) {
      var tipo = x['casilla'] == 'B' ? 'Básica' : (
        'Contigua ' + Number(x['casilla'].substr(1))
      );
      txt += `
<div class="mesas-row">
<h4>${tipo}</h4>
<div><strong>Desde</strong> <span>${x['inicial']}</span></div>
<div><strong>Hasta</strong> <span>${x['final']}</span></div>
</div>
      `
    }
    txt += `
</div>
    `
  }

  return txt;
}

function tableHTML_UTS(props) {
  var def = props['def'];
  var mesas = props['mesas'];
  var mun = props['mun'];
  var secs = props['secs'];
  var sede = props['sede'];
  var ut = props['ut'];
  var sut = ut.split('_')[1];
  var secsstr = secs.length ? secs.join(', ') : '??';
  var domicilio = props['domicilio'];
  var ubicacion = props['ubicacion'];
  var referencia = props['referencia'];

  var txt = `
<h2>Unidad Territorial ${sut} del distrito ${def}</h2>
<br />
<div class="info-row">
<div><strong>Municipio sede</strong> <span>${mun}</span></div>
<div><strong>Sección sede</strong> <span>${sede ? sede : '??' }</span></div>
</div>
<div class="info-row">
<div><strong>Secciones en UT</strong> <span>${secsstr}</span></div>
</div>
  `;

  if (mesas.length) {
    txt += `
<div class="mesas">
<hr>
<h3>Mesas receptoras</h3>
<div class="mesas-row">
<div><strong>Domicilio</strong> <span>${domicilio}</span></div>
<div><strong>Ubicación</strong> <span>${ubicacion}</span></div>
<div><strong>Referencia</strong> <span>${referencia}</span></div>
</div>
    `
    for (var x of mesas) {
      var tipo = x['casilla'] == 'B' ? 'Básica' : (
        'Contigua ' + Number(x['casilla'].substr(1))
      );
      txt += `
<div class="mesas-row">
<h4>${tipo}</h4>
<div><strong>Desde</strong> <span>${x['inicial']}</span></div>
<div><strong>Hasta</strong> <span>${x['final']}</span></div>
</div>
      `
    }
    txt += `
</div>
    `
  }

  return txt;
}

function volarSeccion() {
  var sec = Number(document.getElementById("vuelo").value);
  for (var x of secLayer.getLayers()) {
    if (x.feature.properties['sec'] != sec) {
      continue;
    }
    onClickGeom(x.feature, x);
    var bounds = x.getBounds();
    if (bounds.isValid()) {
      var offset = document.querySelector('.leaflet-sidebar-content').getBoundingClientRect().width;
      map.flyToBounds(bounds, {paddingTopLeft: [offset,0]});
    }
    return;
  }
}
