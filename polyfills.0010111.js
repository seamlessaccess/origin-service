/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function r(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===a(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function o(t,e){return t[e]}function i(t,e){return e in t}function a(t){return"function"==typeof t}function c(t){if(null===t||t===e)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function u(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function s(t){var e=u(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function l(t){if(null===t||t===e)throw TypeError();return Object(t)}function p(t,r){var n,o=(n=r,l(t)[n]);if(null===o||o===e)return e;if(!1===a(o))throw new TypeError("Method not callable: "+r);return o}function f(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function y(t){return"object"===f(t)&&("function"==typeof t&&!!t.prototype)}function d(r){if("object"!==f(r))return!1;var n="Symbol"in t&&"match"in t.Symbol?o(r,t.Symbol.match):e;if(n!==e)return function(t){return Boolean(t)}(n);try{var i=r.lastIndex;return r.lastIndex=0,RegExp.prototype.exec.call(r),!0}catch(t){}finally{r.lastIndex=i}return!1}function h(t,e){return f(t)===f(e)&&("number"===f(t)?!(!isNaN(t)||!isNaN(e))||(1/t==1/0&&1/e==-1/0||(1/t==-1/0&&1/e==1/0||t===e)):function(t,e){return t===e}(t,e))}function b(r){var i=arguments.length>1?arguments[1]:e;if("object"===f(r)){if(arguments.length<2)var c="default";else i===String?c="string":i===Number&&(c="number");var u="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?p(r,t.Symbol.toPrimitive):e;if(u!==e){var s=n(u,r,[c]);if("object"!==f(s))return s;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===c&&(c="number"),function(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var i=0;i<r.length;++i){var c=o(t,r[i]);if(a(c)){var u=n(c,t);if("object"!==f(u))return u}}throw new TypeError("Cannot convert to primitive.")}(r,c)}return r}function m(t){switch(f(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return m(b(t,String));default:return String(t)}}var v,w,g,E,O,j,_;function S(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function T(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function P(t,e){var r=arguments[2]||{},n=function(t,e){var r=o(t,"prototype");return"object"!==f(r)&&(r=e),r}(t,e),i=Object.create(n);for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&Object.defineProperty(i,a,{configurable:!0,enumerable:!1,writable:!0,value:r[a]});return i}function A(i,a){var c;if(0===a&&1/a==-1/0&&(a=0),!1===(c=i,"[object Array]"===Object.prototype.toString.call(c)))return r(a);var u=o(i,"constructor");if("object"===f(u)&&null===(u="Symbol"in t&&"species"in t.Symbol?o(u,t.Symbol.species):e)&&(u=e),u===e)return r(a);if(!y(u))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!y(t))throw new TypeError("F must be a constructor.");if(!y(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(r))):n(t,P(e,Object.prototype),r)}(u,[a])}"document"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(t.HTMLDocument?t.Document=t.HTMLDocument:(t.Document=t.HTMLDocument=document.constructor=new Function("return function Document() {}")(),t.Document.prototype=document)),"Element"in t&&"HTMLElement"in t||function(){if(!("Element"in t&&"HTMLElement"in t))if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,r=document.appendChild(document.createElement("body")),n=r.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},a=function(t,e){var r,n,o,c=t.childNodes||[],u=-1;if(1===t.nodeType&&t.constructor!==Element)for(r in t.constructor=Element,i)n=i[r],t[r]=n;for(;o=e&&c[++u];)a(o,e);return t},c=document.getElementsByTagName("*"),u=document.createElement,s=100;o.attachEvent("onpropertychange",(function(t){for(var e,r=t.propertyName,n=!Object.prototype.hasOwnProperty.call(i,r),a=o[r],u=i[r],s=-1;e=c[++s];)1===e.nodeType&&(n||e[r]===u)&&(e[r]=a);i[r]=a})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),l()||(document.onreadystatechange=l,e=setInterval(l,25)),document.createElement=function(t){var e=u(String(t).toLowerCase());return a(e)},document.removeChild(r)}else window.HTMLElement=window.Element;function l(){return s--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(a(document,!0),e&&document.body.prototype&&clearTimeout(e),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(v=Object.defineProperty,w=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),g="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(v&&(t===window||t===document||t===Element.prototype||t instanceof Element))return v(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,a="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!w)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(g);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(a){if("function"!==a)throw new TypeError("Setter must be a function");if(!w)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(g);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"forEach"in Array.prototype||T(Array.prototype,"forEach",(function(t){var r=l(this),c=r instanceof String?r.split(""):r,u=s(o(r,"length"));if(!1===a(t))throw new TypeError(t+" is not a function");for(var p=arguments.length>1?arguments[1]:e,f=0;f<u;){var y=m(f),d=i(c,y);if(d){var h=o(c,y);n(t,p,[h,f,r])}f+=1}return e})),"includes"in Array.prototype||T(Array.prototype,"includes",(function(t){"use strict";var e=l(this),r=s(o(e,"length"));if(0===r)return!1;var n=u(arguments[1]);if(n>=0)var i=n;else(i=r+n)<0&&(i=0);for(;i<r;){var a=o(e,m(i));if(h(t,a))return!0;i+=1}return!1})),"indexOf"in Array.prototype||T(Array.prototype,"indexOf",(function(t){var e=l(this),r=s(o(e,"length"));if(0===r)return-1;var n=u(arguments[1]);if(n>=r)return-1;if(n>=0)var a=1/n==-1/0?0:n;else(a=r+n)<0&&(a=0);for(;a<r;){var c=i(e,m(a));if(c){var p=o(e,m(a)),f=t===p;if(f)return a}a+=1}return-1})),"bind"in Function.prototype||T(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,c=n.concat,u=n.push,s=Math.max,l=this;if(!a(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var p,f=i.call(arguments,1),y=function(){if(this instanceof p){var e=l.apply(this,c.call(f,i.call(arguments)));return r(e)===e?e:this}return l.apply(t,c.call(f,i.call(arguments)))},d=s(0,l.length-f.length),h=[],b=0;b<d;b++)u.call(h,"$"+b);return p=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(y),l.prototype&&(o.prototype=l.prototype,p.prototype=new o,o.prototype=null),p})),"freeze"in Object||T(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(E=Object.getOwnPropertyDescriptor,O=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},j={}.toString,_="".split,T(Object,"getOwnPropertyDescriptor",(function(t,e){var r=l(t);r=("string"===f(r)||r instanceof String)&&"[object String]"==j.call(t)?_.call(t,""):Object(t);var n,o,i=function(t){var e=b(t,String);return"symbol"===f(e)?e:m(e)}(e);if(O)try{return E(r,i)}catch(t){}if(n=r,o=i,Object.prototype.hasOwnProperty.call(n,o))return{enumerable:!0,configurable:!0,writable:!0,value:r[i]}}))),"getPrototypeOf"in Object||T(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||T(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),i=n.call((function(){}),"prototype"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},s=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!u["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{c(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(n){var u,l,p,f="[object Function]"===r.call(n),y=(u=n,l=r.call(u),(p="[object Arguments]"===l)||(p="[object Array]"!==l&&null!==u&&"object"==typeof u&&"number"==typeof u.length&&u.length>=0&&"[object Function]"===r.call(u.callee)),p),d="[object String]"===r.call(n),h=[];if(n===e||null===n)throw new TypeError("Cannot convert undefined or null to object");var b=i&&f;if(d&&n.length>0&&!t.call(n,0))for(var m=0;m<n.length;++m)h.push(String(m));if(y&&n.length>0)for(var v=0;v<n.length;++v)h.push(String(v));else for(var w in n)b&&"prototype"===w||!t.call(n,w)||h.push(String(w));if(o)for(var g=function(t){if("undefined"==typeof window||!s)return c(t);try{return c(t)}catch(t){return!1}}(n),E=0;E<a.length;++E)g&&"constructor"===a[E]||!t.call(n,a[E])||h.push(a[E]);return h}}()),"defineProperties"in Object||T(Object,"defineProperties",(function(t,r){if("object"!==f(t))throw new TypeError("Object.defineProperties called on non-object");for(var n=l(r),i=Object.keys(n),a=[],c=0;c<i.length;c++){var u=i[c],s=Object.getOwnPropertyDescriptor(n,u);if(s!==e&&s.enumerable){var p=o(n,u);a.push([u,p])}}for(var y=0;y<a.length;y++){var d=a[y][0];p=a[y][1],Object.defineProperty(t,d,p)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var r=document.body||document.documentElement;r.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;r.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var o=function(){};return o.prototype=n,t=function(){return new o},new o};function e(){}T(Object,"create",(function(r,n){if("object"!==f(r)&&"null"!==f(r))throw new TypeError("Object prototype may only be an Object or null");if("null"===f(r))var o=t();else e.prototype=r,(o=new e).__proto__=r,o.constructor.prototype=r,o.__proto__=r;return 1 in arguments?Object.defineProperties(o,n):o}))}(),"map"in Array.prototype||T(Array.prototype,"map",(function(t){var r=l(this),c=s(o(r,"length"));if(!1===a(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:e,p=A(r,c),f=0;f<c;){var y=m(f),d=i(r,y);if(d){var h=o(r,y),b=n(t,u,[h,f,r]);S(p,y,b)}f+=1}return p})),"getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()||function(){var e={}.toString,r="".split,n=[].concat,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertyNames||Object.keys,a="object"==typeof t?i(t):[];T(Object,"getOwnPropertyNames",(function(t){var c=l(t);if("[object Window]"===e.call(c))try{return i(c)}catch(t){return n.call([],a)}c="[object String]"==e.call(c)?r.call(c,""):Object(c);for(var u=i(c),s=["length","prototype"],p=0;p<s.length;p++){var f=s[p];o.call(c,f)&&!u.includes(f)&&u.push(f)}if(u.includes("__proto__")){var y=u.indexOf("__proto__");u.splice(y,1)}return u}))}(),"values"in Object||function(){var t={}.toString,e="".split;T(Object,"values",(function(r){var n="[object String]"==t.call(r)?e.call(r,""):l(r);return Object.keys(n).map((function(t){return n[t]}))}))}(),"endsWith"in String.prototype||T(String.prototype,"endsWith",(function(t){"use strict";var r=arguments.length>1?arguments[1]:e,n=c(this),o=m(n),i=d(t);if(i)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var a=m(t),s=o.length,l=r===e?s:u(r),p=Math.min(Math.max(l,0),s),f=a.length,y=p-f;return!(y<0)&&o.substr(y,f)===a})),"includes"in String.prototype||T(String.prototype,"includes",(function(t){"use strict";var r=arguments.length>1?arguments[1]:e,n=c(this),o=m(n),i=d(t);if(i)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var a=m(t),s=u(r),l=o.length,p=Math.min(Math.max(s,0),l);return-1!==String.prototype.indexOf.call(o,a,p)})),"Symbol"in t&&0===t.Symbol.length||function(e,r,n){"use strict";var o,i=0,a=""+Math.random(),c="__symbol:",u=c.length,s="__symbol@@"+a,l="defineProperty",p="defineProperties",f="getOwnPropertyNames",y="getOwnPropertyDescriptor",d="propertyIsEnumerable",h=e.prototype,b=h.hasOwnProperty,m=h[d],v=h.toString,w=Array.prototype.concat,g=e.getOwnPropertyNames?e.getOwnPropertyNames(t):[],E=e[f],O=function(t){if("[object Window]"===v.call(t))try{return E(t)}catch(t){return w.call([],g)}return E(t)},j=e[y],_=e.create,S=e.keys,T=e.freeze||e,P=e[l],A=e[p],x=j(e,f),L=function(t,e,r){if(!b.call(t,s))try{P(t,s,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[s]={}}t[s]["@@"+e]=r},D=function(t,e){var r=_(t);return O(e).forEach((function(t){H.call(e,t)&&k(r,t,e[t])})),r},M=function(){},B=function(t){return t!=s&&!b.call(F,t)},R=function(t){return t!=s&&b.call(F,t)},H=function(t){var e=""+t;return R(e)?b.call(this,e)&&this[s]["@@"+e]:m.call(this,t)},I=function(t){var r={enumerable:!1,configurable:!0,get:M,set:function(e){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),L(this,t,!0)}};try{P(h,t,r)}catch(e){h[t]=r.value}return T(F[t]=P(e(t),"constructor",q))},N=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return I(c.concat(e||"",a,++i))},F=_(null),q={value:N},U=function(t){return F[t]},k=function(t,e,r){var n=""+e;return R(n)?(o(t,n,r.enumerable?function(t){var e=_(t);return e.enumerable=!1,e}(r):r),L(t,n,!!r.enumerable)):P(t,e,r),t},C=function(t){return O(t).filter(t===h?(e=t,function(t){return b.call(e,s)&&b.call(e[s],"@@"+t)}):R).map(U);var e};x.value=k,P(e,l,x),x.value=C,P(e,"getOwnPropertySymbols",x),x.value=function(t){return O(t).filter(B)},P(e,f,x),x.value=function(t,e){var r=C(e);return r.length?S(e).concat(r).forEach((function(r){H.call(e,r)&&k(t,r,e[r])})):A(t,e),t},P(e,p,x),x.value=H,P(h,d,x),x.value=N,P(n,"Symbol",x),x.value=function(t){var e=c.concat(c,t,a);return e in h?F[e]:I(e)},P(N,"for",x),x.value=function(t){if(B(t))throw new TypeError(t+" is not a symbol");return b.call(F,t)?t.slice(2*u,-a.length):void 0},P(N,"keyFor",x),x.value=function(t,e){var r=j(t,e);return r&&R(e)&&(r.enumerable=H.call(t,e)),r},P(e,y,x),x.value=function(t,e){return 1===arguments.length||void 0===e?_(t):D(t,e)},P(e,"create",x);var $=null===function(){return this}.call(null);x.value=$?function(){var t=v.call(this);return"[object String]"===t&&R(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=v.call(this);return"[object String]"===t&&R(this)?"[object Symbol]":t},P(h,"toString",x),o=function(t,e,r){var n=j(h,e);delete h[e],P(t,e,r),t!==h&&P(h,e,n)}}(Object,0,this),"Symbol"in t&&"iterator"in t.Symbol||Object.defineProperty(t.Symbol,"iterator",{value:t.Symbol("iterator")}),"Window"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=t}(t),function(t){if(!("Event"in t))return!1;try{return new Event("click"),!0}catch(t){return!1}}(t)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var r=window.Event&&window.Event.prototype||null;n.NONE=0,n.CAPTURING_PHASE=1,n.AT_TARGET=2,n.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=n,r&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:r}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,r=arguments[0],n=arguments[1];if(e===window&&r in t)throw new Error("In IE8 the event: "+r+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[r]||(e._events[r]=function(t){var r,n=e._events[t.type].list,o=n.slice(),i=-1,a=o.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++i<a&&!t.cancelImmediate;)i in o&&(r=o[i],n.includes(r)&&"function"==typeof r&&r.call(e,t))},e._events[r].list=[],e.attachEvent&&e.attachEvent("on"+r,e._events[r])),e._events[r].list.push(n)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,r=arguments[0],n=arguments[1];e._events&&e._events[r]&&e._events[r].list&&-1!==(t=e._events[r].list.indexOf(n))&&(e._events[r].list.splice(t,1),e._events[r].list.length||(e.detachEvent&&e.detachEvent("on"+r,e._events[r]),delete e._events[r]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,r=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var n=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+r,n)};this.attachEvent("on"+r,n)}this.fireEvent("on"+r,t)}catch(n){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[r]&&e._events[r].call(e,t),"function"==typeof e["on"+r]&&e["on"+r].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new n("DOMContentLoaded",{bubbles:!0}))})))}function n(t,r){if(!t)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!r||r.bubbles===e)&&r.bubbles,i=!(!r||r.cancelable===e)&&r.cancelable;return n.initEvent(t,o,i),n}return(n=document.createEventObject()).type=t,n.bubbles=!(!r||r.bubbles===e)&&r.bubbles,n.cancelable=!(!r||r.cancelable===e)&&r.cancelable,n}}(),"XMLHttpRequest"in t&&"prototype"in t.XMLHttpRequest&&"addEventListener"in t.XMLHttpRequest.prototype||function(t,e){t.XMLHttpRequest=function(){var t=this,r=t._request=e?new e:new ActiveXObject("MSXML2.XMLHTTP.3.0");r.onreadystatechange=function(){t.readyState=r.readyState;var e=4===t.readyState;t.response=t.responseText=e?r.responseText:null,t.status=e?r.status:null,t.statusText=e?r.statusText:null,t.dispatchEvent(new Event("readystatechange")),e&&t.dispatchEvent(new Event("load"))},"onerror"in r&&(r.onerror=function(){t.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var r=t.XMLHttpRequest.prototype;r.addEventListener=t.addEventListener,r.removeEventListener=t.removeEventListener,r.dispatchEvent=t.dispatchEvent,r.abort=function(){return this._request()},r.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},r.getResponseHeader=function(t){return this._request.getResponseHeader(t)},r.open=function(t,e){this._request.open(t,e,arguments[2],arguments[3],arguments[4])},r.overrideMimeType=function(t){this._request.overrideMimeType(t)},r.send=function(){this._request.send(0 in arguments?arguments[0]:null)},r.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(t,t.XMLHttpRequest),"fetch"in t||function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(r){"use strict";var n={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var r={next:function(){var r=t.shift();return{done:r===e,value:r}}};return n.iterable&&(r[Symbol.iterator]=function(){return r}),r}function s(t){this.map={},t instanceof s?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function f(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}s.prototype.append=function(t,e){t=a(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},s.prototype.delete=function(t){delete this.map[a(t)]},s.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},s.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},s.prototype.set=function(t,e){this.map[a(t)]=c(e)},s.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},s.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),u(t)},s.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),u(t)},s.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),u(t)},n.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),h.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function v(t,r){r||(r={}),this.type="default",this.status=r.status===e?200:r.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in r?r.statusText:"OK",this.headers=new s(r.headers),this.url=r.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},d.call(b.prototype),d.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];v.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},r.DOMException=t.DOMException;try{new r.DOMException}catch(t){r.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},r.DOMException.prototype=Object.create(Error.prototype),r.DOMException.prototype.constructor=r.DOMException}function g(t,e){return new Promise((function(o,i){var a=new b(t,e);if(a.signal&&a.signal.aborted)return i(new r.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function u(){c.abort()}c.onload=function(){var t,e,r={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new s,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};r.url="responseURL"in c?c.responseURL:r.headers.get("X-Request-URL");var n="response"in c?c.response:c.responseText;o(new v(n,r))},c.onerror=function(){i(new TypeError("Network request failed"))},c.ontimeout=function(){i(new TypeError("Network request failed"))},c.onabort=function(){i(new r.DOMException("Aborted","AbortError"))},c.open(a.method,a.url,!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&n.blob&&(c.responseType="blob"),a.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),a.signal&&(a.signal.addEventListener("abort",u),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",u)}),c.send(void 0===a._bodyInit?null:a._bodyInit)}))}g.polyfill=!0,t.fetch=g,t.Headers=s,t.Request=b,t.Response=v,r.Headers=s,r.Request=b,r.Response=v,r.fetch=g,Object.defineProperty(r,"__esModule",{value:!0})}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});