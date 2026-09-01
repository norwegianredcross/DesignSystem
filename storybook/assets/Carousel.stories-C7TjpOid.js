import{r as F,j as x,R as Ue}from"./iframe-6shDIUI7.js";import{B as lt}from"./index-D8kbYrB0.js";import{S as En}from"./index-DBJqX3B9.js";import{u as Nn}from"./LanguageContext-Csh-iBNY.js";import{S as On,a as zn,b as qn,c as Vn}from"./Play-B6MUhQrI.js";function Gn(e){return Object.prototype.toString.call(e)==="[object Object]"}function ut(e){return Gn(e)||Array.isArray(e)}function Un(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Xe(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const s=JSON.stringify(Object.keys(e.breakpoints||{})),a=JSON.stringify(Object.keys(t.breakpoints||{}));return s!==a?!1:n.every(r=>{const l=e[r],i=t[r];return typeof l=="function"?`${l}`==`${i}`:!ut(l)||!ut(i)?l===i:Xe(l,i)})}function dt(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function Kn(e,t){if(e.length!==t.length)return!1;const n=dt(e),o=dt(t);return n.every((s,a)=>{const r=o[a];return Xe(s,r)})}function Qe(e){return typeof e=="number"}function Ke(e){return typeof e=="string"}function Ne(e){return typeof e=="boolean"}function ft(e){return Object.prototype.toString.call(e)==="[object Object]"}function _(e){return Math.abs(e)}function Je(e){return Math.sign(e)}function Pe(e,t){return _(e-t)}function Wn(e,t){if(e===0||t===0||_(e)<=_(t))return 0;const n=Pe(_(e),_(t));return _(n/e)}function Xn(e){return Math.round(e*100)/100}function Fe(e){return Re(e).map(Number)}function ee(e){return e[$e(e)]}function $e(e){return Math.max(0,e.length-1)}function Ye(e,t){return t===$e(e)}function pt(e,t=0){return Array.from(Array(e),(n,o)=>t+o)}function Re(e){return Object.keys(e)}function kn(e,t){return[e,t].reduce((n,o)=>(Re(o).forEach(s=>{const a=n[s],r=o[s],l=ft(a)&&ft(r);n[s]=l?kn(a,r):r}),n),{})}function We(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Qn(e,t){const n={start:o,center:s,end:a};function o(){return 0}function s(i){return a(i)/2}function a(i){return t-i}function r(i,u){return Ke(e)?n[e](i):e(t,i,u)}return{measure:r}}function Le(){let e=[];function t(s,a,r,l={passive:!0}){let i;if("addEventListener"in s)s.addEventListener(a,r,l),i=()=>s.removeEventListener(a,r,l);else{const u=s;u.addListener(r),i=()=>u.removeListener(r)}return e.push(i),o}function n(){e=e.filter(s=>s())}const o={add:t,clear:n};return o}function Jn(e,t,n,o){const s=Le(),a=1e3/60;let r=null,l=0,i=0;function u(){s.add(e,"visibilitychange",()=>{e.hidden&&c()})}function m(){b(),s.clear()}function d(h){if(!i)return;r||(r=h,n(),n());const f=h-r;for(r=h,l+=f;l>=a;)n(),l-=a;const y=l/a;o(y),i&&(i=t.requestAnimationFrame(d))}function p(){i||(i=t.requestAnimationFrame(d))}function b(){t.cancelAnimationFrame(i),r=null,l=0,i=0}function c(){r=null,l=0}return{init:u,destroy:m,start:p,stop:b,update:n,render:o}}function Yn(e,t){const n=t==="rtl",o=e==="y",s=o?"y":"x",a=o?"x":"y",r=!o&&n?-1:1,l=m(),i=d();function u(c){const{height:g,width:h}=c;return o?g:h}function m(){return o?"top":n?"right":"left"}function d(){return o?"bottom":n?"left":"right"}function p(c){return c*r}return{scroll:s,cross:a,startEdge:l,endEdge:i,measureSize:u,direction:p}}function fe(e=0,t=0){const n=_(e-t);function o(u){return u<e}function s(u){return u>t}function a(u){return o(u)||s(u)}function r(u){return a(u)?o(u)?e:t:u}function l(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:r,reachedAny:a,reachedMax:s,reachedMin:o,removeOffset:l}}function Dn(e,t,n){const{constrain:o}=fe(0,e),s=e+1;let a=r(t);function r(p){return n?_((s+p)%s):o(p)}function l(){return a}function i(p){return a=r(p),d}function u(p){return m().set(l()+p)}function m(){return Dn(e,l(),n)}const d={get:l,set:i,add:u,clone:m};return d}function Zn(e,t,n,o,s,a,r,l,i,u,m,d,p,b,c,g,h,f,y){const{cross:v,direction:E}=e,C=["INPUT","SELECT","TEXTAREA"],k={passive:!1},A=Le(),B=Le(),T=fe(50,225).constrain(b.measure(20)),$={mouse:300,touch:400},j={mouse:500,touch:600},O=c?43:25;let q=!1,K=0,W=0,te=!1,ne=!1,X=!1,Q=!1;function ie(w){if(!y)return;function P(G){(Ne(y)||y(w,G))&&Ee(G)}const M=t;A.add(M,"dragstart",G=>G.preventDefault(),k).add(M,"touchmove",()=>{},k).add(M,"touchend",()=>{}).add(M,"touchstart",P).add(M,"mousedown",P).add(M,"touchcancel",V).add(M,"contextmenu",V).add(M,"click",re,!0)}function J(){A.clear(),B.clear()}function Z(){const w=Q?n:t;B.add(w,"touchmove",U,k).add(w,"touchend",V).add(w,"mousemove",U,k).add(w,"mouseup",V)}function I(w){const P=w.nodeName||"";return C.includes(P)}function D(){return(c?j:$)[Q?"mouse":"touch"]}function R(w,P){const M=d.add(Je(w)*-1),G=m.byDistance(w,!c).distance;return c||_(w)<T?G:h&&P?G*.5:m.byIndex(M.get(),0).distance}function Ee(w){const P=We(w,o);Q=P,X=c&&P&&!w.buttons&&q,q=Pe(s.get(),r.get())>=2,!(P&&w.button!==0)&&(I(w.target)||(te=!0,a.pointerDown(w),u.useFriction(0).useDuration(0),s.set(r),Z(),K=a.readPoint(w),W=a.readPoint(w,v),p.emit("pointerDown")))}function U(w){if(!We(w,o)&&w.touches.length>=2)return V(w);const M=a.readPoint(w),G=a.readPoint(w,v),oe=Pe(M,K),ae=Pe(G,W);if(!ne&&!Q&&(!w.cancelable||(ne=oe>ae,!ne)))return V(w);const ue=a.pointerMove(w);oe>g&&(X=!0),u.useFriction(.3).useDuration(.75),l.start(),s.add(E(ue)),w.preventDefault()}function V(w){const M=m.byDistance(0,!1).index!==d.get(),G=a.pointerUp(w)*D(),oe=R(E(G),M),ae=Wn(G,oe),ue=O-10*ae,ce=f+ae/50;ne=!1,te=!1,B.clear(),u.useDuration(ue).useFriction(ce),i.distance(oe,!c),Q=!1,p.emit("pointerUp")}function re(w){X&&(w.stopPropagation(),w.preventDefault(),X=!1)}function Y(){return te}return{init:ie,destroy:J,pointerDown:Y}}function eo(e,t){let o,s;function a(d){return d.timeStamp}function r(d,p){const c=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(We(d,t)?d:d.touches[0])[c]}function l(d){return o=d,s=d,r(d)}function i(d){const p=r(d)-r(s),b=a(d)-a(o)>170;return s=d,b&&(o=d),p}function u(d){if(!o||!s)return 0;const p=r(s)-r(o),b=a(d)-a(o),c=a(d)-a(s)>170,g=p/b;return b&&!c&&_(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:u,readPoint:r}}function to(){function e(n){const{offsetTop:o,offsetLeft:s,offsetWidth:a,offsetHeight:r}=n;return{top:o,right:s+a,bottom:o+r,left:s,width:a,height:r}}return{measure:e}}function no(e){function t(o){return e*(o/100)}return{measure:t}}function oo(e,t,n,o,s,a,r){const l=[e].concat(o);let i,u,m=[],d=!1;function p(h){return s.measureSize(r.measure(h))}function b(h){if(!a)return;u=p(e),m=o.map(p);function f(y){for(const v of y){if(d)return;const E=v.target===e,C=o.indexOf(v.target),k=E?u:m[C],A=p(E?e:o[C]);if(_(A-k)>=.5){h.reInit(),t.emit("resize");break}}}i=new ResizeObserver(y=>{(Ne(a)||a(h,y))&&f(y)}),n.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function c(){d=!0,i&&i.disconnect()}return{init:b,destroy:c}}function so(e,t,n,o,s,a){let r=0,l=0,i=s,u=a,m=e.get(),d=0;function p(){const k=o.get()-e.get(),A=!i;let B=0;return A?(r=0,n.set(o),e.set(o),B=k):(n.set(e),r+=k/i,r*=u,m+=r,e.add(r),B=m-d),l=Je(B),d=m,C}function b(){const k=o.get()-t.get();return _(k)<.001}function c(){return i}function g(){return l}function h(){return r}function f(){return v(s)}function y(){return E(a)}function v(k){return i=k,C}function E(k){return u=k,C}const C={direction:g,duration:c,velocity:h,seek:p,settled:b,useBaseFriction:y,useBaseDuration:f,useFriction:E,useDuration:v};return C}function ro(e,t,n,o,s){const a=s.measure(10),r=s.measure(50),l=fe(.1,.99);let i=!1;function u(){return!(i||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function m(b){if(!u())return;const c=e.reachedMin(t.get())?"min":"max",g=_(e[c]-t.get()),h=n.get()-t.get(),f=l.constrain(g/r);n.subtract(h*f),!b&&_(h)<a&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function d(b){i=!b}return{shouldConstrain:u,constrain:m,toggleActive:d}}function ao(e,t,n,o,s){const a=fe(-t+e,0),r=d(),l=m(),i=p();function u(c,g){return Pe(c,g)<=1}function m(){const c=r[0],g=ee(r),h=r.lastIndexOf(c),f=r.indexOf(g)+1;return fe(h,f)}function d(){return n.map((c,g)=>{const{min:h,max:f}=a,y=a.constrain(c),v=!g,E=Ye(n,g);return v?f:E||u(h,y)?h:u(f,y)?f:y}).map(c=>parseFloat(c.toFixed(3)))}function p(){if(t<=e+s)return[a.max];if(o==="keepSnaps")return r;const{min:c,max:g}=l;return r.slice(c,g)}return{snapsContained:i,scrollContainLimit:l}}function io(e,t,n){const o=t[0],s=n?o-e:ee(t);return{limit:fe(s,o)}}function co(e,t,n,o){const a=t.min+.1,r=t.max+.1,{reachedMin:l,reachedMax:i}=fe(a,r);function u(p){return p===1?i(n.get()):p===-1?l(n.get()):!1}function m(p){if(!u(p))return;const b=e*(p*-1);o.forEach(c=>c.add(b))}return{loop:m}}function lo(e){const{max:t,length:n}=e;function o(a){const r=a-t;return n?r/-n:0}return{get:o}}function uo(e,t,n,o,s){const{startEdge:a,endEdge:r}=e,{groupSlides:l}=s,i=d().map(t.measure),u=p(),m=b();function d(){return l(o).map(g=>ee(g)[r]-g[0][a]).map(_)}function p(){return o.map(g=>n[a]-g[a]).map(g=>-_(g))}function b(){return l(u).map(g=>g[0]).map((g,h)=>g+i[h])}return{snaps:u,snapsAligned:m}}function fo(e,t,n,o,s,a){const{groupSlides:r}=s,{min:l,max:i}=o,u=m();function m(){const p=r(a),b=!e||t==="keepSnaps";return n.length===1?[a]:b?p:p.slice(l,i).map((c,g,h)=>{const f=!g,y=Ye(h,g);if(f){const v=ee(h[0])+1;return pt(v)}if(y){const v=$e(a)-ee(h)[0]+1;return pt(v,ee(h)[0])}return c})}return{slideRegistry:u}}function po(e,t,n,o,s){const{reachedAny:a,removeOffset:r,constrain:l}=o;function i(c){return c.concat().sort((g,h)=>_(g)-_(h))[0]}function u(c){const g=e?r(c):l(c),h=t.map((y,v)=>({diff:m(y-g,0),index:v})).sort((y,v)=>_(y.diff)-_(v.diff)),{index:f}=h[0];return{index:f,distance:g}}function m(c,g){const h=[c,c+n,c-n];if(!e)return c;if(!g)return i(h);const f=h.filter(y=>Je(y)===g);return f.length?i(f):ee(h)-n}function d(c,g){const h=t[c]-s.get(),f=m(h,g);return{index:c,distance:f}}function p(c,g){const h=s.get()+c,{index:f,distance:y}=u(h),v=!e&&a(h);if(!g||v)return{index:f,distance:c};const E=t[f]-y,C=c+m(E,0);return{index:f,distance:C}}return{byDistance:p,byIndex:d,shortcut:m}}function go(e,t,n,o,s,a,r){function l(d){const p=d.distance,b=d.index!==t.get();a.add(p),p&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),b&&(n.set(t.get()),t.set(d.index),r.emit("select"))}function i(d,p){const b=s.byDistance(d,p);l(b)}function u(d,p){const b=t.clone().set(d),c=s.byIndex(b.get(),p);l(c)}return{distance:i,index:u}}function mo(e,t,n,o,s,a,r,l){const i={passive:!0,capture:!0};let u=0;function m(b){if(!l)return;function c(g){if(new Date().getTime()-u>10)return;r.emit("slideFocusStart"),e.scrollLeft=0;const y=n.findIndex(v=>v.includes(g));Qe(y)&&(s.useDuration(0),o.index(y,0),r.emit("slideFocus"))}a.add(document,"keydown",d,!1),t.forEach((g,h)=>{a.add(g,"focus",f=>{(Ne(l)||l(b,f))&&c(h)},i)})}function d(b){b.code==="Tab"&&(u=new Date().getTime())}return{init:m}}function De(e){let t=e;function n(){return t}function o(i){t=r(i)}function s(i){t+=r(i)}function a(i){t-=r(i)}function r(i){return Qe(i)?i:i.get()}return{get:n,set:o,add:s,subtract:a}}function In(e,t){const n=e.scroll==="x"?r:l,o=t.style;let s=null,a=!1;function r(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(a)return;const b=Xn(e.direction(p));b!==s&&(o.transform=n(b),s=b)}function u(p){a=!p}function m(){a||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:m,to:i,toggleActive:u}}function ho(e,t,n,o,s,a,r,l,i){const m=Fe(s),d=Fe(s).reverse(),p=f().concat(y());function b(A,B){return A.reduce((T,$)=>T-s[$],B)}function c(A,B){return A.reduce((T,$)=>b(T,B)>0?T.concat([$]):T,[])}function g(A){return a.map((B,T)=>({start:B-o[T]+.5+A,end:B+t-.5+A}))}function h(A,B,T){const $=g(B);return A.map(j=>{const O=T?0:-n,q=T?n:0,K=T?"end":"start",W=$[j][K];return{index:j,loopPoint:W,slideLocation:De(-1),translate:In(e,i[j]),target:()=>l.get()>W?O:q}})}function f(){const A=r[0],B=c(d,A);return h(B,n,!1)}function y(){const A=t-r[0]-1,B=c(m,A);return h(B,-n,!0)}function v(){return p.every(({index:A})=>{const B=m.filter(T=>T!==A);return b(B,t)<=.1})}function E(){p.forEach(A=>{const{target:B,translate:T,slideLocation:$}=A,j=B();j!==$.get()&&(T.to(j),$.set(j))})}function C(){p.forEach(A=>A.translate.clear())}return{canLoop:v,clear:C,loop:E,loopPoints:p}}function yo(e,t,n){let o,s=!1;function a(i){if(!n)return;function u(m){for(const d of m)if(d.type==="childList"){i.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(m=>{s||(Ne(n)||n(i,m))&&u(m)}),o.observe(e,{childList:!0})}function r(){o&&o.disconnect(),s=!0}return{init:a,destroy:r}}function bo(e,t,n,o){const s={};let a=null,r=null,l,i=!1;function u(){l=new IntersectionObserver(c=>{i||(c.forEach(g=>{const h=t.indexOf(g.target);s[h]=g}),a=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(c=>l.observe(c))}function m(){l&&l.disconnect(),i=!0}function d(c){return Re(s).reduce((g,h)=>{const f=parseInt(h),{isIntersecting:y}=s[f];return(c&&y||!c&&!y)&&g.push(f),g},[])}function p(c=!0){if(c&&a)return a;if(!c&&r)return r;const g=d(c);return c&&(a=g),c||(r=g),g}return{init:u,destroy:m,get:p}}function wo(e,t,n,o,s,a){const{measureSize:r,startEdge:l,endEdge:i}=e,u=n[0]&&s,m=c(),d=g(),p=n.map(r),b=h();function c(){if(!u)return 0;const y=n[0];return _(t[l]-y[l])}function g(){if(!u)return 0;const y=a.getComputedStyle(ee(o));return parseFloat(y.getPropertyValue(`margin-${i}`))}function h(){return n.map((y,v,E)=>{const C=!v,k=Ye(E,v);return C?p[v]+m:k?p[v]+d:E[v+1][l]-y[l]}).map(_)}return{slideSizes:p,slideSizesWithGaps:b,startGap:m,endGap:d}}function vo(e,t,n,o,s,a,r,l,i){const{startEdge:u,endEdge:m,direction:d}=e,p=Qe(n);function b(f,y){return Fe(f).filter(v=>v%y===0).map(v=>f.slice(v,v+y))}function c(f){return f.length?Fe(f).reduce((y,v,E)=>{const C=ee(y)||0,k=C===0,A=v===$e(f),B=s[u]-a[C][u],T=s[u]-a[v][m],$=!o&&k?d(r):0,j=!o&&A?d(l):0,O=_(T-j-(B+$));return E&&O>t+i&&y.push(v),A&&y.push(f.length),y},[]).map((y,v,E)=>{const C=Math.max(E[v-1]||0);return f.slice(C,y)}):[]}function g(f){return p?b(f,n):c(f)}return{groupSlides:g}}function xo(e,t,n,o,s,a,r){const{align:l,axis:i,direction:u,startIndex:m,loop:d,duration:p,dragFree:b,dragThreshold:c,inViewThreshold:g,slidesToScroll:h,skipSnaps:f,containScroll:y,watchResize:v,watchSlides:E,watchDrag:C,watchFocus:k}=a,A=2,B=to(),T=B.measure(t),$=n.map(B.measure),j=Yn(i,u),O=j.measureSize(T),q=no(O),K=Qn(l,O),W=!d&&!!y,te=d||!!y,{slideSizes:ne,slideSizesWithGaps:X,startGap:Q,endGap:ie}=wo(j,T,$,n,te,s),J=vo(j,O,h,d,T,$,Q,ie,A),{snaps:Z,snapsAligned:I}=uo(j,K,T,$,J),D=-ee(Z)+ee(X),{snapsContained:R,scrollContainLimit:Ee}=ao(O,D,I,y,A),U=W?R:I,{limit:V}=io(D,U,d),re=Dn($e(U),m,d),Y=re.clone(),L=Fe(n),w=({dragHandler:ge,scrollBody:Ve,scrollBounds:Ge,options:{loop:Me}})=>{Me||Ge.constrain(ge.pointerDown()),Ve.seek()},P=({scrollBody:ge,translate:Ve,location:Ge,offsetLocation:Me,previousLocation:Pn,scrollLooper:Fn,slideLooper:Rn,dragHandler:Ln,animation:_n,eventHandler:ot,scrollBounds:$n,options:{loop:st}},rt)=>{const at=ge.settled(),Mn=!$n.shouldConstrain(),it=st?at:at&&Mn,ct=it&&!Ln.pointerDown();ct&&_n.stop();const Hn=Ge.get()*rt+Pn.get()*(1-rt);Me.set(Hn),st&&(Fn.loop(ge.direction()),Rn.loop()),Ve.to(Me.get()),ct&&ot.emit("settle"),it||ot.emit("scroll")},M=Jn(o,s,()=>w(qe),ge=>P(qe,ge)),G=.68,oe=U[re.get()],ae=De(oe),ue=De(oe),ce=De(oe),de=De(oe),ke=so(ae,ce,ue,de,p,G),Oe=po(d,U,D,V,de),ze=go(M,re,Y,ke,Oe,de,r),et=lo(V),tt=Le(),Cn=bo(t,n,r,g),{slideRegistry:nt}=fo(W,y,U,Ee,J,L),jn=mo(e,n,nt,ze,ke,tt,r,k),qe={ownerDocument:o,ownerWindow:s,eventHandler:r,containerRect:T,slideRects:$,animation:M,axis:j,dragHandler:Zn(j,e,o,s,de,eo(j,s),ae,M,ze,ke,Oe,re,r,q,b,c,f,G,C),eventStore:tt,percentOfView:q,index:re,indexPrevious:Y,limit:V,location:ae,offsetLocation:ce,previousLocation:ue,options:a,resizeHandler:oo(t,r,s,n,j,v,B),scrollBody:ke,scrollBounds:ro(V,ce,de,ke,q),scrollLooper:co(D,V,ce,[ae,ce,ue,de]),scrollProgress:et,scrollSnapList:U.map(et.get),scrollSnaps:U,scrollTarget:Oe,scrollTo:ze,slideLooper:ho(j,O,D,ne,X,Z,U,ce,n),slideFocus:jn,slidesHandler:yo(t,r,E),slidesInView:Cn,slideIndexes:L,slideRegistry:nt,slidesToScroll:J,target:de,translate:In(j,t)};return qe}function So(){let e={},t;function n(u){t=u}function o(u){return e[u]||[]}function s(u){return o(u).forEach(m=>m(t,u)),i}function a(u,m){return e[u]=o(u).concat([m]),i}function r(u,m){return e[u]=o(u).filter(d=>d!==m),i}function l(){e={}}const i={init:n,emit:s,off:r,on:a,clear:l};return i}const Ao={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Bo(e){function t(a,r){return kn(a,r||{})}function n(a){const r=a.breakpoints||{},l=Re(r).filter(i=>e.matchMedia(i).matches).map(i=>r[i]).reduce((i,u)=>t(i,u),{});return t(a,l)}function o(a){return a.map(r=>Re(r.breakpoints||{})).reduce((r,l)=>r.concat(l),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function To(e){let t=[];function n(a,r){return t=r.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),t.forEach(l=>l.init(a,e)),r.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function o(){t=t.filter(a=>a.destroy())}return{init:n,destroy:o}}function He(e,t,n){const o=e.ownerDocument,s=o.defaultView,a=Bo(s),r=To(a),l=Le(),i=So(),{mergeOptions:u,optionsAtMedia:m,optionsMediaQueries:d}=a,{on:p,off:b,emit:c}=i,g=j;let h=!1,f,y=u(Ao,He.globalOptions),v=u(y),E=[],C,k,A;function B(){const{container:L,slides:w}=v;k=(Ke(L)?e.querySelector(L):L)||e.children[0];const M=Ke(w)?k.querySelectorAll(w):w;A=[].slice.call(M||k.children)}function T(L){const w=xo(e,k,A,o,s,L,i);if(L.loop&&!w.slideLooper.canLoop()){const P=Object.assign({},L,{loop:!1});return T(P)}return w}function $(L,w){h||(y=u(y,L),v=m(y),E=w||E,B(),f=T(v),d([y,...E.map(({options:P})=>P)]).forEach(P=>l.add(P,"change",j)),v.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(Y),f.eventHandler.init(Y),f.resizeHandler.init(Y),f.slidesHandler.init(Y),f.options.loop&&f.slideLooper.loop(),k.offsetParent&&A.length&&f.dragHandler.init(Y),C=r.init(Y,E)))}function j(L,w){const P=J();O(),$(u({startIndex:P},L),w),i.emit("reInit")}function O(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),r.destroy(),l.clear()}function q(){h||(h=!0,l.clear(),O(),i.emit("destroy"),i.clear())}function K(L,w,P){!v.active||h||(f.scrollBody.useBaseFriction().useDuration(w===!0?0:v.duration),f.scrollTo.index(L,P||0))}function W(L){const w=f.index.add(1).get();K(w,L,-1)}function te(L){const w=f.index.add(-1).get();K(w,L,1)}function ne(){return f.index.add(1).get()!==J()}function X(){return f.index.add(-1).get()!==J()}function Q(){return f.scrollSnapList}function ie(){return f.scrollProgress.get(f.offsetLocation.get())}function J(){return f.index.get()}function Z(){return f.indexPrevious.get()}function I(){return f.slidesInView.get()}function D(){return f.slidesInView.get(!1)}function R(){return C}function Ee(){return f}function U(){return e}function V(){return k}function re(){return A}const Y={canScrollNext:ne,canScrollPrev:X,containerNode:V,internalEngine:Ee,destroy:q,off:b,on:p,emit:c,plugins:R,previousScrollSnap:Z,reInit:g,rootNode:U,scrollNext:W,scrollPrev:te,scrollProgress:ie,scrollSnapList:Q,scrollTo:K,selectedScrollSnap:J,slideNodes:re,slidesInView:I,slidesNotInView:D};return $(t,n),setTimeout(()=>i.emit("init"),0),Y}He.globalOptions=void 0;function Ze(e={},t=[]){const n=F.useRef(e),o=F.useRef(t),[s,a]=F.useState(),[r,l]=F.useState(),i=F.useCallback(()=>{s&&s.reInit(n.current,o.current)},[s]);return F.useEffect(()=>{Xe(n.current,e)||(n.current=e,i())},[e,i]),F.useEffect(()=>{Kn(o.current,t)||(o.current=t,i())},[t,i]),F.useEffect(()=>{if(Un()&&r){He.globalOptions=Ze.globalOptions;const u=He(r,n.current,o.current);return a(u),()=>u.destroy()}else a(void 0)},[r,a]),[l,s]}Ze.globalOptions=void 0;const Eo="_carouselContainer_1bkqf_5",ko="_viewport_1bkqf_18",Do="_slides_1bkqf_24",Io="_slide_1bkqf_24",Co="_slideInner_1bkqf_44",jo="_loaderOverlay_1bkqf_52",Po="_image_1bkqf_62",Fo="_loaded_1bkqf_73",Ro="_loading_1bkqf_77",Lo="_empty_1bkqf_85",_o="_controls_1bkqf_91",$o="_arrows_1bkqf_101",Mo="_dots_1bkqf_111",Ho="_playPause_1bkqf_126",No="_dot_1bkqf_111",Oo="_dotActive_1bkqf_162",H={carouselContainer:Eo,viewport:ko,slides:Do,slide:Io,slideInner:Co,loaderOverlay:jo,image:Po,loaded:Fo,loading:Ro,empty:Lo,controls:_o,arrows:$o,dots:Mo,playPause:Ho,dot:No,dotActive:Oo},N=({images:e,autoPlay:t=!1,autoDelay:n=5,showArrows:o=!0,showDots:s=!0,variant:a,slidesPerView:r=1,slideSpacing:l=16,cornerRadius:i=0,"data-color":u,"data-size":m})=>{const{t:d}=Nn();F.useEffect(()=>{const I="rk-carousel-inline-styles";if(typeof document>"u"||document.getElementById(I))return;const D=zo(H),R=document.createElement("style");R.id=I,R.textContent=D,document.head.prepend(R)},[]);const p={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[b,c]=Ze(p),[g,h]=F.useState(0),[f,y]=F.useState([]),[v,E]=F.useState([]),C=F.useRef([]),k=(e??[]).map(I=>I.src).join(`
`);F.useEffect(()=>{E((e??[]).map((I,D)=>{const R=C.current[D];return!!(R&&R.complete&&R.naturalWidth>0)}))},[k]);const A=F.useCallback(I=>{E(D=>{if(D[I])return D;const R=[...D];return R[I]=!0,R})},[]),B=F.useMemo(()=>n*1e3,[n]),T=F.useCallback(()=>{c&&h(c.selectedScrollSnap())},[c]),$=F.useCallback(I=>c&&c.scrollTo(I),[c]),j=F.useCallback(()=>c&&c.scrollPrev(),[c]),O=F.useCallback(()=>c&&c.scrollNext(),[c]);F.useEffect(()=>{if(c)return c.on("select",T),c.on("reInit",T),y(c.scrollSnapList()),()=>{c.off("select",T),c.off("reInit",T)}},[c,T]),F.useEffect(()=>{c&&(c.reInit(),y(c.scrollSnapList()))},[c,e,r,l]);const[q,K]=F.useState(!1),[W,te]=F.useState(!1),[ne,X]=F.useState(!1),Q=t&&!q&&!W&&!ne;F.useEffect(()=>{if(!Q||!c||!e||e.length<=1)return;const I=window.setInterval(()=>{c.canScrollNext()&&c.scrollNext()},B);return()=>{window.clearInterval(I)}},[Q,B,c,e]);const ie=Math.max(1,r),J=`${100/ie}%`,Z=l/2;return x.jsxs("div",{className:H.carouselContainer,"data-color":u,"data-size":m,"data-variant":a,onMouseEnter:t?()=>te(!0):void 0,onMouseLeave:t?()=>te(!1):void 0,onFocus:t?()=>X(!0):void 0,onBlur:t?I=>{I.currentTarget.contains(I.relatedTarget)||X(!1)}:void 0,children:[x.jsx("div",{className:H.viewport,ref:b,children:x.jsx("div",{className:H.slides,style:{marginLeft:`-${Z}px`,marginRight:`-${Z}px`},children:e&&e.length>0?e.map((I,D)=>x.jsx("div",{className:H.slide,style:{flex:`0 0 ${J}`,paddingLeft:`${Z}px`,paddingRight:`${Z}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:x.jsxs("div",{className:H.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!v[D]&&x.jsx("div",{className:H.loaderOverlay,children:x.jsx(En,{"aria-label":d("carousel.loading")})}),x.jsx("img",{ref:R=>{C.current[D]=R},className:`${H.image} ${v[D]?H.loaded:H.loadingImage}`,src:I.src,alt:I.alt,loading:D<ie?"eager":"lazy",crossOrigin:"anonymous",onLoad:()=>A(D),onError:R=>{R.target.style.display="none",A(D)}})]})},`image-${D}-${I.src}`)):x.jsx("div",{className:H.slide,style:{flex:"0 0 100%"},children:x.jsx("div",{className:H.empty,children:"Ingen bilder"})})})}),(o||s&&e&&e.length>1)&&x.jsxs("div",{className:H.controls,"aria-hidden":"false",children:[o&&x.jsxs("div",{className:H.arrows,children:[x.jsx(lt,{variant:"primary",icon:!0,"aria-label":d("carousel.previousImage"),onClick:j,disabled:!e||e.length<=1,children:x.jsx(On,{"aria-hidden":!0})}),x.jsx(lt,{variant:"primary",icon:!0,"aria-label":d("carousel.nextImage"),onClick:O,disabled:!e||e.length<=1,children:x.jsx(zn,{"aria-hidden":!0})})]}),s&&e&&e.length>1&&x.jsxs("div",{className:H.dots,role:"group","aria-label":d("carousel.imagePosition"),children:[t&&x.jsx("button",{type:"button",className:H.playPause,onClick:()=>K(I=>!I),"aria-label":d(q?"carousel.resumeAutoplay":"carousel.pauseAutoplay"),"aria-pressed":q,children:q?x.jsx(qn,{"aria-hidden":!0}):x.jsx(Vn,{"aria-hidden":!0})}),f.map((I,D)=>{const R=D===g;return x.jsx("button",{type:"button",className:`${H.dot} ${R?H.dotActive:""}`,onClick:()=>$(D),"aria-label":`${d("carousel.goToImage")} ${D+1}`,"aria-current":R||void 0},`dot-${D}`)})]})]})]})};N.displayName="Carousel";function zo(e){return`
.${e.carouselContainer} {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-color: var(--ds-color-neutral-background-default, #fff);
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  border-radius: var(--ds-border-radius-md, 4px);
  box-sizing: border-box;
  max-width: 100%;
}
.${e.viewport} {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.${e.slides} {
  display: flex;
  height: 100%;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.${e.slide} {
  position: relative;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.${e.slideInner} {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--ds-color-neutral-surface-tinted, #f5f5f5);
  overflow: hidden;
}
.${e.loaderOverlay} {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 2;
}
.${e.image} {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}
.${e.image}.${e.loaded} {
  opacity: 1;
}
.${e.loading} {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-size-2, 8px);
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-2, 14px);
}
.${e.empty} {
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-2, 14px);
  text-align: center;
}
.${e.controls} {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}
.${e.arrows} {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--ds-size-4, 16px);
  box-sizing: border-box;
  pointer-events: auto;
}
.${e.dots} {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--ds-size-3, 12px);
  display: inline-flex;
  align-items: center;
  gap: var(--ds-size-2, 8px);
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: var(--ds-size-1, 4px) var(--ds-size-2, 8px);
  border-radius: 999px;
}
.${e.dot} {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-subtle, #d6d6d6);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.${e.playPause} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ds-size-6, 24px);
  height: var(--ds-size-6, 24px);
  border-radius: 999px;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-subtle, #d6d6d6);
  background-color: rgba(255, 255, 255, 0.85);
  /* Pinned to match the hardcoded pill — see styles.module.css. */
  color: #1e1e1e;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.${e.dotActive} {
  background-color: var(--ds-color-primary-color-red-base-default, #D52B1E);
  border-color: var(--ds-color-primary-color-red-base-default, #D52B1E);
  transform: scale(1.1);
}
@media (max-width: 640px) {
  .${e.carouselContainer} {
    height: auto;
    min-height: 150px;
    aspect-ratio: 16 / 9;
  }
  .${e.viewport} {
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .${e.slides} {
    height: auto;
    min-height: 150px;
  }
  .${e.slide} {
    height: auto;
    min-height: 150px;
  }
  .${e.slideInner} {
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .${e.arrows} {
    padding: 0 var(--ds-size-2, 8px);
  }
  .${e.dots} {
    bottom: var(--ds-size-2, 8px);
    gap: var(--ds-size-1, 4px);
  }
  .${e.dot} {
    width: 10px;
    height: 10px;
  }
}
@media (max-width: 400px) {
  .${e.carouselContainer} {
    min-height: 120px;
  }
  .${e.arrows} {
    padding: 0 var(--ds-size-1, 4px);
  }
  .${e.arrows} button {
    transform: scale(0.85);
  }
}
`}try{N.displayName="Carousel",N.__docgenInfo={description:`Carousel-komponent for å vise en bildeserie.
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const qo="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23FAE4E2'/%3e%3c!--%20corner%20shape%20--%3e%3cpath%20d='M450%20137H750V437H150V287H450V137Z'%20fill='%23D52B1E'/%3e%3crect%20x='150'%20y='487'%20width='600'%20height='50'%20fill='%23EEABA6'/%3e%3crect%20x='850'%20y='137'%20width='200'%20height='200'%20fill='%23F7F3EF'/%3e%3crect%20x='850'%20y='387'%20width='200'%20height='150'%20fill='%2357110C'/%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23F7F3EF'/%3e%3c!--%20gapped%20cross%20--%3e%3crect%20x='500'%20y='87'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='500'%20y='387'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='290'%20y='237'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='710'%20y='237'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='80'%20y='87'%20width='120'%20height='500'%20fill='%23CDE4CA'/%3e%3crect%20x='1000'%20y='87'%20width='120'%20height='500'%20fill='%23FAE4E2'/%3e%3c/svg%3e",Go="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%2357110C'/%3e%3c!--%20heart:%20two%20squares%20+%20notch%20block%20--%3e%3crect%20x='400'%20y='140'%20width='200'%20height='200'%20fill='%23EEABA6'/%3e%3crect%20x='600'%20y='140'%20width='200'%20height='200'%20fill='%23EEABA6'/%3e%3cpath%20d='M400%20340H800V440H700V540H500V440H400V340Z'%20fill='%23EEABA6'/%3e%3crect%20x='120'%20y='140'%20width='180'%20height='400'%20fill='%23B42419'/%3e%3crect%20x='900'%20y='140'%20width='180'%20height='400'%20fill='%23F6D2CF'/%3e%3c/svg%3e",{expect:S,within:le,userEvent:se,waitFor:z}=__STORYBOOK_MODULE_TEST__,Uo={title:"Components/Carousel",component:N,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral","danger"],description:"Color token"}}},Te={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:e=>x.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:x.jsx(N,{...e})})},Ie={args:{...Te.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:e=>x.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:x.jsx(N,{...e})})},Ko="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",Wo=["jpg","jpeg","png"],Xo={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},gt=e=>e.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,t=>t.toUpperCase());function mt(e,t,n){const o=Xo[t];return o?`${e}/${o.path}/${n}`:`${e}/images/spaces/${t}/${n}`}function Qo(){const e=new Map,t=new Map;return function(o){if(e.has(o))return Promise.resolve(e.get(o));if(t.has(o))return t.get(o);const s=new Promise(a=>{const r=new Image;r.crossOrigin="anonymous";const l=u=>{e.set(o,u),t.delete(o),a(u)},i=window.setTimeout(()=>{r.src="",l(!1)},5e3);r.onload=()=>{window.clearTimeout(i),l(!0)},r.onerror=()=>{window.clearTimeout(i),l(!1)},r.src=o});return t.set(o,s),s}}const ht=Qo();async function Jo(e,t){const n=[];for(let s=1;s<=6;s++){const a=s.toString().padStart(2,"0");let r=!1;for(const l of Wo){const i=`${t}_${a}.${l}`,u=mt(e,t,i);if(!r&&await ht(u)){n.push({src:u,alt:gt(i)}),r=!0;break}const m=`${t.toLowerCase()}_${a}.${l}`,d=mt(e,t,m);if(!r&&await ht(d)){n.push({src:d,alt:gt(m)}),r=!0;break}}}return n}const Ce={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:e=>x.jsx(Yo,{...e})};function Yo(e){const[t,n]=Ue.useState(null),o="Konferanselokaler",s=Ko;return Ue.useEffect(()=>{let a=!1;return(async()=>{const r=await Jo(s,o);a||n(r)})(),()=>{a=!0}},[s,o]),x.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:t===null?x.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[x.jsx(En,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):x.jsx(N,{...e,images:t,slidesPerView:1})})}const _e=[{src:qo,alt:"Test bilde 1"},{src:Vo,alt:"Test bilde 2"},{src:Go,alt:"Test bilde 3"}],pe=_e,me={name:"Test: Arrow Navigation",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await z(()=>{S(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i}),s=t.getAllByRole("button",{name:/gå til bilde/i});S(s.length).toBe(3),S(s[0]).toHaveAttribute("aria-current","true"),await se.click(n),await z(()=>{S(s[1]).toHaveAttribute("aria-current","true")}),await se.click(n),await z(()=>{S(s[2]).toHaveAttribute("aria-current","true")}),await se.click(o),await z(()=>{S(s[1]).toHaveAttribute("aria-current","true")})}},he={name:"Test: Dot Navigation",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await z(()=>{S(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.getAllByRole("button",{name:/gå til bilde/i});S(n[0]).toHaveAttribute("aria-current","true"),await se.click(n[2]),await z(()=>{S(n[2]).toHaveAttribute("aria-current","true")}),await se.click(n[0]),await z(()=>{S(n[0]).toHaveAttribute("aria-current","true")})}},ye={name:"Test: Single Image (Disabled Arrows)",args:{images:[pe[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await z(()=>{S(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i});S(n).toBeDisabled(),S(o).toBeDisabled();const s=t.queryAllByRole("button",{name:/gå til bilde/i});S(s.length).toBe(0)}},be={name:"Test: Hidden Arrows",args:{images:pe,showArrows:!1,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await z(()=>{S(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.queryByRole("button",{name:/neste/i}),o=t.queryByRole("button",{name:/forrige/i});S(n).not.toBeInTheDocument(),S(o).not.toBeInTheDocument();const s=t.getAllByRole("button",{name:/gå til bilde/i});S(s.length).toBe(3)}},we={name:"Test: Hidden Dots",args:{images:pe,showArrows:!0,showDots:!1,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await z(()=>{S(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.queryAllByRole("button",{name:/gå til bilde/i});S(n.length).toBe(0);const o=t.getByRole("button",{name:/neste/i});S(o).toBeInTheDocument()}},ve={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{S(e.textContent).toContain("Ingen bilder")}},xe={name:"Test: Image Alt Text",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{await z(()=>{const n=e.querySelectorAll("img");S(n.length).toBeGreaterThan(0)}),e.querySelectorAll("img").forEach(n=>{S(n).toHaveAttribute("alt"),S(n.getAttribute("alt")).not.toBe("")})}},Se={name:"Test: Dots Accessibility",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await z(()=>{S(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.getByRole("group",{name:/bildeposisjon/i});S(n).toBeInTheDocument();const o=t.getAllByRole("button",{name:/gå til bilde/i});o.forEach(a=>{S(a).toHaveAttribute("aria-label")});const s=o.filter(a=>a.getAttribute("aria-current")==="true");S(s.length).toBe(1)}},Ae={name:"Test: Re-render Keeps Slides Visible",render:()=>{const[,e]=Ue.useState(0);return x.jsxs("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:[x.jsx(N,{images:[{src:_e[0].src,alt:"Lokalt bilde 1"},{src:_e[1].src,alt:"Lokalt bilde 2"}],showArrows:!0,showDots:!0}),x.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"Tving re-render"})]})},play:async({canvasElement:e})=>{const t=le(e),n=await z(()=>{const s=e.querySelector("img");return S(s).not.toBeNull(),S(s.complete).toBe(!0),s});await z(()=>{S(getComputedStyle(n).opacity).toBe("1")});const o=t.getByRole("button",{name:"Tving re-render"});await se.click(o),await se.click(o),S(getComputedStyle(n).opacity).toBe("1"),S(t.queryByLabelText(/laster bilde/i)).not.toBeInTheDocument()}},Be={name:"Test: Autoplay Pause Control",args:{images:_e,showArrows:!1,showDots:!0,autoPlay:!0,autoDelay:.4},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{const t=le(e),n=await t.findByRole("button",{name:/pause automatisk/i});S(n).toHaveAttribute("aria-pressed","false"),await se.click(n),S(t.getByRole("button",{name:/start automatisk/i})).toHaveAttribute("aria-pressed","true");const o=t.getAllByRole("button",{name:/gå til bilde/i});await new Promise(a=>setTimeout(a,1e3)),S(o[0]).toHaveAttribute("aria-current","true");const s=t.getByRole("button",{name:/start automatisk/i});await se.click(s),s.blur(),await se.unhover(s),await z(()=>{S(o[1]).toHaveAttribute("aria-current","true")},{timeout:3e3})}},je={name:"Test: Play/Pause Control Stays Legible In Dark Mode",args:{images:_e,showArrows:!1,showDots:!0,autoPlay:!0,autoDelay:.4},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(N,{...e})}),play:async({canvasElement:e})=>{document.documentElement.setAttribute("data-color-scheme","dark");try{const t=await z(()=>{const i=e.querySelector('[class*="playPause"]');return S(i,"play/pause control not found").not.toBeNull(),i}),n=i=>i.match(/[\d.]+/g).slice(0,3).map(Number),o=([i,u,m])=>{const d=p=>{const b=p/255;return b<=.03928?b/12.92:((b+.055)/1.055)**2.4};return .2126*d(i)+.7152*d(u)+.0722*d(m)},s=getComputedStyle(t),[a,r]=[o(n(s.color)),o(n(s.backgroundColor))].sort((i,u)=>u-i),l=(a+.05)/(r+.05);S(l,`dark: icon ${s.color} on pill ${s.backgroundColor} is ${l.toFixed(2)}:1`).toBeGreaterThan(3)}finally{document.documentElement.removeAttribute("data-color-scheme")}}};var yt,bt,wt;Te.parameters={...Te.parameters,docs:{...(yt=Te.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(wt=(bt=Te.parameters)==null?void 0:bt.docs)==null?void 0:wt.source}}};var vt,xt,St;Ie.parameters={...Ie.parameters,docs:{...(vt=Ie.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(St=(xt=Ie.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var At,Bt,Tt;Ce.parameters={...Ce.parameters,docs:{...(At=Ce.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(Tt=(Bt=Ce.parameters)==null?void 0:Bt.docs)==null?void 0:Tt.source}}};var Et,kt,Dt,It,Ct;me.parameters={...me.parameters,docs:{...(Et=me.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
    const dots = canvas.getAllByRole('button', {
      name: /gå til bilde/i
    });
    expect(dots.length).toBe(3);

    // Initially, first dot should be selected
    expect(dots[0]).toHaveAttribute('aria-current', 'true');

    // Click next button
    await userEvent.click(nextButton);

    // Wait for the carousel to update
    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-current', 'true');
    });

    // Click next again
    await userEvent.click(nextButton);
    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-current', 'true');
    });

    // Click previous to go back
    await userEvent.click(prevButton);
    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-current', 'true');
    });
  }
}`,...(Dt=(kt=me.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(Ct=(It=me.parameters)==null?void 0:It.docs)==null?void 0:Ct.description}}};var jt,Pt,Ft,Rt,Lt;he.parameters={...he.parameters,docs:{...(jt=he.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
      expect(canvas.getAllByRole('button', {
        name: /gå til bilde/i
      }).length).toBe(3);
    });
    const dots = canvas.getAllByRole('button', {
      name: /gå til bilde/i
    });

    // Initially, first dot should be selected
    expect(dots[0]).toHaveAttribute('aria-current', 'true');

    // Click on the third dot
    await userEvent.click(dots[2]);
    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-current', 'true');
    });

    // Click on the first dot to go back
    await userEvent.click(dots[0]);
    await waitFor(() => {
      expect(dots[0]).toHaveAttribute('aria-current', 'true');
    });
  }
}`,...(Ft=(Pt=he.parameters)==null?void 0:Pt.docs)==null?void 0:Ft.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...(Lt=(Rt=he.parameters)==null?void 0:Rt.docs)==null?void 0:Lt.description}}};var _t,$t,Mt,Ht,Nt;ye.parameters={...ye.parameters,docs:{...(_t=ye.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
    const dots = canvas.queryAllByRole('button', {
      name: /gå til bilde/i
    });
    expect(dots.length).toBe(0);
  }
}`,...(Mt=($t=ye.parameters)==null?void 0:$t.docs)==null?void 0:Mt.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Nt=(Ht=ye.parameters)==null?void 0:Ht.docs)==null?void 0:Nt.description}}};var Ot,zt,qt,Vt,Gt;be.parameters={...be.parameters,docs:{...(Ot=be.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
      expect(canvas.getAllByRole('button', {
        name: /gå til bilde/i
      }).length).toBe(3);
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
    const dots = canvas.getAllByRole('button', {
      name: /gå til bilde/i
    });
    expect(dots.length).toBe(3);
  }
}`,...(qt=(zt=be.parameters)==null?void 0:zt.docs)==null?void 0:qt.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...(Gt=(Vt=be.parameters)==null?void 0:Vt.docs)==null?void 0:Gt.description}}};var Ut,Kt,Wt,Xt,Qt;we.parameters={...we.parameters,docs:{...(Ut=we.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
    const dots = canvas.queryAllByRole('button', {
      name: /gå til bilde/i
    });
    expect(dots.length).toBe(0);

    // Arrows should still work
    const nextButton = canvas.getByRole('button', {
      name: /neste/i
    });
    expect(nextButton).toBeInTheDocument();
  }
}`,...(Wt=(Kt=we.parameters)==null?void 0:Kt.docs)==null?void 0:Wt.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(Qt=(Xt=we.parameters)==null?void 0:Xt.docs)==null?void 0:Qt.description}}};var Jt,Yt,Zt,en,tn;ve.parameters={...ve.parameters,docs:{...(Jt=ve.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Zt=(Yt=ve.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source},description:{story:"Tests that empty state is handled gracefully.",...(tn=(en=ve.parameters)==null?void 0:en.docs)==null?void 0:tn.description}}};var nn,on,sn,rn,an;xe.parameters={...xe.parameters,docs:{...(nn=xe.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
    // Wait for <img> elements to be rendered (use querySelectorAll to
    // avoid picking up SVG icons that also match role="img")
    await waitFor(() => {
      const imgs = canvasElement.querySelectorAll('img');
      expect(imgs.length).toBeGreaterThan(0);
    });

    // Check that every <img> tag has a non-empty alt attribute
    const imgs = canvasElement.querySelectorAll('img');
    imgs.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  }
}`,...(sn=(on=xe.parameters)==null?void 0:on.docs)==null?void 0:sn.source},description:{story:"Tests that images have proper alt text for accessibility.",...(an=(rn=xe.parameters)==null?void 0:rn.docs)==null?void 0:an.description}}};var cn,ln,un,dn,fn;Se.parameters={...Se.parameters,docs:{...(cn=Se.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
      expect(canvas.getAllByRole('button', {
        name: /gå til bilde/i
      }).length).toBe(3);
    });

    // Dots live in a labelled group (plain buttons, not a fake tabs pattern)
    const group = canvas.getByRole('group', {
      name: /bildeposisjon/i
    });
    expect(group).toBeInTheDocument();

    // Each dot is labelled; exactly one is marked current
    const dots = canvas.getAllByRole('button', {
      name: /gå til bilde/i
    });
    dots.forEach(dot => {
      expect(dot).toHaveAttribute('aria-label');
    });
    const current = dots.filter(dot => dot.getAttribute('aria-current') === 'true');
    expect(current.length).toBe(1);
  }
}`,...(un=(ln=Se.parameters)==null?void 0:ln.docs)==null?void 0:un.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(fn=(dn=Se.parameters)==null?void 0:dn.docs)==null?void 0:fn.description}}};var pn,gn,mn,hn,yn;Ae.parameters={...Ae.parameters,docs:{...(pn=Ae.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  name: 'Test: Re-render Keeps Slides Visible',
  render: () => {
    const [, setTick] = React.useState(0);
    return <div style={{
      width: '600px',
      height: '400px',
      margin: '0 auto'
    }}>
        {/* Inline literal: new identity on every render, same content */}
        <Carousel images={[{
        src: localImages[0].src,
        alt: 'Lokalt bilde 1'
      }, {
        src: localImages[1].src,
        alt: 'Lokalt bilde 2'
      }]} showArrows showDots />
        <button type="button" onClick={() => setTick(n => n + 1)}>
          Tving re-render
        </button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait until the first image has actually loaded (spinner gone, img visible)
    const firstImage = await waitFor(() => {
      const img = canvasElement.querySelector('img');
      expect(img).not.toBeNull();
      expect(img!.complete).toBe(true);
      return img!;
    });
    await waitFor(() => {
      expect(getComputedStyle(firstImage).opacity).toBe('1');
    });

    // Force two parent re-renders with fresh array identity
    const rerenderButton = canvas.getByRole('button', {
      name: 'Tving re-render'
    });
    await userEvent.click(rerenderButton);
    await userEvent.click(rerenderButton);

    // The slide must stay visible — no spinner, no opacity reset
    expect(getComputedStyle(firstImage).opacity).toBe('1');
    expect(canvas.queryByLabelText(/laster bilde/i)).not.toBeInTheDocument();
  }
}`,...(mn=(gn=Ae.parameters)==null?void 0:gn.docs)==null?void 0:mn.source},description:{story:`A parent re-render passing a new array literal with identical content must
not blank already-loaded slides (loaded state survives identity changes).`,...(yn=(hn=Ae.parameters)==null?void 0:hn.docs)==null?void 0:yn.description}}};var bn,wn,vn,xn,Sn;Be.parameters={...Be.parameters,docs:{...(bn=Be.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  name: 'Test: Autoplay Pause Control',
  args: {
    images: localImages,
    showArrows: false,
    showDots: true,
    autoPlay: true,
    autoDelay: 0.4
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
    const pauseButton = await canvas.findByRole('button', {
      name: /pause automatisk/i
    });
    expect(pauseButton).toHaveAttribute('aria-pressed', 'false');

    // Pause immediately, then verify the carousel stays on slide 1
    await userEvent.click(pauseButton);
    expect(canvas.getByRole('button', {
      name: /start automatisk/i
    })).toHaveAttribute('aria-pressed', 'true');
    const dots = canvas.getAllByRole('button', {
      name: /gå til bilde/i
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(dots[0]).toHaveAttribute('aria-current', 'true');

    // Resume: rotation advances within a couple of delays.
    // Move the pointer away first — hover on the carousel also pauses it.
    const resumeButton = canvas.getByRole('button', {
      name: /start automatisk/i
    });
    await userEvent.click(resumeButton);
    // Focus and hover on the control also pause — release both before waiting.
    resumeButton.blur();
    await userEvent.unhover(resumeButton);
    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-current', 'true');
    }, {
      timeout: 3000
    });
  }
}`,...(vn=(wn=Be.parameters)==null?void 0:wn.docs)==null?void 0:vn.source},description:{story:`WCAG 2.2.2: autoplay exposes a pause control; pausing stops rotation and
resuming starts it again.`,...(Sn=(xn=Be.parameters)==null?void 0:xn.docs)==null?void 0:Sn.description}}};var An,Bn,Tn;je.parameters={...je.parameters,docs:{...(An=je.parameters)==null?void 0:An.docs,source:{originalSource:`{
  name: 'Test: Play/Pause Control Stays Legible In Dark Mode',
  args: {
    images: localImages,
    showArrows: false,
    showDots: true,
    autoPlay: true,
    autoDelay: 0.4
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
    // Set the scheme here rather than in a decorator: themeDecorator writes
    // data-color-scheme during render and would overwrite it. play runs after.
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    try {
      const control = await waitFor(() => {
        const el = canvasElement.querySelector('[class*="playPause"]');
        expect(el, 'play/pause control not found').not.toBeNull();
        return el as HTMLElement;
      });
      const parse = (colour: string) => colour.match(/[\\d.]+/g)!.slice(0, 3).map(Number);
      const luminance = ([r, g, b]: number[]) => {
        const f = (c: number) => {
          const v = c / 255;
          return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        };
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
      };
      const style = getComputedStyle(control);
      const [hi, lo] = [luminance(parse(style.color)), luminance(parse(style.backgroundColor))].sort((a, b) => b - a);
      const contrast = (hi + 0.05) / (lo + 0.05);

      // The pill is a hardcoded translucent white because it overlays the
      // slides, so the icon must be pinned dark to match. On the neutral text
      // token it went light in dark mode: 1.18:1.
      expect(contrast, \`dark: icon \${style.color} on pill \${style.backgroundColor} is \${contrast.toFixed(2)}:1\`).toBeGreaterThan(3);
    } finally {
      document.documentElement.removeAttribute('data-color-scheme');
    }
  }
}`,...(Tn=(Bn=je.parameters)==null?void 0:Bn.docs)==null?void 0:Tn.source}}};const Zo=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility","TestRerenderKeepsSlides","TestAutoplayPauseControl","TestControlContrastInDarkMode"],rs=Object.freeze(Object.defineProperty({__proto__:null,Default:Te,MultipleSlides:Ie,TestArrowNavigation:me,TestAutoplayPauseControl:Be,TestControlContrastInDarkMode:je,TestDotNavigation:he,TestDotsAccessibility:Se,TestEmptyState:ve,TestHiddenArrows:be,TestHiddenDots:we,TestImageAltText:xe,TestRerenderKeepsSlides:Ae,TestSingleImageDisabledArrows:ye,WithSupabase:Ce,__namedExportsOrder:Zo,default:Uo},Symbol.toStringTag,{value:"Module"}));export{rs as C};
