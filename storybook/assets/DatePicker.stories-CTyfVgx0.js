import{j as c,r as m}from"./iframe-BS4ITM2A.js";import{B as ge}from"./tooltip-qAv0NJYS.js";import{u as St}from"./LanguageContext-WXAXRIW7.js";import{t as k,c as T,g as fe,m as xt,a as mt,b as Ct,d as kt,e as Mt,f as Et,h as Pt,i as O,j as Bt,k as Ot,w as jt,l as Tt,n as P,o as ce,p as $,q as V,r as _t,s as le,D as Ht,u as Nt}from"./index-BflCbC9-.js";function de(e,a,t){const n=k(e,t==null?void 0:t.in);if(isNaN(a))return T(e,NaN);if(!a)return n;const r=n.getDate(),o=T(e,n.getTime());o.setMonth(n.getMonth()+a+1,0);const l=o.getDate();return r>=l?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}function ie(e,...a){const t=T.bind(null,a.find(n=>typeof n=="object"));return a.map(t)}function oe(e,a){const t=k(e,a==null?void 0:a.in);return t.setHours(0,0,0,0),t}function Rt(e,a,t){const[n,r]=ie(t==null?void 0:t.in,e,a),o=oe(n),l=oe(r),f=+o-fe(o),h=+l-fe(l);return Math.round((f-h)/xt)}function At(e){return T(e,Date.now())}function se(e,a,t){const[n,r]=ie(t==null?void 0:t.in,e,a);return+oe(n)==+oe(r)}function zt(e,a){const[t,n]=ie(e,a.start,a.end);return{start:t,end:n}}function Wt(e,a){const{start:t,end:n}=zt(a==null?void 0:a.in,e);let r=+t>+n;const o=r?+t:+n,l=r?n:t;l.setHours(0,0,0,0);let f=1;const h=[];for(;+l<=o;)h.push(T(t,l)),l.setDate(l.getDate()+f),l.setHours(0,0,0,0);return r?h.reverse():h}function B(e,a){const t=k(e,a==null?void 0:a.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Yt(e,a){const t=k(e,a==null?void 0:a.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function It(e,a){var f,h,p,v;const t=mt(),n=(a==null?void 0:a.weekStartsOn)??((h=(f=a==null?void 0:a.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((v=(p=t.locale)==null?void 0:p.options)==null?void 0:v.weekStartsOn)??0,r=k(e,a==null?void 0:a.in),o=r.getDay(),l=(o<n?-7:0)+6-(o-n);return r.setDate(r.getDate()+l),r.setHours(23,59,59,999),r}function Lt(e,a){const t=k(e,a==null?void 0:a.in);return Rt(t,Yt(t))+1}function d(e,a){const t=e<0?"-":"",n=Math.abs(e).toString().padStart(a,"0");return t+n}const M={y(e,a){const t=e.getFullYear(),n=t>0?t:1-t;return d(a==="yy"?n%100:n,a.length)},M(e,a){const t=e.getMonth();return a==="M"?String(t+1):d(t+1,2)},d(e,a){return d(e.getDate(),a.length)},a(e,a){const t=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,a){return d(e.getHours()%12||12,a.length)},H(e,a){return d(e.getHours(),a.length)},m(e,a){return d(e.getMinutes(),a.length)},s(e,a){return d(e.getSeconds(),a.length)},S(e,a){const t=a.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,t-3));return d(r,a.length)}},R={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},De={G:function(e,a,t){const n=e.getFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(e,a,t){if(a==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return t.ordinalNumber(r,{unit:"year"})}return M.y(e,a)},Y:function(e,a,t,n){const r=Et(e,n),o=r>0?r:1-r;if(a==="YY"){const l=o%100;return d(l,2)}return a==="Yo"?t.ordinalNumber(o,{unit:"year"}):d(o,a.length)},R:function(e,a){const t=Mt(e);return d(t,a.length)},u:function(e,a){const t=e.getFullYear();return d(t,a.length)},Q:function(e,a,t){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return d(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,a,t){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return d(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,a,t){const n=e.getMonth();switch(a){case"M":case"MM":return M.M(e,a);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(e,a,t){const n=e.getMonth();switch(a){case"L":return String(n+1);case"LL":return d(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(e,a,t,n){const r=kt(e,n);return a==="wo"?t.ordinalNumber(r,{unit:"week"}):d(r,a.length)},I:function(e,a,t){const n=Ct(e);return a==="Io"?t.ordinalNumber(n,{unit:"week"}):d(n,a.length)},d:function(e,a,t){return a==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):M.d(e,a)},D:function(e,a,t){const n=Lt(e);return a==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):d(n,a.length)},E:function(e,a,t){const n=e.getDay();switch(a){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(e,a,t,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(o);case"ee":return d(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(e,a,t,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(o);case"cc":return d(o,a.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(e,a,t){const n=e.getDay(),r=n===0?7:n;switch(a){case"i":return String(r);case"ii":return d(r,a.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(e,a,t){const r=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,a,t){const n=e.getHours();let r;switch(n===12?r=R.noon:n===0?r=R.midnight:r=n/12>=1?"pm":"am",a){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,a,t){const n=e.getHours();let r;switch(n>=17?r=R.evening:n>=12?r=R.afternoon:n>=4?r=R.morning:r=R.night,a){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,a,t){if(a==="ho"){let n=e.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return M.h(e,a)},H:function(e,a,t){return a==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):M.H(e,a)},K:function(e,a,t){const n=e.getHours()%12;return a==="Ko"?t.ordinalNumber(n,{unit:"hour"}):d(n,a.length)},k:function(e,a,t){let n=e.getHours();return n===0&&(n=24),a==="ko"?t.ordinalNumber(n,{unit:"hour"}):d(n,a.length)},m:function(e,a,t){return a==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):M.m(e,a)},s:function(e,a,t){return a==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):M.s(e,a)},S:function(e,a){return M.S(e,a)},X:function(e,a,t){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(a){case"X":return pe(n);case"XXXX":case"XX":return E(n);case"XXXXX":case"XXX":default:return E(n,":")}},x:function(e,a,t){const n=e.getTimezoneOffset();switch(a){case"x":return pe(n);case"xxxx":case"xx":return E(n);case"xxxxx":case"xxx":default:return E(n,":")}},O:function(e,a,t){const n=e.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+ye(n,":");case"OOOO":default:return"GMT"+E(n,":")}},z:function(e,a,t){const n=e.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+ye(n,":");case"zzzz":default:return"GMT"+E(n,":")}},t:function(e,a,t){const n=Math.trunc(+e/1e3);return d(n,a.length)},T:function(e,a,t){return d(+e,a.length)}};function ye(e,a=""){const t=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),o=n%60;return o===0?t+String(r):t+String(r)+a+d(o,2)}function pe(e,a){return e%60===0?(e>0?"-":"+")+d(Math.abs(e)/60,2):E(e,a)}function E(e,a=""){const t=e>0?"-":"+",n=Math.abs(e),r=d(Math.trunc(n/60),2),o=d(n%60,2);return t+r+a+o}const qt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ft=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$t=/^'([^]*?)'?$/,Vt=/''/g,Gt=/[a-zA-Z]/;function C(e,a,t){var v,_,H,ee,te,ae,ne,N;const n=mt(),r=(t==null?void 0:t.locale)??n.locale??Pt,o=(t==null?void 0:t.firstWeekContainsDate)??((_=(v=t==null?void 0:t.locale)==null?void 0:v.options)==null?void 0:_.firstWeekContainsDate)??n.firstWeekContainsDate??((ee=(H=n.locale)==null?void 0:H.options)==null?void 0:ee.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((ae=(te=t==null?void 0:t.locale)==null?void 0:te.options)==null?void 0:ae.weekStartsOn)??n.weekStartsOn??((N=(ne=n.locale)==null?void 0:ne.options)==null?void 0:N.weekStartsOn)??0,f=k(e,t==null?void 0:t.in);if(!O(f))throw new RangeError("Invalid time value");let h=a.match(Ft).map(g=>{const y=g[0];if(y==="p"||y==="P"){const q=Tt[y];return q(g,r.formatLong)}return g}).join("").match(qt).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const y=g[0];if(y==="'")return{isToken:!1,value:Qt(g)};if(De[y])return{isToken:!0,value:g};if(y.match(Gt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:g}});r.localize.preprocessor&&(h=r.localize.preprocessor(f,h));const p={firstWeekContainsDate:o,weekStartsOn:l,locale:r};return h.map(g=>{if(!g.isToken)return g.value;const y=g.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Bt(y)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Ot(y))&&jt(y,a,String(e));const q=De[y[0]];return q(f,y,r.localize,p)}).join("")}function Qt(e){const a=e.match($t);return a?a[1].replace(Vt,"'"):e}function Kt(e,a){const t=k(e,a==null?void 0:a.in),n=t.getFullYear(),r=t.getMonth(),o=T(t,0);return o.setFullYear(n,r+1,0),o.setHours(0,0,0,0),o.getDate()}function re(e,a,t){const[n,r]=ie(t==null?void 0:t.in,e,a);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function Xt(e,a){return se(T(e,e),At(e))}function Zt(e,a,t){return P(e,-40,t)}function Ut(e,a,t){const n=k(e,t==null?void 0:t.in);return n.setDate(a),n}function we(e,a,t){return de(e,-1,t)}const Jt={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ea=(e,a,t)=>{let n;const r=Jt[e];return typeof r=="string"?n=r:a===1?n=r.one:n=r.other.replace("{{count}}",String(a)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},ta={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},aa={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},na={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ra={date:ce({formats:ta,defaultWidth:"full"}),time:ce({formats:aa,defaultWidth:"full"}),dateTime:ce({formats:na,defaultWidth:"full"})},oa={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},sa=(e,a,t,n)=>oa[e],ia={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ca={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},la={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},da={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ua={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ma=(e,a)=>Number(e)+".",ha={ordinalNumber:ma,era:$({values:ia,defaultWidth:"wide"}),quarter:$({values:ca,defaultWidth:"wide",argumentCallback:e=>e-1}),month:$({values:la,defaultWidth:"wide"}),day:$({values:da,defaultWidth:"wide"}),dayPeriod:$({values:ua,defaultWidth:"wide"})},ga=/^(\d+)\.?/i,fa=/\d+/i,Da={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ya={any:[/^f/i,/^e/i]},pa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},wa={any:[/1/i,/2/i,/3/i,/4/i]},ba={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},va={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Sa={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},xa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ca={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ka={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ma={ordinalNumber:_t({matchPattern:ga,parsePattern:fa,valueCallback:e=>parseInt(e,10)}),era:V({matchPatterns:Da,defaultMatchWidth:"wide",parsePatterns:ya,defaultParseWidth:"any"}),quarter:V({matchPatterns:pa,defaultMatchWidth:"wide",parsePatterns:wa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:V({matchPatterns:ba,defaultMatchWidth:"wide",parsePatterns:va,defaultParseWidth:"any"}),day:V({matchPatterns:Sa,defaultMatchWidth:"wide",parsePatterns:xa,defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:Ca,defaultMatchWidth:"any",parsePatterns:ka,defaultParseWidth:"any"})},S={code:"nb",formatDistance:ea,formatLong:ra,formatRelative:sa,localize:ha,match:Ma,options:{weekStartsOn:1,firstWeekContainsDate:4}},ht=({title:e,...a})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...a,children:[e&&c.jsx("title",{children:e}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.952 6.96459C16.6103 6.62289 16.0563 6.62289 15.7146 6.96459L9.2979 13.3813C8.95621 13.723 8.95621 14.277 9.2979 14.6187L15.7146 21.0354C16.0563 21.3771 16.6103 21.3771 16.952 21.0354C17.2937 20.6937 17.2937 20.1396 16.952 19.7979L11.1541 14L16.952 8.20203C17.2937 7.86032 17.2937 7.3063 16.952 6.96459Z",fill:"currentColor"})]});ht.displayName="ChevronLeftIcon";const gt=({title:e,...a})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...a,children:[e&&c.jsx("title",{children:e}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z",fill:"currentColor"})]});gt.displayName="ChevronRightIcon";const Ea="_calendarContainer_1ukqo_1",Pa="_calendarHeader_1ukqo_16",Ba="_monthYear_1ukqo_23",Oa="_navigationButtons_1ukqo_34",ja="_gridWrapper_1ukqo_43",Ta="_gridRow_1ukqo_48",_a="_dayNameCell_1ukqo_55",Ha="_dateCell_1ukqo_73",Na="_dateNumberContainer_1ukqo_106",Ra="_otherMonth_1ukqo_119",Aa="_disabled_1ukqo_119",za="_selectedDate_1ukqo_145",b={calendarContainer:Ea,calendarHeader:Pa,monthYear:Ba,navigationButtons:Oa,gridWrapper:ja,gridRow:Ta,dayNameCell:_a,dateCell:Ha,dateNumberContainer:Na,otherMonth:Ra,disabled:Aa,selectedDate:za},Wa=e=>{const a=B(e),t=le(a,{locale:S}),n=P(t,41);return Wt({start:t,end:n})},be=e=>e&&e.charAt(0).toUpperCase()+e.slice(1),G=(e,a)=>{const t=Math.min(e.getDate(),Kt(a));return Ut(B(a),t)},w=({initialDate:e=new Date,selectedDate:a=null,onDateSelect:t,"data-color":n,"data-size":r})=>{const{t:o}=St();m.useEffect(()=>{const i="rk-datepicker-inline-styles";if(typeof document>"u"||document.getElementById(i))return;const s=Ya(b),D=document.createElement("style");D.id=i,D.textContent=s,document.head.appendChild(D)},[]);const[l,f]=m.useState(B(a&&O(a)?a:e)),[h,p]=m.useState(()=>a&&O(a)?a:e),v=m.useRef(null),_=m.useRef(!1);m.useEffect(()=>{if(a&&O(a)){p(a);const i=B(a);f(s=>re(i,s)?s:i)}},[a]),m.useEffect(()=>{var s;if(!_.current)return;_.current=!1;const i=(s=v.current)==null?void 0:s.querySelector(`[data-date="${C(h,"yyyy-MM-dd")}"]`);i==null||i.focus()},[h,l]);const H=m.useMemo(()=>Wa(l),[l]),ee=m.useMemo(()=>{const i=[];for(let s=0;s<H.length;s+=7)i.push(H.slice(s,s+7));return i},[H]),te=m.useMemo(()=>{const i=le(new Date,{locale:S});return Array.from({length:7}).map((s,D)=>{const F=C(P(i,D),"EEEEEE",{locale:S});return be(F)})},[]),ae=m.useCallback(()=>{f(i=>{const s=B(we(i));return p(D=>G(D,s)),s})},[]),ne=m.useCallback(()=>{f(i=>{const s=B(de(i,1));return p(D=>G(D,s)),s})},[]),N=m.useCallback(i=>{p(i),t==null||t(i)},[t]),g=m.useCallback(i=>{_.current=!0,p(i),f(s=>re(i,s)?s:B(i))},[]),y=m.useCallback((i,s)=>{switch(i.key){case"Enter":case" ":i.preventDefault(),N(s);return;case"ArrowLeft":i.preventDefault(),g(P(s,-1));return;case"ArrowRight":i.preventDefault(),g(P(s,1));return;case"ArrowUp":i.preventDefault(),g(P(s,-7));return;case"ArrowDown":i.preventDefault(),g(P(s,7));return;case"Home":i.preventDefault(),g(le(s,{locale:S}));return;case"End":i.preventDefault(),g(It(s,{locale:S}));return;case"PageUp":i.preventDefault(),g(G(s,we(s)));return;case"PageDown":i.preventDefault(),g(G(s,de(s,1)));return}},[N,g]),q=C(l,"MMMM",{locale:S}),Dt=C(l,"yyyy",{locale:S}),yt=`${be(q)} ${Dt}`,me=m.useId(),pt=re(h,l)?h:G(h,l);return c.jsxs("div",{className:b.calendarContainer,"data-color":n,"data-size":r,children:[c.jsxs("div",{className:b.calendarHeader,children:[c.jsx("span",{className:b.monthYear,id:me,"aria-live":"polite",children:yt}),c.jsxs("div",{className:b.navigationButtons,children:[c.jsx(ge,{variant:"tertiary",icon:!0,onClick:ae,"aria-label":o("datePicker.previousMonth"),children:c.jsx(ht,{})}),c.jsx(ge,{variant:"tertiary",icon:!0,onClick:ne,"aria-label":o("datePicker.nextMonth"),children:c.jsx(gt,{})})]})]}),c.jsxs("div",{role:"grid","aria-labelledby":me,className:b.gridWrapper,ref:v,children:[c.jsx("div",{role:"row",className:b.gridRow,children:te.map(i=>c.jsx("div",{role:"columnheader",className:b.dayNameCell,children:i},i))}),ee.map(i=>c.jsx("div",{role:"row",className:b.gridRow,children:i.map(s=>{const D=re(s,l),F=a&&O(a)&&se(s,a),he=Xt(s),wt=D&&se(s,pt),bt=[b.dateCell,D?"":b.otherMonth,F?b.selectedDate:"",he&&!F?b.todayDate:""].filter(Boolean).join(" ");return c.jsx("div",{role:"gridcell",className:bt,"data-date":C(s,"yyyy-MM-dd"),onClick:D?()=>N(s):void 0,onKeyDown:D?vt=>y(vt,s):void 0,tabIndex:D?wt?0:-1:void 0,"aria-selected":D?!!F:void 0,"aria-disabled":!D||void 0,"aria-current":he?"date":void 0,"aria-label":C(s,"PPP",{locale:S}),children:c.jsx("span",{className:b.dateNumberContainer,children:C(s,"d")})},s.toISOString())})},i[0].toISOString()))]})]})};w.displayName="DatePicker";function Ya(e){return`
.${e.calendarContainer} {
  display: inline-flex;
  padding: var(--ds-size-8, 32px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ds-size-3, 12px);
  border: 1px solid var(--ds-color-border-subtle, #ccc);
  border-radius: var(--ds-border-radius-md, 4px);
  background-color: var(--ds-color-background-default, #fff);
  font-family: var(--ds-font-family, sans-serif);
  color: var(--ds-color-text-default, #2b2b2b);
  max-width: 100%;
  box-sizing: border-box;
}
.${e.calendarHeader} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.${e.monthYear} {
  color: var(--ds-color-text-default, #2b2b2b);
  font-family: var(--ds-font-family, sans-serif);
  font-size: var(--ds-heading-sm-font-size, 1.5rem);
  font-weight: var(--ds-heading-sm-font-weight, 500);
  line-height: var(--ds-heading-sm-line-height, 1.3);
  margin: 0;
}
.${e.navigationButtons} {
  display: flex;
  gap: var(--ds-size-1, 4px);
}
.${e.navigationButtons} > button:disabled svg {
  opacity: var(--ds-opacity-disabled, 0.3);
}
.${e.gridWrapper} {
  width: 100%;
  overflow: hidden;
}
.${e.gridRow} {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  text-align: center;
}
.${e.dayNameCell} {
  display: flex;
  padding: var(--ds-size-2, 8px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--ds-color-text-default, #2b2b2b);
  text-align: center;
  font-family: var(--ds-font-family, sans-serif);
  font-size: var(--ds-body-xs-font-size, 14px);
  font-weight: var(--ds-font-weight-semibold, 600);
  line-height: var(--ds-body-short-xs-line-height, 1.3);
  box-sizing: border-box;
  min-width: 0;
}
.${e.dateCell} {
  display: flex;
  padding: var(--ds-size-5, 22px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #bcbcbc);
  box-sizing: border-box;
  margin: -0.5px;
  font-family: var(--ds-font-family, sans-serif);
  color: var(--ds-color-text-default, #2b2b2b);
  text-align: center;
  font-size: var(--ds-body-xs-font-size, 14px);
  font-weight: var(--ds-body-xs-font-weight, 400);
  line-height: var(--ds-body-short-xs-line-height, 1.3);
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  user-select: none;
  min-width: 0;
}
.${e.dateCell}:focus-visible {
  outline: var(--ds-border-width-focus, 3px) solid var(--ds-color-focus-outer, #2b2b2b);
  outline-offset: calc(-1 * var(--ds-border-width-focus, 3px));
  position: relative;
  z-index: 2;
}
.${e.dateNumberContainer} {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: color 0.15s ease-in-out, font-weight 0.15s ease-in-out;
  line-height: 1;
  box-sizing: border-box;
  background-color: transparent;
}
.${e.dateCell}:hover:not(.${e.otherMonth}):not(.${e.disabled}) {
  background-color: var(--ds-color-surface-hover, #eee);
  position: relative;
  z-index: 1;
}
.${e.otherMonth} {
  color: var(--ds-color-text-subtle, #aaa);
  cursor: default;
  pointer-events: none;
  background-color: var(--ds-color-surface-tinted, #e8e8e8);
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #bcbcbc);
  margin: -0.5px;
}
.${e.selectedDate} {
  background-color: var(--ds-color-base-default, #C30000);
  border-color: var(--ds-color-base-default, #C30000);
  color: var(--ds-color-base-contrast-default, #fff);
  position: relative;
  z-index: 1;
}
.${e.selectedDate} .${e.dateNumberContainer} {
  color: var(--ds-color-base-contrast-default, #fff);
  font-weight: var(--ds-font-weight-semibold, 600);
  background-color: transparent;
}
.${e.todayDate} .${e.dateNumberContainer} {
  font-weight: var(--ds-font-weight-semibold, 600);
}
@media (max-width: 480px) {
  .${e.calendarContainer} {
    padding: var(--ds-size-4, 16px);
    gap: var(--ds-size-2, 8px);
    width: 100%;
  }
  .${e.monthYear} {
    font-size: var(--ds-heading-xs-font-size, 1.125rem);
  }
  .${e.dayNameCell} {
    padding: var(--ds-size-1, 4px);
    font-size: var(--ds-font-size-1, 12px);
  }
  .${e.dateCell} {
    padding: var(--ds-size-2, 8px);
    font-size: var(--ds-font-size-1, 12px);
  }
  .${e.dateNumberContainer} {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 360px) {
  .${e.calendarContainer} {
    padding: var(--ds-size-2, 8px);
  }
  .${e.dayNameCell} {
    padding: 2px;
    font-size: 10px;
  }
  .${e.dateCell} {
    padding: var(--ds-size-1, 4px);
    font-size: 11px;
  }
  .${e.dateNumberContainer} {
    width: 16px;
    height: 16px;
  }
}
`}try{w.displayName="DatePicker",w.__docgenInfo={description:`DatePicker-komponent for å velge en dato fra en kalender.
Kalenderen følger ARIA-grid-mønsteret: ett tabstopp, piltaster mellom
dager (på tvers av måneder), Home/End til start/slutt av uken og
PageUp/PageDown mellom måneder.`,displayName:"DatePicker",props:{}}}catch{}const ft=({title:e,...a})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...a,children:[e&&c.jsx("title",{children:e}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V4.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V4.25H19.5C20.1904 4.25 20.75 4.80964 20.75 5.5V18.5C20.75 19.1904 20.1904 19.75 19.5 19.75H4.5C3.80964 19.75 3.25 19.1904 3.25 18.5V5.5C3.25 4.80964 3.80964 4.25 4.5 4.25H8.25V3C8.25 2.58579 8.58579 2.25 9 2.25ZM15.75 7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V5.75H9.75V7C9.75 7.41421 9.41421 7.75 9 7.75C8.58579 7.75 8.25 7.41421 8.25 7V5.75H4.75V9.25H19.25V5.75H15.75V7ZM4.75 18.25V10.75H19.25V18.25H4.75ZM6.75 13C6.75 12.5858 7.08579 12.25 7.5 12.25H8.5C8.91421 12.25 9.25 12.5858 9.25 13C9.25 13.4142 8.91421 13.75 8.5 13.75H7.5C7.08579 13.75 6.75 13.4142 6.75 13ZM10.75 13C10.75 12.5858 11.0858 12.25 11.5 12.25H12.5C12.9142 12.25 13.25 12.5858 13.25 13C13.25 13.4142 12.9142 13.75 12.5 13.75H11.5C11.0858 13.75 10.75 13.4142 10.75 13ZM15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13C14.75 13.4142 15.0858 13.75 15.5 13.75H16.5C16.9142 13.75 17.25 13.4142 17.25 13C17.25 12.5858 16.9142 12.25 16.5 12.25H15.5ZM10.75 16C10.75 15.5858 11.0858 15.25 11.5 15.25H12.5C12.9142 15.25 13.25 15.5858 13.25 16C13.25 16.4142 12.9142 16.75 12.5 16.75H11.5C11.0858 16.75 10.75 16.4142 10.75 16ZM15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16C14.75 16.4142 15.0858 16.75 15.5 16.75H16.5C16.9142 16.75 17.25 16.4142 17.25 16C17.25 15.5858 16.9142 15.25 16.5 15.25H15.5ZM6.75 16C6.75 15.5858 7.08579 15.25 7.5 15.25H8.5C8.91421 15.25 9.25 15.5858 9.25 16C9.25 16.4142 8.91421 16.75 8.5 16.75H7.5C7.08579 16.75 6.75 16.4142 6.75 16Z",fill:"currentColor"})]});ft.displayName="CalendarIcon";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,{expect:u,within:J,userEvent:x,fn:ue}=__STORYBOOK_MODULE_TEST__,Ia={title:"Components/DatePicker",component:w,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{initialDate:{control:{type:"date"},description:"Initial month to display in the calendar."},selectedDate:{control:{type:"date"},description:"The currently selected date (primarily for standalone calendar stories)."},onDateSelect:{action:"dateSelected",description:"Callback function when a date is selected in the calendar."},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Color scheme",defaultValue:"neutral"}}},Q={name:"Calendar Only (Default)",render:e=>{const[a,t]=m.useState(e.selectedDate||null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date,selectedDate:null,onDateSelect:j("dateSelected")}},K={name:"Calendar Only (Selected)",render:e=>{const[a,t]=m.useState(e.selectedDate||new Date),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date,selectedDate:new Date,onDateSelect:j("dateSelected")}},X={name:"Calendar Only (Previous Month)",render:e=>{const[a,t]=m.useState(e.selectedDate||null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:Zt(new Date),selectedDate:null,onDateSelect:j("dateSelected")}},Z={name:"Calendar Only (Custom Size/Color)",render:e=>{const[a,t]=m.useState(e.selectedDate||new Date),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date,selectedDate:new Date,"data-size":"lg","data-color":"additional-color-ocean",onDateSelect:j("dateSelected")}},La=e=>{const[a,t]=m.useState(e.selectedDate&&O(e.selectedDate)?e.selectedDate:null),[n,r]=m.useState(a?C(a,"dd.MM.yyyy",{locale:S}):""),o=h=>{t(h),j("dateSelected (Calendar)")(h)},l=(h,p)=>{r(p);const v=Nt(p,"dd.MM.yyyy",new Date,{locale:S});O(v)&&p.length===10?(!a||!se(v,a))&&(t(v),j("inputParsedAndDateSelected (Input)")(v)):p===""&&a!==null&&(t(null),j("inputCleared (Input)")())};m.useEffect(()=>{const h=a?C(a,"dd.MM.yyyy",{locale:S}):"";h!==n&&r(h)},[a,n]);const f=a?C(a,"PPP",{locale:S}):"Ingen dato valgt";return c.jsxs("div",{style:{display:"inline-block",fontFamily:"sans-serif"},children:[c.jsxs("p",{style:{marginBottom:"10px",fontSize:"14px",minHeight:"20px"},children:["Valgt dato: ",c.jsx("strong",{children:f})]}),c.jsx("div",{style:{marginBottom:"10px"},children:c.jsx(Ht,{"aria-label":"Velg dato (dd.mm.åååå)",value:n,onChange:l,placeholder:"dd.mm.åååå",suffixIcon:c.jsx(ft,{}),"data-size":e["data-size"],"data-color":e["data-color"]})}),c.jsx(w,{...e,selectedDate:a,onDateSelect:o,initialDate:a||e.initialDate||new Date})]})},U={name:"Example Combined Input + Calendar",render:e=>c.jsx(La,{...e}),args:{initialDate:new Date},argTypes:{initialDate:{control:{type:"date"}},selectedDate:{table:{disable:!0}},onDateSelect:{table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"]}}},A={name:"Test: Date Selection",render:e=>{const[a,t]=m.useState(null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:ue()},play:async({canvasElement:e,args:a})=>{const n=J(e).getByRole("gridcell",{name:"15. januar 2025"});await x.click(n),u(a.onDateSelect).toHaveBeenCalled(),u(n).toHaveAttribute("aria-selected","true")}},z={name:"Test: Grid Semantics",render:e=>c.jsx(w,{...e}),args:{initialDate:new Date(2025,0,15)},play:async({canvasElement:e})=>{const a=J(e),t=a.getByRole("grid",{name:/januar 2025/i});u(t).toBeInTheDocument(),u(a.getAllByRole("columnheader").length).toBe(7),u(a.getAllByRole("row").length).toBe(7);const n=t.querySelectorAll('[tabindex="0"]');u(n.length).toBe(1),u(n[0]).toHaveAccessibleName("15. januar 2025");const r=t.querySelectorAll('[aria-disabled="true"]');u(r.length).toBeGreaterThan(0),r.forEach(o=>{u(o).not.toHaveAttribute("tabindex")})}},W={name:"Test: Arrow Key Navigation",render:e=>{const[a,t]=m.useState(null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:ue()},play:async({canvasElement:e,args:a})=>{const t=J(e),n=e.ownerDocument,r=()=>{var l;return(l=n.activeElement)==null?void 0:l.getAttribute("data-date")};t.getByRole("gridcell",{name:"15. januar 2025"}).focus(),await x.keyboard("{ArrowRight}"),u(r()).toBe("2025-01-16"),await x.keyboard("{ArrowDown}"),u(r()).toBe("2025-01-23"),await x.keyboard("{ArrowLeft}"),u(r()).toBe("2025-01-22"),await x.keyboard("{ArrowUp}"),u(r()).toBe("2025-01-15"),t.getByRole("gridcell",{name:"31. januar 2025"}).focus(),await x.keyboard("{ArrowRight}"),u(r()).toBe("2025-02-01"),u(t.getByRole("grid",{name:/februar 2025/i})).toBeInTheDocument(),await x.keyboard("{PageDown}"),u(r()).toBe("2025-03-01"),await x.keyboard("{Enter}"),u(a.onDateSelect).toHaveBeenCalled();const o=a.onDateSelect.mock.lastCall[0];u(o.getFullYear()).toBe(2025),u(o.getMonth()).toBe(2),u(o.getDate()).toBe(1)}},Y={name:"Test: Month Navigation",render:e=>{const[a,t]=m.useState(null);return c.jsx(w,{...e,selectedDate:a,onDateSelect:t})},args:{initialDate:new Date(2025,5,15)},play:async({canvasElement:e})=>{const a=J(e),t=()=>{const o=e.querySelector('[class*="monthYear"]');return(o==null?void 0:o.textContent)||""};u(t()).toContain("2025"),u(t().toLowerCase()).toContain("juni");const n=a.getByRole("button",{name:/neste/i});await x.click(n),u(t().toLowerCase()).toContain("juli");const r=a.getByRole("button",{name:/forrige/i});await x.click(r),await x.click(r),u(t().toLowerCase()).toContain("mai")}},I={name:"Test: Space Selection",render:e=>{const[a,t]=m.useState(null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return c.jsx(w,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:ue()},play:async({canvasElement:e,args:a})=>{const n=J(e).getByRole("gridcell",{name:"10. januar 2025"});n.focus(),await x.keyboard(" "),u(a.onDateSelect).toHaveBeenCalled(),u(n).toHaveAttribute("aria-selected","true")}},L={name:"Test: Today Highlight",render:e=>{const[a,t]=m.useState(null);return c.jsx(w,{...e,selectedDate:a,onDateSelect:t})},args:{initialDate:new Date},play:async({canvasElement:e})=>{var n;const a=e.querySelectorAll('[aria-current="date"]');u(a.length).toBe(1);const t=a[0];u((n=t.textContent)==null?void 0:n.trim()).toBe(new Date().getDate().toString()),u(t).not.toHaveAttribute("aria-disabled")}};var ve,Se,xe;Q.parameters={...Q.parameters,docs:{...(ve=Q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Calendar Only (Default)',
  render: args => {
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || null);
    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date); // Call the Storybook action logger
    };
    return <DatePicker {...args} // Pass through initialDate etc.
    selectedDate={storySelectedDate} // Use story's local state for highlighting
    onDateSelect={handleSelect} // Use story's local handler
    />;
  },
  args: {
    // Default args for this story
    initialDate: new Date(),
    selectedDate: null,
    onDateSelect: action('dateSelected') // Log actions in Storybook panel
  }
}`,...(xe=(Se=Q.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Ce,ke,Me;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Calendar Only (Selected)',
  render: args => {
    // Initialize state from args.selectedDate if provided
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || new Date() // Default to today if args.selectedDate is not set
    );
    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date);
    };
    return <DatePicker {...args} selectedDate={storySelectedDate} onDateSelect={handleSelect} />;
  },
  args: {
    initialDate: new Date(),
    selectedDate: new Date(),
    // Set the initial selected date via args
    onDateSelect: action('dateSelected')
  }
}`,...(Me=(ke=K.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Ee,Pe,Be;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Calendar Only (Previous Month)',
  render: args => {
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || null);
    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date);
    };
    return <DatePicker {...args} selectedDate={storySelectedDate} onDateSelect={handleSelect} />;
  },
  args: {
    initialDate: subDays(new Date(), 40),
    // Start calendar view ~40 days ago
    selectedDate: null,
    onDateSelect: action('dateSelected')
  }
}`,...(Be=(Pe=X.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Oe,je,Te;Z.parameters={...Z.parameters,docs:{...(Oe=Z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Calendar Only (Custom Size/Color)',
  render: args => {
    // Same render as DefaultCalendar
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || new Date() // Default to selecting today
    );
    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date);
    };
    return <DatePicker {...args} selectedDate={storySelectedDate} onDateSelect={handleSelect} />;
  },
  args: {
    initialDate: new Date(),
    selectedDate: new Date(),
    'data-size': 'lg',
    'data-color': 'additional-color-ocean',
    onDateSelect: action('dateSelected')
  }
}`,...(Te=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var _e,He,Ne;U.parameters={...U.parameters,docs:{...(_e=U.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Example Combined Input + Calendar',
  render: args => <DatePickerInputCombo {...args} />,
  args: {
    // Default args for the combined story
    // Set initialDate for the calendar's starting month view
    initialDate: new Date()
    // selectedDate can be set here to provide an initial value for the combo
    // selectedDate: new Date(), // Example: Start with today selected
  },
  argTypes: {
    // Allow controlling the initial calendar month for the combo story
    initialDate: {
      control: {
        type: 'date'
      }
    },
    // Disable controls for props managed internally by DatePickerInputCombo
    selectedDate: {
      table: {
        disable: true
      }
    },
    // Managed by state
    onDateSelect: {
      table: {
        disable: true
      }
    },
    // Handled internally
    // Re-enable data-size and data-color controls for this story
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    'data-color': {
      control: 'select',
      options: ['primary-color-red', 'secondary-color-orange', 'secondary-color-rust', 'secondary-color-pink', 'additional-color-ocean', 'additional-color-jungle', 'neutral']
    }
  }
}`,...(Ne=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Re,Ae,ze,We,Ye;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Test: Date Selection',
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleSelect = (date: Date) => {
      setSelectedDate(date);
      args.onDateSelect?.(date);
    };
    return <DatePicker {...args} selectedDate={selectedDate} onDateSelect={handleSelect} />;
  },
  args: {
    initialDate: new Date(2025, 0, 15),
    // January 2025
    onDateSelect: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const day15Cell = canvas.getByRole('gridcell', {
      name: '15. januar 2025'
    });
    await userEvent.click(day15Cell);
    expect(args.onDateSelect).toHaveBeenCalled();
    expect(day15Cell).toHaveAttribute('aria-selected', 'true');
  }
}`,...(ze=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source},description:{story:`Tests that clicking a date cell triggers the onDateSelect callback
and visually marks the date as selected.`,...(Ye=(We=A.parameters)==null?void 0:We.docs)==null?void 0:Ye.description}}};var Ie,Le,qe,Fe,$e;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Test: Grid Semantics',
  render: args => <DatePicker {...args} />,
  args: {
    initialDate: new Date(2025, 0, 15)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const grid = canvas.getByRole('grid', {
      name: /januar 2025/i
    });
    expect(grid).toBeInTheDocument();
    expect(canvas.getAllByRole('columnheader').length).toBe(7);
    expect(canvas.getAllByRole('row').length).toBe(7); // 1 header + 6 uker

    // Nøyaktig ett tabstopp i hele gridet
    const tabStops = grid.querySelectorAll('[tabindex="0"]');
    expect(tabStops.length).toBe(1);
    expect(tabStops[0]).toHaveAccessibleName('15. januar 2025');

    // Celler utenfor måneden: deaktivert og ikke fokuserbare
    const outside = grid.querySelectorAll('[aria-disabled="true"]');
    expect(outside.length).toBeGreaterThan(0);
    outside.forEach(cell => {
      expect(cell).not.toHaveAttribute('tabindex');
    });
  }
}`,...(qe=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:qe.source},description:{story:`The calendar follows the ARIA grid pattern: one grid labelled by the
month header, 7 column headers, a single tab stop (roving tabindex),
and out-of-month cells disabled in every modality.`,...($e=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:$e.description}}};var Ve,Ge,Qe,Ke,Xe;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Test: Arrow Key Navigation',
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleSelect = (date: Date) => {
      setSelectedDate(date);
      args.onDateSelect?.(date);
    };
    return <DatePicker {...args} selectedDate={selectedDate} onDateSelect={handleSelect} />;
  },
  args: {
    initialDate: new Date(2025, 0, 15),
    onDateSelect: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    const activeDate = () => doc.activeElement?.getAttribute('data-date');
    canvas.getByRole('gridcell', {
      name: '15. januar 2025'
    }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(activeDate()).toBe('2025-01-16');
    await userEvent.keyboard('{ArrowDown}');
    expect(activeDate()).toBe('2025-01-23');
    await userEvent.keyboard('{ArrowLeft}');
    expect(activeDate()).toBe('2025-01-22');
    await userEvent.keyboard('{ArrowUp}');
    expect(activeDate()).toBe('2025-01-15');

    // Piltast over månedsgrensen: visningen følger fokus
    canvas.getByRole('gridcell', {
      name: '31. januar 2025'
    }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(activeDate()).toBe('2025-02-01');
    expect(canvas.getByRole('grid', {
      name: /februar 2025/i
    })).toBeInTheDocument();

    // PageDown hopper en måned frem
    await userEvent.keyboard('{PageDown}');
    expect(activeDate()).toBe('2025-03-01');

    // Enter velger fokusert dag
    await userEvent.keyboard('{Enter}');
    expect(args.onDateSelect).toHaveBeenCalled();
    const selected = (args.onDateSelect as ReturnType<typeof fn>).mock.lastCall![0] as Date;
    expect(selected.getFullYear()).toBe(2025);
    expect(selected.getMonth()).toBe(2);
    expect(selected.getDate()).toBe(1);
  }
}`,...(Qe=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source},description:{story:`Arrow keys move focus between days, End jumps to the end of the week,
PageDown moves a month ahead (the view follows), and Enter selects the
focused day.`,...(Xe=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.description}}};var Ze,Ue,Je,et,tt;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Test: Month Navigation',
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return <DatePicker {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  },
  args: {
    initialDate: new Date(2025, 5, 15) // June 2025
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Get the month/year header text
    const getMonthYearText = () => {
      // The month-year header contains the capitalized month name and year
      const header = canvasElement.querySelector('[class*="monthYear"]');
      return header?.textContent || '';
    };

    // Verify initial month is June 2025
    expect(getMonthYearText()).toContain('2025');
    expect(getMonthYearText().toLowerCase()).toContain('juni');

    // Find and click the next month button
    const nextButton = canvas.getByRole('button', {
      name: /neste/i
    });
    await userEvent.click(nextButton);

    // Verify we're now in July 2025
    expect(getMonthYearText().toLowerCase()).toContain('juli');

    // Find and click the previous month button twice to go back to May
    const prevButton = canvas.getByRole('button', {
      name: /forrige/i
    });
    await userEvent.click(prevButton);
    await userEvent.click(prevButton);

    // Verify we're now in May 2025
    expect(getMonthYearText().toLowerCase()).toContain('mai');
  }
}`,...(Je=(Ue=Y.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source},description:{story:"Tests month navigation using the previous/next buttons.",...(tt=(et=Y.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,nt,rt,ot,st;I.parameters={...I.parameters,docs:{...(at=I.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Test: Space Selection',
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleSelect = (date: Date) => {
      setSelectedDate(date);
      args.onDateSelect?.(date);
    };
    return <DatePicker {...args} selectedDate={selectedDate} onDateSelect={handleSelect} />;
  },
  args: {
    initialDate: new Date(2025, 0, 15),
    onDateSelect: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const day10Cell = canvas.getByRole('gridcell', {
      name: '10. januar 2025'
    });
    day10Cell.focus();
    await userEvent.keyboard(' ');
    expect(args.onDateSelect).toHaveBeenCalled();
    expect(day10Cell).toHaveAttribute('aria-selected', 'true');
  }
}`,...(rt=(nt=I.parameters)==null?void 0:nt.docs)==null?void 0:rt.source},description:{story:"Space selects the focused date, like Enter.",...(st=(ot=I.parameters)==null?void 0:ot.docs)==null?void 0:st.description}}};var it,ct,lt,dt,ut;L.parameters={...L.parameters,docs:{...(it=L.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: 'Test: Today Highlight',
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return <DatePicker {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  },
  args: {
    initialDate: new Date() // Current month
  },
  play: async ({
    canvasElement
  }) => {
    const todayCells = canvasElement.querySelectorAll('[aria-current="date"]');
    expect(todayCells.length).toBe(1);
    const todayCell = todayCells[0];
    expect(todayCell.textContent?.trim()).toBe(new Date().getDate().toString());
    expect(todayCell).not.toHaveAttribute('aria-disabled');
  }
}`,...(lt=(ct=L.parameters)==null?void 0:ct.docs)==null?void 0:lt.source},description:{story:`Today's date is marked with aria-current="date".`,...(ut=(dt=L.parameters)==null?void 0:dt.docs)==null?void 0:ut.description}}};const qa=["DefaultCalendar","CalendarWithSelectedDate","CalendarStartingInPreviousMonth","CalendarWithCustomSizeAndColor","CombinedInputAndCalendar","TestDateSelection","TestGridSemantics","TestArrowKeyNavigation","TestMonthNavigation","TestSpaceSelection","TestTodayHighlight"],Qa=Object.freeze(Object.defineProperty({__proto__:null,CalendarStartingInPreviousMonth:X,CalendarWithCustomSizeAndColor:Z,CalendarWithSelectedDate:K,CombinedInputAndCalendar:U,DefaultCalendar:Q,TestArrowKeyNavigation:W,TestDateSelection:A,TestGridSemantics:z,TestMonthNavigation:Y,TestSpaceSelection:I,TestTodayHighlight:L,__namedExportsOrder:qa,default:Ia},Symbol.toStringTag,{value:"Module"}));export{K as C,Qa as D,Q as a,Z as b,U as c};
