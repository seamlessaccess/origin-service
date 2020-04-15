/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function e(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var n=arguments.length>2?arguments[2]:[];if(!1===i(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,n)}function r(t,e){return t[e]}function o(t,e){return e in t}function i(t){return"function"==typeof t}function c(e){if(null===e||e===t)throw TypeError();return e}function a(t){return Boolean(t)}function u(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function s(t){var e=u(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function l(e){if(null===e||e===t)throw TypeError();return Object(e)}function f(e,n){var r,o=(r=n,l(e)[r]);if(null===o||o===t)return t;if(!1===i(o))throw new TypeError("Method not callable: "+n);return o}function p(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function h(t){return"object"===p(t)&&("function"==typeof t&&!!t.prototype)}function y(e){if("object"!==p(e))return!1;var n="Symbol"in this&&"match"in this.Symbol?r(e,this.Symbol.match):t;if(n!==t)return a(n);try{var o=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=o}return!1}function d(e){var o=arguments.length>1?arguments[1]:t;if("object"===p(e)){if(arguments.length<2)var c="default";else o===String?c="string":o===Number&&(c="number");var a="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?f(e,this.Symbol.toPrimitive):t;if(a!==t){var u=n(a,e,[c]);if("object"!==p(u))return u;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===c&&(c="number"),function(t,e){if("string"===e)var o=["toString","valueOf"];else o=["valueOf","toString"];for(var c=0;c<o.length;++c){var a=r(t,o[c]);if(i(a)){var u=n(a,t);if("object"!==p(u))return u}}throw new TypeError("Cannot convert to primitive.")}(e,c)}return e}function b(t){switch(p(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return b(d(t,"string"));default:return String(t)}}var v,m,w;function g(t,e,n){var r=function(t,e,n){var r={value:n,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,r),!0}catch(t){return!1}}(t,e,n);if(!r)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(n)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return r}function E(t,e,n){var r={value:n,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,r)}if("document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document)),"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,r=Element.prototype=n.appendChild(n.createElement("*")),o={},i=function(t,e){var n,r,c,a=t.childNodes||[],u=-1;if(1===t.nodeType&&t.constructor!==Element)for(n in t.constructor=Element,o)r=o[n],t[n]=r;for(;c=e&&a[++u];)i(c,e);return t},c=document.getElementsByTagName("*"),a=document.createElement,u=100;r.attachEvent("onpropertychange",(function(t){for(var e,n=t.propertyName,i=!o.hasOwnProperty(n),a=r[n],u=o[n],s=-1;e=c[++s];)1===e.nodeType&&(i||e[n]===u)&&(e[n]=a);o[n]=a})),r.constructor=Element,r.hasAttribute||(r.hasAttribute=function(t){return null!==this.getAttribute(t)}),s()||(document.onreadystatechange=s,t=setInterval(s,25)),document.createElement=function(t){var e=a(String(t).toLowerCase());return i(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function s(){return u--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(i(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(v=Object.defineProperty,m=Object.prototype.hasOwnProperty("__defineGetter__"),w="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,n){if(v&&(t===window||t===document||t===Element.prototype||t instanceof Element))return v(t,e,n);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var r=String(e),o="value"in n||"writable"in n,i="get"in n&&typeof n.get,c="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!m)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(w);Object.__defineGetter__.call(t,r,n.get)}else t[r]=n.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!m)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(w);Object.__defineSetter__.call(t,r,n.set)}return"value"in n&&(t[r]=n.value),t}),"findIndex"in Array.prototype||E(Array.prototype,"findIndex",(function(e){var o=l(this),c=s(r(o,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=0;f<c;){var p=b(f),h=r(o,p),y=a(n(e,u,[h,f,o]));if(y)return f;f+=1}return-1})),"forEach"in Array.prototype||E(Array.prototype,"forEach",(function(e){var c=l(this),a=c instanceof String?c.split(""):c,u=s(r(c,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var f=arguments.length>1?arguments[1]:t,p=0;p<u;){var h=b(p),y=o(a,h);if(y){var d=r(a,h);n(e,f,[d,p,c])}p+=1}return t})),"bind"in Function.prototype||E(Function.prototype,"bind",(function(t){var e=Array,n=Object,r=e.prototype,o=function(){},c=r.slice,a=r.concat,u=r.push,s=Math.max,l=this;if(!i(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var f,p=c.call(arguments,1),h=function(){if(this instanceof f){var e=l.apply(this,a.call(p,c.call(arguments)));return n(e)===e?e:this}return l.apply(t,a.call(p,c.call(arguments)))},y=s(0,l.length-p.length),d=[],b=0;b<y;b++)u.call(d,"$"+b);return f=Function("binder","return function ("+d.join(",")+"){ return binder.apply(this, arguments); }")(h),l.prototype&&(o.prototype=l.prototype,f.prototype=new o,o.prototype=null),f})),"freeze"in Object||E(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={test:0};return 0===Object.getOwnPropertyDescriptor(t,"test").value}catch(t){return!1}}()||function(){var t,e,n,r=Function.prototype.call,o=Object.prototype,i=r.bind(o.hasOwnProperty);function c(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){}}if((n=i(o,"__defineGetter__"))&&(t=r.bind(o.__lookupGetter__),e=r.bind(o.__lookupSetter__)),Object.defineProperty){var a=c({});if(!("undefined"==typeof document||c(document.createElement("div")))||!a)var u=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||u){E(Object,"getOwnPropertyDescriptor",(function(r,c){if("object"!=typeof r&&"function"!=typeof r||null===r)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+r);if(u)try{return u.call(Object,r,c)}catch(t){}if(i(r,c)){var a={enumerable:!0,configurable:!0};if(n){var s=r.__proto__;r.__proto__=o;var l=t(r,c),f=e(r,c);if(r.__proto__=s,l||f)return l&&(a.get=l),f&&(a.set=f),a}return a.value=r[c],a.writable=!0,a}}))}}(),!("getOwnPropertyNames"in Object)){var j={}.toString,_="".split;E(Object,"getOwnPropertyNames",(function(t){var e,n=[],r=["length","name","arguments","caller","prototype","observe","unobserve"];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(e in t="[object String]"==j.call(t)?_.call(t,""):Object(t))Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);for(var o=0,i=r.length;o<i;o++)r[o]in t&&n.push(r[o]);return n}))}function O(t,e){var n=arguments[2]||{},o=function(t,e){var n=r(t,"prototype");return"object"!==p(n)&&(n=e),n}(t,e),i=Object.create(o);for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&Object.defineProperty(i,c,{configurable:!0,enumerable:!1,writable:!0,value:n[c]});return i}function T(o,i){var c;if(1/i==-1/0&&(i=0),!1===(c=o,"[object Array]"===Object.prototype.toString.call(c)))return e(i);var a=r(o,"constructor");if("object"===p(a)&&null===(a="Symbol"in this&&"species"in this.Symbol?r(a,this.Symbol.species):t)&&(a=t),a===t)return e(i);if(!h(a))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!h(t))throw new TypeError("F must be a constructor.");if(!h(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(r))):n(t,O(e,Object.prototype),r)}(a,[i])}"getPrototypeOf"in Object||E(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||E(Object,"keys",function(){"use strict";var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,o=!r.call({toString:null},"toString"),i=r.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},s=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!u["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{a(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();return function(r){var u,l,f,p="[object Function]"===n.call(r),h=(u=r,l=n.call(u),(f="[object Arguments]"===l)||(f="[object Array]"!==l&&null!==u&&"object"==typeof u&&"number"==typeof u.length&&u.length>=0&&"[object Function]"===n.call(u.callee)),f),y="[object String]"===n.call(r),d=[];if(r===t||null===r)throw new TypeError("Cannot convert undefined or null to object");var b=i&&p;if(y&&r.length>0&&!e.call(r,0))for(var v=0;v<r.length;++v)d.push(String(v));if(h&&r.length>0)for(var m=0;m<r.length;++m)d.push(String(m));else for(var w in r)b&&"prototype"===w||!e.call(r,w)||d.push(String(w));if(o)for(var g=function(t){if("undefined"==typeof window||!s)return a(t);try{return a(t)}catch(t){return!1}}(r),E=0;E<c.length;++E)g&&"constructor"===c[E]||!e.call(r,c[E])||d.push(c[E]);return d}}()),"defineProperties"in Object||E(Object,"defineProperties",(function(e,n){if("object"!==p(e))throw new TypeError("Object.defineProperties called on non-object");for(var o=l(n),i=Object.keys(o),c=[],a=0;a<i.length;a++){var u=i[a],s=Object.getOwnPropertyDescriptor(o,u);if(s!==t&&s.enumerable){var f=r(o,u);c.push([u,f])}}for(a=0;a<c.length;a++){var h=c[a][0];f=c[a][1];Object.defineProperty(e,h,f)}return e})),"create"in Object||E(Object,"create",(function(t,e){if("object"!==p(t)&&"null"!==p(t))throw new TypeError("Object prototype may only be an Object or null");var n=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return n.constructor.prototype=t,1 in arguments?Object.defineProperties(n,e):n})),"filter"in Array.prototype||E(Array.prototype,"filter",(function(e){var c=l(this),u=s(r(c,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var f=arguments.length>1?arguments[1]:t,p=T(c,0),h=0,y=0;h<u;){var d=b(h),v=o(c,d);if(v){var m=r(c,d),w=a(n(e,f,[m,h,c]));w&&(g(p,b(y),m),y+=1)}h+=1}return p})),"map"in Array.prototype||E(Array.prototype,"map",(function(e){var c=l(this),a=s(r(c,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=T(c,a),p=0;p<a;){var h=b(p),y=o(c,h);if(y){var d=r(c,h),v=n(e,u,[d,p,c]);g(f,h,v)}p+=1}return f})),"values"in Object||function(){var t={}.toString,e="".split;E(Object,"values",(function(n){var r="[object String]"==t.call(n)?e.call(n,""):l(n);return Object.keys(r).map((function(t){return r[t]}))}))}(),"Promise"in this||function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=100)}({100:
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
function(e,n,r){(function(n){!function(){"use strict";function r(){return et[N][C]||U}function o(t){return t&&"object"==typeof t}function i(t){return"function"==typeof t}function c(t,e){return t instanceof e}function a(t,e,n){if(!e(t))throw p(n)}function u(){try{return T.apply(S,arguments)}catch(t){return Q.e=t,Q}}function s(t,e){return T=t,S=e,u}function l(t,e){function n(){for(var n=0;n<o;)e(r[n],r[n+1]),r[n++]=O,r[n++]=O;o=0,r.length>t&&(r.length=t)}var r=B(t),o=0;return function(t,e){r[o++]=t,r[o++]=e,2===o&&et.nextTick(n)}}function f(t,e){var n,r,o,a,u=0;if(!t)throw p(Y);var l=t[et[N][q]];if(i(l))r=l.call(t);else{if(!i(t.next)){if(c(t,B)){for(n=t.length;u<n;)e(t[u],u++);return u}throw p(Y)}r=t}for(;!(o=r.next()).done;)if((a=s(e)(o.value,u++))===Q)throw i(r[$])&&r[$](),a.e;return u}function p(t){return new TypeError(t)}function h(t){return(t?"":z)+(new H).stack}function y(t,e){var n="on"+t.toLowerCase(),r=A[n];L&&L.listeners(t).length?t===K?L.emit(t,e._v,e):L.emit(t,e):r?r({reason:e._v,promise:e}):et[t](e._v,e)}function d(t){return t&&t._s}function b(t){return d(t)?new t(Z):(e=new t((function(t,o){if(e)throw p();n=t,r=o})),a(n,i),a(r,i),e);var e,n,r}function v(t,e){var n=!1;return function(r){n||(n=!0,R&&(t[G]=h(!0)),e===I?E(t,r):g(t,e,r))}}function m(t,e){function n(t){return r.push(t.replace(/^\s+|\s+$/g,""))}var r=[];return R&&(e[G]&&n(e[G]),function t(e){e&&W in e&&(t(e._next),n(e[W]+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+r.join("\n")).replace(tt,"")}function w(t,e){return t(e)}function g(t,e,n){var r=0,o=t._c;if(t._s===F)for(t._s=e,t._v=n,e===k&&(R&&function(t){return c(t,H)}(n)&&(n.longStack=m(n,t)),rt(t));r<o;)nt(t,t[r++]);return t}function E(t,e){if(e===t&&e)return g(t,k,p(V)),t;if(e!==P&&(i(e)||o(e))){var n=s(j)(e);if(n===Q)return g(t,k,n.e),t;i(n)?(R&&d(e)&&(t._next=e),d(e)?_(t,e,n):et.nextTick((function(){_(t,e,n)}))):g(t,I,e)}else g(t,I,e);return t}function j(t){return t.then}function _(t,e,n){var r=s(n,e)((function(n){e&&(e=P,E(t,n))}),(function(n){e&&(e=P,g(t,k,n))}));r===Q&&e&&(g(t,k,r.e),e=P)}var O,T,S,P=null,x="object"==typeof self,A=x?self:n,D=A.Promise,L=A.process,M=A.console,R=!1,B=Array,H=Error,k=1,I=2,F=3,N="Symbol",q="iterator",C="species",U=N+"("+C+")",$="return",X="_uh",W="_pt",G="_st",Y="Invalid argument",z="\nFrom previous ",V="Chaining cycle detected for promise",J="rejectionHandled",K="unhandledRejection",Q={e:P},Z=function(){},tt=/^.+\/node_modules\/yaku\/.+\n?/gm,et=function(t){var e,n=this;if(!o(n)||n._s!==O)throw p("Invalid this");if(n._s=F,R&&(n[W]=h()),t!==Z){if(!i(t))throw p(Y);(e=s(t)(v(n,I),v(n,k)))===Q&&g(n,k,e.e)}};et.default=et,function(t,e){for(var n in e)t[n]=e[n]}(et.prototype,{then:function(e,n){if(this._s===t)throw p();return function(t,e,n,r){return i(n)&&(e._onFulfilled=n),i(r)&&(t[X]&&y(J,t),e._onRejected=r),R&&(e._p=t),t[t._c++]=e,t._s!==F&&nt(t,e),e}(this,b(et.speciesConstructor(this,et)),e,n)},catch:function(t){return this.then(O,t)},finally:function(t){return this.then((function(e){return et.resolve(t()).then((function(){return e}))}),(function(e){return et.resolve(t()).then((function(){throw e}))}))},_c:0,_p:P}),et.resolve=function(t){return d(t)?t:E(b(this),t)},et.reject=function(t){return g(b(this),k,t)},et.race=function(t){var e=this,n=b(e),r=function(t){g(n,I,t)},o=function(t){g(n,k,t)},i=s(f)(t,(function(t){e.resolve(t).then(r,o)}));return i===Q?e.reject(i.e):n},et.all=function(t){function e(t){g(o,k,t)}var n,r=this,o=b(r),i=[];return(n=s(f)(t,(function(t,c){r.resolve(t).then((function(t){i[c]=t,--n||g(o,I,i)}),e)})))===Q?r.reject(n.e):(n||g(o,I,[]),o)},et.Symbol=A[N]||{},s((function(){Object.defineProperty(et,r(),{get:function(){return this}})}))(),et.speciesConstructor=function(t,e){var n=t.constructor;return n&&n[r()]||e},et.unhandledRejection=function(t,e){M&&M.error("Uncaught (in promise)",R?e.longStack:m(t,e))},et.rejectionHandled=Z,et.enableLongStackTrace=function(){R=!0},et.nextTick=x?function(t){D?new D((function(t){t()})).then(t):setTimeout(t)}:L.nextTick,et._s=1;var nt=l(999,(function(t,e){var n,r;return(r=t._s!==k?e._onFulfilled:e._onRejected)===O?void g(e,t._s,t._v):(n=s(w)(r,t._v))===Q?void g(e,k,n.e):void E(e,n)})),rt=l(9,(function(t){(function t(e){if(e._umark)return!0;e._umark=!0;for(var n,r=0,o=e._c;r<o;)if((n=e[r++])._onRejected||t(n))return!0})(t)||(t[X]=1,y(K,t))}));try{e.exports=et}catch(t){A.Yaku=et}}()}).call(n,r(/*! ./../~/webpack/buildin/global.js */2))}}),"endsWith"in String.prototype||E(String.prototype,"endsWith",(function(e){"use strict";var n=arguments.length>1?arguments[1]:t,r=c(this),o=b(r),i=y(e);if(i)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var a=b(e),s=o.length,l=n===t?s:u(n),f=Math.min(Math.max(l,0),s),p=a.length,h=f-p;return!(h<0)&&o.substr(h,p)===a})),"includes"in String.prototype||E(String.prototype,"includes",(function(e){"use strict";var n=arguments.length>1?arguments[1]:t,r=c(this),o=b(r),i=y(e);if(i)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var a=b(e),s=u(n),l=o.length,f=Math.min(Math.max(s,0),l);return-1!==String.prototype.indexOf.call(o,a,f)})),"Symbol"in this&&0===this.Symbol.length||function(t,e,n){"use strict";var r,o=0,i=""+Math.random(),c="__symbol:",a=c.length,u="__symbol@@"+i,s="defineProperty",l="defineProperties",f="getOwnPropertyNames",p="getOwnPropertyDescriptor",h="propertyIsEnumerable",y=t.prototype,d=y.hasOwnProperty,b=y[h],v=y.toString,m=Array.prototype.concat,w=t.getOwnPropertyNames?t.getOwnPropertyNames(window):[],g=t[f],E=function(t){if("[object Window]"===v.call(t))try{return g(t)}catch(t){return m.call([],w)}return g(t)},j=t[p],_=t.create,O=t.keys,T=t.freeze||t,S=t[s],P=t[l],x=j(t,f),A=function(t,e,n){if(!d.call(t,u))try{S(t,u,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[u]={}}t[u]["@@"+e]=n},D=function(t,e){var n=_(t);return E(e).forEach((function(t){B.call(e,t)&&q(n,t,e[t])})),n},L=function(){},M=function(t){return t!=u&&!d.call(I,t)},R=function(t){return t!=u&&d.call(I,t)},B=function(t){var e=""+t;return R(e)?d.call(this,e)&&this[u]["@@"+e]:b.call(this,t)},H=function(e){var n={enumerable:!1,configurable:!0,get:L,set:function(t){r(this,e,{enumerable:!1,configurable:!0,writable:!0,value:t}),A(this,e,!0)}};try{S(y,e,n)}catch(t){y[e]=n.value}return T(I[e]=S(t(e),"constructor",F))},k=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return H(c.concat(e||"",i,++o))},I=_(null),F={value:k},N=function(t){return I[t]},q=function(t,e,n){var o=""+e;return R(o)?(r(t,o,n.enumerable?function(t){var e=_(t);return e.enumerable=!1,e}(n):n),A(t,o,!!n.enumerable)):S(t,e,n),t},C=function(t){return E(t).filter(t===y?(e=t,function(t){return d.call(e,u)&&d.call(e[u],"@@"+t)}):R).map(N);var e};x.value=q,S(t,s,x),x.value=C,S(t,"getOwnPropertySymbols",x),x.value=function(t){return E(t).filter(M)},S(t,f,x),x.value=function(t,e){var n=C(e);return n.length?O(e).concat(n).forEach((function(n){B.call(e,n)&&q(t,n,e[n])})):P(t,e),t},S(t,l,x),x.value=B,S(y,h,x),x.value=k,S(n,"Symbol",x),x.value=function(t){var e=c.concat(c,t,i);return e in y?I[e]:H(e)},S(k,"for",x),x.value=function(t){if(M(t))throw new TypeError(t+" is not a symbol");return d.call(I,t)?t.slice(2*a,-i.length):void 0},S(k,"keyFor",x),x.value=function(t,e){var n=j(t,e);return n&&R(e)&&(n.enumerable=B.call(t,e)),n},S(t,p,x),x.value=function(t,e){return 1===arguments.length||void 0===e?_(t):D(t,e)},S(t,"create",x);var U=null===function(){return this}.call(null);x.value=U?function(){var t=v.call(this);return"[object String]"===t&&R(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=v.call(this);return"[object String]"===t&&R(this)?"[object Symbol]":t},S(y,"toString",x),r=function(t,e,n){var r=j(y,e);delete y[e],S(t,e,n),t!==y&&S(y,e,r)}}(Object,0,this),"Symbol"in this&&"iterator"in this.Symbol||Object.defineProperty(Symbol,"iterator",{value:Symbol("iterator")}),"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this),function(t){if(!("Event"in t))return!1;try{return new Event("click"),!0}catch(t){return!1}}(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;o.NONE=0,o.CAPTURING_PHASE=1,o.AT_TARGET=2,o.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=o,n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],o=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,o=t._events[e.type].list,i=o.slice(),c=-1,a=i.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++c<a&&!e.cancelImmediate;)c in i&&-1!==r(o,n=i[c])&&"function"==typeof n&&n.call(t,e)},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(o)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],o=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=r(e._events[n].list,o))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var r=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+n,r)};this.attachEvent("on"+n,r)}this.fireEvent("on"+n,t)}catch(r){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new o("DOMContentLoaded",{bubbles:!0}))})))}function r(t,e){for(var n=-1,r=t.length;++n<r;)if(n in t&&t[n]===e)return n;return-1}function o(e,n){if(!e)throw new Error("Not enough arguments");var r;if("createEvent"in document){r=document.createEvent("Event");var o=!(!n||n.bubbles===t)&&n.bubbles,i=!(!n||n.cancelable===t)&&n.cancelable;return r.initEvent(e,o,i),r}return(r=document.createEventObject()).type=e,r.bubbles=!(!n||n.bubbles===t)&&n.bubbles,r.cancelable=!(!n||n.cancelable===t)&&n.cancelable,r}}(),"XMLHttpRequest"in this&&"prototype"in this.XMLHttpRequest&&"addEventListener"in this.XMLHttpRequest.prototype||function(t,e){t.XMLHttpRequest=function(){var t=this,n=t._request=e?new e:new ActiveXObject("MSXML2.XMLHTTP.3.0");n.onreadystatechange=function(){t.readyState=n.readyState;var e=4===t.readyState;t.response=t.responseText=e?n.responseText:null,t.status=e?n.status:null,t.statusText=e?n.statusText:null,t.dispatchEvent(new Event("readystatechange")),e&&t.dispatchEvent(new Event("load"))},"onerror"in n&&(n.onerror=function(){t.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var n=t.XMLHttpRequest.prototype;n.addEventListener=t.addEventListener,n.removeEventListener=t.removeEventListener,n.dispatchEvent=t.dispatchEvent,n.abort=function(){return this._request()},n.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},n.getResponseHeader=function(t){return this._request.getResponseHeader(t)},n.open=function(t,e){this._request.open(t,e,arguments[2],arguments[3],arguments[4])},n.overrideMimeType=function(t){this._request.overrideMimeType(t)},n.send=function(){this._request.send(0 in arguments?arguments[0]:null)},n.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(this,this.XMLHttpRequest),"fetch"in this||function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(e){"use strict";var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function a(e){var r={next:function(){var n=e.shift();return{done:n===t,value:n}}};return n.iterable&&(r[Symbol.iterator]=function(){return r}),r}function u(t){this.map={},t instanceof u?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function f(t){var e=new FileReader,n=l(e);return e.readAsArrayBuffer(t),n}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t,e,n,r=s(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=l(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=i(t),e=c(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},u.prototype.delete=function(t){delete this.map[i(t)]},u.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},u.prototype.set=function(t,e){this.map[i(t)]=c(e)},u.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},u.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),a(t)},u.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),a(t)},u.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),a(t)},n.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function d(t,e){var n,r,o=(e=e||{}).body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),y.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function v(e,n){n||(n={}),this.type="default",this.status=n.status===t?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new u(n.headers),this.url=n.url||"",this._initBody(e)}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},h.call(d.prototype),h.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];v.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},e.DOMException=self.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function w(t,r){return new Promise((function(o,i){var c=new d(t,r);if(c.signal&&c.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;o(new v(r,n))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(c.method,c.url,!0),"include"===c.credentials?a.withCredentials=!0:"omit"===c.credentials&&(a.withCredentials=!1),"responseType"in a&&n.blob&&(a.responseType="blob"),c.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),c.signal&&(c.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&c.signal.removeEventListener("abort",s)}),a.send(void 0===c._bodyInit?null:c._bodyInit)}))}w.polyfill=!0,self.fetch=w,self.Headers=u,self.Request=d,self.Response=v,e.Headers=u,e.Request=d,e.Response=v,e.fetch=w,Object.defineProperty(e,"__esModule",{value:!0})}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});