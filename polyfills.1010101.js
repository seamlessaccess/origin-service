/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function r(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===a(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function o(t,e){return t[e]}function i(t,e){return e in t}function a(t){return"function"==typeof t}function c(t){if(null==t)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function u(t){return Boolean(t)}function s(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function l(t){var e=s(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function p(t){if(null==t)throw TypeError();return Object(t)}function f(t,e){var r,n=(r=e,p(t)[r]);if(null!=n){if(!1===a(n))throw new TypeError("Method not callable: "+e);return n}}function y(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function d(t,e){var r=o(t,"prototype");return"object"!==y(r)&&(r=e),r}function h(t){return"object"===y(t)&&("function"==typeof t&&!!t.prototype)}function b(e){if("object"!==y(e))return!1;var r="Symbol"in t&&"match"in t.Symbol?o(e,t.Symbol.match):void 0;if(void 0!==r)return u(r);try{var n=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=n}return!1}function v(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var i=0;i<r.length;++i){var c=o(t,r[i]);if(a(c)){var u=n(c,t);if("object"!==y(u))return u}}throw new TypeError("Cannot convert to primitive.")}function m(t,e){return y(t)===y(e)&&("number"===y(t)?!(!isNaN(t)||!isNaN(e))||(1/t==1/0&&1/e==-1/0||(1/t==-1/0&&1/e==1/0||t===e)):function(t,e){return t===e}(t,e))}function w(e){var r=arguments.length>1?arguments[1]:void 0;if("object"===y(e)){if(arguments.length<2)var o="default";else r===String?o="string":r===Number&&(o="number");var i="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?f(e,t.Symbol.toPrimitive):void 0;if(void 0!==i){var a=n(i,e,[o]);if("object"!==y(a))return a;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===o&&(o="number"),v(e,o)}return e}function g(t){switch(y(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return g(w(t,String));default:return String(t)}}var E,O,j,_,S,T,P;function A(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function x(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function L(t,e){var r=arguments[2]||{},n=d(t,e),o=Object.create(n);for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&Object.defineProperty(o,i,{configurable:!0,enumerable:!1,writable:!0,value:r[i]});return o}function D(e,i){var a;if(0===i&&1/i==-1/0&&(i=0),!1===(a=e,"[object Array]"===Object.prototype.toString.call(a)))return r(i);var c=o(e,"constructor");if("object"===y(c)&&null===(c="Symbol"in t&&"species"in t.Symbol?o(c,t.Symbol.species):void 0)&&(c=void 0),void 0===c)return r(i);if(!h(c))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!h(t))throw new TypeError("F must be a constructor.");if(!h(e))throw new TypeError("newTarget must be a constructor.");if(e===t)return new(Function.prototype.bind.apply(t,[null].concat(r)));var o=L(e,Object.prototype);return n(t,o,r)}(c,[i])}"document"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(t.HTMLDocument?t.Document=t.HTMLDocument:(t.Document=t.HTMLDocument=document.constructor=new Function("return function Document() {}")(),t.Document.prototype=document)),"Element"in t&&"HTMLElement"in t||function(){if(!("Element"in t)||!("HTMLElement"in t))if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,r=document.appendChild(document.createElement("body")),n=r.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},a=function(t,e){var r,n,o,c=t.childNodes||[],u=-1;if(1===t.nodeType&&t.constructor!==Element)for(r in t.constructor=Element,i)n=i[r],t[r]=n;for(;o=e&&c[++u];)a(o,e);return t},c=document.getElementsByTagName("*"),u=document.createElement,s=100;o.attachEvent("onpropertychange",(function(t){for(var e,r=t.propertyName,n=!Object.prototype.hasOwnProperty.call(i,r),a=o[r],u=i[r],s=-1;e=c[++s];)1===e.nodeType&&(n||e[r]===u)&&(e[r]=a);i[r]=a})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),l()||(document.onreadystatechange=l,e=setInterval(l,25)),document.createElement=function(t){var e=u(String(t).toLowerCase());return a(e)},document.removeChild(r)}else window.HTMLElement=window.Element;function l(){return s--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(a(document,!0),e&&document.body.prototype&&clearTimeout(e),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(E=Object.defineProperty,O=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),j="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(E&&(t===window||t===document||t===Element.prototype||t instanceof Element))return E(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,a="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!O)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(j);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(a){if("function"!==a)throw new TypeError("Setter must be a function");if(!O)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(j);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"forEach"in Array.prototype||x(Array.prototype,"forEach",(function(t){var e=p(this),r=e instanceof String?e.split(""):e,c=l(o(e,"length"));if(!1===a(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:void 0,s=0;s<c;){var f=g(s),y=i(r,f);if(y){var d=o(r,f);n(t,u,[d,s,e])}s+=1}})),"includes"in Array.prototype||x(Array.prototype,"includes",(function(t){"use strict";var e=p(this),r=l(o(e,"length"));if(0===r)return!1;var n=s(arguments[1]);if(n>=0)var i=n;else(i=r+n)<0&&(i=0);for(;i<r;){var a=o(e,g(i));if(m(t,a))return!0;i+=1}return!1})),"indexOf"in Array.prototype||x(Array.prototype,"indexOf",(function(t){var e=p(this),r=l(o(e,"length"));if(0===r)return-1;var n=s(arguments[1]);if(n>=r)return-1;if(n>=0)var a=1/n==-1/0?0:n;else(a=r+n)<0&&(a=0);for(;a<r;){var c=i(e,g(a));if(c){var u=o(e,g(a)),f=t===u;if(f)return a}a+=1}return-1})),"bind"in Function.prototype||x(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,c=n.concat,u=n.push,s=Math.max,l=this;if(!a(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var p,f=i.call(arguments,1),y=function(){if(this instanceof p){var e=l.apply(this,c.call(f,i.call(arguments)));return r(e)===e?e:this}return l.apply(t,c.call(f,i.call(arguments)))},d=s(0,l.length-f.length),h=[],b=0;b<d;b++)u.call(h,"$"+b);return p=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(y),l.prototype&&(o.prototype=l.prototype,p.prototype=new o,o.prototype=null),p})),"freeze"in Object||x(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(_=Object.getOwnPropertyDescriptor,S=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},T={}.toString,P="".split,x(Object,"getOwnPropertyDescriptor",(function(t,e){var r=p(t);r=("string"===y(r)||r instanceof String)&&"[object String]"==T.call(t)?P.call(t,""):Object(t);var n,o,i=function(t){var e=w(t,String);return"symbol"===y(e)?e:g(e)}(e);if(S)try{return _(r,i)}catch(t){}if(n=r,o=i,Object.prototype.hasOwnProperty.call(n,o))return{enumerable:!0,configurable:!0,writable:!0,value:r[i]}}))),"getPrototypeOf"in Object||x(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||x(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,e=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,n=!r.call({toString:null},"toString"),o=r.call((function(){}),"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=function(t){var e=t.constructor;return e&&e.prototype===t},c={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},u=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!c["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{a(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(r){var c,s,l,p="[object Function]"===e.call(r),f=(c=r,s=e.call(c),(l="[object Arguments]"===s)||(l="[object Array]"!==s&&null!==c&&"object"==typeof c&&"number"==typeof c.length&&c.length>=0&&"[object Function]"===e.call(c.callee)),l),y="[object String]"===e.call(r),d=[];if(null==r)throw new TypeError("Cannot convert undefined or null to object");var h=o&&p;if(y&&r.length>0&&!t.call(r,0))for(var b=0;b<r.length;++b)d.push(String(b));if(f&&r.length>0)for(var v=0;v<r.length;++v)d.push(String(v));else for(var m in r)h&&"prototype"===m||!t.call(r,m)||d.push(String(m));if(n)for(var w=function(t){if("undefined"==typeof window||!u)return a(t);try{return a(t)}catch(t){return!1}}(r),g=0;g<i.length;++g)w&&"constructor"===i[g]||!t.call(r,i[g])||d.push(i[g]);return d}}()),"defineProperties"in Object||x(Object,"defineProperties",(function(t,e){if("object"!==y(t))throw new TypeError("Object.defineProperties called on non-object");for(var r=p(e),n=Object.keys(r),i=[],a=0;a<n.length;a++){var c=n[a],u=Object.getOwnPropertyDescriptor(r,c);if(void 0!==u&&u.enumerable){var s=o(r,c);i.push([c,s])}}for(var l=0;l<i.length;l++){var f=i[l][0];s=i[l][1],Object.defineProperty(t,f,s)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var r=document.body||document.documentElement;r.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;r.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var o=function(){};return o.prototype=n,t=function(){return new o},new o};function e(){}x(Object,"create",(function(r,n){if("object"!==y(r)&&"null"!==y(r))throw new TypeError("Object prototype may only be an Object or null");if("null"===y(r))var o=t();else e.prototype=r,(o=new e).__proto__=r,o.constructor.prototype=r,o.__proto__=r;return 1 in arguments?Object.defineProperties(o,n):o}))}(),"filter"in Array.prototype||x(Array.prototype,"filter",(function(t){var e=p(this),r=l(o(e,"length"));if(!1===a(t))throw new TypeError(t+" is not a function");for(var c=arguments.length>1?arguments[1]:void 0,s=D(e,0),f=0,y=0;f<r;){var d=g(f),h=i(e,d);if(h){var b=o(e,d),v=u(n(t,c,[b,f,e]));v&&(A(s,g(y),b),y+=1)}f+=1}return s})),"map"in Array.prototype||x(Array.prototype,"map",(function(t){var e=p(this),r=l(o(e,"length"));if(!1===a(t))throw new TypeError(t+" is not a function");for(var c=arguments.length>1?arguments[1]:void 0,u=D(e,r),s=0;s<r;){var f=g(s),y=i(e,f);if(y){var d=o(e,f),h=n(t,c,[d,s,e]);A(u,f,h)}s+=1}return u})),"getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()||function(){var e={}.toString,r="".split,n=[].concat,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertyNames||Object.keys,a="object"==typeof t?i(t):[];x(Object,"getOwnPropertyNames",(function(t){var c=p(t);if("[object Window]"===e.call(c))try{return i(c)}catch(t){return n.call([],a)}c="[object String]"==e.call(c)?r.call(c,""):Object(c);for(var u=i(c),s=["length","prototype"],l=0;l<s.length;l++){var f=s[l];o.call(c,f)&&!u.includes(f)&&u.push(f)}if(u.includes("__proto__")){var y=u.indexOf("__proto__");u.splice(y,1)}return u}))}(),"values"in Object||function(){var t={}.toString,e="".split;x(Object,"values",(function(r){var n="[object String]"==t.call(r)?e.call(r,""):p(r);return Object.keys(n).map((function(t){return n[t]}))}))}(),"endsWith"in String.prototype||x(String.prototype,"endsWith",(function(t){"use strict";var e=arguments.length>1?arguments[1]:void 0,r=c(this),n=g(r),o=b(t);if(o)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var i=g(t),a=n.length,u=void 0===e?a:s(e),l=Math.min(Math.max(u,0),a),p=i.length,f=l-p;return!(f<0)&&n.substr(f,p)===i})),"Symbol"in t&&0===t.Symbol.length||function(e,r,n){"use strict";var o,i=0,a=""+Math.random(),c="__symbol:",u=c.length,s="__symbol@@"+a,l="defineProperty",p="defineProperties",f="getOwnPropertyNames",y="getOwnPropertyDescriptor",d="propertyIsEnumerable",h=e.prototype,b=h.hasOwnProperty,v=h[d],m=h.toString,w=Array.prototype.concat,g=e.getOwnPropertyNames?e.getOwnPropertyNames(t):[],E=e[f],O=function(t){if("[object Window]"===m.call(t))try{return E(t)}catch(t){return w.call([],g)}return E(t)},j=e[y],_=e.create,S=e.keys,T=e.freeze||e,P=e[l],A=e[p],x=j(e,f),L=function(t,e,r){if(!b.call(t,s))try{P(t,s,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[s]={}}t[s]["@@"+e]=r},D=function(t,e){var r=_(t);return O(e).forEach((function(t){H.call(e,t)&&k(r,t,e[t])})),r},M=function(){},B=function(t){return t!=s&&!b.call(F,t)},R=function(t){return t!=s&&b.call(F,t)},H=function(t){var e=""+t;return R(e)?b.call(this,e)&&this[s]["@@"+e]:v.call(this,t)},I=function(t){var r={enumerable:!1,configurable:!0,get:M,set:function(e){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),L(this,t,!0)}};try{P(h,t,r)}catch(e){h[t]=r.value}return T(F[t]=P(e(t),"constructor",q))},N=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return I(c.concat(e||"",a,++i))},F=_(null),q={value:N},U=function(t){return F[t]},k=function(t,e,r){var n=""+e;return R(n)?(o(t,n,r.enumerable?function(t){var e=_(t);return e.enumerable=!1,e}(r):r),L(t,n,!!r.enumerable)):P(t,e,r),t},C=function(t){return O(t).filter(t===h?(e=t,function(t){return b.call(e,s)&&b.call(e[s],"@@"+t)}):R).map(U);var e};x.value=k,P(e,l,x),x.value=C,P(e,"getOwnPropertySymbols",x),x.value=function(t){return O(t).filter(B)},P(e,f,x),x.value=function(t,e){var r=C(e);return r.length?S(e).concat(r).forEach((function(r){H.call(e,r)&&k(t,r,e[r])})):A(t,e),t},P(e,p,x),x.value=H,P(h,d,x),x.value=N,P(n,"Symbol",x),x.value=function(t){var e=c.concat(c,t,a);return e in h?F[e]:I(e)},P(N,"for",x),x.value=function(t){if(B(t))throw new TypeError(t+" is not a symbol");return b.call(F,t)?t.slice(2*u,-a.length):void 0},P(N,"keyFor",x),x.value=function(t,e){var r=j(t,e);return r&&R(e)&&(r.enumerable=H.call(t,e)),r},P(e,y,x),x.value=function(t,e){return 1===arguments.length||void 0===e?_(t):D(t,e)},P(e,"create",x);var $=null===function(){return this}.call(null);x.value=$?function(){var t=m.call(this);return"[object String]"===t&&R(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=m.call(this);return"[object String]"===t&&R(this)?"[object Symbol]":t},P(h,"toString",x),o=function(t,e,r){var n=j(h,e);delete h[e],P(t,e,r),t!==h&&P(h,e,n)}}(Object,0,this),"Symbol"in t&&"iterator"in t.Symbol||Object.defineProperty(t.Symbol,"iterator",{value:t.Symbol("iterator")}),"Window"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=t}(t),function(t){if(!("Event"in t))return!1;try{return new Event("click"),!0}catch(t){return!1}}(t)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;r.NONE=0,r.CAPTURING_PHASE=1,r.AT_TARGET=2,r.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=r,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,r=arguments[0],n=arguments[1];if(e===window&&r in t)throw new Error("In IE8 the event: "+r+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[r]||(e._events[r]=function(t){var r,n=e._events[t.type].list,o=n.slice(),i=-1,a=o.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++i<a&&!t.cancelImmediate;)i in o&&(r=o[i],n.includes(r)&&"function"==typeof r&&r.call(e,t))},e._events[r].list=[],e.attachEvent&&e.attachEvent("on"+r,e._events[r])),e._events[r].list.push(n)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,r=arguments[0],n=arguments[1];e._events&&e._events[r]&&e._events[r].list&&-1!==(t=e._events[r].list.indexOf(n))&&(e._events[r].list.splice(t,1),e._events[r].list.length||(e.detachEvent&&e.detachEvent("on"+r,e._events[r]),delete e._events[r]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,r=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var n=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+r,n)};this.attachEvent("on"+r,n)}this.fireEvent("on"+r,t)}catch(n){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[r]&&e._events[r].call(e,t),"function"==typeof e["on"+r]&&e["on"+r].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new r("DOMContentLoaded",{bubbles:!0}))})))}function r(t,e){if(!t)throw new Error("Not enough arguments");var r;if("createEvent"in document){r=document.createEvent("Event");var n=!(!e||void 0===e.bubbles)&&e.bubbles,o=!(!e||void 0===e.cancelable)&&e.cancelable;return r.initEvent(t,n,o),r}return(r=document.createEventObject()).type=t,r.bubbles=!(!e||void 0===e.bubbles)&&e.bubbles,r.cancelable=!(!e||void 0===e.cancelable)&&e.cancelable,r}}(),"XMLHttpRequest"in t&&"prototype"in t.XMLHttpRequest&&"addEventListener"in t.XMLHttpRequest.prototype||function(t,e){t.XMLHttpRequest=function(){var t=this,r=t._request=e?new e:new ActiveXObject("MSXML2.XMLHTTP.3.0");r.onreadystatechange=function(){t.readyState=r.readyState;var e=4===t.readyState;t.response=t.responseText=e?r.responseText:null,t.status=e?r.status:null,t.statusText=e?r.statusText:null,t.dispatchEvent(new Event("readystatechange")),e&&t.dispatchEvent(new Event("load"))},"onerror"in r&&(r.onerror=function(){t.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var r=t.XMLHttpRequest.prototype;r.addEventListener=t.addEventListener,r.removeEventListener=t.removeEventListener,r.dispatchEvent=t.dispatchEvent,r.abort=function(){return this._request()},r.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},r.getResponseHeader=function(t){return this._request.getResponseHeader(t)},r.open=function(t,e){this._request.open(t,e,arguments[2],arguments[3],arguments[4])},r.overrideMimeType=function(t){this._request.overrideMimeType(t)},r.send=function(){this._request.send(0 in arguments?arguments[0]:null)},r.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(t,t.XMLHttpRequest),"fetch"in t||function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(e){"use strict";var r="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,a="ArrayBuffer"in t;if(a)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function h(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=d(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=s(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[s(t)]},f.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},f.prototype.set=function(t,e){this.map[s(t)]=l(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},n&&(f.prototype[Symbol.iterator]=f.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var r,n,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),m.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var O=[301,302,303,307,308];E.redirect=function(t,e){if(-1===O.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function j(t,r){return new Promise((function(n,i){var a=new w(t,r);if(a.signal&&a.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function u(){c.abort()}c.onload=function(){var t,e,r={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};r.url="responseURL"in c?c.responseURL:r.headers.get("X-Request-URL");var o="response"in c?c.response:c.responseText;n(new E(o,r))},c.onerror=function(){i(new TypeError("Network request failed"))},c.ontimeout=function(){i(new TypeError("Network request failed"))},c.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},c.open(a.method,a.url,!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&o&&(c.responseType="blob"),a.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),a.signal&&(a.signal.addEventListener("abort",u),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",u)}),c.send(void 0===a._bodyInit?null:a._bodyInit)}))}j.polyfill=!0,t.fetch=j,t.Headers=f,t.Request=w,t.Response=E,e.Headers=f,e.Request=w,e.Response=E,e.fetch=j,Object.defineProperty(e,"__esModule",{value:!0})}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});