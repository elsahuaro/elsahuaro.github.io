pagetitle: Ubica tu sección
title: Ubica tu sección
css_includes: /electoral/lib/leaflet/leaflet.css
css_includes: seccion.css
js_includes: /electoral/lib/leaflet/leaflet.js
js_includes: seccion.js

<form method="GET" action="" id="form-sec" class="inputs" onsubmit="ubicaSeccion(event, this)">
    <label for="Sección">Ingresa la sección que deseas ubicar:</label>
    <input name="Sección" id="Sección" type="text" width=4 placeholder="Sección" />
    <input type="submit" value="Ubica la sección">
</form>

<div id="resultado">
  <div class="renglon">
    <span class="etiqueta">Distrito Electoral Local:</span> <span id="del" class="distrito">IX</span>
  </div>
  <div class="renglon">
    <span class="etiqueta">Distrito Electoral Federal:</span> <span id="def" class="distrito">3</span>
  </div>
  <div id="secmap"></div>
</div>

<div id="error">No existe la sección 123.</div>
