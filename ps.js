!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ps",[],t):"object"==typeof exports?exports.ps=t():e.ps=t()}(this,(function(){return function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={5:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=this.webpackJsonp_name_=this.webpackJsonp_name_||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var f=c;return i.push([45,8]),n()}({45:function(e,t,n){function r(){n(46)}var o=function(){return["findIndex"in Array.prototype?0:1,"values"in Object?0:1,"Promise"in this?0:1,"fetch"in this?0:1]}.call(window);if(-1===o.indexOf(1))r();else{var i=document.createElement("script");i.src="/polyfills."+o.join("")+".js",i.onload=r,i.onerror=function(e){console.error("Could not load the polyfills: "+e)},document.head.appendChild(i)}},46:function(e,t,n){var r=n(47),o=[];"springernature.com,springer.com,nature.com,acs.org,getft.io,seamlessaccess.org,sunet.se,swamid.se,literatumonline.com,sciencedirect.com,safire.ac.za,inacademia.org,getfulltextresearch.com".length>0&&(o="springernature.com,springer.com,nature.com,acs.org,getft.io,seamlessaccess.org,sunet.se,swamid.se,literatumonline.com,sciencedirect.com,safire.ac.za,inacademia.org,getfulltextresearch.com".split(",").map((function(e){return e.trim()})));var i=n(49),a=6e5;function s(){return Date.now()}Date.now||(Date.now=function(){return(new Date).getTime()}),String.prototype.hexEncode=function(){var e,t="";for(e=0;e<this.length;e++)t+=("000"+this.charCodeAt(e).toString(16)).slice(-4);return t},String.prototype.hexDecode=function(){var e,t=this.match(/.{1,4}/g)||[],n="";for(e=0;e<t.length;e++)n+=String.fromCharCode(parseInt(t[e],16));return n};function c(e){e||(e="seamlessaccess.org");var t=i.initNamespaceStorage(e).localStorage;return t.set("_name",e),t}function u(e){if(e.entity){var t=e.entity;if(t.entityID&&!t.entity_id&&(t.entity_id=t.entityID),t.icon&&!t.entity_icon&&(t.entity_icon=t.icon),t.domains){var n=t.domains.split(";")||[];t.domain=n[0]}t.last_refresh&&!t.last_use&&(t.last_use=t.last_refresh),t.title||(t.title=t.entity_id)}return e}function f(e,t){return e.isSet(t)?e.get(t):void 0}function l(e){if(o&&o.length>0&&!o.some((function(t){return e.origin.endsWith(t)})))throw"Access denied from ".concat(e.origin)}r.on("update",{window:window.parent},(function(e){l(e);var t=e.data.entity,n=c(e.data.context),r=s();t.entityID&&!t.entity_id&&(t.entity_id=t.entityID);var o=t.entity_id.hexEncode(),i=f(n,o);return!function(e,t){return void 0!==e&&void 0!==e.last_refresh&&e.last_refresh+a>t}(i,r)?i={last_refresh:r,last_use:r,entity:t}:(i.last_refresh=r,i.last_use=r,i.entity=t),n.set(o,u(i)),function(e){e.keys().filter((function(e){return void 0!==e&&"_name"!==e})).map((function(t){return u(f(e,t))})).sort((function(e,t){return t.last_use-e.last_use})).slice(3).forEach((function(t){e.remove(t.entity.entity_id.hexEncode())}))}(n),i})),r.on("entities",{window:window.parent},(function(e){l(e);var t=c(e.data.context),n=e.data.count;void 0===n&&(n=3);s();return t.keys().filter((function(e){return void 0!==e&&"_name"!==e})).map((function(e){return u(f(t,e))})).sort((function(e,t){return e.last_use-t.last_use})).slice(0,n)})),r.on("entity",{window:window.parent},(function(e){l(e);var t=c(e.data.context),n=e.data.entity_id;if(!n)throw new Error("Unable to find entity_id in request");var r=n.hexEncode(),o=f(t,r);if(o){var i=s();o.last_use=i,t.set(r,u(o))}return o})),r.on("remove",{window:window.parent},(function(e){l(e);var t=c(e.data.context),n=e.data.entity_id;void 0===n||t.remove(n.hexEncode())}))}})}));