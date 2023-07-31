import{u as F}from"./list-d3b3a990.js";import{g as W,o as j,a as M,b as U,n as q,u as B,r as I,w as H,c as A,s as O,d as w,e as S,f as T,V as R,h as N,i as V,t as E,j as k,k as _}from"./index-8a64c89e.js";import{u as K}from"./settings-a615acd6.js";import{V as P,a as $}from"./VRow-5d806c2d.js";function b(e){return W()?(j(e),!0):!1}function C(){const e=new Set,n=r=>{e.delete(r)};return{on:r=>{e.add(r);const a=()=>n(r);return b(a),{off:a}},off:n,trigger:r=>Promise.all(Array.from(e).map(a=>a(r)))}}function D(e){return typeof e=="function"?e():B(e)}const z=typeof window<"u",J=()=>{};function Q(e,n=!0){M()?U(e):n?e():q(e)}function X(e){var n;const o=D(e);return(n=o==null?void 0:o.$el)!=null?n:o}const G=z?window:void 0;function Y(...e){let n,o,t,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,t,r]=e,n=G):[n,o,t,r]=e,!n)return J;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const a=[],f=()=>{a.forEach(u=>u()),a.length=0},m=(u,i,s,c)=>(u.addEventListener(i,s,c),()=>u.removeEventListener(i,s,c)),g=H(()=>[X(n),D(r)],([u,i])=>{f(),u&&a.push(...o.flatMap(s=>t.map(c=>m(u,s,c,i))))},{immediate:!0,flush:"post"}),v=()=>{g(),f()};return b(v),v}function Z(){const e=I(!1);return M()&&U(()=>{e.value=!0}),e}function ee(e){const n=Z();return A(()=>(n.value,!!e()))}function te(e={}){const{window:n=G}=e,o=ee(()=>!!n&&"Notification"in n),t=I(null),r=async()=>{o.value&&"permission"in Notification&&Notification.permission!=="denied"&&await Notification.requestPermission()},{on:a,trigger:f}=C(),{on:m,trigger:g}=C(),{on:v,trigger:u}=C(),{on:i,trigger:s}=C(),c=async p=>{if(!o.value)return;await r();const l=Object.assign({},e,p);return t.value=new Notification(l.title||"",l),t.value.onclick=f,t.value.onshow=g,t.value.onerror=u,t.value.onclose=s,t.value},d=()=>{t.value&&t.value.close(),t.value=null};if(Q(async()=>{o.value&&await r()}),b(d),o.value&&n){const p=n.document;Y(p,"visibilitychange",l=>{l.preventDefault(),p.visibilityState==="visible"&&d()})}return{isSupported:o,notification:t,show:c,close:d,onClick:a,onShow:m,onError:v,onClose:i}}const se={__name:"Home",setup(e){const n=F(),{items:o,currentItem:t,timeleft:r}=O(n),{countdown:a,setCurrentItem:f,setFinishItem:m}=n,g=K(),{selectedAlarmFile:v,notify:u}=O(g),i={STOP:0,COUNTING:1,PAUSE:2},s=I(i.STOP);let c=0;const d=()=>{s.value===i.STOP&&o.value.length>0&&f(),t.value.length!==0&&(s.value=i.COUNTING,c=setInterval(()=>{a(),r.value===0&&l()},1e3))},p=()=>{s.value=i.PAUSE,clearInterval(c)},l=()=>{clearInterval(c),s.value=i.STOP;const h=new Audio;if(h.src=v.value,h.play(),u.value){const{show:y}=te({title:"事項完成",body:x.value,icon:"https://github.com/wdaweb.png"});y()}m(),o.value.length>0&&d()},x=A(()=>t.value.length>0?t.value:o.value.length>0?"點擊開始":"還沒開始K"),L=A(()=>{const h=Math.floor(r.value/60).toString().padStart(2,"0"),y=(r.value%60).toString().padStart(2,"0");return h+":"+y});return(h,y)=>(w(),S(R,{style:{color:"aliceblue"}},{default:T(()=>[N($,{class:"text-center"},{default:T(()=>[N(P,{cols:"12"},{default:T(()=>[V("h1",null,E(x.value),1),V("h1",null,E(L.value),1)]),_:1}),N(P,{cols:"12"},{default:T(()=>[s.value!==i.COUNTING?(w(),S(k,{key:0,variant:"text",icon:"mdi-play",onClick:d})):_("",!0),s.value===i.COUNTING?(w(),S(k,{key:1,variant:"text",icon:"mdi-pause",onClick:p})):_("",!0),B(t).length>0?(w(),S(k,{key:2,variant:"text",icon:"mdi-skip-next",onClick:l})):_("",!0)]),_:1})]),_:1})]),_:1}))}};export{se as default};