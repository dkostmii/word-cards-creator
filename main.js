(()=>{"use strict";var t={367:(t,e,M)=>{M.d(e,{Z:()=>o});var n=M(81),r=M.n(n),a=M(645),i=M.n(a)()(r());i.push([t.id,".creator{display:flex;flex-direction:column;align-items:center;padding-top:5rem;gap:5rem}",""]);const o=i},328:(t,e,M)=>{M.d(e,{Z:()=>o});var n=M(81),r=M.n(n),a=M(645),i=M.n(a)()(r());i.push([t.id,'body{font-family:"Roboto",sans-serif;color:#fff;background-color:#212ec9;padding:5rem 10rem;margin:0}@media screen and (max-width: 800px){body{padding:2.5rem 5rem}}@media screen and (max-width: 550px){body{padding:3.75rem 2.5rem}}input,label,button,textarea{font-family:"Roboto",sans-serif}.creator__canvas{display:flex;justify-content:center}.creator__canvas>canvas{border:4px #fff solid}',""]);const o=i},359:(t,e,M)=>{M.d(e,{Z:()=>o});var n=M(81),r=M.n(n),a=M(645),i=M.n(a)()(r());i.push([t.id,'body{font-family:"Roboto",sans-serif;color:#fff;background-color:#212ec9;padding:5rem 10rem;margin:0}@media screen and (max-width: 800px){body{padding:2.5rem 5rem}}@media screen and (max-width: 550px){body{padding:3.75rem 2.5rem}}input,label,button,textarea{font-family:"Roboto",sans-serif}.creator__form{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:3rem;gap-flex-wrap:wrap}.button{padding:.5rem;font-family:"Exo 2",sans-serif;font-size:1.5rem;max-width:480px;background:#fff;outline:none;border:none;color:#212ec9;cursor:pointer}.button__alt{background:none;border-bottom:2px #fff solid;color:#fff}.button__save{padding:.5rem 2rem}.button__save:disabled{opacity:.65;cursor:default}.input{display:flex;flex-direction:column;gap:1rem;flex:1 1 45%;cursor:pointer}@media screen and (max-width: 1200px){.input{flex:1 1 100%}}.input>span{padding-left:.5rem}.input>input{background:rgba(0,0,0,0);color:#fff;font-size:2.25rem;padding:.5rem;border:none;outline:none;width:100%}.input>input:focus{border-bottom:2px #fff solid}.input__word__original>input{font-family:"Archivo",sans-serif}.input__word__translated>input{font-family:"Exo 2",sans-serif;font-style:italic}',""]);const o=i},144:(t,e,M)=>{M.d(e,{Z:()=>o});var n=M(81),r=M.n(n),a=M(645),i=M.n(a)()(r());i.push([t.id,'.header{display:flex;justify-content:space-between;align-items:center;gap:1rem}.header__caption{font-family:"Exo 2";font-weight:400;font-size:1.75rem;text-align:right}.header__logo{width:125px;height:auto}@media screen and (max-width: 480px){.header__caption{font-size:1.25rem}.header__logo{width:90px}}',""]);const o=i},402:(t,e,M)=>{M.d(e,{Z:()=>o});var n=M(81),r=M.n(n),a=M(645),i=M.n(a)()(r());i.push([t.id,'body{font-family:"Roboto",sans-serif;color:#fff;background-color:#212ec9;padding:5rem 10rem;margin:0}@media screen and (max-width: 800px){body{padding:2.5rem 5rem}}@media screen and (max-width: 550px){body{padding:3.75rem 2.5rem}}input,label,button,textarea{font-family:"Roboto",sans-serif}',""]);const o=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var M="",n=void 0!==e[5];return e[4]&&(M+="@supports (".concat(e[4],") {")),e[2]&&(M+="@media ".concat(e[2]," {")),n&&(M+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),M+=t(e),n&&(M+="}"),e[2]&&(M+="}"),e[4]&&(M+="}"),M})).join("")},e.i=function(t,M,n,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var N=[].concat(t[c]);n&&i[N[0]]||(void 0!==a&&(void 0===N[5]||(N[1]="@layer".concat(N[5].length>0?" ".concat(N[5]):""," {").concat(N[1],"}")),N[5]=a),M&&(N[2]?(N[1]="@media ".concat(N[2]," {").concat(N[1],"}"),N[2]=M):N[2]=M),r&&(N[4]?(N[1]="@supports (".concat(N[4],") {").concat(N[1],"}"),N[4]=r):N[4]="".concat(r)),e.push(N))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function M(t){for(var M=-1,n=0;n<e.length;n++)if(e[n].identifier===t){M=n;break}return M}function n(t,n){for(var a={},i=[],o=0;o<t.length;o++){var u=t[o],c=n.base?u[0]+n.base:u[0],N=a[c]||0,j="".concat(c," ").concat(N);a[c]=N+1;var d=M(j),l={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(l);else{var s=r(l,n);n.byIndex=o,e.splice(o,0,{identifier:j,updater:s,references:1})}i.push(j)}return i}function r(t,e){var M=e.domAPI(e);return M.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;M.update(t=e)}else M.remove()}}t.exports=function(t,r){var a=n(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var o=M(a[i]);e[o].references--}for(var u=n(t,r),c=0;c<a.length;c++){var N=M(a[c]);0===e[N].references&&(e[N].updater(),e.splice(N,1))}a=u}}},569:t=>{var e={};t.exports=function(t,M){var n=function(t){if(void 0===e[t]){var M=document.querySelector(t);if(window.HTMLIFrameElement&&M instanceof window.HTMLIFrameElement)try{M=M.contentDocument.head}catch(t){M=null}e[t]=M}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(M)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,M)=>{t.exports=function(t){var e=M.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(M){!function(t,e,M){var n="";M.supports&&(n+="@supports (".concat(M.supports,") {")),M.media&&(n+="@media ".concat(M.media," {"));var r=void 0!==M.layer;r&&(n+="@layer".concat(M.layer.length>0?" ".concat(M.layer):""," {")),n+=M.css,r&&(n+="}"),M.media&&(n+="}"),M.supports&&(n+="}");var a=M.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,M)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function M(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,M),a.exports}M.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return M.d(e,{a:e}),e},M.d=(t,e)=>{for(var n in e)M.o(e,n)&&!M.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},M.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),M.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;M.g.importScripts&&(t=M.g.location+"");var e=M.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),M.p=t})(),M.nc=void 0,(()=>{var t=M(379),e=M.n(t),n=M(795),r=M.n(n),a=M(569),i=M.n(a),o=M(565),u=M.n(o),c=M(216),N=M.n(c),j=M(589),d=M.n(j),l=M(402),s={};s.styleTagTransform=d(),s.setAttributes=u(),s.insert=i().bind(null,"head"),s.domAPI=r(),s.insertStyleElement=N(),e()(l.Z,s),l.Z&&l.Z.locals&&l.Z.locals;var g=M(144),L={};L.styleTagTransform=d(),L.setAttributes=u(),L.insert=i().bind(null,"head"),L.domAPI=r(),L.insertStyleElement=N(),e()(g.Z,L),g.Z&&g.Z.locals&&g.Z.locals;var T=M(367),A={};A.styleTagTransform=d(),A.setAttributes=u(),A.insert=i().bind(null,"head"),A.domAPI=r(),A.insertStyleElement=N(),e()(T.Z,A),T.Z&&T.Z.locals&&T.Z.locals;const D=function(t,e,M){if(e>M)throw new Error("Expected min to be less or equal to max");return t<e?e:t>M?M:t};var w=M(328),z={};z.styleTagTransform=d(),z.setAttributes=u(),z.insert=i().bind(null,"head"),z.domAPI=r(),z.insertStyleElement=N(),e()(w.Z,z),w.Z&&w.Z.locals&&w.Z.locals;const y=M.p+"aaf06eed978cb03dacd7.svg";function I(t){var e=D(12/t.originalWord.length,.45,4);return{originalWordFontSize:56*e,translatedWordFontSize:32*e+12*D(8/t.translatedWord.length,.45,4)}}var f=M(359),p={};p.styleTagTransform=d(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=N(),e()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var E=function(){return E=Object.assign||function(t){for(var e,M=1,n=arguments.length;M<n;M++)for(var r in e=arguments[M])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},E.apply(this,arguments)},x=4096;function m(t){"text"===t.type&&(t.value=t.value.trim().replace(/[^A-Za-zÄÖÜäöüß0-9А-Яа-яїґєіЇҐЄІ \.\-]/g,""))}const C=function(t,e){var M=t,n=document.createElement("div");n.classList.add("creator__form");var r=document.createElement("label");r.innerHTML="<span>Слово німецькою</span>",r.classList.add("input","input__word","input__word__original");var a=document.createElement("input");a.type="text",a.value=M.originalWord,r.appendChild(a);var i=document.createElement("label");i.innerHTML="<span>Переклад</span>",i.classList.add("input","input__word","input__word__translated");var o=document.createElement("input");o.type="text",o.value=M.translatedWord,i.appendChild(o);var u=document.createElement("label");u.innerHTML="<span>Картинка</span>";var c=u.querySelector("span");u.classList.add("input","input__file");var N=document.createElement("button");N.classList.add("button","input__file__button"),N.innerHTML="Оберіть картинку",u.appendChild(N);var j=document.createElement("input");return j.type="file",j.accept="image/png,image/jpeg",j.addEventListener("change",(function(){if(c.innerHTML="Картинка",j.files.length>0){var t=j.files[0];N.innerHTML=j.value.split(/(\\|\/)/g).pop(),N.classList.add("button__alt"),function(t){return e=this,M=void 0,r=function(){return function(t,e){var M,n,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(u){return function(o){if(M)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(i=0)),i;)try{if(M=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{M=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,(function(e){return[2,new Promise((function(e,M){if(t.size>10485760)return M("MAXFILESIZE");var n=new FileReader;n.readAsDataURL(t),n.addEventListener("loadend",(function(){if("string"!=typeof n.result)return M("UNKNOWNERR");var t=new Image;t.src=n.result,t.onload=function(){return t.width>x||t.height>x?M("LARGESTSIDE"):e(n.result)}}))}))]}))},new((n=void 0)||(n=Promise))((function(t,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(e){var M;e.done?t(e.value):(M=e.value,M instanceof n?M:new n((function(t){t(M)}))).then(i,o)}u((r=r.apply(e,M||[])).next())}));var e,M,n,r}(t).catch((function(t){return c.innerHTML="MAXFILESIZE"===t?"Максимальний розмір картинки ".concat(10," Мб"):"LARGESTSIDE"===t?"Картинка завелика.<br>Спробуй змешити картинку до ".concat(x," пікселів у найбільшій стороні."):"Виникла помилка при завантаженні.<br>Спробуй ще раз.",""})).then((function(t){t&&(M=E(E({},M),{imageDataUrl:t}),e(M))}))}else N.innerHTML="Оберіть картинку",N.classList.remove("button__alt")})),N.addEventListener("click",(function(){j.click()})),n.append(r,i,u),e instanceof Function&&(a.addEventListener("change",(function(){m(a),M=E(E({},M),{originalWord:a.value}),e(M)})),o.addEventListener("change",(function(){m(o),M=E(E({},M),{translatedWord:o.value}),e(M)}))),n};var O=document.getElementById("root");O.appendChild(function(){var t=document.createElement("header"),e=document.createElement("div");e.classList.add("header"),t.appendChild(e);var M=document.createElement("img");M.classList.add("header__logo"),M.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+Cjxzdmcgd2lkdGg9IjI1MCIgaGVpZ2h0PSIxNTMuNTEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY2LjE0NiA0MC42MTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDcuNDY0IDB2MjAuMTg5aDYuMjI0OXYtNy41NDY0YzAtMC42MTI2MyAwLjEzODktMS4xNTExIDAuNDE2NzktMS42MTUyIDAuMjk2NDItMC40ODI2OCAwLjY5NDg3LTAuODUzOTYgMS4xOTUxLTEuMTEzOSAwLjUxODczLTAuMjc4NDYgMS4xMTE2LTAuNDE3NjYgMS43Nzg1LTAuNDE3NjYgMC40ODE2OCAwIDAuODg5MjYgMC4wNzQyNjYgMS4yMjI3IDAuMjIyNzggMC4zNTIgMC4xMjk5NSAwLjYzOTEyIDAuMzE1NiAwLjg2MTQ0IDAuNTU2OTMgMC4yMjIzMSAwLjI0MTM0IDAuMzg4OTcgMC41MzgzOCAwLjUwMDEyIDAuODkxMSAwLjExMTE2IDAuMzM0MTYgMC4xNjY4MiAwLjY5NjEzIDAuMTY2ODIgMS4wODZ2Ny45MzY0aDYuMjI0OHYtOC42ODgyYzAtMS4zOTIzLTAuMjUwMDctMi41NjE4LTAuNzUwMjctMy41MDg2LTAuNDgxNjgtMC45NDY3OC0xLjIxMzYtMS42NTIyLTIuMTk1NS0yLjExNjQtMC45NjMzNy0wLjQ4MjY4LTIuMTc2OC0wLjcyNDExLTMuNjQwNC0wLjcyNDExLTAuNjg1NDcgMC0xLjM2MTcgMC4wNzQyNjMtMi4wMjg3IDAuMjIyNzgtMC42NjY5NSAwLjEyOTk1LTEuMjk2OCAwLjM0MzQtMS44ODk3IDAuNjQwNDMtMC41OTI4NSAwLjI5NzAzLTEuMTM5MyAwLjY4Njk3LTEuNjM5NSAxLjE2OTZoLTAuMjIyMzF2LTcuMTg0NnptLTM2LjM0OCAwLjY5NjIyYy0xLjQwOCAwLTIuNzYwNSAwLjExMTM4LTQuMDU3NCAwLjMzNDE2LTEuMjk2OCAwLjIyMjc3LTIuNDQ1NSAwLjU3NTU4LTMuNDQ1OSAxLjA1ODMtMS4wMDA0IDAuNDgyNjgtMS43OTcgMS4xMTM5LTIuMzg5OCAxLjg5MzYtMC41NzQzMSAwLjc3OTctMC44NjE2IDEuNzI2NC0wLjg2MTYgMi44NDAzIDAgMS4wMzk2IDAuMjAzODggMS45MjE0IDAuNjExNDUgMi42NDU0IDAuNDI2MSAwLjcyNDAyIDAuOTkxMiAxLjMxODEgMS42OTUyIDEuNzgyMiAwLjcyMjUyIDAuNDY0MTEgMS41MTkxIDAuODM1NCAyLjM4OTggMS4xMTM5IDAuODg5MjYgMC4yNTk5MSAxLjgwNjMgMC40NjQyIDIuNzUxMSAwLjYxMjcyIDAuOTQ0ODQgMC4xNDg1MiAxLjg1MjcgMC4yNjkwNSAyLjcyMzUgMC4zNjE4NyAwLjg4OTI2IDAuMDkyODMgMS42ODU4IDAuMTk1MDYgMi4zODk4IDAuMzA2NDUgMC43MjI1MiAwLjA5MjgzIDEuMjg3NiAwLjIzMjAyIDEuNjk1MiAwLjQxNzY2IDAuNDI2MSAwLjE4NTY0IDAuNjM5MTIgMC40NDU1NSAwLjYzOTEyIDAuNzc5NzEgMCAwLjI0MTMzLTAuMDkyNTUgMC40NDU0Ni0wLjI3NzgxIDAuNjEyNTQtMC4xNjY3NCAwLjE0ODUyLTAuMzk4MzYgMC4yNjkyMy0wLjY5NDc4IDAuMzYyMDUtMC4yNzc4OSAwLjA5MjgzLTAuNjAyMDYgMC4xNjcwOC0wLjk3MjU5IDAuMjIyNzgtMC4zNTIgMC4wMzcxMi0wLjcyMjUzIDAuMDY0OTMtMS4xMTE2IDAuMDgzNDloLTEuMDgzN2MtMC44NzA3MyAwLTEuNjM5Ny0wLjA0NjI3LTIuMzA2Ny0wLjEzOTEtMC42NjY5NS0wLjExMTM5LTEuMTg1Ny0wLjMxNTY4LTEuNTU2Mi0wLjYxMjcyLTAuMzcwNTItMC4yOTcwMi0wLjU1NTc5LTAuNzIzOTMtMC41NTU3OS0xLjI4MDl2LTAuMTY3MTdjMC0wLjA3NDI2IDAuMDA5MzEtMC4xNDg1MiAwLjAyNzgzMy0wLjIyMjc3aC02LjY5NzNjLTAuMDE4NTI1IDAuMDc0MjU1LTAuMDI3NjYxIDAuMTQ4NTItMC4wMjc2NjEgMC4yMjI3N3YwLjEzOTI4YzAgMS4yODEgMC4zMDU1NiAyLjM0ODQgMC45MTY5MiAzLjIwMjMgMC42MTEzNyAwLjgzNTQgMS40NTQ0IDEuNDk0NCAyLjUyOSAxLjk3NzEgMS4wNzQ1IDAuNDY0MSAyLjMyNSAwLjc4OTEyIDMuNzUxNSAwLjk3NDc2IDEuNDI2NSAwLjIwNDIyIDIuOTY0MSAwLjMwNjI4IDQuNjEzIDAuMzA2MjggMi4wMDA4IDAgMy43ODg3LTAuMjIyNzggNS4zNjM0LTAuNjY4MzMgMS41OTMzLTAuNDY0MTEgMi44NDM4LTEuMTg4MiAzLjc1MTUtMi4xNzIxIDAuOTI2MzEtMC45ODM5MSAxLjM4OTYtMi4yNjQ4IDEuMzg5Ni0zLjg0MjggMC0xLjAwMjUtMC4yMTMxOC0xLjg0NzEtMC42MzkyOS0yLjUzNC0wLjQwNzU4LTAuNjg2ODgtMC45NzI1LTEuMjUzMi0xLjY5NS0xLjY5ODctMC43MDQtMC40NDU1NS0xLjUwMDctMC43ODkwNC0yLjM5LTEuMDMwNC0wLjg3MDc0LTAuMjU5OTEtMS43Nzg0LTAuNDU0NzItMi43MjMzLTAuNTg0NjYtMC45NDQ4NC0wLjE0ODUyLTEuODYxOS0wLjI2OTIyLTIuNzUxMS0wLjM2MjA1LTAuODcwNzQtMC4wOTI4MTgtMS42Njc1LTAuMTg1NzMtMi4zOS0wLjI3ODU1LTAuNzA0LTAuMTExMzktMS4yNjkxLTAuMjU5OTEtMS42OTUyLTAuNDQ1NTUtMC40MDc1OC0wLjE4NTY0LTAuNjExMjgtMC40NDU1NS0wLjYxMTI4LTAuNzc5NzEgMC0wLjIyMjc4IDAuMTM4OTEtMC40MjY5IDAuNDE2OC0wLjYxMjU0IDAuMjk2NDItMC4yMDQyMiAwLjc0MTA1LTAuMzYyMDYgMS4zMzM5LTAuNDczNDQgMC41OTI4NC0wLjExMTM5IDEuMzMzOS0wLjE2NyAyLjIyMzItMC4xNjcgMC44NzA3MyAwIDEuNTc0NyAwLjA5MjczOCAyLjExMiAwLjI3ODM4IDAuNTM3MjYgMC4xNjcwOCAwLjkyNjIzIDAuMzk5MTkgMS4xNjcxIDAuNjk2MjIgMC4yNDA4NCAwLjI3ODQ3IDAuMzYxMzEgMC42MDMzIDAuMzYxMzEgMC45NzQ1OXYwLjExMTM5aDYuNjQxNnYtMC4zMzQxNmMwLTEuMDc2Ny0wLjI3NzgxLTEuOTg2My0wLjgzMzYtMi43Mjg5LTAuNTU1NzktMC43NjExNS0xLjMyNDYtMS4zNzM5LTIuMzA2NS0xLjgzOC0wLjk2MzM2LTAuNDY0MTEtMi4wODQzLTAuNzk4MjctMy4zNjI2LTEuMDAyNS0xLjI1OTgtMC4yMjI3OC0yLjYxMjEtMC4zMzQxNi00LjA1NzItMC4zMzQxNnptMjMuNTY1IDQuNDU1NWMtMi4wMTk0IDAtMy43OTc5IDAuMjc4NTctNS4zMzU2IDAuODM1NS0xLjUzNzcgMC41NTY5My0yLjc0MTggMS40MTA5LTMuNjEyNSAyLjU2MTktMC44NzA3NCAxLjEzMjQtMS4zMDYxIDIuNTYxOC0xLjMwNjEgNC4yODgzIDAgMS43MjY1IDAuNDM1MzMgMy4xNTU5IDEuMzA2MSA0LjI4ODMgMC44NzA3NCAxLjEzMjQgMi4wNzQ5IDEuOTg2NCAzLjYxMjUgMi41NjE5IDEuNTM3NyAwLjU1Njk0IDMuMzE2MiAwLjgzNTUgNS4zMzU2IDAuODM1NSAxLjM3MDkgMCAyLjY1ODctMC4xMjA3MiAzLjg2MjktMC4zNjIwNiAxLjIyMjctMC4yNTk5IDIuMjg4LTAuNjQ5NjcgMy4xOTU3LTEuMTY5NSAwLjkyNjMyLTAuNTE5ODEgMS42NDg4LTEuMTc5IDIuMTY3NS0xLjk3NzMgMC41MTg3NC0wLjc5ODI4IDAuNzc4MTEtMS43MzU3IDAuNzc4MTEtMi44MTI0aC02LjA1OGMwIDAuMzg5ODUtMC4xNTc1MiAwLjc3MDMtMC40NzI0NiAxLjE0MTYtMC4yOTY0MiAwLjM3MTMtMC43MjI0NSAwLjY3NzY1LTEuMjc4MiAwLjkxODk5LTAuNTU1OCAwLjIyMjc4LTEuMjA0MyAwLjMzNDE2LTEuOTQ1NCAwLjMzNDE2LTAuOTgxODkgMC0xLjc3ODUtMC4xNTc4NC0yLjM4OTgtMC40NzM0NC0wLjU5MjgzLTAuMzE1Ni0xLjAyODMtMC43MzMxNy0xLjMwNjItMS4yNTMtMC4yNTkzNi0wLjUzODM3LTAuMzg4OTYtMS4xMjMzLTAuMzg4OTYtMS43NTQ1di0wLjU1Njk0YzAtMC42MzExOSAwLjEyOTYtMS4yMDY2IDAuMzg4OTYtMS43MjY0IDAuMjU5MzctMC41MzgzNyAwLjY2Njk1LTAuOTY1MjcgMS4yMjI3LTEuMjgwOSAwLjU3NDMyLTAuMzE1NTkgMS4zMTU0LTAuNDczNDQgMi4yMjMyLTAuNDczNDQgMC43NDEwNSAwIDEuMzgwMyAwLjEwMjA1IDEuOTE3NSAwLjMwNjI3IDAuNTU1NzkgMC4yMDQyMSAwLjk5MTEyIDAuNDkxOTIgMS4zMDYxIDAuODYzMiAwLjMxNDk0IDAuMzUyNzMgMC40NzI0NiAwLjc1MiAwLjQ3MjQ2IDEuMTk3NWg2LjMwODJjMC0xLjAzOTYtMC4yNTkzNi0xLjk0OTQtMC43NzgxMS0yLjcyOTEtMC41MTg3My0wLjc5ODI3LTEuMjQxMi0xLjQ1NzMtMi4xNjc1LTEuOTc3MS0wLjkyNjMxLTAuNTM4MzctMS45OTE1LTAuOTM3NDctMy4xOTU3LTEuMTk3NC0xLjIwNDItMC4yNTk5MS0yLjQ5MTktMC4zODk5NS0zLjg2MjktMC4zODk5NXptOS43MDEzIDIwLjE0MS0xLjU1NjYgMTEuMTM0Yy0wLjE4MzE0IDEuMzA1IDAuMDIwMzEgMi4zMzQ4IDAuNjEwNDIgMy4wODkyIDAuNTkwMTMgMC43MzQwOCAxLjUzNjQgMS4xMDExIDIuODM4NyAxLjEwMTEgMS4wMzc4IDAgMi4wNjU0LTAuMzA1ODggMy4wODI5LTAuOTE3NjEgMC44ODE2MS0wLjUxOTY2IDEuODM3My0xLjMwNzEgMi44NjU3LTIuMzU2NSAwLjAwNTkgMC44ODAzIDAuMjMwNjYgMS42MDQ5IDAuNjc1MDIgMi4xNzMgMC41OTAxMiAwLjczNDA4IDEuNTI2MiAxLjEwMTEgMi44MDgyIDEuMTAxMSAxLjA1ODEgMCAyLjEwNjEtMC4zMDU4OCAzLjE0MzktMC45MTc2MSAwLjk0MzE5LTAuNTc0NSAxLjk3MTQtMS40Mzg1IDMuMDgyNy0yLjU4NTdsLTAuMTUyMzkgMy4xMDU2aDIuMjU4N2wyLjEwNjItMTQuOTI2aC0yLjk2MDlsLTEuMzMzIDkuNzQxYy0wLjcxNDQxIDAuNjIzNTEtMS4zNDkgMS4xNjA3LTEuODcxOCAxLjU3NjEtMC41Njk3NiAwLjQ0ODYtMS4wODg3IDAuNzg1MDctMS41NTY3IDEuMDA5NC0wLjQ2ODAyIDAuMjAzOTEtMC45NzY3MiAwLjMwNTc1LTEuNTI2MSAwLjMwNTc1LTAuNzUyOTIgMC0xLjI1MTUtMC4xNzMyNy0xLjQ5NTctMC41MTk5Mi0wLjIyMzg0LTAuMzY3MDQtMC4yODQ4OS0wLjkzNzk2LTAuMTgzMTUtMS43MTI4bDEuNDY1Mi0xMC4zOTloLTIuODM4N2wtMS4zNDU3IDkuNjI1MWMtMC43NzU1MyAwLjcxNjEzLTEuNDQyNCAxLjI5ODItMS45ODEzIDEuNzIyNS0wLjU2OTc3IDAuNDQ4Ni0xLjA3ODUgMC43NzQ5OC0xLjUyNjEgMC45Nzg5LTAuNDQ3NjggMC4yMDM5MS0wLjkzNjA4IDAuMzA1NzUtMS40NjUxIDAuMzA1NzUtMC42NTExNyAwLTEuMTI5My0wLjE2MzAyLTEuNDM0Ni0wLjQ4OTI4LTAuMjg0ODktMC4zNDY2NC0wLjM2NjQtMC45Mjc4MS0wLjI0NDMxLTEuNzQzNWwxLjQ2NTItMTAuMzk5eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMDg4MDU1Ii8+Cjwvc3ZnPgo=";var n=document.createElement("div");return n.classList.add("header__caption"),n.appendChild(document.createTextNode("Генератор карток")),e.append(M,n),t}()),O.appendChild(function(){var t=document.createElement("div");t.classList.add("creator");var e={originalWord:"Das Wort",translatedWord:"слово"},M=function(t){var e=t,M=document.createElement("div");M.classList.add("creator__canvas");var n=document.createElement("canvas");n.width=1e3,n.height=1e3;var r=document.createElement("canvas");r.width=600,r.height=600;var a=r.getContext("2d"),i=I(t),o=i.originalWordFontSize,u=i.translatedWordFontSize;M.appendChild(r);var c=n.getContext("2d"),N=new Image;N.src=y;var j=function(){var t=n.toDataURL("image/png"),e=new Image;e.src=t,e.onload=function(){a.drawImage(e,0,0,r.width,r.height)}},d=function(t){var e=c.createLinearGradient(0,0,0,n.height);e.addColorStop(0,"#ffffffff"),e.addColorStop(.5,"#ffffff8f"),e.addColorStop(1,"#ffffff00"),c.fillStyle=e,c.fillRect(0,0,n.width,n.height),c.globalCompositeOperation="multiply",c.fillStyle="#212ec9bf",c.fillRect(0,0,n.width,n.height),c.globalCompositeOperation="source-over",c.fillStyle="#fff",c.textBaseline="top",c.font="".concat(o,"px Archivo"),c.fillText(t.originalWord,150,200),c.font="italic ".concat(u,'px "Exo 2"'),c.fillText("– "+t.translatedWord,150,function(t,e){return D(t/56*12,12,50)+t+200}(o)),c.drawImage(N,153.44,799.871),j()},l=function(t){e=t;var M=I(t);if(o=M.originalWordFontSize,u=M.translatedWordFontSize,c.fillStyle="#212ec9",c.fillRect(0,0,n.width,n.height),"imageDataUrl"in t&&"string"==typeof t.imageDataUrl&&t.imageDataUrl.length>0){var r=new Image;r.src=t.imageDataUrl,r.onload=function(){var e=r.width/r.height;if(e<1){var M=1/e,a=n.width*M,i=-1*(a-n.height)/2;c.drawImage(r,0,i,n.width,a)}else if(e>=1){var o=n.height*e,u=-1*(o-n.width)/2;c.drawImage(r,u,0,o,n.height)}d(t)}}else d(t)},s=!1,g=!1,L=function(t){g||(t?(r.width=400,r.height=400):(r.width=296,r.height=296),j())},T=function(t){s||(t?(r.width=400,r.height=400):(r.width=600,r.height=600),j())},A=window.matchMedia("(min-width: 1200px)");g=A.matches,T(g),A.addEventListener("change",(function(t){g=t.matches,T(g)}));var w=window.matchMedia("(min-width: 600px)");return s=w.matches,L(s),w.addEventListener("change",(function(t){s=t.matches,L(s)})),N.onload=function(){l(t)},setTimeout((function(){l(t)}),2e3),{creatorCanvasContainer:M,update:l,save:function(){if(!(e.originalWord.length<1||e.translatedWord.length<1)){var t=n.toDataURL("image/png").replace("image/png","image/octet-stream"),M=document.createElement("a"),r=e.originalWord.toLowerCase().replace(/[^a-zäöüß ]/g,"").replace("ä","a").replace("ö","o").replace("ü","u").replace("ß","ss");M.setAttribute("download","Картка ".concat(r,".png")),M.setAttribute("href",t),M.click()}}}}(e),n=M.creatorCanvasContainer,r=M.update,a=M.save,i=document.createElement("button");return i.innerHTML="Зберегти картку",i.addEventListener("click",a),i.classList.add("button","button__save"),t.appendChild(C(e,(function(t){e=t,r(t),t.originalWord.length<1||t.translatedWord.length<1?(i.innerHTML="Заповніть картку, щоб зберегти",i.setAttribute("disabled","")):(i.innerHTML="Зберегти картку",i.removeAttribute("disabled"))}))),t.appendChild(n),t.appendChild(i),t}())})()})();