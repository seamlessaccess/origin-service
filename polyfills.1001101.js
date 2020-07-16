/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function n(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function r(t,e){var n=arguments.length>2?arguments[2]:[];if(!1===c(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,n)}function o(t,e){return t[e]}function i(t,e){return e in t}function c(t){return"function"==typeof t}function a(t){if(null===t||t===e)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function u(t){return Boolean(t)}function s(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function l(t){var e=s(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function f(t){if(null===t||t===e)throw TypeError();return Object(t)}function p(t,n){var r,o=(r=n,f(t)[r]);if(null===o||o===e)return e;if(!1===c(o))throw new TypeError("Method not callable: "+n);return o}function y(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function h(t){return"object"===y(t)&&("function"==typeof t&&!!t.prototype)}function d(n){if("object"!==y(n))return!1;var r="Symbol"in t&&"match"in t.Symbol?o(n,t.Symbol.match):e;if(r!==e)return u(r);try{var i=n.lastIndex;return n.lastIndex=0,RegExp.prototype.exec.call(n),!0}catch(t){}finally{n.lastIndex=i}return!1}function b(t,e){return y(t)===y(e)&&("number"===y(t)?!(!isNaN(t)||!isNaN(e))||(1/t==1/0&&1/e==-1/0||(1/t==-1/0&&1/e==1/0||t===e)):function(t,e){return t===e}(t,e))}function v(n){var i=arguments.length>1?arguments[1]:e;if("object"===y(n)){if(arguments.length<2)var a="default";else i===String?a="string":i===Number&&(a="number");var u="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?p(n,t.Symbol.toPrimitive):e;if(u!==e){var s=r(u,n,[a]);if("object"!==y(s))return s;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===a&&(a="number"),function(t,e){if("string"===e)var n=["toString","valueOf"];else n=["valueOf","toString"];for(var i=0;i<n.length;++i){var a=o(t,n[i]);if(c(a)){var u=r(a,t);if("object"!==y(u))return u}}throw new TypeError("Cannot convert to primitive.")}(n,a)}return n}function m(t){switch(y(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return m(v(t,String));default:return String(t)}}var w,g,E,j,O,_,S;function T(t,e,n){var r=function(t,e,n){var r={value:n,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,r),!0}catch(t){return!1}}(t,e,n);if(!r)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(n)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return r}function P(t,e,n){var r={value:n,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,r)}function A(t,e){var n=arguments[2]||{},r=function(t,e){var n=o(t,"prototype");return"object"!==y(n)&&(n=e),n}(t,e),i=Object.create(r);for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&Object.defineProperty(i,c,{configurable:!0,enumerable:!1,writable:!0,value:n[c]});return i}function x(i,c){var a;if(0===c&&1/c==-1/0&&(c=0),!1===(a=i,"[object Array]"===Object.prototype.toString.call(a)))return n(c);var u=o(i,"constructor");if("object"===y(u)&&null===(u="Symbol"in t&&"species"in t.Symbol?o(u,t.Symbol.species):e)&&(u=e),u===e)return n(c);if(!h(u))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,n=arguments.length>1?arguments[1]:[];if(!h(t))throw new TypeError("F must be a constructor.");if(!h(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(n))):r(t,A(e,Object.prototype),n)}(u,[c])}"document"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(t.HTMLDocument?t.Document=t.HTMLDocument:(t.Document=t.HTMLDocument=document.constructor=new Function("return function Document() {}")(),t.Document.prototype=document)),"Element"in t&&"HTMLElement"in t||function(){if(!("Element"in t&&"HTMLElement"in t))if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,n=document.appendChild(document.createElement("body")),r=n.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=r.appendChild(r.createElement("*")),i={},c=function(t,e){var n,r,o,a=t.childNodes||[],u=-1;if(1===t.nodeType&&t.constructor!==Element)for(n in t.constructor=Element,i)r=i[n],t[n]=r;for(;o=e&&a[++u];)c(o,e);return t},a=document.getElementsByTagName("*"),u=document.createElement,s=100;o.attachEvent("onpropertychange",(function(t){for(var e,n=t.propertyName,r=!Object.prototype.hasOwnProperty.call(i,n),c=o[n],u=i[n],s=-1;e=a[++s];)1===e.nodeType&&(r||e[n]===u)&&(e[n]=c);i[n]=c})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),l()||(document.onreadystatechange=l,e=setInterval(l,25)),document.createElement=function(t){var e=u(String(t).toLowerCase());return c(e)},document.removeChild(n)}else window.HTMLElement=window.Element;function l(){return s--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(c(document,!0),e&&document.body.prototype&&clearTimeout(e),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(w=Object.defineProperty,g=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),E="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,n){if(w&&(t===window||t===document||t===Element.prototype||t instanceof Element))return w(t,e,n);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var r=String(e),o="value"in n||"writable"in n,i="get"in n&&typeof n.get,c="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!g)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(E);Object.__defineGetter__.call(t,r,n.get)}else t[r]=n.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!g)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(E);Object.__defineSetter__.call(t,r,n.set)}return"value"in n&&(t[r]=n.value),t}),"forEach"in Array.prototype||P(Array.prototype,"forEach",(function(t){var n=f(this),a=n instanceof String?n.split(""):n,u=l(o(n,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var s=arguments.length>1?arguments[1]:e,p=0;p<u;){var y=m(p),h=i(a,y);if(h){var d=o(a,y);r(t,s,[d,p,n])}p+=1}return e})),"includes"in Array.prototype||P(Array.prototype,"includes",(function(t){"use strict";var e=f(this),n=l(o(e,"length"));if(0===n)return!1;var r=s(arguments[1]);if(r>=0)var i=r;else(i=n+r)<0&&(i=0);for(;i<n;){var c=o(e,m(i));if(b(t,c))return!0;i+=1}return!1})),"indexOf"in Array.prototype||P(Array.prototype,"indexOf",(function(t){var e=f(this),n=l(o(e,"length"));if(0===n)return-1;var r=s(arguments[1]);if(r>=n)return-1;if(r>=0)var c=1/r==-1/0?0:r;else(c=n+r)<0&&(c=0);for(;c<n;){var a=i(e,m(c));if(a){var u=o(e,m(c)),p=t===u;if(p)return c}c+=1}return-1})),"bind"in Function.prototype||P(Function.prototype,"bind",(function(t){var e=Array,n=Object,r=e.prototype,o=function(){},i=r.slice,a=r.concat,u=r.push,s=Math.max,l=this;if(!c(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var f,p=i.call(arguments,1),y=function(){if(this instanceof f){var e=l.apply(this,a.call(p,i.call(arguments)));return n(e)===e?e:this}return l.apply(t,a.call(p,i.call(arguments)))},h=s(0,l.length-p.length),d=[],b=0;b<h;b++)u.call(d,"$"+b);return f=Function("binder","return function ("+d.join(",")+"){ return binder.apply(this, arguments); }")(y),l.prototype&&(o.prototype=l.prototype,f.prototype=new o,o.prototype=null),f})),"freeze"in Object||P(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(j=Object.getOwnPropertyDescriptor,O=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},_={}.toString,S="".split,P(Object,"getOwnPropertyDescriptor",(function(t,e){var n=f(t);n=("string"===y(n)||n instanceof String)&&"[object String]"==_.call(t)?S.call(t,""):Object(t);var r,o,i=function(t){var e=v(t,String);return"symbol"===y(e)?e:m(e)}(e);if(O)try{return j(n,i)}catch(t){}if(r=n,o=i,Object.prototype.hasOwnProperty.call(r,o))return{enumerable:!0,configurable:!0,writable:!0,value:n[i]}}))),"getPrototypeOf"in Object||P(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||P(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,o=!r.call({toString:null},"toString"),i=r.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},s=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!u["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{a(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(r){var u,l,f,p="[object Function]"===n.call(r),y=(u=r,l=n.call(u),(f="[object Arguments]"===l)||(f="[object Array]"!==l&&null!==u&&"object"==typeof u&&"number"==typeof u.length&&u.length>=0&&"[object Function]"===n.call(u.callee)),f),h="[object String]"===n.call(r),d=[];if(r===e||null===r)throw new TypeError("Cannot convert undefined or null to object");var b=i&&p;if(h&&r.length>0&&!t.call(r,0))for(var v=0;v<r.length;++v)d.push(String(v));if(y&&r.length>0)for(var m=0;m<r.length;++m)d.push(String(m));else for(var w in r)b&&"prototype"===w||!t.call(r,w)||d.push(String(w));if(o)for(var g=function(t){if("undefined"==typeof window||!s)return a(t);try{return a(t)}catch(t){return!1}}(r),E=0;E<c.length;++E)g&&"constructor"===c[E]||!t.call(r,c[E])||d.push(c[E]);return d}}()),"defineProperties"in Object||P(Object,"defineProperties",(function(t,n){if("object"!==y(t))throw new TypeError("Object.defineProperties called on non-object");for(var r=f(n),i=Object.keys(r),c=[],a=0;a<i.length;a++){var u=i[a],s=Object.getOwnPropertyDescriptor(r,u);if(s!==e&&s.enumerable){var l=o(r,u);c.push([u,l])}}for(var p=0;p<c.length;p++){var h=c[p][0];l=c[p][1],Object.defineProperty(t,h,l)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var n=document.body||document.documentElement;n.appendChild(e),e.src="javascript:";var r=e.contentWindow.Object.prototype;n.removeChild(e),e=null,delete r.constructor,delete r.hasOwnProperty,delete r.propertyIsEnumerable,delete r.isPrototypeOf,delete r.toLocaleString,delete r.toString,delete r.valueOf;var o=function(){};return o.prototype=r,t=function(){return new o},new o};function e(){}P(Object,"create",(function(n,r){if("object"!==y(n)&&"null"!==y(n))throw new TypeError("Object prototype may only be an Object or null");if("null"===y(n))var o=t();else e.prototype=n,(o=new e).__proto__=n,o.constructor.prototype=n,o.__proto__=n;return 1 in arguments?Object.defineProperties(o,r):o}))}(),"filter"in Array.prototype||P(Array.prototype,"filter",(function(t){var n=f(this),a=l(o(n,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var s=arguments.length>1?arguments[1]:e,p=x(n,0),y=0,h=0;y<a;){var d=m(y),b=i(n,d);if(b){var v=o(n,d),w=u(r(t,s,[v,y,n]));w&&(T(p,m(h),v),h+=1)}y+=1}return p})),"map"in Array.prototype||P(Array.prototype,"map",(function(t){var n=f(this),a=l(o(n,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:e,s=x(n,a),p=0;p<a;){var y=m(p),h=i(n,y);if(h){var d=o(n,y),b=r(t,u,[d,p,n]);T(s,y,b)}p+=1}return s})),"getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()||function(){var e={}.toString,n="".split,r=[].concat,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertyNames||Object.keys,c="object"==typeof t?i(t):[];P(Object,"getOwnPropertyNames",(function(t){var a=f(t);if("[object Window]"===e.call(a))try{return i(a)}catch(t){return r.call([],c)}a="[object String]"==e.call(a)?n.call(a,""):Object(a);for(var u=i(a),s=["length","prototype"],l=0;l<s.length;l++){var p=s[l];o.call(a,p)&&!u.includes(p)&&u.push(p)}if(u.includes("__proto__")){var y=u.indexOf("__proto__");u.splice(y,1)}return u}))}(),"endsWith"in String.prototype||P(String.prototype,"endsWith",(function(t){"use strict";var n=arguments.length>1?arguments[1]:e,r=a(this),o=m(r),i=d(t);if(i)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var c=m(t),u=o.length,l=n===e?u:s(n),f=Math.min(Math.max(l,0),u),p=c.length,y=f-p;return!(y<0)&&o.substr(y,p)===c})),"Symbol"in t&&0===t.Symbol.length||function(e,n,r){"use strict";var o,i=0,c=""+Math.random(),a="__symbol:",u=a.length,s="__symbol@@"+c,l="defineProperty",f="defineProperties",p="getOwnPropertyNames",y="getOwnPropertyDescriptor",h="propertyIsEnumerable",d=e.prototype,b=d.hasOwnProperty,v=d[h],m=d.toString,w=Array.prototype.concat,g=e.getOwnPropertyNames?e.getOwnPropertyNames(t):[],E=e[p],j=function(t){if("[object Window]"===m.call(t))try{return E(t)}catch(t){return w.call([],g)}return E(t)},O=e[y],_=e.create,S=e.keys,T=e.freeze||e,P=e[l],A=e[f],x=O(e,p),L=function(t,e,n){if(!b.call(t,s))try{P(t,s,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[s]={}}t[s]["@@"+e]=n},D=function(t,e){var n=_(t);return j(e).forEach((function(t){H.call(e,t)&&C(n,t,e[t])})),n},R=function(){},B=function(t){return t!=s&&!b.call(N,t)},M=function(t){return t!=s&&b.call(N,t)},H=function(t){var e=""+t;return M(e)?b.call(this,e)&&this[s]["@@"+e]:v.call(this,t)},I=function(t){var n={enumerable:!1,configurable:!0,get:R,set:function(e){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),L(this,t,!0)}};try{P(d,t,n)}catch(e){d[t]=n.value}return T(N[t]=P(e(t),"constructor",F))},k=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return I(a.concat(e||"",c,++i))},N=_(null),F={value:k},q=function(t){return N[t]},C=function(t,e,n){var r=""+e;return M(r)?(o(t,r,n.enumerable?function(t){var e=_(t);return e.enumerable=!1,e}(n):n),L(t,r,!!n.enumerable)):P(t,e,n),t},U=function(t){return j(t).filter(t===d?(e=t,function(t){return b.call(e,s)&&b.call(e[s],"@@"+t)}):M).map(q);var e};x.value=C,P(e,l,x),x.value=U,P(e,"getOwnPropertySymbols",x),x.value=function(t){return j(t).filter(B)},P(e,p,x),x.value=function(t,e){var n=U(e);return n.length?S(e).concat(n).forEach((function(n){H.call(e,n)&&C(t,n,e[n])})):A(t,e),t},P(e,f,x),x.value=H,P(d,h,x),x.value=k,P(r,"Symbol",x),x.value=function(t){var e=a.concat(a,t,c);return e in d?N[e]:I(e)},P(k,"for",x),x.value=function(t){if(B(t))throw new TypeError(t+" is not a symbol");return b.call(N,t)?t.slice(2*u,-c.length):void 0},P(k,"keyFor",x),x.value=function(t,e){var n=O(t,e);return n&&M(e)&&(n.enumerable=H.call(t,e)),n},P(e,y,x),x.value=function(t,e){return 1===arguments.length||void 0===e?_(t):D(t,e)},P(e,"create",x);var $=null===function(){return this}.call(null);x.value=$?function(){var t=m.call(this);return"[object String]"===t&&M(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=m.call(this);return"[object String]"===t&&M(this)?"[object Symbol]":t},P(d,"toString",x),o=function(t,e,n){var r=O(d,e);delete d[e],P(t,e,n),t!==d&&P(d,e,r)}}(Object,0,this),"Symbol"in t&&"iterator"in t.Symbol||Object.defineProperty(t.Symbol,"iterator",{value:t.Symbol("iterator")}),"Symbol"in t&&"toStringTag"in t.Symbol||Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")}),"Promise"in t||function(){"use strict";var n,r,o,i=null,c="object"==typeof t,a=t,u=a.Promise,s=a.process,l=a.console,f=!0,p=Array,y=Error,h=1,d=2,b=3,v="Symbol",m="iterator",w="species",g=v+"("+w+")",E="return",j="_uh",O="_pt",_="_st",S="Invalid argument",T="\nFrom previous ",P="Chaining cycle detected for promise",A="rejectionHandled",x="unhandledRejection",L={e:i},D=function(){},R=/^.+\/node_modules\/yaku\/.+\n?/gm,B=function(t){var e;if(!H(this)||this._s!==n)throw $("Invalid this");if(this._s=b,f&&(this[O]=W()),t!==D){if(!I(t))throw $(S);(e=q(t)(J(this,d),J(this,h)))===L&&Z(this,h,e.e)}};function M(){return B[v][w]||g}function H(t){return t&&"object"==typeof t}function I(t){return"function"==typeof t}function k(t,e){return t instanceof e}function N(t,e,n){if(!e(t))throw $(n)}function F(){try{return r.apply(o,arguments)}catch(t){return L.e=t,L}}function q(t,e){return r=t,o=e,F}function C(t,e){var r=p(t),o=0;function i(){for(var i=0;i<o;)e(r[i],r[i+1]),r[i++]=n,r[i++]=n;o=0,r.length>t&&(r.length=t)}return function(t,e){r[o++]=t,r[o++]=e,2===o&&B.nextTick(i)}}function U(t,e){var n,r,o,i,c=0;if(!t)throw $(S);var a=t[B[v][m]];if(I(a))r=a.call(t);else{if(!I(t.next)){if(k(t,p)){for(n=t.length;c<n;)e(t[c],c++);return c}throw $(S)}r=t}for(;!(o=r.next()).done;)if((i=q(e)(o.value,c++))===L)throw I(r[E])&&r[E](),i.e;return c}function $(t){return new TypeError(t)}function W(t){return(t?"":T)+(new y).stack}B.default=B,function(t,e){for(var n in e)t[n]=e[n]}(B.prototype,{then:function(t,n){if(this._s===e)throw $();return function(t,e,n,r){I(n)&&(e._onFulfilled=n);I(r)&&(t[j]&&z(A,t),e._onRejected=r);f&&(e._p=t);t[t._c++]=e,t._s!==b&&X(t,e);return e}(this,Y(B.speciesConstructor(this,B)),t,n)},catch:function(t){return this.then(n,t)},finally:function(t){return this.then((function(e){return B.resolve(t()).then((function(){return e}))}),(function(e){return B.resolve(t()).then((function(){throw e}))}))},_c:0,_p:i}),B.resolve=function(t){return V(t)?t:tt(Y(this),t)},B.reject=function(t){return Z(Y(this),h,t)},B.race=function(t){var e=this,n=Y(e),r=function(t){Z(n,d,t)},o=function(t){Z(n,h,t)},i=q(U)(t,(function(t){e.resolve(t).then(r,o)}));return i===L?e.reject(i.e):n},B.all=function(t){var e,n=this,r=Y(n),o=[];function i(t){Z(r,h,t)}return(e=q(U)(t,(function(t,c){n.resolve(t).then((function(t){o[c]=t,--e||Z(r,d,o)}),i)})))===L?n.reject(e.e):(e||Z(r,d,[]),r)},B.Symbol=a[v]||{},q((function(){Object.defineProperty(B,M(),{get:function(){return this}})}))(),B.speciesConstructor=function(t,e){var n=t.constructor;return n&&n[M()]||e},B.unhandledRejection=function(t,e){l&&l.error("Uncaught (in promise)",f?e.longStack:K(t,e))},B.rejectionHandled=D,B.enableLongStackTrace=function(){f=!0},B.nextTick=c?function(t){u?new u((function(t){t()})).then(t):setTimeout(t)}:s.nextTick,B._s=1;var X=C(999,(function(t,e){var r,o;(o=t._s!==h?e._onFulfilled:e._onRejected)!==n?(r=q(Q)(o,t._v))!==L?tt(e,r):Z(e,h,r.e):Z(e,t._s,t._v)})),G=C(9,(function(t){(function t(e){if(e._umark)return!0;e._umark=!0;var n,r=0,o=e._c;for(;r<o;)if((n=e[r++])._onRejected||t(n))return!0})(t)||(t[j]=1,z(x,t))}));function z(t,e){var n="on"+t.toLowerCase(),r=a[n];s&&s.listeners(t).length?t===x?s.emit(t,e._v,e):s.emit(t,e):r?r({reason:e._v,promise:e}):B[t](e._v,e)}function V(t){return t&&t._s}function Y(t){return V(t)?new t(D):(e=new t((function(t,o){if(e)throw $();n=t,r=o})),N(n,I),N(r,I),e);var e,n,r}function J(t,e){var n=!1;return function(r){n||(n=!0,f&&(t[_]=W(!0)),e===d?tt(t,r):Z(t,e,r))}}function K(t,e){var n=[];function r(t){return n.push(t.replace(/^\s+|\s+$/g,""))}return f&&(e[_]&&r(e[_]),function t(e){e&&O in e&&(t(e._next),r(e[O]+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+n.join("\n")).replace(R,"")}function Q(t,e){return t(e)}function Z(t,e,n){var r=0,o=t._c;if(t._s===b)for(t._s=e,t._v=n,e===h&&(f&&k(n,y)&&(n.longStack=K(n,t)),G(t));r<o;)X(t,t[r++]);return t}function tt(t,e){if(e===t&&e)return Z(t,h,$(P)),t;if(e!==i&&(I(e)||H(e))){var n=q(et)(e);if(n===L)return Z(t,h,n.e),t;I(n)?(f&&V(e)&&(t._next=e),V(e)?nt(t,e,n):B.nextTick((function(){nt(t,e,n)}))):Z(t,d,e)}else Z(t,d,e);return t}function et(t){return t.then}function nt(t,e,n){var r=q(n,e)((function(n){e&&(e=i,tt(t,n))}),(function(n){e&&(e=i,Z(t,h,n))}));r===L&&e&&(Z(t,h,r.e),e=i)}a.Promise=B}(),"Window"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=t}(t),function(t){if(!("Event"in t))return!1;try{return new Event("click"),!0}catch(t){return!1}}(t)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;r.NONE=0,r.CAPTURING_PHASE=1,r.AT_TARGET=2,r.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=r,n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,n=arguments[0],r=arguments[1];if(e===window&&n in t)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,r=e._events[t.type].list,o=r.slice(),i=-1,c=o.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++i<c&&!t.cancelImmediate;)i in o&&(n=o[i],r.includes(n)&&"function"==typeof n&&n.call(e,t))},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],r=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=e._events[n].list.indexOf(r))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var r=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+n,r)};this.attachEvent("on"+n,r)}this.fireEvent("on"+n,t)}catch(r){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new r("DOMContentLoaded",{bubbles:!0}))})))}function r(t,n){if(!t)throw new Error("Not enough arguments");var r;if("createEvent"in document){r=document.createEvent("Event");var o=!(!n||n.bubbles===e)&&n.bubbles,i=!(!n||n.cancelable===e)&&n.cancelable;return r.initEvent(t,o,i),r}return(r=document.createEventObject()).type=t,r.bubbles=!(!n||n.bubbles===e)&&n.bubbles,r.cancelable=!(!n||n.cancelable===e)&&n.cancelable,r}}(),"XMLHttpRequest"in t&&"prototype"in t.XMLHttpRequest&&"addEventListener"in t.XMLHttpRequest.prototype||function(t,e){t.XMLHttpRequest=function(){var t=this,n=t._request=e?new e:new ActiveXObject("MSXML2.XMLHTTP.3.0");n.onreadystatechange=function(){t.readyState=n.readyState;var e=4===t.readyState;t.response=t.responseText=e?n.responseText:null,t.status=e?n.status:null,t.statusText=e?n.statusText:null,t.dispatchEvent(new Event("readystatechange")),e&&t.dispatchEvent(new Event("load"))},"onerror"in n&&(n.onerror=function(){t.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var n=t.XMLHttpRequest.prototype;n.addEventListener=t.addEventListener,n.removeEventListener=t.removeEventListener,n.dispatchEvent=t.dispatchEvent,n.abort=function(){return this._request()},n.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},n.getResponseHeader=function(t){return this._request.getResponseHeader(t)},n.open=function(t,e){this._request.open(t,e,arguments[2],arguments[3],arguments[4])},n.overrideMimeType=function(t){this._request.overrideMimeType(t)},n.send=function(){this._request.send(0 in arguments?arguments[0]:null)},n.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(t,t.XMLHttpRequest),"fetch"in t||function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(n){"use strict";var r={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var n={next:function(){var n=t.shift();return{done:n===e,value:n}}};return r.iterable&&(n[Symbol.iterator]=function(){return n}),n}function s(t){this.map={},t instanceof s?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function p(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r.arrayBuffer&&r.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,n,r=l(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=f(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}s.prototype.append=function(t,e){t=c(t),e=a(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},s.prototype.delete=function(t){delete this.map[c(t)]},s.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},s.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},s.prototype.set=function(t,e){this.map[c(t)]=a(e)},s.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},s.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),u(t)},s.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),u(t)},s.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),u(t)},r.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var d=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var n,r,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),d.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function m(t,n){n||(n={}),this.type="default",this.status=n.status===e?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new s(n.headers),this.url=n.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},h.call(b.prototype),h.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];m.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},n.DOMException=t.DOMException;try{new n.DOMException}catch(t){n.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},n.DOMException.prototype=Object.create(Error.prototype),n.DOMException.prototype.constructor=n.DOMException}function g(t,e){return new Promise((function(o,i){var c=new b(t,e);if(c.signal&&c.signal.aborted)return i(new n.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new s,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;o(new m(r,n))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new n.DOMException("Aborted","AbortError"))},a.open(c.method,c.url,!0),"include"===c.credentials?a.withCredentials=!0:"omit"===c.credentials&&(a.withCredentials=!1),"responseType"in a&&r.blob&&(a.responseType="blob"),c.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),c.signal&&(c.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&c.signal.removeEventListener("abort",u)}),a.send(void 0===c._bodyInit?null:c._bodyInit)}))}g.polyfill=!0,t.fetch=g,t.Headers=s,t.Request=b,t.Response=m,n.Headers=s,n.Request=b,n.Response=m,n.fetch=g,Object.defineProperty(n,"__esModule",{value:!0})}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});