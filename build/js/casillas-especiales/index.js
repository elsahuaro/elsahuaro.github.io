"use strict";function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var map=!1,estados=["No existe","Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Ciudad de M\xE9xico","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","M\xE9xico","Michoac\xE1n","Morelos","Nayarit","Nuevo Le\xF3n","Oaxaca","Puebla","Quer\xE9taro","Quintana Roo","San Luis Potos\xED","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucat\xE1n","Zacatecas"],circunscripcion=[2,3,8,10,14,18,25],ce_data=[{id:1,sec:295,mun:"Caborca",id_mun:46,id_man:80,lat:30.724,long:-112.15808,def:1,del:3,del_rom:"III"},{id:2,sec:636,mun:"Pto. Pen\u0303asco",id_mun:53,id_man:53,lat:31.32937,long:-113.53112,def:1,del:2,del_rom:"II"},{id:3,sec:652,mun:"SLRC",id_mun:55,id_man:61,lat:32.48568,long:-114.78963,def:1,del:1,del_rom:"I"},{id:4,sec:1328,mun:"Gral. P. Eli\u0301as C.",id_mun:70,id_man:3,lat:31.86284,long:-112.84904,def:1,del:3,del_rom:"III"},{id:5,sec:14,mun:"Agua Prieta",id_mun:2,id_man:1,lat:31.31927,long:-109.55768,def:2,del:7,del_rom:"VII"},{id:6,sec:26,mun:"Agua Prieta",id_mun:2,id_man:1,lat:31.30909,long:-109.56299,def:2,del:7,del_rom:"VII"},{id:7,sec:145,mun:"Naco",id_mun:27,id_man:58,lat:31.32116,long:-109.94821,def:2,del:7,del_rom:"VII"},{id:8,sec:171,mun:"Nogales",id_mun:30,id_man:1,lat:31.32819,long:-110.96456,def:2,del:5,del_rom:"V"},{id:9,sec:171,mun:"Nogales",id_mun:30,id_man:1,lat:31.32819,long:-110.96444,def:2,del:5,del_rom:"V"},{id:10,sec:223,mun:"Nogales",id_mun:30,id_man:6,lat:31.27953,long:-110.94086,def:2,del:4,del_rom:"IV"},{id:11,sec:590,mun:"Hermosillo",id_mun:49,id_man:59,lat:29.08971,long:-111.05211,def:3,del:11,del_rom:"XI"},{id:12,sec:590,mun:"Hermosillo",id_mun:49,id_man:59,lat:29.09001,long:-111.05154,def:3,del:11,del_rom:"XI"},{id:13,sec:1013,mun:"Empalme",id_mun:60,id_man:14,lat:27.95231,long:-110.8136,def:4,del:14,del_rom:"XIV"},{id:14,sec:1047,mun:"Guaymas",id_mun:61,id_man:33,lat:27.92487,long:-110.9088,def:4,del:13,del_rom:"XIII"},{id:15,sec:1048,mun:"Guaymas",id_mun:61,id_man:13,lat:27.92142,long:-110.89783,def:4,del:13,del_rom:"XIII"},{id:16,sec:439,mun:"Hermosillo",id_mun:49,id_man:99,lat:29.09774,long:-110.93122,def:5,del:12,del_rom:"XII"},{id:17,sec:439,mun:"Hermosillo",id_mun:49,id_man:99,lat:29.09761,long:-110.93137,def:5,del:12,del_rom:"XII"},{id:18,sec:510,mun:"Hermosillo",id_mun:49,id_man:32,lat:29.07822,long:-110.93001,def:5,del:12,del_rom:"XII"},{id:19,sec:510,mun:"Hermosillo",id_mun:49,id_man:32,lat:29.07837,long:-110.92949,def:5,del:12,del_rom:"XII"},{id:20,sec:777,mun:"Cajeme",id_mun:59,id_man:104,lat:27.51457,long:-109.93294,def:6,del:16,del_rom:"XVI"},{id:21,sec:806,mun:"Cajeme",id_mun:59,id_man:34,lat:27.49625,long:-109.96133,def:6,del:17,del_rom:"XVII"},{id:22,sec:844,mun:"Cajeme",id_mun:59,id_man:24,lat:27.48142,long:-109.94664,def:6,del:16,del_rom:"XVI"},{id:23,sec:1198,mun:"Huatabampo",id_mun:64,id_man:74,lat:26.8225,long:-109.63495,def:7,del:21,del_rom:"XXI"},{id:24,sec:1234,mun:"Navojoa",id_mun:65,id_man:61,lat:27.08128,long:-109.44619,def:7,del:19,del_rom:"XIX"},{id:25,sec:1248,mun:"Navojoa",id_mun:65,id_man:25,lat:27.0785,long:-109.44227,def:7,del:19,del_rom:"XIX"}],initMap=function(a){map=L.map("map").setView([29.5026,-112],a),L.tileLayer.wms("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"}).addTo(map);var b,c=_createForOfIteratorHelper(ce_data);try{for(c.s();!(b=c.n()).done;){var d=b.value;L.marker([d.lat,d.long]).addTo(map).bindPopup(d.mun+" secci\xF3n "+d.sec+"<br><br><button class=\"sm-button\" onclick=\"elegirCE("+d.id+")\">Seleccionar</button>")}}catch(a){c.e(a)}finally{c.f()}document.getElementById("el-estado").addEventListener("input",cambioEstadoCB)},cambioEstadoCB=function(a){cambioEstado(a.srcElement.value)},claveEstado=!1,cambioEstado=function(a){var b=document.getElementById("estado-nombre");if(""==a)return b.innerText="Sonora",void(claveEstado=26);var c=parseInt(a);c?1<=c&&c<estados.length?(b.innerText=estados[c],claveEstado=c):(b.innerText=estados[0],claveEstado=!1):(b.innerText=estados[0],claveEstado=!1)},ceData=!1,actualizarCE=function(a){var b=document.getElementById("ce-info");b.style.display="none";var c,d=!1,e=_createForOfIteratorHelper(ce_data);try{for(e.s();!(c=e.n()).done;){var f=c.value;if(f.id==a){d=f;break}}}catch(a){e.e(a)}finally{e.f()}d&&(map.fitBounds(L.latLngBounds([L.latLng(d.lat,d.long)])),document.getElementById("ce-del").innerText=d.del_rom,document.getElementById("ce-def").innerText=d.def,document.getElementById("ce-mun").innerText=d.mun,document.getElementById("ce-sec").innerText=d.sec,b.style.display="flex",document.getElementById("pv-info").style.display="none",document.getElementById("secerr").style.display="none",document.getElementById("circerr").style.display="none",document.getElementById("mismaerr").style.display="none",ceData=d,document.getElementById("elector").scrollIntoView(!0))},elegirCE=function(a){actualizarUrl(a),actualizarCE(a)};function revisarUrl(){var a=new URLSearchParams(window.location.search),b=a.get("id");return parseInt(b)}function actualizarUrl(a){if(history.pushState){var b=new URLSearchParams(window.location.search);b.set("id",a);var c=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+b.toString();window.history.pushState({path:c},"",c)}else{var d=new URLSearchParams(window.location.search);d.set("id",a),window.location.search=d.toString()}}var puedeVotar=function(){document.getElementById("secerr").style.display="none",document.getElementById("circerr").style.display="none",document.getElementById("mismaerr").style.display="none";var a=document.getElementById("pv-info"),b=parseInt(document.getElementById("la-secc").value);if(!claveEstado||!b)return void(a.style.display="none");puedeVotarLimpio(),a.style.display="flex",document.getElementById("puede-votar").scrollIntoView(!0);var c=claveEstado;26==c?fetch("/data/identidad-electoral/"+b+".json").then(function(a){return a.json()}).then(function(c){var d=c.properties.DEL,e=c.properties.DEF,f=c.properties["Municipio ID"];/*
           El algoritmo es válido cuando el estado tiene una sola
           circunscripcion local.
         */if(b==ceData.sec)return puedeVotarLimpio(),a.style.display="none",void(document.getElementById("mismaerr").style.display="flex");siGubernatura();f==ceData.id_mun?siAyun():noAyun(),d==ceData.del?siDipLoc():siDipLocRP(),e==ceData.def?siDipFed():siDipFedRP()}).catch(function(){puedeVotarLimpio(),a.style.display="none",document.getElementById("secerr").style.display="flex"}):circunscripcion.includes(c)?(noGubernatura(),noDipLoc(),noAyun(),siDipFedRP()):(puedeVotarLimpio(),a.style.display="none",document.getElementById("circerr").style.display="flex")},noCol="red",siCol="green",siGubernatura=function(){var a=document.getElementById("vota-puede-gub");a.innerText="SI",a.style.color=siCol,a=document.getElementById("cajon-gub-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral del estado de Sonora."},noGubernatura=function(){var a=document.getElementById("vota-puede-gub");a.innerText="NO",a.style.color=noCol,a=document.getElementById("cajon-gub-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral fuera del estado de Sonora."},siDipLoc=function(){var a=document.getElementById("vota-puede-dip-loc");a.innerText="SI",a.style.color=siCol,a=document.getElementById("dip-loc-tipo"),a.innerText="",a=document.getElementById("cajon-dip-loc-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral dentro del distrito electoral local de la casilla especial."},siDipLocRP=function(){var a=document.getElementById("vota-puede-dip-loc");a.innerText="SI",a.style.color=siCol,a=document.getElementById("dip-loc-tipo"),a.innerText="Representaci\xF3n Proporcional",a=document.getElementById("cajon-dip-loc-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral fuera del distrito electoral local de la casilla especial, pero dentro del estado de Sonora."},noDipLoc=function(){var a=document.getElementById("vota-puede-dip-loc");a.innerText="NO",a.style.color=noCol,a=document.getElementById("dip-loc-tipo"),a.innerText="",a=document.getElementById("cajon-dip-loc-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral fuera del estado de Sonora."},siAyun=function(){var a=document.getElementById("vota-puede-ayun");a.innerText="SI",a.style.color=siCol,a=document.getElementById("cajon-ayun-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral dentro del municipio de la casilla especial."},noAyun=function(){var a=document.getElementById("vota-puede-ayun");a.innerText="NO",a.style.color=noCol,a=document.getElementById("cajon-ayun-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral fuera del municipio de la casilla especial."},noDipFed=function(){var a=document.getElementById("vota-puede-dip-fed");a.innerText="NO",a.style.color=noCol,a=document.getElementById("dip-fed-tipo"),a.innerText="",a=document.getElementById("cajon-dip-fed-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral fuera de la Circunscripci\xF3n 1."},siDipFed=function(){var a=document.getElementById("vota-puede-dip-fed");a.innerText="SI",a.style.color=siCol,a=document.getElementById("dip-fed-tipo"),a.innerText="",a=document.getElementById("cajon-dip-fed-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral dentro del distrito electoral federal de la casilla especial."},siDipFedRP=function(){var a=document.getElementById("vota-puede-dip-fed");a.innerText="SI",a.style.color=siCol,a=document.getElementById("dip-fed-tipo"),a.innerText="Representaci\xF3n Proporcional",a=document.getElementById("cajon-dip-fed-inner"),a.innerText="La credencial del elector corresponde a una secci\xF3n electoral fuera del estado de Sonora, pero dentro de la Circunscripci\xF3n 1."},puedeVotarLimpio=function(){document.getElementById("vota-puede-gub").innerText="",document.getElementById("vota-puede-dip-loc").innerText="",document.getElementById("dip-loc-tipo").innerText="",document.getElementById("vota-puede-ayun").innerText="",document.getElementById("vota-puede-dip-fed").innerText="",document.getElementById("dip-fed-tipo").innerText=""},toggleCajon=function(a){var b=document.getElementById(a);b&&("0px"==b.style["max-height"]?b.style["max-height"]="100vh":b.style["max-height"]="0px")};window.addEventListener("load",function(){var a=6;window.matchMedia("all and (min-width:1366px)").matches&&(a=7),initMap(a);var b=revisarUrl();b&&actualizarCE(b),cambioEstado(document.getElementById("el-estado").value)});
