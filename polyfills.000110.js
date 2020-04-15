/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function e(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===n(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function r(t,e){return t[e]}function n(t){return"function"==typeof t}function o(e){if(null===e||e===t)throw TypeError();return e}function i(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function a(e,r){return function(e){if(null===e||e===t)throw TypeError();return Object(e)}(e)[r]}function u(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function c(e){if("object"!==u(e))return!1;var n="Symbol"in this&&"match"in this.Symbol?r(e,this.Symbol.match):t;if(n!==t)return function(t){return Boolean(t)}(n);try{var o=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=o}return!1}function l(o){var i=arguments.length>1?arguments[1]:t;if("object"===u(o)){if(arguments.length<2)var c="default";else i===String?c="string":i===Number&&(c="number");var l="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?function(e,r){var o=a(e,r);if(null===o||o===t)return t;if(!1===n(o))throw new TypeError("Method not callable: "+r);return o}(o,this.Symbol.toPrimitive):t;if(l!==t){var f=e(l,o,[c]);if("object"!==u(f))return f;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===c&&(c="number"),function(t,o){if("string"===o)var i=["toString","valueOf"];else i=["valueOf","toString"];for(var a=0;a<i.length;++a){var c=r(t,i[a]);if(n(c)){var l=e(c,t);if("object"!==u(l))return l}}throw new TypeError("Cannot convert to primitive.")}(o,c)}return o}function f(t){switch(u(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return f(l(t,"string"));default:return String(t)}}var s,p,b;function y(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(s=Object.defineProperty,p=Object.prototype.hasOwnProperty("__defineGetter__"),b="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(s&&(t===window||t===document||t===Element.prototype||t instanceof Element))return s(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,a="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!p)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(b);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(a){if("function"!==a)throw new TypeError("Setter must be a function");if(!p)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(b);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"endsWith"in String.prototype||y(String.prototype,"endsWith",(function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=o(this),a=f(n),u=c(e);if(u)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var l=f(e),s=a.length,p=r===t?s:i(r),b=Math.min(Math.max(p,0),s),y=l.length,h=b-y;return!(h<0)&&a.substr(h,y)===l})),"includes"in String.prototype||y(String.prototype,"includes",(function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=o(this),a=f(n),u=c(e);if(u)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var l=f(e),s=i(r),p=a.length,b=Math.min(Math.max(s,0),p);return-1!==String.prototype.indexOf.call(a,l,b)}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});