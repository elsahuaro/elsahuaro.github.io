"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){if(b&&("object"===_typeof(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var DrawVoteScene=/*#__PURE__*/function(a){var b=Math.floor;function c(){var a;return _classCallCheck(this,c),a=d.call(this,"draw-vote"),a.tapete={},a}_inherits(c,a);var d=_createSuper(c);return _createClass(c,[{key:"init",value:function init(a){this.total=a.total,this.errores=a.errores,this.conteo=a.conteo}},{key:"create",value:function create(){this.game.input.touch.capture=!1,this.boxlabel=this.add.text(85,this.game.config.height/2+125,"Urna",{font:"30px \"Roboto\"",fill:"black"}),alt_elec?this.addTapeteSon():this.addTapeteFed(),this.back=this.add.image(120,this.game.config.height/2,"ine-back"),this.front=this.add.image(120,this.game.config.height/2,"ine-front"),this.totalText=this.add.text(this.game.config.width-140,20,"total: "+this.total,{font:"30px \"Roboto\"",fill:"black"}),this.erroresText=this.add.text(this.game.config.width-167,50,"errores: "+this.errores,{font:"30px \"Roboto\"",fill:"black"}),0<this.total&&(this.total-=1,this.scene.start("categorize-vote",{total:this.total,errores:this.errores,vote:nextVote(),conteo:this.conteo})),this.totalText.setText("total: "+this.total),this.erroresText.setText("errores: "+this.errores)}},{key:"addTapeteSon",value:function addTapeteSon(){this.matlabel=this.add.text(800,525,"Tapete",{font:"30px \"Roboto\"",fill:"black"});for(var a=0;a<votes.length;a++){this.tapete[votes[a]]=this.add.image(0,0,"tapete"),this.tapete[votes[a]].setOrigin(0,0);var c=this.tapete[votes[a]].width,d=this.tapete[votes[a]].height,e=490+a%3*c,f=100+b(a/3)*d;this.tapete[votes[a]].x=e,this.tapete[votes[a]].y=f;var g=this.add.text(e,f,partidos_txt_son[votes[a]],{font:"16px \"Roboto\"",fill:"black"});g.x=e+c/2-g.width/2,g.y=f+10;var h=this.add.text(e,f,candidaturas_txt_son[votes[a]],{font:"bold 16px \"Roboto\"",fill:"black"});h.x=e+c/2-h.width/2,h.y=f+this.tapete[votes[a]].height-25;var j=this.conteo[votes[a]].correct,k=this.add.text(e,f,""+j,{font:"30px \"Roboto\"",fill:"black"});k.x=e+c/2-k.width/2,k.y=f+d/2-k.height/2+10}}},{key:"addTapeteFed",value:function addTapeteFed(){this.matlabel=this.add.text(800,525,"Tapete",{font:"30px \"Roboto\"",fill:"black"});for(var a=0;a<votes.length;a++){this.tapete[votes[a]]=this.add.image(0,0,"tapete"),this.tapete[votes[a]].setOrigin(0,0);var c=this.tapete[votes[a]].width,d=this.tapete[votes[a]].height,e=490+a%7*c,f=100+b(a/7)*c;this.tapete[votes[a]].x=e,this.tapete[votes[a]].y=f;var g=this.add.text(e,f,votes[a].split("-").join("-").toUpperCase(),{font:"12px \"Roboto\"",fill:"black"});g.x=e+c/2-g.width/2,g.y=f+10;var h=this.conteo[votes[a]].correct,j=this.add.text(e,f,""+h,{font:"30px \"Roboto\"",fill:"black"});j.x=e+c/2-j.width/2,j.y=f+d/2-j.height/2+10}}}]),c}(Phaser.Scene);
