if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),f={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-03f7bbd9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"aaf06eed978cb03dacd7.svg",revision:null},{url:"app-icon.png",revision:"ebd9dc429cf2ddadf5b8b9efa244be14"},{url:"card.png",revision:"51cdf3ea9527ba4499fe6d9d46e87c6e"},{url:"favicon.png",revision:"4995b0b4b3803a5bfe46b0c915a2299e"},{url:"index.html",revision:"829180db766e4fb802258cd29ce4b0c0"},{url:"main.js",revision:"3ad8ff2edfdb980f17e4b0d4c45566c4"},{url:"manifest.json",revision:"db662cef77939ec22920615192296733"}],{})}));
