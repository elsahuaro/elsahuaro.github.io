class BaseScene extends Phaser.Scene {
  create() {
    this.game.input.touch.capture = false;
    this.back = this.add.image(this.game.config.width/2, this.game.config.height/2, "ine-back").setInteractive();
    this.front = this.add.image(this.game.config.width/2, this.game.config.height/2, "ine-front").setInteractive();
  }
}

class StartScene extends BaseScene {
  constructor() {
    super("start");
  }

  create() {
    super.create();
    this.front.on("pointerover", pointer => {
      this.front.setTint(0xDF2EDB);
      this.back.setTint(0xDF2EDB);
      pointer.event.preventDefault();
    });
    this.front.on("pointerout", pointer => {
      this.front.clearTint();
      this.back.clearTint();
      pointer.event.preventDefault();
    });
    this.front.on("pointerdown", pointer => {
      this.scene.start("draw-vote", {
        correctos: 0
      });
      pointer.event.preventDefault();
    });
  }
}
