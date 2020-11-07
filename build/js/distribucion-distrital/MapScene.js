const tint = 0x777777;

class BaseScene extends Phaser.Scene {
  create() {
    this.defs = [
      this.add.image(0, 0, "def1").setInteractive(
        new Phaser.Geom.Polygon([61, 11, 48, 15, 37, 35, 43, 47, 45, 71,
                                 121, 117, 133, 104, 159, 118, 162, 135, 210, 153,
                                 205, 191, 273, 346, 314, 339, 325, 315, 339, 318,
                                 358, 299, 361, 284, 353, 276, 363, 273, 361, 251,
                                 366, 235, 375, 226, 359, 211, 376, 202, 378, 178,
                                 372, 155, 375, 133]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0),
      this.add.image(0, 0, "def2").setInteractive(
        new Phaser.Geom.Polygon([370, 135, 376, 200, 410, 229, 412, 255, 463, 265,
                                 497, 254, 502, 214, 518, 221, 577, 177, 585, 161,
                                 579, 142, 592, 148, 596, 135]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0),
      this.add.image(0, 0, "def3").setInteractive(
        new Phaser.Geom.Polygon([355, 306, 339, 318, 325, 315, 313, 338, 284, 348,
                                 279, 354, 257, 361, 257, 386, 251, 394, 279, 405,
                                 287, 381, 320, 404, 357, 404, 371, 385, 387, 381,
                                 402, 357, 390, 340, 395, 326, 370, 323, 361, 315]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0),
      this.add.image(0, 0, "def4").setInteractive(
        new Phaser.Geom.Polygon([582, 173, 505, 220, 488, 263, 413, 258, 410, 227,
                                 377, 202, 361, 207, 374, 231, 365, 236, 354, 308,
                                 397, 329, 392, 342, 422, 347, 492, 342, 446, 382,
                                 407, 389, 415, 430, 391, 432, 365, 461, 387, 491,
                                 442, 496, 431, 523, 449, 565, 480, 578, 480, 534,
                                 487, 534, 479, 482, 484, 471, 479, 449, 495, 456,
                                 521, 444, 551, 446, 553, 456, 575, 460, 625, 443,
                                 617, 409, 606, 398, 607, 347, 623, 325, 613, 260,
                                 621, 239, 591, 208]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0),
      this.add.image(0, 0, "def5").setInteractive(
        new Phaser.Geom.Polygon([309, 406, 325, 422, 331, 436, 354, 447, 361, 461,
                                 371, 449, 387, 444, 391, 432, 416, 427, 407, 414,
                                 412, 402, 406, 394, 419, 383, 435, 384, 448, 380,
                                 447, 376, 438, 373, 435, 365, 440, 358, 436, 354,
                                 430, 339, 424, 348, 411, 342, 399, 346, 400, 367,
                                 377, 386, 370, 386, 359, 396, 359, 405, 344, 401]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0),
      this.add.image(0, 0, "def6").setInteractive(
        new Phaser.Geom.Polygon([479, 449, 477, 454, 483, 472, 479, 485, 483, 496,
                                 482, 507, 485, 509, 487, 534, 479, 534, 481, 578,
                                 500, 572, 507, 559, 507, 549, 514, 547, 506, 537,
                                 515, 499, 523, 499, 528, 489, 525, 386, 517, 474,
                                 521, 463, 518, 464, 519, 458, 522, 457, 525, 446,
                                 522, 442, 498, 455]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0),
      this.add.image(0, 0, "def7").setInteractive(
        new Phaser.Geom.Polygon([525, 447, 519, 475, 529, 490, 516, 500, 509, 540, 515, 546,
                                 508, 548, 500, 572, 491, 577, 497, 583, 503, 611, 520, 621,
                                 534, 614, 544, 623, 556, 635, 559, 649, 572, 648, 597, 651,
                                 591, 645, 593, 637, 624, 609, 625, 597, 633, 587, 615, 579,
                                 617, 571, 613, 561, 619, 552, 615, 541, 621, 541, 613, 535,
                                 614, 529, 605, 524, 606, 519, 598, 511, 591, 510, 591, 496,
                                 587, 490, 583, 489, 574, 469, 573, 461, 565, 457, 551, 455,
                                 550, 448]),
        Phaser.Geom.Polygon.Contains
      ).setOrigin(0, 0)
    ];
  }
}

class MapScene extends BaseScene {
  constructor() {
    super("mapa");
    this.seleccion = false;
  }

  seleccionar(i) {
    if (this.seleccion) {
      this.defs[this.seleccion].clearTint();
    }
    this.seleccion = i;
    this.defs[this.seleccion].setTint(tint);
    infoSeleccion(i);
  }

  create() {
    super.create();

    for (let [i, def] of this.defs.entries()) {
      def.on("pointerover", pointer => {
        if (!this.seleccion || this.seleccion != i) {
          def.setTint(tint);
        }
      });
      def.on("pointerout", pointer => {
        if (!this.seleccion || this.seleccion != i) {
          def.clearTint();
        }
      });
      def.on("pointerdown", pointer => {
        this.seleccionar(i);
      });
    }
  }
}
