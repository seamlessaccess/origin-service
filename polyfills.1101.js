/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(t){function e(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function r(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===i(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function n(t,e){return t[e]}function o(t,e){return e in t}function i(t){return"function"==typeof t}function a(t){return Boolean(t)}function c(t){var e=function(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function s(e){if(null===e||e===t)throw TypeError();return Object(e)}function u(e,r){var n,o=(n=r,s(e)[n]);if(null===o||o===t)return t;if(!1===i(o))throw new TypeError("Method not callable: "+r);return o}function l(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function f(t){return"object"===l(t)&&("function"==typeof t&&!!t.prototype)}function p(e){var o=arguments.length>1?arguments[1]:t;if("object"===l(e)){if(arguments.length<2)var a="default";else o===String?a="string":o===Number&&(a="number");var c="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?u(e,this.Symbol.toPrimitive):t;if(c!==t){var s=r(c,e,[a]);if("object"!==l(s))return s;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===a&&(a="number"),function(t,e){if("string"===e)var o=["toString","valueOf"];else o=["valueOf","toString"];for(var a=0;a<o.length;++a){var c=n(t,o[a]);if(i(c)){var s=r(c,t);if("object"!==l(s))return s}}throw new TypeError("Cannot convert to primitive.")}(e,a)}return e}function y(t){switch(l(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return y(p(t,"string"));default:return String(t)}}var h,d,b;function v(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function m(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}if("document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document)),"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),r=e.appendChild(document.createElement("iframe")).contentWindow.document,n=Element.prototype=r.appendChild(r.createElement("*")),o={},i=function(t,e){var r,n,a,c=t.childNodes||[],s=-1;if(1===t.nodeType&&t.constructor!==Element)for(r in t.constructor=Element,o)n=o[r],t[r]=n;for(;a=e&&c[++s];)i(a,e);return t},a=document.getElementsByTagName("*"),c=document.createElement,s=100;n.attachEvent("onpropertychange",(function(t){for(var e,r=t.propertyName,i=!o.hasOwnProperty(r),c=n[r],s=o[r],u=-1;e=a[++u];)1===e.nodeType&&(i||e[r]===s)&&(e[r]=c);o[r]=c})),n.constructor=Element,n.hasAttribute||(n.hasAttribute=function(t){return null!==this.getAttribute(t)}),u()||(document.onreadystatechange=u,t=setInterval(u,25)),document.createElement=function(t){var e=c(String(t).toLowerCase());return i(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function u(){return s--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(i(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(h=Object.defineProperty,d=Object.prototype.hasOwnProperty("__defineGetter__"),b="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(h&&(t===window||t===document||t===Element.prototype||t instanceof Element))return h(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,a="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!d)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(b);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(a){if("function"!==a)throw new TypeError("Setter must be a function");if(!d)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(b);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"findIndex"in Array.prototype||m(Array.prototype,"findIndex",(function(e){var o=s(this),u=c(n(o,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var l=arguments.length>1?arguments[1]:t,f=0;f<u;){var p=y(f),h=n(o,p),d=a(r(e,l,[h,f,o]));if(d)return f;f+=1}return-1})),"forEach"in Array.prototype||m(Array.prototype,"forEach",(function(e){var a=s(this),u=a instanceof String?a.split(""):a,l=c(n(a,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var f=arguments.length>1?arguments[1]:t,p=0;p<l;){var h=y(p),d=o(u,h);if(d){var b=n(u,h);r(e,f,[b,p,a])}p+=1}return t})),"bind"in Function.prototype||m(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},a=n.slice,c=n.concat,s=n.push,u=Math.max,l=this;if(!i(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var f,p=a.call(arguments,1),y=function(){if(this instanceof f){var e=l.apply(this,c.call(p,a.call(arguments)));return r(e)===e?e:this}return l.apply(t,c.call(p,a.call(arguments)))},h=u(0,l.length-p.length),d=[],b=0;b<h;b++)s.call(d,"$"+b);return f=Function("binder","return function ("+d.join(",")+"){ return binder.apply(this, arguments); }")(y),l.prototype&&(o.prototype=l.prototype,f.prototype=new o,o.prototype=null),f})),"freeze"in Object||m(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={test:0};return 0===Object.getOwnPropertyDescriptor(t,"test").value}catch(t){return!1}}()||function(){var t,e,r,n=Function.prototype.call,o=Object.prototype,i=n.bind(o.hasOwnProperty);function a(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){}}if((r=i(o,"__defineGetter__"))&&(t=n.bind(o.__lookupGetter__),e=n.bind(o.__lookupSetter__)),Object.defineProperty){var c=a({});if(!("undefined"==typeof document||a(document.createElement("div")))||!c)var s=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||s){m(Object,"getOwnPropertyDescriptor",(function(n,a){if("object"!=typeof n&&"function"!=typeof n||null===n)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+n);if(s)try{return s.call(Object,n,a)}catch(t){}if(i(n,a)){var c={enumerable:!0,configurable:!0};if(r){var u=n.__proto__;n.__proto__=o;var l=t(n,a),f=e(n,a);if(n.__proto__=u,l||f)return l&&(c.get=l),f&&(c.set=f),c}return c.value=n[a],c.writable=!0,c}}))}}(),!("getOwnPropertyNames"in Object)){var w={}.toString,g="".split;m(Object,"getOwnPropertyNames",(function(t){var e,r=[],n=["length","name","arguments","caller","prototype","observe","unobserve"];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(e in t="[object String]"==w.call(t)?g.call(t,""):Object(t))Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);for(var o=0,i=n.length;o<i;o++)n[o]in t&&r.push(n[o]);return r}))}function E(t,e){var r=arguments[2]||{},o=function(t,e){var r=n(t,"prototype");return"object"!==l(r)&&(r=e),r}(t,e),i=Object.create(o);for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&Object.defineProperty(i,a,{configurable:!0,enumerable:!1,writable:!0,value:r[a]});return i}function O(o,i){var a;if(1/i==-1/0&&(i=0),!1===(a=o,"[object Array]"===Object.prototype.toString.call(a)))return e(i);var c=n(o,"constructor");if("object"===l(c)&&null===(c="Symbol"in this&&"species"in this.Symbol?n(c,this.Symbol.species):t)&&(c=t),c===t)return e(i);if(!f(c))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,n=arguments.length>1?arguments[1]:[];if(!f(t))throw new TypeError("F must be a constructor.");if(!f(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(n))):r(t,E(e,Object.prototype),n)}(c,[i])}"getPrototypeOf"in Object||m(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||m(Object,"keys",function(){"use strict";var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),i=n.call((function(){}),"prototype"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},s={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},u=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!s["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{c(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();return function(n){var s,l,f,p="[object Function]"===r.call(n),y=(s=n,l=r.call(s),(f="[object Arguments]"===l)||(f="[object Array]"!==l&&null!==s&&"object"==typeof s&&"number"==typeof s.length&&s.length>=0&&"[object Function]"===r.call(s.callee)),f),h="[object String]"===r.call(n),d=[];if(n===t||null===n)throw new TypeError("Cannot convert undefined or null to object");var b=i&&p;if(h&&n.length>0&&!e.call(n,0))for(var v=0;v<n.length;++v)d.push(String(v));if(y&&n.length>0)for(var m=0;m<n.length;++m)d.push(String(m));else for(var w in n)b&&"prototype"===w||!e.call(n,w)||d.push(String(w));if(o)for(var g=function(t){if("undefined"==typeof window||!u)return c(t);try{return c(t)}catch(t){return!1}}(n),E=0;E<a.length;++E)g&&"constructor"===a[E]||!e.call(n,a[E])||d.push(a[E]);return d}}()),"defineProperties"in Object||m(Object,"defineProperties",(function(e,r){if("object"!==l(e))throw new TypeError("Object.defineProperties called on non-object");for(var o=s(r),i=Object.keys(o),a=[],c=0;c<i.length;c++){var u=i[c],f=Object.getOwnPropertyDescriptor(o,u);if(f!==t&&f.enumerable){var p=n(o,u);a.push([u,p])}}for(c=0;c<a.length;c++){var y=a[c][0];p=a[c][1];Object.defineProperty(e,y,p)}return e})),"create"in Object||m(Object,"create",(function(t,e){if("object"!==l(t)&&"null"!==l(t))throw new TypeError("Object prototype may only be an Object or null");var r=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return r.constructor.prototype=t,1 in arguments?Object.defineProperties(r,e):r})),"filter"in Array.prototype||m(Array.prototype,"filter",(function(e){var u=s(this),l=c(n(u,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var f=arguments.length>1?arguments[1]:t,p=O(u,0),h=0,d=0;h<l;){var b=y(h),m=o(u,b);if(m){var w=n(u,b),g=a(r(e,f,[w,h,u]));g&&(v(p,y(d),w),d+=1)}h+=1}return p})),"map"in Array.prototype||m(Array.prototype,"map",(function(e){var a=s(this),u=c(n(a,"length"));if(!1===i(e))throw new TypeError(e+" is not a function");for(var l=arguments.length>1?arguments[1]:t,f=O(a,u),p=0;p<u;){var h=y(p),d=o(a,h);if(d){var b=n(a,h),m=r(e,l,[b,p,a]);v(f,h,m)}p+=1}return f})),"values"in Object||function(){var t={}.toString,e="".split;m(Object,"values",(function(r){var n="[object String]"==t.call(r)?e.call(r,""):s(r);return Object.keys(n).map((function(t){return n[t]}))}))}(),"Symbol"in this&&0===this.Symbol.length||function(t,e,r){"use strict";var n,o=0,i=""+Math.random(),a="__symbol:",c=a.length,s="__symbol@@"+i,u="defineProperty",l="defineProperties",f="getOwnPropertyNames",p="getOwnPropertyDescriptor",y="propertyIsEnumerable",h=t.prototype,d=h.hasOwnProperty,b=h[y],v=h.toString,m=Array.prototype.concat,w=t.getOwnPropertyNames?t.getOwnPropertyNames(window):[],g=t[f],E=function(t){if("[object Window]"===v.call(t))try{return g(t)}catch(t){return m.call([],w)}return g(t)},O=t[p],j=t.create,_=t.keys,T=t.freeze||t,S=t[u],P=t[l],A=O(t,f),D=function(t,e,r){if(!d.call(t,s))try{S(t,s,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[s]={}}t[s]["@@"+e]=r},L=function(t,e){var r=j(t);return E(e).forEach((function(t){R.call(e,t)&&U(r,t,e[t])})),r},x=function(){},B=function(t){return t!=s&&!d.call(F,t)},M=function(t){return t!=s&&d.call(F,t)},R=function(t){var e=""+t;return M(e)?d.call(this,e)&&this[s]["@@"+e]:b.call(this,t)},H=function(e){var r={enumerable:!1,configurable:!0,get:x,set:function(t){n(this,e,{enumerable:!1,configurable:!0,writable:!0,value:t}),D(this,e,!0)}};try{S(h,e,r)}catch(t){h[e]=r.value}return T(F[e]=S(t(e),"constructor",N))},I=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return H(a.concat(e||"",i,++o))},F=j(null),N={value:I},q=function(t){return F[t]},U=function(t,e,r){var o=""+e;return M(o)?(n(t,o,r.enumerable?function(t){var e=j(t);return e.enumerable=!1,e}(r):r),D(t,o,!!r.enumerable)):S(t,e,r),t},k=function(t){return E(t).filter(t===h?(e=t,function(t){return d.call(e,s)&&d.call(e[s],"@@"+t)}):M).map(q);var e};A.value=U,S(t,u,A),A.value=k,S(t,"getOwnPropertySymbols",A),A.value=function(t){return E(t).filter(B)},S(t,f,A),A.value=function(t,e){var r=k(e);return r.length?_(e).concat(r).forEach((function(r){R.call(e,r)&&U(t,r,e[r])})):P(t,e),t},S(t,l,A),A.value=R,S(h,y,A),A.value=I,S(r,"Symbol",A),A.value=function(t){var e=a.concat(a,t,i);return e in h?F[e]:H(e)},S(I,"for",A),A.value=function(t){if(B(t))throw new TypeError(t+" is not a symbol");return d.call(F,t)?t.slice(2*c,-i.length):void 0},S(I,"keyFor",A),A.value=function(t,e){var r=O(t,e);return r&&M(e)&&(r.enumerable=R.call(t,e)),r},S(t,p,A),A.value=function(t,e){return 1===arguments.length||void 0===e?j(t):L(t,e)},S(t,"create",A);var C=null===function(){return this}.call(null);A.value=C?function(){var t=v.call(this);return"[object String]"===t&&M(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=v.call(this);return"[object String]"===t&&M(this)?"[object Symbol]":t},S(h,"toString",A),n=function(t,e,r){var n=O(h,e);delete h[e],S(t,e,r),t!==h&&S(h,e,n)}}(Object,0,this),"Symbol"in this&&"iterator"in this.Symbol||Object.defineProperty(Symbol,"iterator",{value:Symbol("iterator")}),"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this),function(t){if(!("Event"in t))return!1;try{return new Event("click"),!0}catch(t){return!1}}(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var r=window.Event&&window.Event.prototype||null;o.NONE=0,o.CAPTURING_PHASE=1,o.AT_TARGET=2,o.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=o,r&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:r}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,r=arguments[0],o=arguments[1];if(t===window&&r in e)throw new Error("In IE8 the event: "+r+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[r]||(t._events[r]=function(e){var r,o=t._events[e.type].list,i=o.slice(),a=-1,c=i.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++a<c&&!e.cancelImmediate;)a in i&&-1!==n(o,r=i[a])&&"function"==typeof r&&r.call(t,e)},t._events[r].list=[],t.attachEvent&&t.attachEvent("on"+r,t._events[r])),t._events[r].list.push(o)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,r=arguments[0],o=arguments[1];e._events&&e._events[r]&&e._events[r].list&&-1!==(t=n(e._events[r].list,o))&&(e._events[r].list.splice(t,1),e._events[r].list.length||(e.detachEvent&&e.detachEvent("on"+r,e._events[r]),delete e._events[r]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,r=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var n=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+r,n)};this.attachEvent("on"+r,n)}this.fireEvent("on"+r,t)}catch(n){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[r]&&e._events[r].call(e,t),"function"==typeof e["on"+r]&&e["on"+r].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new o("DOMContentLoaded",{bubbles:!0}))})))}function n(t,e){for(var r=-1,n=t.length;++r<n;)if(r in t&&t[r]===e)return r;return-1}function o(e,r){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!r||r.bubbles===t)&&r.bubbles,i=!(!r||r.cancelable===t)&&r.cancelable;return n.initEvent(e,o,i),n}return(n=document.createEventObject()).type=e,n.bubbles=!(!r||r.bubbles===t)&&r.bubbles,n.cancelable=!(!r||r.cancelable===t)&&r.cancelable,n}}(),"XMLHttpRequest"in this&&"prototype"in this.XMLHttpRequest&&"addEventListener"in this.XMLHttpRequest.prototype||function(t,e){t.XMLHttpRequest=function(){var t=this,r=t._request=e?new e:new ActiveXObject("MSXML2.XMLHTTP.3.0");r.onreadystatechange=function(){t.readyState=r.readyState;var e=4===t.readyState;t.response=t.responseText=e?r.responseText:null,t.status=e?r.status:null,t.statusText=e?r.statusText:null,t.dispatchEvent(new Event("readystatechange")),e&&t.dispatchEvent(new Event("load"))},"onerror"in r&&(r.onerror=function(){t.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var r=t.XMLHttpRequest.prototype;r.addEventListener=t.addEventListener,r.removeEventListener=t.removeEventListener,r.dispatchEvent=t.dispatchEvent,r.abort=function(){return this._request()},r.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},r.getResponseHeader=function(t){return this._request.getResponseHeader(t)},r.open=function(t,e){this._request.open(t,e,arguments[2],arguments[3],arguments[4])},r.overrideMimeType=function(t){this._request.overrideMimeType(t)},r.send=function(){this._request.send(0 in arguments?arguments[0]:null)},r.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(this,this.XMLHttpRequest),"fetch"in this||function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(e){"use strict";var r={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(r.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function c(e){var n={next:function(){var r=e.shift();return{done:r===t,value:r}}};return r.iterable&&(n[Symbol.iterator]=function(){return n}),n}function s(t){this.map={},t instanceof s?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function f(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r.arrayBuffer&&r.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t,e,r,n=u(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}s.prototype.append=function(t,e){t=i(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},s.prototype.delete=function(t){delete this.map[i(t)]},s.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},s.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},s.prototype.set=function(t,e){this.map[i(t)]=a(e)},s.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},s.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),c(t)},s.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),c(t)},s.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),c(t)},r.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function d(t,e){var r,n,o=(e=e||{}).body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),h.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function v(e,r){r||(r={}),this.type="default",this.status=r.status===t?200:r.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in r?r.statusText:"OK",this.headers=new s(r.headers),this.url=r.url||"",this._initBody(e)}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},y.call(d.prototype),y.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];v.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},e.DOMException=self.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function w(t,n){return new Promise((function(o,i){var a=new d(t,n);if(a.signal&&a.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function u(){c.abort()}c.onload=function(){var t,e,r={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new s,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};r.url="responseURL"in c?c.responseURL:r.headers.get("X-Request-URL");var n="response"in c?c.response:c.responseText;o(new v(n,r))},c.onerror=function(){i(new TypeError("Network request failed"))},c.ontimeout=function(){i(new TypeError("Network request failed"))},c.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},c.open(a.method,a.url,!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&r.blob&&(c.responseType="blob"),a.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),a.signal&&(a.signal.addEventListener("abort",u),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",u)}),c.send(void 0===a._bodyInit?null:a._bodyInit)}))}w.polyfill=!0,self.fetch=w,self.Headers=s,self.Request=d,self.Response=v,e.Headers=s,e.Request=d,e.Response=v,e.fetch=w,Object.defineProperty(e,"__esModule",{value:!0})}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});