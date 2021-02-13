var votes_son = ['son-prian', 'son-4t', 'son-mc', 'son-pes', 'son-rsp', 'son-fpm', 'son-nulo', 'son-otro'];

var partidos_txt_son = {
  'son-prian': 'PRI, PAN, PRD',
  'son-4t': 'Morena, PT, PVEM, NA Sonora',
  'son-mc': 'Movimiento Ciudadano',
  'son-pes': 'PES',
  'son-rsp': 'RSP',
  'son-fpm': 'Fuerza por México',
  'son-nulo': 'Nulo',
  'son-otro': 'Otro'
};

var candidaturas_txt_son = {
  'son-prian': 'Ernesto Gándara',
  'son-4t': 'Alfonso Durazo',
  'son-mc': 'Ricardo Bours',
  'son-pes': '',
  'son-rsp': '',
  'son-fpm': '',
  'son-nulo': '',
  'son-otro': 'Candidato/a sin registro'
};

var stack_son = [
  /* 4T */
  'sonora-a-02', 'sonora-a-03', 'sonora-a-04', 'sonora-a-05', 'sonora-a-06', 'sonora-a-07', 'sonora-a-08',
  'sonora-a-09', 'sonora-a-10', 'sonora-a-11', 'sonora-a-12', 'sonora-a-13', 'sonora-a-14', 'sonora-a-15',
  'sonora-a-16', 'sonora-a-17', 'sonora-a-18', 'sonora-a-19', 'sonora-a-20', 'sonora-a-21', 'sonora-a-22',
  /* PRIAN */
  'sonora-a-24', 'sonora-a-25', 'sonora-a-26', 'sonora-a-27', 'sonora-a-28', 'sonora-a-29', 'sonora-a-30',
  'sonora-a-31', 'sonora-a-32', 'sonora-a-33', 'sonora-a-34', 'sonora-a-35', 'sonora-a-36',
  /* MC */
  'sonora-b-02', 'sonora-b-03', 'sonora-b-04', 'sonora-b-05', 'sonora-b-06',
  /* PES */
  'sonora-b-08', 'sonora-b-09',
  /* RSP */
  'sonora-b-11', 'sonora-b-12', 'sonora-b-13',
  /* FPM */
  'sonora-b-15', 'sonora-b-16',
  /* Nulo */
  'sonora-b-18', 'sonora-b-19',
  /* Otro */
  'sonora-b-21', 'sonora-b-22'
];

var stack_vote_son = {
  'sonora-a-02': 'son-4t',
  'sonora-a-03': 'son-4t',
  'sonora-a-04': 'son-4t',
  'sonora-a-05': 'son-4t',
  'sonora-a-06': 'son-4t',
  'sonora-a-07': 'son-4t',
  'sonora-a-08': 'son-4t',
  'sonora-a-09': 'son-4t',
  'sonora-a-10': 'son-4t',
  'sonora-a-11': 'son-4t',
  'sonora-a-12': 'son-4t',
  'sonora-a-13': 'son-4t',
  'sonora-a-14': 'son-4t',
  'sonora-a-15': 'son-4t',
  'sonora-a-16': 'son-4t',
  'sonora-a-17': 'son-4t',
  'sonora-a-18': 'son-4t',
  'sonora-a-19': 'son-4t',
  'sonora-a-20': 'son-4t',
  'sonora-a-21': 'son-4t',
  'sonora-a-22': 'son-4t',

  'sonora-a-24': 'son-prian',
  'sonora-a-25': 'son-prian',
  'sonora-a-26': 'son-prian',
  'sonora-a-27': 'son-prian',
  'sonora-a-28': 'son-prian',
  'sonora-a-29': 'son-prian',
  'sonora-a-30': 'son-prian',
  'sonora-a-31': 'son-prian',
  'sonora-a-32': 'son-prian',
  'sonora-a-33': 'son-prian',
  'sonora-a-34': 'son-prian',
  'sonora-a-35': 'son-prian',
  'sonora-a-36': 'son-prian',

  'sonora-b-02': 'son-mc',
  'sonora-b-03': 'son-mc',
  'sonora-b-04': 'son-mc',
  'sonora-b-05': 'son-mc',
  'sonora-b-06': 'son-mc',
  
  'sonora-b-08': 'son-pes',
  'sonora-b-09': 'son-pes',
  
  'sonora-b-11': 'son-rsp',
  'sonora-b-12': 'son-rsp',
  'sonora-b-13': 'son-rsp',
  
  'sonora-b-15': 'son-fpm',
  'sonora-b-16': 'son-fpm',
  
  'sonora-b-18': 'son-nulo',
  'sonora-b-19': 'son-nulo',
  
  'sonora-b-21': 'son-otro',
  'sonora-b-22': 'son-otro'
};

var votes_fed = ['pan', 'prd', 'mc', 'pan-prd', 'pan-mc', 'prd-mc', 'pan-prd-mc',
                 'pri', 'pvem', 'na', 'pri-pvem', 'pri-na', 'pvem-na', 'pri-pvem-na',
                 'pt', 'morena', 'pes', 'pt-morena', 'pt-pes', 'morena-pes', 'pt-morena-pes',
                 'zavala', 'bronco', 'nulo', 'otro'];

var stack_fed = [].concat(Array(18).fill('pan'))
                  .concat(Array(14).fill('pri'))
                  .concat(Array(2).fill('prd'))
                  .concat(Array(2).fill('pvem'))
                  .concat(Array(5).fill('pt'))
                  .concat(Array(1).fill('mc'))
                  .concat(Array(44).fill('morena'))
                  .concat(Array(2).fill('pes'))
                  .concat(Array(1).fill('na'))
                  .concat(Array(1).fill('pt-morena'))
                  .concat(Array(2).fill('pt-morena-pes'))
                  .concat(Array(5).fill('bronco'))
                  .concat(Array(3).fill('nulo'));

var stack_idx = 0;

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
  return val;
}

var game;
var votes = [];
var stack = [];
var alt_elec = false;

function selectData() {
  let select = document.getElementById('elec-select');
  if (game) {
    game.destroy(true, false);
  }
  if (select.value == 'sonora-2021') {
    sonora2021();
  } else if (select.value == 'federal-2018') {
    federales2018();
  }
}

function federales2018() {
  votes = votes_fed;
  stack = stack_fed;
  alt_elec = false;
  
  var config = {
    width: 1210,
    height: 600,
    maxWidth: 1210,
    maxHeight: 600,
    scene: [LoadingScene, WelcomeScene, DrawVoteScene, CategorizeVoteScene],
    backgroundColor: "#FFFFFF",
    parent: "contar-bien",
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

  shuffle(stack);

  game = new Phaser.Game(config);
}

function sonora2021() {
  votes = votes_son;
  stack = stack_son;
  alt_elec = true;

  var config = {
    width: 1210,
    height: 600,
    maxWidth: 1210,
    maxHeight: 600,
    scene: [LoadingScene, WelcomeScene, DrawVoteScene, CategorizeVoteScene],
    backgroundColor: "#FFFFFF",
    parent: "contar-bien",
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

  shuffle(stack);

  game = new Phaser.Game(config);
}
