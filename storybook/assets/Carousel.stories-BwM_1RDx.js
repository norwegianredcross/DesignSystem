import{r as R,j as v,R as st}from"./iframe-B7CwtMXO.js";import{B as rt}from"./index-DGCz_ayJ.js";import{S as ln}from"./index-DUxqWVJZ.js";import{u as An}from"./LanguageContext-lboSSfij.js";import{S as Tn,a as Bn}from"./ChevronRight-BXlamdEX.js";function In(e){return Object.prototype.toString.call(e)==="[object Object]"}function at(e){return In(e)||Array.isArray(e)}function En(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function qe(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const r=JSON.stringify(Object.keys(e.breakpoints||{})),a=JSON.stringify(Object.keys(t.breakpoints||{}));return r!==a?!1:n.every(s=>{const l=e[s],i=t[s];return typeof l=="function"?`${l}`==`${i}`:!at(l)||!at(i)?l===i:qe(l,i)})}function it(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function Dn(e,t){if(e.length!==t.length)return!1;const n=it(e),o=it(t);return n.every((r,a)=>{const s=o[a];return qe(r,s)})}function Ge(e){return typeof e=="number"}function He(e){return typeof e=="string"}function Re(e){return typeof e=="boolean"}function ct(e){return Object.prototype.toString.call(e)==="[object Object]"}function F(e){return Math.abs(e)}function Ue(e){return Math.sign(e)}function De(e,t){return F(e-t)}function Cn(e,t){if(e===0||t===0||F(e)<=F(t))return 0;const n=De(F(e),F(t));return F(n/e)}function kn(e){return Math.round(e*100)/100}function ke(e){return je(e).map(Number)}function W(e){return e[Le(e)]}function Le(e){return Math.max(0,e.length-1)}function Ke(e,t){return t===Le(e)}function lt(e,t=0){return Array.from(Array(e),(n,o)=>t+o)}function je(e){return Object.keys(e)}function un(e,t){return[e,t].reduce((n,o)=>(je(o).forEach(r=>{const a=n[r],s=o[r],l=ct(a)&&ct(s);n[r]=l?un(a,s):s}),n),{})}function Ve(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function jn(e,t){const n={start:o,center:r,end:a};function o(){return 0}function r(i){return a(i)/2}function a(i){return t-i}function s(i,u){return He(e)?n[e](i):e(t,i,u)}return{measure:s}}function _e(){let e=[];function t(r,a,s,l={passive:!0}){let i;if("addEventListener"in r)r.addEventListener(a,s,l),i=()=>r.removeEventListener(a,s,l);else{const u=r;u.addListener(s),i=()=>u.removeListener(s)}return e.push(i),o}function n(){e=e.filter(r=>r())}const o={add:t,clear:n};return o}function _n(e,t,n,o){const r=_e(),a=1e3/60;let s=null,l=0,i=0;function u(){r.add(e,"visibilitychange",()=>{e.hidden&&c()})}function m(){x(),r.clear()}function f(h){if(!i)return;s||(s=h,n(),n());const d=h-s;for(s=h,l+=d;l>=a;)n(),l-=a;const y=l/a;o(y),i&&(i=t.requestAnimationFrame(f))}function p(){i||(i=t.requestAnimationFrame(f))}function x(){t.cancelAnimationFrame(i),s=null,l=0,i=0}function c(){s=null,l=0}return{init:u,destroy:m,start:p,stop:x,update:n,render:o}}function Ln(e,t){const n=t==="rtl",o=e==="y",r=o?"y":"x",a=o?"x":"y",s=!o&&n?-1:1,l=m(),i=f();function u(c){const{height:g,width:h}=c;return o?g:h}function m(){return o?"top":n?"right":"left"}function f(){return o?"bottom":n?"left":"right"}function p(c){return c*s}return{scroll:r,cross:a,startEdge:l,endEdge:i,measureSize:u,direction:p}}function ae(e=0,t=0){const n=F(e-t);function o(u){return u<e}function r(u){return u>t}function a(u){return o(u)||r(u)}function s(u){return a(u)?o(u)?e:t:u}function l(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:s,reachedAny:a,reachedMax:r,reachedMin:o,removeOffset:l}}function dn(e,t,n){const{constrain:o}=ae(0,e),r=e+1;let a=s(t);function s(p){return n?F((r+p)%r):o(p)}function l(){return a}function i(p){return a=s(p),f}function u(p){return m().set(l()+p)}function m(){return dn(e,l(),n)}const f={get:l,set:i,add:u,clone:m};return f}function Fn(e,t,n,o,r,a,s,l,i,u,m,f,p,x,c,g,h,d,y){const{cross:w,direction:T}=e,C=["INPUT","SELECT","TEXTAREA"],B={passive:!1},S=_e(),A=_e(),I=ae(50,225).constrain(x.measure(20)),P={mouse:300,touch:400},D={mouse:500,touch:600},N=c?43:25;let M=!1,_=0,k=0,O=!1,ne=!1,J=!1,Y=!1;function ve(b){if(!y)return;function j(V){(Re(y)||y(b,V))&&Ae(V)}const $=t;S.add($,"dragstart",V=>V.preventDefault(),B).add($,"touchmove",()=>{},B).add($,"touchend",()=>{}).add($,"touchstart",j).add($,"mousedown",j).add($,"touchcancel",H).add($,"contextmenu",H).add($,"click",ee,!0)}function X(){S.clear(),A.clear()}function ce(){const b=Y?n:t;A.add(b,"touchmove",G,B).add(b,"touchend",H).add(b,"mousemove",G,B).add(b,"mouseup",H)}function le(b){const j=b.nodeName||"";return C.includes(j)}function Z(){return(c?D:P)[Y?"mouse":"touch"]}function Se(b,j){const $=f.add(Ue(b)*-1),V=m.byDistance(b,!c).distance;return c||F(b)<I?V:h&&j?V*.5:m.byIndex($.get(),0).distance}function Ae(b){const j=Ve(b,o);Y=j,J=c&&j&&!b.buttons&&M,M=De(r.get(),s.get())>=2,!(j&&b.button!==0)&&(le(b.target)||(O=!0,a.pointerDown(b),u.useFriction(0).useDuration(0),r.set(s),ce(),_=a.readPoint(b),k=a.readPoint(b,w),p.emit("pointerDown")))}function G(b){if(!Ve(b,o)&&b.touches.length>=2)return H(b);const $=a.readPoint(b),V=a.readPoint(b,w),Q=De($,_),te=De(V,k);if(!ne&&!Y&&(!b.cancelable||(ne=Q>te,!ne)))return H(b);const se=a.pointerMove(b);Q>g&&(J=!0),u.useFriction(.3).useDuration(.75),l.start(),r.add(T(se)),b.preventDefault()}function H(b){const $=m.byDistance(0,!1).index!==f.get(),V=a.pointerUp(b)*Z(),Q=Se(T(V),$),te=Cn(V,Q),se=N-10*te,oe=d+te/50;ne=!1,O=!1,A.clear(),u.useDuration(se).useFriction(oe),i.distance(Q,!c),Y=!1,p.emit("pointerUp")}function ee(b){J&&(b.stopPropagation(),b.preventDefault(),J=!1)}function U(){return O}return{init:ve,destroy:X,pointerDown:U}}function Pn(e,t){let o,r;function a(f){return f.timeStamp}function s(f,p){const c=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(Ve(f,t)?f:f.touches[0])[c]}function l(f){return o=f,r=f,s(f)}function i(f){const p=s(f)-s(r),x=a(f)-a(o)>170;return r=f,x&&(o=f),p}function u(f){if(!o||!r)return 0;const p=s(r)-s(o),x=a(f)-a(o),c=a(f)-a(r)>170,g=p/x;return x&&!c&&F(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:u,readPoint:s}}function Rn(){function e(n){const{offsetTop:o,offsetLeft:r,offsetWidth:a,offsetHeight:s}=n;return{top:o,right:r+a,bottom:o+s,left:r,width:a,height:s}}return{measure:e}}function $n(e){function t(o){return e*(o/100)}return{measure:t}}function On(e,t,n,o,r,a,s){const l=[e].concat(o);let i,u,m=[],f=!1;function p(h){return r.measureSize(s.measure(h))}function x(h){if(!a)return;u=p(e),m=o.map(p);function d(y){for(const w of y){if(f)return;const T=w.target===e,C=o.indexOf(w.target),B=T?u:m[C],S=p(T?e:o[C]);if(F(S-B)>=.5){h.reInit(),t.emit("resize");break}}}i=new ResizeObserver(y=>{(Re(a)||a(h,y))&&d(y)}),n.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function c(){f=!0,i&&i.disconnect()}return{init:x,destroy:c}}function zn(e,t,n,o,r,a){let s=0,l=0,i=r,u=a,m=e.get(),f=0;function p(){const B=o.get()-e.get(),S=!i;let A=0;return S?(s=0,n.set(o),e.set(o),A=B):(n.set(e),s+=B/i,s*=u,m+=s,e.add(s),A=m-f),l=Ue(A),f=m,C}function x(){const B=o.get()-t.get();return F(B)<.001}function c(){return i}function g(){return l}function h(){return s}function d(){return w(r)}function y(){return T(a)}function w(B){return i=B,C}function T(B){return u=B,C}const C={direction:g,duration:c,velocity:h,seek:p,settled:x,useBaseFriction:y,useBaseDuration:d,useFriction:T,useDuration:w};return C}function Nn(e,t,n,o,r){const a=r.measure(10),s=r.measure(50),l=ae(.1,.99);let i=!1;function u(){return!(i||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function m(x){if(!u())return;const c=e.reachedMin(t.get())?"min":"max",g=F(e[c]-t.get()),h=n.get()-t.get(),d=l.constrain(g/s);n.subtract(h*d),!x&&F(h)<a&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function f(x){i=!x}return{shouldConstrain:u,constrain:m,toggleActive:f}}function Mn(e,t,n,o,r){const a=ae(-t+e,0),s=f(),l=m(),i=p();function u(c,g){return De(c,g)<=1}function m(){const c=s[0],g=W(s),h=s.lastIndexOf(c),d=s.indexOf(g)+1;return ae(h,d)}function f(){return n.map((c,g)=>{const{min:h,max:d}=a,y=a.constrain(c),w=!g,T=Ke(n,g);return w?d:T||u(h,y)?h:u(d,y)?d:y}).map(c=>parseFloat(c.toFixed(3)))}function p(){if(t<=e+r)return[a.max];if(o==="keepSnaps")return s;const{min:c,max:g}=l;return s.slice(c,g)}return{snapsContained:i,scrollContainLimit:l}}function Hn(e,t,n){const o=t[0],r=n?o-e:W(t);return{limit:ae(r,o)}}function Vn(e,t,n,o){const a=t.min+.1,s=t.max+.1,{reachedMin:l,reachedMax:i}=ae(a,s);function u(p){return p===1?i(n.get()):p===-1?l(n.get()):!1}function m(p){if(!u(p))return;const x=e*(p*-1);o.forEach(c=>c.add(x))}return{loop:m}}function qn(e){const{max:t,length:n}=e;function o(a){const s=a-t;return n?s/-n:0}return{get:o}}function Gn(e,t,n,o,r){const{startEdge:a,endEdge:s}=e,{groupSlides:l}=r,i=f().map(t.measure),u=p(),m=x();function f(){return l(o).map(g=>W(g)[s]-g[0][a]).map(F)}function p(){return o.map(g=>n[a]-g[a]).map(g=>-F(g))}function x(){return l(u).map(g=>g[0]).map((g,h)=>g+i[h])}return{snaps:u,snapsAligned:m}}function Un(e,t,n,o,r,a){const{groupSlides:s}=r,{min:l,max:i}=o,u=m();function m(){const p=s(a),x=!e||t==="keepSnaps";return n.length===1?[a]:x?p:p.slice(l,i).map((c,g,h)=>{const d=!g,y=Ke(h,g);if(d){const w=W(h[0])+1;return lt(w)}if(y){const w=Le(a)-W(h)[0]+1;return lt(w,W(h)[0])}return c})}return{slideRegistry:u}}function Kn(e,t,n,o,r){const{reachedAny:a,removeOffset:s,constrain:l}=o;function i(c){return c.concat().sort((g,h)=>F(g)-F(h))[0]}function u(c){const g=e?s(c):l(c),h=t.map((y,w)=>({diff:m(y-g,0),index:w})).sort((y,w)=>F(y.diff)-F(w.diff)),{index:d}=h[0];return{index:d,distance:g}}function m(c,g){const h=[c,c+n,c-n];if(!e)return c;if(!g)return i(h);const d=h.filter(y=>Ue(y)===g);return d.length?i(d):W(h)-n}function f(c,g){const h=t[c]-r.get(),d=m(h,g);return{index:c,distance:d}}function p(c,g){const h=r.get()+c,{index:d,distance:y}=u(h),w=!e&&a(h);if(!g||w)return{index:d,distance:c};const T=t[d]-y,C=c+m(T,0);return{index:d,distance:C}}return{byDistance:p,byIndex:f,shortcut:m}}function Wn(e,t,n,o,r,a,s){function l(f){const p=f.distance,x=f.index!==t.get();a.add(p),p&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),x&&(n.set(t.get()),t.set(f.index),s.emit("select"))}function i(f,p){const x=r.byDistance(f,p);l(x)}function u(f,p){const x=t.clone().set(f),c=r.byIndex(x.get(),p);l(c)}return{distance:i,index:u}}function Xn(e,t,n,o,r,a,s,l){const i={passive:!0,capture:!0};let u=0;function m(x){if(!l)return;function c(g){if(new Date().getTime()-u>10)return;s.emit("slideFocusStart"),e.scrollLeft=0;const y=n.findIndex(w=>w.includes(g));Ge(y)&&(r.useDuration(0),o.index(y,0),s.emit("slideFocus"))}a.add(document,"keydown",f,!1),t.forEach((g,h)=>{a.add(g,"focus",d=>{(Re(l)||l(x,d))&&c(h)},i)})}function f(x){x.code==="Tab"&&(u=new Date().getTime())}return{init:m}}function Be(e){let t=e;function n(){return t}function o(i){t=s(i)}function r(i){t+=s(i)}function a(i){t-=s(i)}function s(i){return Ge(i)?i:i.get()}return{get:n,set:o,add:r,subtract:a}}function fn(e,t){const n=e.scroll==="x"?s:l,o=t.style;let r=null,a=!1;function s(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(a)return;const x=kn(e.direction(p));x!==r&&(o.transform=n(x),r=x)}function u(p){a=!p}function m(){a||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:m,to:i,toggleActive:u}}function Qn(e,t,n,o,r,a,s,l,i){const m=ke(r),f=ke(r).reverse(),p=d().concat(y());function x(S,A){return S.reduce((I,P)=>I-r[P],A)}function c(S,A){return S.reduce((I,P)=>x(I,A)>0?I.concat([P]):I,[])}function g(S){return a.map((A,I)=>({start:A-o[I]+.5+S,end:A+t-.5+S}))}function h(S,A,I){const P=g(A);return S.map(D=>{const N=I?0:-n,M=I?n:0,_=I?"end":"start",k=P[D][_];return{index:D,loopPoint:k,slideLocation:Be(-1),translate:fn(e,i[D]),target:()=>l.get()>k?N:M}})}function d(){const S=s[0],A=c(f,S);return h(A,n,!1)}function y(){const S=t-s[0]-1,A=c(m,S);return h(A,-n,!0)}function w(){return p.every(({index:S})=>{const A=m.filter(I=>I!==S);return x(A,t)<=.1})}function T(){p.forEach(S=>{const{target:A,translate:I,slideLocation:P}=S,D=A();D!==P.get()&&(I.to(D),P.set(D))})}function C(){p.forEach(S=>S.translate.clear())}return{canLoop:w,clear:C,loop:T,loopPoints:p}}function Jn(e,t,n){let o,r=!1;function a(i){if(!n)return;function u(m){for(const f of m)if(f.type==="childList"){i.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(m=>{r||(Re(n)||n(i,m))&&u(m)}),o.observe(e,{childList:!0})}function s(){o&&o.disconnect(),r=!0}return{init:a,destroy:s}}function Yn(e,t,n,o){const r={};let a=null,s=null,l,i=!1;function u(){l=new IntersectionObserver(c=>{i||(c.forEach(g=>{const h=t.indexOf(g.target);r[h]=g}),a=null,s=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(c=>l.observe(c))}function m(){l&&l.disconnect(),i=!0}function f(c){return je(r).reduce((g,h)=>{const d=parseInt(h),{isIntersecting:y}=r[d];return(c&&y||!c&&!y)&&g.push(d),g},[])}function p(c=!0){if(c&&a)return a;if(!c&&s)return s;const g=f(c);return c&&(a=g),c||(s=g),g}return{init:u,destroy:m,get:p}}function Zn(e,t,n,o,r,a){const{measureSize:s,startEdge:l,endEdge:i}=e,u=n[0]&&r,m=c(),f=g(),p=n.map(s),x=h();function c(){if(!u)return 0;const y=n[0];return F(t[l]-y[l])}function g(){if(!u)return 0;const y=a.getComputedStyle(W(o));return parseFloat(y.getPropertyValue(`margin-${i}`))}function h(){return n.map((y,w,T)=>{const C=!w,B=Ke(T,w);return C?p[w]+m:B?p[w]+f:T[w+1][l]-y[l]}).map(F)}return{slideSizes:p,slideSizesWithGaps:x,startGap:m,endGap:f}}function eo(e,t,n,o,r,a,s,l,i){const{startEdge:u,endEdge:m,direction:f}=e,p=Ge(n);function x(d,y){return ke(d).filter(w=>w%y===0).map(w=>d.slice(w,w+y))}function c(d){return d.length?ke(d).reduce((y,w,T)=>{const C=W(y)||0,B=C===0,S=w===Le(d),A=r[u]-a[C][u],I=r[u]-a[w][m],P=!o&&B?f(s):0,D=!o&&S?f(l):0,N=F(I-D-(A+P));return T&&N>t+i&&y.push(w),S&&y.push(d.length),y},[]).map((y,w,T)=>{const C=Math.max(T[w-1]||0);return d.slice(C,y)}):[]}function g(d){return p?x(d,n):c(d)}return{groupSlides:g}}function to(e,t,n,o,r,a,s){const{align:l,axis:i,direction:u,startIndex:m,loop:f,duration:p,dragFree:x,dragThreshold:c,inViewThreshold:g,slidesToScroll:h,skipSnaps:d,containScroll:y,watchResize:w,watchSlides:T,watchDrag:C,watchFocus:B}=a,S=2,A=Rn(),I=A.measure(t),P=n.map(A.measure),D=Ln(i,u),N=D.measureSize(I),M=$n(N),_=jn(l,N),k=!f&&!!y,O=f||!!y,{slideSizes:ne,slideSizesWithGaps:J,startGap:Y,endGap:ve}=Zn(D,I,P,n,O,r),X=eo(D,N,h,f,I,P,Y,ve,S),{snaps:ce,snapsAligned:le}=Gn(D,_,I,P,X),Z=-W(ce)+W(J),{snapsContained:Se,scrollContainLimit:Ae}=Mn(N,Z,le,y,S),G=k?Se:le,{limit:H}=Hn(Z,G,f),ee=dn(Le(G),m,f),U=ee.clone(),L=ke(n),b=({dragHandler:ue,scrollBody:Ne,scrollBounds:Me,options:{loop:Fe}})=>{Fe||Me.constrain(ue.pointerDown()),Ne.seek()},j=({scrollBody:ue,translate:Ne,location:Me,offsetLocation:Fe,previousLocation:mn,scrollLooper:hn,slideLooper:yn,dragHandler:bn,animation:xn,eventHandler:Ye,scrollBounds:wn,options:{loop:Ze}},et)=>{const tt=ue.settled(),vn=!wn.shouldConstrain(),nt=Ze?tt:tt&&vn,ot=nt&&!bn.pointerDown();ot&&xn.stop();const Sn=Me.get()*et+mn.get()*(1-et);Fe.set(Sn),Ze&&(hn.loop(ue.direction()),yn.loop()),Ne.to(Fe.get()),ot&&Ye.emit("settle"),nt||Ye.emit("scroll")},$=_n(o,r,()=>b(ze),ue=>j(ze,ue)),V=.68,Q=G[ee.get()],te=Be(Q),se=Be(Q),oe=Be(Q),re=Be(Q),Te=zn(te,oe,se,re,p,V),$e=Kn(f,G,Z,H,re),Oe=Wn($,ee,U,Te,$e,re,s),Xe=qn(H),Qe=_e(),pn=Yn(t,n,s,g),{slideRegistry:Je}=Un(k,y,G,Ae,X,L),gn=Xn(e,n,Je,Oe,Te,Qe,s,B),ze={ownerDocument:o,ownerWindow:r,eventHandler:s,containerRect:I,slideRects:P,animation:$,axis:D,dragHandler:Fn(D,e,o,r,re,Pn(D,r),te,$,Oe,Te,$e,ee,s,M,x,c,d,V,C),eventStore:Qe,percentOfView:M,index:ee,indexPrevious:U,limit:H,location:te,offsetLocation:oe,previousLocation:se,options:a,resizeHandler:On(t,s,r,n,D,w,A),scrollBody:Te,scrollBounds:Nn(H,oe,re,Te,M),scrollLooper:Vn(Z,H,oe,[te,oe,se,re]),scrollProgress:Xe,scrollSnapList:G.map(Xe.get),scrollSnaps:G,scrollTarget:$e,scrollTo:Oe,slideLooper:Qn(D,N,Z,ne,J,ce,G,oe,n),slideFocus:gn,slidesHandler:Jn(t,s,T),slidesInView:pn,slideIndexes:L,slideRegistry:Je,slidesToScroll:X,target:re,translate:fn(D,t)};return ze}function no(){let e={},t;function n(u){t=u}function o(u){return e[u]||[]}function r(u){return o(u).forEach(m=>m(t,u)),i}function a(u,m){return e[u]=o(u).concat([m]),i}function s(u,m){return e[u]=o(u).filter(f=>f!==m),i}function l(){e={}}const i={init:n,emit:r,off:s,on:a,clear:l};return i}const oo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function so(e){function t(a,s){return un(a,s||{})}function n(a){const s=a.breakpoints||{},l=je(s).filter(i=>e.matchMedia(i).matches).map(i=>s[i]).reduce((i,u)=>t(i,u),{});return t(a,l)}function o(a){return a.map(s=>je(s.breakpoints||{})).reduce((s,l)=>s.concat(l),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function ro(e){let t=[];function n(a,s){return t=s.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),t.forEach(l=>l.init(a,e)),s.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function o(){t=t.filter(a=>a.destroy())}return{init:n,destroy:o}}function Pe(e,t,n){const o=e.ownerDocument,r=o.defaultView,a=so(r),s=ro(a),l=_e(),i=no(),{mergeOptions:u,optionsAtMedia:m,optionsMediaQueries:f}=a,{on:p,off:x,emit:c}=i,g=D;let h=!1,d,y=u(oo,Pe.globalOptions),w=u(y),T=[],C,B,S;function A(){const{container:L,slides:b}=w;B=(He(L)?e.querySelector(L):L)||e.children[0];const $=He(b)?B.querySelectorAll(b):b;S=[].slice.call($||B.children)}function I(L){const b=to(e,B,S,o,r,L,i);if(L.loop&&!b.slideLooper.canLoop()){const j=Object.assign({},L,{loop:!1});return I(j)}return b}function P(L,b){h||(y=u(y,L),w=m(y),T=b||T,A(),d=I(w),f([y,...T.map(({options:j})=>j)]).forEach(j=>l.add(j,"change",D)),w.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(U),d.eventHandler.init(U),d.resizeHandler.init(U),d.slidesHandler.init(U),d.options.loop&&d.slideLooper.loop(),B.offsetParent&&S.length&&d.dragHandler.init(U),C=s.init(U,T)))}function D(L,b){const j=X();N(),P(u({startIndex:j},L),b),i.emit("reInit")}function N(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),s.destroy(),l.clear()}function M(){h||(h=!0,l.clear(),N(),i.emit("destroy"),i.clear())}function _(L,b,j){!w.active||h||(d.scrollBody.useBaseFriction().useDuration(b===!0?0:w.duration),d.scrollTo.index(L,j||0))}function k(L){const b=d.index.add(1).get();_(b,L,-1)}function O(L){const b=d.index.add(-1).get();_(b,L,1)}function ne(){return d.index.add(1).get()!==X()}function J(){return d.index.add(-1).get()!==X()}function Y(){return d.scrollSnapList}function ve(){return d.scrollProgress.get(d.offsetLocation.get())}function X(){return d.index.get()}function ce(){return d.indexPrevious.get()}function le(){return d.slidesInView.get()}function Z(){return d.slidesInView.get(!1)}function Se(){return C}function Ae(){return d}function G(){return e}function H(){return B}function ee(){return S}const U={canScrollNext:ne,canScrollPrev:J,containerNode:H,internalEngine:Ae,destroy:M,off:x,on:p,emit:c,plugins:Se,previousScrollSnap:ce,reInit:g,rootNode:G,scrollNext:k,scrollPrev:O,scrollProgress:ve,scrollSnapList:Y,scrollTo:_,selectedScrollSnap:X,slideNodes:ee,slidesInView:le,slidesNotInView:Z};return P(t,n),setTimeout(()=>i.emit("init"),0),U}Pe.globalOptions=void 0;function We(e={},t=[]){const n=R.useRef(e),o=R.useRef(t),[r,a]=R.useState(),[s,l]=R.useState(),i=R.useCallback(()=>{r&&r.reInit(n.current,o.current)},[r]);return R.useEffect(()=>{qe(n.current,e)||(n.current=e,i())},[e,i]),R.useEffect(()=>{Dn(o.current,t)||(o.current=t,i())},[t,i]),R.useEffect(()=>{if(En()&&s){Pe.globalOptions=We.globalOptions;const u=Pe(s,n.current,o.current);return a(u),()=>u.destroy()}else a(void 0)},[s,a]),[l,r]}We.globalOptions=void 0;const ao="_carouselContainer_eo3g5_1",io="_viewport_eo3g5_14",co="_slides_eo3g5_20",lo="_slide_eo3g5_20",uo="_slideInner_eo3g5_40",fo="_loaderOverlay_eo3g5_48",po="_image_eo3g5_58",go="_loaded_eo3g5_69",mo="_loading_eo3g5_73",ho="_empty_eo3g5_81",yo="_controls_eo3g5_87",bo="_arrows_eo3g5_97",xo="_dots_eo3g5_107",wo="_dot_eo3g5_107",vo="_dotActive_eo3g5_133",z={carouselContainer:ao,viewport:io,slides:co,slide:lo,slideInner:uo,loaderOverlay:fo,image:po,loaded:go,loading:mo,empty:ho,controls:yo,arrows:bo,dots:xo,dot:wo,dotActive:vo},q=({images:e,autoPlay:t=!1,autoDelay:n=5,showArrows:o=!0,showDots:r=!0,variant:a,slidesPerView:s=1,slideSpacing:l=16,cornerRadius:i=0,"data-color":u,"data-size":m})=>{const{t:f}=An();R.useEffect(()=>{const _="rk-carousel-inline-styles";if(typeof document>"u"||document.getElementById(_))return;const k=So(z),O=document.createElement("style");O.id=_,O.textContent=k,document.head.appendChild(O)},[]);const p={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[x,c]=We(p),[g,h]=R.useState(0),[d,y]=R.useState([]),[w,T]=R.useState([]);R.useEffect(()=>{T(new Array((e==null?void 0:e.length)||0).fill(!1))},[e]);const C=R.useCallback(_=>{T(k=>{const O=[...k];return O[_]=!0,O})},[]),B=R.useMemo(()=>n*1e3,[n]),S=R.useCallback(()=>{c&&h(c.selectedScrollSnap())},[c]),A=R.useCallback(_=>c&&c.scrollTo(_),[c]),I=R.useCallback(()=>c&&c.scrollPrev(),[c]),P=R.useCallback(()=>c&&c.scrollNext(),[c]);R.useEffect(()=>{if(c)return c.on("select",S),c.on("reInit",S),y(c.scrollSnapList()),()=>{c.off("select",S),c.off("reInit",S)}},[c,S]),R.useEffect(()=>{c&&(c.reInit(),y(c.scrollSnapList()))},[c,e,s,l]),R.useEffect(()=>{if(!t||!c||!e||e.length<=1)return;const _=window.setInterval(()=>{c.canScrollNext()&&c.scrollNext()},B);return()=>{window.clearInterval(_)}},[t,B,c,e]);const D=Math.max(1,s),N=`${100/D}%`,M=l/2;return v.jsxs("div",{className:z.carouselContainer,"data-color":u,"data-size":m,"data-variant":a,children:[v.jsx("div",{className:z.viewport,ref:x,children:v.jsx("div",{className:z.slides,style:{marginLeft:`-${M}px`,marginRight:`-${M}px`},children:e&&e.length>0?e.map((_,k)=>v.jsx("div",{className:z.slide,style:{flex:`0 0 ${N}`,paddingLeft:`${M}px`,paddingRight:`${M}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:v.jsxs("div",{className:z.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!w[k]&&v.jsx("div",{className:z.loaderOverlay,children:v.jsx(ln,{"aria-label":f("carousel.loading")})}),v.jsx("img",{className:`${z.image} ${w[k]?z.loaded:z.loadingImage}`,src:_.src,alt:_.alt,loading:k<D?"eager":"lazy",crossOrigin:"anonymous",onLoad:()=>C(k),onError:O=>{O.target.style.display="none",C(k)}})]})},`image-${k}-${_.src}`)):v.jsx("div",{className:z.slide,style:{flex:"0 0 100%"},children:v.jsx("div",{className:z.empty,children:"Ingen bilder"})})})}),(o||r&&e&&e.length>1)&&v.jsxs("div",{className:z.controls,"aria-hidden":"false",children:[o&&v.jsxs("div",{className:z.arrows,children:[v.jsx(rt,{variant:"primary",icon:!0,"aria-label":f("carousel.previousImage"),onClick:I,disabled:!e||e.length<=1,children:v.jsx(Tn,{"aria-hidden":!0})}),v.jsx(rt,{variant:"primary",icon:!0,"aria-label":f("carousel.nextImage"),onClick:P,disabled:!e||e.length<=1,children:v.jsx(Bn,{"aria-hidden":!0})})]}),r&&e&&e.length>1&&v.jsx("div",{className:z.dots,role:"tablist","aria-label":f("carousel.imagePosition"),children:d.map((_,k)=>{const O=k===g;return v.jsx("button",{type:"button",className:`${z.dot} ${O?z.dotActive:""}`,onClick:()=>A(k),"aria-label":`${f("carousel.goToImage")} ${k+1}`,"aria-selected":O,role:"tab"},`dot-${k}`)})})]})]})};q.displayName="Carousel";function So(e){return`
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
  background-color: var(--ds-color-neutral-surface-subtle, #f5f5f5);
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
  font-size: var(--ds-font-size-sm, 14px);
}
.${e.empty} {
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-sm, 14px);
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
`}try{q.displayName="Carousel",q.__docgenInfo={description:`Carousel-komponent for å vise en bildeserie.
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const{expect:E,within:we,userEvent:Ce,waitFor:K}=__STORYBOOK_MODULE_TEST__,Ao={title:"Components/Carousel",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Color token"}}},xe={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:e=>v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(q,{...e})})},Ie={args:{...xe.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:e=>v.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(q,{...e})})},To="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",Bo=["jpg","jpeg","png"],Io={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},ut=e=>e.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,t=>t.toUpperCase());function dt(e,t,n){const o=Io[t];return o?`${e}/${o.path}/${n}`:`${e}/images/spaces/${t}/${n}`}function Eo(){const e=new Map,t=new Map;return function(o){if(e.has(o))return Promise.resolve(e.get(o));if(t.has(o))return t.get(o);const r=new Promise(a=>{const s=new Image;s.crossOrigin="anonymous";const l=u=>{e.set(o,u),t.delete(o),a(u)},i=window.setTimeout(()=>{s.src="",l(!1)},5e3);s.onload=()=>{window.clearTimeout(i),l(!0)},s.onerror=()=>{window.clearTimeout(i),l(!1)},s.src=o});return t.set(o,r),r}}const ft=Eo();async function Do(e,t){const n=[];for(let r=1;r<=6;r++){const a=r.toString().padStart(2,"0");let s=!1;for(const l of Bo){const i=`${t}_${a}.${l}`,u=dt(e,t,i);if(!s&&await ft(u)){n.push({src:u,alt:ut(i)}),s=!0;break}const m=`${t.toLowerCase()}_${a}.${l}`,f=dt(e,t,m);if(!s&&await ft(f)){n.push({src:f,alt:ut(m)}),s=!0;break}}}return n}const Ee={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:e=>v.jsx(Co,{...e})};function Co(e){const[t,n]=st.useState(null),o="Konferanselokaler",r=To;return st.useEffect(()=>{let a=!1;return(async()=>{const s=await Do(r,o);a||n(s)})(),()=>{a=!0}},[r,o]),v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:t===null?v.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[v.jsx(ln,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):v.jsx(q,{...e,images:t,slidesPerView:1})})}const ie=[{src:"https://picsum.photos/seed/test1/800/600",alt:"Test bilde 1"},{src:"https://picsum.photos/seed/test2/800/600",alt:"Test bilde 2"},{src:"https://picsum.photos/seed/test3/800/600",alt:"Test bilde 3"}],de={name:"Test: Arrow Navigation",args:{images:ie,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{const t=we(e);await K(()=>{E(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i}),r=t.getAllByRole("tab");E(r.length).toBe(3),E(r[0]).toHaveAttribute("aria-selected","true"),await Ce.click(n),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")}),await Ce.click(n),await K(()=>{E(r[2]).toHaveAttribute("aria-selected","true")}),await Ce.click(o),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")})}},fe={name:"Test: Dot Navigation",args:{images:ie,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{const t=we(e);await K(()=>{E(t.getAllByRole("tab").length).toBe(3)});const n=t.getAllByRole("tab");E(n[0]).toHaveAttribute("aria-selected","true"),await Ce.click(n[2]),await K(()=>{E(n[2]).toHaveAttribute("aria-selected","true")}),await Ce.click(n[0]),await K(()=>{E(n[0]).toHaveAttribute("aria-selected","true")})}},pe={name:"Test: Single Image (Disabled Arrows)",args:{images:[ie[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{const t=we(e);await K(()=>{E(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i});E(n).toBeDisabled(),E(o).toBeDisabled();const r=t.queryAllByRole("tab");E(r.length).toBe(0)}},ge={name:"Test: Hidden Arrows",args:{images:ie,showArrows:!1,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{const t=we(e);await K(()=>{E(t.getAllByRole("tab").length).toBe(3)});const n=t.queryByRole("button",{name:/neste/i}),o=t.queryByRole("button",{name:/forrige/i});E(n).not.toBeInTheDocument(),E(o).not.toBeInTheDocument();const r=t.getAllByRole("tab");E(r.length).toBe(3)}},me={name:"Test: Hidden Dots",args:{images:ie,showArrows:!0,showDots:!1,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{const t=we(e);await K(()=>{E(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.queryAllByRole("tab");E(n.length).toBe(0);const o=t.getByRole("button",{name:/neste/i});E(o).toBeInTheDocument()}},he={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{E(e.textContent).toContain("Ingen bilder")}},ye={name:"Test: Image Alt Text",args:{images:ie,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{await K(()=>{const n=e.querySelectorAll("img");E(n.length).toBeGreaterThan(0)}),e.querySelectorAll("img").forEach(n=>{E(n).toHaveAttribute("alt"),E(n.getAttribute("alt")).not.toBe("")})}},be={name:"Test: Dots Accessibility",args:{images:ie,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...e})}),play:async({canvasElement:e})=>{const t=we(e);await K(()=>{E(t.getAllByRole("tab").length).toBe(3)});const n=t.getByRole("tablist");E(n).toBeInTheDocument(),E(n).toHaveAttribute("aria-label"),t.getAllByRole("tab").forEach(r=>{E(r).toHaveAttribute("aria-label"),E(r).toHaveAttribute("aria-selected")})}};var pt,gt,mt;xe.parameters={...xe.parameters,docs:{...(pt=xe.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(mt=(gt=xe.parameters)==null?void 0:gt.docs)==null?void 0:mt.source}}};var ht,yt,bt;Ie.parameters={...Ie.parameters,docs:{...(ht=Ie.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(bt=(yt=Ie.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var xt,wt,vt;Ee.parameters={...Ee.parameters,docs:{...(xt=Ee.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(vt=(wt=Ee.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var St,At,Tt,Bt,It;de.parameters={...de.parameters,docs:{...(St=de.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Tt=(At=de.parameters)==null?void 0:At.docs)==null?void 0:Tt.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(It=(Bt=de.parameters)==null?void 0:Bt.docs)==null?void 0:It.description}}};var Et,Dt,Ct,kt,jt;fe.parameters={...fe.parameters,docs:{...(Et=fe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Ct=(Dt=fe.parameters)==null?void 0:Dt.docs)==null?void 0:Ct.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...(jt=(kt=fe.parameters)==null?void 0:kt.docs)==null?void 0:jt.description}}};var _t,Lt,Ft,Pt,Rt;pe.parameters={...pe.parameters,docs:{...(_t=pe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Ft=(Lt=pe.parameters)==null?void 0:Lt.docs)==null?void 0:Ft.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Rt=(Pt=pe.parameters)==null?void 0:Pt.docs)==null?void 0:Rt.description}}};var $t,Ot,zt,Nt,Mt;ge.parameters={...ge.parameters,docs:{...($t=ge.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(zt=(Ot=ge.parameters)==null?void 0:Ot.docs)==null?void 0:zt.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...(Mt=(Nt=ge.parameters)==null?void 0:Nt.docs)==null?void 0:Mt.description}}};var Ht,Vt,qt,Gt,Ut;me.parameters={...me.parameters,docs:{...(Ht=me.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(qt=(Vt=me.parameters)==null?void 0:Vt.docs)==null?void 0:qt.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(Ut=(Gt=me.parameters)==null?void 0:Gt.docs)==null?void 0:Ut.description}}};var Kt,Wt,Xt,Qt,Jt;he.parameters={...he.parameters,docs:{...(Kt=he.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Xt=(Wt=he.parameters)==null?void 0:Wt.docs)==null?void 0:Xt.source},description:{story:"Tests that empty state is handled gracefully.",...(Jt=(Qt=he.parameters)==null?void 0:Qt.docs)==null?void 0:Jt.description}}};var Yt,Zt,en,tn,nn;ye.parameters={...ye.parameters,docs:{...(Yt=ye.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=ye.parameters)==null?void 0:Zt.docs)==null?void 0:en.source},description:{story:"Tests that images have proper alt text for accessibility.",...(nn=(tn=ye.parameters)==null?void 0:tn.docs)==null?void 0:nn.description}}};var on,sn,rn,an,cn;be.parameters={...be.parameters,docs:{...(on=be.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=be.parameters)==null?void 0:sn.docs)==null?void 0:rn.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(cn=(an=be.parameters)==null?void 0:an.docs)==null?void 0:cn.description}}};const ko=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility"],Ro=Object.freeze(Object.defineProperty({__proto__:null,Default:xe,MultipleSlides:Ie,TestArrowNavigation:de,TestDotNavigation:fe,TestDotsAccessibility:be,TestEmptyState:he,TestHiddenArrows:ge,TestHiddenDots:me,TestImageAltText:ye,TestSingleImageDisabledArrows:pe,WithSupabase:Ee,__namedExportsOrder:ko,default:Ao},Symbol.toStringTag,{value:"Module"}));export{Ro as C};
