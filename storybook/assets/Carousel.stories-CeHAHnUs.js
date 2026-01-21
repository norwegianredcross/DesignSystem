import{r as P,j as v,R as oe}from"./iframe-DRa3M5wu.js";import{B as re}from"./index-CHogi9AC.js";import{S as ln}from"./index-D8QApYGt.js";import{u as An}from"./LanguageContext-DWovA45M.js";import{S as Tn,a as Bn}from"./ChevronRight-Dprudmiv.js";function In(t){return Object.prototype.toString.call(t)==="[object Object]"}function ae(t){return In(t)||Array.isArray(t)}function En(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function qt(t,e){const n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;const r=JSON.stringify(Object.keys(t.breakpoints||{})),a=JSON.stringify(Object.keys(e.breakpoints||{}));return r!==a?!1:n.every(o=>{const l=t[o],i=e[o];return typeof l=="function"?`${l}`==`${i}`:!ae(l)||!ae(i)?l===i:qt(l,i)})}function ie(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Dn(t,e){if(t.length!==e.length)return!1;const n=ie(t),s=ie(e);return n.every((r,a)=>{const o=s[a];return qt(r,o)})}function Gt(t){return typeof t=="number"}function Vt(t){return typeof t=="string"}function Pt(t){return typeof t=="boolean"}function ce(t){return Object.prototype.toString.call(t)==="[object Object]"}function _(t){return Math.abs(t)}function Ut(t){return Math.sign(t)}function Dt(t,e){return _(t-e)}function Cn(t,e){if(t===0||e===0||_(t)<=_(e))return 0;const n=Dt(_(t),_(e));return _(n/t)}function jn(t){return Math.round(t*100)/100}function jt(t){return kt(t).map(Number)}function W(t){return t[_t(t)]}function _t(t){return Math.max(0,t.length-1)}function Kt(t,e){return e===_t(t)}function le(t,e=0){return Array.from(Array(t),(n,s)=>e+s)}function kt(t){return Object.keys(t)}function un(t,e){return[t,e].reduce((n,s)=>(kt(s).forEach(r=>{const a=n[r],o=s[r],l=ce(a)&&ce(o);n[r]=l?un(a,o):o}),n),{})}function zt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function kn(t,e){const n={start:s,center:r,end:a};function s(){return 0}function r(i){return a(i)/2}function a(i){return e-i}function o(i,u){return Vt(t)?n[t](i):t(e,i,u)}return{measure:o}}function Lt(){let t=[];function e(r,a,o,l={passive:!0}){let i;if("addEventListener"in r)r.addEventListener(a,o,l),i=()=>r.removeEventListener(a,o,l);else{const u=r;u.addListener(o),i=()=>u.removeListener(o)}return t.push(i),s}function n(){t=t.filter(r=>r())}const s={add:e,clear:n};return s}function Ln(t,e,n,s){const r=Lt(),a=1e3/60;let o=null,l=0,i=0;function u(){r.add(t,"visibilitychange",()=>{t.hidden&&c()})}function m(){w(),r.clear()}function f(h){if(!i)return;o||(o=h,n(),n());const d=h-o;for(o=h,l+=d;l>=a;)n(),l-=a;const y=l/a;s(y),i&&(i=e.requestAnimationFrame(f))}function p(){i||(i=e.requestAnimationFrame(f))}function w(){e.cancelAnimationFrame(i),o=null,l=0,i=0}function c(){o=null,l=0}return{init:u,destroy:m,start:p,stop:w,update:n,render:s}}function _n(t,e){const n=e==="rtl",s=t==="y",r=s?"y":"x",a=s?"x":"y",o=!s&&n?-1:1,l=m(),i=f();function u(c){const{height:g,width:h}=c;return s?g:h}function m(){return s?"top":n?"right":"left"}function f(){return s?"bottom":n?"left":"right"}function p(c){return c*o}return{scroll:r,cross:a,startEdge:l,endEdge:i,measureSize:u,direction:p}}function at(t=0,e=0){const n=_(t-e);function s(u){return u<t}function r(u){return u>e}function a(u){return s(u)||r(u)}function o(u){return a(u)?s(u)?t:e:u}function l(u){return n?u-n*Math.ceil((u-e)/n):u}return{length:n,max:e,min:t,constrain:o,reachedAny:a,reachedMax:r,reachedMin:s,removeOffset:l}}function dn(t,e,n){const{constrain:s}=at(0,t),r=t+1;let a=o(e);function o(p){return n?_((r+p)%r):s(p)}function l(){return a}function i(p){return a=o(p),f}function u(p){return m().set(l()+p)}function m(){return dn(t,l(),n)}const f={get:l,set:i,add:u,clone:m};return f}function Rn(t,e,n,s,r,a,o,l,i,u,m,f,p,w,c,g,h,d,y){const{cross:x,direction:T}=t,C=["INPUT","SELECT","TEXTAREA"],B={passive:!1},S=Lt(),A=Lt(),I=at(50,225).constrain(w.measure(20)),R={mouse:300,touch:400},D={mouse:500,touch:600},N=c?43:25;let H=!1,F=0,k=0,$=!1,nt=!1,J=!1,Y=!1;function vt(b){if(!y)return;function j(z){(Pt(y)||y(b,z))&&At(z)}const O=e;S.add(O,"dragstart",z=>z.preventDefault(),B).add(O,"touchmove",()=>{},B).add(O,"touchend",()=>{}).add(O,"touchstart",j).add(O,"mousedown",j).add(O,"touchcancel",V).add(O,"contextmenu",V).add(O,"click",tt,!0)}function Q(){S.clear(),A.clear()}function lt(){const b=Y?n:e;A.add(b,"touchmove",G,B).add(b,"touchend",V).add(b,"mousemove",G,B).add(b,"mouseup",V)}function ut(b){const j=b.nodeName||"";return C.includes(j)}function Z(){return(c?D:R)[Y?"mouse":"touch"]}function St(b,j){const O=f.add(Ut(b)*-1),z=m.byDistance(b,!c).distance;return c||_(b)<I?z:h&&j?z*.5:m.byIndex(O.get(),0).distance}function At(b){const j=zt(b,s);Y=j,J=c&&j&&!b.buttons&&H,H=Dt(r.get(),o.get())>=2,!(j&&b.button!==0)&&(ut(b.target)||($=!0,a.pointerDown(b),u.useFriction(0).useDuration(0),r.set(o),lt(),F=a.readPoint(b),k=a.readPoint(b,x),p.emit("pointerDown")))}function G(b){if(!zt(b,s)&&b.touches.length>=2)return V(b);const O=a.readPoint(b),z=a.readPoint(b,x),X=Dt(O,F),et=Dt(z,k);if(!nt&&!Y&&(!b.cancelable||(nt=X>et,!nt)))return V(b);const ot=a.pointerMove(b);X>g&&(J=!0),u.useFriction(.3).useDuration(.75),l.start(),r.add(T(ot)),b.preventDefault()}function V(b){const O=m.byDistance(0,!1).index!==f.get(),z=a.pointerUp(b)*Z(),X=St(T(z),O),et=Cn(z,X),ot=N-10*et,st=d+et/50;nt=!1,$=!1,A.clear(),u.useDuration(ot).useFriction(st),i.distance(X,!c),Y=!1,p.emit("pointerUp")}function tt(b){J&&(b.stopPropagation(),b.preventDefault(),J=!1)}function U(){return $}return{init:vt,destroy:Q,pointerDown:U}}function Fn(t,e){let s,r;function a(f){return f.timeStamp}function o(f,p){const c=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(zt(f,e)?f:f.touches[0])[c]}function l(f){return s=f,r=f,o(f)}function i(f){const p=o(f)-o(r),w=a(f)-a(s)>170;return r=f,w&&(s=f),p}function u(f){if(!s||!r)return 0;const p=o(r)-o(s),w=a(f)-a(s),c=a(f)-a(r)>170,g=p/w;return w&&!c&&_(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:u,readPoint:o}}function Pn(){function t(n){const{offsetTop:s,offsetLeft:r,offsetWidth:a,offsetHeight:o}=n;return{top:s,right:r+a,bottom:s+o,left:r,width:a,height:o}}return{measure:t}}function On(t){function e(s){return t*(s/100)}return{measure:e}}function Nn(t,e,n,s,r,a,o){const l=[t].concat(s);let i,u,m=[],f=!1;function p(h){return r.measureSize(o.measure(h))}function w(h){if(!a)return;u=p(t),m=s.map(p);function d(y){for(const x of y){if(f)return;const T=x.target===t,C=s.indexOf(x.target),B=T?u:m[C],S=p(T?t:s[C]);if(_(S-B)>=.5){h.reInit(),e.emit("resize");break}}}i=new ResizeObserver(y=>{(Pt(a)||a(h,y))&&d(y)}),n.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function c(){f=!0,i&&i.disconnect()}return{init:w,destroy:c}}function Mn(t,e,n,s,r,a){let o=0,l=0,i=r,u=a,m=t.get(),f=0;function p(){const B=s.get()-t.get(),S=!i;let A=0;return S?(o=0,n.set(s),t.set(s),A=B):(n.set(t),o+=B/i,o*=u,m+=o,t.add(o),A=m-f),l=Ut(A),f=m,C}function w(){const B=s.get()-e.get();return _(B)<.001}function c(){return i}function g(){return l}function h(){return o}function d(){return x(r)}function y(){return T(a)}function x(B){return i=B,C}function T(B){return u=B,C}const C={direction:g,duration:c,velocity:h,seek:p,settled:w,useBaseFriction:y,useBaseDuration:d,useFriction:T,useDuration:x};return C}function Hn(t,e,n,s,r){const a=r.measure(10),o=r.measure(50),l=at(.1,.99);let i=!1;function u(){return!(i||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function m(w){if(!u())return;const c=t.reachedMin(e.get())?"min":"max",g=_(t[c]-e.get()),h=n.get()-e.get(),d=l.constrain(g/o);n.subtract(h*d),!w&&_(h)<a&&(n.set(t.constrain(n.get())),s.useDuration(25).useBaseFriction())}function f(w){i=!w}return{shouldConstrain:u,constrain:m,toggleActive:f}}function $n(t,e,n,s,r){const a=at(-e+t,0),o=f(),l=m(),i=p();function u(c,g){return Dt(c,g)<=1}function m(){const c=o[0],g=W(o),h=o.lastIndexOf(c),d=o.indexOf(g)+1;return at(h,d)}function f(){return n.map((c,g)=>{const{min:h,max:d}=a,y=a.constrain(c),x=!g,T=Kt(n,g);return x?d:T||u(h,y)?h:u(d,y)?d:y}).map(c=>parseFloat(c.toFixed(3)))}function p(){if(e<=t+r)return[a.max];if(s==="keepSnaps")return o;const{min:c,max:g}=l;return o.slice(c,g)}return{snapsContained:i,scrollContainLimit:l}}function Vn(t,e,n){const s=e[0],r=n?s-t:W(e);return{limit:at(r,s)}}function zn(t,e,n,s){const a=e.min+.1,o=e.max+.1,{reachedMin:l,reachedMax:i}=at(a,o);function u(p){return p===1?i(n.get()):p===-1?l(n.get()):!1}function m(p){if(!u(p))return;const w=t*(p*-1);s.forEach(c=>c.add(w))}return{loop:m}}function qn(t){const{max:e,length:n}=t;function s(a){const o=a-e;return n?o/-n:0}return{get:s}}function Gn(t,e,n,s,r){const{startEdge:a,endEdge:o}=t,{groupSlides:l}=r,i=f().map(e.measure),u=p(),m=w();function f(){return l(s).map(g=>W(g)[o]-g[0][a]).map(_)}function p(){return s.map(g=>n[a]-g[a]).map(g=>-_(g))}function w(){return l(u).map(g=>g[0]).map((g,h)=>g+i[h])}return{snaps:u,snapsAligned:m}}function Un(t,e,n,s,r,a){const{groupSlides:o}=r,{min:l,max:i}=s,u=m();function m(){const p=o(a),w=!t||e==="keepSnaps";return n.length===1?[a]:w?p:p.slice(l,i).map((c,g,h)=>{const d=!g,y=Kt(h,g);if(d){const x=W(h[0])+1;return le(x)}if(y){const x=_t(a)-W(h)[0]+1;return le(x,W(h)[0])}return c})}return{slideRegistry:u}}function Kn(t,e,n,s,r){const{reachedAny:a,removeOffset:o,constrain:l}=s;function i(c){return c.concat().sort((g,h)=>_(g)-_(h))[0]}function u(c){const g=t?o(c):l(c),h=e.map((y,x)=>({diff:m(y-g,0),index:x})).sort((y,x)=>_(y.diff)-_(x.diff)),{index:d}=h[0];return{index:d,distance:g}}function m(c,g){const h=[c,c+n,c-n];if(!t)return c;if(!g)return i(h);const d=h.filter(y=>Ut(y)===g);return d.length?i(d):W(h)-n}function f(c,g){const h=e[c]-r.get(),d=m(h,g);return{index:c,distance:d}}function p(c,g){const h=r.get()+c,{index:d,distance:y}=u(h),x=!t&&a(h);if(!g||x)return{index:d,distance:c};const T=e[d]-y,C=c+m(T,0);return{index:d,distance:C}}return{byDistance:p,byIndex:f,shortcut:m}}function Wn(t,e,n,s,r,a,o){function l(f){const p=f.distance,w=f.index!==e.get();a.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),w&&(n.set(e.get()),e.set(f.index),o.emit("select"))}function i(f,p){const w=r.byDistance(f,p);l(w)}function u(f,p){const w=e.clone().set(f),c=r.byIndex(w.get(),p);l(c)}return{distance:i,index:u}}function Qn(t,e,n,s,r,a,o,l){const i={passive:!0,capture:!0};let u=0;function m(w){if(!l)return;function c(g){if(new Date().getTime()-u>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const y=n.findIndex(x=>x.includes(g));Gt(y)&&(r.useDuration(0),s.index(y,0),o.emit("slideFocus"))}a.add(document,"keydown",f,!1),e.forEach((g,h)=>{a.add(g,"focus",d=>{(Pt(l)||l(w,d))&&c(h)},i)})}function f(w){w.code==="Tab"&&(u=new Date().getTime())}return{init:m}}function Bt(t){let e=t;function n(){return e}function s(i){e=o(i)}function r(i){e+=o(i)}function a(i){e-=o(i)}function o(i){return Gt(i)?i:i.get()}return{get:n,set:s,add:r,subtract:a}}function fn(t,e){const n=t.scroll==="x"?o:l,s=e.style;let r=null,a=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(a)return;const w=jn(t.direction(p));w!==r&&(s.transform=n(w),r=w)}function u(p){a=!p}function m(){a||(s.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:m,to:i,toggleActive:u}}function Xn(t,e,n,s,r,a,o,l,i){const m=jt(r),f=jt(r).reverse(),p=d().concat(y());function w(S,A){return S.reduce((I,R)=>I-r[R],A)}function c(S,A){return S.reduce((I,R)=>w(I,A)>0?I.concat([R]):I,[])}function g(S){return a.map((A,I)=>({start:A-s[I]+.5+S,end:A+e-.5+S}))}function h(S,A,I){const R=g(A);return S.map(D=>{const N=I?0:-n,H=I?n:0,F=I?"end":"start",k=R[D][F];return{index:D,loopPoint:k,slideLocation:Bt(-1),translate:fn(t,i[D]),target:()=>l.get()>k?N:H}})}function d(){const S=o[0],A=c(f,S);return h(A,n,!1)}function y(){const S=e-o[0]-1,A=c(m,S);return h(A,-n,!0)}function x(){return p.every(({index:S})=>{const A=m.filter(I=>I!==S);return w(A,e)<=.1})}function T(){p.forEach(S=>{const{target:A,translate:I,slideLocation:R}=S,D=A();D!==R.get()&&(I.to(D),R.set(D))})}function C(){p.forEach(S=>S.translate.clear())}return{canLoop:x,clear:C,loop:T,loopPoints:p}}function Jn(t,e,n){let s,r=!1;function a(i){if(!n)return;function u(m){for(const f of m)if(f.type==="childList"){i.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(m=>{r||(Pt(n)||n(i,m))&&u(m)}),s.observe(t,{childList:!0})}function o(){s&&s.disconnect(),r=!0}return{init:a,destroy:o}}function Yn(t,e,n,s){const r={};let a=null,o=null,l,i=!1;function u(){l=new IntersectionObserver(c=>{i||(c.forEach(g=>{const h=e.indexOf(g.target);r[h]=g}),a=null,o=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(c=>l.observe(c))}function m(){l&&l.disconnect(),i=!0}function f(c){return kt(r).reduce((g,h)=>{const d=parseInt(h),{isIntersecting:y}=r[d];return(c&&y||!c&&!y)&&g.push(d),g},[])}function p(c=!0){if(c&&a)return a;if(!c&&o)return o;const g=f(c);return c&&(a=g),c||(o=g),g}return{init:u,destroy:m,get:p}}function Zn(t,e,n,s,r,a){const{measureSize:o,startEdge:l,endEdge:i}=t,u=n[0]&&r,m=c(),f=g(),p=n.map(o),w=h();function c(){if(!u)return 0;const y=n[0];return _(e[l]-y[l])}function g(){if(!u)return 0;const y=a.getComputedStyle(W(s));return parseFloat(y.getPropertyValue(`margin-${i}`))}function h(){return n.map((y,x,T)=>{const C=!x,B=Kt(T,x);return C?p[x]+m:B?p[x]+f:T[x+1][l]-y[l]}).map(_)}return{slideSizes:p,slideSizesWithGaps:w,startGap:m,endGap:f}}function ts(t,e,n,s,r,a,o,l,i){const{startEdge:u,endEdge:m,direction:f}=t,p=Gt(n);function w(d,y){return jt(d).filter(x=>x%y===0).map(x=>d.slice(x,x+y))}function c(d){return d.length?jt(d).reduce((y,x,T)=>{const C=W(y)||0,B=C===0,S=x===_t(d),A=r[u]-a[C][u],I=r[u]-a[x][m],R=!s&&B?f(o):0,D=!s&&S?f(l):0,N=_(I-D-(A+R));return T&&N>e+i&&y.push(x),S&&y.push(d.length),y},[]).map((y,x,T)=>{const C=Math.max(T[x-1]||0);return d.slice(C,y)}):[]}function g(d){return p?w(d,n):c(d)}return{groupSlides:g}}function es(t,e,n,s,r,a,o){const{align:l,axis:i,direction:u,startIndex:m,loop:f,duration:p,dragFree:w,dragThreshold:c,inViewThreshold:g,slidesToScroll:h,skipSnaps:d,containScroll:y,watchResize:x,watchSlides:T,watchDrag:C,watchFocus:B}=a,S=2,A=Pn(),I=A.measure(e),R=n.map(A.measure),D=_n(i,u),N=D.measureSize(I),H=On(N),F=kn(l,N),k=!f&&!!y,$=f||!!y,{slideSizes:nt,slideSizesWithGaps:J,startGap:Y,endGap:vt}=Zn(D,I,R,n,$,r),Q=ts(D,N,h,f,I,R,Y,vt,S),{snaps:lt,snapsAligned:ut}=Gn(D,F,I,R,Q),Z=-W(lt)+W(J),{snapsContained:St,scrollContainLimit:At}=$n(N,Z,ut,y,S),G=k?St:ut,{limit:V}=Vn(Z,G,f),tt=dn(_t(G),m,f),U=tt.clone(),L=jt(n),b=({dragHandler:dt,scrollBody:Ht,scrollBounds:$t,options:{loop:Rt}})=>{Rt||$t.constrain(dt.pointerDown()),Ht.seek()},j=({scrollBody:dt,translate:Ht,location:$t,offsetLocation:Rt,previousLocation:mn,scrollLooper:hn,slideLooper:yn,dragHandler:bn,animation:wn,eventHandler:Yt,scrollBounds:xn,options:{loop:Zt}},te)=>{const ee=dt.settled(),vn=!xn.shouldConstrain(),ne=Zt?ee:ee&&vn,se=ne&&!bn.pointerDown();se&&wn.stop();const Sn=$t.get()*te+mn.get()*(1-te);Rt.set(Sn),Zt&&(hn.loop(dt.direction()),yn.loop()),Ht.to(Rt.get()),se&&Yt.emit("settle"),ne||Yt.emit("scroll")},O=Ln(s,r,()=>b(Mt),dt=>j(Mt,dt)),z=.68,X=G[tt.get()],et=Bt(X),ot=Bt(X),st=Bt(X),rt=Bt(X),Tt=Mn(et,st,ot,rt,p,z),Ot=Kn(f,G,Z,V,rt),Nt=Wn(O,tt,U,Tt,Ot,rt,o),Qt=qn(V),Xt=Lt(),pn=Yn(e,n,o,g),{slideRegistry:Jt}=Un(k,y,G,At,Q,L),gn=Qn(t,n,Jt,Nt,Tt,Xt,o,B),Mt={ownerDocument:s,ownerWindow:r,eventHandler:o,containerRect:I,slideRects:R,animation:O,axis:D,dragHandler:Rn(D,t,s,r,rt,Fn(D,r),et,O,Nt,Tt,Ot,tt,o,H,w,c,d,z,C),eventStore:Xt,percentOfView:H,index:tt,indexPrevious:U,limit:V,location:et,offsetLocation:st,previousLocation:ot,options:a,resizeHandler:Nn(e,o,r,n,D,x,A),scrollBody:Tt,scrollBounds:Hn(V,st,rt,Tt,H),scrollLooper:zn(Z,V,st,[et,st,ot,rt]),scrollProgress:Qt,scrollSnapList:G.map(Qt.get),scrollSnaps:G,scrollTarget:Ot,scrollTo:Nt,slideLooper:Xn(D,N,Z,nt,J,lt,G,st,n),slideFocus:gn,slidesHandler:Jn(e,o,T),slidesInView:pn,slideIndexes:L,slideRegistry:Jt,slidesToScroll:Q,target:rt,translate:fn(D,e)};return Mt}function ns(){let t={},e;function n(u){e=u}function s(u){return t[u]||[]}function r(u){return s(u).forEach(m=>m(e,u)),i}function a(u,m){return t[u]=s(u).concat([m]),i}function o(u,m){return t[u]=s(u).filter(f=>f!==m),i}function l(){t={}}const i={init:n,emit:r,off:o,on:a,clear:l};return i}const ss={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function os(t){function e(a,o){return un(a,o||{})}function n(a){const o=a.breakpoints||{},l=kt(o).filter(i=>t.matchMedia(i).matches).map(i=>o[i]).reduce((i,u)=>e(i,u),{});return e(a,l)}function s(a){return a.map(o=>kt(o.breakpoints||{})).reduce((o,l)=>o.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:s}}function rs(t){let e=[];function n(a,o){return e=o.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(a,t)),o.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function s(){e=e.filter(a=>a.destroy())}return{init:n,destroy:s}}function Ft(t,e,n){const s=t.ownerDocument,r=s.defaultView,a=os(r),o=rs(a),l=Lt(),i=ns(),{mergeOptions:u,optionsAtMedia:m,optionsMediaQueries:f}=a,{on:p,off:w,emit:c}=i,g=D;let h=!1,d,y=u(ss,Ft.globalOptions),x=u(y),T=[],C,B,S;function A(){const{container:L,slides:b}=x;B=(Vt(L)?t.querySelector(L):L)||t.children[0];const O=Vt(b)?B.querySelectorAll(b):b;S=[].slice.call(O||B.children)}function I(L){const b=es(t,B,S,s,r,L,i);if(L.loop&&!b.slideLooper.canLoop()){const j=Object.assign({},L,{loop:!1});return I(j)}return b}function R(L,b){h||(y=u(y,L),x=m(y),T=b||T,A(),d=I(x),f([y,...T.map(({options:j})=>j)]).forEach(j=>l.add(j,"change",D)),x.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(U),d.eventHandler.init(U),d.resizeHandler.init(U),d.slidesHandler.init(U),d.options.loop&&d.slideLooper.loop(),B.offsetParent&&S.length&&d.dragHandler.init(U),C=o.init(U,T)))}function D(L,b){const j=Q();N(),R(u({startIndex:j},L),b),i.emit("reInit")}function N(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),o.destroy(),l.clear()}function H(){h||(h=!0,l.clear(),N(),i.emit("destroy"),i.clear())}function F(L,b,j){!x.active||h||(d.scrollBody.useBaseFriction().useDuration(b===!0?0:x.duration),d.scrollTo.index(L,j||0))}function k(L){const b=d.index.add(1).get();F(b,L,-1)}function $(L){const b=d.index.add(-1).get();F(b,L,1)}function nt(){return d.index.add(1).get()!==Q()}function J(){return d.index.add(-1).get()!==Q()}function Y(){return d.scrollSnapList}function vt(){return d.scrollProgress.get(d.offsetLocation.get())}function Q(){return d.index.get()}function lt(){return d.indexPrevious.get()}function ut(){return d.slidesInView.get()}function Z(){return d.slidesInView.get(!1)}function St(){return C}function At(){return d}function G(){return t}function V(){return B}function tt(){return S}const U={canScrollNext:nt,canScrollPrev:J,containerNode:V,internalEngine:At,destroy:H,off:w,on:p,emit:c,plugins:St,previousScrollSnap:lt,reInit:g,rootNode:G,scrollNext:k,scrollPrev:$,scrollProgress:vt,scrollSnapList:Y,scrollTo:F,selectedScrollSnap:Q,slideNodes:tt,slidesInView:ut,slidesNotInView:Z};return R(e,n),setTimeout(()=>i.emit("init"),0),U}Ft.globalOptions=void 0;function Wt(t={},e=[]){const n=P.useRef(t),s=P.useRef(e),[r,a]=P.useState(),[o,l]=P.useState(),i=P.useCallback(()=>{r&&r.reInit(n.current,s.current)},[r]);return P.useEffect(()=>{qt(n.current,t)||(n.current=t,i())},[t,i]),P.useEffect(()=>{Dn(s.current,e)||(s.current=e,i())},[e,i]),P.useEffect(()=>{if(En()&&o){Ft.globalOptions=Wt.globalOptions;const u=Ft(o,n.current,s.current);return a(u),()=>u.destroy()}else a(void 0)},[o,a]),[l,r]}Wt.globalOptions=void 0;const as="_carouselContainer_gu7c2_1",is="_viewport_gu7c2_14",cs="_slides_gu7c2_20",ls="_slide_gu7c2_20",us="_slideInner_gu7c2_40",ds="_loaderOverlay_gu7c2_48",fs="_image_gu7c2_58",ps="_loaded_gu7c2_69",gs="_empty_gu7c2_81",ms="_controls_gu7c2_87",hs="_arrows_gu7c2_97",ys="_dots_gu7c2_107",bs="_dot_gu7c2_107",ws="_dotActive_gu7c2_133",M={carouselContainer:as,viewport:is,slides:cs,slide:ls,slideInner:us,loaderOverlay:ds,image:fs,loaded:ps,empty:gs,controls:ms,arrows:hs,dots:ys,dot:bs,dotActive:ws},q=({images:t,autoPlay:e=!1,autoDelay:n=5,showArrows:s=!0,showDots:r=!0,variant:a,slidesPerView:o=1,slideSpacing:l=16,cornerRadius:i=0,"data-color":u,"data-size":m})=>{const{t:f}=An(),p={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[w,c]=Wt(p),[g,h]=P.useState(0),[d,y]=P.useState([]),[x,T]=P.useState([]);P.useEffect(()=>{T(new Array((t==null?void 0:t.length)||0).fill(!1))},[t]);const C=P.useCallback(F=>{T(k=>{const $=[...k];return $[F]=!0,$})},[]),B=P.useMemo(()=>n*1e3,[n]),S=P.useCallback(()=>{c&&h(c.selectedScrollSnap())},[c]),A=P.useCallback(F=>c&&c.scrollTo(F),[c]),I=P.useCallback(()=>c&&c.scrollPrev(),[c]),R=P.useCallback(()=>c&&c.scrollNext(),[c]);P.useEffect(()=>{if(c)return c.on("select",S),c.on("reInit",S),y(c.scrollSnapList()),()=>{c.off("select",S),c.off("reInit",S)}},[c,S]),P.useEffect(()=>{c&&(c.reInit(),y(c.scrollSnapList()))},[c,t,o,l]),P.useEffect(()=>{if(!e||!c||!t||t.length<=1)return;const F=window.setInterval(()=>{c.canScrollNext()&&c.scrollNext()},B);return()=>{window.clearInterval(F)}},[e,B,c,t]);const D=Math.max(1,o),N=`${100/D}%`,H=l/2;return v.jsxs("div",{className:M.carouselContainer,"data-color":u,"data-size":m,"data-variant":a,children:[v.jsx("div",{className:M.viewport,ref:w,children:v.jsx("div",{className:M.slides,style:{marginLeft:`-${H}px`,marginRight:`-${H}px`},children:t&&t.length>0?t.map((F,k)=>v.jsx("div",{className:M.slide,style:{flex:`0 0 ${N}`,paddingLeft:`${H}px`,paddingRight:`${H}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:v.jsxs("div",{className:M.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!x[k]&&v.jsx("div",{className:M.loaderOverlay,children:v.jsx(ln,{"aria-label":f("carousel.loading")})}),v.jsx("img",{className:`${M.image} ${x[k]?M.loaded:M.loadingImage}`,src:F.src,alt:F.alt,loading:k<D?"eager":"lazy",crossOrigin:"anonymous",onLoad:()=>C(k),onError:$=>{$.target.style.display="none",C(k)}})]})},`image-${k}-${F.src}`)):v.jsx("div",{className:M.slide,style:{flex:"0 0 100%"},children:v.jsx("div",{className:M.empty,children:"Ingen bilder"})})})}),(s||r&&t&&t.length>1)&&v.jsxs("div",{className:M.controls,"aria-hidden":"false",children:[s&&v.jsxs("div",{className:M.arrows,children:[v.jsx(re,{variant:"primary",icon:!0,"aria-label":f("carousel.previousImage"),onClick:I,disabled:!t||t.length<=1,children:v.jsx(Tn,{"aria-hidden":!0})}),v.jsx(re,{variant:"primary",icon:!0,"aria-label":f("carousel.nextImage"),onClick:R,disabled:!t||t.length<=1,children:v.jsx(Bn,{"aria-hidden":!0})})]}),r&&t&&t.length>1&&v.jsx("div",{className:M.dots,role:"tablist","aria-label":f("carousel.imagePosition"),children:d.map((F,k)=>{const $=k===g;return v.jsx("button",{type:"button",className:`${M.dot} ${$?M.dotActive:""}`,onClick:()=>A(k),"aria-label":`${f("carousel.goToImage")} ${k+1}`,"aria-selected":$,role:"tab"},`dot-${k}`)})})]})]})};q.displayName="Carousel";try{q.displayName="Carousel",q.__docgenInfo={description:`Carousel-komponent for å vise en bildeserie.
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const{expect:E,within:it,userEvent:Ct,waitFor:K}=__STORYBOOK_MODULE_TEST__,xs={title:"Components/Carousel",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Color token"}}},xt={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:t=>v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(q,{...t})})},It={args:{...xt.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:t=>v.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(q,{...t})})},vs="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",Ss=["jpg","jpeg","png"],As={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},ue=t=>t.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase());function de(t,e,n){const s=As[e];return s?`${t}/${s.path}/${n}`:`${t}/images/spaces/${e}/${n}`}function Ts(){const t=new Map,e=new Map;return function(s){if(t.has(s))return Promise.resolve(t.get(s));if(e.has(s))return e.get(s);const r=new Promise(a=>{const o=new Image;o.crossOrigin="anonymous";const l=u=>{t.set(s,u),e.delete(s),a(u)},i=window.setTimeout(()=>{o.src="",l(!1)},5e3);o.onload=()=>{window.clearTimeout(i),l(!0)},o.onerror=()=>{window.clearTimeout(i),l(!1)},o.src=s});return e.set(s,r),r}}const fe=Ts();async function Bs(t,e){const n=[];for(let r=1;r<=6;r++){const a=r.toString().padStart(2,"0");let o=!1;for(const l of Ss){const i=`${e}_${a}.${l}`,u=de(t,e,i);if(!o&&await fe(u)){n.push({src:u,alt:ue(i)}),o=!0;break}const m=`${e.toLowerCase()}_${a}.${l}`,f=de(t,e,m);if(!o&&await fe(f)){n.push({src:f,alt:ue(m)}),o=!0;break}}}return n}const Et={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:t=>v.jsx(Is,{...t})};function Is(t){const[e,n]=oe.useState(null),s="Konferanselokaler",r=vs;return oe.useEffect(()=>{let a=!1;return(async()=>{const o=await Bs(r,s);a||n(o)})(),()=>{a=!0}},[r,s]),v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:e===null?v.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[v.jsx(ln,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):v.jsx(q,{...t,images:e,slidesPerView:1})})}const ct=[{src:"https://picsum.photos/seed/test1/800/600",alt:"Test bilde 1"},{src:"https://picsum.photos/seed/test2/800/600",alt:"Test bilde 2"},{src:"https://picsum.photos/seed/test3/800/600",alt:"Test bilde 3"}],ft={name:"Test: Arrow Navigation",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.getByRole("button",{name:/neste/i}),s=e.getByRole("button",{name:/forrige/i}),r=e.getAllByRole("tab");E(r.length).toBe(3),E(r[0]).toHaveAttribute("aria-selected","true"),await Ct.click(n),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")}),await Ct.click(n),await K(()=>{E(r[2]).toHaveAttribute("aria-selected","true")}),await Ct.click(s),await K(()=>{E(r[1]).toHaveAttribute("aria-selected","true")})}},pt={name:"Test: Dot Navigation",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.getAllByRole("tab");E(n[0]).toHaveAttribute("aria-selected","true"),await Ct.click(n[2]),await K(()=>{E(n[2]).toHaveAttribute("aria-selected","true")}),await Ct.click(n[0]),await K(()=>{E(n[0]).toHaveAttribute("aria-selected","true")})}},gt={name:"Test: Single Image (Disabled Arrows)",args:{images:[ct[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.getByRole("button",{name:/neste/i}),s=e.getByRole("button",{name:/forrige/i});E(n).toBeDisabled(),E(s).toBeDisabled();const r=e.queryAllByRole("tab");E(r.length).toBe(0)}},mt={name:"Test: Hidden Arrows",args:{images:ct,showArrows:!1,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.queryByRole("button",{name:/neste/i}),s=e.queryByRole("button",{name:/forrige/i});E(n).not.toBeInTheDocument(),E(s).not.toBeInTheDocument();const r=e.getAllByRole("tab");E(r.length).toBe(3)}},ht={name:"Test: Hidden Dots",args:{images:ct,showArrows:!0,showDots:!1,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=e.queryAllByRole("tab");E(n.length).toBe(0);const s=e.getByRole("button",{name:/neste/i});E(s).toBeInTheDocument()}},yt={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{E(t.textContent).toContain("Ingen bilder")}},bt={name:"Test: Image Alt Text",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{const s=e.getAllByRole("img");E(s.length).toBeGreaterThan(0)}),e.getAllByRole("img").forEach((s,r)=>{E(s).toHaveAttribute("alt"),E(s.getAttribute("alt")).not.toBe("")})}},wt={name:"Test: Dots Accessibility",args:{images:ct,showArrows:!0,showDots:!0,autoPlay:!1},render:t=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(q,{...t})}),play:async({canvasElement:t})=>{const e=it(t);await K(()=>{E(e.getAllByRole("tab").length).toBe(3)});const n=e.getByRole("tablist");E(n).toBeInTheDocument(),E(n).toHaveAttribute("aria-label"),e.getAllByRole("tab").forEach((r,a)=>{E(r).toHaveAttribute("aria-label"),E(r).toHaveAttribute("aria-selected")})}};var pe,ge,me;xt.parameters={...xt.parameters,docs:{...(pe=xt.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(ye=It.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var we,xe,ve;Et.parameters={...Et.parameters,docs:{...(we=Et.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(ve=(xe=Et.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Se,Ae,Te,Be,Ie;ft.parameters={...ft.parameters,docs:{...(Se=ft.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(Ae=ft.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(Ie=(Be=ft.parameters)==null?void 0:Be.docs)==null?void 0:Ie.description}}};var Ee,De,Ce,je,ke;pt.parameters={...pt.parameters,docs:{...(Ee=pt.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(De=pt.parameters)==null?void 0:De.docs)==null?void 0:Ce.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...(ke=(je=pt.parameters)==null?void 0:je.docs)==null?void 0:ke.description}}};var Le,_e,Re,Fe,Pe;gt.parameters={...gt.parameters,docs:{...(Le=gt.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Re=(_e=gt.parameters)==null?void 0:_e.docs)==null?void 0:Re.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Pe=(Fe=gt.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.description}}};var Oe,Ne,Me,He,$e;mt.parameters={...mt.parameters,docs:{...(Oe=mt.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=mt.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...($e=(He=mt.parameters)==null?void 0:He.docs)==null?void 0:$e.description}}};var Ve,ze,qe,Ge,Ue;ht.parameters={...ht.parameters,docs:{...(Ve=ht.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(qe=(ze=ht.parameters)==null?void 0:ze.docs)==null?void 0:qe.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(Ue=(Ge=ht.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.description}}};var Ke,We,Qe,Xe,Je;yt.parameters={...yt.parameters,docs:{...(Ke=yt.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Qe=(We=yt.parameters)==null?void 0:We.docs)==null?void 0:Qe.source},description:{story:"Tests that empty state is handled gracefully.",...(Je=(Xe=yt.parameters)==null?void 0:Xe.docs)==null?void 0:Je.description}}};var Ye,Ze,tn,en,nn;bt.parameters={...bt.parameters,docs:{...(Ye=bt.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(tn=(Ze=bt.parameters)==null?void 0:Ze.docs)==null?void 0:tn.source},description:{story:"Tests that images have proper alt text for accessibility.",...(nn=(en=bt.parameters)==null?void 0:en.docs)==null?void 0:nn.description}}};var sn,on,rn,an,cn;wt.parameters={...wt.parameters,docs:{...(sn=wt.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(rn=(on=wt.parameters)==null?void 0:on.docs)==null?void 0:rn.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(cn=(an=wt.parameters)==null?void 0:an.docs)==null?void 0:cn.description}}};const Es=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility"],_s=Object.freeze(Object.defineProperty({__proto__:null,Default:xt,MultipleSlides:It,TestArrowNavigation:ft,TestDotNavigation:pt,TestDotsAccessibility:wt,TestEmptyState:yt,TestHiddenArrows:mt,TestHiddenDots:ht,TestImageAltText:bt,TestSingleImageDisabledArrows:gt,WithSupabase:Et,__namedExportsOrder:Es,default:xs},Symbol.toStringTag,{value:"Module"}));export{_s as C};
