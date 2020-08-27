class LoadingScene extends Phaser.Scene {
  constructor() {
    super("loading");
    this.loaded = false;
  }
  
  preload() {
    this.load.image("ine-back", "./assets/ine-box-back.png");
    this.load.image("ine-front", "./assets/ine-box-front.png");
    this.load.image("tapete", "./assets/tapete.png");
    this.load.image("boleta", "./assets/boleta.png");
    for (var vote of votes) {
      this.load.image(vote, "./assets/voto-" + vote + ".png");
    }
    this.load.on("progress", this.onLoadProgress, this);
    this.load.on("complete", this.onLoadComplete, this);
  }

  onLoadProgress(progress) {
    console.log(`${Math.round(progress * 100)}%`);
  }
  onLoadComplete(loader, totalComplete, totalFailed) {
    console.log("Loading complete");
    this.loaded = true;
  }

  update() {
    if (this.loaded) {
      this.scene.start("welcome");
    }
  }
}
