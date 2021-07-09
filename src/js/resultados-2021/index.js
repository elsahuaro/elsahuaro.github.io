var data = false;
var data_defs = false;
var map = false;
var sidebar = false;
var secLayer = false;
var selectedSec = false;
var selectedLayer = false;

var defFilter = 'todos';
var delFilter = 'todos';
var tipo = 'defs';
var alfa = 1.0;

var defcoal = {
  1: {
    'FXM': ['JOSE RICARDO PONCE DE LEON HERNANDEZ','MOISES MONRROY FLORES'],
    'MC': ['RAMONA RAMIREZ MAC GREW','ALEJANDRA ESTRADA GUTIERREZ'],
    'MORENA': ['MANUEL DE JESUS BALDENEBRO ARREDONDO','JULIO ROCHA AVILA'],
    'PAN-PRI-PRD': ['LINA ACOSTA CID','GUADALUPE BELTRAN BOJORQUEZ'],
    'PES': ['FABIOLA MARICELA SALDIVAR VELEZ','KARLA KARINA GUEVARA ROMO'],
    'PT': ['BLANCA ESTELA URIAS VINGOCHEA','BLANCA ABIGAIL MEDINA MEDRANO'],
    'PVEM': ['JESUS RAFAEL GALINDO MEDINA','HECTOR IVAN ORTIZ COBIAN'],
    'PVEM-PT-MORENA': null,
    'RSP': null,
  },
  2: {
    'FXM': ['GRICELDA GARCIA ROMERO','JANETH ELIZABETH COTA ABREGO'],
    'MC': ['MARIA ELENA MORENO DURAZO','MARTHA ELENA CASTILLO OSORIO'],
    'MORENA': null,
    'PAN-PRI-PRD': ['LETICIA AMPARANO GAMEZ','CELINA NORIEGA MONTAÑO'],
    'PES': ['JOSE FRANCISCO GARCIA VALENCIA','ROMAN FLORES VALENZUELA'],
    'PT': null,
    'PVEM': null,
    'PVEM-PT-MORENA': ['ANA LAURA BERNAL CAMARENA','ESMERALDA VILLA IBARRA'],
    'RSP': ['JESUS OCTAVIO PESQUEIRA TAPIA','ANDRES FABIAN GRIJALVA VILLAGRAN'],
  },
  3: {
    'FXM': ['LUZ MARINA DELGADO TARAZON','KARLA KARINA FLORES ESPINOZA'],
    'MC': ['CARLOS ALBERTO LEON GARCIA','JULIO CESAR ARBALLO MORALES'],
    'MORENA': null,
    'PAN-PRI-PRD': ['ARTURO FERNANDEZ DIAZ GONZALEZ','EDUARDO ANTONIO ROMERO CAMPA'],
    'PES': ['XOCHITL MARIA GONZALEZ ORTEGA','MARIA FERNANDA YANES ENRIQUEZ'],
    'PT': null,
    'PVEM': null,
    'PVEM-PT-MORENA': ['LORENIA IVETH VALLES SAMPEDRO','ROSANGELA AMAIRANY PEÑA ESCALANTE'],
    'RSP': ['ROCIO ADILENE PINO PINO','DIANA MICHELLE CASTILLO ESCOBEDO'],
  },
  4: {
    'FXM': ['JOSE JESUS FLORES VALADEZ','JUANA MARICELA VILLANUEVA PEREZ'],
    'MC': ['DANIEL BARANZINI HURTADO','PAULO JOVAN VIELLEDENT MOLINA'],
    'MORENA': ['HERIBERTO MARCELO AGUILAR CASTILLO','BERNARDO RIOS CHENO'],
    'PAN-PRI-PRD': ['JESUS SALDAÑA LOPEZ','MANUEL DE JESUS BORBON HOLGUIN'],
    'PES': ['SILVIA MANUELA URIAS SERRANO','JUDITH ALEJANDRA VALENZUELA MORALES'],
    'PT': ['FRANCISCO XAVIER CARLOS GARCIA','MARTHA ALICIA ALVAREZ ZAMBRANO'],
    'PVEM': ['FELIPE DAVID MARTINEZ ROBLES','MARCO ANTONIO CARDOSO RODRIGUEZ'],
    'PVEM-PT-MORENA': null,
    'RSP': ['BRENDA ARACELI VALLE GARCIA CORONEL','ANA GABRIELA GARCIA DIONICIO'],
  },
  5: {
    'FXM': ['CARMEN CECILIA SESTITO FLORES','ROSA ISELA CORONADO CAPERON'],
    'MC': ['CARMEN HAYDEE PALACIOS ABECHUCO','KAREN ALMODOVAR CASTILLO'],
    'MORENA': null,
    'PAN-PRI-PRD': ['MARIA CRISTINA MARGARITA GUTIERREZ MAZON','LOURDES GARCIA ROBLES'],
    'PES': ['MARIA DEL CARMEN ARAGON MILLANES','MELISA ANGELICA GONZALEZ DIAZ'],
    'PT': null,
    'PVEM': null,
    'PVEM-PT-MORENA': ['MARIA WENDY BRICEÑO ZULOAGA','JUDITH CELINA TANORI CORDOVA'],
    'RSP': null,
  },
  6: {
    'FXM': ['NORA DILAN HURTADO VALENZUELA','MARIBEL ARMENTA VALENZUELA'],
    'MC': ['EDUARDO FLORES MORENO','FRANCISCO MIGUEL SANCHEZ MEDINA'],
    'MORENA': ['GABRIELA MARTINEZ ESPINOZA','OLGA LYDIA QUIROZ LOPEZ'],
    'PAN-PRI-PRD': ['OMAR ALBERTO GUILLEN PARTIDA','TANIA KARLA KAREN ARMENTA LOZADA'],
    'PES': ['LEONEL REYES LEYVA','JOSE LEONEL SANTINI PRECIADO'],
    'PT': ['MARIA LUISA VEGA CUAMEA','CARMEN YANET HERNANDEZ LEYVA'],
    'PVEM': ['ALONSO LARA MARES','RAMON FERNANDO ARVIZU GARCIA'],
    'PVEM-PT-MORENA': null,
    'RSP': ['SERGIO ALEJANDRO IBARRA PARTIDA','LUIS FERNANDO GARCIA REYES'],
  },
  7: {
    'FXM': ['FRANCISCO MANUEL MARTINEZ MAGALLANES','MIRIAM MARGARITA MAGALLANES ALVAREZ'],
    'MC': ['JAVIER RUIZ LOVE','JOSE MANUEL MORALES GARCIA'],
    'MORENA': null,
    'PAN-PRI-PRD': ['PROSPERO MANUEL IBARRA OTERO','JOAQUIN RICARDO FLORES PEREZ'],
    'PES': ['ERASMO MELESIO RASCON PAREDES','JOSE ANDRES RAMOS VELDERRAIN'],
    'PT': null,
    'PVEM': null,
    'PVEM-PT-MORENA': ['SHIRLEY GUADALUPE VAZQUEZ ROMERO','GUADALUPE TERESA DE ANDA BELTRAN'],
    'RSP': ['OSCAR LUIS ARGUELLES MENDEZ','AGUILEO FELIX AYALA'],
  },
}

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
  map.on('zoomend', function() {
    // esconder etiquetas dependiendo del zoom?
  });
  sidebar.open('informacion');
  document.getElementById('select-del').style.display = 'none';
}

function resetSelection() {
  undoSelection();
  var elm = document.getElementById('sec-table');
  elm.innerHTML = '';
}

initMap();

window.addEventListener('load', function() {
  fetch("/data/secciones_dipfed.json")
    .then(response => response.json())
    .then(json => {
      fetch("/data/secciones_dipfed_defs.json")
        .then(response => response.json())
        .then(json2 => {
          document.getElementById('def-select').value='todos';
          document.getElementById('del-select').value='todos';
          document.getElementById('tipo-select').value='defs';
          document.getElementById('alpha-select').value='100';
          setupData(json, json2);
          setupMap();
          setupBaseMap();
        })
    });
})

function setupData(json, json2) {
  data = json;
  data_defs = json2;
}

function setupMap() {
  if (!map) {
    initMap();
  }
  if (map && secLayer) {
    map.removeLayer(secLayer);
  }
}

var baseMapColors = ['#5F4690','#1D6996','#38A6A5','#0F8554','#73AF48','#EDAD08','#E17C05','#CC503E','#94346E','#6F4070','#994E95','#666666'];
function defsStyle(feature) {
  return {
    /* stroke */
    color: '#000000',
    weight: 1.0,
    opacity: alfa,
    /* fill */
    fill: true,
    fillColor: baseMapColors[feature.properties['Distrito Federal']-1],
    fillOpacity: alfa,
  }
}

var coalColors = {
  'FXM': '#ef60a3',
  'MC': '#ff8200',
  'MORENA': '#b45858',
  'PAN-PRI-PRD': '#669ff1',
  'PES': '#642667',
  'PT': '#e73c3e',
  'PVEM': '#7acc00',
  'PVEM-PT-MORENA': '#f2908f',
  'RSP': '#a6192e',
}
function ganadoresStyle(feature) {
  var coal = feature.properties['Coalición Ganadora'];
  if (!coal) { return { color: '#000000', weight: 1.0, opacity: alfa,
                        fill: true, fillColor: '#efefef', fillOpacity: alfa } }
  return {
    /* stroke */
    color: '#000000',
    weight: 1.0,
    opacity: alfa,
    /* fill */
    fill: true,
    fillColor: coalColors[coal],
    fillOpacity: alfa,
  }
}

function propColorDelta(prop) {
  if (-0.50 > prop) return '#008200';                   /* 0.50 */
  if (-0.50 <= prop && prop < -0.45) return '#168F16';  /* 0.45 */
  if (-0.45 <= prop && prop < -0.40) return '#2C9B2C';  /* 0.40 */
  if (-0.40 <= prop && prop < -0.35) return '#42A842';  /* 0.35 */
  if (-0.35 <= prop && prop < -0.30) return '#58B458';  /* 0.30 */
  if (-0.30 <= prop && prop < -0.25) return '#74C174';  /* 0.25 */
  if (-0.25 <= prop && prop < -0.20) return '#90CD90';  /* 0.20 */
  if (-0.20 <= prop && prop < -0.15) return '#ACDAAC';  /* 0.15 */
  if (-0.15 <= prop && prop < -0.10) return '#C7E6C7';  /* 0.10 */
  if (-0.10 <= prop && prop < -0.05) return '#E3F3E3';  /* 0.05 */
  if (-0.05 <= prop && prop < -0.00) return '#ffffff';  /* 0.00 */
  if (+0.00 < prop && prop <= +0.05) return '#ffffff';  /* 0.00 */
  if (+0.05 < prop && prop <= +0.10) return '#F3E3E3';  /* 0.05 */
  if (+0.10 < prop && prop <= +0.15) return '#E6C7C7';  /* 0.10 */
  if (+0.15 < prop && prop <= +0.20) return '#DAACAC';  /* 0.15 */
  if (+0.20 < prop && prop <= +0.25) return '#CD9090';  /* 0.20 */
  if (+0.25 < prop && prop <= +0.30) return '#C17474';  /* 0.25 */
  if (+0.30 < prop && prop <= +0.35) return '#B45858';  /* 0.30 */
  if (+0.35 < prop && prop <= +0.40) return '#A84242';  /* 0.35 */
  if (+0.40 < prop && prop <= +0.45) return '#9B2C2C';  /* 0.40 */
  if (+0.45 < prop && prop <= +0.50) return '#8F1616';  /* 0.45 */
  if (+0.50 < prop) return '#820000';                   /* 0.50 */
  
  return '#ffffff';
}

function propColor(prop) {
  if (+0.00 < prop && prop <= +0.08) return '#ffffff';  /* 0.00 */
  if (+0.08 < prop && prop <= +0.16) return '#F3E3E3';  /* 0.08 */
  if (+0.16 < prop && prop <= +0.24) return '#E6C7C7';  /* 0.16 */
  if (+0.24 < prop && prop <= +0.32) return '#DAACAC';  /* 0.24 */
  if (+0.32 < prop && prop <= +0.40) return '#CD9090';  /* 0.32 */
  if (+0.40 < prop && prop <= +0.48) return '#C17474';  /* 0.4 */
  if (+0.48 < prop && prop <= +0.56) return '#B45858';  /* 0.48 */
  if (+0.56 < prop && prop <= +0.64) return '#A84242';  /* 0.56 */
  if (+0.64 < prop && prop <= +0.72) return '#9B2C2C';  /* 0.64 */
  if (+0.72 < prop && prop <= +0.80) return '#8F1616';  /* 0.72 */
  if (+0.80 < prop) return '#820000';                   /* 0.8 */
  
  return '#ffffff';
}

function partColor(part) {
  if (0.0 < part && part <= 0.1) return '#FAE6F3';
  if (0.1 < part && part <= 0.2) return '#F5CCE6';
  if (0.2 < part && part <= 0.3) return '#F0B3DA';
  if (0.3 < part && part <= 0.4) return '#EB99CD';
  if (0.4 < part && part <= 0.5) return '#E780C1';
  if (0.5 < part && part <= 0.6) return '#E266B4';
  if (0.6 < part && part <= 0.7) return '#DD4DA8';
  if (0.7 < part && part <= 0.8) return '#D8339B';
  if (0.8 < part && part <= 0.9) return '#D31A8F';
  if (0.9 < part) return '#CE0082';
  return '#ffffff';
}

function cuatroteStyle(feature) {
  var prop = feature.properties['4T Proporción'];
  if (!prop) { return { color: '#000000', weight: 1.0, opacity: alfa,
                        fill: true, fillColor: '#efefef', fillOpacity: alfa } }
  var color = propColor(prop);
  return {
    color: '#000000',
    weight: 1.0,
    opacity: alfa,
    fill: true,
    fillColor: color,
    fillOpacity: alfa,
  }
}

function participacionStyle(feature) {
  var part = feature.properties['Participación %'];
  if (!part) { return { color: '#000000', weight: 1.0, opacity: alfa,
                        fill: true, fillColor: '#efefef', fillOpacity: alfa } }
  var color = partColor(part / 100.0);
  return {
    color: '#000000',
    weight: 1.0,
    opacity: alfa,
    fill: true,
    fillColor: color,
    fillOpacity: alfa,
  }
}

function cuatroteDeltaStyle(feature) {
  var prop = feature.properties['4T Delta'];
  if (!prop) { return { color: '#000000', weight: 1.0, opacity: alfa,
                        fill: true, fillColor: '#efefef', fillOpacity: alfa } }
  var color = propColorDelta(prop);
  return {
    color: '#000000',
    weight: 1.0,
    opacity: alfa,
    fill: true,
    fillColor: color,
    fillOpacity: alfa,
  }
}

function dispatchStyle() {
  switch (tipo) {
    case 'defs': return ganadoresStyle;
    case 'ganadores': return ganadoresStyle;
    case 'part': return participacionStyle;
    case '4tprop': return cuatroteStyle;
    case '4tdelta': return cuatroteDeltaStyle;
    default: return defsStyle;
  }
}

function defsFilter(feature, layer) {
  if (defFilter == 'todos' && delFilter == 'todos') {
    return true;
  } else if (defFilter == 'todos') {
    return Number(delFilter) == feature.properties['Distrito Local'];
  } else if (delFilter == 'todos') {
    return Number(defFilter) == feature.properties['Distrito Federal'];
  } else {
    return (Number(delFilter) == feature.properties['Distrito Local']) &&
           (Number(defFilter) == feature.properties['Distrito Federal']);
  }
}

function dispatchFilter() {
  if (defFilter && delFilter) return defsFilter;
  return function(feature, layer) {
    return true;
  }
}

var coals = {
  1: [{'rep': 'MORENA', 'grupo': ['MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'PT', 'grupo': ['PT']},
      {'rep': 'PVEM', 'grupo': ['PVEM']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
  2: [{'rep': 'PVEM-PT-MORENA', 'grupo': ['PVEM', 'PT', 'MORENA', 'PVEM-PT-MORENA', 'PVEM-PT', 'PVEM-MORENA', 'PT-MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
  3: [{'rep': 'PVEM-PT-MORENA', 'grupo': ['PVEM', 'PT', 'MORENA', 'PVEM-PT-MORENA', 'PVEM-PT', 'PVEM-MORENA', 'PT-MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
  4: [{'rep': 'MORENA', 'grupo': ['MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'PT', 'grupo': ['PT']},
      {'rep': 'PVEM', 'grupo': ['PVEM']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
  5: [{'rep': 'PVEM-PT-MORENA', 'grupo': ['PVEM', 'PT', 'MORENA', 'PVEM-PT-MORENA', 'PVEM-PT', 'PVEM-MORENA', 'PT-MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
  6: [{'rep': 'MORENA', 'grupo': ['MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'PT', 'grupo': ['PT']},
      {'rep': 'PVEM', 'grupo': ['PVEM']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
  7: [{'rep': 'PVEM-PT-MORENA', 'grupo': ['PVEM', 'PT', 'MORENA', 'PVEM-PT-MORENA', 'PVEM-PT', 'PVEM-MORENA', 'PT-MORENA']},
      {'rep': 'PAN-PRI-PRD', 'grupo': ['PAN', 'PRI', 'PRD', 'PAN-PRI-PRD', 'PAN-PRI', 'PAN-PRD', 'PRI-PRD']},
      {'rep': 'MC', 'grupo': ['MC']},
      {'rep': 'PES', 'grupo': ['PES']},
      {'rep': 'FXM', 'grupo': ['FXM']},
      {'rep': 'RSP', 'grupo': ['RSP']},],
}

function coalGroups(props) {
  var df = props['Distrito Federal'];
  var txt = '';
  for (var x of coals[df]) {
    var votos = x['grupo'].reduce(function(acc, val) {
      return acc + props[val];
    }, 0);
    var porc = (100 * votos / props['Total de Votos Calculados']).toFixed(2);
    txt += `
<div class="voto-row" style="border-left: ${coalColors[x['rep']]} solid .5rem">
<img src="/img/dipfed-2021/${x['rep']}.png" />
<strong>${votos.toLocaleString()}</strong>
<span>(${porc}%)</span>
</div>
    `
  }
  return txt;
}

function tableHTML_DEF(props) {
  var tot = props['Total de Votos Calculados'];
  var part = props['Participación %'].toFixed(2);
  var nulos = props['Nulos'];
  var coalicion = props['Coalición Ganadora'];
  var def = props['Distrito Federal'];
  var propietaria = defcoal[def][coalicion][0];
  var suplente = defcoal[def][coalicion][1];
  var txt = `
<h4>Distrito Federal ${def}</h4>
<br />
<div class="info-row">
  <div><strong>Total de votos</strong> <span>${tot.toLocaleString()} (${part}%)</span></div>
</div>
<div class="info-row">
  <div><strong>Votos nulos</strong> <span>${nulos.toLocaleString()}</span></div>
</div>
<br />
<div class="info-row">
  <div><strong>C. Propietaria</strong> <span>${propietaria}</span></div>
  <div><strong>C. Suplente</strong> <span>${suplente}</span></div>
</div>
<div class="votos">
  ${coalGroups(props)}
</div>
  `;
  return txt;
}

function tableHTML(props) {
  var txt =  `
<h4>Sección ${props['Sección']}</h4>
<div class="info-row">
  <div><strong>DEF</strong> <span>${props['Distrito Federal']}</span></div>
  <div><strong>DEL</strong> <span>${props['Distrito Local']}</span></div>
</div>
<div class="info-row">
  <div><strong>Municipio</strong> <span>${props['Nombre Municipio']}</span></div>
  <div><strong>Tipo</strong> <span>${props['Tipo']}</span></div>
</div>
<br />`;
  if (!props['Total de Votos Calculados']) {
    txt += `
<p><strong>No hay información del conteo distrital en esta sección.</strong></p>
    `;
  } else {
    var porc = (100 * props['4T Proporción']).toFixed(2);
    var delt = (props['4T Delta'] < 0 ? '' : '+')+(100 * props['4T Delta']).toFixed(2);
    var part = props['Participación %'].toFixed(2);
    var tot = props['Total de Votos Calculados'];
    var nulos = props['Nulos'];
    var coalicion = props['Coalición Ganadora'];
    var def = props['Distrito Federal'];
    var propietaria = defcoal[def][coalicion][0];
    var suplente = defcoal[def][coalicion][1];
    txt += `
<div class="info-row">
  <div><strong>Total de votos</strong> <span>${tot.toLocaleString()} (${part}%)</span></div>
</div>
<div class="info-row">
  <div><strong>Votos nulos</strong> <span>${nulos.toLocaleString()}</span></div>
</div>
<div class="info-row">
  <div><strong>Porcentaje 4T</strong> <span>${porc}% (${delt}%)</span></div>
</div>
<br />
<div class="info-row">
  <div><strong>C. Propietaria</strong> <span>${propietaria}</span></div>
  <div><strong>C. Suplente</strong> <span>${suplente}</span></div>
</div>
<div class="votos">
  ${coalGroups(props)}
</div>
    `;
  }
  return txt;
}

function undoSelection() {
  if (selectedLayer) {
    selectedLayer.setStyle(dispatchStyle()({ properties: selectedSec }));
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
  }
}

function callbackInstall() {
  return function(feature, layer) {
    layer.on({
      click: function(event) {
        L.DomEvent.stop(event);
        undoSelection();
        selectedSec = feature.properties;
        selectedLayer = layer;
        doSelection();
        var elm = document.getElementById('sec-table');
        if (tipo == 'defs') {
          elm.innerHTML = tableHTML_DEF(selectedSec);
        } else {
          elm.innerHTML = tableHTML(selectedSec);
        }
        sidebar.open('datos');
      },
    });
  }
}

function setupBaseMap() {
  secLayer = L.geoJSON((tipo == 'defs' ? data_defs : data), {
    style: dispatchStyle(),
    filter: dispatchFilter(),
    onEachFeature: callbackInstall(),
  }).addTo(map);
  resetSelection();
}

function flyToFocus() {
  var bounds = secLayer.getBounds();
  if (bounds.isValid()) {
    var offset = document.querySelector('.leaflet-sidebar-content').getBoundingClientRect().width;
    map.flyToBounds(bounds, {paddingTopLeft: [offset,0]});
  }
}

function filtraDEF(event) {
  defFilter = event.target.value;
  setupMap();
  setupBaseMap();
  flyToFocus()
}

function filtraDEL(event) {
  delFilter = event.target.value;
  setupMap();
  setupBaseMap();
  flyToFocus()
}

function filtraTipo(event) {
  tipo = event.target.value;
  if (tipo == 'defs') {
    document.getElementById('del-select').value = 'todos';
    delFilter = 'todos';
    document.getElementById('select-del').style.display = 'none';
  } else {
    document.getElementById('select-del').style.display = 'block';
  }
  setupMap();
  setupBaseMap();
}

function cambiaAlpha(event) {
  alfa = Number(event.target.value)/100.0;
  setupMap();
  setupBaseMap();
}
