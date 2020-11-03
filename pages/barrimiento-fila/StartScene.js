class StartScene extends Phaser.Scene {
  constructor() {
    super("start");
  }

  create() {
    this.ine = this.add.image(this.game.config.width/2, this.game.config.height/2, "ine").setInteractive();
    this.ine.on("pointerover", pointer => {
      this.ine.setTint(0xDF2EDB);
    });
    this.ine.on("pointerout", pointer => {
      this.ine.clearTint();
    });
    this.ine.on("pointerdown", pointer => {
      this.tweens.add({
        targets: [this.ine],
        duration: 500,
        ease: 'Quad.easeInOut',
        alpha: 0.0,
        onComplete: () => {
          this.scene.start("select-missing");
        }
      });
    });
  }
}
