!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ps",[],e):"object"==typeof exports?exports.ps=e():t.ps=e()}(this,(function(){return function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(f&&f(e);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={5:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=this.webpackJsonp_name_=this.webpackJsonp_name_||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=s;return i.push([38,9]),n()}({38:function(t,e,n){function r(){n(39)}var o=function(){return["findIndex"in Array.prototype?0:1,"values"in Object?0:1,"Promise"in this?0:1,"fetch"in this?0:1]}.call(window);if(-1===o.indexOf(1))r();else{var i=document.createElement("script");i.src="/polyfills."+o.join("")+".js",i.onload=r,i.onerror=function(t){console.error("Could not load the polyfills: "+t)},document.head.appendChild(i)}},39:function(t,e,n){var r=n(40),o=n(42),i=6e5;function a(){return Date.now()}Date.now||(Date.now=function(){return(new Date).getTime()}),String.prototype.hexEncode=function(){var t,e="";for(t=0;t<this.length;t++)e+=("000"+this.charCodeAt(t).toString(16)).slice(-4);return e},String.prototype.hexDecode=function(){var t,e=this.match(/.{1,4}/g)||[],n="";for(t=0;t<e.length;t++)n+=String.fromCharCode(parseInt(e[t],16));return n};function u(t){t||(t="seamlessaccess.org");var e=o.initNamespaceStorage(t).localStorage;return e.set("_name",t),e}function s(t){if(t.entity){var e=t.entity;if(e.entityID&&!e.entity_id&&(e.entity_id=e.entityID),e.icon&&!e.entity_icon&&(e.entity_icon=e.icon),e.domains){var n=e.domains.split(";")||[];e.domain=n[0]}e.last_refresh&&!e.last_use&&(e.last_use=e.last_refresh),e.title||(e.title=e.entity_id)}return t}function c(t,e){return t.isSet(e)?t.get(e):void 0}r.on("update",{window:window.parent},(function(t){var e=t.data.entity,n=u(t.data.context),r=a();e.entityID&&!e.entity_id&&(e.entity_id=e.entityID);var o=e.entity_id.hexEncode(),f=c(n,o);return!function(t,e){return void 0!==t&&void 0!==t.last_refresh&&t.last_refresh+i>e}(f,r)?f={last_refresh:r,last_use:r,entity:e}:(f.last_refresh=r,f.last_use=r,f.entity=e),console.log(f),n.set(o,s(f)),function(t){t.keys().filter((function(t){return void 0!==t&&"_name"!==t})).map((function(e){return s(c(t,e))})).sort((function(t,e){return e.last_use-t.last_use})).slice(3).forEach((function(e){t.remove(e.entity.entity_id.hexEncode())}))}(n),f})),r.on("entities",{window:window.parent},(function(t){var e=u(t.data.context),n=t.data.count;void 0===n&&(n=3);a();return console.log(e.keys()),e.keys().filter((function(t){return void 0!==t&&"_name"!==t})).map((function(t){return s(c(e,t))})).sort((function(t,e){return t.last_use-e.last_use})).slice(0,n)})),r.on("entity",{window:window.parent},(function(t){var e=u(t.data.context),n=t.data.entity_id;if(!n)throw new Error("Unable to find entity_id in request");var r=n.hexEncode(),o=c(e,r);if(console.log(o),o){var i=a();o.last_use=i,e.set(r,s(o))}return o})),r.on("remove",{window:window.parent},(function(t){var e=u(t.data.context),n=t.data.entity_id;void 0===n||e.remove(n.hexEncode())}))}})}));