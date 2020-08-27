class WelcomeScene extends Phaser.Scene {
  constructor() {
    super("welcome");

    this.conteo = {};
    this.tapete = {};
    this.votesTxt = {};
    this.countersTxt = {};
    for (var vote of votes) {
      this.conteo[vote] = { correct: 0, incorrect: 0 };
    }
  }
  
  create() {
    this.addTapete();

    this.boxlabel = this.add.text(this.game.config.width/2-35, this.game.config.height/2+125, "Urna", {
      font: '30px "Libertinus Sans"',
      fill: "black"
    });
    
    this.back = this.add.image(this.game.config.width/2, this.game.config.height/2, "ine-back").setInteractive();
    this.front = this.add.image(this.game.config.width/2, this.game.config.height/2, "ine-front").setInteractive();
    
    this.title = this.add.text(0, 20, "Conteo de votos", {
      font: '50px "Libertinus Sans"',
      fill: "black"
    });
    this.title.x = this.game.config.width/2 - this.title.width/2;

    /* Hover */
    this.front.on("pointerover", (pointer) => {
      this.front.setTint(0xDF2EDB);
      this.back.setTint(0xDF2EDB);
    });
    
    this.front.on("pointerout", (pointer) => {
      this.front.clearTint();
      this.back.clearTint();
    });

    this.front.on("pointerdown", (pointer) => {
      this.tweens.add({
        targets: this.boxlabel,
        duration: 750,
        ease: 'Quad.easeInOut',
        x: 85
      });
      this.tweens.add({
        targets: [this.back, this.front],
        duration: 750,
        ease: 'Quad.easeInOut',
        x: 120,
        onComplete: () => {
          this.scene.start("draw-vote", {
            total: stack.length,
            conteo: this.conteo
          });
        }
      });
      this.tweens.add({
        targets: Object.values(this.tapete)
                       .concat(Object.values(this.votesTxt))
                       .concat(Object.values(this.countersTxt))
                       .concat([this.matlabel]),
        duration: 750,
        ease: 'Quad.easeInOut',
        alpha: 1.0
      });
    });
  }

  addTapete() {
    var offsetx = 490;
    var offsety = 100;
    this.matlabel = this.add.text(800, 525, "Tapete", {
      font: '30px "Libertinus Sans"',
      fill: "black"
    });
    this.matlabel.alpha = 0.0;
    for (var i = 0; i < votes.length; i++) {
      this.tapete[votes[i]] = this.add.image(0, 0, "tapete");
      this.tapete[votes[i]].setOrigin(0, 0);
      var width = this.tapete[votes[i]].width;
      var height = this.tapete[votes[i]].height;
      var x = offsetx + (i % 7) * width;
      var y = offsety + Math.floor(i / 7) * width;
      this.tapete[votes[i]].x = x;
      this.tapete[votes[i]].y = y;
      this.tapete[votes[i]].alpha = 0.0;
      this.votesTxt[votes[i]] = this.add.text(x, y, votes[i].split("-").join("-").toUpperCase(), {
        font: '12px "Libertinus Sans"',
        fill: "black"
      });
      this.votesTxt[votes[i]].x = x + width/2 - this.votesTxt[votes[i]].width/2;
      this.votesTxt[votes[i]].y = y + 10;
      this.votesTxt[votes[i]].alpha = 0.0;
      var val = this.conteo[votes[i]].correct + this.conteo[votes[i]].incorrect;
      this.countersTxt[votes[i]] = this.add.text(x, y, "" + val, {
        font: '30px "Libertinus Sans"',
        fill: "black"
      });
      this.countersTxt[votes[i]].x = x + width/2 - this.countersTxt[votes[i]].width/2;
      this.countersTxt[votes[i]].y = y + height/2 - this.countersTxt[votes[i]].height/2 + 10;
      this.countersTxt[votes[i]].alpha = 0.0;
    }
  }
}
