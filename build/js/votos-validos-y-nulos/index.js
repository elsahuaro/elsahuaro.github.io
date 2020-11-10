var votos = ['pan', 'prd', 'mc', 'pan-prd', 'pan-mc', 'prd-mc', 'pan-prd-mc',
             'pri', 'pvem', 'na', 'pri-pvem', 'pri-na', 'pvem-na', 'pri-pvem-na',
             'pt', 'morena', 'pes', 'pt-morena', 'pt-pes', 'morena-pes', 'pt-morena-pes',
             'mz', 'bronco', 'nulo', 'otro'];

var explicaciones = {
  "ref1": "El ciudadano selecciona un recuadro con un símbolo o marca distinta a la \"X\" o \"cruz\", pero se entiende claramente que votó en el recuadro donde aparece el emblema de un partido y no aparece marca en otra parte de la boleta que ponga en duda lo anterior, el voto es válido.",
  "ref2": "Si se observa la palabra \"SI\" aunque no es la forma de \"X\" que tradicionalmente se usa para emitir el voto, siempre y cuando se encuentre dentro del recuadro correspondiente a un partido y mientras no sea injuriosa o difamante, es considerado voto válido.",
  "ref3": "El elector marca un sólo recuadro en donde elige la opción de su preferencia, aunque tiene una mancha, no se trata de las líneas cruzadas o de alguna otra marca que los electores usen para manifestar su voluntad al votar, sino de una mancha de tinta, que puede tener un origen distinto al acto de votar, por lo tanto, este voto es válido.",
  "ref4": "Sí alguna línea invade algún otro recuadro, pero se advierte con claridad que la parte sobresaliente fue accidental por lo que se tomará como válido para el Partido Verde Ecologista de México.",
  "ref5": "El elector tiene la intención de ejercer su voto únicamente a favor del Partido de la Revolución Democrática, ya que la intersección de la \"X\" usada como marca para emitir dicho voto cae al margen superior derecho del recuadro del partido referido y aunque la extensión de la cruz se alarga ligeramente hasta el emblema del Partido Revolucionario Institucional, lo fundamental es que tal intersección se encuentra con mayor proporción en el recuadro en donde se ubica el emblema del Partido de la Revolución Democrática, por lo que es evidente que la intención fue cruzar solo el emblema del Partido de la Revolución Democrática y no del Partido Revolucionario Institucional. \
 \
De ahí que el voto debe considerarse válido a favor del Partido de la Revolución Democrática.",
  "ref6": "Se advierte una cruz sobre el centro del emblema del Partido Verde Ecologista de México y uno de los extremos de dicha cruz se prolonga hasta adentro del recuadro correspondiente al Partido de la Revolución Democrática. A pesar de ello, es evidente que la intención del elector fue la de estampar su voto a favor del Partido Verde Ecologista de México, puesto que la marca, en su gran mayoría, se ostentó dentro del recuadro correspondiente a tal partido y solo un pequeño porcentaje del rasgo se emitió fuera de él. \
 \
De lo anterior, se desprende que el voto debe considerarse válido y computarse a favor del citado instituto político.",
  "ref7": "En esta imagen aparece claramente un recuadro que encierra la casilla correspondiente al Partido de la Revolución Democrática. Por tanto, es posible concluir que debe considerarse válido el voto y computarse a favor de dicho partido.",
  "ref8": "Del análisis de la boleta la sala superior consideró que es evidente la intención del elector de sufragar a favor del Partido de la Revolución Democrática, dado que es el único recuadro en el que se aprecia la marca de una equis \"X\", sin que sea impedimento que en los demás recuadros existan marcas consistentes en tres líneas onduladas, las cuales se advierten como signo negativo o de rechazo a las demás opciones políticas. Por lo anterior, la sala superior determina que en este caso, se debe revocar la determinación de los integrantes de las Mesas Directivas de Casilla, en el sentido de considerar nulo el aludido voto, para efecto de considerarlo válido y se debe computar como un sufragio emitido a favor del Partido de la Revolución Democrática.",
  "ref9": "Si bien es cierto que la boleta presenta dos rayas paralelas en señal de inutilización como boleta sobrante marcada, con tinta negra de bolígrafo, motivo por el cual dicha boleta fue extraída del sobre de boletas sobrantes, también lo es que se encuentra claramente marcado el recuadro que corresponde al emblema del Partido de la Revolución Democrática, lo que muestra la intención del elector de marcar esa opción política, por tanto el voto debe ser considerado válido y computarse a favor del Partido de la Revolución Democrática.",
  "ref10": "Aún y cuando existan dos marcas en la boleta, se desprende claramente la opción política deseada por el elector, pues el hecho de que también se encuentre escrito el nombre de \"Miriam\" en nada hace pensar que su deseo de sufragar sea por una opción distinta a la señalada. \
 \
De lo anterior, se desprende que el voto debe considerarse válido y computarse a favor del Partido Revolucionario Institucional.",
  "ref11": "En la imagen siguiente, se aprecia que en la boleta están marcados los recuadros del Partido de la Revolución Democrática con una \"X\" y el Partido Revolucionario Institucional con una línea, la cual no configura completamente una cruz respecto de la opción antes mencionada, lo cual debe entenderse como una marca sin trascendencia, para el efecto de seleccionar una opción de voto, lo que se deduce como un error en el marcado, toda vez que se advierte que la misma quedó incompleta y por tanto difiere del patrón de marca que fue utilizado para la diversa opción política, lo que se traduce en un voto para el Partido de la Revolución Democrática.",
  "ref12": "La Sala Superior señaló que, si bien se aprecia una línea diagonal sobre otro emblema, se trata de una marca sin trascendencia, pero se advierte que la marca \"X\" tiene una intención clara de votar por otro partido político.",
  "ref13": "La Sala Superior consideró que este voto debe calificarse como válido, ya que con las marcas asentadas se puede interpretar la intención del elector de sufragar a favor del Partido Revolucionario Institucional, ya que en el recuadro correspondiente al primer partido político coloca la palabra \"NO\", lo que constituye un signo inequívoco de que la intención del elector se encamina a otorgar su voto al Partido Revolucionario Institucional.",
  "ref14": "Cuando se encuentra la palabra \"Sí\" o una marca en un recuadro y la palabra \"No\" o un insulto en los demás recuadros, el voto debe considerarse a favor del partido o coalición en la que se haya asentado la palabra o marca positiva. \
 \
Cuando en todos los recuadros se asientan palabras negativas o de descalificación y en una opción se plasmó una palabra afirmativa o de aceptación, se debe tomar como voto válido a favor de este último.",
  "ref15": "La Sala Superior consideró que el elector dejó clara su intención de sufragar por el partido político Nueva Alianza, sin que sea obstáculo para ello que en otro recuadro haya asentado la palabra \"NO\", lo que confirma su rechazo a dicho partido. Este voto es válido para Nueva Alianza.",
  "ref16": "La Sala Superior consideró que de las marcas asentadas se puede interpretar la voluntad del elector de sufragar por un partido político al haber colocado en el recuadro \"SI\", por lo que se considera voto válido a favor de Movimiento Ciudadano.",
  "ref17": "La Sala Superior considera que la intención del elector es la de sufragar a favor del Partido de la Revolución Democrática y que la leyenda que inserta en la parte superior de la boleta es solo una forma de expresión del elector, sin que ello implique la nulidad del voto en razón de que el contexto de la leyenda insertada en la boleta no se contrapone con la intención evidente de votar a favor del instituto político antes mencionado, ya que no existe una palabra de repudio o insulto, sino solo una expresión del elector. En consecuencia, el voto es válido y debe ser considerado a favor del Partido de la Revolución Democrática.",
  "ref18": "El haber cruzado el recuadro de un partido político y, a la vez expresado una opinión en el recuadro destinado a los candidatos no registrados, no implica la nulidad del voto, en virtud de que la intención del elector es de sufragar a favor del candidato del Partido de la Revolución Democrática. \
 \
Por lo tanto, el voto debe considerarse válido y computarse para el citado partido político.",
  "ref19": "Se observa marcado un recuadro y en otro aparece una frase, sinónimo de disgusto, la Sala Superior interpretó que la voluntad del ciudadano fue emitir su sufragio a favor del partido con la marca \"X\" en tanto que fue su deseo evidenciar desagrado por otro partido político. El voto es válido.",
  "ref20": "La Sala Superior señaló que el elector dejó clara su intención del voto, pero en ejercicio de su libertad de expresión anotó una leyenda que alude a otros partidos políticos, en el caso concreto se alude a una frase.",
  "ref21": "En la boleta se advierten marcas tanto en el recuadro destinado al Partido Revolucionario Institucional como en el Partido Verde Ecologista de México, además de la frase, \"ya ganamos\", sin apreciarse otro señalamiento que permita cuestionar la validez del sufragio bajo estudio. \
 \
De lo anterior, se desprende que el voto debe considerarse válido y computarse a favor de la coalición.",
  "ref22": "En la imagen se advierte que si bien la intersección del tache está sobre el emblema del Partido Verde Ecologista de México también es cierto que es evidente que la intención del elector era sufragar a favor de los Partidos Revolucionario Institucional y Verde Ecologista de México, ahora bien, cabe precisar que estos dos institutos políticos mencionados están coaligados en consecuencia, para la Sala Superiorla intención del elector era marcar la variante de coalición de los Partidos Políticos Revolucionario Institucional, Partido Verde Ecologista de México, por lo que la sala superior determina que este voto debe ser considerado como voto a favor de la mencionada variante de coalición.",
  "ref23": "La Sala Superior estimó que, si en una boleta no se marcó ninguno de los recuadros que contienen los emblemas de los partidos políticos o coaliciones, pero en otra parte de la boleta se asienta el nombre del candidato de cualquiera de los partidos contiendientes o candidatos independientes, esto indica la intención del elector de encaminar su voto a favor candidato. Por lo que el voto debe considerarse válido.",
  "ref24": "La Sala Superior estimó que, si en una boleta no se marcó ninguno de los recuadros que contienen los emblemas de los partidos políticos o coaliciones, pero en otra parte de la boleta se asienta el nombre del candidato de cualquiera de los partidos contiendientes o candidatos independientes, esto indica la intención del elector de encaminar su voto a favor candidato. Por lo que el voto debe considerarse válido.",
  "ref25": "La Sala Superior estimó que, si en una boleta no se marcó ninguno de los recuadros que contienen los emblemas de los partidos políticos o coaliciones, pero en otra parte de la boleta se asienta el nombre del candidato de cualquiera de los partidos contiendientes o candidatos independientes, esto indica la intención del elector de encaminar su voto a favor candidato. Por lo que el voto debe considerarse válido.",
  "ref26": "Sí la boleta presenta una rotura o mutilación, de mayor o menor magnitud, pero se logran apreciar completos los recuadros de todos los partidos políticos para garantizar que el elector no marcó otra opción, y la marca puesta en la misma es lo suficientemente clara, el voto se considera válido.",
  "ref27": "Para considerar como voto válido para alguna candidatura independiente, la marca debe estar en un solo recuadro o bien el nombre del candidato siempre y cuando la intención del elector sea clara.",
  "ref28": "La Sala Superior estimó que, si en una boleta no se marcó ninguno de los recuadros que contienen los emblemas de los partidos políticos o coaliciones, pero en otra parte de la boleta se asienta el nombre del candidato de cualquiera de los partidos contiendientes o candidatos independientes, esto indica la intención del elector de encaminar su voto a favor candidato. Por lo que el voto debe considerarse válido.",
  "ref29": "La Sala Superior estimó que son votos nulos, en virtud de que marcaron toda la boleta.",
  "ref30": "Aun cuando esté marcada la boleta a favor de un partido, es claro que el lector manifestó su repudio con una expresión que muestra un insulto o es denotativa y que no expresó su voluntad de sufragar en su favor. Este voto es nulo.",
  "ref31": "Ejemplos de insultos son: ojete, cabrón, idiota, pendejo, puto, ratero, hijo de la chingada o cualquier otra expresión denotativa u ofensiva.",
  "ref32": "La Sala Superior consideró que dicha frase (perdedor) denota, rechazo, baja estimación o descrédito por parte del elector a tales sujetos. Por tanto, aun cuando la boleta tiene una marca (paloma) característica del voto, lo cierto es que no se puede tener la certeza de cuál fue la intención del elector, por lo que dicho votó debe ser nulo.",
  "ref33": "El hecho de que esté cortada la boleta impide conocer la verdadera intención del elector, pues cabe la posibilidad de que el propio elector decidió desechar su voto, y por eso procedió a su destrucción. En esas condiciones, dicho voto debe considerarse nulo y sumarse al rubro correspondiente.",
  "ref34": "La Sala Superior estimó que son votos nulos, en virtud de que marcaron recuadros destinados a partidos políticos que no conformaron coalición.",
  "ref35": "Las dos marcas que contiene la boleta no permiten determinar de manera clara el sentido del sufragio expresado, motivo por el cual se debe considerar como voto nulo.",
  "ref36": "La Sala Superior precisó que: \"...hay dos marcas en relación con el recuadro destinado para los candidatos no registrados, pues contiene un nombre y una línea ascendente, que hace manifiesta la voluntad de sufragar por un candidato no postulado por partido político, por lo que debe sumarse al rubro correspondiente...\"",
  "ref37": "Argumento de la Sala Superior \"... no hay duda que se refiere a Víctor González Torres, pues es un hecho notorio que en el Proceso Electoral Federal 2005-2006 para Presidente de la República, dicha persona se promocionó instando a la ciudadanía a que votaran por él como candidato no registrado, e incluso, haciendo el señalamiento en la propaganda correspondiente, de que su nombre fuera escrito en la boleta dentro del recuadro de candidato no registrado, de ahí que, dichos votos deberán computarse para este rubro...\"",
  /* Voto válido genérico */
  "ref38": "Es Voto Válido aquél en el que el elector haya expresado su intención, marcando un solo recuadro que contenga el emblema de un partido político o candidatura independiente; el que se manifieste anotando un nombre con apellido o apellidos del candidato no registrado en el espacio para tal efecto; o aquel en el que el elector haya marcado más de un recuadro en los que se contienen emblemas de los partidos políticos que integren una coalición.",
  /* Voto nulo genérico */
  "ref39": "Es Voto Nulo aquel expresado por un elector en una boleta depositada en la urna, sin que hubiera marcado ningún cuadro que contenga el emblema de un partido político o candidatura independiente; cuando el elector marque dos o más cuadros sin que exista coalición entre los partidos cuyos emblemas hayan sido marcados; o en su caso, aquél emitido en forma distinta a la señalada como voto válido."
};

var resoluciones = {
  "ref1": "SUP-JIN-81/2006",
  "ref2": "SUP-JIN-81/200",
  "ref3": "SUP-JIN-12/2012 y SUP-JIN-14/2012",
  "ref4": "SUP-JIN-21/2006",
  "ref5": "SUP-JIN-8-2012 y SUP-JIN-136-2012",
  "ref6": "SUP-JIN-136-2012",
  "ref7": "SUP-JIN-196-2012",
  "ref8": "SUP-JIN-11-2012",
  "ref9": "SUP-JIN-205-2012",
  "ref10": "SUP-JIN-21-2012",
  "ref11": "SUP-JIN-61-2012",
  "ref12": "SUP-JIN-216/2012, SUP-JIN-14/2012, SUP-JIN-254/2012, SUP-JIN-95/2012, SUP-JIN-305/2012, SUP-JIN-28/2012",
  "ref13": "SUP-JIN-29- 2012",
  "ref14": "",
  "ref15": "SUP-JIN-45/2006",
  "ref16": "SUP-JIN-45/2006",
  "ref17": "SUP-JIN-11-2012",
  "ref18": "SUP-JIN-12-2012",
  "ref19": "SUP-JIN-74/2006 y SUP-JIN-130/2006 ACUMULADOS",
  "ref20": "SUP-JIN-61/2012, SUP-JIN-69/2012, SUP-JIN-51/2012, SUP-JIN-306/2012",
  "ref21": "SUP-JIN-72-2012",
  "ref22": "SUP-JIN-11-2012",
  "ref23": "SUP-JRC-39/2018",
  "ref24": "SUP-JRC-39/2018",
  "ref25": "SUP-JRC-39/2018",
  "ref26": "SUP-JIN-5/2006, SUP-JIN-6/2006 ACUMULADOS Y SUP-JIN-14/2006",
  "ref27": "",
  "ref28": "SUP-JRC-39/2018",
  "ref29": "SUP-JIN-61-2012",
  "ref30": "SUP-JIN-69/2006",
  "ref31": "",
  "ref32": "SUP-JIN-196-2012",
  "ref33": "SUP-JIN-085/2006",
  "ref34": "SUP-JIN-61-2012",
  "ref35": "SUP-JIN-45/2006",
  "ref36": "SUP-JIN-268/2006",
  "ref37": "SUP-JIN-158/2006, SUP-JIN-165/2006, SUP-JIN-246/2006 y SUP-JIN-284/2006",
  /* Voto válido genérico */
  "ref38": "Fundamento legal: Artículo 288, párrafo 3; artículo 291, párrafo 1, incisos a) y c), y artículo 436, párrafo 1, de la Ley General de Instituciones y Procedimientos Electorales",
  /* Voto nulo genérico */
  "ref39": "Fundamento legal: Artículo 288, párrafo 2, y artículo 291, párrafo 1, inciso b), de la Ley General de Instituciones y Procedimientos Electorales"
};

var stack = [
  {
    "id": "votos-partido_a_01",
    "voto": "pan",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_02",
    "voto": "prd",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_03",
    "voto": "pvem",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_04",
    "voto": "pt",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_05",
    "voto": "mc",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_06",
    "voto": "na",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_07",
    "voto": "morena",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_08",
    "voto": "pes",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_09",
    "voto": "pan",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_10",
    "voto": "pri",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_11",
    "voto": "prd",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_12",
    "voto": "pvem",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_a_13",
    "voto": "pt",
    "ref": "ref1"
  },
  {
    "id": "votos-partido_b_01",
    "voto": "pri",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_b_02",
    "voto": "mc",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_b_03",
    "voto": "na",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_b_04",
    "voto": "morena",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_b_05",
    "voto": "pes",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_b_06",
    "voto": "pan",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_b_07",
    "voto": "pri",
    "ref": "ref2"
  },
  {
    "id": "votos-partido_c_01",
    "voto": "prd",
    "ref": "ref3"
  },
  {
    "id": "votos-partido_c_02",
    "voto": "pri",
    "ref": "ref3"
  },
  {
    "id": "votos-partido_d_01",
    "voto": "pvem",
    "ref": "ref4"
  },
  {
    "id": "votos-partido_d_02",
    "voto": "prd",
    "ref": "ref5"
  },
  {
    "id": "votos-partido_d_03",
    "voto": "pvem",
    "ref": "ref6"
  },
  {
    "id": "votos-partido_e_01",
    "voto": "prd",
    "ref": "ref7"
  },
  {
    "id": "votos-partido_f_01",
    "voto": "prd",
    "ref": "ref8"
  },
  {
    "id": "votos-partido_f_02",
    "voto": "prd",
    "ref": "ref9"
  },
  {
    "id": "votos-partido_f_03",
    "voto": "pri",
    "ref": "ref10"
  },
  {
    "id": "votos-partido_f_04",
    "voto": "prd",
    "ref": "ref11"
  },
  {
    "id": "votos-partido_f_05",
    "voto": "pt",
    "ref": "ref12"
  },
  {
    "id": "votos-partido_f_06",
    "voto": "pt",
    "ref": "ref12"
  },
  {
    "id": "votos-partido_f_07",
    "voto": "pri",
    "ref": "ref13"
  },
  {
    "id": "votos-partido_f_08",
    "voto": "morena",
    "ref": "ref14"
  },
  {
    "id": "votos-partido_f_09",
    "voto": "prd",
    "ref": "ref14"
  },
  {
    "id": "votos-partido_f_10",
    "voto": "na",
    "ref": "ref15"
  },
  {
    "id": "votos-partido_f_11",
    "voto": "mc",
    "ref": "ref16"
  },
  {
    "id": "votos-partido_g_01",
    "voto": "prd",
    "ref": "ref17"
  },
  {
    "id": "votos-partido_g_02",
    "voto": "prd",
    "ref": "ref18"
  },
  {
    "id": "votos-partido_g_03",
    "voto": "pt",
    "ref": "ref19"
  },
  {
    "id": "votos-partido_g_04",
    "voto": "pvem",
    "ref": "ref19"
  },
  {
    "id": "votos-partido_g_05",
    "voto": "prd",
    "ref": "ref20"
  },
  {
    "id": "votos-coalicion_a_01",
    "voto": "pri-pvem-na",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_a_02",
    "voto": "pvem-na",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_a_03",
    "voto": "pri-na",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_a_04",
    "voto": "pri-pvem",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_a_05",
    "voto": "pri-pvem",
    "ref": "ref21"
  },
  {
    "id": "votos-coalicion_a_06",
    "voto": "pri-pvem",
    "ref": "ref22"
  },
  {
    "id": "votos-coalicion_a_07",
    "voto": "pri-pvem-na",
    "ref": "ref23"
  },
  {
    "id": "votos-coalicion_b_01",
    "voto": "pan-prd-mc",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_b_02",
    "voto": "pan-prd-mc",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_b_03",
    "voto": "pan-prd-mc",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_b_04",
    "voto": "pan-prd",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_b_05",
    "voto": "prd-mc",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_b_06",
    "voto": "pan-mc",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_b_07",
    "voto": "pan-prd-mc",
    "ref": "ref24"
  },
  {
    "id": "votos-coalicion_c_01",
    "voto": "pt-morena-pes",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_c_02",
    "voto": "morena-pes",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_c_03",
    "voto": "pt-morena",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_c_04",
    "voto": "pt-pes",
    "ref": "ref38"
  },
  {
    "id": "votos-coalicion_c_05",
    "voto": "pt-morena-pes",
    "ref": "ref25"
  },
  {
    "id": "votos-coalicion_d_01",
    "voto": "pt-morena-pes",
    "ref": "ref26",
    "ruptura": "esquina"
  },
  {
    "id": "votos-coalicion_d_02",
    "voto": "pt-morena",
    "ref": "ref26",
    "ruptura": "esquina"
  },
  {
    "id": "votos-independiente_a_01",
    "voto": "mz",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_02",
    "voto": "bronco",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_03",
    "voto": "mz",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_04",
    "voto": "bronco",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_05",
    "voto": "mz",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_06",
    "voto": "bronco",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_07",
    "voto": "mz",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_08",
    "voto": "bronco",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_09",
    "voto": "bronco",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_10",
    "voto": "mz",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_11",
    "voto": "mz",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_12",
    "voto": "bronco",
    "ref": "ref27"
  },
  {
    "id": "votos-independiente_a_13",
    "voto": "mz",
    "ref": "ref28"
  },
  {
    "id": "votos-independiente_a_14",
    "voto": "bronco",
    "ref": "ref28"
  },
  {
    "id": "votos-nulos_a_01",
    "voto": "nulo",
    "ref": "ref29"
  },
  {
    "id": "votos-nulos_a_02",
    "voto": "nulo",
    "ref": "ref29"
  },
  {
    "id": "votos-nulos_a_03",
    "voto": "nulo",
    "ref": "ref29"
  },
  {
    "id": "votos-nulos_a_04",
    "voto": "nulo",
    "ref": "ref29"
  },
  {
    "id": "votos-nulos_b_01",
    "voto": "nulo",
    "ref": "ref39"
  },
  {
    "id": "votos-nulos_b_02",
    "voto": "nulo",
    "ref": "ref30"
  },
  {
    "id": "votos-nulos_b_03",
    "voto": "nulo",
    "ref": "ref32"
  },
  {
    "id": "votos-nulos_b_04",
    "voto": "nulo",
    "ref": "ref33",
    "ruptura": "total"
  },
  {
    "id": "votos-nulos_c_01",
    "voto": "nulo",
    "ref": "ref34"
  },
  {
    "id": "votos-nulos_c_02",
    "voto": "nulo",
    "ref": "ref34"
  },
  {
    "id": "votos-nulos_c_03",
    "voto": "nulo",
    "ref": "ref34"
  },
  {
    "id": "votos-nulos_c_04",
    "voto": "nulo",
    "ref": "ref34"
  },
  {
    "id": "votos-nulos_c_05",
    "voto": "nulo",
    "ref": "ref34"
  },
  {
    "id": "votos-nulos_c_06",
    "voto": "nulo",
    "ref": "ref34"
  },
  {
    "id": "votos-nulos_c_07",
    "voto": "nulo",
    "ref": "ref35"
  },
  {
    "id": "votos-no-registrados_a_01",
    "voto": "otro",
    "ref": "ref36"
  },
  {
    "id": "votos-no-registrados_a_02",
    "voto": "otro",
    "ref": "ref37"
  },
  {
    "id": "votos-no-registrados_a_03",
    "voto": "otro",
    "ref": "ref38"
  },
  {
    "id": "votos-no-registrados_a_04",
    "voto": "otro",
    "ref": "ref38"
  },
  {
    "id": "votos-no-registrados_a_05",
    "voto": "otro",
    "ref": "ref38"
  },
  {
    "id": "votos-no-registrados_a_06",
    "voto": "otro",
    "ref": "ref38"
  },
  {
    "id": "votos-no-registrados_a_07",
    "voto": "otro",
    "ref": "ref38"
  },
  {
    "id": "votos-no-registrados_a_08",
    "voto": "otro",
    "ref": "ref38"
  }
];

var stack_idx = 0;
var availableVotes;

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var nextVote = function() {
  var val = stack[stack_idx];
  stack_idx++;
  if (stack_idx >= stack.length) {
    availableVotes = false;
  }
  return val;
}

window.onload = function() {
  var config = {
    width: 1210,
    height: 600,
    maxWidth: 1210,
    maxHeight: 600,
    scene: [LoadingScene, StartScene, DrawVoteScene, CategorizeCaseScene],
    backgroundColor: "#FFFFFF",
    parent: "votos-validos-y-nulos",
    scale: {
      mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    }
  };

  shuffle(stack);
  if (stack_idx < stack.length) {
    availableVotes = true;
  }

  var game = new Phaser.Game(config);
}
