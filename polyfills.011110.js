/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function e(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var n=arguments.length>2?arguments[2]:[];if(!1===i(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,n)}function r(t,e){return t[e]}function o(t,e){return e in t}function i(t){return"function"==typeof t}function c(e){if(null===e||e===t)throw TypeError();return e}function u(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function a(t){var e=u(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function f(e){if(null===e||e===t)throw TypeError();return Object(e)}function l(e,n){var r,o=(r=n,f(e)[r]);if(null===o||o===t)return t;if(!1===i(o))throw new TypeError("Method not callable: "+n);return o}function p(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function s(t){return"object"===p(t)&&("function"==typeof t&&!!t.prototype)}function y(e){if("object"!==p(e))return!1;var n="Symbol"in this&&"match"in this.Symbol?r(e,this.Symbol.match):t;if(n!==t)return function(t){return Boolean(t)}(n);try{var o=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=o}return!1}function b(e){var o=arguments.length>1?arguments[1]:t;if("object"===p(e)){if(arguments.length<2)var c="default";else o===String?c="string":o===Number&&(c="number");var u="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?l(e,this.Symbol.toPrimitive):t;if(u!==t){var a=n(u,e,[c]);if("object"!==p(a))return a;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===c&&(c="number"),function(t,e){if("string"===e)var o=["toString","valueOf"];else o=["valueOf","toString"];for(var c=0;c<o.length;++c){var u=r(t,o[c]);if(i(u)){var a=n(u,t);if("object"!==p(a))return a}}throw new TypeError("Cannot convert to primitive.")}(e,c)}return e}function h(t){switch(p(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return h(b(t,"string"));default:return String(t)}}var v,w,d,j,g;function O(t,e,n){var r=function(t,e,n){var r={value:n,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,r),!0}catch(t){return!1}}(t,e,n);if(!r)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(n)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return r}function m(t,e,n){var r={value:n,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,r)}function _(t,e){var n=arguments[2]||{},o=function(t,e){var n=r(t,"prototype");return"object"!==p(n)&&(n=e),n}(t,e),i=Object.create(o);for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&Object.defineProperty(i,c,{configurable:!0,enumerable:!1,writable:!0,value:n[c]});return i}function S(o,i){var c;if(1/i==-1/0&&(i=0),!1===(c=o,"[object Array]"===Object.prototype.toString.call(c)))return e(i);var u=r(o,"constructor");if("object"===p(u)&&null===(u="Symbol"in this&&"species"in this.Symbol?r(u,this.Symbol.species):t)&&(u=t),u===t)return e(i);if(!s(u))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!s(t))throw new TypeError("F must be a constructor.");if(!s(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(r))):n(t,_(e,Object.prototype),r)}(u,[i])}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(v=Object.defineProperty,w=Object.prototype.hasOwnProperty("__defineGetter__"),d="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,n){if(v&&(t===window||t===document||t===Element.prototype||t instanceof Element))return v(t,e,n);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var r=String(e),o="value"in n||"writable"in n,i="get"in n&&typeof n.get,c="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!w)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(d);Object.__defineGetter__.call(t,r,n.get)}else t[r]=n.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!w)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(d);Object.__defineSetter__.call(t,r,n.set)}return"value"in n&&(t[r]=n.value),t}),"bind"in Function.prototype||m(Function.prototype,"bind",(function(t){var e=Array,n=Object,r=e.prototype,o=function(){},c=r.slice,u=r.concat,a=r.push,f=Math.max,l=this;if(!i(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var p,s=c.call(arguments,1),y=function(){if(this instanceof p){var e=l.apply(this,u.call(s,c.call(arguments)));return n(e)===e?e:this}return l.apply(t,u.call(s,c.call(arguments)))},b=f(0,l.length-s.length),h=[],v=0;v<b;v++)a.call(h,"$"+v);return p=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(y),l.prototype&&(o.prototype=l.prototype,p.prototype=new o,o.prototype=null),p})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={test:0};return 0===Object.getOwnPropertyDescriptor(t,"test").value}catch(t){return!1}}()||function(){var t,e,n,r=Function.prototype.call,o=Object.prototype,i=r.bind(o.hasOwnProperty);function c(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){}}if((n=i(o,"__defineGetter__"))&&(t=r.bind(o.__lookupGetter__),e=r.bind(o.__lookupSetter__)),Object.defineProperty){var u=c({});if(!("undefined"==typeof document||c(document.createElement("div")))||!u)var a=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||a){m(Object,"getOwnPropertyDescriptor",(function(r,c){if("object"!=typeof r&&"function"!=typeof r||null===r)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+r);if(a)try{return a.call(Object,r,c)}catch(t){}if(i(r,c)){var u={enumerable:!0,configurable:!0};if(n){var f=r.__proto__;r.__proto__=o;var l=t(r,c),p=e(r,c);if(r.__proto__=f,l||p)return l&&(u.get=l),p&&(u.set=p),u}return u.value=r[c],u.writable=!0,u}}))}}(),"getPrototypeOf"in Object||m(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||m(Object,"keys",function(){"use strict";var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,o=!r.call({toString:null},"toString"),i=r.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var e=t.constructor;return e&&e.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!a["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();return function(r){var a,l,p,s="[object Function]"===n.call(r),y=(a=r,l=n.call(a),(p="[object Arguments]"===l)||(p="[object Array]"!==l&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===n.call(a.callee)),p),b="[object String]"===n.call(r),h=[];if(r===t||null===r)throw new TypeError("Cannot convert undefined or null to object");var v=i&&s;if(b&&r.length>0&&!e.call(r,0))for(var w=0;w<r.length;++w)h.push(String(w));if(y&&r.length>0)for(var d=0;d<r.length;++d)h.push(String(d));else for(var j in r)v&&"prototype"===j||!e.call(r,j)||h.push(String(j));if(o)for(var g=function(t){if("undefined"==typeof window||!f)return u(t);try{return u(t)}catch(t){return!1}}(r),O=0;O<c.length;++O)g&&"constructor"===c[O]||!e.call(r,c[O])||h.push(c[O]);return h}}()),"defineProperties"in Object||m(Object,"defineProperties",(function(e,n){if("object"!==p(e))throw new TypeError("Object.defineProperties called on non-object");for(var o=f(n),i=Object.keys(o),c=[],u=0;u<i.length;u++){var a=i[u],l=Object.getOwnPropertyDescriptor(o,a);if(l!==t&&l.enumerable){var s=r(o,a);c.push([a,s])}}for(u=0;u<c.length;u++){var y=c[u][0];s=c[u][1];Object.defineProperty(e,y,s)}return e})),"create"in Object||m(Object,"create",(function(t,e){if("object"!==p(t)&&"null"!==p(t))throw new TypeError("Object prototype may only be an Object or null");var n=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return n.constructor.prototype=t,1 in arguments?Object.defineProperties(n,e):n})),"map"in Array.prototype||m(Array.prototype,"map",(function(e){var c=f(this),u=a(r(c,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var l=arguments.length>1?arguments[1]:t,p=S(c,u),s=0;s<u;){var y=h(s),b=o(c,y);if(b){var v=r(c,y),w=n(e,l,[v,s,c]);O(p,y,w)}s+=1}return p})),"values"in Object||(j={}.toString,g="".split,m(Object,"values",(function(t){var e="[object String]"==j.call(t)?g.call(t,""):f(t);return Object.keys(e).map((function(t){return e[t]}))}))),"Promise"in this||function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=100)}({100:
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
function(t,e,n){(function(t){var e=n(/*! ./yaku */5);try{t.Promise=e,window.Promise=e}catch(t){}}).call(e,n(/*! ./../~/webpack/buildin/global.js */2))},2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},5:
/*!*********************!*\
  !*** ./src/yaku.js ***!
  \*********************/
function(e,n,r){(function(n){!function(){"use strict";function r(){return et[W][L]||N}function o(t){return t&&"object"==typeof t}function i(t){return"function"==typeof t}function c(t,e){return t instanceof e}function u(t,e,n){if(!e(t))throw s(n)}function a(){try{return P.apply(E,arguments)}catch(t){return V.e=t,V}}function f(t,e){return P=t,E=e,a}function l(t,e){function n(){for(var n=0;n<o;)e(r[n],r[n+1]),r[n++]=S,r[n++]=S;o=0,r.length>t&&(r.length=t)}var r=D(t),o=0;return function(t,e){r[o++]=t,r[o++]=e,2===o&&et.nextTick(n)}}function p(t,e){var n,r,o,u,a=0;if(!t)throw s(q);var l=t[et[W][H]];if(i(l))r=l.call(t);else{if(!i(t.next)){if(c(t,D)){for(n=t.length;a<n;)e(t[a],a++);return a}throw s(q)}r=t}for(;!(o=r.next()).done;)if((u=f(e)(o.value,a++))===V)throw i(r[Y])&&r[Y](),u.e;return a}function s(t){return new TypeError(t)}function y(t){return(t?"":z)+(new I).stack}function b(t,e){var n="on"+t.toLowerCase(),r=k[n];F&&F.listeners(t).length?t===Q?F.emit(t,e._v,e):F.emit(t,e):r?r({reason:e._v,promise:e}):et[t](e._v,e)}function h(t){return t&&t._s}function v(t){return h(t)?new t(Z):(e=new t((function(t,o){if(e)throw s();n=t,r=o})),u(n,i),u(r,i),e);var e,n,r}function w(t,e){var n=!1;return function(r){n||(n=!0,C&&(t[U]=y(!0)),e===G?O(t,r):g(t,e,r))}}function d(t,e){function n(t){return r.push(t.replace(/^\s+|\s+$/g,""))}var r=[];return C&&(e[U]&&n(e[U]),function t(e){e&&X in e&&(t(e._next),n(e[X]+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+r.join("\n")).replace(tt,"")}function j(t,e){return t(e)}function g(t,e,n){var r=0,o=t._c;if(t._s===R)for(t._s=e,t._v=n,e===A&&(C&&function(t){return c(t,I)}(n)&&(n.longStack=d(n,t)),rt(t));r<o;)nt(t,t[r++]);return t}function O(t,e){if(e===t&&e)return g(t,A,s(J)),t;if(e!==T&&(i(e)||o(e))){var n=f(m)(e);if(n===V)return g(t,A,n.e),t;i(n)?(C&&h(e)&&(t._next=e),h(e)?_(t,e,n):et.nextTick((function(){_(t,e,n)}))):g(t,G,e)}else g(t,G,e);return t}function m(t){return t.then}function _(t,e,n){var r=f(n,e)((function(n){e&&(e=T,O(t,n))}),(function(n){e&&(e=T,g(t,A,n))}));r===V&&e&&(g(t,A,r.e),e=T)}var S,P,E,T=null,x="object"==typeof self,k=x?self:n,$=k.Promise,F=k.process,M=k.console,C=!1,D=Array,I=Error,A=1,G=2,R=3,W="Symbol",H="iterator",L="species",N=W+"("+L+")",Y="return",B="_uh",X="_pt",U="_st",q="Invalid argument",z="\nFrom previous ",J="Chaining cycle detected for promise",K="rejectionHandled",Q="unhandledRejection",V={e:T},Z=function(){},tt=/^.+\/node_modules\/yaku\/.+\n?/gm,et=function(t){var e,n=this;if(!o(n)||n._s!==S)throw s("Invalid this");if(n._s=R,C&&(n[X]=y()),t!==Z){if(!i(t))throw s(q);(e=f(t)(w(n,G),w(n,A)))===V&&g(n,A,e.e)}};et.default=et,function(t,e){for(var n in e)t[n]=e[n]}(et.prototype,{then:function(e,n){if(this._s===t)throw s();return function(t,e,n,r){return i(n)&&(e._onFulfilled=n),i(r)&&(t[B]&&b(K,t),e._onRejected=r),C&&(e._p=t),t[t._c++]=e,t._s!==R&&nt(t,e),e}(this,v(et.speciesConstructor(this,et)),e,n)},catch:function(t){return this.then(S,t)},finally:function(t){return this.then((function(e){return et.resolve(t()).then((function(){return e}))}),(function(e){return et.resolve(t()).then((function(){throw e}))}))},_c:0,_p:T}),et.resolve=function(t){return h(t)?t:O(v(this),t)},et.reject=function(t){return g(v(this),A,t)},et.race=function(t){var e=this,n=v(e),r=function(t){g(n,G,t)},o=function(t){g(n,A,t)},i=f(p)(t,(function(t){e.resolve(t).then(r,o)}));return i===V?e.reject(i.e):n},et.all=function(t){function e(t){g(o,A,t)}var n,r=this,o=v(r),i=[];return(n=f(p)(t,(function(t,c){r.resolve(t).then((function(t){i[c]=t,--n||g(o,G,i)}),e)})))===V?r.reject(n.e):(n||g(o,G,[]),o)},et.Symbol=k[W]||{},f((function(){Object.defineProperty(et,r(),{get:function(){return this}})}))(),et.speciesConstructor=function(t,e){var n=t.constructor;return n&&n[r()]||e},et.unhandledRejection=function(t,e){M&&M.error("Uncaught (in promise)",C?e.longStack:d(t,e))},et.rejectionHandled=Z,et.enableLongStackTrace=function(){C=!0},et.nextTick=x?function(t){$?new $((function(t){t()})).then(t):setTimeout(t)}:F.nextTick,et._s=1;var nt=l(999,(function(t,e){var n,r;return(r=t._s!==A?e._onFulfilled:e._onRejected)===S?void g(e,t._s,t._v):(n=f(j)(r,t._v))===V?void g(e,A,n.e):void O(e,n)})),rt=l(9,(function(t){(function t(e){if(e._umark)return!0;e._umark=!0;for(var n,r=0,o=e._c;r<o;)if((n=e[r++])._onRejected||t(n))return!0})(t)||(t[B]=1,b(Q,t))}));try{e.exports=et}catch(t){k.Yaku=et}}()}).call(n,r(/*! ./../~/webpack/buildin/global.js */2))}}),"endsWith"in String.prototype||m(String.prototype,"endsWith",(function(e){"use strict";var n=arguments.length>1?arguments[1]:t,r=c(this),o=h(r),i=y(e);if(i)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var a=h(e),f=o.length,l=n===t?f:u(n),p=Math.min(Math.max(l,0),f),s=a.length,b=p-s;return!(b<0)&&o.substr(b,s)===a})),"includes"in String.prototype||m(String.prototype,"includes",(function(e){"use strict";var n=arguments.length>1?arguments[1]:t,r=c(this),o=h(r),i=y(e);if(i)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var a=h(e),f=u(n),l=o.length,p=Math.min(Math.max(f,0),l);return-1!==String.prototype.indexOf.call(o,a,p)}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});