"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var StandardScene=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),c.apply(this,arguments)}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"init",value:function init(a){this.correctos=a.correctos}},{key:"create",value:function create(){_get(_getPrototypeOf(b.prototype),"create",this).call(this),this.validoBtn=this.add.rectangle(15,15,140,60,9103239),this.validoBtn.setOrigin(0,0),this.validoBtn.setInteractive(),this.validoTxt=this.add.text(32,30,"VALIDO",{font:"30px \"Roboto\"",fill:"black"}),this.nuloBtn=this.add.rectangle(1055,15,140,60,15176071),this.nuloBtn.setOrigin(0,0),this.nuloBtn.setInteractive(),this.nuloTxt=this.add.text(1085,30,"NULO",{font:"30px \"Roboto\"",fill:"black"}),this.conteo=this.add.text(0,0,stack_idx+"/"+stack.length,{font:"30px \"Roboto\"",fill:"black"}),this.conteo.x=this.game.config.width/2-this.conteo.width/2,this.buenas=this.add.text(0,this.conteo.height+10,"Correctos: "+this.correctos,{font:"25px \"Roboto\"",fill:"black"}),this.buenas.x=this.game.config.width/2-this.buenas.width/2}}]),b}(BaseScene),DrawVoteScene=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),c.call(this,"draw-vote")}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"init",value:function init(a){_get(_getPrototypeOf(b.prototype),"init",this).call(this,a)}},{key:"create",value:function create(){var a=this;_get(_getPrototypeOf(b.prototype),"create",this).call(this),0==stack_idx?(this.validoBtn.alpha=0,this.validoTxt.alpha=0,this.nuloBtn.alpha=0,this.nuloTxt.alpha=0,this.tweens.add({targets:[this.validoBtn,this.validoTxt,this.nuloBtn,this.nuloTxt],duration:500,ease:"Quad.easeInOut",alpha:1,onComplete:function onComplete(){a.scene.start("categorize-case",{vote:nextVote(),correctos:a.correctos})}})):this.activateINE()}},{key:"activateINE",value:function activateINE(){availableVotes&&this.scene.start("categorize-case",{vote:nextVote(),correctos:this.correctos})}}]),b}(StandardScene),CategorizeCaseScene=/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=c.call(this,"categorize-case"),a.boleta_x0=568,a.boleta_y0=250,a.boleta_y1=50,a.boleta_x2=370,a.boleta_y2=0,a.boleta_scale0=.15,a.boleta_scale2=1,a.boleta_scale3=.125,a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"init",value:function init(a){_get(_getPrototypeOf(b.prototype),"init",this).call(this,a),this.vote=a.vote}},{key:"create",value:function create(){var a=this;_get(_getPrototypeOf(b.prototype),"create",this).call(this),this.back.depth=0,this.front.depth=2,this.boleta="ruptura"in this.vote?this.addBoleta("boleta-"+this.vote.ruptura):this.addBoleta("boleta"),this.mark=this.addBoleta(this.vote.id),this.highlight=this.addBoleta("realce-"+this.vote.voto),this.highlight.alpha=0,this.tweens.add({targets:[this.boleta,this.mark,this.highlight],duration:500,ease:"Quad.easeInOut",y:this.boleta_y1,onComplete:function onComplete(){a.boleta.depth=3,a.mark.depth=3,a.highlight.depth=3,a.tweens.add({targets:[a.boleta,a.mark,a.highlight],duration:500,ease:"Quad.easeInOut",x:a.boleta_x2,y:a.boleta_y2,scaleX:a.boleta_scale2,scaleY:a.boleta_scale2,onComplete:function onComplete(){a.activateButtons()}})}})}},{key:"addBoleta",value:function addBoleta(a){var b=this.add.image(this.boleta_x0,this.boleta_y0,a);return b.setOrigin(0,0),b.scaleX=this.boleta_scale0,b.scaleY=this.boleta_scale0,b.depth=1,b}},{key:"deactivateButtons",value:function deactivateButtons(){this.validoBtn.off("pointerover"),this.validoBtn.off("pointerout"),this.validoBtn.off("pointerdown"),this.validoBtn.setFillStyle(9103239),this.nuloBtn.off("pointerover"),this.nuloBtn.off("pointerout"),this.nuloBtn.off("pointerdown"),this.nuloBtn.setFillStyle(15176071)}},{key:"activateButtons",value:function activateButtons(){var a=this;this.validoBtn.on("pointerover",function(b){a.validoBtn.setFillStyle(14626523),b.event.preventDefault()}),this.validoBtn.on("pointerout",function(b){a.validoBtn.setFillStyle(9103239),b.event.preventDefault()}),this.validoBtn.on("pointerdown",function(b){a.validoBtn.setFillStyle(9103239),a.validoBtn.off("pointerover"),a.validoBtn.off("pointerout"),a.validoBtn.off("pointerdown"),a.deactivateButtons(),a.categorizaValido(),b.event.preventDefault()}),this.nuloBtn.on("pointerover",function(b){a.nuloBtn.setFillStyle(14626523),b.event.preventDefault()}),this.nuloBtn.on("pointerout",function(b){a.nuloBtn.setFillStyle(15176071),b.event.preventDefault()}),this.nuloBtn.on("pointerdown",function(b){a.nuloBtn.setFillStyle(15176071),a.nuloBtn.off("pointerover"),a.nuloBtn.off("pointerout"),a.nuloBtn.off("pointerdown"),a.deactivateButtons(),a.categorizaNulo(),b.event.preventDefault()})}},{key:"categorizaValido",value:function categorizaValido(){var a=this;"nulo"==this.vote.voto?this.tweens.add({targets:[this.boleta,this.mark,this.highlight],duration:500,ease:"Quad.easeInOut",x:0,onComplete:function onComplete(){a.muestraIncorrectoNulo()}}):this.tweens.add({targets:[this.boleta,this.mark,this.highlight],duration:500,ease:"Quad.easeInOut",x:740,onComplete:function onComplete(){a.muestraCorrectoValido()}})}},{key:"categorizaNulo",value:function categorizaNulo(){var a=this;"nulo"==this.vote.voto?this.tweens.add({targets:[this.boleta,this.mark,this.highlight],duration:500,ease:"Quad.easeInOut",x:0,onComplete:function onComplete(){a.muestraCorrectoNulo()}}):this.tweens.add({targets:[this.boleta,this.mark,this.highlight],duration:500,ease:"Quad.easeInOut",x:740,onComplete:function onComplete(){a.muestraIncorrectoValido()}})}},{key:"muestraCorrectoValido",value:function muestraCorrectoValido(){this.correctos++,this.buenas.setText("Correctos: "+this.correctos),this.addMsgBox("left"),this.addMsgOutcome("\xA1Correcto! El voto es v\xE1lido","left"),this.addMsg(explicaciones[this.vote.ref],resoluciones[this.vote.ref],"left"),this.addNext("left"),this.tweenHighlight()}},{key:"muestraCorrectoNulo",value:function muestraCorrectoNulo(){this.correctos++,this.buenas.setText("Correctos: "+this.correctos),this.addMsgBox("right"),this.addMsgOutcome("\xA1Correcto! el voto es nulo","right"),this.addMsg(explicaciones[this.vote.ref],resoluciones[this.vote.ref],"right"),this.addNext("right"),this.tweenHighlight()}},{key:"muestraIncorrectoValido",value:function muestraIncorrectoValido(){this.addMsgBox("left"),this.addMsgOutcome("\xA1Incorrecto! el voto es v\xE1lido","left"),this.addMsg(explicaciones[this.vote.ref],resoluciones[this.vote.ref],"left"),this.addNext("left"),this.tweenHighlight()}},{key:"muestraIncorrectoNulo",value:function muestraIncorrectoNulo(){this.addMsgBox("right"),this.addMsgOutcome("\xA1Incorrecto! el voto es nulo","right"),this.addMsg(explicaciones[this.vote.ref],resoluciones[this.vote.ref],"right"),this.addNext("right"),this.tweenHighlight()}},{key:"addMsgBox",value:function addMsgBox(a){this.msgBox="right"==a?this.add.rectangle(485,90,710,495,16777215):this.add.rectangle(15,90,710,495,16777215),this.msgBox.setOrigin(0,0),this.msgBox.depth=3,this.msgBox.alpha=.75}},{key:"addMsgOutcome",value:function addMsgOutcome(a,b){"right"==b?(this.msgOutcomeTxt=this.add.text(485,100,a,{font:"35px \"Roboto\"",fill:"black"}),this.msgOutcomeTxt.x=840-this.msgOutcomeTxt.width/2):(this.msgOutcomeTxt=this.add.text(15,100,a,{font:"35px \"Roboto\"",fill:"black"}),this.msgOutcomeTxt.x=370-this.msgOutcomeTxt.width/2),this.msgOutcomeTxt.depth=3}},{key:"addMsg",value:function addMsg(a,b,c){"right"==c?(this.msgExpl=this.add.text(500,this.msgOutcomeTxt.y+this.msgOutcomeTxt.height+15,a,{font:"25px \"Roboto Condensed\"",fill:"black",wordWrap:{width:680}}),this.msgResol=this.add.text(500,this.msgExpl.y+this.msgExpl.height+15,b,{font:"18px \"Roboto\"",fill:"black",wordWrap:{width:680}})):(this.msgExpl=this.add.text(30,this.msgOutcomeTxt.y+this.msgOutcomeTxt.height+15,a,{font:"25px \"Roboto Condensed\"",fill:"black",wordWrap:{width:680}}),this.msgResol=this.add.text(30,this.msgExpl.y+this.msgExpl.height+15,b,{font:"18px \"Roboto\"",fill:"black",wordWrap:{width:680}})),this.msgExpl.depth=3,this.msgResol.depth=3}},{key:"addNext",value:function addNext(a){var b=this;"right"==a?(this.nextBtn=this.add.rectangle(500,525,140,45,8884967),this.nextBtn.setOrigin(0,0),this.nextTxt=this.add.text(505,532,"Continuar",{font:"30px \"Roboto\"",fill:"black"})):(this.nextBtn=this.add.rectangle(30,525,140,45,8884967),this.nextBtn.setOrigin(0,0),this.nextTxt=this.add.text(35,532,"Continuar",{font:"30px \"Roboto\"",fill:"black"})),this.nextBtn.depth=3,this.nextTxt.depth=3,this.nextBtn.setInteractive(),this.nextBtn.on("pointerover",function(a){b.nextBtn.setFillStyle(14626523),a.event.preventDefault()}),this.nextBtn.on("pointerout",function(a){b.nextBtn.setFillStyle(8884967),a.event.preventDefault()}),this.nextBtn.on("pointerdown",function(a){b.nextBtn.setFillStyle(8884967),b.nextBtn.off("pointerover"),b.nextBtn.off("pointerout"),b.nextBtn.off("pointerdown"),b.tweens.add({targets:[b.boleta,b.mark,b.highlight,b.nextBtn,b.nextTxt,b.msgExpl,b.msgResol,b.msgOutcomeTxt,b.msgBox],duration:500,alpha:0,ease:"Quad.easeInOut",onComplete:function onComplete(){b.scene.start("draw-vote",{correctos:b.correctos})}}),a.event.preventDefault()})}},{key:"tweenHighlight",value:function tweenHighlight(){this.tweens.add({targets:this.highlight,duration:400,alpha:.5,ease:"Quad.easeInOut",repeat:-1,yoyo:!0})}}]),b}(StandardScene);
