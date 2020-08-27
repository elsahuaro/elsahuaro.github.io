class CategorizeVoteScene extends Phaser.Scene {
  constructor() {
    super("categorize-vote");

    this.boleta_x0 = 85;
    this.boleta_y0 = 250;
    this.boleta_y1 = 50;
    this.boleta_x2 = 0;
    this.boleta_y2 = 0;
    this.boleta_scale0 = 0.15;
    this.boleta_scale2 = 1.0;
    this.boleta_scale3 = 0.125;

    this.tapete = {};
  }

  init(data) {
    this.total = data.total;
    this.vote = data.vote;
    this.conteo = data.conteo;
  }

  create() {
    this.boxlabel = this.add.text(85, this.game.config.height/2+125, "Urna", {
      font: '30px "Libertinus Sans"',
      fill: "black"
    });
    this.addTapete();
    this.totalText = this.add.text(this.game.config.width-140, 20, "total: " + this.total, {
      font: '30px "Libertinus Sans"',
      fill: "black"
    });
    this.back = this.add.image(120, this.game.config.height/2, "ine-back");
    this.back.depth = 0;
    this.front = this.add.image(120, this.game.config.height/2, "ine-front");
    this.front.depth = 2;
    this.boleta = this.addBoleta("boleta");
    this.voteImg = this.addBoleta(this.vote);

    this.tweenBoleta1();
  }

  addBoleta(id) {
    var obj = this.add.image(this.boleta_x0, this.boleta_y0, id);
    obj.setOrigin(0, 0);
    obj.scaleX = this.boleta_scale0;
    obj.scaleY = this.boleta_scale0;
    obj.depth = 1;
    return obj;
  }

  tweenBoleta1() {
    this.tweens.add({
      targets: this.boleta,
      duration: 500,
      ease: 'Quad.easeInOut',
      y: this.boleta_y1,
      onComplete: () => {
        this.boleta.depth = 3;
        this.voteImg.depth = 3;
        this.tweenBoleta2()
      }
    });
    this.tweens.add({
      targets: this.voteImg,
      duration: 500,
      ease: 'Quad.easeInOut',
      y: this.boleta_y1
    });
  }

  tweenBoleta2() {
    this.tweens.add({
      targets: this.boleta,
      duration: 500,
      ease: 'Quad.easeInOut',
      y: this.boleta_y2,
      x: this.boleta_x2,
      scaleX: this.boleta_scale2,
      scaleY: this.boleta_scale2
    });
    this.tweens.add({
      targets: this.voteImg,
      duration: 500,
      ease: 'Quad.easeInOut',
      y: this.boleta_y2,
      x: this.boleta_x2,
      scaleX: this.boleta_scale2,
      scaleY: this.boleta_scale2
    });
  }

  addTapete() {
    var offsetx = 490;
    var offsety = 100;
    this.matlabel = this.add.text(800, 525, "Tapete", {
      font: '30px "Libertinus Sans"',
      fill: "black"
    });
    for (var i = 0; i < votes.length; i++) {
      this.tapete[votes[i]] = this.add.image(0, 0, "tapete");
      this.tapete[votes[i]].setOrigin(0, 0);
      var width = this.tapete[votes[i]].width;
      var height = this.tapete[votes[i]].height;
      var x = offsetx + (i % 7) * width;
      var y = offsety + Math.floor(i / 7) * width;
      this.tapete[votes[i]].x = x;
      this.tapete[votes[i]].y = y;
      var txt = this.add.text(x, y, votes[i].split("-").join("-").toUpperCase(), {
        font: '12px "Libertinus Sans"',
        fill: "black"
      });
      txt.x = x + width/2 - txt.width/2;
      txt.y = y + 10;
      this.tapete[votes[i]].setInteractive();
      this.tapete[votes[i]].on("pointerover", this.voteTintSetter(i));
      this.tapete[votes[i]].on("pointerout", this.voteTintClearer(i));
      this.tapete[votes[i]].on("pointerdown", this.voteCaster(i));
      var val = this.conteo[votes[i]].correct + this.conteo[votes[i]].incorrect;
      var counterTxt = this.add.text(x, y, "" + val, {
        font: '30px "Libertinus Sans"',
        fill: "black"
      });
      counterTxt.x = x + width/2 - counterTxt.width/2;
      counterTxt.y = y + height/2 - counterTxt.height/2 + 10;
    }
  }

  voteTintSetter(i) {
    return (pointer) => {
      this.tapete[votes[i]].setTint(0xDF2EDB);
    };
  }

  voteTintClearer(i) {
    return (pointer) => {
      this.tapete[votes[i]].clearTint();
    };
  }

  voteCaster(i) {
    return (pointer) => {
      this.castVote(votes[i]);
    };
  }

  castVote(vote) {
    if (vote == this.vote) {
      this.conteo[vote].correct = this.conteo[vote].correct + 1;
    } else {
      this.conteo[vote].incorrect = this.conteo[vote].incorrect + 1;
    }
    for (var i = 0; i < votes.length; i++) {
      this.tapete[votes[i]].clearTint();
      this.tapete[votes[i]].off("pointerover");
      this.tapete[votes[i]].off("pointerout");
      this.tapete[votes[i]].off("pointerdown");
    }
    var x = this.tapete[vote].x;
    var y = this.tapete[vote].y;
    this.tweens.add({
      targets: [this.boleta, this.voteImg],
      duration: 500,
      ease: 'Quad.easeInOut',
      x: x,
      y: y,
      scaleX: this.boleta_scale3,
      scaleY: this.boleta_scale3,
      onComplete: () => {
        this.fadeBoleta();
      }
    });
  }

  fadeBoleta() {
    this.tweens.add({
      targets: [this.boleta, this.voteImg],
      duration: 250,
      ease: 'Quad.easeInOut',
      alpha: 0.0,
      onComplete: () => {
        this.scene.start("draw-vote", {
          total: this.total,
          conteo: this.conteo
        });
      }
    });
  }
}
