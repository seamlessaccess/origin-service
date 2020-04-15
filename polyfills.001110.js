/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function n(t,n){var e=arguments.length>2?arguments[2]:[];if(!1===r(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(n,e)}function e(t,n){return t[n]}function r(t){return"function"==typeof t}function o(n){if(null===n||n===t)throw TypeError();return n}function i(t){var n=Number(t);return isNaN(n)?0:1/n==1/0||1/n==-1/0||n===1/0||n===-1/0?n:(n<0?-1:1)*Math.floor(Math.abs(n))}function u(n,e){return function(n){if(null===n||n===t)throw TypeError();return Object(n)}(n)[e]}function c(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function f(n){if("object"!==c(n))return!1;var r="Symbol"in this&&"match"in this.Symbol?e(n,this.Symbol.match):t;if(r!==t)return function(t){return Boolean(t)}(r);try{var o=n.lastIndex;return n.lastIndex=0,RegExp.prototype.exec.call(n),!0}catch(t){}finally{n.lastIndex=o}return!1}function a(o){var i=arguments.length>1?arguments[1]:t;if("object"===c(o)){if(arguments.length<2)var f="default";else i===String?f="string":i===Number&&(f="number");var a="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?function(n,e){var o=u(n,e);if(null===o||o===t)return t;if(!1===r(o))throw new TypeError("Method not callable: "+e);return o}(o,this.Symbol.toPrimitive):t;if(a!==t){var s=n(a,o,[f]);if("object"!==c(s))return s;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===f&&(f="number"),function(t,o){if("string"===o)var i=["toString","valueOf"];else i=["valueOf","toString"];for(var u=0;u<i.length;++u){var f=e(t,i[u]);if(r(f)){var a=n(f,t);if("object"!==c(a))return a}}throw new TypeError("Cannot convert to primitive.")}(o,f)}return o}function s(t){switch(c(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return s(a(t,"string"));default:return String(t)}}var l,h,p;function y(t,n,e){var r={value:e,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,n,r)}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(l=Object.defineProperty,h=Object.prototype.hasOwnProperty("__defineGetter__"),p="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,n,e){if(l&&(t===window||t===document||t===Element.prototype||t instanceof Element))return l(t,n,e);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(e instanceof Object))throw new TypeError("Property description must be an object");var r=String(n),o="value"in e||"writable"in e,i="get"in e&&typeof e.get,u="set"in e&&typeof e.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!h)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(p);Object.__defineGetter__.call(t,r,e.get)}else t[r]=e.value;if(u){if("function"!==u)throw new TypeError("Setter must be a function");if(!h)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(p);Object.__defineSetter__.call(t,r,e.set)}return"value"in e&&(t[r]=e.value),t}),"Promise"in this||function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=100)}({100:
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
function(t,n,e){(function(t){var n=e(/*! ./yaku */5);try{t.Promise=n,window.Promise=n}catch(t){}}).call(n,e(/*! ./../~/webpack/buildin/global.js */2))},2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},5:
/*!*********************!*\
  !*** ./src/yaku.js ***!
  \*********************/
function(n,e,r){(function(e){!function(){"use strict";function r(){return nt[H][B]||U}function o(t){return t&&"object"==typeof t}function i(t){return"function"==typeof t}function u(t,n){return t instanceof n}function c(t,n,e){if(!n(t))throw h(e)}function f(){try{return T.apply(E,arguments)}catch(t){return X.e=t,X}}function a(t,n){return T=t,E=n,f}function s(t,n){function e(){for(var e=0;e<o;)n(r[e],r[e+1]),r[e++]=x,r[e++]=x;o=0,r.length>t&&(r.length=t)}var r=G(t),o=0;return function(t,n){r[o++]=t,r[o++]=n,2===o&&nt.nextTick(e)}}function l(t,n){var e,r,o,c,f=0;if(!t)throw h(D);var s=t[nt[H][L]];if(i(s))r=s.call(t);else{if(!i(t.next)){if(u(t,G)){for(e=t.length;f<e;)n(t[f],f++);return f}throw h(D)}r=t}for(;!(o=r.next()).done;)if((c=a(n)(o.value,f++))===X)throw i(r[Y])&&r[Y](),c.e;return f}function h(t){return new TypeError(t)}function p(t){return(t?"":J)+(new I).stack}function y(t,n){var e="on"+t.toLowerCase(),r=k[e];C&&C.listeners(t).length?t===V?C.emit(t,n._v,n):C.emit(t,n):r?r({reason:n._v,promise:n}):nt[t](n._v,n)}function v(t){return t&&t._s}function b(t){return v(t)?new t(Z):(n=new t((function(t,o){if(n)throw h();e=t,r=o})),c(e,i),c(r,i),n);var n,e,r}function d(t,n){var e=!1;return function(r){e||(e=!0,R&&(t[z]=p(!0)),n===W?_(t,r):g(t,n,r))}}function w(t,n){function e(t){return r.push(t.replace(/^\s+|\s+$/g,""))}var r=[];return R&&(n[z]&&e(n[z]),function t(n){n&&q in n&&(t(n._next),e(n[q]+""),t(n._p))}(n)),(t&&t.stack?t.stack:t)+("\n"+r.join("\n")).replace(tt,"")}function m(t,n){return t(n)}function g(t,n,e){var r=0,o=t._c;if(t._s===A)for(t._s=n,t._v=e,n===N&&(R&&function(t){return u(t,I)}(e)&&(e.longStack=w(e,t)),rt(t));r<o;)et(t,t[r++]);return t}function _(t,n){if(n===t&&n)return g(t,N,h(K)),t;if(n!==O&&(i(n)||o(n))){var e=a(j)(n);if(e===X)return g(t,N,e.e),t;i(e)?(R&&v(n)&&(t._next=n),v(n)?S(t,n,e):nt.nextTick((function(){S(t,n,e)}))):g(t,W,n)}else g(t,W,n);return t}function j(t){return t.then}function S(t,n,e){var r=a(e,n)((function(e){n&&(n=O,_(t,e))}),(function(e){n&&(n=O,g(t,N,e))}));r===X&&n&&(g(t,N,r.e),n=O)}var x,T,E,O=null,P="object"==typeof self,k=P?self:e,M=k.Promise,C=k.process,F=k.console,R=!1,G=Array,I=Error,N=1,W=2,A=3,H="Symbol",L="iterator",B="species",U=H+"("+B+")",Y="return",$="_uh",q="_pt",z="_st",D="Invalid argument",J="\nFrom previous ",K="Chaining cycle detected for promise",Q="rejectionHandled",V="unhandledRejection",X={e:O},Z=function(){},tt=/^.+\/node_modules\/yaku\/.+\n?/gm,nt=function(t){var n,e=this;if(!o(e)||e._s!==x)throw h("Invalid this");if(e._s=A,R&&(e[q]=p()),t!==Z){if(!i(t))throw h(D);(n=a(t)(d(e,W),d(e,N)))===X&&g(e,N,n.e)}};nt.default=nt,function(t,n){for(var e in n)t[e]=n[e]}(nt.prototype,{then:function(n,e){if(this._s===t)throw h();return function(t,n,e,r){return i(e)&&(n._onFulfilled=e),i(r)&&(t[$]&&y(Q,t),n._onRejected=r),R&&(n._p=t),t[t._c++]=n,t._s!==A&&et(t,n),n}(this,b(nt.speciesConstructor(this,nt)),n,e)},catch:function(t){return this.then(x,t)},finally:function(t){return this.then((function(n){return nt.resolve(t()).then((function(){return n}))}),(function(n){return nt.resolve(t()).then((function(){throw n}))}))},_c:0,_p:O}),nt.resolve=function(t){return v(t)?t:_(b(this),t)},nt.reject=function(t){return g(b(this),N,t)},nt.race=function(t){var n=this,e=b(n),r=function(t){g(e,W,t)},o=function(t){g(e,N,t)},i=a(l)(t,(function(t){n.resolve(t).then(r,o)}));return i===X?n.reject(i.e):e},nt.all=function(t){function n(t){g(o,N,t)}var e,r=this,o=b(r),i=[];return(e=a(l)(t,(function(t,u){r.resolve(t).then((function(t){i[u]=t,--e||g(o,W,i)}),n)})))===X?r.reject(e.e):(e||g(o,W,[]),o)},nt.Symbol=k[H]||{},a((function(){Object.defineProperty(nt,r(),{get:function(){return this}})}))(),nt.speciesConstructor=function(t,n){var e=t.constructor;return e&&e[r()]||n},nt.unhandledRejection=function(t,n){F&&F.error("Uncaught (in promise)",R?n.longStack:w(t,n))},nt.rejectionHandled=Z,nt.enableLongStackTrace=function(){R=!0},nt.nextTick=P?function(t){M?new M((function(t){t()})).then(t):setTimeout(t)}:C.nextTick,nt._s=1;var et=s(999,(function(t,n){var e,r;return(r=t._s!==N?n._onFulfilled:n._onRejected)===x?void g(n,t._s,t._v):(e=a(m)(r,t._v))===X?void g(n,N,e.e):void _(n,e)})),rt=s(9,(function(t){(function t(n){if(n._umark)return!0;n._umark=!0;for(var e,r=0,o=n._c;r<o;)if((e=n[r++])._onRejected||t(e))return!0})(t)||(t[$]=1,y(V,t))}));try{n.exports=nt}catch(t){k.Yaku=nt}}()}).call(e,r(/*! ./../~/webpack/buildin/global.js */2))}}),"endsWith"in String.prototype||y(String.prototype,"endsWith",(function(n){"use strict";var e=arguments.length>1?arguments[1]:t,r=o(this),u=s(r),c=f(n);if(c)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var a=s(n),l=u.length,h=e===t?l:i(e),p=Math.min(Math.max(h,0),l),y=a.length,v=p-y;return!(v<0)&&u.substr(v,y)===a})),"includes"in String.prototype||y(String.prototype,"includes",(function(n){"use strict";var e=arguments.length>1?arguments[1]:t,r=o(this),u=s(r),c=f(n);if(c)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var a=s(n),l=i(e),h=u.length,p=Math.min(Math.max(l,0),h);return-1!==String.prototype.indexOf.call(u,a,p)}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});