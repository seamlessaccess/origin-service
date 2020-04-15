/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function e(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function r(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===i(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function n(t,e){return t[e]}function o(t,e){return e in t}function i(t){return"function"==typeof t}function c(e){if(null===e||e===t)throw TypeError();return e}function a(t){return Boolean(t)}function u(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function l(t){var e=u(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function p(e){if(null===e||e===t)throw TypeError();return Object(e)}function f(e,r){var n,o=(n=r,p(e)[n]);if(null===o||o===t)return t;if(!1===i(o))throw new TypeError("Method not callable: "+r);return o}function y(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function s(t){return"object"===y(t)&&("function"==typeof t&&!!t.prototype)}function b(e){if("object"!==y(e))return!1;var r="Symbol"in this&&"match"in this.Symbol?n(e,this.Symbol.match):t;if(r!==t)return a(r);try{var o=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=o}return!1}function h(e){var o=arguments.length>1?arguments[1]:t;if("object"===y(e)){if(arguments.length<2)var c="default";else o===String?c="string":o===Number&&(c="number");var a="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?f(e,this.Symbol.toPrimitive):t;if(a!==t){var u=r(a,e,[c]);if("object"!==y(u))return u;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===c&&(c="number"),function(t,e){if("string"===e)var o=["toString","valueOf"];else o=["valueOf","toString"];for(var c=0;c<o.length;++c){var a=n(t,o[c]);if(i(a)){var u=r(a,t);if("object"!==y(u))return u}}throw new TypeError("Cannot convert to primitive.")}(e,c)}return e}function w(t){switch(y(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return w(h(t,"string"));default:return String(t)}}var g,j,v,d,O;function m(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function S(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function _(t,e){var r=arguments[2]||{},o=function(t,e){var r=n(t,"prototype");return"object"!==y(r)&&(r=e),r}(t,e),i=Object.create(o);for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&Object.defineProperty(i,c,{configurable:!0,enumerable:!1,writable:!0,value:r[c]});return i}function E(o,i){var c;if(1/i==-1/0&&(i=0),!1===(c=o,"[object Array]"===Object.prototype.toString.call(c)))return e(i);var a=n(o,"constructor");if("object"===y(a)&&null===(a="Symbol"in this&&"species"in this.Symbol?n(a,this.Symbol.species):t)&&(a=t),a===t)return e(i);if(!s(a))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,n=arguments.length>1?arguments[1]:[];if(!s(t))throw new TypeError("F must be a constructor.");if(!s(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(n))):r(t,_(e,Object.prototype),n)}(a,[i])}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(g=Object.defineProperty,j=Object.prototype.hasOwnProperty("__defineGetter__"),v="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(g&&(t===window||t===document||t===Element.prototype||t instanceof Element))return g(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,c="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(v);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(v);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"findIndex"in Array.prototype||S(Array.prototype,"findIndex",(function(e){var o=p(this),c=l(n(o,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=0;f<c;){var y=w(f),s=n(o,y),b=a(r(e,u,[s,f,o]));if(b)return f;f+=1}return-1})),"bind"in Function.prototype||S(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},c=n.slice,a=n.concat,u=n.push,l=Math.max,p=this;if(!i(p))throw new TypeError("Function.prototype.bind called on incompatible "+p);for(var f,y=c.call(arguments,1),s=function(){if(this instanceof f){var e=p.apply(this,a.call(y,c.call(arguments)));return r(e)===e?e:this}return p.apply(t,a.call(y,c.call(arguments)))},b=l(0,p.length-y.length),h=[],w=0;w<b;w++)u.call(h,"$"+w);return f=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(s),p.prototype&&(o.prototype=p.prototype,f.prototype=new o,o.prototype=null),f})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={test:0};return 0===Object.getOwnPropertyDescriptor(t,"test").value}catch(t){return!1}}()||function(){var t,e,r,n=Function.prototype.call,o=Object.prototype,i=n.bind(o.hasOwnProperty);function c(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){}}if((r=i(o,"__defineGetter__"))&&(t=n.bind(o.__lookupGetter__),e=n.bind(o.__lookupSetter__)),Object.defineProperty){var a=c({});if(!("undefined"==typeof document||c(document.createElement("div")))||!a)var u=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||u){S(Object,"getOwnPropertyDescriptor",(function(n,c){if("object"!=typeof n&&"function"!=typeof n||null===n)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+n);if(u)try{return u.call(Object,n,c)}catch(t){}if(i(n,c)){var a={enumerable:!0,configurable:!0};if(r){var l=n.__proto__;n.__proto__=o;var p=t(n,c),f=e(n,c);if(n.__proto__=l,p||f)return p&&(a.get=p),f&&(a.set=f),a}return a.value=n[c],a.writable=!0,a}}))}}(),"getPrototypeOf"in Object||S(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||S(Object,"keys",function(){"use strict";var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),i=n.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},l=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!u["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{a(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();return function(n){var u,p,f,y="[object Function]"===r.call(n),s=(u=n,p=r.call(u),(f="[object Arguments]"===p)||(f="[object Array]"!==p&&null!==u&&"object"==typeof u&&"number"==typeof u.length&&u.length>=0&&"[object Function]"===r.call(u.callee)),f),b="[object String]"===r.call(n),h=[];if(n===t||null===n)throw new TypeError("Cannot convert undefined or null to object");var w=i&&y;if(b&&n.length>0&&!e.call(n,0))for(var g=0;g<n.length;++g)h.push(String(g));if(s&&n.length>0)for(var j=0;j<n.length;++j)h.push(String(j));else for(var v in n)w&&"prototype"===v||!e.call(n,v)||h.push(String(v));if(o)for(var d=function(t){if("undefined"==typeof window||!l)return a(t);try{return a(t)}catch(t){return!1}}(n),O=0;O<c.length;++O)d&&"constructor"===c[O]||!e.call(n,c[O])||h.push(c[O]);return h}}()),"defineProperties"in Object||S(Object,"defineProperties",(function(e,r){if("object"!==y(e))throw new TypeError("Object.defineProperties called on non-object");for(var o=p(r),i=Object.keys(o),c=[],a=0;a<i.length;a++){var u=i[a],l=Object.getOwnPropertyDescriptor(o,u);if(l!==t&&l.enumerable){var f=n(o,u);c.push([u,f])}}for(a=0;a<c.length;a++){var s=c[a][0];f=c[a][1];Object.defineProperty(e,s,f)}return e})),"create"in Object||S(Object,"create",(function(t,e){if("object"!==y(t)&&"null"!==y(t))throw new TypeError("Object prototype may only be an Object or null");var r=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return r.constructor.prototype=t,1 in arguments?Object.defineProperties(r,e):r})),"map"in Array.prototype||S(Array.prototype,"map",(function(e){var c=p(this),a=l(n(c,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=E(c,a),y=0;y<a;){var s=w(y),b=o(c,s);if(b){var h=n(c,s),g=r(e,u,[h,y,c]);m(f,s,g)}y+=1}return f})),"values"in Object||(d={}.toString,O="".split,S(Object,"values",(function(t){var e="[object String]"==d.call(t)?O.call(t,""):p(t);return Object.keys(e).map((function(t){return e[t]}))}))),"endsWith"in String.prototype||S(String.prototype,"endsWith",(function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=c(this),o=w(n),i=b(e);if(i)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var a=w(e),l=o.length,p=r===t?l:u(r),f=Math.min(Math.max(p,0),l),y=a.length,s=f-y;return!(s<0)&&o.substr(s,y)===a})),"includes"in String.prototype||S(String.prototype,"includes",(function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=c(this),o=w(n),i=b(e);if(i)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var a=w(e),l=u(r),p=o.length,f=Math.min(Math.max(l,0),p);return-1!==String.prototype.indexOf.call(o,a,f)}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});