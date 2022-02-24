"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(3>arguments.length?a:c):e.value}},_get.apply(this,arguments)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){if(b&&("object"===_typeof(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var BaseScene=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),c.apply(this,arguments)}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"create",value:function create(){this.game.input.touch.capture=!1,this.back=this.add.image(this.game.config.width/2,this.game.config.height/2,"ine-back").setInteractive(),this.front=this.add.image(this.game.config.width/2,this.game.config.height/2,"ine-front").setInteractive()}}]),b}(Phaser.Scene),StartScene=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),c.call(this,"start")}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"create",value:function create(){var a=this;_get(_getPrototypeOf(b.prototype),"create",this).call(this),this.front.on("pointerover",function(b){a.front.setTint(14626523),a.back.setTint(14626523),b.event.preventDefault()}),this.front.on("pointerout",function(b){a.front.clearTint(),a.back.clearTint(),b.event.preventDefault()}),this.front.on("pointerdown",function(b){a.scene.start("draw-vote",{correctos:0}),b.event.preventDefault()})}}]),b}(BaseScene);
