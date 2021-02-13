class StandardScene extends BaseScene {
  init(data) {
    this.correctos = data.correctos;
  }
  
  create() {
    super.create();
    this.validoBtn = this.add.rectangle(0+15, 0+15, 140, 60, 0x8AE787);
    this.validoBtn.setOrigin(0, 0);
    this.validoBtn.setInteractive();
    this.validoTxt = this.add.text(17+15, 15+15, "VALIDO", {
      font: '30px "Roboto"',
      fill: "black"
    });
    this.nuloBtn = this.add.rectangle(1070-15, 0+15, 140, 60, 0xE79187);
    this.nuloBtn.setOrigin(0, 0);
    this.nuloBtn.setInteractive();
    this.nuloTxt = this.add.text(1100-15, 15+15, "NULO", {
      font: '30px "Roboto"',
      fill: "black"
    });
    this.conteo = this.add.text(0, 0, stack_idx + "/" + stack.length, {
      font: '30px "Roboto"',
      fill: "black"
    });
    this.conteo.x = this.game.config.width/2 - this.conteo.width/2;
    this.buenas = this.add.text(0, this.conteo.height + 10, "Correctos: " + this.correctos, {
      font: '25px "Roboto"',
      fill: "black"
    });
    this.buenas.x = this.game.config.width/2 - this.buenas.width/2;
  }
}

class DrawVoteScene extends StandardScene {
  constructor() {
    super("draw-vote");
  }

  init(data) {
    super.init(data);
  }

  create() {
    super.create();
    if (stack_idx == 0) {
      this.validoBtn.alpha = 0.0;
      this.validoTxt.alpha = 0.0;
      this.nuloBtn.alpha = 0.0;
      this.nuloTxt.alpha = 0.0;
      this.tweens.add({
        targets: [this.validoBtn, this.validoTxt, this.nuloBtn, this.nuloTxt],
        duration: 500,
        ease: 'Quad.easeInOut',
        alpha: 1.0,
        onComplete: () => {
          this.scene.start("categorize-case", {
            vote: nextVote(),
            correctos: this.correctos
          });
        }
      });
    } else {
      this.activateINE();
    }
  }

  activateINE() {
    if (availableVotes) {
      this.scene.start("categorize-case", {
        vote: nextVote(),
        correctos: this.correctos
      });
    }
  }
}

class CategorizeCaseScene extends StandardScene {
  constructor() {
    super("categorize-case");
    this.boleta_x0 = 568;
    this.boleta_y0 = 250;
    this.boleta_y1 = 50;
    this.boleta_x2 = 370;
    this.boleta_y2 = 0;
    this.boleta_scale0 = 0.15;
    this.boleta_scale2 = 1.0;
    this.boleta_scale3 = 0.125;
  }

  init(data) {
    super.init(data);
    this.vote = data.vote;
  }

  create() {
    super.create();
    this.back.depth = 0;
    this.front.depth = 2;
    if ("ruptura" in this.vote) {
      this.boleta = this.addBoleta("boleta-" + this.vote["ruptura"]);
    } else {
      this.boleta = this.addBoleta("boleta");
    }
    this.mark = this.addBoleta(this.vote["id"]);
    this.highlight = this.addBoleta("realce-" + this.vote["voto"]);
    this.highlight.alpha = 0.0;

    this.tweens.add({
      targets: [this.boleta, this.mark, this.highlight],
      duration: 500,
      ease: 'Quad.easeInOut',
      y: this.boleta_y1,
      onComplete: () => {
        this.boleta.depth = 3;
        this.mark.depth = 3;
        this.highlight.depth = 3;
        this.tweens.add({
          targets: [this.boleta, this.mark, this.highlight],
          duration: 500,
          ease: 'Quad.easeInOut',
          x: this.boleta_x2,
          y: this.boleta_y2,
          scaleX: this.boleta_scale2,
          scaleY: this.boleta_scale2,
          onComplete: () => {
            this.activateButtons();
          }
        });
      }
    });
  }

  addBoleta(name) {
    var obj = this.add.image(this.boleta_x0, this.boleta_y0, name);
    obj.setOrigin(0, 0);
    obj.scaleX = this.boleta_scale0;
    obj.scaleY = this.boleta_scale0;
    obj.depth = 1;
    return obj;
  }

  deactivateButtons() {
    this.validoBtn.off("pointerover");
    this.validoBtn.off("pointerout");
    this.validoBtn.off("pointerdown");
    this.validoBtn.setFillStyle(0x8AE787);
    this.nuloBtn.off("pointerover");
    this.nuloBtn.off("pointerout");
    this.nuloBtn.off("pointerdown");
    this.nuloBtn.setFillStyle(0xE79187);
  }

  activateButtons() {
    this.validoBtn.on("pointerover", pointer => {
      this.validoBtn.setFillStyle(0xDF2EDB);
      pointer.event.preventDefault();
    });
    this.validoBtn.on("pointerout", pointer => {
      this.validoBtn.setFillStyle(0x8AE787);
      pointer.event.preventDefault();
    });
    this.validoBtn.on("pointerdown", pointer => {
      this.validoBtn.setFillStyle(0x8AE787);
      this.validoBtn.off("pointerover");
      this.validoBtn.off("pointerout");
      this.validoBtn.off("pointerdown");
      this.deactivateButtons();
      this.categorizaValido();
      pointer.event.preventDefault();
    });

    this.nuloBtn.on("pointerover", pointer => {
      this.nuloBtn.setFillStyle(0xDF2EDB);
      pointer.event.preventDefault();
    });
    this.nuloBtn.on("pointerout", pointer => {
      this.nuloBtn.setFillStyle(0xE79187);
      pointer.event.preventDefault();
    });
    this.nuloBtn.on("pointerdown", pointer => {
      this.nuloBtn.setFillStyle(0xE79187);
      this.nuloBtn.off("pointerover");
      this.nuloBtn.off("pointerout");
      this.nuloBtn.off("pointerdown");
      this.deactivateButtons();
      this.categorizaNulo();
      pointer.event.preventDefault();
    });
  }

  categorizaValido() {
    var es_nulo = false;
    if (alt_elec) {
      es_nulo = this.vote["voto"] == "son-nulo";
    } else {
      es_nulo = this.vote["voto"] == "nulo";
    }
    if (es_nulo) {
      this.tweens.add({
        targets: [this.boleta, this.mark, this.highlight],
        duration: 500,
        ease: 'Quad.easeInOut',
        x: 0,
        onComplete: () => { this.muestraIncorrectoNulo(); }
      });
    } else {
      this.tweens.add({
        targets: [this.boleta, this.mark, this.highlight],
        duration: 500,
        ease: 'Quad.easeInOut',
        x: 740,
        onComplete: () => { this.muestraCorrectoValido(); }
      });
    }
  }

  categorizaNulo() {
    var es_nulo = false;
    if (alt_elec) {
      es_nulo = this.vote["voto"] == "son-nulo";
    } else {
      es_nulo = this.vote["voto"] == "nulo";
    }
    
    if (es_nulo) {
      this.tweens.add({
        targets: [this.boleta, this.mark, this.highlight],
        duration: 500,
        ease: 'Quad.easeInOut',
        x: 0,
        onComplete: () => { this.muestraCorrectoNulo(); }
      });
    } else {
      this.tweens.add({
        targets: [this.boleta, this.mark, this.highlight],
        duration: 500,
        ease: 'Quad.easeInOut',
        x: 740,
        onComplete: () => { this.muestraIncorrectoValido(); }
      });
    }
  }

  muestraCorrectoValido() {
    /* Muestra categorizacion correcta, el voto es valido */
    this.correctos++;
    this.buenas.setText("Correctos: " + this.correctos);
    this.addMsgBox("left");
    this.addMsgOutcome("¡Correcto! El voto es válido", "left");
    this.addMsg(explicaciones[this.vote["ref"]], resoluciones[this.vote["ref"]], "left");
    this.addNext("left");
    this.tweenHighlight();
  }

  muestraCorrectoNulo() {
    /* Muestra categorizacion correcta, el voto es nulo */
    this.correctos++;
    this.buenas.setText("Correctos: " + this.correctos);
    this.addMsgBox("right");
    this.addMsgOutcome("¡Correcto! el voto es nulo", "right");
    this.addMsg(explicaciones[this.vote["ref"]], resoluciones[this.vote["ref"]], "right");
    this.addNext("right");
    this.tweenHighlight();
  }

  muestraIncorrectoValido() {
    /* Muestra categorizacion incorrecta, el voto es valido */
    this.addMsgBox("left");
    this.addMsgOutcome("¡Incorrecto! el voto es válido", "left");
    this.addMsg(explicaciones[this.vote["ref"]], resoluciones[this.vote["ref"]], "left");
    this.addNext("left");
    this.tweenHighlight();
  }

  muestraIncorrectoNulo() {
    /* Muestra categorizacion incorrecta, el voto es nulo */
    this.addMsgBox("right");
    this.addMsgOutcome("¡Incorrecto! el voto es nulo", "right");
    this.addMsg(explicaciones[this.vote["ref"]], resoluciones[this.vote["ref"]], "right");
    this.addNext("right");
    this.tweenHighlight();
  }

  addMsgBox(pos) {
    if (pos == "right") {
      this.msgBox = this.add.rectangle(485, 90, 710, 495, 0xFFFFFF);
    } else {
      this.msgBox = this.add.rectangle(15, 90, 710, 495, 0xFFFFFF);
    }
    this.msgBox.setOrigin(0, 0);
    this.msgBox.depth = 3;
    this.msgBox.alpha = 0.75;
  }

  addMsgOutcome(txt, pos) {
    if (pos == "right") {
      this.msgOutcomeTxt = this.add.text(485, 100, txt, {
        font: '35px "Roboto"',
        fill: "black"
      });
      this.msgOutcomeTxt.x = 485 + 710/2 - this.msgOutcomeTxt.width/2;
    } else {
      this.msgOutcomeTxt = this.add.text(15, 100, txt, {
        font: '35px "Roboto"',
        fill: "black"
      });
      this.msgOutcomeTxt.x = 15 + 710/2 - this.msgOutcomeTxt.width/2;
    }
    this.msgOutcomeTxt.depth = 3;
  }

  addMsg(explicacion, resolucion, pos) {
    if (pos == "right") {
      this.msgExpl = this.add.text(485+15, this.msgOutcomeTxt.y + this.msgOutcomeTxt.height + 15, explicacion, {
        font: '25px "Roboto Condensed"',
        fill: "black",
        wordWrap: { width: 710-30 }
      });
      this.msgResol = this.add.text(485+15, this.msgExpl.y + this.msgExpl.height + 15, resolucion, {
        font: '18px "Roboto"',
        fill: "black",
        wordWrap: { width: 710-30 }
      });
    } else {
      this.msgExpl = this.add.text(15+15, this.msgOutcomeTxt.y + this.msgOutcomeTxt.height + 15, explicacion, {
        font: '25px "Roboto Condensed"',
        fill: "black",
        wordWrap: { width: 710-30 }
      });
      this.msgResol = this.add.text(15+15, this.msgExpl.y + this.msgExpl.height + 15, resolucion, {
        font: '18px "Roboto"',
        fill: "black",
        wordWrap: { width: 710-30 }
      });
    }
    this.msgExpl.depth = 3;
    this.msgResol.depth = 3;
  }

  addNext(pos) {
    if (pos == "right") {
      // 485, 90, 710, 495
      this.nextBtn = this.add.rectangle(485+15, 90+495-60, 140, 45, 0x8792E7);
      this.nextBtn.setOrigin(0, 0);
      this.nextTxt = this.add.text(485+20, 90+495-53, "Continuar", {
        font: '30px "Roboto"',
        fill: "black"
      });
    } else {
      // 15, 90, 710, 495
      this.nextBtn = this.add.rectangle(15+15, 90+495-60, 140, 45, 0x8792E7);
      this.nextBtn.setOrigin(0, 0);
      this.nextTxt = this.add.text(15+20, 90+495-53, "Continuar", {
        font: '30px "Roboto"',
        fill: "black"
      });
    }
    this.nextBtn.depth = 3;
    this.nextTxt.depth = 3;
    this.nextBtn.setInteractive();

    this.nextBtn.on("pointerover", pointer => {
      this.nextBtn.setFillStyle(0xDF2EDB);
      pointer.event.preventDefault();
    });
    this.nextBtn.on("pointerout", pointer => {
      this.nextBtn.setFillStyle(0x8792E7);
      pointer.event.preventDefault();
    });
    this.nextBtn.on("pointerdown", pointer => {
      this.nextBtn.setFillStyle(0x8792E7);
      this.nextBtn.off("pointerover");
      this.nextBtn.off("pointerout");
      this.nextBtn.off("pointerdown");
      this.tweens.add({
        targets: [this.boleta, this.mark, this.highlight,
                  this.nextBtn, this.nextTxt, this.msgExpl, this.msgResol,
                  this.msgOutcomeTxt, this.msgBox],
        duration: 500,
        alpha: 0.0,
        ease: 'Quad.easeInOut',
        onComplete: () => {
          this.scene.start("draw-vote", {
            correctos: this.correctos
          });
        }
      });
      pointer.event.preventDefault();
    });
  }

  tweenHighlight() {
    this.tweens.add({
      targets: this.highlight,
      duration: 400,
      alpha: 0.5,
      ease: 'Quad.easeInOut',
      repeat: -1,
      yoyo: true
    });
  }
}
