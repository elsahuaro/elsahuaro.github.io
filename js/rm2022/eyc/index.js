"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"==_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!=_typeof(a)||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function _callSuper(a,b,c){return b=_getPrototypeOf(b),_possibleConstructorReturn(a,_isNativeReflectConstruct()?Reflect.construct(b,c||[],_getPrototypeOf(a).constructor):b.apply(a,c))}function _possibleConstructorReturn(a,b){if(b&&("object"===_typeof(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(a){}return(_isNativeReflectConstruct=function(){return!!a})()}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var stack=[{nombre:"boleta-no-00",sentido:"no"},{nombre:"boleta-no-01",sentido:"no"},{nombre:"boleta-no-02",sentido:"no"},{nombre:"boleta-no-03",sentido:"no"},{nombre:"boleta-no-04",sentido:"no"},{nombre:"boleta-no-05",sentido:"no"},{nombre:"boleta-no-06",sentido:"no"},{nombre:"boleta-no-07",sentido:"no"},{nombre:"boleta-no-08",sentido:"no"},{nombre:"boleta-no-09",sentido:"no"},{nombre:"boleta-no-10",sentido:"no"},{nombre:"boleta-no-11",sentido:"no"},{nombre:"boleta-nulo-00",sentido:"nulo"},{nombre:"boleta-nulo-01",sentido:"nulo"},{nombre:"boleta-nulo-02",sentido:"nulo"},{nombre:"boleta-nulo-03",sentido:"nulo"},{nombre:"boleta-nulo-04",sentido:"nulo"},{nombre:"boleta-nulo-05",sentido:"nulo"},{nombre:"boleta-nulo-06",sentido:"nulo"},{nombre:"boleta-si-00",sentido:"si"},{nombre:"boleta-si-01",sentido:"si"},{nombre:"boleta-si-02",sentido:"si"},{nombre:"boleta-si-03",sentido:"si"},{nombre:"boleta-si-04",sentido:"si"},{nombre:"boleta-si-05",sentido:"si"}];function cuenta(a){for(var b,c=0,d=0,e=stack;d<e.length;d++)b=e[d],b.sentido==a&&c++;return c}var curr=0;function init_stack(){curr=0;for(var a=stack.length-1;0<a;a--){var b=Math.floor(Math.random()*a),c=stack[a];stack[a]=stack[b],stack[b]=c}}function stack_empty(){return curr==stack.length}function pop_stack(){var a=stack[curr];return curr++,a}var gw,gh,hdr={font:"35px \"Roboto Slab\"",fill:"black"},hdr2={font:"27px \"Roboto Slab\"",fill:"black"},par={font:"20px \"Roboto\"",fill:"black"},swait=500,lwait=1500,voto_y0=100,voto_y1=25,voto_y2=150,voto_s0=.09,voto_s1=.09,voto_s2=.57,voto_s3=.125,vtint=14626523,rec_col=11184810,rec_err_col=13518175,rec_ok_col=5099077,rec_ope_col=4551374,rec_alpha=.5;function fastForward(){swait=0,lwait=0}function normalSpeed(){swait=500,lwait=1500}function reset(a){init_stack();for(var b=0;b<stack.length;b++)stack[b].x=gw/2,stack[b].y=100,stack[b].scale=voto_s0,stack[b].angle=0;a.start("init")}function default_objects(a){a.urnab=a.add.image(gw/2,100,"urna-atras"),a.urnaf=a.add.image(gw/2,100,"urna-frente"),a.urnab.scale=.5,a.urnab.depth=1,a.urnaf.scale=.5,a.urnaf.depth=3;var c=gw/3,d=gh/2;a.rec_si=a.add.rectangle(c/2,gh-d/2,c-20,d-20,rec_col,rec_alpha),a.rec_no=a.add.rectangle(c+c/2,gh-d/2,c-20,d-20,rec_col,rec_alpha),a.rec_nulo=a.add.rectangle(2*c+c/2,gh-d/2,c-20,d-20,rec_col,rec_alpha),a.rec_si.depth=0,a.rec_no.depth=0,a.rec_nulo.depth=0,a.txt_si=a.add.text(c/2,gh-d/2,"Que se le revoque el mandato",hdr2).setOrigin(.5),a.txt_no=a.add.text(c+c/2,gh-d/2,"Que siga en la presidencia",hdr2).setOrigin(.5),a.txt_nulo=a.add.text(2*c+c/2,gh-d/2,"Nulo",hdr2).setOrigin(.5),a.bs={},a.fs={};for(var e=0;e<stack.length;e++){var g=a.add.image(stack[e].x,stack[e].y,"boleta"),h=a.add.image(stack[e].x,stack[e].y,stack[e].nombre);g.scale=stack[e].scale,g.angle=stack[e].angle,h.scale=stack[e].scale,h.angle=stack[e].angle,g.depth=1,h.depth=1,a.bs[stack[e].nombre]=g,a.fs[stack[e].nombre]=h}}var Loading=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_callSuper(this,b,["loading"])}return _inherits(b,a),_createClass(b,[{key:"preload",value:function preload(){var a=this;gw=this.game.config.width,gh=this.game.config.height;var b=this.add.graphics();b.fillStyle(2236962,1),b.fillRect(445,270,320,50);var c=this.add.graphics();this.load.on("progress",function(a){c.clear(),c.fillStyle(13959295,1),c.fillRect(455,280,300*a,30)}),this.load.on("complete",function(){c.destroy(),b.destroy(),reset(a.scene)}),this.load.image("urna-atras","/img/rm2022/eyc/urna-atras.png"),this.load.image("urna-frente","/img/rm2022/eyc/urna-frente.png"),this.load.image("boleta","/img/rm2022/eyc/boleta.png");for(var d,e=0,f=stack;e<f.length;e++)d=f[e],this.load.image(d.nombre,"/img/rm2022/eyc/"+d.nombre+".png")}}])}(Phaser.Scene),Init=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_callSuper(this,b,["init"])}return _inherits(b,a),_createClass(b,[{key:"create",value:function create(){var a=this;default_objects(this);var b,c=[this.urnab,this.urnaf,this.rec_si,this.rec_no,this.rec_nulo,this.txt_si,this.txt_no,this.txt_nulo].concat(Object.values(this.bs),Object.values(this.fs)),d=_createForOfIteratorHelper(c);try{for(d.s();!(b=d.n()).done;){var e=b.value;e.alpha=0}}catch(a){d.e(a)}finally{d.f()}this.urnab.y=gh/2,this.urnaf.y=gh/2,this.urnab.scale=1,this.urnaf.scale=1,this.txt1=this.add.text(gw/2,gh/2,"La votaci\xF3n ha concluido",hdr).setOrigin(.5),this.txt2=this.add.text(gw/2,gh/2,"Comienza el proceso de escrutinio",hdr).setOrigin(.5),this.txt1.alpha=0,this.txt2.alpha=0,this.tweens.add({targets:this.txt1,duration:swait,alpha:1,completeDelay:lwait,onComplete:function onComplete(){a.tweens.add({targets:a.txt1,duration:swait,alpha:0,y:-10}),a.tweens.add({targets:a.txt2,duration:swait,alpha:1,completeDelay:lwait,onComplete:function onComplete(){a.tweens.add({targets:a.txt2,duration:swait,alpha:0,y:-10,onComplete:function onComplete(){a.tweens.add({targets:[a.urnaf,a.urnab],duration:lwait,y:100,scale:.5,onComplete:function onComplete(){a.scene.start("draw")}}),a.tweens.add({targets:c,duration:swait,alpha:1})}})}})}})}}])}(Phaser.Scene),Draw=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_callSuper(this,b,["draw"])}return _inherits(b,a),_createClass(b,[{key:"create",value:function create(){var a=this;return default_objects(this),stack_empty()?void this.scene.start("count"):void(this.voto=pop_stack(),this.votob=this.bs[this.voto.nombre],this.votof=this.fs[this.voto.nombre],this.tweens.add({targets:[this.votob,this.votof],duration:swait,ease:"Quad.easeInOut",y:voto_y1,scale:voto_s1,onComplete:function onComplete(){a.votob.depth=4,a.votof.depth=4,a.tweens.add({targets:[a.votob,a.votof],duration:swait,ease:"Quad.easeInOut",y:voto_y2,scale:voto_s2,onComplete:function onComplete(){a.rec_si.setInteractive(),a.rec_no.setInteractive(),a.rec_nulo.setInteractive();for(var b=function _loop(){var a=d[c];a.on("pointerover",function(b){a.setFillStyle(rec_col,1),b.event.preventDefault()}),a.on("pointerout",function(b){a.setFillStyle(rec_col,rec_alpha),b.event.preventDefault()})},c=0,d=[a.rec_si,a.rec_no,a.rec_nulo];c<d.length;c++)b();a.rec_si.on("pointerdown",a.commit("si")),a.rec_no.on("pointerdown",a.commit("no")),a.rec_nulo.on("pointerdown",a.commit("nulo"))}})}}))}},{key:"commit",value:function commit(a){var b=this;return function(c){if(a!=b.voto.sentido)"si"===a?b.rec_si.setFillStyle(rec_err_col,1):"no"===a?b.rec_no.setFillStyle(rec_err_col,1):"nulo"===a?b.rec_nulo.setFillStyle(rec_err_col,1):void 0;else{"si"===a?(b.rec_si.setFillStyle(rec_ok_col,1),b.rec_no.setFillStyle(rec_col,rec_alpha),b.rec_nulo.setFillStyle(rec_col,rec_alpha)):"no"===a?(b.rec_si.setFillStyle(rec_col,rec_alpha),b.rec_no.setFillStyle(rec_ok_col,1),b.rec_nulo.setFillStyle(rec_col,rec_alpha)):"nulo"===a?(b.rec_si.setFillStyle(rec_col,rec_alpha),b.rec_no.setFillStyle(rec_col,rec_alpha),b.rec_nulo.setFillStyle(rec_ok_col,1)):void 0;for(var d,e=0,f=[b.rec_si,b.rec_no,b.rec_nulo];e<f.length;e++)d=f[e],d.off("pointerover"),d.off("pointerout"),d.off("pointerdown");b.voto.x=c.downX,b.voto.y=c.downY,b.voto.scale=voto_s3,b.voto.angle=90*Math.random()-45,b.tweens.add({targets:[b.votob,b.votof],duration:swait,ease:"Quad.easeInOut",x:b.voto.x,y:b.voto.y,scale:b.voto.scale,angle:b.voto.angle,onComplete:function onComplete(){b.scene.start("draw")}})}}}}])}(Phaser.Scene),Count=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_callSuper(this,b,["count"])}return _inherits(b,a),_createClass(b,[{key:"create",value:function create(){var a=this;default_objects(this);var b=gw/3,c=gh/2;this.txt1=this.add.text(gw/2,gh/2-50,"Los votos han sido clasificados",hdr).setOrigin(.5),this.txt2=this.add.text(gw/2,gh/2-50,"Comienza el proceso de c\xF3mputo",hdr).setOrigin(.5),this.txt3=this.add.text(b/2,c/2,"Total:",hdr).setOrigin(.5),this.txt4=this.add.text(b+b/2,c/2,"Total:",hdr).setOrigin(.5),this.txt5=this.add.text(2*b+b/2,c/2,"Total:",hdr).setOrigin(.5),this.txt_csi=this.add.text(b/2,c/2+50,""+cuenta("si"),hdr).setOrigin(.5),this.txt_cno=this.add.text(b+b/2,c/2+50,""+cuenta("no"),hdr).setOrigin(.5),this.txt_cnulo=this.add.text(2*b+b/2,c/2+50,""+cuenta("nulo"),hdr).setOrigin(.5),this.rec_csi=this.add.rectangle(b/2,c/2+50,150,70,rec_col,1).setOrigin(.5),this.rec_cno=this.add.rectangle(b+b/2,c/2+50,150,70,rec_col,1).setOrigin(.5),this.rec_cnulo=this.add.rectangle(2*b+b/2,c/2+50,150,70,rec_col,1).setOrigin(.5);for(var d,e=0,f=[this.txt1,this.txt2,this.txt3,this.txt4,this.txt5,this.txt_csi,this.txt_cno,this.txt_cnulo,this.rec_csi,this.rec_cno,this.rec_cnulo];e<f.length;e++)d=f[e],d.alpha=0;this.tweens.add({targets:[this.urnab,this.urnaf],y:-gh,alpha:0,duration:lwait,onComplete:function onComplete(){a.tweens.add({targets:a.txt1,duration:swait,alpha:1,completeDelay:lwait,onComplete:function onComplete(){a.tweens.add({targets:a.txt1,duration:swait,alpha:0,y:-10}),a.tweens.add({targets:a.txt2,duration:swait,alpha:1,completeDelay:lwait,onComplete:function onComplete(){a.tweens.add({targets:a.txt2,duration:swait,alpha:0,y:-10,onComplete:function onComplete(){a.tweens.add({targets:[a.txt3,a.txt4,a.txt5,a.rec_csi,a.rec_cno,a.rec_cnulo],alpha:1,duration:lwait,onComplete:function onComplete(){for(var b,c=0,d=[a.txt_csi,a.txt_cno,a.txt_cnulo];c<d.length;c++)b=d[c],b.alpha=1;a.activarObjetos()}})}})}})}})}})}},{key:"activarObjetos",value:function activarObjetos(){for(var a=this,b=function _loop2(){var b=d[c];b.setInteractive(),b.on("pointerover",function(a){b.setFillStyle(rec_ope_col,1),a.event.preventDefault()}),b.on("pointerout",function(a){b.setFillStyle(rec_col,1),a.event.preventDefault()}),b.on("pointerdown",function(c){a.tweens.add({targets:b,alpha:0,duration:swait,onComplete:function onComplete(){b.off("pointerover"),b.off("pointerout"),b.off("pointerdown")}})})},c=0,d=[this.rec_csi,this.rec_cno,this.rec_cnulo];c<d.length;c++)b();for(var e=function _loop3(){var c=a.fs[stack[g].nombre],d=a.bs[stack[g].nombre];c.setInteractive(),c.on("pointerover",function(a){c.setTint(vtint),d.setTint(vtint),a.event.preventDefault()}),c.on("pointerout",function(a){c.clearTint(),d.clearTint(),a.event.preventDefault()}),c.on("pointerdown",function(b){c.off("pointerover"),c.off("pointerout"),c.off("pointerdown"),a.tweens.add({targets:[c,d],duration:swait,alpha:0,y:0,onComplete:function onComplete(){d.depth=0,c.depth=0}})})},g=0;g<stack.length;g++)e()}}])}(Phaser.Scene);window.onload=function(){var a={width:1210,height:600,maxWidth:1210,maxHeight:600,scene:[Loading,Init,Draw,Count],backgroundColor:"#FFFFFF",parent:"escrutinio-y-computo",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_HORIZONTALLY},input:{touch:{capture:!0}}},b=new Phaser.Game(a)};
