class LoadingScene extends Phaser.Scene {
  constructor() {
    super("loading");
    this.loaded = false;
  }
  
  preload() {
    var width = this.game.config.width;
    var height = this.game.config.height;
    
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(445, 270, 320, 50);

    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Cargando...",
      style: {
        font: "20px monospace",
        fill: "#000"
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff"
      }
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", val => {
      percentText.setText(parseInt(val * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xb5261e, 1);
      progressBar.fillRect(455, 280, 300 * val, 30);
    });

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      this.scene.start("welcome");
    });

    
    this.load.image("ine-back", "/img/contar-bien/ine-box-back.png");
    this.load.image("ine-front", "/img/contar-bien/ine-box-front.png");
    this.load.image("tapete", "/img/contar-bien/tapete.png");
    this.load.image("boleta", "/img/contar-bien/boleta.png");
    for (var vote of votes) {
      this.load.image(vote, "/img/contar-bien/voto-" + vote + ".png");
    }
  }
}
