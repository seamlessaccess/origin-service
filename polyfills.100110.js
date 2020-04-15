/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function e(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===n(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function r(t,e){return t[e]}function n(t){return"function"==typeof t}function o(e){if(null===e||e===t)throw TypeError();return e}function i(t){return Boolean(t)}function a(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function u(t){var e=a(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function c(e){if(null===e||e===t)throw TypeError();return Object(e)}function f(e,r){var o,i=(o=r,c(e)[o]);if(null===i||i===t)return t;if(!1===n(i))throw new TypeError("Method not callable: "+r);return i}function l(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function s(e){if("object"!==l(e))return!1;var n="Symbol"in this&&"match"in this.Symbol?r(e,this.Symbol.match):t;if(n!==t)return i(n);try{var o=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=o}return!1}function p(o){var i=arguments.length>1?arguments[1]:t;if("object"===l(o)){if(arguments.length<2)var a="default";else i===String?a="string":i===Number&&(a="number");var u="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?f(o,this.Symbol.toPrimitive):t;if(u!==t){var c=e(u,o,[a]);if("object"!==l(c))return c;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===a&&(a="number"),function(t,o){if("string"===o)var i=["toString","valueOf"];else i=["valueOf","toString"];for(var a=0;a<i.length;++a){var u=r(t,i[a]);if(n(u)){var c=e(u,t);if("object"!==l(c))return c}}throw new TypeError("Cannot convert to primitive.")}(o,a)}return o}function y(t){switch(l(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return y(p(t,"string"));default:return String(t)}}var b,h,w;function v(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(b=Object.defineProperty,h=Object.prototype.hasOwnProperty("__defineGetter__"),w="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(b&&(t===window||t===document||t===Element.prototype||t instanceof Element))return b(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,a="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!h)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(w);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(a){if("function"!==a)throw new TypeError("Setter must be a function");if(!h)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(w);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"findIndex"in Array.prototype||v(Array.prototype,"findIndex",(function(o){var a=c(this),f=u(r(a,"length"));if(!1===n(o))throw new TypeError(o+" is not a function");for(var l=arguments.length>1?arguments[1]:t,s=0;s<f;){var p=y(s),b=r(a,p),h=i(e(o,l,[b,s,a]));if(h)return s;s+=1}return-1})),"endsWith"in String.prototype||v(String.prototype,"endsWith",(function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=o(this),i=y(n),u=s(e);if(u)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var c=y(e),f=i.length,l=r===t?f:a(r),p=Math.min(Math.max(l,0),f),b=c.length,h=p-b;return!(h<0)&&i.substr(h,b)===c})),"includes"in String.prototype||v(String.prototype,"includes",(function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=o(this),i=y(n),u=s(e);if(u)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var c=y(e),f=a(r),l=i.length,p=Math.min(Math.max(f,0),l);return-1!==String.prototype.indexOf.call(i,c,p)}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});