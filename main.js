!function(){"use strict";var e,n,t,r,o,a,i,c,u,s,l,f,p,d,m,v,A,h,y,g,b={145:function(e,n,t){var r=t(15),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  background: #000;\n  color: #e4e4e4;\n}\n.quote {\n  text-align: center;\n}\n#center-image {\n  max-width: 640px;\n  max-height: 640px;\n  margin: 64px;\n}\n","",{version:3,sources:["webpack://./src/App.less"],names:[],mappings:"AAEA;EACE,gBAAA;EACA,cAAA;AADF;AAIA;EACE,kBAAA;AAFF;AAKA;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;AAHF",sourcesContent:["@import './Constants.less';\n\nbody {\n  background: #000;\n  color: #e4e4e4;\n}\n\n.quote {\n  text-align: center;\n}\n\n#center-image {\n  max-width: 640px;\n  max-height: 640px;\n  margin: 64px;\n}"],sourceRoot:""}]),n.Z=i},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},15:function(e){function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),s="/*# ".concat(u," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}},789:function(e,n,t){n.Z=t.p+"images/favicon.png"},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=t(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var m=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=u}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},x={};function E(e){var n=x[e];if(void 0!==n)return n.exports;var t=x[e]={id:e,exports:{}};return b[e](t,t.exports,E),t.exports}E.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(n,{a:n}),n},E.d=function(e,n){for(var t in n)E.o(n,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},E.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},E.p="/",e=React,n=E.n(e),t=ReactDOM,r=E.n(t),o=ReactBootstrap,a=function(){return n().createElement(n().Fragment,null,n().createElement(o.Container,null,n().createElement("div",{className:"d-flex justify-content-center"},n().createElement(o.Image,{id:"center-image",src:E(789).Z})),n().createElement("h2",{className:"quote"},'"Diversification is the only free lunch."'),n().createElement("h3",{className:"quote"},"- Harry Markowitz")))},i=E(379),c=E.n(i),u=E(795),s=E.n(u),l=E(569),f=E.n(l),p=E(565),d=E.n(p),m=E(216),v=E.n(m),A=E(589),h=E.n(A),y=E(145),(g={}).styleTagTransform=h(),g.setAttributes=d(),g.insert=f().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=v(),c()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals,r().render(n().createElement(a,null),document.getElementById("root"))}();