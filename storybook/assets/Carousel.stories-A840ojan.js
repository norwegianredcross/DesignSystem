import{r as H,j as v,R as Qe}from"./iframe-ebtj9M-z.js";import{B as ft}from"./index-BmSyhue0.js";import{S as Qn}from"./index-BEOpvnTr.js";import{u as uo}from"./LanguageContext-DXSie5Kg.js";import{S as po,a as fo,b as go,c as mo}from"./Play-BAV5YBv7.js";function ho(e){return Object.prototype.toString.call(e)==="[object Object]"}function gt(e){return ho(e)||Array.isArray(e)}function yo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ze(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const s=JSON.stringify(Object.keys(e.breakpoints||{})),a=JSON.stringify(Object.keys(t.breakpoints||{}));return s!==a?!1:n.every(r=>{const c=e[r],i=t[r];return typeof c=="function"?`${c}`==`${i}`:!gt(c)||!gt(i)?c===i:Ze(c,i)})}function mt(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function bo(e,t){if(e.length!==t.length)return!1;const n=mt(e),o=mt(t);return n.every((s,a)=>{const r=o[a];return Ze(s,r)})}function et(e){return typeof e=="number"}function Je(e){return typeof e=="string"}function Ve(e){return typeof e=="boolean"}function ht(e){return Object.prototype.toString.call(e)==="[object Object]"}function L(e){return Math.abs(e)}function tt(e){return Math.sign(e)}function _e(e,t){return L(e-t)}function vo(e,t){if(e===0||t===0||L(e)<=L(t))return 0;const n=_e(L(e),L(t));return L(n/e)}function wo(e){return Math.round(e*100)/100}function Oe(e){return $e(e).map(Number)}function te(e){return e[qe(e)]}function qe(e){return Math.max(0,e.length-1)}function nt(e,t){return t===qe(e)}function yt(e,t=0){return Array.from(Array(e),(n,o)=>t+o)}function $e(e){return Object.keys(e)}function Jn(e,t){return[e,t].reduce((n,o)=>($e(o).forEach(s=>{const a=n[s],r=o[s],c=ht(a)&&ht(r);n[s]=c?Jn(a,r):r}),n),{})}function Ye(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function xo(e,t){const n={start:o,center:s,end:a};function o(){return 0}function s(i){return a(i)/2}function a(i){return t-i}function r(i,l){return Je(e)?n[e](i):e(t,i,l)}return{measure:r}}function Ne(){let e=[];function t(s,a,r,c={passive:!0}){let i;if("addEventListener"in s)s.addEventListener(a,r,c),i=()=>s.removeEventListener(a,r,c);else{const l=s;l.addListener(r),i=()=>l.removeListener(r)}return e.push(i),o}function n(){e=e.filter(s=>s())}const o={add:t,clear:n};return o}function Ao(e,t,n,o){const s=Ne(),a=1e3/60;let r=null,c=0,i=0;function l(){s.add(e,"visibilitychange",()=>{e.hidden&&f()})}function h(){y(),s.clear()}function p(u){if(!i)return;r||(r=u,n(),n());const d=u-r;for(r=u,c+=d;c>=a;)n(),c-=a;const b=c/a;o(b),i&&(i=t.requestAnimationFrame(p))}function g(){i||(i=t.requestAnimationFrame(p))}function y(){t.cancelAnimationFrame(i),r=null,c=0,i=0}function f(){r=null,c=0}return{init:l,destroy:h,start:g,stop:y,update:n,render:o}}function So(e,t){const n=t==="rtl",o=e==="y",s=o?"y":"x",a=o?"x":"y",r=!o&&n?-1:1,c=h(),i=p();function l(f){const{height:m,width:u}=f;return o?m:u}function h(){return o?"top":n?"right":"left"}function p(){return o?"bottom":n?"left":"right"}function g(f){return f*r}return{scroll:s,cross:a,startEdge:c,endEdge:i,measureSize:l,direction:g}}function ge(e=0,t=0){const n=L(e-t);function o(l){return l<e}function s(l){return l>t}function a(l){return o(l)||s(l)}function r(l){return a(l)?o(l)?e:t:l}function c(l){return n?l-n*Math.ceil((l-t)/n):l}return{length:n,max:t,min:e,constrain:r,reachedAny:a,reachedMax:s,reachedMin:o,removeOffset:c}}function Yn(e,t,n){const{constrain:o}=ge(0,e),s=e+1;let a=r(t);function r(g){return n?L((s+g)%s):o(g)}function c(){return a}function i(g){return a=r(g),p}function l(g){return h().set(c()+g)}function h(){return Yn(e,c(),n)}const p={get:c,set:i,add:l,clone:h};return p}function Bo(e,t,n,o,s,a,r,c,i,l,h,p,g,y,f,m,u,d,b){const{cross:A,direction:D}=e,R=["INPUT","SELECT","TEXTAREA"],C={passive:!1},B=Ne(),E=Ne(),I=ge(50,225).constrain(y.measure(20)),_={mouse:300,touch:400},k={mouse:500,touch:600},V=f?43:25;let q=!1,K=0,X=0,re=!1,U=!1,Z=!1,ee=!1;function le(x){if(!b)return;function j(T){(Ve(b)||b(x,T))&&se(T)}const S=t;B.add(S,"dragstart",T=>T.preventDefault(),C).add(S,"touchmove",()=>{},C).add(S,"touchend",()=>{}).add(S,"touchstart",j).add(S,"mousedown",j).add(S,"touchcancel",z).add(S,"contextmenu",z).add(S,"click",J,!0)}function Q(){B.clear(),E.clear()}function ae(){const x=ee?n:t;E.add(x,"touchmove",G,C).add(x,"touchend",z).add(x,"mousemove",G,C).add(x,"mouseup",z)}function oe(x){const j=x.nodeName||"";return R.includes(j)}function W(){return(f?k:_)[ee?"mouse":"touch"]}function de(x,j){const S=p.add(tt(x)*-1),T=h.byDistance(x,!f).distance;return f||L(x)<I?T:u&&j?T*.5:h.byIndex(S.get(),0).distance}function se(x){const j=Ye(x,o);ee=j,Z=f&&j&&!x.buttons&&q,q=_e(s.get(),r.get())>=2,!(j&&x.button!==0)&&(oe(x.target)||(re=!0,a.pointerDown(x),l.useFriction(0).useDuration(0),s.set(r),ae(),K=a.readPoint(x),X=a.readPoint(x,A),g.emit("pointerDown")))}function G(x){if(!Ye(x,o)&&x.touches.length>=2)return z(x);const S=a.readPoint(x),T=a.readPoint(x,A),P=_e(S,K),ie=_e(T,X);if(!U&&!ee&&(!x.cancelable||(U=P>ie,!U)))return z(x);const pe=a.pointerMove(x);P>m&&(Z=!0),l.useFriction(.3).useDuration(.75),c.start(),s.add(D(pe)),x.preventDefault()}function z(x){const S=h.byDistance(0,!1).index!==p.get(),T=a.pointerUp(x)*W(),P=de(D(T),S),ie=vo(T,P),pe=V-10*ie,ue=d+ie/50;U=!1,re=!1,E.clear(),l.useDuration(pe).useFriction(ue),i.distance(P,!f),ee=!1,g.emit("pointerUp")}function J(x){Z&&(x.stopPropagation(),x.preventDefault(),Z=!1)}function M(){return re}return{init:le,destroy:Q,pointerDown:M}}function To(e,t){let o,s;function a(p){return p.timeStamp}function r(p,g){const f=`client${(g||e.scroll)==="x"?"X":"Y"}`;return(Ye(p,t)?p:p.touches[0])[f]}function c(p){return o=p,s=p,r(p)}function i(p){const g=r(p)-r(s),y=a(p)-a(o)>170;return s=p,y&&(o=p),g}function l(p){if(!o||!s)return 0;const g=r(s)-r(o),y=a(p)-a(o),f=a(p)-a(s)>170,m=g/y;return y&&!f&&L(m)>.1?m:0}return{pointerDown:c,pointerMove:i,pointerUp:l,readPoint:r}}function Eo(){function e(n){const{offsetTop:o,offsetLeft:s,offsetWidth:a,offsetHeight:r}=n;return{top:o,right:s+a,bottom:o+r,left:s,width:a,height:r}}return{measure:e}}function Do(e){function t(o){return e*(o/100)}return{measure:t}}function Co(e,t,n,o,s,a,r){const c=[e].concat(o);let i,l,h=[],p=!1;function g(u){return s.measureSize(r.measure(u))}function y(u){if(!a)return;l=g(e),h=o.map(g);function d(b){for(const A of b){if(p)return;const D=A.target===e,R=o.indexOf(A.target),C=D?l:h[R],B=g(D?e:o[R]);if(L(B-C)>=.5){u.reInit(),t.emit("resize");break}}}i=new ResizeObserver(b=>{(Ve(a)||a(u,b))&&d(b)}),n.requestAnimationFrame(()=>{c.forEach(b=>i.observe(b))})}function f(){p=!0,i&&i.disconnect()}return{init:y,destroy:f}}function Io(e,t,n,o,s,a){let r=0,c=0,i=s,l=a,h=e.get(),p=0;function g(){const C=o.get()-e.get(),B=!i;let E=0;return B?(r=0,n.set(o),e.set(o),E=C):(n.set(e),r+=C/i,r*=l,h+=r,e.add(r),E=h-p),c=tt(E),p=h,R}function y(){const C=o.get()-t.get();return L(C)<.001}function f(){return i}function m(){return c}function u(){return r}function d(){return A(s)}function b(){return D(a)}function A(C){return i=C,R}function D(C){return l=C,R}const R={direction:m,duration:f,velocity:u,seek:g,settled:y,useBaseFriction:b,useBaseDuration:d,useFriction:D,useDuration:A};return R}function ko(e,t,n,o,s){const a=s.measure(10),r=s.measure(50),c=ge(.1,.99);let i=!1;function l(){return!(i||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function h(y){if(!l())return;const f=e.reachedMin(t.get())?"min":"max",m=L(e[f]-t.get()),u=n.get()-t.get(),d=c.constrain(m/r);n.subtract(u*d),!y&&L(u)<a&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function p(y){i=!y}return{shouldConstrain:l,constrain:h,toggleActive:p}}function jo(e,t,n,o,s){const a=ge(-t+e,0),r=p(),c=h(),i=g();function l(f,m){return _e(f,m)<=1}function h(){const f=r[0],m=te(r),u=r.lastIndexOf(f),d=r.indexOf(m)+1;return ge(u,d)}function p(){return n.map((f,m)=>{const{min:u,max:d}=a,b=a.constrain(f),A=!m,D=nt(n,m);return A?d:D||l(u,b)?u:l(d,b)?d:b}).map(f=>parseFloat(f.toFixed(3)))}function g(){if(t<=e+s)return[a.max];if(o==="keepSnaps")return r;const{min:f,max:m}=c;return r.slice(f,m)}return{snapsContained:i,scrollContainLimit:c}}function Ro(e,t,n){const o=t[0],s=n?o-e:te(t);return{limit:ge(s,o)}}function Po(e,t,n,o){const a=t.min+.1,r=t.max+.1,{reachedMin:c,reachedMax:i}=ge(a,r);function l(g){return g===1?i(n.get()):g===-1?c(n.get()):!1}function h(g){if(!l(g))return;const y=e*(g*-1);o.forEach(f=>f.add(y))}return{loop:h}}function Fo(e){const{max:t,length:n}=e;function o(a){const r=a-t;return n?r/-n:0}return{get:o}}function Ho(e,t,n,o,s){const{startEdge:a,endEdge:r}=e,{groupSlides:c}=s,i=p().map(t.measure),l=g(),h=y();function p(){return c(o).map(m=>te(m)[r]-m[0][a]).map(L)}function g(){return o.map(m=>n[a]-m[a]).map(m=>-L(m))}function y(){return c(l).map(m=>m[0]).map((m,u)=>m+i[u])}return{snaps:l,snapsAligned:h}}function Lo(e,t,n,o,s,a){const{groupSlides:r}=s,{min:c,max:i}=o,l=h();function h(){const g=r(a),y=!e||t==="keepSnaps";return n.length===1?[a]:y?g:g.slice(c,i).map((f,m,u)=>{const d=!m,b=nt(u,m);if(d){const A=te(u[0])+1;return yt(A)}if(b){const A=qe(a)-te(u)[0]+1;return yt(A,te(u)[0])}return f})}return{slideRegistry:l}}function _o(e,t,n,o,s){const{reachedAny:a,removeOffset:r,constrain:c}=o;function i(f){return f.concat().sort((m,u)=>L(m)-L(u))[0]}function l(f){const m=e?r(f):c(f),u=t.map((b,A)=>({diff:h(b-m,0),index:A})).sort((b,A)=>L(b.diff)-L(A.diff)),{index:d}=u[0];return{index:d,distance:m}}function h(f,m){const u=[f,f+n,f-n];if(!e)return f;if(!m)return i(u);const d=u.filter(b=>tt(b)===m);return d.length?i(d):te(u)-n}function p(f,m){const u=t[f]-s.get(),d=h(u,m);return{index:f,distance:d}}function g(f,m){const u=s.get()+f,{index:d,distance:b}=l(u),A=!e&&a(u);if(!m||A)return{index:d,distance:f};const D=t[d]-b,R=f+h(D,0);return{index:d,distance:R}}return{byDistance:g,byIndex:p,shortcut:h}}function Oo(e,t,n,o,s,a,r){function c(p){const g=p.distance,y=p.index!==t.get();a.add(g),g&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),y&&(n.set(t.get()),t.set(p.index),r.emit("select"))}function i(p,g){const y=s.byDistance(p,g);c(y)}function l(p,g){const y=t.clone().set(p),f=s.byIndex(y.get(),g);c(f)}return{distance:i,index:l}}function $o(e,t,n,o,s,a,r,c){const i={passive:!0,capture:!0};let l=0;function h(y){if(!c)return;function f(m){if(new Date().getTime()-l>10)return;r.emit("slideFocusStart"),e.scrollLeft=0;const b=n.findIndex(A=>A.includes(m));et(b)&&(s.useDuration(0),o.index(b,0),r.emit("slideFocus"))}a.add(document,"keydown",p,!1),t.forEach((m,u)=>{a.add(m,"focus",d=>{(Ve(c)||c(y,d))&&f(u)},i)})}function p(y){y.code==="Tab"&&(l=new Date().getTime())}return{init:h}}function Pe(e){let t=e;function n(){return t}function o(i){t=r(i)}function s(i){t+=r(i)}function a(i){t-=r(i)}function r(i){return et(i)?i:i.get()}return{get:n,set:o,add:s,subtract:a}}function Zn(e,t){const n=e.scroll==="x"?r:c,o=t.style;let s=null,a=!1;function r(g){return`translate3d(${g}px,0px,0px)`}function c(g){return`translate3d(0px,${g}px,0px)`}function i(g){if(a)return;const y=wo(e.direction(g));y!==s&&(o.transform=n(y),s=y)}function l(g){a=!g}function h(){a||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:h,to:i,toggleActive:l}}function No(e,t,n,o,s,a,r,c,i){const h=Oe(s),p=Oe(s).reverse(),g=d().concat(b());function y(B,E){return B.reduce((I,_)=>I-s[_],E)}function f(B,E){return B.reduce((I,_)=>y(I,E)>0?I.concat([_]):I,[])}function m(B){return a.map((E,I)=>({start:E-o[I]+.5+B,end:E+t-.5+B}))}function u(B,E,I){const _=m(E);return B.map(k=>{const V=I?0:-n,q=I?n:0,K=I?"end":"start",X=_[k][K];return{index:k,loopPoint:X,slideLocation:Pe(-1),translate:Zn(e,i[k]),target:()=>c.get()>X?V:q}})}function d(){const B=r[0],E=f(p,B);return u(E,n,!1)}function b(){const B=t-r[0]-1,E=f(h,B);return u(E,-n,!0)}function A(){return g.every(({index:B})=>{const E=h.filter(I=>I!==B);return y(E,t)<=.1})}function D(){g.forEach(B=>{const{target:E,translate:I,slideLocation:_}=B,k=E();k!==_.get()&&(I.to(k),_.set(k))})}function R(){g.forEach(B=>B.translate.clear())}return{canLoop:A,clear:R,loop:D,loopPoints:g}}function qo(e,t,n){let o,s=!1;function a(i){if(!n)return;function l(h){for(const p of h)if(p.type==="childList"){i.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(h=>{s||(Ve(n)||n(i,h))&&l(h)}),o.observe(e,{childList:!0})}function r(){o&&o.disconnect(),s=!0}return{init:a,destroy:r}}function zo(e,t,n,o){const s={};let a=null,r=null,c,i=!1;function l(){c=new IntersectionObserver(f=>{i||(f.forEach(m=>{const u=t.indexOf(m.target);s[u]=m}),a=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(f=>c.observe(f))}function h(){c&&c.disconnect(),i=!0}function p(f){return $e(s).reduce((m,u)=>{const d=parseInt(u),{isIntersecting:b}=s[d];return(f&&b||!f&&!b)&&m.push(d),m},[])}function g(f=!0){if(f&&a)return a;if(!f&&r)return r;const m=p(f);return f&&(a=m),f||(r=m),m}return{init:l,destroy:h,get:g}}function Mo(e,t,n,o,s,a){const{measureSize:r,startEdge:c,endEdge:i}=e,l=n[0]&&s,h=f(),p=m(),g=n.map(r),y=u();function f(){if(!l)return 0;const b=n[0];return L(t[c]-b[c])}function m(){if(!l)return 0;const b=a.getComputedStyle(te(o));return parseFloat(b.getPropertyValue(`margin-${i}`))}function u(){return n.map((b,A,D)=>{const R=!A,C=nt(D,A);return R?g[A]+h:C?g[A]+p:D[A+1][c]-b[c]}).map(L)}return{slideSizes:g,slideSizesWithGaps:y,startGap:h,endGap:p}}function Vo(e,t,n,o,s,a,r,c,i){const{startEdge:l,endEdge:h,direction:p}=e,g=et(n);function y(d,b){return Oe(d).filter(A=>A%b===0).map(A=>d.slice(A,A+b))}function f(d){return d.length?Oe(d).reduce((b,A,D)=>{const R=te(b)||0,C=R===0,B=A===qe(d),E=s[l]-a[R][l],I=s[l]-a[A][h],_=!o&&C?p(r):0,k=!o&&B?p(c):0,V=L(I-k-(E+_));return D&&V>t+i&&b.push(A),B&&b.push(d.length),b},[]).map((b,A,D)=>{const R=Math.max(D[A-1]||0);return d.slice(R,b)}):[]}function m(d){return g?y(d,n):f(d)}return{groupSlides:m}}function Go(e,t,n,o,s,a,r){const{align:c,axis:i,direction:l,startIndex:h,loop:p,duration:g,dragFree:y,dragThreshold:f,inViewThreshold:m,slidesToScroll:u,skipSnaps:d,containScroll:b,watchResize:A,watchSlides:D,watchDrag:R,watchFocus:C}=a,B=2,E=Eo(),I=E.measure(t),_=n.map(E.measure),k=So(i,l),V=k.measureSize(I),q=Do(V),K=xo(c,V),X=!p&&!!b,re=p||!!b,{slideSizes:U,slideSizesWithGaps:Z,startGap:ee,endGap:le}=Mo(k,I,_,n,re,s),Q=Vo(k,V,u,p,I,_,ee,le,B),{snaps:ae,snapsAligned:oe}=Ho(k,K,I,_,Q),W=-te(ae)+te(Z),{snapsContained:de,scrollContainLimit:se}=jo(V,W,oe,b,B),G=X?de:oe,{limit:z}=Ro(W,G,p),J=Yn(qe(G),h,p),M=J.clone(),F=Oe(n),x=({dragHandler:he,scrollBody:Ke,scrollBounds:Xe,options:{loop:ze}})=>{ze||Xe.constrain(he.pointerDown()),Ke.seek()},j=({scrollBody:he,translate:Ke,location:Xe,offsetLocation:ze,previousLocation:no,scrollLooper:oo,slideLooper:so,dragHandler:ro,animation:ao,eventHandler:it,scrollBounds:io,options:{loop:ct}},lt)=>{const ut=he.settled(),co=!io.shouldConstrain(),dt=ct?ut:ut&&co,pt=dt&&!ro.pointerDown();pt&&ao.stop();const lo=Xe.get()*lt+no.get()*(1-lt);ze.set(lo),ct&&(oo.loop(he.direction()),so.loop()),Ke.to(ze.get()),pt&&it.emit("settle"),dt||it.emit("scroll")},S=Ao(o,s,()=>x(We),he=>j(We,he)),T=.68,P=G[J.get()],ie=Pe(P),pe=Pe(P),ue=Pe(P),fe=Pe(P),Re=Io(ie,ue,pe,fe,g,T),Ge=_o(p,G,W,z,fe),Ue=Oo(S,J,M,Re,Ge,fe,r),st=Fo(z),rt=Ne(),eo=zo(t,n,r,m),{slideRegistry:at}=Lo(X,b,G,se,Q,F),to=$o(e,n,at,Ue,Re,rt,r,C),We={ownerDocument:o,ownerWindow:s,eventHandler:r,containerRect:I,slideRects:_,animation:S,axis:k,dragHandler:Bo(k,e,o,s,fe,To(k,s),ie,S,Ue,Re,Ge,J,r,q,y,f,d,T,R),eventStore:rt,percentOfView:q,index:J,indexPrevious:M,limit:z,location:ie,offsetLocation:ue,previousLocation:pe,options:a,resizeHandler:Co(t,r,s,n,k,A,E),scrollBody:Re,scrollBounds:ko(z,ue,fe,Re,q),scrollLooper:Po(W,z,ue,[ie,ue,pe,fe]),scrollProgress:st,scrollSnapList:G.map(st.get),scrollSnaps:G,scrollTarget:Ge,scrollTo:Ue,slideLooper:No(k,V,W,U,Z,ae,G,ue,n),slideFocus:to,slidesHandler:qo(t,r,D),slidesInView:eo,slideIndexes:F,slideRegistry:at,slidesToScroll:Q,target:fe,translate:Zn(k,t)};return We}function Uo(){let e={},t;function n(l){t=l}function o(l){return e[l]||[]}function s(l){return o(l).forEach(h=>h(t,l)),i}function a(l,h){return e[l]=o(l).concat([h]),i}function r(l,h){return e[l]=o(l).filter(p=>p!==h),i}function c(){e={}}const i={init:n,emit:s,off:r,on:a,clear:c};return i}const Wo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Ko(e){function t(a,r){return Jn(a,r||{})}function n(a){const r=a.breakpoints||{},c=$e(r).filter(i=>e.matchMedia(i).matches).map(i=>r[i]).reduce((i,l)=>t(i,l),{});return t(a,c)}function o(a){return a.map(r=>$e(r.breakpoints||{})).reduce((r,c)=>r.concat(c),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function Xo(e){let t=[];function n(a,r){return t=r.filter(({options:c})=>e.optionsAtMedia(c).active!==!1),t.forEach(c=>c.init(a,e)),r.reduce((c,i)=>Object.assign(c,{[i.name]:i}),{})}function o(){t=t.filter(a=>a.destroy())}return{init:n,destroy:o}}function Me(e,t,n){const o=e.ownerDocument,s=o.defaultView,a=Ko(s),r=Xo(a),c=Ne(),i=Uo(),{mergeOptions:l,optionsAtMedia:h,optionsMediaQueries:p}=a,{on:g,off:y,emit:f}=i,m=k;let u=!1,d,b=l(Wo,Me.globalOptions),A=l(b),D=[],R,C,B;function E(){const{container:F,slides:x}=A;C=(Je(F)?e.querySelector(F):F)||e.children[0];const S=Je(x)?C.querySelectorAll(x):x;B=[].slice.call(S||C.children)}function I(F){const x=Go(e,C,B,o,s,F,i);if(F.loop&&!x.slideLooper.canLoop()){const j=Object.assign({},F,{loop:!1});return I(j)}return x}function _(F,x){u||(b=l(b,F),A=h(b),D=x||D,E(),d=I(A),p([b,...D.map(({options:j})=>j)]).forEach(j=>c.add(j,"change",k)),A.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(M),d.eventHandler.init(M),d.resizeHandler.init(M),d.slidesHandler.init(M),d.options.loop&&d.slideLooper.loop(),C.offsetParent&&B.length&&d.dragHandler.init(M),R=r.init(M,D)))}function k(F,x){const j=Q();V(),_(l({startIndex:j},F),x),i.emit("reInit")}function V(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),r.destroy(),c.clear()}function q(){u||(u=!0,c.clear(),V(),i.emit("destroy"),i.clear())}function K(F,x,j){!A.active||u||(d.scrollBody.useBaseFriction().useDuration(x===!0?0:A.duration),d.scrollTo.index(F,j||0))}function X(F){const x=d.index.add(1).get();K(x,F,-1)}function re(F){const x=d.index.add(-1).get();K(x,F,1)}function U(){return d.index.add(1).get()!==Q()}function Z(){return d.index.add(-1).get()!==Q()}function ee(){return d.scrollSnapList}function le(){return d.scrollProgress.get(d.offsetLocation.get())}function Q(){return d.index.get()}function ae(){return d.indexPrevious.get()}function oe(){return d.slidesInView.get()}function W(){return d.slidesInView.get(!1)}function de(){return R}function se(){return d}function G(){return e}function z(){return C}function J(){return B}const M={canScrollNext:U,canScrollPrev:Z,containerNode:z,internalEngine:se,destroy:q,off:y,on:g,emit:f,plugins:de,previousScrollSnap:ae,reInit:m,rootNode:G,scrollNext:X,scrollPrev:re,scrollProgress:le,scrollSnapList:ee,scrollTo:K,selectedScrollSnap:Q,slideNodes:J,slidesInView:oe,slidesNotInView:W};return _(t,n),setTimeout(()=>i.emit("init"),0),M}Me.globalOptions=void 0;function ot(e={},t=[]){const n=H.useRef(e),o=H.useRef(t),[s,a]=H.useState(),[r,c]=H.useState(),i=H.useCallback(()=>{s&&s.reInit(n.current,o.current)},[s]);return H.useEffect(()=>{Ze(n.current,e)||(n.current=e,i())},[e,i]),H.useEffect(()=>{bo(o.current,t)||(o.current=t,i())},[t,i]),H.useEffect(()=>{if(yo()&&r){Me.globalOptions=ot.globalOptions;const l=Me(r,n.current,o.current);return a(l),()=>l.destroy()}else a(void 0)},[r,a]),[c,s]}ot.globalOptions=void 0;const Qo="_carouselContainer_1qjfm_5",Jo="_viewport_1qjfm_18",Yo="_slides_1qjfm_24",Zo="_slide_1qjfm_24",es="_slideInner_1qjfm_44",ts="_loaderOverlay_1qjfm_52",ns="_image_1qjfm_62",os="_loaded_1qjfm_73",ss="_loading_1qjfm_77",rs="_empty_1qjfm_85",as="_srOnly_1qjfm_95",is="_controls_1qjfm_107",cs="_arrows_1qjfm_117",ls="_dots_1qjfm_127",us="_playPause_1qjfm_142",ds="_dotGroup_1qjfm_169",ps="_dot_1qjfm_127",fs="_dotActive_1qjfm_200",$={carouselContainer:Qo,viewport:Jo,slides:Yo,slide:Zo,slideInner:es,loaderOverlay:ts,image:ns,loaded:os,loading:ss,empty:rs,srOnly:as,controls:is,arrows:cs,dots:ls,playPause:us,dotGroup:ds,dot:ps,dotActive:fs},O=({images:e,autoPlay:t=!1,autoDelay:n=5,showArrows:o=!0,showDots:s=!0,variant:a,slidesPerView:r=1,slideSpacing:c=16,cornerRadius:i=0,"aria-label":l,crossOrigin:h,"data-color":p,"data-size":g})=>{var j;const{t:y}=uo();H.useEffect(()=>{const S="rk-carousel-inline-styles";if(typeof document>"u"||document.getElementById(S))return;const T=gs($),P=document.createElement("style");P.id=S,P.textContent=T,document.head.prepend(P)},[]);const f={loop:!0,align:"start",containScroll:"trimSnaps",slidesToScroll:1},[m,u]=ot(f),[d,b]=H.useState(0),[A,D]=H.useState([]),[R,C]=H.useState([]),[B,E]=H.useState([]),I=H.useRef([]),_=(e??[]).map(S=>S.src).join(`
`);H.useEffect(()=>{E((e??[]).map((S,T)=>{const P=I.current[T];return!!(P&&P.complete&&P.naturalWidth>0)}))},[_]);const k=H.useCallback(S=>{E(T=>{if(T[S])return T;const P=[...T];return P[S]=!0,P})},[]),V=H.useMemo(()=>n*1e3,[n]),q=H.useCallback(()=>{u&&(b(u.selectedScrollSnap()),C(u.slidesInView()))},[u]),K=H.useCallback(S=>u&&u.scrollTo(S),[u]),X=H.useCallback(()=>u&&u.scrollPrev(),[u]),re=H.useCallback(()=>u&&u.scrollNext(),[u]);H.useEffect(()=>{if(u)return u.on("select",q),u.on("reInit",q),u.on("slidesInView",q),D(u.scrollSnapList()),C(u.slidesInView()),()=>{u.off("select",q),u.off("reInit",q),u.off("slidesInView",q)}},[u,q]),H.useEffect(()=>{u&&(u.reInit(),D(u.scrollSnapList()))},[u,e,r,c]);const[U,Z]=H.useState(!1),[ee,le]=H.useState(!1),[Q,ae]=H.useState(!1),oe=t&&!U&&!ee&&!Q;H.useEffect(()=>{if(!oe||!u||!e||e.length<=1)return;const S=window.setInterval(()=>{u.canScrollNext()&&u.scrollNext()},V);return()=>{window.clearInterval(S)}},[oe,V,u,e]);const W=Math.max(1,r),de=`${100/W}%`,se=c/2,G=S=>R.length>0?R.includes(S):S<W,z=(e==null?void 0:e.length)??0,J=S=>y("carousel.slideOf").replace("{index}",String(S+1)).replace("{total}",String(z)),M=z>1,F=t&&M,x=s&&M;return v.jsxs("div",{className:$.carouselContainer,role:"region","aria-roledescription":"carousel","aria-label":l??y("carousel.label"),"data-color":p,"data-size":g,"data-variant":a,onMouseEnter:t?()=>le(!0):void 0,onMouseLeave:t?()=>le(!1):void 0,onFocus:t?()=>ae(!0):void 0,onBlur:t?S=>{S.currentTarget.contains(S.relatedTarget)||ae(!1)}:void 0,children:[v.jsx("div",{className:$.viewport,ref:m,children:v.jsx("div",{className:$.slides,style:{marginLeft:`-${se}px`,marginRight:`-${se}px`},children:e&&e.length>0?e.map((S,T)=>v.jsx("div",{className:$.slide,role:"group","aria-roledescription":"slide","aria-label":J(T),"aria-hidden":G(T)?void 0:!0,style:{flex:`0 0 ${de}`,paddingLeft:`${se}px`,paddingRight:`${se}px`,borderRadius:i>0?`${i}px`:void 0,overflow:"hidden"},children:v.jsxs("div",{className:$.slideInner,style:{borderRadius:`${i}px`,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[!B[T]&&v.jsx("div",{className:$.loaderOverlay,children:v.jsx(Qn,{"aria-label":y("carousel.loading")})}),v.jsx("img",{ref:P=>{I.current[T]=P},className:`${$.image} ${B[T]?$.loaded:$.loadingImage}`,src:S.src,alt:S.alt,loading:T<W?"eager":"lazy",crossOrigin:h,onLoad:()=>k(T),onError:P=>{P.target.style.display="none",k(T)}})]})},`image-${T}-${S.src}`)):v.jsx("div",{className:$.slide,style:{flex:"0 0 100%"},children:v.jsx("div",{className:$.empty,children:y("carousel.empty")})})})}),M&&v.jsxs("div",{role:"status","aria-live":oe?"off":"polite",className:$.srOnly,children:[J(d),(j=e[d])!=null&&j.alt?`: ${e[d].alt}`:""]}),(o||x||F)&&v.jsxs("div",{className:$.controls,"aria-hidden":"false",children:[o&&v.jsxs("div",{className:$.arrows,children:[v.jsx(ft,{variant:"primary",icon:!0,"aria-label":y("carousel.previousImage"),onClick:X,disabled:!M,children:v.jsx(po,{"aria-hidden":!0})}),v.jsx(ft,{variant:"primary",icon:!0,"aria-label":y("carousel.nextImage"),onClick:re,disabled:!M,children:v.jsx(fo,{"aria-hidden":!0})})]}),(x||F)&&v.jsxs("div",{className:$.dots,children:[F&&v.jsx("button",{type:"button",className:$.playPause,onClick:()=>Z(S=>!S),"aria-label":y(U?"carousel.resumeAutoplay":"carousel.pauseAutoplay"),"aria-pressed":U,children:U?v.jsx(go,{"aria-hidden":!0}):v.jsx(mo,{"aria-hidden":!0})}),x&&v.jsx("div",{className:$.dotGroup,role:"group","aria-label":y("carousel.imagePosition"),children:A.map((S,T)=>{const P=T===d;return v.jsx("button",{type:"button",className:`${$.dot} ${P?$.dotActive:""}`,onClick:()=>K(T),"aria-label":`${y("carousel.goToImage")} ${T+1}`,"aria-current":P||void 0},`dot-${T}`)})})]})]})]})};O.displayName="Carousel";function gs(e){return`
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
.${e.srOnly} {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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
.${e.dotGroup} {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-size-1, 4px);
}
.${e.dot} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ds-size-6, 24px);
  height: var(--ds-size-6, 24px);
  border: 0;
  border-radius: 999px;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.${e.dot}::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-subtle, #d6d6d6);
  background-color: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
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
.${e.dotActive}::before {
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
  .${e.dot}::before {
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
`}try{O.displayName="Carousel",O.__docgenInfo={description:`Carousel-komponent for å vise en bildeserie.
Bruker embla-carousel-react for funksjonalitet.`,displayName:"Carousel",props:{}}}catch{}const ms="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23FAE4E2'/%3e%3c!--%20corner%20shape%20--%3e%3cpath%20d='M450%20137H750V437H150V287H450V137Z'%20fill='%23D52B1E'/%3e%3crect%20x='150'%20y='487'%20width='600'%20height='50'%20fill='%23EEABA6'/%3e%3crect%20x='850'%20y='137'%20width='200'%20height='200'%20fill='%23F7F3EF'/%3e%3crect%20x='850'%20y='387'%20width='200'%20height='150'%20fill='%2357110C'/%3e%3c/svg%3e",hs="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23F7F3EF'/%3e%3c!--%20gapped%20cross%20--%3e%3crect%20x='500'%20y='87'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='500'%20y='387'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='290'%20y='237'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='710'%20y='237'%20width='200'%20height='200'%20fill='%23D52B1E'/%3e%3crect%20x='80'%20y='87'%20width='120'%20height='500'%20fill='%23CDE4CA'/%3e%3crect%20x='1000'%20y='87'%20width='120'%20height='500'%20fill='%23FAE4E2'/%3e%3c/svg%3e",ys="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%2357110C'/%3e%3c!--%20heart:%20two%20squares%20+%20notch%20block%20--%3e%3crect%20x='400'%20y='140'%20width='200'%20height='200'%20fill='%23EEABA6'/%3e%3crect%20x='600'%20y='140'%20width='200'%20height='200'%20fill='%23EEABA6'/%3e%3cpath%20d='M400%20340H800V440H700V540H500V440H400V340Z'%20fill='%23EEABA6'/%3e%3crect%20x='120'%20y='140'%20width='180'%20height='400'%20fill='%23B42419'/%3e%3crect%20x='900'%20y='140'%20width='180'%20height='400'%20fill='%23F6D2CF'/%3e%3c/svg%3e",{expect:w,within:ne,userEvent:Y,waitFor:N}=__STORYBOOK_MODULE_TEST__,bs={title:"Components/Carousel",component:O,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{autoPlay:{control:"boolean",description:"Automatically advance slides",defaultValue:!1},autoDelay:{control:"number",description:"Autoplay delay in seconds",defaultValue:5},showArrows:{control:"boolean",description:"Show previous/next arrow buttons",defaultValue:!0},showDots:{control:"boolean",description:"Show position dots",defaultValue:!0},images:{table:{disable:!0}},variant:{control:"text",description:"Variant of the carousel (optional)"},slidesPerView:{control:{type:"number",min:1,max:5,step:.1},description:"Number of slides to show at once",defaultValue:1},slideSpacing:{control:"number",description:"Spacing between slides in px",defaultValue:16},cornerRadius:{control:"number",description:"Corner radius for images in px",defaultValue:0},"data-size":{control:"select",options:["sm","md","lg"],description:"Size token"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral","danger"],description:"Color token"}}},je={args:{images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",alt:"Solnedgang"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",alt:"Fjell"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",alt:"Skog"}],autoPlay:!1,autoDelay:5,showArrows:!0,showDots:!0,slidesPerView:1,slideSpacing:16,cornerRadius:0},render:e=>v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(O,{...e})})},Fe={args:{...je.args,slidesPerView:2.5,slideSpacing:20,cornerRadius:12},render:e=>v.jsx("div",{style:{width:"1000px",height:"400px",padding:"20px",margin:"0 auto",display:"flex",justifyContent:"center"},children:v.jsx(O,{...e})})},vs="https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse",ws=["jpg","jpeg","png"],xs={Hd:{path:"images/spaces/Hd",isSpacesFolder:!0},Noytralitet:{path:"images/spaces/Noytralitet",isSpacesFolder:!0},Frivillighet:{path:"images/spaces/Frivillighet",isSpacesFolder:!0},Enhet:{path:"images/spaces/Enhet",isSpacesFolder:!0},Uavhenighet:{path:"images/spaces/Uavhenighet",isSpacesFolder:!0},Humanitet:{path:"images/spaces/Humanitet",isSpacesFolder:!0},Upartiskhet:{path:"images/spaces/Upartiskhet",isSpacesFolder:!0},Konferanselokaler:{path:"images/Konferanselokaler",isSpacesFolder:!1},Moterom:{path:"images/Moterom",isSpacesFolder:!1}},bt=e=>e.replace(/\.[^.]+$/i,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,t=>t.toUpperCase());function vt(e,t,n){const o=xs[t];return o?`${e}/${o.path}/${n}`:`${e}/images/spaces/${t}/${n}`}function As(){const e=new Map,t=new Map;return function(o){if(e.has(o))return Promise.resolve(e.get(o));if(t.has(o))return t.get(o);const s=new Promise(a=>{const r=new Image;r.crossOrigin="anonymous";const c=l=>{e.set(o,l),t.delete(o),a(l)},i=window.setTimeout(()=>{r.src="",c(!1)},5e3);r.onload=()=>{window.clearTimeout(i),c(!0)},r.onerror=()=>{window.clearTimeout(i),c(!1)},r.src=o});return t.set(o,s),s}}const wt=As();async function Ss(e,t){const n=[];for(let s=1;s<=6;s++){const a=s.toString().padStart(2,"0");let r=!1;for(const c of ws){const i=`${t}_${a}.${c}`,l=vt(e,t,i);if(!r&&await wt(l)){n.push({src:l,alt:bt(i)}),r=!0;break}const h=`${t.toLowerCase()}_${a}.${c}`,p=vt(e,t,h);if(!r&&await wt(p)){n.push({src:p,alt:bt(h)}),r=!0;break}}}return n}const He={args:{autoPlay:!1,autoDelay:4,showArrows:!0,showDots:!0},render:e=>v.jsx(Bs,{...e})};function Bs(e){const[t,n]=Qe.useState(null),o="Konferanselokaler",s=vs;return Qe.useEffect(()=>{let a=!1;return(async()=>{const r=await Ss(s,o);a||n(r)})(),()=>{a=!0}},[s,o]),v.jsx("div",{style:{width:"900px",height:"520px",margin:"0 auto",display:"flex",justifyContent:"center"},children:t===null?v.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center",height:"100%"},children:[v.jsx(Qn,{"aria-label":"Laster bilder","aria-hidden":!0,"data-size":"sm"}),"Laster bilder…"]}):v.jsx(O,{...e,images:t,slidesPerView:1})})}const ce=[{src:ms,alt:"Test bilde 1"},{src:hs,alt:"Test bilde 2"},{src:ys,alt:"Test bilde 3"}],me=ce,ye={name:"Test: Arrow Navigation",args:{images:me,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);await N(()=>{w(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i}),s=t.getAllByRole("button",{name:/gå til bilde/i});w(s.length).toBe(3),w(s[0]).toHaveAttribute("aria-current","true"),await Y.click(n),await N(()=>{w(s[1]).toHaveAttribute("aria-current","true")}),await Y.click(n),await N(()=>{w(s[2]).toHaveAttribute("aria-current","true")}),await Y.click(o),await N(()=>{w(s[1]).toHaveAttribute("aria-current","true")})}},be={name:"Test: Dot Navigation",args:{images:me,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);await N(()=>{w(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.getAllByRole("button",{name:/gå til bilde/i});w(n[0]).toHaveAttribute("aria-current","true"),await Y.click(n[2]),await N(()=>{w(n[2]).toHaveAttribute("aria-current","true")}),await Y.click(n[0]),await N(()=>{w(n[0]).toHaveAttribute("aria-current","true")})}},ve={name:"Test: Single Image (Disabled Arrows)",args:{images:[me[0]],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);await N(()=>{w(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.getByRole("button",{name:/neste/i}),o=t.getByRole("button",{name:/forrige/i});w(n).toBeDisabled(),w(o).toBeDisabled();const s=t.queryAllByRole("button",{name:/gå til bilde/i});w(s.length).toBe(0)}},we={name:"Test: Hidden Arrows",args:{images:me,showArrows:!1,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);await N(()=>{w(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.queryByRole("button",{name:/neste/i}),o=t.queryByRole("button",{name:/forrige/i});w(n).not.toBeInTheDocument(),w(o).not.toBeInTheDocument();const s=t.getAllByRole("button",{name:/gå til bilde/i});w(s.length).toBe(3)}},xe={name:"Test: Hidden Dots",args:{images:me,showArrows:!0,showDots:!1,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);await N(()=>{w(t.getByRole("button",{name:/neste/i})).toBeInTheDocument()});const n=t.queryAllByRole("button",{name:/gå til bilde/i});w(n.length).toBe(0);const o=t.getByRole("button",{name:/neste/i});w(o).toBeInTheDocument()}},Ae={name:"Test: Empty State",args:{images:[],showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{w(e.textContent).toContain("Ingen bilder")}},Se={name:"Test: Image Alt Text",args:{images:me,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{await N(()=>{const n=e.querySelectorAll("img");w(n.length).toBeGreaterThan(0)}),e.querySelectorAll("img").forEach(n=>{w(n).toHaveAttribute("alt"),w(n.getAttribute("alt")).not.toBe("")})}},Be={name:"Test: Dots Accessibility",args:{images:me,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);await N(()=>{w(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const n=t.getByRole("group",{name:/bildeposisjon/i});w(n).toBeInTheDocument();const o=t.getAllByRole("button",{name:/gå til bilde/i});o.forEach(a=>{w(a).toHaveAttribute("aria-label")});const s=o.filter(a=>a.getAttribute("aria-current")==="true");w(s.length).toBe(1)}},Te={name:"Test: Re-render Keeps Slides Visible",render:()=>{const[,e]=Qe.useState(0);return v.jsxs("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:[v.jsx(O,{images:[{src:ce[0].src,alt:"Lokalt bilde 1"},{src:ce[1].src,alt:"Lokalt bilde 2"}],showArrows:!0,showDots:!0}),v.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"Tving re-render"})]})},play:async({canvasElement:e})=>{const t=ne(e),n=await N(()=>{const s=e.querySelector("img");return w(s).not.toBeNull(),w(s.complete).toBe(!0),s});await N(()=>{w(getComputedStyle(n).opacity).toBe("1")});const o=t.getByRole("button",{name:"Tving re-render"});await Y.click(o),await Y.click(o),w(getComputedStyle(n).opacity).toBe("1"),w(t.queryByLabelText(/laster bilde/i)).not.toBeInTheDocument()}},Ee={name:"Test: Autoplay Pause Control",args:{images:ce,showArrows:!1,showDots:!0,autoPlay:!0,autoDelay:.4},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e),n=await t.findByRole("button",{name:/pause automatisk/i});w(n).toHaveAttribute("aria-pressed","false"),await Y.click(n),w(t.getByRole("button",{name:/start automatisk/i})).toHaveAttribute("aria-pressed","true");const o=t.getAllByRole("button",{name:/gå til bilde/i});await new Promise(a=>setTimeout(a,1e3)),w(o[0]).toHaveAttribute("aria-current","true");const s=t.getByRole("button",{name:/start automatisk/i});await Y.click(s),s.blur(),await Y.unhover(s),await N(()=>{w(o[1]).toHaveAttribute("aria-current","true")},{timeout:3e3})}},Le={name:"Test: Play/Pause Control Stays Legible In Dark Mode",args:{images:ce,showArrows:!1,showDots:!0,autoPlay:!0,autoDelay:.4},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{document.documentElement.setAttribute("data-color-scheme","dark");try{const t=await N(()=>{const i=e.querySelector('[class*="playPause"]');return w(i,"play/pause control not found").not.toBeNull(),i}),n=i=>i.match(/[\d.]+/g).slice(0,3).map(Number),o=([i,l,h])=>{const p=g=>{const y=g/255;return y<=.03928?y/12.92:((y+.055)/1.055)**2.4};return .2126*p(i)+.7152*p(l)+.0722*p(h)},s=getComputedStyle(t),[a,r]=[o(n(s.color)),o(n(s.backgroundColor))].sort((i,l)=>l-i),c=(a+.05)/(r+.05);w(c,`dark: icon ${s.color} on pill ${s.backgroundColor} is ${c.toFixed(2)}:1`).toBeGreaterThan(3)}finally{document.documentElement.removeAttribute("data-color-scheme")}}},De={name:"Test: Pause Control Renders Without Dots",args:{images:ce,showArrows:!1,showDots:!1,autoPlay:!0,autoDelay:.4},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e),n=await t.findByRole("button",{name:/pause automatisk/i});w(n).toBeInTheDocument(),w(t.queryAllByRole("button",{name:/gå til bilde/i})).toHaveLength(0),w(t.queryByRole("group",{name:/bildeposisjon/i})).not.toBeInTheDocument(),await Y.click(n),w(t.getByRole("button",{name:/start automatisk/i})).toHaveAttribute("aria-pressed","true")}},Ce={name:"Test: Carousel ARIA Semantics",args:{images:ce,showArrows:!0,showDots:!0,autoPlay:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e),n=t.getByRole("region",{name:/bildekarusell/i});w(n).toHaveAttribute("aria-roledescription","carousel"),await N(()=>{w(t.getAllByRole("button",{name:/gå til bilde/i}).length).toBe(3)});const o=Array.from(e.querySelectorAll('[aria-roledescription="slide"]'));w(o).toHaveLength(3),w(o[0]).toHaveAttribute("aria-label","Bilde 1 av 3"),w(o[0]).not.toHaveAttribute("aria-hidden","true"),w(o[1]).toHaveAttribute("aria-hidden","true"),w(o[2]).toHaveAttribute("aria-hidden","true"),w(t.getAllByRole("group",{name:/bilde \d av 3/i})).toHaveLength(1);const s=t.getByRole("status");w(s).toHaveAttribute("aria-live","polite"),w(s).toHaveTextContent("Bilde 1 av 3"),await Y.click(t.getByRole("button",{name:/neste/i})),await N(()=>{w(s).toHaveTextContent("Bilde 2 av 3")}),await N(()=>{w(o[1]).not.toHaveAttribute("aria-hidden","true"),w(o[0]).toHaveAttribute("aria-hidden","true")})}},Ie={name:"Test: crossOrigin Is Opt-In",args:{images:ce,showArrows:!1,showDots:!1},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=Array.from(e.querySelectorAll("img"));w(t.length).toBeGreaterThan(0),t.forEach(n=>{w(n).not.toHaveAttribute("crossorigin")})}},ke={name:"Test: Dot Targets Are 24px",args:{images:ce,showArrows:!1,showDots:!0},render:e=>v.jsx("div",{style:{width:"600px",height:"400px",margin:"0 auto"},children:v.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=ne(e);(await N(()=>{const o=t.getAllByRole("button",{name:/gå til bilde/i});return w(o.length).toBe(3),o})).forEach(o=>{const s=o.getBoundingClientRect();w(s.width,"dot target width").toBeGreaterThanOrEqual(24),w(s.height,"dot target height").toBeGreaterThanOrEqual(24)})}};var xt,At,St;je.parameters={...je.parameters,docs:{...(xt=je.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(St=(At=je.parameters)==null?void 0:At.docs)==null?void 0:St.source}}};var Bt,Tt,Et;Fe.parameters={...Fe.parameters,docs:{...(Bt=Fe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=Fe.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var Dt,Ct,It;He.parameters={...He.parameters,docs:{...(Dt=He.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true
  },
  render: args => <SupabaseExample {...args} />
}`,...(It=(Ct=He.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var kt,jt,Rt,Pt,Ft;ye.parameters={...ye.parameters,docs:{...(kt=ye.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Rt=(jt=ye.parameters)==null?void 0:jt.docs)==null?void 0:Rt.source},description:{story:"Tests that next/previous arrow buttons navigate between slides.",...(Ft=(Pt=ye.parameters)==null?void 0:Pt.docs)==null?void 0:Ft.description}}};var Ht,Lt,_t,Ot,$t;be.parameters={...be.parameters,docs:{...(Ht=be.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(_t=(Lt=be.parameters)==null?void 0:Lt.docs)==null?void 0:_t.source},description:{story:"Tests that clicking on dots navigates to the corresponding slide.",...($t=(Ot=be.parameters)==null?void 0:Ot.docs)==null?void 0:$t.description}}};var Nt,qt,zt,Mt,Vt;ve.parameters={...ve.parameters,docs:{...(Nt=ve.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(zt=(qt=ve.parameters)==null?void 0:qt.docs)==null?void 0:zt.source},description:{story:"Tests that arrows are disabled when there's only one image.",...(Vt=(Mt=ve.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.description}}};var Gt,Ut,Wt,Kt,Xt;we.parameters={...we.parameters,docs:{...(Gt=we.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Wt=(Ut=we.parameters)==null?void 0:Ut.docs)==null?void 0:Wt.source},description:{story:"Tests that arrows can be hidden via showArrows prop.",...(Xt=(Kt=we.parameters)==null?void 0:Kt.docs)==null?void 0:Xt.description}}};var Qt,Jt,Yt,Zt,en;xe.parameters={...xe.parameters,docs:{...(Qt=xe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Yt=(Jt=xe.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source},description:{story:"Tests that dots can be hidden via showDots prop.",...(en=(Zt=xe.parameters)==null?void 0:Zt.docs)==null?void 0:en.description}}};var tn,nn,on,sn,rn;Ae.parameters={...Ae.parameters,docs:{...(tn=Ae.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(on=(nn=Ae.parameters)==null?void 0:nn.docs)==null?void 0:on.source},description:{story:"Tests that empty state is handled gracefully.",...(rn=(sn=Ae.parameters)==null?void 0:sn.docs)==null?void 0:rn.description}}};var an,cn,ln,un,dn;Se.parameters={...Se.parameters,docs:{...(an=Se.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(ln=(cn=Se.parameters)==null?void 0:cn.docs)==null?void 0:ln.source},description:{story:"Tests that images have proper alt text for accessibility.",...(dn=(un=Se.parameters)==null?void 0:un.docs)==null?void 0:dn.description}}};var pn,fn,gn,mn,hn;Be.parameters={...Be.parameters,docs:{...(pn=Be.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(gn=(fn=Be.parameters)==null?void 0:fn.docs)==null?void 0:gn.source},description:{story:"Tests dot navigation has proper ARIA attributes.",...(hn=(mn=Be.parameters)==null?void 0:mn.docs)==null?void 0:hn.description}}};var yn,bn,vn,wn,xn;Te.parameters={...Te.parameters,docs:{...(yn=Te.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(vn=(bn=Te.parameters)==null?void 0:bn.docs)==null?void 0:vn.source},description:{story:`A parent re-render passing a new array literal with identical content must
not blank already-loaded slides (loaded state survives identity changes).`,...(xn=(wn=Te.parameters)==null?void 0:wn.docs)==null?void 0:xn.description}}};var An,Sn,Bn,Tn,En;Ee.parameters={...Ee.parameters,docs:{...(An=Ee.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(Bn=(Sn=Ee.parameters)==null?void 0:Sn.docs)==null?void 0:Bn.source},description:{story:`WCAG 2.2.2: autoplay exposes a pause control; pausing stops rotation and
resuming starts it again.`,...(En=(Tn=Ee.parameters)==null?void 0:Tn.docs)==null?void 0:En.description}}};var Dn,Cn,In;Le.parameters={...Le.parameters,docs:{...(Dn=Le.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(In=(Cn=Le.parameters)==null?void 0:Cn.docs)==null?void 0:In.source}}};var kn,jn,Rn,Pn,Fn;De.parameters={...De.parameters,docs:{...(kn=De.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  name: 'Test: Pause Control Renders Without Dots',
  args: {
    images: localImages,
    showArrows: false,
    showDots: false,
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
    expect(pauseButton).toBeInTheDocument();
    // No dots, and no empty "Bildeposisjon" group wrapping the pause button
    expect(canvas.queryAllByRole('button', {
      name: /gå til bilde/i
    })).toHaveLength(0);
    expect(canvas.queryByRole('group', {
      name: /bildeposisjon/i
    })).not.toBeInTheDocument();

    // And it is wired to the explicit-pause state (aria-pressed mirrors
    // userPaused; hover/focus pauses do not touch it). The rotation
    // mechanics themselves are covered by "Test: Autoplay Pause Control".
    await userEvent.click(pauseButton);
    expect(canvas.getByRole('button', {
      name: /start automatisk/i
    })).toHaveAttribute('aria-pressed', 'true');
  }
}`,...(Rn=(jn=De.parameters)==null?void 0:jn.docs)==null?void 0:Rn.source},description:{story:`Regression test: the pause control is a requirement of autoplay itself
(WCAG 2.2.2), not of the dots. It used to render inside the dots branch,
so autoPlay with showDots={false} produced motion nobody could stop.`,...(Fn=(Pn=De.parameters)==null?void 0:Pn.docs)==null?void 0:Fn.description}}};var Hn,Ln,_n,On,$n;Ce.parameters={...Ce.parameters,docs:{...(Hn=Ce.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  name: 'Test: Carousel ARIA Semantics',
  args: {
    images: localImages,
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
    const region = canvas.getByRole('region', {
      name: /bildekarusell/i
    });
    expect(region).toHaveAttribute('aria-roledescription', 'carousel');

    // Wait for Embla to report what is in view
    await waitFor(() => {
      expect(canvas.getAllByRole('button', {
        name: /gå til bilde/i
      }).length).toBe(3);
    });

    // Slides are groups labelled by position; hidden slides leave the tree,
    // so the accessible query only finds the visible one.
    const slideNodes = Array.from(canvasElement.querySelectorAll('[aria-roledescription="slide"]'));
    expect(slideNodes).toHaveLength(3);
    expect(slideNodes[0]).toHaveAttribute('aria-label', 'Bilde 1 av 3');
    expect(slideNodes[0]).not.toHaveAttribute('aria-hidden', 'true');
    expect(slideNodes[1]).toHaveAttribute('aria-hidden', 'true');
    expect(slideNodes[2]).toHaveAttribute('aria-hidden', 'true');
    expect(canvas.getAllByRole('group', {
      name: /bilde \\d av 3/i
    })).toHaveLength(1);

    // The status region announces the position (polite when not autoplaying)
    const status = canvas.getByRole('status');
    expect(status).toHaveAttribute('aria-live', 'polite');
    expect(status).toHaveTextContent('Bilde 1 av 3');

    // Navigating moves both the exposed slide and the announcement
    await userEvent.click(canvas.getByRole('button', {
      name: /neste/i
    }));
    await waitFor(() => {
      expect(status).toHaveTextContent('Bilde 2 av 3');
    });
    await waitFor(() => {
      expect(slideNodes[1]).not.toHaveAttribute('aria-hidden', 'true');
      expect(slideNodes[0]).toHaveAttribute('aria-hidden', 'true');
    });
  }
}`,...(_n=(Ln=Ce.parameters)==null?void 0:Ln.docs)==null?void 0:_n.source},description:{story:`Tests the APG carousel semantics: a labelled region with the carousel role
description, each slide a labelled "slide" group, only the visible slide
exposed to assistive technology, and a polite position status that
follows navigation.`,...($n=(On=Ce.parameters)==null?void 0:On.docs)==null?void 0:$n.description}}};var Nn,qn,zn,Mn,Vn;Ie.parameters={...Ie.parameters,docs:{...(Nn=Ie.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  name: 'Test: crossOrigin Is Opt-In',
  args: {
    images: localImages,
    showArrows: false,
    showDots: false
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
    const imgs = Array.from(canvasElement.querySelectorAll('img'));
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach(img => {
      expect(img).not.toHaveAttribute('crossorigin');
    });
  }
}`,...(zn=(qn=Ie.parameters)==null?void 0:qn.docs)==null?void 0:zn.source},description:{story:`Regression test: images are plain <img> requests unless the consumer opts
in. crossOrigin="anonymous" used to be forced, which made every image from
a host without CORS headers fail to load.`,...(Vn=(Mn=Ie.parameters)==null?void 0:Mn.docs)==null?void 0:Vn.description}}};var Gn,Un,Wn,Kn,Xn;ke.parameters={...ke.parameters,docs:{...(Gn=ke.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  name: 'Test: Dot Targets Are 24px',
  args: {
    images: localImages,
    showArrows: false,
    showDots: true
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
    const dots = await waitFor(() => {
      const found = canvas.getAllByRole('button', {
        name: /gå til bilde/i
      });
      expect(found.length).toBe(3);
      return found;
    });
    dots.forEach(dot => {
      const rect = dot.getBoundingClientRect();
      expect(rect.width, 'dot target width').toBeGreaterThanOrEqual(24);
      expect(rect.height, 'dot target height').toBeGreaterThanOrEqual(24);
    });
  }
}`,...(Wn=(Un=ke.parameters)==null?void 0:Un.docs)==null?void 0:Wn.source},description:{story:`Tests the WCAG 2.5.8 target size of the dots: the visible dot stays small,
but each button's hit area is at least 24x24 CSS pixels.`,...(Xn=(Kn=ke.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.description}}};const Ts=["Default","MultipleSlides","WithSupabase","TestArrowNavigation","TestDotNavigation","TestSingleImageDisabledArrows","TestHiddenArrows","TestHiddenDots","TestEmptyState","TestImageAltText","TestDotsAccessibility","TestRerenderKeepsSlides","TestAutoplayPauseControl","TestControlContrastInDarkMode","TestPauseControlWithoutDots","TestCarouselSemantics","TestNoForcedCrossOrigin","TestDotTargetSize"],js=Object.freeze(Object.defineProperty({__proto__:null,Default:je,MultipleSlides:Fe,TestArrowNavigation:ye,TestAutoplayPauseControl:Ee,TestCarouselSemantics:Ce,TestControlContrastInDarkMode:Le,TestDotNavigation:be,TestDotTargetSize:ke,TestDotsAccessibility:Be,TestEmptyState:Ae,TestHiddenArrows:we,TestHiddenDots:xe,TestImageAltText:Se,TestNoForcedCrossOrigin:Ie,TestPauseControlWithoutDots:De,TestRerenderKeepsSlides:Te,TestSingleImageDisabledArrows:ve,WithSupabase:He,__namedExportsOrder:Ts,default:bs},Symbol.toStringTag,{value:"Module"}));export{js as C};
