(function(g){function e(a){if(h[a])return h[a].exports;var d=h[a]={i:a,l:!1,exports:{}};g[a].call(d.exports,d,d.exports,e);d.l=!0;return d.exports}var h={};e.m=g;e.c=h;e.d=function(a,d,c){e.o(a,d)||Object.defineProperty(a,d,{configurable:!1,enumerable:!0,get:c})};e.n=function(a){var d=a&&a.__esModule?function(){return a["default"]}:function(){return a};e.d(d,"a",d);return d};e.o=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)};e.p="";return e(e.s=0)})([function(g,e,h){Object.defineProperty(e,
"__esModule",{value:!0});g=h(1);h=h(2);e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};"object"!==e(window.themehouse)&&(window.themehouse={});"object"!==e(window.themehouse.settings)&&(window.themehouse.settings={});"object"!==e(window.themehouse.settings.data)&&(window.themehouse.settings.data={});window.themehouse.settings.data.jsVersion=
"2.0.2.1_Release";(new g.a({settings:window.themehouse.settings.sticky})).register();(new h.a({settings:window.themehouse.settings.checkRadius})).register()},function(g,e,h){var a=function(){function d(c,b){for(var f=0;f<b.length;f++){var d=b[f];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(c,d.key,d)}}return function(c,b,f){b&&d(c.prototype,b);f&&d(c,f);return c}}();g=function(){function d(c){var b=this,f=c.settings;f=void 0===f?{}:f;var a=c.init;
a=void 0===a?!1:a;c=c.commonVersion;c=void 0===c?"20180112":c;if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");this.initEle=function(c){var d=b.eles[c],k=d.offsets,f=k.topOffsetMax,a=k.topOffsetMin,l=k.topOffsetBreakpoint;k=Math.max(k.topOffset,f,a,0);-1!==l&&(k=b.common.values.innerWidth>l?f:a);k!==d.currentOffset&&(f=window.jQuery(d.ele),-1!==d.currentOffset&&f.trigger("sticky_kit:detach").removeData("sticky_kit"),f.stick_in_parent({sticky_class:b.settings.stickyClass,
offset_top:k}),b.eles[c].currentOffset=k)};this.init=function(){b.initGet();b.initSet()};this.initGet=function(){for(var c=window.document.querySelectorAll(b.settings.stickySelector),d=0,f=c.length;d<f;d++){var a=c[d],e=parseInt(a.getAttribute(b.settings.dataTop),10)||0,m=parseInt(a.getAttribute(b.settings.dataTopMin),10)||0,g=parseInt(a.getAttribute(b.settings.dataTopMax),10)||0,h=parseInt(a.getAttribute(b.settings.dataTopBreakpoint),10)||-1;b.eles.push({ele:a,offsets:{topOffset:e,topOffsetMax:g,
topOffsetMin:m,topOffsetBreakpoint:h},currentOffset:-1})}b.resizeGet();$(window).on("resize.sticky-header",$.proxy(b,"update"))};this.initSet=function(){b.resizeSet();b.running=!0};this.resize=function(){b.resizeGet();b.resizeSet()};this.resizeGet=function(){};this.resizeSet=function(){b.common.values.innerHeight<b.settings.minWindowHeight?!1!==b.active&&b.disable():b.active||b.enable();for(var c=0,d=b.eles.length;c<d;c++)b.initEle(c)};this.running=!1;this.settings=Object.assign({stickySelector:".uix_stickyBar",
stickyClass:"is-sticky",stickyBrokenClass:"is-sticky-broken",stickyDisabledClass:"is-sticky-disabled",minWindowHeight:251,dataTop:"data-top-offset",dataTopMin:"data-top-offset-min",dataTopMax:"data-top-offset-max",dataTopBreakpoint:"data-top-offset-breakpoint"},f);this.commonVersion=c;this.common=window.themehouse.common[c];this.stickyBroken=this.supportsSticky=this.active=!1;this.eles=[];a&&this.init()}a(d,[{key:"register",value:function(){this.common.register({phase:"initGet",addon:"TH_UIX_Sticky",
func:this.initGet,order:10});this.common.register({phase:"initSet",addon:"TH_UIX_Sticky",func:this.initSet,order:10});this.common.register({phase:"resizeGet",addon:"TH_UIX_Sticky",func:this.resizeGet,order:10});this.common.register({phase:"resizeSet",addon:"TH_UIX_Sticky",func:this.resizeSet,order:100})}},{key:"enable",value:function(){var c=this;this.active=!0;for(var b=function(b,d){var a=c.eles[b].ele;a.classList.remove(c.settings.stickyDisabledClass);c.supportsSticky||(c.stickyBroken&&setTimeout(function(){a.classList.add(c.settings.stickyBrokenClass)},
0),c.initEle(b))},d=0,a=this.eles.length;d<a;d++)b(d,a)}},{key:"disable",value:function(){this.active=!1;this.supportsSticky&&window.jQuery(window).off("scroll.sticky-header");for(var c=0,b=this.eles.length;c<b;c++){var d=this.eles[c].ele;this.supportsSticky&&window.jQuery(d).trigger("sticky_kit:detach").removeData("sticky_kit");d.classList.remove(this.settings.stickyClass);d.classList.remove(this.settings.stickyBrokenClass);d.classList.remove(this.settings.stickyDisabledClass)}}}]);return d}();"undefined"===
typeof window.themehouse&&(window.themehouse={});window.themehouse.sticky={sticky:g};e.a=g},function(g,e,h){var a=function(){function d(d,b){for(var c=0;c<b.length;c++){var a=b[c];a.enumerable=a.enumerable||!1;a.configurable=!0;"value"in a&&(a.writable=!0);Object.defineProperty(d,a.key,a)}}return function(c,b,a){b&&d(c.prototype,b);a&&d(c,a);return c}}();g=function(){function d(a){var b=this,c=a.settings;c=void 0===c?{}:c;var e=a.init;e=void 0===e?!1:e;a=a.commonVersion;a=void 0===a?"20180112":a;
if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");this.init=function(){b.initGet();b.initSet()};this.initGet=function(){if(b.settings.enabled){var a=b.settings.selectors.split(",");if(a.length){for(var d=0,c=a.length;d<c;d++){var e=a[d];if(e.length)for(var f=window.document.querySelectorAll(e),g=0,h=f.length;g<h;g++)b.eles.push({ele:f[g],selector:e,lastClass:"",height:-1,topOffset:-1,topRadius:!0,bottomRadius:!0})}b.resizeGet()}}};this.initSet=function(){b.settings.enabled&&
(b.resizeSet(),b.running=!0)};this.resize=function(){b.resizeGet();b.resizeSet()};this.resizeGet=function(){b.settings.enabled&&b.checkGet()};this.resizeSet=function(){b.settings.enabled&&b.checkSet()};this.check=function(){b.checkGet();b.checkSet()};this.checkGet=function(){if(b.settings.enabled)for(var a=0,d=b.eles.length;a<d;a++){var c=b.eles[a].ele;b.eles[a].height=c.offsetHeight;b.eles[a].width=c.offsetWidth;b.eles[a].topOffset=c.offsetTop}};this.checkSet=function(){if(b.settings.enabled)for(var a=
0,d=b.eles.length;a<d;a++){var c=b.eles[a];if(c.width===b.common.values.innerWidth)b.eles[a].topRadius=!1,b.eles[a].bottomRadius=!1;else for(var e=0;e<d;e++)if(a!==e){var f=b.eles[e];1>Math.abs(c.topOffset-(f.topOffset+f.height))&&(b.eles[a].topRadius=!1);1>Math.abs(c.topOffset+c.height-f.topOffset)&&(b.eles[a].bottomRadius=!1)}e=b.settings.defaultClass;c.topRadius||c.bottomRadius?c.topRadius?c.bottomRadius||(e=b.settings.noBottomClass):e=b.settings.noTopClass:e=b.settings.noBorderClass;e!==c.lastClass&&
(c.lastClass&&c.ele.classList.remove(c.lastClass),c.ele.classList.add(e),c.lastClass=e)}};this.running=!1;this.settings=Object.assign({enabled:!1,selectors:"",defaultClass:"uix_smartBorder--default",noTopClass:"uix_smartBorder--noTop",noBottomClass:"uix_smartBorder--noBottom",noBorderClass:"uix_smartBorder--noBoth"},c);this.commonVersion=a;this.common=window.themehouse.common[a];this.eles=[];e&&this.init()}a(d,[{key:"register",value:function(){this.settings.enabled&&(this.common.register({phase:"initGet",
addon:"TH_UIX_CheckRadius",func:this.initGet,order:100}),this.common.register({phase:"initSet",addon:"TH_UIX_CheckRadius",func:this.initSet,order:100}),this.common.register({phase:"resizeGet",addon:"TH_UIX_CheckRadius",func:this.resizeGet,order:10}),this.common.register({phase:"resizeSet",addon:"TH_UIX_CheckRadius",func:this.resizeSet,order:10}))}}]);return d}();"undefined"===typeof window.themehouse&&(window.themehouse={});window.themehouse.checkRadius={checkRadius:g};e.a=g}]);