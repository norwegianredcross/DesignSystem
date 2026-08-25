import{r as R,j as x,R as Ge}from"./iframe-BPCLwZzO.js";import{B as ct}from"./index-CfBO2f0l.js";import{S as Sn}from"./index-Sqw4Qvs5.js";import{u as _n}from"./LanguageContext-e0uk2G5Q.js";import{S as $n,a as Hn,b as On,c as zn}from"./Play-C634tedM.js";function Mn(e){return Object.prototype.toString.call(e)==="[object Object]"}function lt(e){return Mn(e)||Array.isArray(e)}function Nn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function We(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const r=JSON.stringify(Object.keys(e.breakpoints||{})),a=JSON.stringify(Object.keys(t.breakpoints||{}));return r!==a?!1:n.every(s=>{const l=e[s],i=t[s];return typeof l=="function"?`${l}`==`${i}`:!lt(l)||!lt(i)?l===i:We(l,i)})}function ut(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function Vn(e,t){if(e.length!==t.length)return!1;const n=ut(e),o=ut(t);return n.every((r,a)=>{const s=o[a];return We(r,s)})}function Xe(e){return typeof e=="number"}function Ue(e){return typeof e=="string"}function Oe(e){return typeof e=="boolean"}function dt(e){return Object.prototype.toString.call(e)==="[object Object]"}function _(e){return Math.abs(e)}function Qe(e){return Math.sign(e)}function je(e,t){return _(e-t)}function qn(e,t){if(e===0||t===0||_(e)<=_(t))return 0;const n=je(_(e),_(t));return _(n/e)}function Gn(e){return Math.round(e*100)/100}function Pe(e){return Re(e).map(Number)}function ee(e){return e[Le(e)]}function Le(e){return Math.max(0,e.length-1)}function Je(e,t){return t===Le(e)}function ft(e,t=0){return Array.from(Array(e),(n,o)=>t+o)}function Re(e){return Object.keys(e)}function An(e,t){return[e,t].reduce((n,o)=>(Re(o).forEach(r=>{const a=n[r],s=o[r],l=dt(a)&&dt(s);n[r]=l?An(a,s):s}),n),{})}function Ke(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Un(e,t){const n={start:o,center:r,end:a};function o(){return 0}function r(i){return a(i)/2}function a(i){return t-i}function s(i,u){return Ue(e)?n[e](i):e(t,i,u)}return{measure:s}}function Fe(){let e=[];function t(r,a,s,l={passive:!0}){let i;if("addEventListener"in r)r.addEventListener(a,s,l),i=()=>r.removeEventListener(a,s,l);else{const u=r;u.addListener(s),i=()=>u.removeListener(s)}return e.push(i),o}function n(){e=e.filter(r=>r())}const o={add:t,clear:n};return o}function Kn(e,t,n,o){const r=Fe(),a=1e3/60;let s=null,l=0,i=0;function u(){r.add(e,"visibilitychange",()=>{e.hidden&&c()})}function m(){w(),r.clear()}function d(h){if(!i)return;s||(s=h,n(),n());const f=h-s;for(s=h,l+=f;l>=a;)n(),l-=a;const y=l/a;o(y),i&&(i=t.requestAnimationFrame(d))}function p(){i||(i=t.requestAnimationFrame(d))}function w(){t.cancelAnimationFrame(i),s=null,l=0,i=0}function c(){s=null,l=0}return{init:u,destroy:m,start:p,stop:w,update:n,render:o}}function Wn(e,t){const n=t==="rtl",o=e==="y",r=o?"y":"x",a=o?"x":"y",s=!o&&n?-1:1,l=m(),i=d();function u(c){const{height:g,width:h}=c;return o?g:h}function m(){return o?"top":n?"right":"left"}function d(){return o?"bottom":n?"left":"right"}function p(c){return c*s}return{scroll:r,cross:a,startEdge:l,endEdge:i,measureSize:u,direction:p}}function fe(e=0,t=0){const n=_(e-t);function o(u){return u<e}function r(u){return u>t}function a(u){return o(u)||r(u)}function s(u){return a(u)?o(u)?e:t:u}function l(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:s,reachedAny:a,reachedMax:r,reachedMin:o,removeOffset:l}}function Bn(e,t,n){const{constrain:o}=fe(0,e),r=e+1;let a=s(t);function s(p){return n?_((r+p)%r):o(p)}function l(){return a}function i(p){return a=s(p),d}function u(p){return m().set(l()+p)}function m(){return Bn(e,l(),n)}const d={get:l,set:i,add:u,clone:m};return d}function Xn(e,t,n,o,r,a,s,l,i,u,m,d,p,w,c,g,h,f,y){const{cross:v,direction:E}=e,C=["INPUT","SELECT","TEXTAREA"],I={passive:!1},S=Fe(),B=Fe(),T=fe(50,225).constrain(w.measure(20)),$={mouse:300,touch:400},j={mouse:500,touch:600},M=c?43:25;let N=!1,K=0,W=0,te=!1,ne=!1,X=!1,Q=!1;function ie(b){if(!y)return;function P(q){(Oe(y)||y(b,q))&&Ee(q)}const H=t;S.add(H,"dragstart",q=>q.preventDefault(),I).add(H,"touchmove",()=>{},I).add(H,"touchend",()=>{}).add(H,"touchstart",P).add(H,"mousedown",P).add(H,"touchcancel",V).add(H,"contextmenu",V).add(H,"click",re,!0)}function J(){S.clear(),B.clear()}function Z(){const b=Q?n:t;B.add(b,"touchmove",U,I).add(b,"touchend",V).add(b,"mousemove",U,I).add(b,"mouseup",V)}function k(b){const P=b.nodeName||"";return C.includes(P)}function D(){return(c?j:$)[Q?"mouse":"touch"]}function F(b,P){const H=d.add(Qe(b)*-1),q=m.byDistance(b,!c).distance;return c||_(b)<T?q:h&&P?q*.5:m.byIndex(H.get(),0).distance}function Ee(b){const P=Ke(b,o);Q=P,X=c&&P&&!b.buttons&&N,N=je(r.get(),s.get())>=2,!(P&&b.button!==0)&&(k(b.target)||(te=!0,a.pointerDown(b),u.useFriction(0).useDuration(0),r.set(s),Z(),K=a.readPoint(b),W=a.readPoint(b,v),p.emit("pointerDown")))}function U(b){if(!Ke(b,o)&&b.touches.length>=2)return V(b);const H=a.readPoint(b),q=a.readPoint(b,v),oe=je(H,K),ae=je(q,W);if(!ne&&!Q&&(!b.cancelable||(ne=oe>ae,!ne)))return V(b);const ue=a.pointerMove(b);oe>g&&(X=!0),u.useFriction(.3).useDuration(.75),l.start(),r.add(E(ue)),b.preventDefault()}function V(b){const H=m.byDistance(0,!1).index!==d.get(),q=a.pointerUp(b)*D(),oe=F(E(q),H),ae=qn(q,oe),ue=M-10*ae,ce=f+ae/50;ne=!1,te=!1,B.clear(),u.useDuration(ue).useFriction(ce),i.distance(oe,!c),Q=!1,p.emit("pointerUp")}function re(b){X&&(b.stopPropagation(),b.preventDefault(),X=!1)}function Y(){return te}return{init:ie,destroy:J,pointerDown:Y}}function Qn(e,t){let o,r;function a(d){return d.timeStamp}function s(d,p){const c=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(Ke(d,t)?d:d.touches[0])[c]}function l(d){return o=d,r=d,s(d)}function i(d){const p=s(d)-s(r),w=a(d)-a(o)>170;return r=d,w&&(o=d),p}function u(d){if(!o||!r)return 0;const p=s(r)-s(o),w=a(d)-a(o),c=a(d)-a(r)>170,g=p/w;return w&&!c&&_(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:u,readPoint:s}}function Jn(){function e(n){const{offsetTop:o,offsetLeft:r,offsetWidth:a,offsetHeight:s}=n;return{top:o,right:r+a,bottom:o+s,left:r,width:a,height:s}}return{measure:e}}function Yn(e){function t(o){return e*(o/100)}return{measure:t}}function Zn(e,t,n,o,r,a,s){const l=[e].concat(o);let i,u,m=[],d=!1;function p(h){return r.measureSize(s.measure(h))}function w(h){if(!a)return;u=p(e),m=o.map(p);function f(y){for(const v of y){if(d)return;const E=v.target===e,C=o.indexOf(v.target),I=E?u:m[C],S=p(E?e:o[C]);if(_(S-I)>=.5){h.reInit(),t.emit("resize");break}}}i=new ResizeObserver(y=>{(Oe(a)||a(h,y))&&f(y)}),n.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function c(){d=!0,i&&i.disconnect()}return{init:w,destroy:c}}function eo(e,t,n,o,r,a){let s=0,l=0,i=r,u=a,m=e.get(),d=0;function p(){const I=o.get()-e.get(),S=!i;let B=0;return S?(s=0,n.set(o),e.set(o),B=I):(n.set(e),s+=I/i,s*=u,m+=s,e.add(s),B=m-d),l=Qe(B),d=m,C}function w(){const I=o.get()-t.get();return _(I)<.001}function c(){return i}function g(){return l}function h(){return s}function f(){return v(r)}function y(){return E(a)}function v(I){return i=I,C}function E(I){return u=I,C}const C={direction:g,duration:c,velocity:h,seek:p,settled:w,useBaseFriction:y,useBaseDuration:f,useFriction:E,useDuration:v};return C}function to(e,t,n,o,r){const a=r.measure(10),s=r.measure(50),l=fe(.1,.99);let i=!1;function u(){return!(i||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function m(w){if(!u())return;const c=e.reachedMin(t.get())?"min":"max",g=_(e[c]-t.get()),h=n.get()-t.get(),f=l.constrain(g/s);n.subtract(h*f),!w&&_(h)<a&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function d(w){i=!w}return{shouldConstrain:u,constrain:m,toggleActive:d}}function no(e,t,n,o,r){const a=fe(-t+e,0),s=d(),l=m(),i=p();function u(c,g){return je(c,g)<=1}function m(){const c=s[0],g=ee(s),h=s.lastIndexOf(c),f=s.indexOf(g)+1;return fe(h,f)}function d(){return n.map((c,g)=>{const{min:h,max:f}=a,y=a.constrain(c),v=!g,E=Je(n,g);return v?f:E||u(h,y)?h:u(f,y)?f:y}).map(c=>parseFloat(c.toFixed(3)))}function p(){if(t<=e+r)return[a.max];if(o==="keepSnaps")return s;const{min:c,max:g}=l;return s.slice(c,g)}return{snapsContained:i,scrollContainLimit:l}}function oo(e,t,n){const o=t[0],r=n?o-e:ee(t);return{limit:fe(r,o)}}function so(e,t,n,o){const a=t.min+.1,s=t.max+.1,{reachedMin:l,reachedMax:i}=fe(a,s);function u(p){return p===1?i(n.get()):p===-1?l(n.get()):!1}function m(p){if(!u(p))return;const w=e*(p*-1);o.forEach(c=>c.add(w))}return{loop:m}}function ro(e){const{max:t,length:n}=e;function o(a){const s=a-t;return n?s/-n:0}return{get:o}}function ao(e,t,n,o,r){const{startEdge:a,endEdge:s}=e,{groupSlides:l}=r,i=d().map(t.measure),u=p(),m=w();function d(){return l(o).map(g=>ee(g)[s]-g[0][a]).map(_)}function p(){return o.map(g=>n[a]-g[a]).map(g=>-_(g))}function w(){return l(u).map(g=>g[0]).map((g,h)=>g+i[h])}return{snaps:u,snapsAligned:m}}function io(e,t,n,o,r,a){const{groupSlides:s}=r,{min:l,max:i}=o,u=m();function m(){const p=s(a),w=!e||t==="keepSnaps";return n.length===1?[a]:w?p:p.slice(l,i).map((c,g,h)=>{const f=!g,y=Je(h,g);if(f){const v=ee(h[0])+1;return ft(v)}if(y){const v=Le(a)-ee(h)[0]+1;return ft(v,ee(h)[0])}return c})}return{slideRegistry:u}}function co(e,t,n,o,r){const{reachedAny:a,removeOffset:s,constrain:l}=o;function i(c){return c.concat().sort((g,h)=>_(g)-_(h))[0]}function u(c){const g=e?s(c):l(c),h=t.map((y,v)=>({diff:m(y-g,0),index:v})).sort((y,v)=>_(y.diff)-_(v.diff)),{index:f}=h[0];return{index:f,distance:g}}function m(c,g){const h=[c,c+n,c-n];if(!e)return c;if(!g)return i(h);const f=h.filter(y=>Qe(y)===g);return f.length?i(f):ee(h)-n}function d(c,g){const h=t[c]-r.get(),f=m(h,g);return{index:c,distance:f}}function p(c,g){const h=r.get()+c,{index:f,distance:y}=u(h),v=!e&&a(h);if(!g||v)return{index:f,distance:c};const E=t[f]-y,C=c+m(E,0);return{index:f,distance:C}}return{byDistance:p,byIndex:d,shortcut:m}}function lo(e,t,n,o,r,a,s){function l(d){const p=d.distance,w=d.index!==t.get();a.add(p),p&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),w&&(n.set(t.get()),t.set(d.index),s.emit("select"))}function i(d,p){const w=r.byDistance(d,p);l(w)}function u(d,p){const w=t.clone().set(d),c=r.byIndex(w.get(),p);l(c)}return{distance:i,index:u}}function uo(e,t,n,o,r,a,s,l){const i={passive:!0,capture:!0};let u=0;function m(w){if(!l)return;function c(g){if(new Date().getTime()-u>10)return;s.emit("slideFocusStart"),e.scrollLeft=0;const y=n.findIndex(v=>v.includes(g));Xe(y)&&(r.useDuration(0),o.index(y,0),s.emit("slideFocus"))}a.add(document,"keydown",d,!1),t.forEach((g,h)=>{a.add(g,"focus",f=>{(Oe(l)||l(w,f))&&c(h)},i)})}function d(w){w.code==="Tab"&&(u=new Date().getTime())}return{init:m}}function De(e){let t=e;function n(){return t}function o(i){t=s(i)}function r(i){t+=s(i)}function a(i){t-=s(i)}function s(i){return Xe(i)?i:i.get()}return{get:n,set:o,add:r,subtract:a}}function Tn(e,t){const n=e.scroll==="x"?s:l,o=t.style;let r=null,a=!1;function s(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(a)return;const w=Gn(e.direction(p));w!==r&&(o.transform=n(w),r=w)}function u(p){a=!p}function m(){a||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:m,to:i,toggleActive:u}}function fo(e,t,n,o,r,a,s,l,i){const m=Pe(r),d=Pe(r).reverse(),p=f().concat(y());function w(S,B){return S.reduce((T,$)=>T-r[$],B)}function c(S,B){return S.reduce((T,$)=>w(T,B)>0?T.concat([$]):T,[])}function g(S){return a.map((B,T)=>({start:B-o[T]+.5+S,end:B+t-.5+S}))}function h(S,B,T){const $=g(B);return S.map(j=>{const M=T?0:-n,N=T?n:0,K=T?"end":"start",W=$[j][K];return{index:j,loopPoint:W,slideLocation:De(-1),translate:Tn(e,i[j]),target:()=>l.get()>W?M:N}})}function f(){const S=s[0],B=c(d,S);return h(B,n,!1)}function y(){const S=t-s[0]-1,B=c(m,S);return h(B,-n,!0)}function v(){return p.every(({index:S})=>{const B=m.filter(T=>T!==S);return w(B,t)<=.1})}function E(){p.forEach(S=>{const{target:B,translate:T,slideLocation:$}=S,j=B();j!==$.get()&&(T.to(j),$.set(j))})}function C(){p.forEach(S=>S.translate.clear())}return{canLoop:v,clear:C,loop:E,loopPoints:p}}function po(e,t,n){let o,r=!1;function a(i){if(!n)return;function u(m){for(const d of m)if(d.type==="childList"){i.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(m=>{r||(Oe(n)||n(i,m))&&u(m)}),o.observe(e,{childList:!0})}function s(){o&&o.disconnect(),r=!0}return{init:a,destroy:s}}function go(e,t,n,o){const r={};let a=null,s=null,l,i=!1;function u(){l=new IntersectionObserver(c=>{i||(c.forEach(g=>{const h=t.indexOf(g.target);r[h]=g}),a=null,s=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(c=>l.observe(c))}function m(){l&&l.disconnect(),i=!0}function d(c){return Re(r).reduce((g,h)=>{const f=parseInt(h),{isIntersecting:y}=r[f];return(c&&y||!c&&!y)&&g.push(f),g},[])}function p(c=!0){if(c&&a)return a;if(!c&&s)return s;const g=d(c);return c&&(a=g),c||(s=g),g}return{init:u,destroy:m,get:p}}function mo(e,t,n,o,r,a){const{measureSize:s,startEdge:l,endEdge:i}=e,u=n[0]&&r,m=c(),d=g(),p=n.map(s),w=h();function c(){if(!u)return 0;const y=n[0];return _(t[l]-y[l])}function g(){if(!u)return 0;const y=a.getComputedStyle(ee(o));return parseFloat(y.getPropertyValue(`margin-${i}`))}function h(){return n.map((y,v,E)=>{const C=!v,I=Je(E,v);return C?p[v]+m:I?p[v]+d:E[v+1][l]-y[l]}).map(_)}return{slideSizes:p,slideSizesWithGaps:w,startGap:m,endGap:d}}function ho(e,t,n,o,r,a,s,l,i){const{startEdge:u,endEdge:m,direction:d}=e,p=Xe(n);function w(f,y){return Pe(f).filter(v=>v%y===0).map(v=>f.slice(v,v+y))}function c(f){return f.length?Pe(f).reduce((y,v,E)=>{const C=ee(y)||0,I=C===0,S=v===Le(f),B=r[u]-a[C][u],T=r[u]-a[v][m],$=!o&&I?d(s):0,j=!o&&S?d(l):0,M=_(T-j-(B+$));return E&&M>t+i&&y.push(v),S&&y.push(f.length),y},[]).map((y,v,E)=>{const C=Math.max(E[v-1]||0);return f.slice(C,y)}):[]}function g(f){return p?w(f,n):c(f)}return{groupSlides:g}}function yo(e,t,n,o,r,a,s){const{align:l,axis:i,direction:u,startIndex:m,loop:d,duration:p,dragFree:w,dragThreshold:c,inViewThreshold:g,slidesToScroll:h,skipSnaps:f,containScroll:y,watchResize:v,watchSlides:E,watchDrag:C,watchFocus:I}=a,S=2,B=Jn(),T=B.measure(t),$=n.map(B.measure),j=Wn(i,u),M=j.measureSize(T),N=Yn(M),K=Un(l,M),W=!d&&!!y,te=d||!!y,{slideSizes:ne,slideSizesWithGaps:X,startGap:Q,endGap:ie}=mo(j,T,$,n,te,r),J=ho(j,M,h,d,T,$,Q,ie,S),{snaps:Z,snapsAligned:k}=ao(j,K,T,$,J),D=-ee(Z)+ee(X),{snapsContained:F,scrollContainLimit:Ee}=no(M,D,k,y,S),U=W?F:k,{limit:V}=oo(D,U,d),re=Bn(Le(U),m,d),Y=re.clone(),L=Pe(n),b=({dragHandler:ge,scrollBody:Ve,scrollBounds:qe,options:{loop:_e}})=>{_e||qe.constrain(ge.pointerDown()),Ve.seek()},P=({scrollBody:ge,translate:Ve,location:qe,offsetLocation:_e,previousLocation:Dn,scrollLooper:kn,slideLooper:Cn,dragHandler:jn,animation:Pn,eventHandler:nt,scrollBounds:Rn,options:{loop:ot}},st)=>{const rt=ge.settled(),Fn=!Rn.shouldConstrain(),at=ot?rt:rt&&Fn,it=at&&!jn.pointerDown();it&&Pn.stop();const Ln=qe.get()*st+Dn.get()*(1-st);_e.set(Ln),ot&&(kn.loop(ge.direction()),Cn.loop()),Ve.to(_e.get()),it&&nt.emit("settle"),at||nt.emit("scroll")},H=Kn(o,r,()=>b(Ne),ge=>P(Ne,ge)),q=.68,oe=U[re.get()],ae=De(oe),ue=De(oe),ce=De(oe),de=De(oe),Ie=eo(ae,ce,ue,de,p,q),ze=co(d,U,D,V,de),Me=lo(H,re,Y,Ie,ze,de,s),Ze=ro(V),et=Fe(),En=go(t,n,s,g),{slideRegistry:tt}=io(W,y,U,Ee,J,L),In=uo(e,n,tt,Me,Ie,et,s,I),Ne={ownerDocument:o,ownerWindow:r,eventHandler:s,containerRect:T,slideRects:$,animation:H,axis:j,dragHandler:Xn(j,e,o,r,de,Qn(j,r),ae,H,Me,Ie,ze,re,s,N,w,c,f,q,C),eventStore:et,percentOfView:N,index:re,indexPrevious:Y,limit:V,location:ae,offsetLocation:ce,previousLocation:ue,options:a,resizeHandler:Zn(t,s,r,n,j,v,B),scrollBody:Ie,scrollBounds:to(V,ce,de,Ie,N),scrollLooper:so(D,V,ce,[ae,ce,ue,de]),scrollProgress:Ze,scrollSnapList:U.map(Ze.get),scrollSnaps:U,scrollTarget:ze,scrollTo:Me,slideLooper:fo(j,M,D,ne,X,Z,U,ce,n),slideFocus:In,slidesHandler:po(t,s,E),slidesInView:En,slideIndexes:L,slideRegistry:tt,slidesToScroll:J,target:de,translate:Tn(j,t)};return Ne}function bo(){let e={},t;function n(u){t=u}function o(u){return e[u]||[]}function r(u){return o(u).forEach(m=>m(t,u)),i}function a(u,m){return e[u]=o(u).concat([m]),i}function s(u,m){return e[u]=o(u).filter(d=>d!==m),i}function l(){e={}}const i={init:n,emit:r,off:s,on:a,clear:l};return i}const wo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function vo(e){function t(a,s){return An(a,s||{})}function n(a){const s=a.breakpoints||{},l=Re(s).filter(i=>e.matchMedia(i).matches).map(i=>s[i]).reduce((i,u)=>t(i,u),{});return t(a,l)}function o(a){return a.map(s=>Re(s.breakpoints||{})).reduce((s,l)=>s.concat(l),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function xo(e){let t=[];function n(a,s){return t=s.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),t.forEach(l=>l.init(a,e)),s.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function o(){t=t.filter(a=>a.destroy())}return{init:n,destroy:o}}function $e(e,t,n){const o=e.ownerDocument,r=o.defaultView,a=vo(r),s=xo(a),l=Fe(),i=bo(),{mergeOptions:u,optionsAtMedia:m,optionsMediaQueries:d}=a,{on:p,off:w,emit:c}=i,g=j;let h=!1,f,y=u(wo,$e.globalOptions),v=u(y),E=[],C,I,S;function B(){const{container:L,slides:b}=v;I=(Ue(L)?e.querySelector(L):L)||e.children[0];const H=Ue(b)?I.querySelectorAll(b):b;S=[].slice.call(H||I.children)}function T(L){const b=yo(e,I,S,o,r,L,i);if(L.loop&&!b.slideLooper.canLoop()){const P=Object.assign({},L,{loop:!1});return T(P)}return b}function $(L,b){h||(y=u(y,L),v=m(y),E=b||E,B(),f=T(v),d([y,...E.map(({options:P})=>P)]).forEach(P=>l.add(P,"change",j)),v.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(Y),f.eventHandler.init(Y),f.resizeHandler.init(Y),f.slidesHandler.init(Y),f.options.loop&&f.slideLooper.loop(),I.offsetParent&&S.length&&f.dragHandler.init(Y),C=s.init(Y,E)))}function j(L,b){const P=J();M(),$(u({startIndex:P},L),b),i.emit("reInit")}function M(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),l.clear()}function N(){h||(h=!0,l.clear(),M(),i.emit("destroy"),i.clear())}function K(L,b,P){!v.active||h||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:v.duration),f.scrollTo.index(L,P||0))}function W(L){const b=f.index.add(1).get();K(b,L,-1)}function te(L){const b=f.index.add(-1).get();K(b,L,1)}function ne(){return f.index.add(1).get()!==J()}function X(){return f.index.add(-1).get()!==J()}function Q(){return f.scrollSnapList}function ie(){return f.scrollProgress.get(f.offsetLocation.get())}function J(){return f.index.get()}function Z(){return f.indexPrevious.get()}function k(){return f.slidesInView.get()}function D(){return f.slidesInView.get(!1)}function F(){return C}function Ee(){return f}function U(){return e}function V(){return I}function re(){return S}const Y={canScrollNext:ne,canScrollPrev:X,containerNode:V,internalEngine:Ee,destroy:N,off:w,on:p,emit:c,plugins:F,previousScrollSnap:Z,reInit:g,rootNode:U,scrollNext:W,scrollPrev:te,scrollProgress:ie,scrollSnapList:Q,scrollTo:K,selectedScrollSnap:J,slideNodes:re,slidesInView:k,slidesNotInView:D};return $(t,n),setTimeout(()=>i.emit("init"),0),Y}$e.globalOptions=void 0;function Ye(e={},t=[]){const n=R.useRef(e),o=R.useRef(t),[r,a]=R.useState(),[s,l]=R.useState(),i=R.useCallback(()=>{r&&r.reInit(n.current,o.current)},[r]);return R.useEffect(()=>{We(n.current,e)||(n.current=e,i())},[e,i]),R.useEffect(()=>{Vn(o.current,t)||(o.current=t,i())},[t,i]),R.useEffect(()=>{if(Nn()&&s){$e.globalOptions=Ye.globalOptions;const u=$e(s,n.current,o.current);return a(u),()=>u.destroy()}else a(void 0)},[s,a]),[l,r]}Ye.globalOptions=void 0;const So="_carouselContainer_oit30_1",Ao="_viewport_oit30_14",Bo="_slides_oit30_20",To="_slide_oit30_20",Eo="_slideInner_oit30_40",Io="_loaderOverlay_oit30_48",Do="_image_oit30_58",ko="_loaded_oit30_69",Co="_loading_oit30_73",jo="_empty_oit30_81",Po="_controls_oit30_87",Ro="_arrows_oit30_97",Fo="_dots_oit30_107",Lo="_playPause_oit30_122",_o="_dot_oit30_107",$o="_dotActive_oit30_153",O={carouselContainer:So,viewport:Ao,slides:Bo,slide:To,slideInner:Eo,loaderOverlay:Io,image:Do,loaded:ko,loading:Co,empty:jo,controls:Po,arrows:Ro,dots:Fo,playPause:Lo,dot:_o,dotActive:$o},z=({images:e,autoPlay:t=!1,autoDelay:n=5,showArrows:o=!0,showDots:r=!0,variant:a,slidesPerView:s=1,slideSpacing:l=16,cornerRadius:i=0,"data-color":u,"data-size":m})=>{const{t:d}=_n();R.useEffect(()=>{const k="rk-carousel-inline-styles";if(typeof document>"u"||document.getElementById(k))return;const D=Ho(O),F=document.createElement("style");F.id=k,F.textContent=D,document.head.appendChild(F)},[]);const p={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[w,c]=Ye(p),[g,h]=R.useState(0),[f,y]=R.useState([]),[v,E]=R.useState([]),C=R.useRef([]),I=(e??[]).map(k=>k.src).join(`
`);R.useEffect(()=>{E((e??[]).map((k,D)=>{const F=C.current[D];return!!(F&&F.complete&&F.naturalWidth>0)}))},[I]);const S=R.useCallback(k=>{E(D=>{if(D[k])return D;const F=[...D];return F[k]=!0,F})},[]),B=R.useMemo(()=>n*1e3,[n]),T=R.useCallback(()=>{c&&h(c.selectedScrollSnap())},[c]),$=R.useCallback(k=>c&&c.scrollTo(k),[c]),j=R.useCallback(()=>c&&c.scrollPrev(),[c]),M=R.useCallback(()=>c&&c.scrollNext(),[c]);R.useEffect(()=>{if(c)return c.on("select",T),c.on("reInit",T),y(c.scrollSnapList()),()=>{c.off("select",T),c.off("reInit",T)}},[c,T]),R.useEffect(()=>{c&&(c.reInit(),y(c.scrollSnapList()))},[c,e,s,l]);const[N,K]=R.useState(!1),[W,te]=R.useState(!1),[ne,X]=R.useState(!1),Q=t&&!N&&!W&&!ne;R.useEffect(()=>{if(!Q||!c||!e||e.length<=1)return;const k=window.setInterval(()=>{c.canScrollNext()&&c.scrollNext()},B);return()=>{window.clearInterval(k)}},[Q,B,c,e]);const ie=Math.max(1,s),J=`${100/ie}%`,Z=l/2;return x.jsxs("div",{className:O.carouselContainer,"data-color":u,"data-size":m,"data-variant":a,onMouseEnter:t?()=>te(!0):void 0,onMouseLeave:t?()=>te(!1):void 0,onFocus:t?()=>X(!0):void 0,onBlur:t?k=>{k.currentTarget.contains(k.relatedTarget)||X(!1)}:void 0,children:[x.jsx("div",{className:O.viewport,ref:w,children:x.jsx("div",{className:O.slides,style:{marginLeft:`-${Z}px`,marginRight:`-${Z}px`},children:e&&e.length>0?e.map((k,D)=>x.jsx("div",{className:O.slide,style:{flex:`0 0 ${J}`,paddingLeft:`${Z}px`,paddingRight:`${Z}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:x.jsxs("div",{className:O.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!v[D]&&x.jsx("div",{className:O.loaderOverlay,children:x.jsx(Sn,{"aria-label":d("carousel.loading")})}),x.jsx("img",{ref:F=>{C.current[D]=F},className:`${O.image} ${v[D]?O.loaded:O.loadingImage}`,src:k.src,alt:k.alt,loading:D<ie?"eager":"lazy",crossOrigin:"anonymous",onLoad:()=>S(D),onError:F=>{F.target.style.display="none",S(D)}})]})},`image-${D}-${k.src}`)):x.jsx("div",{className:O.slide,style:{flex:"0 0 100%"},children:x.jsx("div",{className:O.empty,children:"Ingen bilder"})})})}),(o||r&&e&&e.length>1)&&x.jsxs("div",{className:O.controls,"aria-hidden":"false",children:[o&&x.jsxs("div",{className:O.arrows,children:[x.jsx(ct,{variant:"primary",icon:!0,"aria-label":d("carousel.previousImage"),onClick:j,disabled:!e||e.length<=1,children:x.jsx($n,{"aria-hidden":!0})}),x.jsx(ct,{variant:"primary",icon:!0,"aria-label":d("carousel.nextImage"),onClick:M,disabled:!e||e.length<=1,children:x.jsx(Hn,{"aria-hidden":!0})})]}),r&&e&&e.length>1&&x.jsxs("div",{className:O.dots,role:"group","aria-label":d("carousel.imagePosition"),children:[t&&x.jsx("button",{type:"button",className:O.playPause,onClick:()=>K(k=>!k),"aria-label":d(N?"carousel.resumeAutoplay":"carousel.pauseAutoplay"),"aria-pressed":N,children:N?x.jsx(On,{"aria-hidden":!0}):x.jsx(zn,{"aria-hidden":!0})}),f.map((k,D)=>{const F=D===g;return x.jsx("button",{type:"button",className:`${O.dot} ${F?O.dotActive:""}`,onClick:()=>$(D),"aria-label":`${d("carousel.goToImage")} ${D+1}`,"aria-current":F||void 0},`dot-${D}`)})]})]})]})};z.displayName="Carousel";function Ho(e){return`
.${e.carouselContainer} {
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
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-2, 14px);
}
.${e.empty} {
  color: var(--ds-color-text-subtle, #5d5d5d);
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
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #d6d6d6);
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
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #d6d6d6);
  background-color: rgba(255, 255, 255, 0.85);
  color: var(--ds-color-neutral-text-default, #2b2b2b);
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
`}try{z.displayName="Carousel",z.__docgenInfo={description:`Carousel-komponent for å vise en bildeserie.
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const Oo="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23FAE4E2'/%3e%3c!--%20corner%20shape%20--%3e%3cpath%20d='M450%20137H750V437H150V287H450V137Z'%20fill='%23D52B1E'/%3e%3crect%20x='150'%20y='487'%20width='600'%20height='50'%20fill='%23EEABA6'/%3e%3crect%20x='850'%20y='137'%20width='200'%20height='200'%20fill='%23F7F3EF'/%3e%3crect%20x='850'%20y='387'%20width='200'%20height='150'%20fill='%2357110C'/%3e%3c/svg%3e",zo="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23F7F3EF'/%3e%3c!--%20gapped%20cross%20--%3e%3crect%20x='500'%20y='87'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='500'%20y='387'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='290'%20y='237'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='710'%20y='237'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='80'%20y='87'%20width='120'%20height='500'%20fill='%23CDE4CA'/%3e%3crect%20x='1000'%20y='87'%20width='120'%20height='500'%20fill='%23FAE4E2'/%3e%3c/svg%3e",Mo="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%2357110C'/%3e%3c!--%20heart:%20two%20squares%20+%20notch%20block%20--%3e%3crect%20x='400'%20y='140'%20width='200'%20height='200'%20fill='%23EEABA6'/%3e%3crect%20x='600'%20y='140'%20width='200'%20height='200'%20fill='%23EEABA6'/%3e%3cpath%20d='M400%20340H800V440H700V540H500V440H400V340Z'%20fill='%23EEABA6'/%3e%3crect%20x='120'%20y='140'%20width='180'%20height='400'%20fill='%23B42419'/%3e%3crect%20x='900'%20y='140'%20width='180'%20height='400'%20fill='%23F6D2CF'/%3e%3c/svg%3e",{expect:A,within:le,userEvent:se,waitFor:G}=__STORYBOOK_MODULE_TEST__,No={title:"Components/Carousel",component:z,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral","danger"],description:"Color token"}}},Te={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:e=>x.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:x.jsx(z,{...e})})},ke={args:{...Te.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:e=>x.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:x.jsx(z,{...e})})},Vo="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",qo=["jpg","jpeg","png"],Go={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},pt=e=>e.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,t=>t.toUpperCase());function gt(e,t,n){const o=Go[t];return o?`${e}/${o.path}/${n}`:`${e}/images/spaces/${t}/${n}`}function Uo(){const e=new Map,t=new Map;return function(o){if(e.has(o))return Promise.resolve(e.get(o));if(t.has(o))return t.get(o);const r=new Promise(a=>{const s=new Image;s.crossOrigin="anonymous";const l=u=>{e.set(o,u),t.delete(o),a(u)},i=window.setTimeout(()=>{s.src="",l(!1)},5e3);s.onload=()=>{window.clearTimeout(i),l(!0)},s.onerror=()=>{window.clearTimeout(i),l(!1)},s.src=o});return t.set(o,r),r}}const mt=Uo();async function Ko(e,t){const n=[];for(let r=1;r<=6;r++){const a=r.toString().padStart(2,"0");let s=!1;for(const l of qo){const i=`${t}_${a}.${l}`,u=gt(e,t,i);if(!s&&await mt(u)){n.push({src:u,alt:pt(i)}),s=!0;break}const m=`${t.toLowerCase()}_${a}.${l}`,d=gt(e,t,m);if(!s&&await mt(d)){n.push({src:d,alt:pt(m)}),s=!0;break}}}return n}const Ce={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:e=>x.jsx(Wo,{...e})};function Wo(e){const[t,n]=Ge.useState(null),o="Konferanselokaler",r=Vo;return Ge.useEffect(()=>{let a=!1;return(async()=>{const s=await Ko(r,o);a||n(s)})(),()=>{a=!0}},[r,o]),x.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:t===null?x.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[x.jsx(Sn,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):x.jsx(z,{...e,images:t,slidesPerView:1})})}const He=[{src:Oo,alt:"Test bilde 1"},{src:zo,alt:"Test bilde 2"},{src:Mo,alt:"Test bilde 3"}],pe=He,me={name:"Test: Arrow Navigation",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await G(()=>{A(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i}),r=t.getAllByRole("button",{name:/gå til bilde/i});A(r.length).toBe(3),A(r[0]).toHaveAttribute("aria-current","true"),await se.click(n),await G(()=>{A(r[1]).toHaveAttribute("aria-current","true")}),await se.click(n),await G(()=>{A(r[2]).toHaveAttribute("aria-current","true")}),await se.click(o),await G(()=>{A(r[1]).toHaveAttribute("aria-current","true")})}},he={name:"Test: Dot Navigation",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await G(()=>{A(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.getAllByRole("button",{name:/gå til bilde/i});A(n[0]).toHaveAttribute("aria-current","true"),await se.click(n[2]),await G(()=>{A(n[2]).toHaveAttribute("aria-current","true")}),await se.click(n[0]),await G(()=>{A(n[0]).toHaveAttribute("aria-current","true")})}},ye={name:"Test: Single Image (Disabled Arrows)",args:{images:[pe[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await G(()=>{A(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i});A(n).toBeDisabled(),A(o).toBeDisabled();const r=t.queryAllByRole("button",{name:/gå til bilde/i});A(r.length).toBe(0)}},be={name:"Test: Hidden Arrows",args:{images:pe,showArrows:!1,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await G(()=>{A(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.queryByRole("button",{name:/neste/i}),o=t.queryByRole("button",{name:/forrige/i});A(n).not.toBeInTheDocument(),A(o).not.toBeInTheDocument();const r=t.getAllByRole("button",{name:/gå til bilde/i});A(r.length).toBe(3)}},we={name:"Test: Hidden Dots",args:{images:pe,showArrows:!0,showDots:!1,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await G(()=>{A(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.queryAllByRole("button",{name:/gå til bilde/i});A(n.length).toBe(0);const o=t.getByRole("button",{name:/neste/i});A(o).toBeInTheDocument()}},ve={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{A(e.textContent).toContain("Ingen bilder")}},xe={name:"Test: Image Alt Text",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{await G(()=>{const n=e.querySelectorAll("img");A(n.length).toBeGreaterThan(0)}),e.querySelectorAll("img").forEach(n=>{A(n).toHaveAttribute("alt"),A(n.getAttribute("alt")).not.toBe("")})}},Se={name:"Test: Dots Accessibility",args:{images:pe,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e);await G(()=>{A(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.getByRole("group",{name:/bildeposisjon/i});A(n).toBeInTheDocument();const o=t.getAllByRole("button",{name:/gå til bilde/i});o.forEach(a=>{A(a).toHaveAttribute("aria-label")});const r=o.filter(a=>a.getAttribute("aria-current")==="true");A(r.length).toBe(1)}},Ae={name:"Test: Re-render Keeps Slides Visible",render:()=>{const[,e]=Ge.useState(0);return x.jsxs("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:[x.jsx(z,{images:[{src:He[0].src,alt:"Lokalt bilde 1"},{src:He[1].src,alt:"Lokalt bilde 2"}],showArrows:!0,showDots:!0}),x.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"Tving re-render"})]})},play:async({canvasElement:e})=>{const t=le(e),n=await G(()=>{const r=e.querySelector("img");return A(r).not.toBeNull(),A(r.complete).toBe(!0),r});await G(()=>{A(getComputedStyle(n).opacity).toBe("1")});const o=t.getByRole("button",{name:"Tving re-render"});await se.click(o),await se.click(o),A(getComputedStyle(n).opacity).toBe("1"),A(t.queryByLabelText(/laster bilde/i)).not.toBeInTheDocument()}},Be={name:"Test: Autoplay Pause Control",args:{images:He,showArrows:!1,showDots:!0,autoPlay:!0,autoDelay:.4},render:e=>x.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:x.jsx(z,{...e})}),play:async({canvasElement:e})=>{const t=le(e),n=await t.findByRole("button",{name:/pause automatisk/i});A(n).toHaveAttribute("aria-pressed","false"),await se.click(n),A(t.getByRole("button",{name:/start automatisk/i})).toHaveAttribute("aria-pressed","true");const o=t.getAllByRole("button",{name:/gå til bilde/i});await new Promise(a=>setTimeout(a,1e3)),A(o[0]).toHaveAttribute("aria-current","true");const r=t.getByRole("button",{name:/start automatisk/i});await se.click(r),r.blur(),await se.unhover(r),await G(()=>{A(o[1]).toHaveAttribute("aria-current","true")},{timeout:3e3})}};var ht,yt,bt;Te.parameters={...Te.parameters,docs:{...(ht=Te.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(bt=(yt=Te.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var wt,vt,xt;ke.parameters={...ke.parameters,docs:{...(wt=ke.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(xt=(vt=ke.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var St,At,Bt;Ce.parameters={...Ce.parameters,docs:{...(St=Ce.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(Bt=(At=Ce.parameters)==null?void 0:At.docs)==null?void 0:Bt.source}}};var Tt,Et,It,Dt,kt;me.parameters={...me.parameters,docs:{...(Tt=me.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(It=(Et=me.parameters)==null?void 0:Et.docs)==null?void 0:It.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(kt=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:kt.description}}};var Ct,jt,Pt,Rt,Ft;he.parameters={...he.parameters,docs:{...(Ct=he.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Pt=(jt=he.parameters)==null?void 0:jt.docs)==null?void 0:Pt.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...(Ft=(Rt=he.parameters)==null?void 0:Rt.docs)==null?void 0:Ft.description}}};var Lt,_t,$t,Ht,Ot;ye.parameters={...ye.parameters,docs:{...(Lt=ye.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...($t=(_t=ye.parameters)==null?void 0:_t.docs)==null?void 0:$t.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Ot=(Ht=ye.parameters)==null?void 0:Ht.docs)==null?void 0:Ot.description}}};var zt,Mt,Nt,Vt,qt;be.parameters={...be.parameters,docs:{...(zt=be.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Nt=(Mt=be.parameters)==null?void 0:Mt.docs)==null?void 0:Nt.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...(qt=(Vt=be.parameters)==null?void 0:Vt.docs)==null?void 0:qt.description}}};var Gt,Ut,Kt,Wt,Xt;we.parameters={...we.parameters,docs:{...(Gt=we.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Kt=(Ut=we.parameters)==null?void 0:Ut.docs)==null?void 0:Kt.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(Xt=(Wt=we.parameters)==null?void 0:Wt.docs)==null?void 0:Xt.description}}};var Qt,Jt,Yt,Zt,en;ve.parameters={...ve.parameters,docs:{...(Qt=ve.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Yt=(Jt=ve.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source},description:{story:"Tests that empty state is handled gracefully.",...(en=(Zt=ve.parameters)==null?void 0:Zt.docs)==null?void 0:en.description}}};var tn,nn,on,sn,rn;xe.parameters={...xe.parameters,docs:{...(tn=xe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(on=(nn=xe.parameters)==null?void 0:nn.docs)==null?void 0:on.source},description:{story:"Tests that images have proper alt text for accessibility.",...(rn=(sn=xe.parameters)==null?void 0:sn.docs)==null?void 0:rn.description}}};var an,cn,ln,un,dn;Se.parameters={...Se.parameters,docs:{...(an=Se.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(ln=(cn=Se.parameters)==null?void 0:cn.docs)==null?void 0:ln.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(dn=(un=Se.parameters)==null?void 0:un.docs)==null?void 0:dn.description}}};var fn,pn,gn,mn,hn;Ae.parameters={...Ae.parameters,docs:{...(fn=Ae.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(gn=(pn=Ae.parameters)==null?void 0:pn.docs)==null?void 0:gn.source},description:{story:`A parent re-render passing a new array literal with identical content must
not blank already-loaded slides (loaded state survives identity changes).`,...(hn=(mn=Ae.parameters)==null?void 0:mn.docs)==null?void 0:hn.description}}};var yn,bn,wn,vn,xn;Be.parameters={...Be.parameters,docs:{...(yn=Be.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(wn=(bn=Be.parameters)==null?void 0:bn.docs)==null?void 0:wn.source},description:{story:`WCAG 2.2.2: autoplay exposes a pause control; pausing stops rotation and
resuming starts it again.`,...(xn=(vn=Be.parameters)==null?void 0:vn.docs)==null?void 0:xn.description}}};const Xo=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility","TestRerenderKeepsSlides","TestAutoplayPauseControl"],ts=Object.freeze(Object.defineProperty({__proto__:null,Default:Te,MultipleSlides:ke,TestArrowNavigation:me,TestAutoplayPauseControl:Be,TestDotNavigation:he,TestDotsAccessibility:Se,TestEmptyState:ve,TestHiddenArrows:be,TestHiddenDots:we,TestImageAltText:xe,TestRerenderKeepsSlides:Ae,TestSingleImageDisabledArrows:ye,WithSupabase:Ce,__namedExportsOrder:Xo,default:No},Symbol.toStringTag,{value:"Module"}));export{ts as C};
