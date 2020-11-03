class SelectMissingScene extends Phaser.Scene {
  constructor() {
    super("select-missing");
  }

  create() {
    this.miembrosImgs = {}
    this.xFinales = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.faltas = [false, false, false, false, false, false, false, false, false];
    const goffset = 25;
    for (let i = 0; i < 6; i++) {
      let m = miembros[i];
      this.miembrosImgs[m] = this.add.image(0, 0, m).setInteractive();
      this.miembrosImgs[m].setOrigin(0, 0);
      this.miembrosImgs[m].scale = 0.25;
      this.xFinales[i] = i*offset+goffset;
      this.miembrosImgs[m].x = i*offset+goffset + this.game.config.width;
      this.miembrosImgs[m].y = this.game.config.height/2 - this.miembrosImgs[m].height*.25 / 2;
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
      this.miembrosImgs[m].x = this.game.config.width;
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
