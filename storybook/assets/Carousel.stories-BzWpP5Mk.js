import{r as P,j as w,R as oe}from"./iframe-CyRwQgzu.js";import{B as re}from"./index-DZWkylxF.js";import{S as ln}from"./index-BvEngwiI.js";import{u as An}from"./LanguageContext-Dpd0m_QQ.js";import{S as Tn,a as Bn}from"./ChevronRight-BJ-5_CIU.js";function In(t){return Object.prototype.toString.call(t)==="[object Object]"}function ae(t){return In(t)||Array.isArray(t)}function En(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function qt(t,e){const n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;const r=JSON.stringify(Object.keys(t.breakpoints||{})),a=JSON.stringify(Object.keys(e.breakpoints||{}));return r!==a?!1:n.every(o=>{const l=t[o],i=e[o];return typeof l=="function"?`${l}`==`${i}`:!ae(l)||!ae(i)?l===i:qt(l,i)})}function ie(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Dn(t,e){if(t.length!==e.length)return!1;const n=ie(t),s=ie(e);return n.every((r,a)=>{const o=s[a];return qt(r,o)})}function Gt(t){return typeof t=="number"}function Ht(t){return typeof t=="string"}function Pt(t){return typeof t=="boolean"}function ce(t){return Object.prototype.toString.call(t)==="[object Object]"}function R(t){return Math.abs(t)}function Ut(t){return Math.sign(t)}function Dt(t,e){return R(t-e)}function Cn(t,e){if(t===0||e===0||R(t)<=R(e))return 0;const n=Dt(R(t),R(e));return R(n/t)}function kn(t){return Math.round(t*100)/100}function kt(t){return jt(t).map(Number)}function W(t){return t[Lt(t)]}function Lt(t){return Math.max(0,t.length-1)}function Kt(t,e){return e===Lt(t)}function le(t,e=0){return Array.from(Array(t),(n,s)=>e+s)}function jt(t){return Object.keys(t)}function un(t,e){return[t,e].reduce((n,s)=>(jt(s).forEach(r=>{const a=n[r],o=s[r],l=ce(a)&&ce(o);n[r]=l?un(a,o):o}),n),{})}function Vt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function jn(t,e){const n={start:s,center:r,end:a};function s(){return 0}function r(i){return a(i)/2}function a(i){return e-i}function o(i,u){return Ht(t)?n[t](i):t(e,i,u)}return{measure:o}}function _t(){let t=[];function e(r,a,o,l={passive:!0}){let i;if("addEventListener"in r)r.addEventListener(a,o,l),i=()=>r.removeEventListener(a,o,l);else{const u=r;u.addListener(o),i=()=>u.removeListener(o)}return t.push(i),s}function n(){t=t.filter(r=>r())}const s={add:e,clear:n};return s}function _n(t,e,n,s){const r=_t(),a=1e3/60;let o=null,l=0,i=0;function u(){r.add(t,"visibilitychange",()=>{t.hidden&&c()})}function m(){x(),r.clear()}function f(h){if(!i)return;o||(o=h,n(),n());const d=h-o;for(o=h,l+=d;l>=a;)n(),l-=a;const y=l/a;s(y),i&&(i=e.requestAnimationFrame(f))}function p(){i||(i=e.requestAnimationFrame(f))}function x(){e.cancelAnimationFrame(i),o=null,l=0,i=0}function c(){o=null,l=0}return{init:u,destroy:m,start:p,stop:x,update:n,render:s}}function Ln(t,e){const n=e==="rtl",s=t==="y",r=s?"y":"x",a=s?"x":"y",o=!s&&n?-1:1,l=m(),i=f();function u(c){const{height:g,width:h}=c;return s?g:h}function m(){return s?"top":n?"right":"left"}function f(){return s?"bottom":n?"left":"right"}function p(c){return c*o}return{scroll:r,cross:a,startEdge:l,endEdge:i,measureSize:u,direction:p}}function at(t=0,e=0){const n=R(t-e);function s(u){return u<t}function r(u){return u>e}function a(u){return s(u)||r(u)}function o(u){return a(u)?s(u)?t:e:u}function l(u){return n?u-n*Math.ceil((u-e)/n):u}return{length:n,max:e,min:t,constrain:o,reachedAny:a,reachedMax:r,reachedMin:s,removeOffset:l}}function dn(t,e,n){const{constrain:s}=at(0,t),r=t+1;let a=o(e);function o(p){return n?R((r+p)%r):s(p)}function l(){return a}function i(p){return a=o(p),f}function u(p){return m().set(l()+p)}function m(){return dn(t,l(),n)}const f={get:l,set:i,add:u,clone:m};return f}function Rn(t,e,n,s,r,a,o,l,i,u,m,f,p,x,c,g,h,d,y){const{cross:v,direction:T}=t,C=["INPUT","SELECT","TEXTAREA"],B={passive:!1},S=_t(),A=_t(),I=at(50,225).constrain(x.measure(20)),F={mouse:300,touch:400},D={mouse:500,touch:600},N=c?43:25;let M=!1,_=0,k=0,O=!1,nt=!1,J=!1,Y=!1;function wt(b){if(!y)return;function j(V){(Pt(y)||y(b,V))&&At(V)}const $=e;S.add($,"dragstart",V=>V.preventDefault(),B).add($,"touchmove",()=>{},B).add($,"touchend",()=>{}).add($,"touchstart",j).add($,"mousedown",j).add($,"touchcancel",H).add($,"contextmenu",H).add($,"click",tt,!0)}function X(){S.clear(),A.clear()}function lt(){const b=Y?n:e;A.add(b,"touchmove",G,B).add(b,"touchend",H).add(b,"mousemove",G,B).add(b,"mouseup",H)}function ut(b){const j=b.nodeName||"";return C.includes(j)}function Z(){return(c?D:F)[Y?"mouse":"touch"]}function St(b,j){const $=f.add(Ut(b)*-1),V=m.byDistance(b,!c).distance;return c||R(b)<I?V:h&&j?V*.5:m.byIndex($.get(),0).distance}function At(b){const j=Vt(b,s);Y=j,J=c&&j&&!b.buttons&&M,M=Dt(r.get(),o.get())>=2,!(j&&b.button!==0)&&(ut(b.target)||(O=!0,a.pointerDown(b),u.useFriction(0).useDuration(0),r.set(o),lt(),_=a.readPoint(b),k=a.readPoint(b,v),p.emit("pointerDown")))}function G(b){if(!Vt(b,s)&&b.touches.length>=2)return H(b);const $=a.readPoint(b),V=a.readPoint(b,v),Q=Dt($,_),et=Dt(V,k);if(!nt&&!Y&&(!b.cancelable||(nt=Q>et,!nt)))return H(b);const ot=a.pointerMove(b);Q>g&&(J=!0),u.useFriction(.3).useDuration(.75),l.start(),r.add(T(ot)),b.preventDefault()}function H(b){const $=m.byDistance(0,!1).index!==f.get(),V=a.pointerUp(b)*Z(),Q=St(T(V),$),et=Cn(V,Q),ot=N-10*et,st=d+et/50;nt=!1,O=!1,A.clear(),u.useDuration(ot).useFriction(st),i.distance(Q,!c),Y=!1,p.emit("pointerUp")}function tt(b){J&&(b.stopPropagation(),b.preventDefault(),J=!1)}function U(){return O}return{init:wt,destroy:X,pointerDown:U}}function Fn(t,e){let s,r;function a(f){return f.timeStamp}function o(f,p){const c=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Vt(f,e)?f:f.touches[0])[c]}function l(f){return s=f,r=f,o(f)}function i(f){const p=o(f)-o(r),x=a(f)-a(s)>170;return r=f,x&&(s=f),p}function u(f){if(!s||!r)return 0;const p=o(r)-o(s),x=a(f)-a(s),c=a(f)-a(r)>170,g=p/x;return x&&!c&&R(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:u,readPoint:o}}function Pn(){function t(n){const{offsetTop:s,offsetLeft:r,offsetWidth:a,offsetHeight:o}=n;return{top:s,right:r+a,bottom:s+o,left:r,width:a,height:o}}return{measure:t}}function $n(t){function e(s){return t*(s/100)}return{measure:e}}function On(t,e,n,s,r,a,o){const l=[t].concat(s);let i,u,m=[],f=!1;function p(h){return r.measureSize(o.measure(h))}function x(h){if(!a)return;u=p(t),m=s.map(p);function d(y){for(const v of y){if(f)return;const T=v.target===t,C=s.indexOf(v.target),B=T?u:m[C],S=p(T?t:s[C]);if(R(S-B)>=.5){h.reInit(),e.emit("resize");break}}}i=new ResizeObserver(y=>{(Pt(a)||a(h,y))&&d(y)}),n.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function c(){f=!0,i&&i.disconnect()}return{init:x,destroy:c}}function zn(t,e,n,s,r,a){let o=0,l=0,i=r,u=a,m=t.get(),f=0;function p(){const B=s.get()-t.get(),S=!i;let A=0;return S?(o=0,n.set(s),t.set(s),A=B):(n.set(t),o+=B/i,o*=u,m+=o,t.add(o),A=m-f),l=Ut(A),f=m,C}function x(){const B=s.get()-e.get();return R(B)<.001}function c(){return i}function g(){return l}function h(){return o}function d(){return v(r)}function y(){return T(a)}function v(B){return i=B,C}function T(B){return u=B,C}const C={direction:g,duration:c,velocity:h,seek:p,settled:x,useBaseFriction:y,useBaseDuration:d,useFriction:T,useDuration:v};return C}function Nn(t,e,n,s,r){const a=r.measure(10),o=r.measure(50),l=at(.1,.99);let i=!1;function u(){return!(i||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function m(x){if(!u())return;const c=t.reachedMin(e.get())?"min":"max",g=R(t[c]-e.get()),h=n.get()-e.get(),d=l.constrain(g/o);n.subtract(h*d),!x&&R(h)<a&&(n.set(t.constrain(n.get())),s.useDuration(25).useBaseFriction())}function f(x){i=!x}return{shouldConstrain:u,constrain:m,toggleActive:f}}function Mn(t,e,n,s,r){const a=at(-e+t,0),o=f(),l=m(),i=p();function u(c,g){return Dt(c,g)<=1}function m(){const c=o[0],g=W(o),h=o.lastIndexOf(c),d=o.indexOf(g)+1;return at(h,d)}function f(){return n.map((c,g)=>{const{min:h,max:d}=a,y=a.constrain(c),v=!g,T=Kt(n,g);return v?d:T||u(h,y)?h:u(d,y)?d:y}).map(c=>parseFloat(c.toFixed(3)))}function p(){if(e<=t+r)return[a.max];if(s==="keepSnaps")return o;const{min:c,max:g}=l;return o.slice(c,g)}return{snapsContained:i,scrollContainLimit:l}}function Hn(t,e,n){const s=e[0],r=n?s-t:W(e);return{limit:at(r,s)}}function Vn(t,e,n,s){const a=e.min+.1,o=e.max+.1,{reachedMin:l,reachedMax:i}=at(a,o);function u(p){return p===1?i(n.get()):p===-1?l(n.get()):!1}function m(p){if(!u(p))return;const x=t*(p*-1);s.forEach(c=>c.add(x))}return{loop:m}}function qn(t){const{max:e,length:n}=t;function s(a){const o=a-e;return n?o/-n:0}return{get:s}}function Gn(t,e,n,s,r){const{startEdge:a,endEdge:o}=t,{groupSlides:l}=r,i=f().map(e.measure),u=p(),m=x();function f(){return l(s).map(g=>W(g)[o]-g[0][a]).map(R)}function p(){return s.map(g=>n[a]-g[a]).map(g=>-R(g))}function x(){return l(u).map(g=>g[0]).map((g,h)=>g+i[h])}return{snaps:u,snapsAligned:m}}function Un(t,e,n,s,r,a){const{groupSlides:o}=r,{min:l,max:i}=s,u=m();function m(){const p=o(a),x=!t||e==="keepSnaps";return n.length===1?[a]:x?p:p.slice(l,i).map((c,g,h)=>{const d=!g,y=Kt(h,g);if(d){const v=W(h[0])+1;return le(v)}if(y){const v=Lt(a)-W(h)[0]+1;return le(v,W(h)[0])}return c})}return{slideRegistry:u}}function Kn(t,e,n,s,r){const{reachedAny:a,removeOffset:o,constrain:l}=s;function i(c){return c.concat().sort((g,h)=>R(g)-R(h))[0]}function u(c){const g=t?o(c):l(c),h=e.map((y,v)=>({diff:m(y-g,0),index:v})).sort((y,v)=>R(y.diff)-R(v.diff)),{index:d}=h[0];return{index:d,distance:g}}function m(c,g){const h=[c,c+n,c-n];if(!t)return c;if(!g)return i(h);const d=h.filter(y=>Ut(y)===g);return d.length?i(d):W(h)-n}function f(c,g){const h=e[c]-r.get(),d=m(h,g);return{index:c,distance:d}}function p(c,g){const h=r.get()+c,{index:d,distance:y}=u(h),v=!t&&a(h);if(!g||v)return{index:d,distance:c};const T=e[d]-y,C=c+m(T,0);return{index:d,distance:C}}return{byDistance:p,byIndex:f,shortcut:m}}function Wn(t,e,n,s,r,a,o){function l(f){const p=f.distance,x=f.index!==e.get();a.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),x&&(n.set(e.get()),e.set(f.index),o.emit("select"))}function i(f,p){const x=r.byDistance(f,p);l(x)}function u(f,p){const x=e.clone().set(f),c=r.byIndex(x.get(),p);l(c)}return{distance:i,index:u}}function Xn(t,e,n,s,r,a,o,l){const i={passive:!0,capture:!0};let u=0;function m(x){if(!l)return;function c(g){if(new Date().getTime()-u>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const y=n.findIndex(v=>v.includes(g));Gt(y)&&(r.useDuration(0),s.index(y,0),o.emit("slideFocus"))}a.add(document,"keydown",f,!1),e.forEach((g,h)=>{a.add(g,"focus",d=>{(Pt(l)||l(x,d))&&c(h)},i)})}function f(x){x.code==="Tab"&&(u=new Date().getTime())}return{init:m}}function Bt(t){let e=t;function n(){return e}function s(i){e=o(i)}function r(i){e+=o(i)}function a(i){e-=o(i)}function o(i){return Gt(i)?i:i.get()}return{get:n,set:s,add:r,subtract:a}}function fn(t,e){const n=t.scroll==="x"?o:l,s=e.style;let r=null,a=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(a)return;const x=kn(t.direction(p));x!==r&&(s.transform=n(x),r=x)}function u(p){a=!p}function m(){a||(s.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:m,to:i,toggleActive:u}}function Qn(t,e,n,s,r,a,o,l,i){const m=kt(r),f=kt(r).reverse(),p=d().concat(y());function x(S,A){return S.reduce((I,F)=>I-r[F],A)}function c(S,A){return S.reduce((I,F)=>x(I,A)>0?I.concat([F]):I,[])}function g(S){return a.map((A,I)=>({start:A-s[I]+.5+S,end:A+e-.5+S}))}function h(S,A,I){const F=g(A);return S.map(D=>{const N=I?0:-n,M=I?n:0,_=I?"end":"start",k=F[D][_];return{index:D,loopPoint:k,slideLocation:Bt(-1),translate:fn(t,i[D]),target:()=>l.get()>k?N:M}})}function d(){const S=o[0],A=c(f,S);return h(A,n,!1)}function y(){const S=e-o[0]-1,A=c(m,S);return h(A,-n,!0)}function v(){return p.every(({index:S})=>{const A=m.filter(I=>I!==S);return x(A,e)<=.1})}function T(){p.forEach(S=>{const{target:A,translate:I,slideLocation:F}=S,D=A();D!==F.get()&&(I.to(D),F.set(D))})}function C(){p.forEach(S=>S.translate.clear())}return{canLoop:v,clear:C,loop:T,loopPoints:p}}function Jn(t,e,n){let s,r=!1;function a(i){if(!n)return;function u(m){for(const f of m)if(f.type==="childList"){i.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(m=>{r||(Pt(n)||n(i,m))&&u(m)}),s.observe(t,{childList:!0})}function o(){s&&s.disconnect(),r=!0}return{init:a,destroy:o}}function Yn(t,e,n,s){const r={};let a=null,o=null,l,i=!1;function u(){l=new IntersectionObserver(c=>{i||(c.forEach(g=>{const h=e.indexOf(g.target);r[h]=g}),a=null,o=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(c=>l.observe(c))}function m(){l&&l.disconnect(),i=!0}function f(c){return jt(r).reduce((g,h)=>{const d=parseInt(h),{isIntersecting:y}=r[d];return(c&&y||!c&&!y)&&g.push(d),g},[])}function p(c=!0){if(c&&a)return a;if(!c&&o)return o;const g=f(c);return c&&(a=g),c||(o=g),g}return{init:u,destroy:m,get:p}}function Zn(t,e,n,s,r,a){const{measureSize:o,startEdge:l,endEdge:i}=t,u=n[0]&&r,m=c(),f=g(),p=n.map(o),x=h();function c(){if(!u)return 0;const y=n[0];return R(e[l]-y[l])}function g(){if(!u)return 0;const y=a.getComputedStyle(W(s));return parseFloat(y.getPropertyValue(`margin-${i}`))}function h(){return n.map((y,v,T)=>{const C=!v,B=Kt(T,v);return C?p[v]+m:B?p[v]+f:T[v+1][l]-y[l]}).map(R)}return{slideSizes:p,slideSizesWithGaps:x,startGap:m,endGap:f}}function ts(t,e,n,s,r,a,o,l,i){const{startEdge:u,endEdge:m,direction:f}=t,p=Gt(n);function x(d,y){return kt(d).filter(v=>v%y===0).map(v=>d.slice(v,v+y))}function c(d){return d.length?kt(d).reduce((y,v,T)=>{const C=W(y)||0,B=C===0,S=v===Lt(d),A=r[u]-a[C][u],I=r[u]-a[v][m],F=!s&&B?f(o):0,D=!s&&S?f(l):0,N=R(I-D-(A+F));return T&&N>e+i&&y.push(v),S&&y.push(d.length),y},[]).map((y,v,T)=>{const C=Math.max(T[v-1]||0);return d.slice(C,y)}):[]}function g(d){return p?x(d,n):c(d)}return{groupSlides:g}}function es(t,e,n,s,r,a,o){const{align:l,axis:i,direction:u,startIndex:m,loop:f,duration:p,dragFree:x,dragThreshold:c,inViewThreshold:g,slidesToScroll:h,skipSnaps:d,containScroll:y,watchResize:v,watchSlides:T,watchDrag:C,watchFocus:B}=a,S=2,A=Pn(),I=A.measure(e),F=n.map(A.measure),D=Ln(i,u),N=D.measureSize(I),M=$n(N),_=jn(l,N),k=!f&&!!y,O=f||!!y,{slideSizes:nt,slideSizesWithGaps:J,startGap:Y,endGap:wt}=Zn(D,I,F,n,O,r),X=ts(D,N,h,f,I,F,Y,wt,S),{snaps:lt,snapsAligned:ut}=Gn(D,_,I,F,X),Z=-W(lt)+W(J),{snapsContained:St,scrollContainLimit:At}=Mn(N,Z,ut,y,S),G=k?St:ut,{limit:H}=Hn(Z,G,f),tt=dn(Lt(G),m,f),U=tt.clone(),L=kt(n),b=({dragHandler:dt,scrollBody:Nt,scrollBounds:Mt,options:{loop:Rt}})=>{Rt||Mt.constrain(dt.pointerDown()),Nt.seek()},j=({scrollBody:dt,translate:Nt,location:Mt,offsetLocation:Rt,previousLocation:mn,scrollLooper:hn,slideLooper:yn,dragHandler:bn,animation:xn,eventHandler:Yt,scrollBounds:vn,options:{loop:Zt}},te)=>{const ee=dt.settled(),wn=!vn.shouldConstrain(),ne=Zt?ee:ee&&wn,se=ne&&!bn.pointerDown();se&&xn.stop();const Sn=Mt.get()*te+mn.get()*(1-te);Rt.set(Sn),Zt&&(hn.loop(dt.direction()),yn.loop()),Nt.to(Rt.get()),se&&Yt.emit("settle"),ne||Yt.emit("scroll")},$=_n(s,r,()=>b(zt),dt=>j(zt,dt)),V=.68,Q=G[tt.get()],et=Bt(Q),ot=Bt(Q),st=Bt(Q),rt=Bt(Q),Tt=zn(et,st,ot,rt,p,V),$t=Kn(f,G,Z,H,rt),Ot=Wn($,tt,U,Tt,$t,rt,o),Xt=qn(H),Qt=_t(),pn=Yn(e,n,o,g),{slideRegistry:Jt}=Un(k,y,G,At,X,L),gn=Xn(t,n,Jt,Ot,Tt,Qt,o,B),zt={ownerDocument:s,ownerWindow:r,eventHandler:o,containerRect:I,slideRects:F,animation:$,axis:D,dragHandler:Rn(D,t,s,r,rt,Fn(D,r),et,$,Ot,Tt,$t,tt,o,M,x,c,d,V,C),eventStore:Qt,percentOfView:M,index:tt,indexPrevious:U,limit:H,location:et,offsetLocation:st,previousLocation:ot,options:a,resizeHandler:On(e,o,r,n,D,v,A),scrollBody:Tt,scrollBounds:Nn(H,st,rt,Tt,M),scrollLooper:Vn(Z,H,st,[et,st,ot,rt]),scrollProgress:Xt,scrollSnapList:G.map(Xt.get),scrollSnaps:G,scrollTarget:$t,scrollTo:Ot,slideLooper:Qn(D,N,Z,nt,J,lt,G,st,n),slideFocus:gn,slidesHandler:Jn(e,o,T),slidesInView:pn,slideIndexes:L,slideRegistry:Jt,slidesToScroll:X,target:rt,translate:fn(D,e)};return zt}function ns(){let t={},e;function n(u){e=u}function s(u){return t[u]||[]}function r(u){return s(u).forEach(m=>m(e,u)),i}function a(u,m){return t[u]=s(u).concat([m]),i}function o(u,m){return t[u]=s(u).filter(f=>f!==m),i}function l(){t={}}const i={init:n,emit:r,off:o,on:a,clear:l};return i}const ss={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function os(t){function e(a,o){return un(a,o||{})}function n(a){const o=a.breakpoints||{},l=jt(o).filter(i=>t.matchMedia(i).matches).map(i=>o[i]).reduce((i,u)=>e(i,u),{});return e(a,l)}function s(a){return a.map(o=>jt(o.breakpoints||{})).reduce((o,l)=>o.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:s}}function rs(t){let e=[];function n(a,o){return e=o.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(a,t)),o.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function s(){e=e.filter(a=>a.destroy())}return{init:n,destroy:s}}function Ft(t,e,n){const s=t.ownerDocument,r=s.defaultView,a=os(r),o=rs(a),l=_t(),i=ns(),{mergeOptions:u,optionsAtMedia:m,optionsMediaQueries:f}=a,{on:p,off:x,emit:c}=i,g=D;let h=!1,d,y=u(ss,Ft.globalOptions),v=u(y),T=[],C,B,S;function A(){const{container:L,slides:b}=v;B=(Ht(L)?t.querySelector(L):L)||t.children[0];const $=Ht(b)?B.querySelectorAll(b):b;S=[].slice.call($||B.children)}function I(L){const b=es(t,B,S,s,r,L,i);if(L.loop&&!b.slideLooper.canLoop()){const j=Object.assign({},L,{loop:!1});return I(j)}return b}function F(L,b){h||(y=u(y,L),v=m(y),T=b||T,A(),d=I(v),f([y,...T.map(({options:j})=>j)]).forEach(j=>l.add(j,"change",D)),v.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(U),d.eventHandler.init(U),d.resizeHandler.init(U),d.slidesHandler.init(U),d.options.loop&&d.slideLooper.loop(),B.offsetParent&&S.length&&d.dragHandler.init(U),C=o.init(U,T)))}function D(L,b){const j=X();N(),F(u({startIndex:j},L),b),i.emit("reInit")}function N(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),o.destroy(),l.clear()}function M(){h||(h=!0,l.clear(),N(),i.emit("destroy"),i.clear())}function _(L,b,j){!v.active||h||(d.scrollBody.useBaseFriction().useDuration(b===!0?0:v.duration),d.scrollTo.index(L,j||0))}function k(L){const b=d.index.add(1).get();_(b,L,-1)}function O(L){const b=d.index.add(-1).get();_(b,L,1)}function nt(){return d.index.add(1).get()!==X()}function J(){return d.index.add(-1).get()!==X()}function Y(){return d.scrollSnapList}function wt(){return d.scrollProgress.get(d.offsetLocation.get())}function X(){return d.index.get()}function lt(){return d.indexPrevious.get()}function ut(){return d.slidesInView.get()}function Z(){return d.slidesInView.get(!1)}function St(){return C}function At(){return d}function G(){return t}function H(){return B}function tt(){return S}const U={canScrollNext:nt,canScrollPrev:J,containerNode:H,internalEngine:At,destroy:M,off:x,on:p,emit:c,plugins:St,previousScrollSnap:lt,reInit:g,rootNode:G,scrollNext:k,scrollPrev:O,scrollProgress:wt,scrollSnapList:Y,scrollTo:_,selectedScrollSnap:X,slideNodes:tt,slidesInView:ut,slidesNotInView:Z};return F(e,n),setTimeout(()=>i.emit("init"),0),U}Ft.globalOptions=void 0;function Wt(t={},e=[]){const n=P.useRef(t),s=P.useRef(e),[r,a]=P.useState(),[o,l]=P.useState(),i=P.useCallback(()=>{r&&r.reInit(n.current,s.current)},[r]);return P.useEffect(()=>{qt(n.current,t)||(n.current=t,i())},[t,i]),P.useEffect(()=>{Dn(s.current,e)||(s.current=e,i())},[e,i]),P.useEffect(()=>{if(En()&&o){Ft.globalOptions=Wt.globalOptions;const u=Ft(o,n.current,s.current);return a(u),()=>u.destroy()}else a(void 0)},[o,a]),[l,r]}Wt.globalOptions=void 0;const as="_carouselContainer_gu7c2_1",is="_viewport_gu7c2_14",cs="_slides_gu7c2_20",ls="_slide_gu7c2_20",us="_slideInner_gu7c2_40",ds="_loaderOverlay_gu7c2_48",fs="_image_gu7c2_58",ps="_loaded_gu7c2_69",gs="_loading_gu7c2_73",ms="_empty_gu7c2_81",hs="_controls_gu7c2_87",ys="_arrows_gu7c2_97",bs="_dots_gu7c2_107",xs="_dot_gu7c2_107",vs="_dotActive_gu7c2_133",z={carouselContainer:as,viewport:is,slides:cs,slide:ls,slideInner:us,loaderOverlay:ds,image:fs,loaded:ps,loading:gs,empty:ms,controls:hs,arrows:ys,dots:bs,dot:xs,dotActive:vs},q=({images:t,autoPlay:e=!1,autoDelay:n=5,showArrows:s=!0,showDots:r=!0,variant:a,slidesPerView:o=1,slideSpacing:l=16,cornerRadius:i=0,"data-color":u,"data-size":m})=>{const{t:f}=An();P.useEffect(()=>{const _="rk-carousel-inline-styles";if(typeof document>"u"||document.getElementById(_))return;const k=ws(z),O=document.createElement("style");O.id=_,O.textContent=k,document.head.appendChild(O)},[]);const p={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[x,c]=Wt(p),[g,h]=P.useState(0),[d,y]=P.useState([]),[v,T]=P.useState([]);P.useEffect(()=>{T(new Array((t==null?void 0:t.length)||0).fill(!1))},[t]);const C=P.useCallback(_=>{T(k=>{const O=[...k];return O[_]=!0,O})},[]),B=P.useMemo(()=>n*1e3,[n]),S=P.useCallback(()=>{c&&h(c.selectedScrollSnap())},[c]),A=P.useCallback(_=>c&&c.scrollTo(_),[c]),I=P.useCallback(()=>c&&c.scrollPrev(),[c]),F=P.useCallback(()=>c&&c.scrollNext(),[c]);P.useEffect(()=>{if(c)return c.on("select",S),c.on("reInit",S),y(c.scrollSnapList()),()=>{c.off("select",S),c.off("reInit",S)}},[c,S]),P.useEffect(()=>{c&&(c.reInit(),y(c.scrollSnapList()))},[c,t,o,l]),P.useEffect(()=>{if(!e||!c||!t||t.length<=1)return;const _=window.setInterval(()=>{c.canScrollNext()&&c.scrollNext()},B);return()=>{window.clearInterval(_)}},[e,B,c,t]);const D=Math.max(1,o),N=`${100/D}%`,M=l/2;return w.jsxs("div",{className:z.carouselContainer,"data-color":u,"data-size":m,"data-variant":a,children:[w.jsx("div",{className:z.viewport,ref:x,children:w.jsx("div",{className:z.slides,style:{marginLeft:`-${M}px`,marginRight:`-${M}px`},children:t&&t.length>0?t.map((_,k)=>w.jsx("div",{className:z.slide,style:{flex:`0 0 ${N}`,paddingLeft:`${M}px`,paddingRight:`${M}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:w.jsxs("div",{className:z.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!v[k]&&w.jsx("div",{className:z.loaderOverlay,children:w.jsx(ln,{"aria-label":f("carousel.loading")})}),w.jsx("img",{className:`${z.image} ${v[k]?z.loaded:z.loadingImage}`,src:_.src,alt:_.alt,loading:k<D?"eager":"lazy",crossOrigin:"anonymous",onLoad:()=>C(k),onError:O=>{O.target.style.display="none",C(k)}})]})},`image-${k}-${_.src}`)):w.jsx("div",{className:z.slide,style:{flex:"0 0 100%"},children:w.jsx("div",{className:z.empty,children:"Ingen bilder"})})})}),(s||r&&t&&t.length>1)&&w.jsxs("div",{className:z.controls,"aria-hidden":"false",children:[s&&w.jsxs("div",{className:z.arrows,children:[w.jsx(re,{variant:"primary",icon:!0,"aria-label":f("carousel.previousImage"),onClick:I,disabled:!t||t.length<=1,children:w.jsx(Tn,{"aria-hidden":!0})}),w.jsx(re,{variant:"primary",icon:!0,"aria-label":f("carousel.nextImage"),onClick:F,disabled:!t||t.length<=1,children:w.jsx(Bn,{"aria-hidden":!0})})]}),r&&t&&t.length>1&&w.jsx("div",{className:z.dots,role:"tablist","aria-label":f("carousel.imagePosition"),children:d.map((_,k)=>{const O=k===g;return w.jsx("button",{type:"button",className:`${z.dot} ${O?z.dotActive:""}`,onClick:()=>A(k),"aria-label":`${f("carousel.goToImage")} ${k+1}`,"aria-selected":O,role:"tab"},`dot-${k}`)})})]})]})};q.displayName="Carousel";function ws(t){return`
.${t.carouselContainer} {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-color: var(--ds-color-background-default, #fff);
  color: var(--ds-color-text-default, #2b2b2b);
  border-radius: var(--ds-border-radius-md, 4px);
  box-sizing: border-box;
  max-width: 100%;
}
.${t.viewport} {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.${t.slides} {
  display: flex;
  height: 100%;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.${t.slide} {
  position: relative;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.${t.slideInner} {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--ds-color-neutral-surface-subtle, #f5f5f5);
  overflow: hidden;
}
.${t.loaderOverlay} {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 2;
}
.${t.image} {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}
.${t.image}.${t.loaded} {
  opacity: 1;
}
.${t.loading} {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-size-2, 8px);
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-sm, 14px);
}
.${t.empty} {
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-sm, 14px);
  text-align: center;
}
.${t.controls} {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}
.${t.arrows} {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--ds-size-4, 16px);
  box-sizing: border-box;
  pointer-events: auto;
}
.${t.dots} {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--ds-size-3, 12px);
  display: inline-flex;
  gap: var(--ds-size-2, 8px);
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: var(--ds-size-1, 4px) var(--ds-size-2, 8px);
  border-radius: 999px;
}
.${t.dot} {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #d6d6d6);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.${t.dotActive} {
  background-color: var(--primary-color-red-10);
  border-color: var(--primary-color-red-10);
  transform: scale(1.1);
}
@media (max-width: 640px) {
  .${t.carouselContainer} {
    height: auto;
    min-height: 150px;
    aspect-ratio: 16 / 9;
  }
  .${t.viewport} {
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .${t.slides} {
    height: auto;
    min-height: 150px;
  }
  .${t.slide} {
    height: auto;
    min-height: 150px;
  }
  .${t.slideInner} {
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .${t.arrows} {
    padding: 0 var(--ds-size-2, 8px);
  }
  .${t.dots} {
    bottom: var(--ds-size-2, 8px);
    gap: var(--ds-size-1, 4px);
  }
  .${t.dot} {
    width: 10px;
    height: 10px;
  }
}
@media (max-width: 400px) {
  .${t.carouselContainer} {
    min-height: 120px;
  }
  .${t.arrows} {
    padding: 0 var(--ds-size-1, 4px);
  }
  .${t.arrows} button {
    transform: scale(0.85);
  }
}
`}try{q.displayName="Carousel",q.__docgenInfo={description:`Carousel-komponent for å vise en bildeserie.
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const{expect:E,within:it,userEvent:Ct,waitFor:K}=__STORYBOOK_MODULE_TEST__,Ss={title:"Components/Carousel",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Color token"}}},vt={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:t=>w.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:w.jsx(q,{...t})})},It={args:{...vt.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:t=>w.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:w.jsx(q,{...t})})},As="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",Ts=["jpg","jpeg","png"],Bs={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},ue=t=>t.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase());function de(t,e,n){const s=Bs[e];return s?`${t}/${s.path}/${n}`:`${t}/images/spaces/${e}/${n}`}function Is(){const t=new Map,e=new Map;return function(s){if(t.has(s))return Promise.resolve(t.get(s));if(e.has(s))return e.get(s);const r=new Promise(a=>{const o=new Image;o.crossOrigin="anonymous";const l=u=>{t.set(s,u),e.delete(s),a(u)},i=window.setTimeout(()=>{o.src="",l(!1)},5e3);o.onload=()=>{window.clearTimeout(i),l(!0)},o.onerror=()=>{window.clearTimeout(i),l(!1)},o.src=s});return e.set(s,r),r}}const fe=Is();async function Es(t,e){const n=[];for(let r=1;r<=6;r++){const a=r.toString().padStart(2,"0");let o=!1;for(const l of Ts){const i=`${e}_${a}.${l}`,u=de(t,e,i);if(!o&&await fe(u)){n.push({src:u,alt:ue(i)}),o=!0;break}const m=`${e.toLowerCase()}_${a}.${l}`,f=de(t,e,m);if(!o&&await fe(f)){n.push({src:f,alt:ue(m)}),o=!0;break}}}return n}const Et={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:t=>w.jsx(Ds,{...t})};function Ds(t){const[e,n]=oe.useState(null),s="Konferanselokaler",r=As;return oe.useEffect(()=>{let a=!1;return(async()=>{const o=await Es(r,s);a||n(o)})(),()=>{a=!0}},[r,s]),w.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:e===null?w.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[w.jsx(ln,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):w.jsx(q,{...t,images:e,slidesPerView:1})})}const ct=[{src:"https://picsum.photos/seed/test1/800/600",alt:"Test bilde 1"},{src:"https://picsum.photos/seed/test2/800/600",alt:"Test bilde 2"},{src:"https://picsum.photos/seed/test3/800/600",alt:"Test bilde 3"}],ft={name:"Test: Arrow Navigation",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.getByRole("button",{name:/neste/i}),s=e.getByRole("button",{name:/forrige/i}),r=e.getAllByRole("tab");E(r.length).toBe(3),E(r[0]).toHaveAttribute("aria-selected","true"),await Ct.click(n),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")}),await Ct.click(n),await K(()=>{E(r[2]).toHaveAttribute("aria-selected","true")}),await Ct.click(s),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")})}},pt={name:"Test: Dot Navigation",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.getAllByRole("tab");E(n[0]).toHaveAttribute("aria-selected","true"),await Ct.click(n[2]),await K(()=>{E(n[2]).toHaveAttribute("aria-selected","true")}),await Ct.click(n[0]),await K(()=>{E(n[0]).toHaveAttribute("aria-selected","true")})}},gt={name:"Test: Single Image (Disabled Arrows)",args:{images:[ct[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.getByRole("button",{name:/neste/i}),s=e.getByRole("button",{name:/forrige/i});E(n).toBeDisabled(),E(s).toBeDisabled();const r=e.queryAllByRole("tab");E(r.length).toBe(0)}},mt={name:"Test: Hidden Arrows",args:{images:ct,showArrows:!1,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.queryByRole("button",{name:/neste/i}),s=e.queryByRole("button",{name:/forrige/i});E(n).not.toBeInTheDocument(),E(s).not.toBeInTheDocument();const r=e.getAllByRole("tab");E(r.length).toBe(3)}},ht={name:"Test: Hidden Dots",args:{images:ct,showArrows:!0,showDots:!1,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.queryAllByRole("tab");E(n.length).toBe(0);const s=e.getByRole("button",{name:/neste/i});E(s).toBeInTheDocument()}},yt={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{E(t.textContent).toContain("Ingen bilder")}},bt={name:"Test: Image Alt Text",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{const s=e.getAllByRole("img");E(s.length).toBeGreaterThan(0)}),e.getAllByRole("img").forEach((s,r)=>{E(s).toHaveAttribute("alt"),E(s.getAttribute("alt")).not.toBe("")})}},xt={name:"Test: Dots Accessibility",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>w.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:w.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.getByRole("tablist");E(n).toBeInTheDocument(),E(n).toHaveAttribute("aria-label"),e.getAllByRole("tab").forEach((r,a)=>{E(r).toHaveAttribute("aria-label"),E(r).toHaveAttribute("aria-selected")})}};var pe,ge,me;vt.parameters={...vt.parameters,docs:{...(pe=vt.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    images: [{
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      alt: 'Solnedgang'
    }, {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
      alt: 'Fjell'
    }, {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
      alt: 'Skog'
    }],
    autoPlay: false,
    autoDelay: 5,
    showArrows: true,
    showDots: true,
    slidesPerView: 1,
    slideSpacing: 16,
    cornerRadius: 0
  },
  render: args => <div style={{
    width: '900px',
    height: '520px',
    margin: '0 auto',
    // Center horizontally
    display: 'flex',
    justifyContent: 'center'
  }}>
      <Carousel {...args} />
    </div>
}`,...(me=(ge=vt.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,ye,be;It.parameters={...It.parameters,docs:{...(he=It.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    slidesPerView: 2.5,
    slideSpacing: 20,
    cornerRadius: 12
  },
  render: args => <div style={{
    width: '1000px',
    height: '400px',
    padding: '20px',
    margin: '0 auto',
    // Center horizontally
    display: 'flex',
    justifyContent: 'center'
  }}>
      <Carousel {...args} />
    </div>
}`,...(be=(ye=It.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var xe,ve,we;Et.parameters={...Et.parameters,docs:{...(xe=Et.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(we=(ve=Et.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Se,Ae,Te,Be,Ie;ft.parameters={...ft.parameters,docs:{...(Se=ft.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Test: Arrow Navigation',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getByRole('button', {
        name: /neste/i
      })).toBeInTheDocument();
    });

    // Find the navigation buttons
    const nextButton = canvas.getByRole('button', {
      name: /neste/i
    });
    const prevButton = canvas.getByRole('button', {
      name: /forrige/i
    });

    // Find all dot buttons to track position
    const dots = canvas.getAllByRole('tab');
    expect(dots.length).toBe(3);

    // Initially, first dot should be selected
    expect(dots[0]).toHaveAttribute('aria-selected', 'true');

    // Click next button
    await userEvent.click(nextButton);

    // Wait for the carousel to update
    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-selected', 'true');
    });

    // Click next again
    await userEvent.click(nextButton);
    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-selected', 'true');
    });

    // Click previous to go back
    await userEvent.click(prevButton);
    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(Te=(Ae=ft.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(Ie=(Be=ft.parameters)==null?void 0:Be.docs)==null?void 0:Ie.description}}};var Ee,De,Ce,ke,je;pt.parameters={...pt.parameters,docs:{...(Ee=pt.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Test: Dot Navigation',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getAllByRole('tab').length).toBe(3);
    });
    const dots = canvas.getAllByRole('tab');

    // Initially, first dot should be selected
    expect(dots[0]).toHaveAttribute('aria-selected', 'true');

    // Click on the third dot
    await userEvent.click(dots[2]);
    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-selected', 'true');
    });

    // Click on the first dot to go back
    await userEvent.click(dots[0]);
    await waitFor(() => {
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(Ce=(De=pt.parameters)==null?void 0:De.docs)==null?void 0:Ce.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...(je=(ke=pt.parameters)==null?void 0:ke.docs)==null?void 0:je.description}}};var _e,Le,Re,Fe,Pe;gt.parameters={...gt.parameters,docs:{...(_e=gt.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Test: Single Image (Disabled Arrows)',
  args: {
    images: [testImages[0]],
    showArrows: true,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getByRole('button', {
        name: /neste/i
      })).toBeInTheDocument();
    });

    // Find the navigation buttons
    const nextButton = canvas.getByRole('button', {
      name: /neste/i
    });
    const prevButton = canvas.getByRole('button', {
      name: /forrige/i
    });

    // Arrows should be disabled with only one image
    expect(nextButton).toBeDisabled();
    expect(prevButton).toBeDisabled();

    // Dots should not be shown with only one image
    const dots = canvas.queryAllByRole('tab');
    expect(dots.length).toBe(0);
  }
}`,...(Re=(Le=gt.parameters)==null?void 0:Le.docs)==null?void 0:Re.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Pe=(Fe=gt.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.description}}};var $e,Oe,ze,Ne,Me;mt.parameters={...mt.parameters,docs:{...($e=mt.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Test: Hidden Arrows',
  args: {
    images: testImages,
    showArrows: false,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for dots to appear (indicates carousel is ready)
    await waitFor(() => {
      expect(canvas.getAllByRole('tab').length).toBe(3);
    });

    // Arrows should not be present
    const nextButton = canvas.queryByRole('button', {
      name: /neste/i
    });
    const prevButton = canvas.queryByRole('button', {
      name: /forrige/i
    });
    expect(nextButton).not.toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();

    // Dots should still work
    const dots = canvas.getAllByRole('tab');
    expect(dots.length).toBe(3);
  }
}`,...(ze=(Oe=mt.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...(Me=(Ne=mt.parameters)==null?void 0:Ne.docs)==null?void 0:Me.description}}};var He,Ve,qe,Ge,Ue;ht.parameters={...ht.parameters,docs:{...(He=ht.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Test: Hidden Dots',
  args: {
    images: testImages,
    showArrows: true,
    showDots: false,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for arrows to appear
    await waitFor(() => {
      expect(canvas.getByRole('button', {
        name: /neste/i
      })).toBeInTheDocument();
    });

    // Dots should not be present
    const dots = canvas.queryAllByRole('tab');
    expect(dots.length).toBe(0);

    // Arrows should still work
    const nextButton = canvas.getByRole('button', {
      name: /neste/i
    });
    expect(nextButton).toBeInTheDocument();
  }
}`,...(qe=(Ve=ht.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(Ue=(Ge=ht.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.description}}};var Ke,We,Xe,Qe,Je;yt.parameters={...yt.parameters,docs:{...(Ke=yt.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Test: Empty State',
  args: {
    images: [],
    showArrows: true,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    // Check that the empty message is displayed
    expect(canvasElement.textContent).toContain('Ingen bilder');
  }
}`,...(Xe=(We=yt.parameters)==null?void 0:We.docs)==null?void 0:Xe.source},description:{story:"Tests that empty state is handled gracefully.",...(Je=(Qe=yt.parameters)==null?void 0:Qe.docs)==null?void 0:Je.description}}};var Ye,Ze,tn,en,nn;bt.parameters={...bt.parameters,docs:{...(Ye=bt.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Test: Image Alt Text',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for images to be rendered
    await waitFor(() => {
      const images = canvas.getAllByRole('img');
      expect(images.length).toBeGreaterThan(0);
    });

    // Check that images have alt text
    const images = canvas.getAllByRole('img');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  }
}`,...(tn=(Ze=bt.parameters)==null?void 0:Ze.docs)==null?void 0:tn.source},description:{story:"Tests that images have proper alt text for accessibility.",...(nn=(en=bt.parameters)==null?void 0:en.docs)==null?void 0:nn.description}}};var sn,on,rn,an,cn;xt.parameters={...xt.parameters,docs:{...(sn=xt.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  name: 'Test: Dots Accessibility',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false
  },
  render: args => <div style={{
    width: '600px',
    height: '400px',
    margin: '0 auto'
  }}>
      <Carousel {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getAllByRole('tab').length).toBe(3);
    });

    // Check that dots container has proper role
    const tablist = canvas.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute('aria-label');

    // Check that each dot has proper attributes
    const dots = canvas.getAllByRole('tab');
    dots.forEach((dot, index) => {
      expect(dot).toHaveAttribute('aria-label');
      expect(dot).toHaveAttribute('aria-selected');
    });
  }
}`,...(rn=(on=xt.parameters)==null?void 0:on.docs)==null?void 0:rn.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(cn=(an=xt.parameters)==null?void 0:an.docs)==null?void 0:cn.description}}};const Cs=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility"],Fs=Object.freeze(Object.defineProperty({__proto__:null,Default:vt,MultipleSlides:It,TestArrowNavigation:ft,TestDotNavigation:pt,TestDotsAccessibility:xt,TestEmptyState:yt,TestHiddenArrows:mt,TestHiddenDots:ht,TestImageAltText:bt,TestSingleImageDisabledArrows:gt,WithSupabase:Et,__namedExportsOrder:Cs,default:Ss},Symbol.toStringTag,{value:"Module"}));export{Fs as C};
