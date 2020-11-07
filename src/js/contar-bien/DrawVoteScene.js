class DrawVoteScene extends Phaser.Scene {
  constructor() {
    super("draw-vote");
    this.tapete = {};
  }

  init(data) {
    this.total = data.total;
    this.errores = data.errores;
    this.conteo = data.conteo;
  }

  create() {
    this.boxlabel = this.add.text(85, this.game.config.height/2+125, "Urna", {
      font: '30px "Roboto"',
      fill: "black"
    });
    this.addTapete();
    this.back = this.add.image(120, this.game.config.height/2, "ine-back");
    this.front = this.add.image(120, this.game.config.height/2, "ine-front");
    this.totalText = this.add.text(this.game.config.width-140, 20, "total: " + this.total, {
      font: '30px "Roboto"',
      fill: "black"
    });
    this.erroresText = this.add.text(this.game.config.width-167, 50, "errores: " + this.errores, {
      font: '30px "Roboto"',
      fill: "black"
    });

    if (this.total > 0) {
      this.total -= 1;
      this.scene.start("categorize-vote", {
        total: this.total,
        errores: this.errores,
        vote: nextVote(),
        conteo: this.conteo
      });
    }

    this.totalText.setText("total: " + this.total);
    this.erroresText.setText("errores: " + this.errores);
  }
  
  addTapete() {
    var offsetx = 490;
    var offsety = 100;
    this.matlabel = this.add.text(800, 525, "Tapete", {
      font: '30px "Roboto"',
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
        font: '12px "Roboto"',
        fill: "black"
      });
      txt.x = x + width/2 - txt.width/2;
      txt.y = y + 10;
      var val = this.conteo[votes[i]].correct;
      var counterTxt = this.add.text(x, y, "" + val, {
        font: '30px "Roboto"',
        fill: "black"
      });
      counterTxt.x = x + width/2 - counterTxt.width/2;
      counterTxt.y = y + height/2 - counterTxt.height/2 + 10;
    }
  }
}
