(()=>{"use strict";var e={6618:(e,r,t)=>{t(8964),t(702);var o=t(1957),n=t(1947),a=t(499),i=t(9835);function l(e,r,t,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=t(1639);const u=(0,c.Z)(s,[["render",l]]),p=u;var d=t(3340),f=t(2502);const h=(0,d.h)((()=>{const e=(0,f.WB)();return e}));var b=t(8339);const v=[{path:"/",component:()=>Promise.all([t.e(736),t.e(587)]).then(t.bind(t,5587)),children:[{path:"",redirect:"analyze"},{path:"analyze",component:()=>Promise.all([t.e(736),t.e(905)]).then(t.bind(t,6905))},{path:"compare",component:()=>Promise.all([t.e(736),t.e(980)]).then(t.bind(t,2980))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],m=v,g=(0,d.BC)((function(){const e=b.r5,r=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return r}));async function y(e,r){const t=e(p);t.use(n.Z,r);const o="function"===typeof h?await h({}):h;t.use(o);const i=(0,a.Xl)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=i})),{app:t,store:o,router:i}}var w=t(3703),P=t(796),k=t(6827);const O={config:{dark:"auto"},plugins:{LocalStorage:w.Z,Dialog:P.Z,Notify:k.Z}},j="";async function T({app:e,router:r,store:t},o){let n=!1;const a=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=a(e);null!==r&&(window.location.href=r,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:r,store:t,ssrContext:null,redirect:i,urlPath:l,publicPath:j})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(r),e.mount("#q-app"))}y(o.ri,O).then((e=>Promise.all([Promise.resolve().then(t.bind(t,6288)),Promise.resolve().then(t.bind(t,1569)),Promise.resolve().then(t.bind(t,7785))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));T(e,t)}))))},1569:(e,r,t)=>{t.r(r),t.d(r,{api:()=>i,default:()=>l});var o=t(3340),n=t(9981),a=t.n(n);const i=a().create(),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},7785:(e,r,t)=>{t.r(r);t(2160)},6288:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var o=t(3340),n=t(9991);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,o.xr)((({app:e})=>{const r=(0,n.o)({locale:"en-US",messages:i});e.use(r)}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{587:"c9958a94",862:"aaadcbeb",905:"bc4947ae",980:"46a3a26a"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"51fe06c5"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="webpack-analyzer-hub:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=o),e[o]=[n];var d=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),l=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var u=s(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=globalThis["webpackChunkwebpack_analyzer_hub"]=globalThis["webpackChunkwebpack_analyzer_hub"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(6618)));o=t.O(o)})();