class SelectMissingScene extends Phaser.Scene {
  constructor() {
    super("select-missing");
  }

  puestoTxt(txt, x, y) {
    var o = this.add.text(0, 0, txt, {
      font: '20px "Libertinus Sans"',
      fill: "black",
      align: "center",
      wordWrap: {
        width: 100
      }
    });
    o.setOrigin(0, 0);
    o.x = x;
    o.y = y;
    return o;
  }

  create() {
    this.miembrosImgs = {}
    this.xFinales = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.faltas = [false, false, false, false, false, false, false, false, false];
    this.puestos = [0, 0, 0, 0, 0, 0];
    this.mesaDir = this.add.text(0, 50, "Mesa Directiva de la Casilla", {
      font: '50px "Libertinus Sans"',
      fill: "black"
    });
    this.mesaDir.setOrigin(0, 0);
    this.mesaDir.x = this.game.config.width/2 - this.mesaDir.width/2;
    this.mesaDir.alpha = 0;
    const puestosNombres = [
      "Presidente/a", "1º Secretario/a", "2º Secretario/a",
      "1º Escrutador/a", "2º Escrutador/a", "3º Escrutador/a"
    ];
    const goffset = 25;
    for (let i = 0; i < 6; i++) {
      let m = miembros[i];
      this.miembrosImgs[m] = this.add.image(0, 0, m).setInteractive();
      this.miembrosImgs[m].setOrigin(0, 0);
      this.miembrosImgs[m].scale = 0.25;
      this.xFinales[i] = i*offset+goffset;
      this.miembrosImgs[m].x = i*offset+goffset + this.game.config.width;
      this.miembrosImgs[m].y = this.game.config.height/2 - this.miembrosImgs[m].height*.25 / 2;
      this.puestos[i] = this.puestoTxt(puestosNombres[i],
                                       i*offset+goffset+20,
                                       this.game.config.height/2 + this.miembrosImgs[m].height*.25 / 2);
    }
    for (let i = 6; i < 9; i++) {
      let m = miembros[i];
      this.miembrosImgs[m] = this.add.image(0, 0, m).setInteractive();
      this.miembrosImgs[m].setOrigin(0, 0);
      this.miembrosImgs[m].scale = 0.25;
      this.xFinales[i] = i*offset+goffset+50;
      this.miembrosImgs[m].x = i*offset+goffset + this.game.config.width;
      this.miembrosImgs[m].y = this.game.config.height/2 - this.miembrosImgs[m].height*.25 / 2;
    }
    for (let i = 9; i < 15; i++) {
      let m = miembros[i];
      this.miembrosImgs[m] = this.add.image(0, 0, m).setInteractive();
      this.miembrosImgs[m].setOrigin(0, 0);
      this.miembrosImgs[m].scale = 0.25;
      this.miembrosImgs[m].x = i*offset+goffset + this.game.config.width;
      this.miembrosImgs[m].y = this.game.config.height/2 - this.miembrosImgs[m].height*.25 / 2;
    }
    for (let i = 0; i < 9; i++) {
      let m = miembros[i];
      this.tweens.add({
        targets: [this.miembrosImgs[m]],
        duration: 500 + i*100,
        ease: 'Quad.easeInOut',
        x: this.xFinales[i],
        onComplete: () => {
          this.miembrosImgs[m].on("pointerover", pointer => {
            this.miembrosImgs[m].setTint(0x2EDF46);
          });
          this.miembrosImgs[m].on("pointerout", pointer => {
            if (this.faltas[i]) {
              this.miembrosImgs[m].setTint(0xDF352E);
            } else {
              this.miembrosImgs[m].clearTint();
            }
          });
          this.miembrosImgs[m].on("pointerdown", pointer => {
            if (this.faltas[i]) {
              this.miembrosImgs[m].clearTint();
              this.faltas[i] = false;
            } else {
              this.miembrosImgs[m].setTint(0xDF352E);
              this.faltas[i] = true;
            }
          });
        }
      });
    }

    this.barrerBtn = this.add.image(100, this.game.config.height-100, "barrerBtn").setInteractive();
    this.barrerBtn.setOrigin(0, 0);
    this.barrerBtn.scale = 0.75;
    this.barrerBtn.on("pointerover", pointer => {
      this.barrerBtn.setTint(0x8AE787);
    });
    this.barrerBtn.on("pointerout", pointer => {
      this.barrerBtn.clearTint();
    });
    this.barrerBtn.on("pointerdown", pointer => {
      this.barrerBtn.off("pointerdown");
      this.barrerBtn.off("pointerover");
      this.barrerBtn.off("pointerout");
      this.barrerBtn.clearTint();
      for (let m of Object.values(this.miembrosImgs)) {
        m.off("pointerdown");
        m.off("pointerover");
        m.off("pointerout");
        m.clearTint();
      }
      for (let i = 0; i < 9; i++) {
        if (this.faltas[i]) {
          this.tweens.add({
            targets: [this.miembrosImgs[miembros[i]]],
            duration: 500 + i*50,
            ease: 'Quad.easeInOut',
            y: -1000
          });
        }
      }
      
      let finales = [false, false, false, false, false, false, false, false, false];
      let conteo = 0;
      let j = 0;
      for (let i = 0; i < 9; i++) {
        if (!this.faltas[i]) {
          finales[j] = miembros[i];
          j++;
        } else {
          conteo++;
        }
      }

      if (conteo > 3) {
        for (let i = j; i < 6; i++) {
          finales[i] = miembros[i-j+9];
        }
      }
      
      for (let [i, x] of finales.entries()) {
        if (x) {
          this.tweens.add({
            targets: [this.miembrosImgs[x]],
            duration: 1000 + 100*i,
            ease: 'Quad.easeInOut',
            x: this.xFinales[i]
          });
        }
      }

      setTimeout(() => {
        this.tweens.add({
          targets: finales.slice(6).filter(x => x).map(x => this.miembrosImgs[x]),
          duration: 250,
          ease: 'Quad.easeInOut',
          alpha: 0.0,
          onComplete: () => {
            this.tweens.add({
              targets: this.puestos.concat(finales.slice(0, 6).map(x => this.miembrosImgs[x])),
              duration: 500,
              ease: 'Quad.easeInOut',
              x: '+=200'
            });
            this.tweens.add({
              targets: [this.mesaDir],
              duration: 1000,
              ease: 'Quad.easeInOut',
              alpha: 1.0,
            });
          }
        });
      }, 2000);
    });

    this.reiniciarBtn = this.add.image(890, this.game.config.height-100, "reiniciarBtn").setInteractive();
    this.reiniciarBtn.setOrigin(0, 0);
    this.reiniciarBtn.scale = 0.75;
    this.reiniciarBtn.on("pointerover", pointer => {
      this.reiniciarBtn.setTint(0x8AE787);
    });
    this.reiniciarBtn.on("pointerout", pointer => {
      this.reiniciarBtn.clearTint();
    });
    this.reiniciarBtn.on("pointerdown", pointer => {
      this.tweens.add({
        targets: [this.barrerBtn, this.reiniciarBtn].concat(Object.values(this.miembrosImgs)),
        duration: 750,
        ease: 'Quad.easeInOut',
        alpha: 0.0,
        onComplete: () => {
          this.scene.start("select-missing");
        }
      });
    });
  }
}
