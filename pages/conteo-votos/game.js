var votes = ['pan', 'prd', 'mc', 'pan-prd', 'pan-mc', 'prd-mc', 'pan-prd-mc',
             'pri', 'pvem', 'na', 'pri-pvem', 'pri-na', 'pvem-na', 'pri-pvem-na',
             'pt', 'morena', 'pes', 'pt-morena', 'pt-pes', 'morena-pes', 'pt-morena-pes',
             'mz', 'bronco', 'nulo', 'otro'];

var stack = [].concat(Array(18).fill('pan'))
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
  //return votes[Math.floor(Math.random() * votes.length)];
  var val = stack[stack_idx];
  stack_idx++;
  return val;
}


window.onload = function() {
  var config = {
    width: 1210,
    height: 600,
    scene: [LoadingScene, WelcomeScene, DrawVoteScene, CategorizeVoteScene],
    backgroundColor: "#AABBCC",
    parent: "conteo-votos" 
  };

  shuffle(stack);

  var game = new Phaser.Game(config);
}
