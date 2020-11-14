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
    progressBox.fillRect((width/2)-(320/2), height/2-30, 320, 50);

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
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(455, 280, 300 * val, 30);
    });

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      this.scene.start("mapa");
    });

    for (let i = 1; i <= 7; i++) {
      this.load.image("def"+i, "/img/distribucion-distrital/def"+i+".png");
    }
  }

  create() {
    this.defs = [
      this.add.image(0, 0, "def1").setOrigin(0, 0),
      this.add.image(0, 0, "def2").setOrigin(0, 0),
      this.add.image(0, 0, "def3").setOrigin(0, 0),
      this.add.image(0, 0, "def4").setOrigin(0, 0),
      this.add.image(0, 0, "def5").setOrigin(0, 0),
      this.add.image(0, 0, "def6").setOrigin(0, 0),
      this.add.image(0, 0, "def7").setOrigin(0, 0)
    ];
  }
}
