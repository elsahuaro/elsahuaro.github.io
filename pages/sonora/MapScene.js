class BaseScene extends Phaser.Scene {
  create() {
    this.mapa = this.add.image(0, 0, "mapa");
    this.mapa.setOrigin(0, 0);
  }
}

class MapScene extends BaseScene {
  constructor() {
    super("mapa");
    this.municipios = {};
    for (var prop in coordenadas) {
      this.municipios[prop] = {};
    }
    this.seleccion = false;
  }

  seleccionar(mun) {
    if (this.seleccion) {
      for (let poly of this.municipios[this.seleccion]["poligonos"]) {
        poly.setStrokeStyle(0, "black", 0);
      }
    }
    this.seleccion = mun;
    for (let poly of this.municipios[mun]["poligonos"]) {
        poly.setStrokeStyle(2, "black");
    }
    infoSeleccion(mun);
  }

  create() {
    super.create();
          
    for (let prop in coordenadas) {
      this.municipios[prop]["poligonos"] = [];
      for (let polycoords of coordenadas[prop]) {
        let poly = this.add.polygon(0, 0, polycoords).setOrigin(0, 0);
        poly.setInteractive(new Phaser.Geom.Polygon(polycoords), Phaser.Geom.Polygon.Contains);
        poly.on("pointerover", (pointer) => {
          poly.setFillStyle(0xDF2EDB, 0.5);
        });
        poly.on("pointerout", (pointer) => {
          poly.setFillStyle(0xFFFFFF, 0);
        });
        poly.on("pointerdown", () => {
          this.seleccionar(prop);
        });
        this.municipios[prop]["poligonos"].push(poly);
      }
    }
  }
}
