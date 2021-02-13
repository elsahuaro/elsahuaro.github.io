function selectData() {
  let select = document.getElementById('elec-select');
  let content = document.getElementById('anotar-bien');
  
  if (select.value == 'sonora-2021') {
    sonora2021(content);
  } else if (select.value == 'federal-2018') {
    federales2018(content);
  } else {
    content.innerHTML = `

    `;
  }
}

function federales2018(content) {
  content.innerHTML = `
    <div class="bloque">
      <div class="cabecera">
        <div class="circ">1</div>
        <div class="titinstr">
          <div class="btitulo">RESULTADOS DE LA VOTACIÓN POR PARTIDO</div>
          <div class="instr">(Llenar conforme a lo escrito en letra)</div>
        </div>
      </div>
      <div class="columnas">
        <div class="columna">
          <div class="pill">
            <span>Partido o candidato</span>
            <em>(Cantidad de votos)</em>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/pan.png" />
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/pri.png" />
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/prd.png" />
            <input type="text"></input>
          </div>
        </div>
        <div class="columna">
          <div class="pill">
            <span>Partido o candidato</span>
            <em>(Cantidad de votos)</em>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/pt.png" />
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/pvem.png" />
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/mc.png" />
            <input type="text"></input>
          </div>
        </div>
        <div class="columna">
          <div class="pill">
            <span>Partido o candidato</span>
            <em>(Cantidad de votos)</em>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/na.png" />
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/morena.png" />
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <img src="/img/anotar-bien/pes.png" />
            <input type="text"></input>
          </div>
        </div>
        <div class="columna">
          <div class="pill">
            <span>Candidato independiente</span>
            <em>(Cantidad de votos)</em>
          </div>
          <div class="pvoto">
            <span>Margarita Zavala</span>
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <span>Jaime Rodríguez Calderón</span>
            <input type="text"></input>
          </div>
          <div class="pvoto">
            <span>Candidatos no registrados</span>
            <input type="text"></input>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bloque">
      <div class="cabecera">
        <div class="circ">2</div>
        <div class="titinstr">
          <div class="btitulo">COALICIONES, EN CASO DE ESTAR MARCADOS DOS O MÁS PARTIDOS DE CADA COALICIÓN</div>
          <div class="instr">(Llenar todos los datos, incluso con cero votos)</div>
        </div>
      </div>
      <div class="columnas">
        <div class="columna">
          <div class="coltit">"COALICIÓN PRI-PVEM-PNA"</div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pri.png" />
            <img src="/img/anotar-bien/pvem.png" />
            <img src="/img/anotar-bien/na.png" />
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pri.png" />
            <img src="/img/anotar-bien/na.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pri.png" />
            <img src="/img/anotar-bien/pvem.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pvem.png" />
            <img src="/img/anotar-bien/na.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
        </div>
        <div class="columna">
          <div class="coltit">"COALICIÓN POR MÉXICO AL FRENTE"</div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pan.png" />
            <img src="/img/anotar-bien/prd.png" />
            <img src="/img/anotar-bien/mc.png" />
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pan.png" />
            <img src="/img/anotar-bien/prd.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pan.png" />
            <img src="/img/anotar-bien/mc.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/prd.png" />
            <img src="/img/anotar-bien/mc.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
        </div>
        <div class="columna">
          <div class="coltit">COALICIÓN "JUNTOS HAREMOS HISTORIA"</div>
          <div class="pvotom">
            <img src="/img/anotar-bien/morena.png" />
            <img src="/img/anotar-bien/pt.png" />
            <img src="/img/anotar-bien/pes.png" />
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/morena.png" />
            <img src="/img/anotar-bien/pt.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/morena.png" />
            <img src="/img/anotar-bien/pes.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pt.png" />
            <img src="/img/anotar-bien/pes.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bloque">
      <div class="cabecera">
        <div class="circ">3</div>
        <div class="titinstr">
          <div class="btitulo">VOTOS NULOS</div>
          <input type="text"></input>
        </div>
      </div>
    </div>
    
    <div class="bloque">
      <div class="cabecera" style="margin-bottom: 10px">
        <div class="circ">4</div>
        <div class="titinstr">
          <div class="btitulo">Boletas sobrantes, no usadas en la votación y que fueron inutilizadas por el secretario de la mesa directiva de casilla</div>
        </div>
        <input type="text" style="height: 40px; margin-left: auto" disabled></input>
      </div>
      
      <div class="cabecera">
        <div class="circ">5</div>
        <div class="titinstr">
          <div class="btitulo">Total de ciudadanos que votaron conforme a la lista nominal</div>
        </div>
        <input type="text" style="height: 40px; margin-left: auto" disabled></input>
      </div>
    </div>
  `;
}

function sonora2021(content) {
  content.innerHTML = `
    <div class="bloque">
      <div class="cabecera">
        <div class="circ">1</div>
        <div class="titinstr">
          <div class="btitulo">Resultados de votación</div>
          <div class="instr">Gubernatura</div>
        </div>
      </div>
      <div class="columnas">
        <div class="columna">
          <div class="pill">
            <span>Candidatura común</span>
            <em>(Cantidad de votos)</em>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pan.png" />
            <img src="/img/anotar-bien/pri.png" />
            <img src="/img/anotar-bien/prd.png" />
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/morena.png" />
            <img src="/img/anotar-bien/pt.png" />
            <img src="/img/anotar-bien/pvem.png" />
            <img src="/img/anotar-bien/na-son.png" />
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/mc.png" />
            <div class="dummy"></div>
            <div class="dummy"></div>
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/pes2.png" />
            <div class="dummy"></div>
            <div class="dummy"></div>
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
        </div>
        <div class="columna">
          <div class="pill">
            <span>Candidatura común</span>
            <em>(Cantidad de votos)</em>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/rsp.png" />
            <div class="dummy"></div>
            <div class="dummy"></div>
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <img src="/img/anotar-bien/fpm.png" />
            <div class="dummy"></div>
            <div class="dummy"></div>
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
          <div class="pvotom">
            <span>Candidatos no registrados</span>
            <div class="dummy"></div>
            <div class="dummy"></div>
            <div class="dummy"></div>
            <input type="text"></input>
          </div>
        </div>
      </div>

      <div class="bloque">
        <div class="cabecera">
          <div class="circ">2</div>
          <div class="titinstr">
            <div class="btitulo">VOTOS NULOS</div>
            <input type="text"></input>
          </div>
        </div>
      </div>
  `;
}
