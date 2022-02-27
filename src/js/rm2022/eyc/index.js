var stack = [
  {nombre: 'boleta-no-00', sentido: 'no'},
  {nombre: 'boleta-no-01', sentido: 'no'},
  {nombre: 'boleta-no-02', sentido: 'no'},
  {nombre: 'boleta-no-03', sentido: 'no'},
  {nombre: 'boleta-no-04', sentido: 'no'},
  {nombre: 'boleta-no-05', sentido: 'no'},
  {nombre: 'boleta-no-06', sentido: 'no'},
  {nombre: 'boleta-no-07', sentido: 'no'},
  {nombre: 'boleta-no-08', sentido: 'no'},
  {nombre: 'boleta-no-09', sentido: 'no'},
  {nombre: 'boleta-no-10', sentido: 'no'},
  {nombre: 'boleta-no-11', sentido: 'no'},
  {nombre: 'boleta-nulo-00', sentido: 'nulo'},
  {nombre: 'boleta-nulo-01', sentido: 'nulo'},
  {nombre: 'boleta-nulo-02', sentido: 'nulo'},
  {nombre: 'boleta-nulo-03', sentido: 'nulo'},
  {nombre: 'boleta-nulo-04', sentido: 'nulo'},
  {nombre: 'boleta-nulo-05', sentido: 'nulo'},
  {nombre: 'boleta-nulo-06', sentido: 'nulo'},
  {nombre: 'boleta-si-00', sentido: 'si'},
  {nombre: 'boleta-si-01', sentido: 'si'},
  {nombre: 'boleta-si-02', sentido: 'si'},
  {nombre: 'boleta-si-03', sentido: 'si'},
  {nombre: 'boleta-si-04', sentido: 'si'},
  {nombre: 'boleta-si-05', sentido: 'si'},
];

function cuenta(sentido) {
  var x = 0;
  for (let voto of stack) {
    if (voto.sentido == sentido) {
      x++;
    }
  }
  return x;
}

var curr = 0;
function init_stack() {
  curr = 0;
  for (let i = stack.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = stack[i];
    stack[i] = stack[j];
    stack[j] = temp;
  }
}
function stack_empty() {
  return curr == stack.length;
}
function pop_stack() {
  const v = stack[curr];
  curr++;
  return v;
}


var gw;
var gh;
const hdr = { font: '35px "Roboto Slab"', fill: 'black' };
const hdr2 = { font: '27px "Roboto Slab"', fill: 'black' };
const par = { font: '20px "Roboto"', fill: 'black' };
var swait = 500;
var lwait = 1500;
const voto_y0 = 100;
const voto_y1 = 25;
const voto_y2 = 150;
const voto_s0 = 0.09;
const voto_s1 = 0.09;
const voto_s2 = 0.57;
const voto_s3 = 0.125;
const vtint = 0xDF2EDB;
const rec_col = 0xAAAAAA;
const rec_err_col = 0xCE455F;
const rec_ok_col = 0x4DCE45;
const rec_ope_col = 0x4572CE;
const rec_alpha = 0.5;

function fastForward() {
  swait = 0; lwait = 0;
}

function normalSpeed() {
  swait = 500; lwait = 1500;
}

function reset(scene) {
  init_stack();
  for (let i = 0; i < stack.length; i++) {
    stack[i].x = gw/2;
    stack[i].y = 100;
    stack[i].scale = voto_s0;
    stack[i].angle = 0.0;
  }
  scene.start('init');
}

function default_objects(that) {
  that.urnab = that.add.image(gw/2, 100, 'urna-atras');
  that.urnaf = that.add.image(gw/2, 100, 'urna-frente');
  that.urnab.scale = 0.5; that.urnab.depth = 1;
  that.urnaf.scale = 0.5; that.urnaf.depth = 3;
  
  const tw = gw/3;
  const th = gh/2;
  that.rec_si = that.add.rectangle(tw/2, gh-th/2, tw-20, th-20, rec_col, rec_alpha);
  that.rec_no = that.add.rectangle(tw+tw/2, gh-th/2, tw-20, th-20, rec_col, rec_alpha);
  that.rec_nulo = that.add.rectangle(2*tw+tw/2, gh-th/2, tw-20, th-20, rec_col, rec_alpha);
  that.rec_si.depth = 0;
  that.rec_no.depth = 0;
  that.rec_nulo.depth = 0;
  that.txt_si = that.add.text(tw/2, gh-th/2, 'Que se le revoque el mandato', hdr2).setOrigin(0.5);
  that.txt_no = that.add.text(tw+tw/2, gh-th/2, 'Que siga en la presidencia', hdr2).setOrigin(0.5);
  that.txt_nulo = that.add.text(2*tw+tw/2, gh-th/2, 'Nulo', hdr2).setOrigin(0.5);

  that.bs = {};
  that.fs = {};
  for (let i = 0; i < stack.length; i++) {
    const b = that.add.image(stack[i].x, stack[i].y, 'boleta');
    const f = that.add.image(stack[i].x, stack[i].y, stack[i].nombre);
    b.scale = stack[i].scale; b.angle = stack[i].angle;
    f.scale = stack[i].scale; f.angle = stack[i].angle;
    b.depth = 1;
    f.depth = 1;
    that.bs[stack[i].nombre] = b;
    that.fs[stack[i].nombre] = f;
  }
}

class Loading extends Phaser.Scene {
  constructor() {
    super('loading');
  }
  preload() {
    gw = this.game.config.width;
    gh = this.game.config.height;
    
    var prog_box = this.add.graphics();
    prog_box.fillStyle(0x222222, 1);
    prog_box.fillRect(445, 270, 320, 50);
    var prog_bar = this.add.graphics();

    this.load.on('progress', val => {
      prog_bar.clear();
      prog_bar.fillStyle(0xD5007F, 1);
      prog_bar.fillRect(455, 280, 300 * val, 30);
    });

    this.load.on('complete', () => {
      prog_bar.destroy();
      prog_box.destroy();
      reset(this.scene);
    });

    this.load.image("urna-atras", "/img/rm2022/eyc/urna-atras.png");
    this.load.image("urna-frente", "/img/rm2022/eyc/urna-frente.png");
    this.load.image("boleta", "/img/rm2022/eyc/boleta.png");
    for (let x of stack) {
      this.load.image(x.nombre, '/img/rm2022/eyc/' + x.nombre + '.png');
    }
  }
}

class Init extends Phaser.Scene {
  constructor() {
    super('init');
  }
  create() {
    default_objects(this);
    const objs = [
      this.urnab, this.urnaf,
      this.rec_si, this.rec_no, this.rec_nulo,
      this.txt_si, this.txt_no, this.txt_nulo,
    ].concat(Object.values(this.bs), Object.values(this.fs));
    
    for (let x of objs) {
      x.alpha = 0;
    }

    this.urnab.y = gh/2;
    this.urnaf.y = gh/2;
    this.urnab.scale = 1.0;
    this.urnaf.scale = 1.0;

    this.txt1 = this.add.text(gw/2, gh/2, "La votación ha concluido", hdr).setOrigin(0.5);
    this.txt2 = this.add.text(gw/2, gh/2, "Comienza el proceso de escrutinio", hdr).setOrigin(0.5);
    this.txt1.alpha = 0;
    this.txt2.alpha = 0;

    this.tweens.add({
      targets: this.txt1,
      duration: swait,
      alpha: 1.0,
      completeDelay: lwait,
      onComplete: () => {
        this.tweens.add({
          targets: this.txt1,
          duration: swait,
          alpha: 0,
          y: -10,
        });
        this.tweens.add({
          targets: this.txt2,
          duration: swait,
          alpha: 1,
          completeDelay: lwait,
          onComplete: () => {
            this.tweens.add({
              targets: this.txt2,
              duration: swait,
              alpha: 0,
              y: -10,
              onComplete: () => {
                this.tweens.add({
                  targets: [this.urnaf, this.urnab],
                  duration: lwait,
                  y: 100,
                  scale: 0.5,
                  onComplete: () => {
                    this.scene.start('draw');
                  }
                });
                this.tweens.add({
                  targets: objs,
                  duration: swait,
                  alpha: 1,
                });
              }
            })
          }
        });
      }
    });
  }
}

class Draw extends Phaser.Scene {
  constructor() {
    super('draw');
  }
  create() {
    default_objects(this);
    if (stack_empty()) {
      this.scene.start('count');
      return;
    }
    
    this.voto = pop_stack();
    this.votob = this.bs[this.voto.nombre];
    this.votof = this.fs[this.voto.nombre];
    this.tweens.add({
      targets: [this.votob, this.votof],
      duration: swait,
      ease: 'Quad.easeInOut',
      y: voto_y1,
      scale: voto_s1,
      onComplete: () => {
        this.votob.depth = 4;
        this.votof.depth = 4;
        this.tweens.add({
          targets: [this.votob, this.votof],
          duration: swait,
          ease: 'Quad.easeInOut',
          y: voto_y2,
          scale: voto_s2,
          onComplete: () => {
            this.rec_si.setInteractive();
            this.rec_no.setInteractive();
            this.rec_nulo.setInteractive();
            for (let x of [this.rec_si, this.rec_no, this.rec_nulo]) {
              x.on('pointerover', (p) => {
                x.setFillStyle(rec_col, 1.0);
                p.event.preventDefault();
              });
              x.on('pointerout', (p) => {
                x.setFillStyle(rec_col, rec_alpha);
                p.event.preventDefault();
              });
            }
            this.rec_si.on('pointerdown', this.commit('si'));
            this.rec_no.on('pointerdown', this.commit('no'));
            this.rec_nulo.on('pointerdown', this.commit('nulo'));
          }
        });
      }
    });
  }
  commit(sentido) {
    return (p) => {
      if (sentido != this.voto.sentido) {
        switch (sentido) {
        case 'si':
          this.rec_si.setFillStyle(rec_err_col, 1);
          break;
        case 'no':
          this.rec_no.setFillStyle(rec_err_col, 1);
          break;
        case 'nulo':
          this.rec_nulo.setFillStyle(rec_err_col, 1);
          break;
        }
      } else {
        switch (sentido) {
        case 'si':
          this.rec_si.setFillStyle(rec_ok_col, 1);
          this.rec_no.setFillStyle(rec_col, rec_alpha);
          this.rec_nulo.setFillStyle(rec_col, rec_alpha);
          break;
        case 'no':
          this.rec_si.setFillStyle(rec_col, rec_alpha);
          this.rec_no.setFillStyle(rec_ok_col, 1);
          this.rec_nulo.setFillStyle(rec_col, rec_alpha);
          break;
        case 'nulo':
          this.rec_si.setFillStyle(rec_col, rec_alpha);
          this.rec_no.setFillStyle(rec_col, rec_alpha);
          this.rec_nulo.setFillStyle(rec_ok_col, 1);
          break;
        }
        for (let x of [this.rec_si, this.rec_no, this.rec_nulo]) {
          x.off('pointerover');
          x.off('pointerout');
          x.off('pointerdown');
        }
        this.voto.x = p.downX;
        this.voto.y = p.downY;
        this.voto.scale = voto_s3;
        this.voto.angle = 90*Math.random()-45;
        this.tweens.add({
          targets: [this.votob, this.votof],
          duration: swait,
          ease: 'Quad.easeInOut',
          x: this.voto.x,
          y: this.voto.y,
          scale: this.voto.scale,
          angle: this.voto.angle,
          onComplete: () => {
            this.scene.start('draw');
          }
        });
      }
    }
  }
}

class Count extends Phaser.Scene {
  constructor() {
    super('count');
  }
  create() {
    default_objects(this);

    const tw = gw/3;
    const th = gh/2;

    this.txt1 = this.add.text(gw/2, gh/2-50, "Los votos han sido clasificados", hdr).setOrigin(0.5);
    this.txt2 = this.add.text(gw/2, gh/2-50, "Comienza el proceso de cómputo", hdr).setOrigin(0.5);
    this.txt3 = this.add.text(tw/2, th/2, "Total:", hdr).setOrigin(0.5);
    this.txt4 = this.add.text(tw+tw/2, th/2, "Total:", hdr).setOrigin(0.5);
    this.txt5 = this.add.text(2*tw+tw/2, th/2, "Total:", hdr).setOrigin(0.5);
    this.txt_csi = this.add.text(tw/2, th/2+50, ''+cuenta('si'), hdr).setOrigin(0.5);
    this.txt_cno = this.add.text(tw+tw/2, th/2+50, ''+cuenta('no'), hdr).setOrigin(0.5);
    this.txt_cnulo = this.add.text(2*tw+tw/2, th/2+50, ''+cuenta('nulo'), hdr).setOrigin(0.5);
    this.rec_csi = this.add.rectangle(tw/2, th/2+50, 150, 70, rec_col, 1.0).setOrigin(0.5);
    this.rec_cno = this.add.rectangle(tw+tw/2, th/2+50, 150, 70, rec_col, 1.0).setOrigin(0.5);
    this.rec_cnulo = this.add.rectangle(2*tw+tw/2, th/2+50, 150, 70, rec_col, 1.0).setOrigin(0.5);
    for (let x of [this.txt1, this.txt2,this.txt3, this.txt4, this.txt5,
                   this.txt_csi, this.txt_cno, this.txt_cnulo,
                   this.rec_csi, this.rec_cno, this.rec_cnulo]) {
      x.alpha = 0;
    }

    this.tweens.add({
      targets: [this.urnab, this.urnaf],
      y: -gh,
      alpha: 0,
      duration: lwait,
      onComplete: () => {
        this.tweens.add({
          targets: this.txt1,
          duration: swait,
          alpha: 1.0,
          completeDelay: lwait,
          onComplete: () => {
            this.tweens.add({
              targets: this.txt1,
              duration: swait,
              alpha: 0,
              y: -10,
            });
            this.tweens.add({
              targets: this.txt2,
              duration: swait,
              alpha: 1,
              completeDelay: lwait,
              onComplete: () => {
                this.tweens.add({
                  targets: this.txt2,
                  duration: swait,
                  alpha: 0,
                  y: -10,
                  onComplete: () => {
                    this.tweens.add({
                      targets: [this.txt3, this.txt4, this.txt5, this.rec_csi, this.rec_cno, this.rec_cnulo],
                      alpha: 1,
                      duration: lwait,
                      onComplete: () => {
                        for (let x of [this.txt_csi, this.txt_cno, this.txt_cnulo]) {
                          x.alpha = 1;
                        }
                        this.activarObjetos();
                      }
                    });
                  }
                })
              }
            });
          }
        });
      }
    });
  }
  activarObjetos() {
    for (let x of [this.rec_csi, this.rec_cno, this.rec_cnulo]) {
      x.setInteractive();
      x.on('pointerover', (p) => {
        x.setFillStyle(rec_ope_col, 1.0);
        p.event.preventDefault();
      });
      x.on('pointerout', (p) => {
        x.setFillStyle(rec_col, 1.0);
        p.event.preventDefault();
      });
      x.on('pointerdown', (p) => {
        this.tweens.add({
          targets: x,
          alpha: 0,
          duration: swait,
          onComplete: () => {
            x.off('pointerover');
            x.off('pointerout');
            x.off('pointerdown');
          }
        });
      });
    }
    for (let i = 0; i < stack.length; i++) {
      const f = this.fs[stack[i].nombre];
      const b = this.bs[stack[i].nombre];
      f.setInteractive();
      f.on('pointerover', (p) => {
        f.setTint(vtint);
        b.setTint(vtint);
        p.event.preventDefault();
      });
      f.on('pointerout', (p) => {
        f.clearTint();
        b.clearTint();
        p.event.preventDefault();
      });
      f.on('pointerdown', (p) => {
        f.off('pointerover');
        f.off('pointerout');
        f.off('pointerdown');
        this.tweens.add({
          targets: [f, b],
          duration: swait,
          alpha: 0,
          y: 0,
          onComplete: () => {
            b.depth = 0;
            f.depth = 0;
          }
        });
      });
    }
  }
}

window.onload = function() {
  var config = {
    width: 1210,
    height: 600,
    maxWidth: 1210,
    maxHeight: 600,
    scene: [Loading, Init, Draw, Count],
    backgroundColor: "#FFFFFF",
    parent: "escrutinio-y-computo",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    input: {
      touch: {
        capture: true
      }
    }
  }

  var game = new Phaser.Game(config);
}
