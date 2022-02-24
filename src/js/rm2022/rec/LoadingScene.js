class LoadingScene extends Phaser.Scene {
  constructor() {
    super("loading");
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
      progressBar.fillStyle(0xff0000, 2);
      progressBar.fillRect(455, 280, 300 * val, 30);
    });

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      this.scene.start("select-missing");
    });

    this.load.image("recorrerBtn", "/img/rm2022/rec/recorrer.png");
    this.load.image("reiniciarBtn", "/img/rm2022/rec/reiniciar.png");
    for (var m of miembros) {
      this.load.image(m, "/img/rm2022/rec/" + m + ".png");
    }
  }

  create() {
    this.dvl = this.add.image(this.game.config.width/2, this.game.config.height/2, "dvl").setInteractive();
  }
}
