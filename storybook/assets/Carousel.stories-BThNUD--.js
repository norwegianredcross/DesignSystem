import{r as R,j as v,R as se}from"./iframe-Ddt9vkfr.js";import{B as re}from"./index-BC8FV1Mq.js";import{S as ln}from"./index-lDK-FhGx.js";import{u as An}from"./LanguageContext-CFf55vSN.js";import{S as Tn,a as Bn}from"./ChevronRight-CE0GvwgL.js";function In(t){return Object.prototype.toString.call(t)==="[object Object]"}function ae(t){return In(t)||Array.isArray(t)}function En(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function qt(t,e){const n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;const r=JSON.stringify(Object.keys(t.breakpoints||{})),a=JSON.stringify(Object.keys(e.breakpoints||{}));return r!==a?!1:n.every(s=>{const l=t[s],i=e[s];return typeof l=="function"?`${l}`==`${i}`:!ae(l)||!ae(i)?l===i:qt(l,i)})}function ie(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Dn(t,e){if(t.length!==e.length)return!1;const n=ie(t),o=ie(e);return n.every((r,a)=>{const s=o[a];return qt(r,s)})}function Gt(t){return typeof t=="number"}function Ht(t){return typeof t=="string"}function Rt(t){return typeof t=="boolean"}function ce(t){return Object.prototype.toString.call(t)==="[object Object]"}function F(t){return Math.abs(t)}function Ut(t){return Math.sign(t)}function Dt(t,e){return F(t-e)}function Cn(t,e){if(t===0||e===0||F(t)<=F(e))return 0;const n=Dt(F(t),F(e));return F(n/t)}function kn(t){return Math.round(t*100)/100}function kt(t){return jt(t).map(Number)}function W(t){return t[Lt(t)]}function Lt(t){return Math.max(0,t.length-1)}function Kt(t,e){return e===Lt(t)}function le(t,e=0){return Array.from(Array(t),(n,o)=>e+o)}function jt(t){return Object.keys(t)}function un(t,e){return[t,e].reduce((n,o)=>(jt(o).forEach(r=>{const a=n[r],s=o[r],l=ce(a)&&ce(s);n[r]=l?un(a,s):s}),n),{})}function Vt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function jn(t,e){const n={start:o,center:r,end:a};function o(){return 0}function r(i){return a(i)/2}function a(i){return e-i}function s(i,u){return Ht(t)?n[t](i):t(e,i,u)}return{measure:s}}function _t(){let t=[];function e(r,a,s,l={passive:!0}){let i;if("addEventListener"in r)r.addEventListener(a,s,l),i=()=>r.removeEventListener(a,s,l);else{const u=r;u.addListener(s),i=()=>u.removeListener(s)}return t.push(i),o}function n(){t=t.filter(r=>r())}const o={add:e,clear:n};return o}function _n(t,e,n,o){const r=_t(),a=1e3/60;let s=null,l=0,i=0;function u(){r.add(t,"visibilitychange",()=>{t.hidden&&c()})}function m(){x(),r.clear()}function f(h){if(!i)return;s||(s=h,n(),n());const d=h-s;for(s=h,l+=d;l>=a;)n(),l-=a;const y=l/a;o(y),i&&(i=e.requestAnimationFrame(f))}function p(){i||(i=e.requestAnimationFrame(f))}function x(){e.cancelAnimationFrame(i),s=null,l=0,i=0}function c(){s=null,l=0}return{init:u,destroy:m,start:p,stop:x,update:n,render:o}}function Ln(t,e){const n=e==="rtl",o=t==="y",r=o?"y":"x",a=o?"x":"y",s=!o&&n?-1:1,l=m(),i=f();function u(c){const{height:g,width:h}=c;return o?g:h}function m(){return o?"top":n?"right":"left"}function f(){return o?"bottom":n?"left":"right"}function p(c){return c*s}return{scroll:r,cross:a,startEdge:l,endEdge:i,measureSize:u,direction:p}}function at(t=0,e=0){const n=F(t-e);function o(u){return u<t}function r(u){return u>e}function a(u){return o(u)||r(u)}function s(u){return a(u)?o(u)?t:e:u}function l(u){return n?u-n*Math.ceil((u-e)/n):u}return{length:n,max:e,min:t,constrain:s,reachedAny:a,reachedMax:r,reachedMin:o,removeOffset:l}}function dn(t,e,n){const{constrain:o}=at(0,t),r=t+1;let a=s(e);function s(p){return n?F((r+p)%r):o(p)}function l(){return a}function i(p){return a=s(p),f}function u(p){return m().set(l()+p)}function m(){return dn(t,l(),n)}const f={get:l,set:i,add:u,clone:m};return f}function Fn(t,e,n,o,r,a,s,l,i,u,m,f,p,x,c,g,h,d,y){const{cross:w,direction:T}=t,C=["INPUT","SELECT","TEXTAREA"],B={passive:!1},S=_t(),A=_t(),I=at(50,225).constrain(x.measure(20)),P={mouse:300,touch:400},D={mouse:500,touch:600},N=c?43:25;let M=!1,_=0,k=0,O=!1,nt=!1,J=!1,Y=!1;function vt(b){if(!y)return;function j(V){(Rt(y)||y(b,V))&&At(V)}const $=e;S.add($,"dragstart",V=>V.preventDefault(),B).add($,"touchmove",()=>{},B).add($,"touchend",()=>{}).add($,"touchstart",j).add($,"mousedown",j).add($,"touchcancel",H).add($,"contextmenu",H).add($,"click",tt,!0)}function X(){S.clear(),A.clear()}function ct(){const b=Y?n:e;A.add(b,"touchmove",G,B).add(b,"touchend",H).add(b,"mousemove",G,B).add(b,"mouseup",H)}function lt(b){const j=b.nodeName||"";return C.includes(j)}function Z(){return(c?D:P)[Y?"mouse":"touch"]}function St(b,j){const $=f.add(Ut(b)*-1),V=m.byDistance(b,!c).distance;return c||F(b)<I?V:h&&j?V*.5:m.byIndex($.get(),0).distance}function At(b){const j=Vt(b,o);Y=j,J=c&&j&&!b.buttons&&M,M=Dt(r.get(),s.get())>=2,!(j&&b.button!==0)&&(lt(b.target)||(O=!0,a.pointerDown(b),u.useFriction(0).useDuration(0),r.set(s),ct(),_=a.readPoint(b),k=a.readPoint(b,w),p.emit("pointerDown")))}function G(b){if(!Vt(b,o)&&b.touches.length>=2)return H(b);const $=a.readPoint(b),V=a.readPoint(b,w),Q=Dt($,_),et=Dt(V,k);if(!nt&&!Y&&(!b.cancelable||(nt=Q>et,!nt)))return H(b);const st=a.pointerMove(b);Q>g&&(J=!0),u.useFriction(.3).useDuration(.75),l.start(),r.add(T(st)),b.preventDefault()}function H(b){const $=m.byDistance(0,!1).index!==f.get(),V=a.pointerUp(b)*Z(),Q=St(T(V),$),et=Cn(V,Q),st=N-10*et,ot=d+et/50;nt=!1,O=!1,A.clear(),u.useDuration(st).useFriction(ot),i.distance(Q,!c),Y=!1,p.emit("pointerUp")}function tt(b){J&&(b.stopPropagation(),b.preventDefault(),J=!1)}function U(){return O}return{init:vt,destroy:X,pointerDown:U}}function Pn(t,e){let o,r;function a(f){return f.timeStamp}function s(f,p){const c=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Vt(f,e)?f:f.touches[0])[c]}function l(f){return o=f,r=f,s(f)}function i(f){const p=s(f)-s(r),x=a(f)-a(o)>170;return r=f,x&&(o=f),p}function u(f){if(!o||!r)return 0;const p=s(r)-s(o),x=a(f)-a(o),c=a(f)-a(r)>170,g=p/x;return x&&!c&&F(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:u,readPoint:s}}function Rn(){function t(n){const{offsetTop:o,offsetLeft:r,offsetWidth:a,offsetHeight:s}=n;return{top:o,right:r+a,bottom:o+s,left:r,width:a,height:s}}return{measure:t}}function $n(t){function e(o){return t*(o/100)}return{measure:e}}function On(t,e,n,o,r,a,s){const l=[t].concat(o);let i,u,m=[],f=!1;function p(h){return r.measureSize(s.measure(h))}function x(h){if(!a)return;u=p(t),m=o.map(p);function d(y){for(const w of y){if(f)return;const T=w.target===t,C=o.indexOf(w.target),B=T?u:m[C],S=p(T?t:o[C]);if(F(S-B)>=.5){h.reInit(),e.emit("resize");break}}}i=new ResizeObserver(y=>{(Rt(a)||a(h,y))&&d(y)}),n.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function c(){f=!0,i&&i.disconnect()}return{init:x,destroy:c}}function zn(t,e,n,o,r,a){let s=0,l=0,i=r,u=a,m=t.get(),f=0;function p(){const B=o.get()-t.get(),S=!i;let A=0;return S?(s=0,n.set(o),t.set(o),A=B):(n.set(t),s+=B/i,s*=u,m+=s,t.add(s),A=m-f),l=Ut(A),f=m,C}function x(){const B=o.get()-e.get();return F(B)<.001}function c(){return i}function g(){return l}function h(){return s}function d(){return w(r)}function y(){return T(a)}function w(B){return i=B,C}function T(B){return u=B,C}const C={direction:g,duration:c,velocity:h,seek:p,settled:x,useBaseFriction:y,useBaseDuration:d,useFriction:T,useDuration:w};return C}function Nn(t,e,n,o,r){const a=r.measure(10),s=r.measure(50),l=at(.1,.99);let i=!1;function u(){return!(i||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function m(x){if(!u())return;const c=t.reachedMin(e.get())?"min":"max",g=F(t[c]-e.get()),h=n.get()-e.get(),d=l.constrain(g/s);n.subtract(h*d),!x&&F(h)<a&&(n.set(t.constrain(n.get())),o.useDuration(25).useBaseFriction())}function f(x){i=!x}return{shouldConstrain:u,constrain:m,toggleActive:f}}function Mn(t,e,n,o,r){const a=at(-e+t,0),s=f(),l=m(),i=p();function u(c,g){return Dt(c,g)<=1}function m(){const c=s[0],g=W(s),h=s.lastIndexOf(c),d=s.indexOf(g)+1;return at(h,d)}function f(){return n.map((c,g)=>{const{min:h,max:d}=a,y=a.constrain(c),w=!g,T=Kt(n,g);return w?d:T||u(h,y)?h:u(d,y)?d:y}).map(c=>parseFloat(c.toFixed(3)))}function p(){if(e<=t+r)return[a.max];if(o==="keepSnaps")return s;const{min:c,max:g}=l;return s.slice(c,g)}return{snapsContained:i,scrollContainLimit:l}}function Hn(t,e,n){const o=e[0],r=n?o-t:W(e);return{limit:at(r,o)}}function Vn(t,e,n,o){const a=e.min+.1,s=e.max+.1,{reachedMin:l,reachedMax:i}=at(a,s);function u(p){return p===1?i(n.get()):p===-1?l(n.get()):!1}function m(p){if(!u(p))return;const x=t*(p*-1);o.forEach(c=>c.add(x))}return{loop:m}}function qn(t){const{max:e,length:n}=t;function o(a){const s=a-e;return n?s/-n:0}return{get:o}}function Gn(t,e,n,o,r){const{startEdge:a,endEdge:s}=t,{groupSlides:l}=r,i=f().map(e.measure),u=p(),m=x();function f(){return l(o).map(g=>W(g)[s]-g[0][a]).map(F)}function p(){return o.map(g=>n[a]-g[a]).map(g=>-F(g))}function x(){return l(u).map(g=>g[0]).map((g,h)=>g+i[h])}return{snaps:u,snapsAligned:m}}function Un(t,e,n,o,r,a){const{groupSlides:s}=r,{min:l,max:i}=o,u=m();function m(){const p=s(a),x=!t||e==="keepSnaps";return n.length===1?[a]:x?p:p.slice(l,i).map((c,g,h)=>{const d=!g,y=Kt(h,g);if(d){const w=W(h[0])+1;return le(w)}if(y){const w=Lt(a)-W(h)[0]+1;return le(w,W(h)[0])}return c})}return{slideRegistry:u}}function Kn(t,e,n,o,r){const{reachedAny:a,removeOffset:s,constrain:l}=o;function i(c){return c.concat().sort((g,h)=>F(g)-F(h))[0]}function u(c){const g=t?s(c):l(c),h=e.map((y,w)=>({diff:m(y-g,0),index:w})).sort((y,w)=>F(y.diff)-F(w.diff)),{index:d}=h[0];return{index:d,distance:g}}function m(c,g){const h=[c,c+n,c-n];if(!t)return c;if(!g)return i(h);const d=h.filter(y=>Ut(y)===g);return d.length?i(d):W(h)-n}function f(c,g){const h=e[c]-r.get(),d=m(h,g);return{index:c,distance:d}}function p(c,g){const h=r.get()+c,{index:d,distance:y}=u(h),w=!t&&a(h);if(!g||w)return{index:d,distance:c};const T=e[d]-y,C=c+m(T,0);return{index:d,distance:C}}return{byDistance:p,byIndex:f,shortcut:m}}function Wn(t,e,n,o,r,a,s){function l(f){const p=f.distance,x=f.index!==e.get();a.add(p),p&&(o.duration()?t.start():(t.update(),t.render(1),t.update())),x&&(n.set(e.get()),e.set(f.index),s.emit("select"))}function i(f,p){const x=r.byDistance(f,p);l(x)}function u(f,p){const x=e.clone().set(f),c=r.byIndex(x.get(),p);l(c)}return{distance:i,index:u}}function Xn(t,e,n,o,r,a,s,l){const i={passive:!0,capture:!0};let u=0;function m(x){if(!l)return;function c(g){if(new Date().getTime()-u>10)return;s.emit("slideFocusStart"),t.scrollLeft=0;const y=n.findIndex(w=>w.includes(g));Gt(y)&&(r.useDuration(0),o.index(y,0),s.emit("slideFocus"))}a.add(document,"keydown",f,!1),e.forEach((g,h)=>{a.add(g,"focus",d=>{(Rt(l)||l(x,d))&&c(h)},i)})}function f(x){x.code==="Tab"&&(u=new Date().getTime())}return{init:m}}function Bt(t){let e=t;function n(){return e}function o(i){e=s(i)}function r(i){e+=s(i)}function a(i){e-=s(i)}function s(i){return Gt(i)?i:i.get()}return{get:n,set:o,add:r,subtract:a}}function fn(t,e){const n=t.scroll==="x"?s:l,o=e.style;let r=null,a=!1;function s(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(a)return;const x=kn(t.direction(p));x!==r&&(o.transform=n(x),r=x)}function u(p){a=!p}function m(){a||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:m,to:i,toggleActive:u}}function Qn(t,e,n,o,r,a,s,l,i){const m=kt(r),f=kt(r).reverse(),p=d().concat(y());function x(S,A){return S.reduce((I,P)=>I-r[P],A)}function c(S,A){return S.reduce((I,P)=>x(I,A)>0?I.concat([P]):I,[])}function g(S){return a.map((A,I)=>({start:A-o[I]+.5+S,end:A+e-.5+S}))}function h(S,A,I){const P=g(A);return S.map(D=>{const N=I?0:-n,M=I?n:0,_=I?"end":"start",k=P[D][_];return{index:D,loopPoint:k,slideLocation:Bt(-1),translate:fn(t,i[D]),target:()=>l.get()>k?N:M}})}function d(){const S=s[0],A=c(f,S);return h(A,n,!1)}function y(){const S=e-s[0]-1,A=c(m,S);return h(A,-n,!0)}function w(){return p.every(({index:S})=>{const A=m.filter(I=>I!==S);return x(A,e)<=.1})}function T(){p.forEach(S=>{const{target:A,translate:I,slideLocation:P}=S,D=A();D!==P.get()&&(I.to(D),P.set(D))})}function C(){p.forEach(S=>S.translate.clear())}return{canLoop:w,clear:C,loop:T,loopPoints:p}}function Jn(t,e,n){let o,r=!1;function a(i){if(!n)return;function u(m){for(const f of m)if(f.type==="childList"){i.reInit(),e.emit("slidesChanged");break}}o=new MutationObserver(m=>{r||(Rt(n)||n(i,m))&&u(m)}),o.observe(t,{childList:!0})}function s(){o&&o.disconnect(),r=!0}return{init:a,destroy:s}}function Yn(t,e,n,o){const r={};let a=null,s=null,l,i=!1;function u(){l=new IntersectionObserver(c=>{i||(c.forEach(g=>{const h=e.indexOf(g.target);r[h]=g}),a=null,s=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:o}),e.forEach(c=>l.observe(c))}function m(){l&&l.disconnect(),i=!0}function f(c){return jt(r).reduce((g,h)=>{const d=parseInt(h),{isIntersecting:y}=r[d];return(c&&y||!c&&!y)&&g.push(d),g},[])}function p(c=!0){if(c&&a)return a;if(!c&&s)return s;const g=f(c);return c&&(a=g),c||(s=g),g}return{init:u,destroy:m,get:p}}function Zn(t,e,n,o,r,a){const{measureSize:s,startEdge:l,endEdge:i}=t,u=n[0]&&r,m=c(),f=g(),p=n.map(s),x=h();function c(){if(!u)return 0;const y=n[0];return F(e[l]-y[l])}function g(){if(!u)return 0;const y=a.getComputedStyle(W(o));return parseFloat(y.getPropertyValue(`margin-${i}`))}function h(){return n.map((y,w,T)=>{const C=!w,B=Kt(T,w);return C?p[w]+m:B?p[w]+f:T[w+1][l]-y[l]}).map(F)}return{slideSizes:p,slideSizesWithGaps:x,startGap:m,endGap:f}}function to(t,e,n,o,r,a,s,l,i){const{startEdge:u,endEdge:m,direction:f}=t,p=Gt(n);function x(d,y){return kt(d).filter(w=>w%y===0).map(w=>d.slice(w,w+y))}function c(d){return d.length?kt(d).reduce((y,w,T)=>{const C=W(y)||0,B=C===0,S=w===Lt(d),A=r[u]-a[C][u],I=r[u]-a[w][m],P=!o&&B?f(s):0,D=!o&&S?f(l):0,N=F(I-D-(A+P));return T&&N>e+i&&y.push(w),S&&y.push(d.length),y},[]).map((y,w,T)=>{const C=Math.max(T[w-1]||0);return d.slice(C,y)}):[]}function g(d){return p?x(d,n):c(d)}return{groupSlides:g}}function eo(t,e,n,o,r,a,s){const{align:l,axis:i,direction:u,startIndex:m,loop:f,duration:p,dragFree:x,dragThreshold:c,inViewThreshold:g,slidesToScroll:h,skipSnaps:d,containScroll:y,watchResize:w,watchSlides:T,watchDrag:C,watchFocus:B}=a,S=2,A=Rn(),I=A.measure(e),P=n.map(A.measure),D=Ln(i,u),N=D.measureSize(I),M=$n(N),_=jn(l,N),k=!f&&!!y,O=f||!!y,{slideSizes:nt,slideSizesWithGaps:J,startGap:Y,endGap:vt}=Zn(D,I,P,n,O,r),X=to(D,N,h,f,I,P,Y,vt,S),{snaps:ct,snapsAligned:lt}=Gn(D,_,I,P,X),Z=-W(ct)+W(J),{snapsContained:St,scrollContainLimit:At}=Mn(N,Z,lt,y,S),G=k?St:lt,{limit:H}=Hn(Z,G,f),tt=dn(Lt(G),m,f),U=tt.clone(),L=kt(n),b=({dragHandler:ut,scrollBody:Nt,scrollBounds:Mt,options:{loop:Ft}})=>{Ft||Mt.constrain(ut.pointerDown()),Nt.seek()},j=({scrollBody:ut,translate:Nt,location:Mt,offsetLocation:Ft,previousLocation:mn,scrollLooper:hn,slideLooper:yn,dragHandler:bn,animation:xn,eventHandler:Yt,scrollBounds:wn,options:{loop:Zt}},te)=>{const ee=ut.settled(),vn=!wn.shouldConstrain(),ne=Zt?ee:ee&&vn,oe=ne&&!bn.pointerDown();oe&&xn.stop();const Sn=Mt.get()*te+mn.get()*(1-te);Ft.set(Sn),Zt&&(hn.loop(ut.direction()),yn.loop()),Nt.to(Ft.get()),oe&&Yt.emit("settle"),ne||Yt.emit("scroll")},$=_n(o,r,()=>b(zt),ut=>j(zt,ut)),V=.68,Q=G[tt.get()],et=Bt(Q),st=Bt(Q),ot=Bt(Q),rt=Bt(Q),Tt=zn(et,ot,st,rt,p,V),$t=Kn(f,G,Z,H,rt),Ot=Wn($,tt,U,Tt,$t,rt,s),Xt=qn(H),Qt=_t(),pn=Yn(e,n,s,g),{slideRegistry:Jt}=Un(k,y,G,At,X,L),gn=Xn(t,n,Jt,Ot,Tt,Qt,s,B),zt={ownerDocument:o,ownerWindow:r,eventHandler:s,containerRect:I,slideRects:P,animation:$,axis:D,dragHandler:Fn(D,t,o,r,rt,Pn(D,r),et,$,Ot,Tt,$t,tt,s,M,x,c,d,V,C),eventStore:Qt,percentOfView:M,index:tt,indexPrevious:U,limit:H,location:et,offsetLocation:ot,previousLocation:st,options:a,resizeHandler:On(e,s,r,n,D,w,A),scrollBody:Tt,scrollBounds:Nn(H,ot,rt,Tt,M),scrollLooper:Vn(Z,H,ot,[et,ot,st,rt]),scrollProgress:Xt,scrollSnapList:G.map(Xt.get),scrollSnaps:G,scrollTarget:$t,scrollTo:Ot,slideLooper:Qn(D,N,Z,nt,J,ct,G,ot,n),slideFocus:gn,slidesHandler:Jn(e,s,T),slidesInView:pn,slideIndexes:L,slideRegistry:Jt,slidesToScroll:X,target:rt,translate:fn(D,e)};return zt}function no(){let t={},e;function n(u){e=u}function o(u){return t[u]||[]}function r(u){return o(u).forEach(m=>m(e,u)),i}function a(u,m){return t[u]=o(u).concat([m]),i}function s(u,m){return t[u]=o(u).filter(f=>f!==m),i}function l(){t={}}const i={init:n,emit:r,off:s,on:a,clear:l};return i}const oo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function so(t){function e(a,s){return un(a,s||{})}function n(a){const s=a.breakpoints||{},l=jt(s).filter(i=>t.matchMedia(i).matches).map(i=>s[i]).reduce((i,u)=>e(i,u),{});return e(a,l)}function o(a){return a.map(s=>jt(s.breakpoints||{})).reduce((s,l)=>s.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:o}}function ro(t){let e=[];function n(a,s){return e=s.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(a,t)),s.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function o(){e=e.filter(a=>a.destroy())}return{init:n,destroy:o}}function Pt(t,e,n){const o=t.ownerDocument,r=o.defaultView,a=so(r),s=ro(a),l=_t(),i=no(),{mergeOptions:u,optionsAtMedia:m,optionsMediaQueries:f}=a,{on:p,off:x,emit:c}=i,g=D;let h=!1,d,y=u(oo,Pt.globalOptions),w=u(y),T=[],C,B,S;function A(){const{container:L,slides:b}=w;B=(Ht(L)?t.querySelector(L):L)||t.children[0];const $=Ht(b)?B.querySelectorAll(b):b;S=[].slice.call($||B.children)}function I(L){const b=eo(t,B,S,o,r,L,i);if(L.loop&&!b.slideLooper.canLoop()){const j=Object.assign({},L,{loop:!1});return I(j)}return b}function P(L,b){h||(y=u(y,L),w=m(y),T=b||T,A(),d=I(w),f([y,...T.map(({options:j})=>j)]).forEach(j=>l.add(j,"change",D)),w.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(U),d.eventHandler.init(U),d.resizeHandler.init(U),d.slidesHandler.init(U),d.options.loop&&d.slideLooper.loop(),B.offsetParent&&S.length&&d.dragHandler.init(U),C=s.init(U,T)))}function D(L,b){const j=X();N(),P(u({startIndex:j},L),b),i.emit("reInit")}function N(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),s.destroy(),l.clear()}function M(){h||(h=!0,l.clear(),N(),i.emit("destroy"),i.clear())}function _(L,b,j){!w.active||h||(d.scrollBody.useBaseFriction().useDuration(b===!0?0:w.duration),d.scrollTo.index(L,j||0))}function k(L){const b=d.index.add(1).get();_(b,L,-1)}function O(L){const b=d.index.add(-1).get();_(b,L,1)}function nt(){return d.index.add(1).get()!==X()}function J(){return d.index.add(-1).get()!==X()}function Y(){return d.scrollSnapList}function vt(){return d.scrollProgress.get(d.offsetLocation.get())}function X(){return d.index.get()}function ct(){return d.indexPrevious.get()}function lt(){return d.slidesInView.get()}function Z(){return d.slidesInView.get(!1)}function St(){return C}function At(){return d}function G(){return t}function H(){return B}function tt(){return S}const U={canScrollNext:nt,canScrollPrev:J,containerNode:H,internalEngine:At,destroy:M,off:x,on:p,emit:c,plugins:St,previousScrollSnap:ct,reInit:g,rootNode:G,scrollNext:k,scrollPrev:O,scrollProgress:vt,scrollSnapList:Y,scrollTo:_,selectedScrollSnap:X,slideNodes:tt,slidesInView:lt,slidesNotInView:Z};return P(e,n),setTimeout(()=>i.emit("init"),0),U}Pt.globalOptions=void 0;function Wt(t={},e=[]){const n=R.useRef(t),o=R.useRef(e),[r,a]=R.useState(),[s,l]=R.useState(),i=R.useCallback(()=>{r&&r.reInit(n.current,o.current)},[r]);return R.useEffect(()=>{qt(n.current,t)||(n.current=t,i())},[t,i]),R.useEffect(()=>{Dn(o.current,e)||(o.current=e,i())},[e,i]),R.useEffect(()=>{if(En()&&s){Pt.globalOptions=Wt.globalOptions;const u=Pt(s,n.current,o.current);return a(u),()=>u.destroy()}else a(void 0)},[s,a]),[l,r]}Wt.globalOptions=void 0;const ao="_carouselContainer_gu7c2_1",io="_viewport_gu7c2_14",co="_slides_gu7c2_20",lo="_slide_gu7c2_20",uo="_slideInner_gu7c2_40",fo="_loaderOverlay_gu7c2_48",po="_image_gu7c2_58",go="_loaded_gu7c2_69",mo="_loading_gu7c2_73",ho="_empty_gu7c2_81",yo="_controls_gu7c2_87",bo="_arrows_gu7c2_97",xo="_dots_gu7c2_107",wo="_dot_gu7c2_107",vo="_dotActive_gu7c2_133",z={carouselContainer:ao,viewport:io,slides:co,slide:lo,slideInner:uo,loaderOverlay:fo,image:po,loaded:go,loading:mo,empty:ho,controls:yo,arrows:bo,dots:xo,dot:wo,dotActive:vo},q=({images:t,autoPlay:e=!1,autoDelay:n=5,showArrows:o=!0,showDots:r=!0,variant:a,slidesPerView:s=1,slideSpacing:l=16,cornerRadius:i=0,"data-color":u,"data-size":m})=>{const{t:f}=An();R.useEffect(()=>{const _="rk-carousel-inline-styles";if(typeof document>"u"||document.getElementById(_))return;const k=So(z),O=document.createElement("style");O.id=_,O.textContent=k,document.head.appendChild(O)},[]);const p={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[x,c]=Wt(p),[g,h]=R.useState(0),[d,y]=R.useState([]),[w,T]=R.useState([]);R.useEffect(()=>{T(new Array((t==null?void 0:t.length)||0).fill(!1))},[t]);const C=R.useCallback(_=>{T(k=>{const O=[...k];return O[_]=!0,O})},[]),B=R.useMemo(()=>n*1e3,[n]),S=R.useCallback(()=>{c&&h(c.selectedScrollSnap())},[c]),A=R.useCallback(_=>c&&c.scrollTo(_),[c]),I=R.useCallback(()=>c&&c.scrollPrev(),[c]),P=R.useCallback(()=>c&&c.scrollNext(),[c]);R.useEffect(()=>{if(c)return c.on("select",S),c.on("reInit",S),y(c.scrollSnapList()),()=>{c.off("select",S),c.off("reInit",S)}},[c,S]),R.useEffect(()=>{c&&(c.reInit(),y(c.scrollSnapList()))},[c,t,s,l]),R.useEffect(()=>{if(!e||!c||!t||t.length<=1)return;const _=window.setInterval(()=>{c.canScrollNext()&&c.scrollNext()},B);return()=>{window.clearInterval(_)}},[e,B,c,t]);const D=Math.max(1,s),N=`${100/D}%`,M=l/2;return v.jsxs("div",{className:z.carouselContainer,"data-color":u,"data-size":m,"data-variant":a,children:[v.jsx("div",{className:z.viewport,ref:x,children:v.jsx("div",{className:z.slides,style:{marginLeft:`-${M}px`,marginRight:`-${M}px`},children:t&&t.length>0?t.map((_,k)=>v.jsx("div",{className:z.slide,style:{flex:`0 0 ${N}`,paddingLeft:`${M}px`,paddingRight:`${M}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:v.jsxs("div",{className:z.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!w[k]&&v.jsx("div",{className:z.loaderOverlay,children:v.jsx(ln,{"aria-label":f("carousel.loading")})}),v.jsx("img",{className:`${z.image} ${w[k]?z.loaded:z.loadingImage}`,src:_.src,alt:_.alt,loading:k<D?"eager":"lazy",crossOrigin:"anonymous",onLoad:()=>C(k),onError:O=>{O.target.style.display="none",C(k)}})]})},`image-${k}-${_.src}`)):v.jsx("div",{className:z.slide,style:{flex:"0 0 100%"},children:v.jsx("div",{className:z.empty,children:"Ingen bilder"})})})}),(o||r&&t&&t.length>1)&&v.jsxs("div",{className:z.controls,"aria-hidden":"false",children:[o&&v.jsxs("div",{className:z.arrows,children:[v.jsx(re,{variant:"primary",icon:!0,"aria-label":f("carousel.previousImage"),onClick:I,disabled:!t||t.length<=1,children:v.jsx(Tn,{"aria-hidden":!0})}),v.jsx(re,{variant:"primary",icon:!0,"aria-label":f("carousel.nextImage"),onClick:P,disabled:!t||t.length<=1,children:v.jsx(Bn,{"aria-hidden":!0})})]}),r&&t&&t.length>1&&v.jsx("div",{className:z.dots,role:"tablist","aria-label":f("carousel.imagePosition"),children:d.map((_,k)=>{const O=k===g;return v.jsx("button",{type:"button",className:`${z.dot} ${O?z.dotActive:""}`,onClick:()=>A(k),"aria-label":`${f("carousel.goToImage")} ${k+1}`,"aria-selected":O,role:"tab"},`dot-${k}`)})})]})]})};q.displayName="Carousel";function So(t){return`
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
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const{expect:E,within:wt,userEvent:Ct,waitFor:K}=__STORYBOOK_MODULE_TEST__,Ao={title:"Components/Carousel",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Color token"}}},xt={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:t=>v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(q,{...t})})},It={args:{...xt.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:t=>v.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(q,{...t})})},To="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",Bo=["jpg","jpeg","png"],Io={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},ue=t=>t.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase());function de(t,e,n){const o=Io[e];return o?`${t}/${o.path}/${n}`:`${t}/images/spaces/${e}/${n}`}function Eo(){const t=new Map,e=new Map;return function(o){if(t.has(o))return Promise.resolve(t.get(o));if(e.has(o))return e.get(o);const r=new Promise(a=>{const s=new Image;s.crossOrigin="anonymous";const l=u=>{t.set(o,u),e.delete(o),a(u)},i=window.setTimeout(()=>{s.src="",l(!1)},5e3);s.onload=()=>{window.clearTimeout(i),l(!0)},s.onerror=()=>{window.clearTimeout(i),l(!1)},s.src=o});return e.set(o,r),r}}const fe=Eo();async function Do(t,e){const n=[];for(let r=1;r<=6;r++){const a=r.toString().padStart(2,"0");let s=!1;for(const l of Bo){const i=`${e}_${a}.${l}`,u=de(t,e,i);if(!s&&await fe(u)){n.push({src:u,alt:ue(i)}),s=!0;break}const m=`${e.toLowerCase()}_${a}.${l}`,f=de(t,e,m);if(!s&&await fe(f)){n.push({src:f,alt:ue(m)}),s=!0;break}}}return n}const Et={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:t=>v.jsx(Co,{...t})};function Co(t){const[e,n]=se.useState(null),o="Konferanselokaler",r=To;return se.useEffect(()=>{let a=!1;return(async()=>{const s=await Do(r,o);a||n(s)})(),()=>{a=!0}},[r,o]),v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:e===null?v.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[v.jsx(ln,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):v.jsx(q,{...t,images:e,slidesPerView:1})})}const it=[{src:"https://picsum.photos/seed/test1/800/600",alt:"Test bilde 1"},{src:"https://picsum.photos/seed/test2/800/600",alt:"Test bilde 2"},{src:"https://picsum.photos/seed/test3/800/600",alt:"Test bilde 3"}],dt={name:"Test: Arrow Navigation",args:{images:it,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=wt(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.getByRole("button",{name:/neste/i}),o=e.getByRole("button",{name:/forrige/i}),r=e.getAllByRole("tab");E(r.length).toBe(3),E(r[0]).toHaveAttribute("aria-selected","true"),await Ct.click(n),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")}),await Ct.click(n),await K(()=>{E(r[2]).toHaveAttribute("aria-selected","true")}),await Ct.click(o),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")})}},ft={name:"Test: Dot Navigation",args:{images:it,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=wt(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.getAllByRole("tab");E(n[0]).toHaveAttribute("aria-selected","true"),await Ct.click(n[2]),await K(()=>{E(n[2]).toHaveAttribute("aria-selected","true")}),await Ct.click(n[0]),await K(()=>{E(n[0]).toHaveAttribute("aria-selected","true")})}},pt={name:"Test: Single Image (Disabled Arrows)",args:{images:[it[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=wt(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.getByRole("button",{name:/neste/i}),o=e.getByRole("button",{name:/forrige/i});E(n).toBeDisabled(),E(o).toBeDisabled();const r=e.queryAllByRole("tab");E(r.length).toBe(0)}},gt={name:"Test: Hidden Arrows",args:{images:it,showArrows:!1,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=wt(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.queryByRole("button",{name:/neste/i}),o=e.queryByRole("button",{name:/forrige/i});E(n).not.toBeInTheDocument(),E(o).not.toBeInTheDocument();const r=e.getAllByRole("tab");E(r.length).toBe(3)}},mt={name:"Test: Hidden Dots",args:{images:it,showArrows:!0,showDots:!1,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=wt(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.queryAllByRole("tab");E(n.length).toBe(0);const o=e.getByRole("button",{name:/neste/i});E(o).toBeInTheDocument()}},ht={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{E(t.textContent).toContain("Ingen bilder")}},yt={name:"Test: Image Alt Text",args:{images:it,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{await K(()=>{const n=t.querySelectorAll("img");E(n.length).toBeGreaterThan(0)}),t.querySelectorAll("img").forEach(n=>{E(n).toHaveAttribute("alt"),E(n.getAttribute("alt")).not.toBe("")})}},bt={name:"Test: Dots Accessibility",args:{images:it,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=wt(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.getByRole("tablist");E(n).toBeInTheDocument(),E(n).toHaveAttribute("aria-label"),e.getAllByRole("tab").forEach(r=>{E(r).toHaveAttribute("aria-label"),E(r).toHaveAttribute("aria-selected")})}};var pe,ge,me;xt.parameters={...xt.parameters,docs:{...(pe=xt.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ge=xt.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,ye,be;It.parameters={...It.parameters,docs:{...(he=It.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(ye=It.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var xe,we,ve;Et.parameters={...Et.parameters,docs:{...(xe=Et.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(ve=(we=Et.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Se,Ae,Te,Be,Ie;dt.parameters={...dt.parameters,docs:{...(Se=dt.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(Ae=dt.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(Ie=(Be=dt.parameters)==null?void 0:Be.docs)==null?void 0:Ie.description}}};var Ee,De,Ce,ke,je;ft.parameters={...ft.parameters,docs:{...(Ee=ft.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(De=ft.parameters)==null?void 0:De.docs)==null?void 0:Ce.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...(je=(ke=ft.parameters)==null?void 0:ke.docs)==null?void 0:je.description}}};var _e,Le,Fe,Pe,Re;pt.parameters={...pt.parameters,docs:{...(_e=pt.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Fe=(Le=pt.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Re=(Pe=pt.parameters)==null?void 0:Pe.docs)==null?void 0:Re.description}}};var $e,Oe,ze,Ne,Me;gt.parameters={...gt.parameters,docs:{...($e=gt.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(ze=(Oe=gt.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...(Me=(Ne=gt.parameters)==null?void 0:Ne.docs)==null?void 0:Me.description}}};var He,Ve,qe,Ge,Ue;mt.parameters={...mt.parameters,docs:{...(He=mt.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(qe=(Ve=mt.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(Ue=(Ge=mt.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.description}}};var Ke,We,Xe,Qe,Je;ht.parameters={...ht.parameters,docs:{...(Ke=ht.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Xe=(We=ht.parameters)==null?void 0:We.docs)==null?void 0:Xe.source},description:{story:"Tests that empty state is handled gracefully.",...(Je=(Qe=ht.parameters)==null?void 0:Qe.docs)==null?void 0:Je.description}}};var Ye,Ze,tn,en,nn;yt.parameters={...yt.parameters,docs:{...(Ye=yt.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(tn=(Ze=yt.parameters)==null?void 0:Ze.docs)==null?void 0:tn.source},description:{story:"Tests that images have proper alt text for accessibility.",...(nn=(en=yt.parameters)==null?void 0:en.docs)==null?void 0:nn.description}}};var on,sn,rn,an,cn;bt.parameters={...bt.parameters,docs:{...(on=bt.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
    dots.forEach(dot => {
      expect(dot).toHaveAttribute('aria-label');
      expect(dot).toHaveAttribute('aria-selected');
    });
  }
}`,...(rn=(sn=bt.parameters)==null?void 0:sn.docs)==null?void 0:rn.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(cn=(an=bt.parameters)==null?void 0:an.docs)==null?void 0:cn.description}}};const ko=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility"],Ro=Object.freeze(Object.defineProperty({__proto__:null,Default:xt,MultipleSlides:It,TestArrowNavigation:dt,TestDotNavigation:ft,TestDotsAccessibility:bt,TestEmptyState:ht,TestHiddenArrows:gt,TestHiddenDots:mt,TestImageAltText:yt,TestSingleImageDisabledArrows:pt,WithSupabase:Et,__namedExportsOrder:ko,default:Ao},Symbol.toStringTag,{value:"Module"}));export{Ro as C};
