import{p as Q,m as re,l as we,q as Ie,v as Z,c as w,x as ee,h as n,y as j,z as J,M as ke,I as ne,E as le,A as Pe,B as Fe,C as Se,D as Re,F as Be,G as $e,H as Te,J as Le,r as T,K as De,L as Oe,N as Ae,w as Ee,O as Me,P as Ne,Q as Ue,R as M,S as G,T as We,U as qe,W as Ke,X as je,Y as ze,Z as He,_ as Xe,n as de,$ as Ye,s as Ge,d as $,e as Je,f as O,V as Qe,a0 as ce,i as c,a1 as A,a2 as fe,u as E,k as ve,t as he,j as K}from"./index-a3e1ff21.js";import{u as Ze}from"./list-d6767648.js";import{V as X,a as et}from"./VRow-e3cbb436.js";import{V as tt,m as nt,u as be,a as lt,b as at,c as me,d as ye}from"./VInput-ac26d0b3.js";class ae{constructor(i){let{x:a,y:o,width:t,height:l}=i;this.x=a,this.y=o,this.width=t,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ot(e){const i=e.getBoundingClientRect(),a=getComputedStyle(e),o=a.transform;if(o){let t,l,r,h,d;if(o.startsWith("matrix3d("))t=o.slice(9,-1).split(/, /),l=+t[0],r=+t[5],h=+t[12],d=+t[13];else if(o.startsWith("matrix("))t=o.slice(7,-1).split(/, /),l=+t[0],r=+t[3],h=+t[4],d=+t[5];else return new ae(i);const f=a.transformOrigin,g=i.x-h-(1-l)*parseFloat(f),m=i.y-d-(1-r)*parseFloat(f.slice(f.indexOf(" ")+1)),I=l?i.width/l:e.offsetWidth+1,C=r?i.height/r:e.offsetHeight+1;return new ae({x:g,y:m,width:I,height:C})}else return new ae(i)}function it(e,i,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(i,a)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(t=>{o.onfinish=()=>{t(o)}})),o}const rt="cubic-bezier(0.4, 0, 0.2, 1)";const st=Q({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...re(),...we({transition:{component:Ie}})},"VCounter"),ut=Z()({name:"VCounter",functional:!0,props:st(),setup(e,i){let{slots:a}=i;const o=w(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>n(ke,{transition:e.transition},{default:()=>[j(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[J,e.active]])]})),{}}});const dt=Q({floating:Boolean,...re()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:dt(),setup(e,i){let{slots:a}=i;return ee(()=>n(tt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),ct=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ct.includes(e)},"onClick:clear":le(),"onClick:appendInner":le(),"onClick:prependInner":le(),...re(),...Pe(),...Fe(),...Se()},"VField"),_e=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...nt(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const{themeClasses:l}=Re(e),{loaderClasses:r}=Be(e),{focusClasses:h,isFocused:d,focus:f,blur:g}=be(e),{InputIcon:m}=lt(e),{roundedClasses:I}=$e(e),{rtlClasses:C}=Te(),F=w(()=>e.dirty||e.active),y=w(()=>!e.singleLine&&!!(e.label||t.label)),b=Le(),v=w(()=>e.id||`input-${b}`),s=w(()=>`${v.value}-messages`),L=T(),x=T(),z=T(),u=w(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:k,backgroundColorStyles:P}=De(Oe(e,"bgColor")),{textColorClasses:S,textColorStyles:se}=Ae(w(()=>e.error||e.disabled?void 0:F.value&&d.value?e.color:e.baseColor));Ee(F,p=>{if(y.value){const _=L.value.$el,R=x.value.$el;requestAnimationFrame(()=>{const B=ot(_),V=R.getBoundingClientRect(),U=V.x-B.x,W=V.y-B.y-(B.height/2-V.height/2),D=V.width/.75,q=Math.abs(D-B.width)>1?{maxWidth:Me(D)}:void 0,H=getComputedStyle(_),ue=getComputedStyle(R),Ce=parseFloat(H.transitionDuration)*1e3||150,pe=parseFloat(ue.getPropertyValue("--v-field-label-scale")),Ve=ue.getPropertyValue("color");_.style.visibility="visible",R.style.visibility="hidden",it(_,{transform:`translate(${U}px, ${W}px) scale(${pe})`,color:Ve,...q},{duration:Ce,easing:rt,direction:p?"normal":"reverse"}).finished.then(()=>{_.style.removeProperty("visibility"),R.style.removeProperty("visibility")})})}},{flush:"post"});const N=w(()=>({isActive:F,isFocused:d,controlRef:z,blur:g,focus:f}));function te(p){p.target!==document.activeElement&&p.preventDefault()}return ee(()=>{var U,W,D;const p=e.variant==="outlined",_=t["prepend-inner"]||e.prependInnerIcon,R=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||R),V=t.label?t.label({...N.value,label:e.label,props:{for:v.value}}):e.label;return n("div",G({class:["v-field",{"v-field--active":F.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":_,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!V,[`v-field--variant-${e.variant}`]:!0},l.value,k.value,h.value,r.value,I.value,C.value,e.class],style:[P.value,se.value,e.style],onClick:te},a),[n("div",{class:"v-field__overlay"},null),n(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:t.loader}),_&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(m,{key:"prepend-icon",name:"prependInner"},null),(U=t["prepend-inner"])==null?void 0:U.call(t,N.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&y.value&&n(Y,{key:"floating-label",ref:x,class:[S.value],floating:!0,for:v.value},{default:()=>[V]}),n(Y,{ref:L,for:v.value},{default:()=>[V]}),(W=t.default)==null?void 0:W.call(t,{...N.value,props:{id:v.value,class:"v-field__input","aria-describedby":s.value},focus:f,blur:g})]),R&&n(Ue,{key:"clear"},{default:()=>[j(n("div",{class:"v-field__clearable",onMousedown:q=>{q.preventDefault(),q.stopPropagation()}},[t.clear?t.clear():n(m,{name:"clear"},null)]),[[J,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(D=t["append-inner"])==null?void 0:D.call(t,N.value),e.appendInnerIcon&&n(m,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",S.value]},[p&&n(M,null,[n("div",{class:"v-field__outline__start"},null),y.value&&n("div",{class:"v-field__outline__notch"},[n(Y,{ref:x,floating:!0,for:v.value},{default:()=>[V]})]),n("div",{class:"v-field__outline__end"},null)]),u.value&&y.value&&n(Y,{ref:x,floating:!0,for:v.value},{default:()=>[V]})])])}),{controlRef:z}}});function ft(e){const i=Object.keys(_e.props).filter(a=>!We(a)&&a!=="class"&&a!=="style");return qe(e,i)}const oe=Symbol("Forwarded refs");function ie(e,i){let a=e;for(;a;){const o=Reflect.getOwnPropertyDescriptor(a,i);if(o)return o;a=Object.getPrototypeOf(a)}}function vt(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return e[oe]=a,new Proxy(e,{get(t,l){if(Reflect.has(t,l))return Reflect.get(t,l);if(!(typeof l=="symbol"||l.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,l)){const h=Reflect.get(r.value,l);return typeof h=="function"?h.bind(r.value):h}}},has(t,l){if(Reflect.has(t,l))return!0;if(typeof l=="symbol"||l.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,l))return!0;return!1},getOwnPropertyDescriptor(t,l){var h;const r=Reflect.getOwnPropertyDescriptor(t,l);if(r)return r;if(!(typeof l=="symbol"||l.startsWith("__"))){for(const d of a){if(!d.value)continue;const f=ie(d.value,l)??("_"in d.value?ie((h=d.value._)==null?void 0:h.setupState,l):void 0);if(f)return f}for(const d of a){const f=d.value&&d.value[oe];if(!f)continue;const g=f.slice();for(;g.length;){const m=g.shift(),I=ie(m.value,l);if(I)return I;const C=m.value&&m.value[oe];C&&g.push(...C)}}}}})}const ht=["color","file","time","date","datetime-local","week","month"],mt=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...at(),...xe()},"VTextField"),ge=Z()({name:"VTextField",directives:{Intersect:Ke},inheritAttrs:!1,props:mt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const l=je(e,"modelValue"),{isFocused:r,focus:h,blur:d}=be(e),f=w(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value??"").toString().length),g=w(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),m=w(()=>["plain","underlined"].includes(e.variant));function I(u,k){var P,S;!e.autofocus||!u||(S=(P=k[0].target)==null?void 0:P.focus)==null||S.call(P)}const C=T(),F=T(),y=T(),b=w(()=>ht.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function v(){var u;y.value!==document.activeElement&&((u=y.value)==null||u.focus()),r.value||h()}function s(u){o("mousedown:control",u),u.target!==y.value&&(v(),u.preventDefault())}function L(u){v(),o("click:control",u)}function x(u){u.stopPropagation(),v(),de(()=>{l.value=null,Ye(e["onClick:clear"],u)})}function z(u){var P;const k=u.target;if(l.value=k.value,(P=e.modelModifiers)!=null&&P.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[k.selectionStart,k.selectionEnd];de(()=>{k.selectionStart=S[0],k.selectionEnd=S[1]})}}return ee(()=>{const u=!!(t.counter||e.counter||e.counterValue),k=!!(u||t.details),[P,S]=ze(a),[{modelValue:se,...N}]=me.filterProps(e),[te]=ft(e);return n(me,G({ref:C,modelValue:l.value,"onUpdate:modelValue":p=>l.value=p,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},P,N,{centerAffix:!m.value,focused:r.value}),{...t,default:p=>{let{id:_,isDisabled:R,isDirty:B,isReadonly:V,isValid:U}=p;return n(_e,G({ref:F,onMousedown:s,onClick:L,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},te,{id:_.value,active:b.value||B.value,dirty:B.value||e.dirty,disabled:R.value,focused:r.value,error:U.value===!1}),{...t,default:W=>{let{props:{class:D,...q}}=W;const H=j(n("input",G({ref:y,value:l.value,onInput:z,autofocus:e.autofocus,readonly:V.value,disabled:R.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:v,onBlur:d},q,S),null),[[He("intersect"),{handler:I},null,{once:!0}]]);return n(M,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),t.default?n("div",{class:D,"data-no-activator":""},[t.default(),H]):Xe(H,{class:D}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:k?p=>{var _;return n(M,null,[(_=t.details)==null?void 0:_.call(t,p),u&&n(M,null,[n("span",null,null),n(ut,{active:e.persistentCounter||r.value,value:f.value,max:g.value},t.counter)])])}:void 0})}),vt({},C,F,y)}}),yt=c("h1",{style:{color:"white"}},"事項",-1),gt=c("thead",null,[c("tr",null,[c("th",{style:{color:"white !important"}},"名稱"),c("th",{style:{color:"white !important"}},"操作")])],-1),bt={key:0},xt=c("td",{colspan:"2",class:"text-center",style:{color:"white !important"}}," 沒有事項 ",-1),_t=[xt],Ct=c("h1",{style:{color:"white"}},"已完成事項",-1),pt=c("thead",null,[c("tr",null,[c("th",{style:{color:"white"}},"名稱"),c("th",{style:{color:"white"}},"操作")])],-1),Vt={key:0},wt=c("td",{colspan:"2",class:"text-center"},"沒有事項",-1),It=[wt],Rt={__name:"List",setup(e){const i=Ze(),{addItem:a,editItem:o,cancelEditItem:t,delItem:l,confirmEditItem:r,delFinishedItem:h}=i,{items:d,finishedItems:f}=Ge(i),g=T(""),m=T(null),I=T([]),C=async()=>{const b=await m.value.validate();console.log(b),!(b.length>0)&&(a(g.value),m.value.blur(),m.value.reset())},F=async(b,v)=>{const s=await I.value[v].validate();console.log(s),!(s.length>0)&&r(b)},y={required:b=>!!b||"欄位必填",length:b=>b.length>=3||"必須三個字以上"};return(b,v)=>($(),Je(Qe,null,{default:O(()=>[n(et,null,{default:O(()=>[n(X,{cols:"12"},{default:O(()=>[yt]),_:1}),n(X,{cols:"12"},{default:O(()=>[n(ge,{style:{color:"white"},modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=s=>g.value=s),label:"新增事項","append-icon":"mdi-plus",onKeydown:ce(C,["enter"]),"onClick:append":C,rules:[y.required,y.length],ref_key:"newItemInput",ref:m},null,8,["modelValue","onKeydown","rules"]),n(ye,{style:{background:"transparent"}},{default:O(()=>[gt,c("tbody",null,[($(!0),A(M,null,fe(E(d),(s,L)=>($(),A("tr",{key:s.id},[c("td",null,[j(n(ge,{modelValue:s.model,"onUpdate:modelValue":x=>s.model=x,rules:[y.required,y.length],autofocus:"",ref_for:!0,ref_key:"editItemInput",ref:I,onKeydown:ce(x=>F(s.id,L),["enter"])},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,s.edit]]),j(c("span",null,he(s.name),513),[[J,!s.edit]])]),c("td",null,[s.edit?($(),A(M,{key:0},[n(K,{icon:"mdi-check",color:"green",variant:"text",onClick:x=>F(s.id,L)},null,8,["onClick"]),n(K,{icon:"mdi-undo",color:"red",variant:"text",onClick:x=>E(t)(s.id)},null,8,["onClick"])],64)):($(),A(M,{key:1},[n(K,{icon:"mdi-pencil",color:"green",variant:"text",onClick:x=>E(o)(s.id)},null,8,["onClick"]),n(K,{icon:"mdi-delete",color:"red",variant:"text",onClick:x=>E(l)(s.id)},null,8,["onClick"])],64))])]))),128)),E(d).length===0?($(),A("tr",bt,_t)):ve("",!0)])]),_:1})]),_:1}),n(X,{cols:"12"},{default:O(()=>[Ct]),_:1}),n(X,{cols:"12",style:{color:"white"}},{default:O(()=>[n(ye,{style:{background:"transparent",color:"white"}},{default:O(()=>[pt,c("tbody",null,[($(!0),A(M,null,fe(E(f),s=>($(),A("tr",{key:s.id},[c("td",null,he(s.name),1),c("td",null,[n(K,{icon:"mdi-delete",color:"red",variant:"text",onClick:L=>E(h)(s.id)},null,8,["onClick"])])]))),128)),E(f).length===0?($(),A("tr",Vt,It)):ve("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Rt as default};
