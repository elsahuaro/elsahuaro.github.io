var miembros = ['p', '1s', '2s', '1e', '2e', '3e',
                'sup1', 'sup2', 'sup3',
                'ciu1', 'ciu2', 'ciu3', 'ciu4', 'ciu5', 'ciu6'];

var offset = 120;

window.onload = function() {
  var config = {
    width: 1210,
    height: 600,
    maxWidth: 1210,
    maxHeight: 600,
    scene: [LoadingScene, StartScene, SelectMissingScene],
    backgroundColor: "#FFFFFF",
    parent: "recorrido-de-cargos",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    }
  };

  var game = new Phaser.Game(config);
}
