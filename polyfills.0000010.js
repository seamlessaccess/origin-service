/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(e,t){function r(e,t){var r=arguments.length>2?arguments[2]:[];if(!1===o(e))throw new TypeError(Object.prototype.toString.call(e)+"is not a function.");return e.apply(t,r)}function n(e,t){return e[t]}function o(e){return"function"==typeof e}function i(e){if(null==e)throw TypeError(Object.prototype.toString.call(e)+" is not coercible to Object.");return e}function c(e){var t=Number(e);return isNaN(t)?0:1/t==1/0||1/t==-1/0||t===1/0||t===-1/0?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function a(e,t){return function(e){if(null==e)throw TypeError();return Object(e)}(e)[t]}function u(e,t){var r=a(e,t);if(null!=r){if(!1===o(r))throw new TypeError("Method not callable: "+t);return r}}function l(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in e&&(t instanceof e.Symbol||t.constructor===e.Symbol)?"symbol":"object"}}function f(t){if("object"!==l(t))return!1;var r="Symbol"in e&&"match"in e.Symbol?n(t,e.Symbol.match):void 0;if(void 0!==r)return function(e){return Boolean(e)}(r);try{var o=t.lastIndex;return t.lastIndex=0,RegExp.prototype.exec.call(t),!0}catch(e){}finally{t.lastIndex=o}return!1}function b(e,t){if("string"===t)var i=["toString","valueOf"];else i=["valueOf","toString"];for(var c=0;c<i.length;++c){var a=n(e,i[c]);if(o(a)){var u=r(a,e);if("object"!==l(u))return u}}throw new TypeError("Cannot convert to primitive.")}function s(t){switch(l(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return s(function(t){var n=arguments.length>1?arguments[1]:void 0;if("object"===l(t)){if(arguments.length<2)var o="default";else n===String?o="string":n===Number&&(o="number");var i="function"==typeof e.Symbol&&"symbol"==typeof e.Symbol.toPrimitive?u(t,e.Symbol.toPrimitive):void 0;if(void 0!==i){var c=r(i,t,[o]);if("object"!==l(c))return c;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===o&&(o="number"),b(t,o)}return t}(t,String));default:return String(t)}}var p,y,v;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(e){return!1}}()||(p=Object.defineProperty,y=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),v="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(e,t,r){if(p&&(e===window||e===document||e===Element.prototype||e instanceof Element))return p(e,t,r);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(t),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,c="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!y)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(v);Object.__defineGetter__.call(e,n,r.get)}else e[n]=r.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!y)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(v);Object.__defineSetter__.call(e,n,r.set)}return"value"in r&&(e[n]=r.value),e}),"includes"in String.prototype||function(e,t,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,t,n)}(String.prototype,"includes",(function(e){"use strict";var t=arguments.length>1?arguments[1]:void 0,r=i(this),n=s(r),o=f(e);if(o)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var a=s(e),u=c(t),l=n.length,b=Math.min(Math.max(u,0),l);return-1!==String.prototype.indexOf.call(n,a,b)}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});