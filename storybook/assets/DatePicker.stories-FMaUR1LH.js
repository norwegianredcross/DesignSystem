import{j as i,r as m}from"./iframe-zMUAsk2S.js";import{B as fe}from"./tooltip-3fUcyaAG.js";import{u as Pt,L as Tt,a as jt}from"./LanguageContext-DPnKwTJC.js";import{t as k,c as O,g as ye,m as Ot,a as yt,b as Ht,d as _t,e as Nt,f as Rt,h as zt,i as T,j as Lt,k as At,w as It,l as Wt,n as R,o as q,p as Yt,q as qt,r as Ft,s as $t,u as G,v as Q,x as Vt,y as de,D as Gt,z as Qt}from"./index-yLzQJ3P2.js";function ue(e,t,a){const n=k(e,a==null?void 0:a.in);if(isNaN(t))return O(e,NaN);if(!t)return n;const r=n.getDate(),o=O(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const h=o.getDate();return r>=h?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}function le(e,...t){const a=O.bind(null,t.find(n=>typeof n=="object"));return t.map(a)}function ie(e,t){const a=k(e,t==null?void 0:t.in);return a.setHours(0,0,0,0),a}function Kt(e,t,a){const[n,r]=le(a==null?void 0:a.in,e,t),o=ie(n),h=ie(r),g=+o-ye(o),u=+h-ye(h);return Math.round((g-u)/Ot)}function Xt(e){return O(e,Date.now())}function ce(e,t,a){const[n,r]=le(a==null?void 0:a.in,e,t);return+ie(n)==+ie(r)}function Ut(e,t){const a=k(e,t==null?void 0:t.in),n=a.getMonth();return a.setFullYear(a.getFullYear(),n+1,0),a.setHours(23,59,59,999),a}function Zt(e,t){const[a,n]=le(e,t.start,t.end);return{start:a,end:n}}function Jt(e,t){const{start:a,end:n}=Zt(t==null?void 0:t.in,e);let r=+a>+n;const o=r?+a:+n,h=r?n:a;h.setHours(0,0,0,0);let g=1;const u=[];for(;+h<=o;)u.push(O(a,h)),h.setDate(h.getDate()+g),h.setHours(0,0,0,0);return r?u.reverse():u}function P(e,t){const a=k(e,t==null?void 0:t.in);return a.setDate(1),a.setHours(0,0,0,0),a}function ea(e,t){const a=k(e,t==null?void 0:t.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function Dt(e,t){var g,u,b,D;const a=yt(),n=(t==null?void 0:t.weekStartsOn)??((u=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:u.weekStartsOn)??a.weekStartsOn??((D=(b=a.locale)==null?void 0:b.options)==null?void 0:D.weekStartsOn)??0,r=k(e,t==null?void 0:t.in),o=r.getDay(),h=(o<n?-7:0)+6-(o-n);return r.setDate(r.getDate()+h),r.setHours(23,59,59,999),r}function ta(e,t){const a=k(e,t==null?void 0:t.in);return Kt(a,ea(a))+1}function d(e,t){const a=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return a+n}const B={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return d(t==="yy"?n%100:n,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):d(a+1,2)},d(e,t){return d(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return d(e.getHours()%12||12,t.length)},H(e,t){return d(e.getHours(),t.length)},m(e,t){return d(e.getMinutes(),t.length)},s(e,t){return d(e.getSeconds(),t.length)},S(e,t){const a=t.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,a-3));return d(r,t.length)}},N={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},De={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return B.y(e,t)},Y:function(e,t,a,n){const r=Rt(e,n),o=r>0?r:1-r;if(t==="YY"){const h=o%100;return d(h,2)}return t==="Yo"?a.ordinalNumber(o,{unit:"year"}):d(o,t.length)},R:function(e,t){const a=Nt(e);return d(a,t.length)},u:function(e,t){const a=e.getFullYear();return d(a,t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return d(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return d(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return B.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return d(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const r=_t(e,n);return t==="wo"?a.ordinalNumber(r,{unit:"week"}):d(r,t.length)},I:function(e,t,a){const n=Ht(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):d(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):B.d(e,t)},D:function(e,t,a){const n=ta(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):d(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return d(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return d(o,t.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),r=n===0?7:n;switch(t){case"i":return String(r);case"ii":return d(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let r;switch(n===12?r=N.noon:n===0?r=N.midnight:r=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let r;switch(n>=17?r=N.evening:n>=12?r=N.afternoon:n>=4?r=N.morning:r=N.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return B.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):B.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):d(n,t.length)},k:function(e,t,a){let n=e.getHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):d(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):B.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):B.s(e,t)},S:function(e,t){return B.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return we(n);case"XXXX":case"XX":return E(n);case"XXXXX":case"XXX":default:return E(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return we(n);case"xxxx":case"xx":return E(n);case"xxxxx":case"xxx":default:return E(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pe(n,":");case"OOOO":default:return"GMT"+E(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pe(n,":");case"zzzz":default:return"GMT"+E(n,":")}},t:function(e,t,a){const n=Math.trunc(+e/1e3);return d(n,t.length)},T:function(e,t,a){return d(+e,t.length)}};function pe(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),o=n%60;return o===0?a+String(r):a+String(r)+t+d(o,2)}function we(e,t){return e%60===0?(e>0?"-":"+")+d(Math.abs(e)/60,2):E(e,t)}function E(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=d(Math.trunc(n/60),2),o=d(n%60,2);return a+r+t+o}const aa=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,na=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ra=/^'([^]*?)'?$/,oa=/''/g,sa=/[a-zA-Z]/;function C(e,t,a){var D,M,$,H,_,ne,re,oe;const n=yt(),r=(a==null?void 0:a.locale)??n.locale??zt,o=(a==null?void 0:a.firstWeekContainsDate)??((M=(D=a==null?void 0:a.locale)==null?void 0:D.options)==null?void 0:M.firstWeekContainsDate)??n.firstWeekContainsDate??((H=($=n.locale)==null?void 0:$.options)==null?void 0:H.firstWeekContainsDate)??1,h=(a==null?void 0:a.weekStartsOn)??((ne=(_=a==null?void 0:a.locale)==null?void 0:_.options)==null?void 0:ne.weekStartsOn)??n.weekStartsOn??((oe=(re=n.locale)==null?void 0:re.options)==null?void 0:oe.weekStartsOn)??0,g=k(e,a==null?void 0:a.in);if(!T(g))throw new RangeError("Invalid time value");let u=t.match(na).map(w=>{const f=w[0];if(f==="p"||f==="P"){const S=Wt[f];return S(w,r.formatLong)}return w}).join("").match(aa).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const f=w[0];if(f==="'")return{isToken:!1,value:ia(w)};if(De[f])return{isToken:!0,value:w};if(f.match(sa))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:w}});r.localize.preprocessor&&(u=r.localize.preprocessor(g,u));const b={firstWeekContainsDate:o,weekStartsOn:h,locale:r};return u.map(w=>{if(!w.isToken)return w.value;const f=w.value;(!(a!=null&&a.useAdditionalWeekYearTokens)&&Lt(f)||!(a!=null&&a.useAdditionalDayOfYearTokens)&&At(f))&&It(f,t,String(e));const S=De[f[0]];return S(g,f,r.localize,b)}).join("")}function ia(e){const t=e.match(ra);return t?t[1].replace(oa,"'"):e}function ca(e,t){const a=k(e,t==null?void 0:t.in),n=a.getFullYear(),r=a.getMonth(),o=O(a,0);return o.setFullYear(n,r+1,0),o.setHours(0,0,0,0),o.getDate()}function se(e,t,a){const[n,r]=le(a==null?void 0:a.in,e,t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function la(e,t){return ce(O(e,e),Xt(e))}function da(e,t,a){return R(e,-40,a)}function ua(e,t,a){const n=k(e,a==null?void 0:a.in);return n.setDate(t),n}function be(e,t,a){return ue(e,-1,a)}const ma={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},ha={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ga={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},fa={date:q({formats:ma,defaultWidth:"full"}),time:q({formats:ha,defaultWidth:"full"}),dateTime:q({formats:ga,defaultWidth:"full"})},ya={code:"en-GB",formatDistance:$t,formatLong:fa,formatRelative:Ft,localize:qt,match:Yt,options:{weekStartsOn:1,firstWeekContainsDate:4}},Da={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},pa=(e,t,a)=>{let n;const r=Da[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},wa={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},ba={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},va={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Sa={date:q({formats:wa,defaultWidth:"full"}),time:q({formats:ba,defaultWidth:"full"}),dateTime:q({formats:va,defaultWidth:"full"})},xa={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ca=(e,t,a,n)=>xa[e],ka={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Ma={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ba={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Ea={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Pa={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Ta=(e,t)=>Number(e)+".",ja={ordinalNumber:Ta,era:G({values:ka,defaultWidth:"wide"}),quarter:G({values:Ma,defaultWidth:"wide",argumentCallback:e=>e-1}),month:G({values:Ba,defaultWidth:"wide"}),day:G({values:Ea,defaultWidth:"wide"}),dayPeriod:G({values:Pa,defaultWidth:"wide"})},Oa=/^(\d+)\.?/i,Ha=/\d+/i,_a={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Na={any:[/^f/i,/^e/i]},Ra={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},za={any:[/1/i,/2/i,/3/i,/4/i]},La={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Aa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ia={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Wa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ya={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},qa={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Fa={ordinalNumber:Vt({matchPattern:Oa,parsePattern:Ha,valueCallback:e=>parseInt(e,10)}),era:Q({matchPatterns:_a,defaultMatchWidth:"wide",parsePatterns:Na,defaultParseWidth:"any"}),quarter:Q({matchPatterns:Ra,defaultMatchWidth:"wide",parsePatterns:za,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Q({matchPatterns:La,defaultMatchWidth:"wide",parsePatterns:Aa,defaultParseWidth:"any"}),day:Q({matchPatterns:Ia,defaultMatchWidth:"wide",parsePatterns:Wa,defaultParseWidth:"any"}),dayPeriod:Q({matchPatterns:Ya,defaultMatchWidth:"any",parsePatterns:qa,defaultParseWidth:"any"})},X={code:"nb",formatDistance:pa,formatLong:Sa,formatRelative:Ca,localize:ja,match:Fa,options:{weekStartsOn:1,firstWeekContainsDate:4}},pt=({title:e,...t})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...t,children:[e&&i.jsx("title",{children:e}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.952 6.96459C16.6103 6.62289 16.0563 6.62289 15.7146 6.96459L9.2979 13.3813C8.95621 13.723 8.95621 14.277 9.2979 14.6187L15.7146 21.0354C16.0563 21.3771 16.6103 21.3771 16.952 21.0354C17.2937 20.6937 17.2937 20.1396 16.952 19.7979L11.1541 14L16.952 8.20203C17.2937 7.86032 17.2937 7.3063 16.952 6.96459Z",fill:"currentColor"})]});pt.displayName="ChevronLeftIcon";const wt=({title:e,...t})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...t,children:[e&&i.jsx("title",{children:e}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z",fill:"currentColor"})]});wt.displayName="ChevronRightIcon";const $a="_calendarContainer_ubequ_8",Va="_calendarHeader_ubequ_29",Ga="_monthYear_ubequ_36",Qa="_navigationButtons_ubequ_47",Ka="_gridWrapper_ubequ_56",Xa="_gridRow_ubequ_67",Ua="_dayNameCell_ubequ_83",Za="_dateCell_ubequ_101",Ja="_dateNumberContainer_ubequ_137",en="_otherMonth_ubequ_150",tn="_disabled_ubequ_150",an="_selectedDate_ubequ_179",nn="_todayDate_ubequ_256",v={calendarContainer:$a,calendarHeader:Va,monthYear:Ga,navigationButtons:Qa,gridWrapper:Ka,gridRow:Xa,dayNameCell:Ua,dateCell:Za,dateNumberContainer:Ja,otherMonth:en,disabled:tn,selectedDate:an,todayDate:nn},rn=(e,t)=>{const a=P(e),n=de(a,{locale:t}),r=Dt(Ut(e),{locale:t});return Jt({start:n,end:r})},ve=e=>e&&e.charAt(0).toUpperCase()+e.slice(1),K=(e,t)=>{const a=Math.min(e.getDate(),ca(t));return ua(P(t),a)},p=({initialDate:e=new Date,selectedDate:t=null,onDateSelect:a,"data-color":n,"data-size":r})=>{const{t:o,language:h}=Pt(),g=h==="EN"?ya:X;m.useEffect(()=>{const c="rk-datepicker-inline-styles";if(typeof document>"u"||document.getElementById(c))return;const s=on(v),y=document.createElement("style");y.id=c,y.textContent=s,document.head.prepend(y)},[]);const[u,b]=m.useState(P(t&&T(t)?t:e)),[D,M]=m.useState(()=>t&&T(t)?t:e),$=m.useRef(null),H=m.useRef(!1);m.useEffect(()=>{if(t&&T(t)){M(t);const c=P(t);b(s=>se(c,s)?s:c)}},[t]),m.useEffect(()=>{var s;if(!H.current)return;H.current=!1;const c=(s=$.current)==null?void 0:s.querySelector(`[data-date="${C(D,"yyyy-MM-dd")}"]`);c==null||c.focus()},[D,u]);const _=m.useMemo(()=>rn(u,g),[u,g]),ne=m.useMemo(()=>{const c=[];for(let s=0;s<_.length;s+=7)c.push(_.slice(s,s+7));return c},[_]),re=m.useMemo(()=>{const c=de(new Date,{locale:g});return Array.from({length:7}).map((s,y)=>{const V=C(R(c,y),"EEEEEE",{locale:g});return ve(V)})},[g]),oe=m.useCallback(()=>{b(c=>{const s=P(be(c));return M(y=>K(y,s)),s})},[]),w=m.useCallback(()=>{b(c=>{const s=P(ue(c,1));return M(y=>K(y,s)),s})},[]),f=m.useCallback(c=>{M(c),a==null||a(c)},[a]),S=m.useCallback(c=>{H.current=!0,M(c),b(s=>se(c,s)?s:P(c))},[]),vt=m.useCallback((c,s)=>{switch(c.key){case"Enter":case" ":c.preventDefault(),f(s);return;case"ArrowLeft":c.preventDefault(),S(R(s,-1));return;case"ArrowRight":c.preventDefault(),S(R(s,1));return;case"ArrowUp":c.preventDefault(),S(R(s,-7));return;case"ArrowDown":c.preventDefault(),S(R(s,7));return;case"Home":c.preventDefault(),S(de(s,{locale:g}));return;case"End":c.preventDefault(),S(Dt(s,{locale:g}));return;case"PageUp":c.preventDefault(),S(K(s,be(s)));return;case"PageDown":c.preventDefault(),S(K(s,ue(s,1)));return}},[f,S,g]),St=C(u,"MMMM",{locale:g}),xt=C(u,"yyyy",{locale:g}),Ct=`${ve(St)} ${xt}`,he=m.useId(),kt=se(D,u)?D:K(D,u);return i.jsxs("div",{className:v.calendarContainer,"data-color":n,"data-size":r,children:[i.jsxs("div",{className:v.calendarHeader,children:[i.jsx("span",{className:v.monthYear,id:he,"aria-live":"polite",children:Ct}),i.jsxs("div",{className:v.navigationButtons,children:[i.jsx(fe,{variant:"tertiary",icon:!0,onClick:oe,"aria-label":o("datePicker.previousMonth"),children:i.jsx(pt,{})}),i.jsx(fe,{variant:"tertiary",icon:!0,onClick:w,"aria-label":o("datePicker.nextMonth"),children:i.jsx(wt,{})})]})]}),i.jsxs("div",{role:"grid","aria-labelledby":he,className:v.gridWrapper,ref:$,children:[i.jsx("div",{role:"row",className:v.gridRow,children:re.map(c=>i.jsx("div",{role:"columnheader",className:v.dayNameCell,children:c},c))}),ne.map(c=>i.jsx("div",{role:"row",className:v.gridRow,children:c.map(s=>{const y=se(s,u),V=t&&T(t)&&ce(s,t),ge=la(s),Mt=y&&ce(s,kt),Bt=[v.dateCell,y?"":v.otherMonth,V?v.selectedDate:"",ge&&!V?v.todayDate:""].filter(Boolean).join(" ");return i.jsx("div",{role:"gridcell",className:Bt,"data-date":C(s,"yyyy-MM-dd"),onClick:y?()=>f(s):void 0,onKeyDown:y?Et=>vt(Et,s):void 0,tabIndex:y?Mt?0:-1:void 0,"aria-selected":y?!!V:void 0,"aria-disabled":!y||void 0,"aria-current":ge?"date":void 0,"aria-label":C(s,"PPP",{locale:g}),children:i.jsx("span",{className:v.dateNumberContainer,children:C(s,"d")})},s.toISOString())})},c[0].toISOString()))]})]})};p.displayName="DatePicker";function on(e){return`
.${e.calendarContainer} {
  /* Half a cell border. The cells overlap each other by this much so two
     adjacent 1px borders land on top of each other and read as one line; the
     grid wrapper pays the same amount back as padding so the outermost edges
     are not clipped. Both sides of that bargain must use the same number. */
  --rk-calendar-border-overlap: 0.5px;
  display: inline-flex;
  padding: var(--ds-size-7, 28px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ds-size-3, 12px);
  /* No outer card — see styles.module.css. */
  background-color: var(--ds-color-neutral-background-default, #fff);
  font-family: var(--ds-font-family, sans-serif);
  color: var(--ds-color-neutral-text-default, #2b2b2b);
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
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  font-family: var(--ds-font-family, 'Myriad VF', sans-serif);
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
  /* Give back the half pixel the cells hang outside the grid by. Without it
     overflow:hidden cuts the last row's bottom border and the last column's
     right border, leaving the grid open on two sides — the container border
     used to cover that up, so removing the border exposed it. */
  padding: var(--rk-calendar-border-overlap, 0.5px);
  overflow: hidden;
  box-sizing: border-box;
}
.${e.gridRow} {
  display: grid;
  /* See styles.module.css: a fixed track keeps the design's 64px cell and
     keeps the weekday row aligned with the dates. */
  grid-template-columns: repeat(7, var(--rk-calendar-cell, 64px));
  width: max-content;
  max-width: 100%;
  text-align: center;
}
.${e.dayNameCell} {
  display: flex;
  padding: var(--ds-size-2, 8px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-align: center;
  font-family: var(--ds-font-family, 'Myriad VF', sans-serif);
  font-size: var(--ds-body-xs-font-size, 14px);
  font-weight: var(--ds-font-weight-semibold, 600);
  line-height: var(--ds-body-short-xs-line-height, 1.3);
  box-sizing: border-box;
  min-width: 0;
}
.${e.dateCell} {
  display: flex;
  padding: var(--ds-size-5, 20px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-subtle, #bcbcbc);
  box-sizing: border-box;
  /* Pull each cell half a border width up and left so its top/left border
     coincides with the neighbour's bottom/right one instead of stacking into
     a 2px line. Paid back by the grid wrapper's padding. */
  margin: calc(-1 * var(--rk-calendar-border-overlap, 0.5px));
  font-family: var(--ds-font-family, 'Myriad VF', sans-serif);
  color: var(--ds-color-neutral-text-default, #2b2b2b);
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
  background-color: var(--ds-color-neutral-surface-hover, #eee);
  position: relative;
  z-index: 1;
}
.${e.otherMonth} {
  /* Neutral-scoped tokens on purpose: under the red color scope the
     scope-relative tints turn pink, which emphasized the outside days
     instead of muting them. */
  color: var(--ds-color-neutral-text-subtle, #aaa);
  cursor: default;
  pointer-events: none;
  background-color: var(--ds-color-neutral-surface-tinted, #e8e8e8);
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-subtle, #bcbcbc);
  margin: calc(-1 * var(--rk-calendar-border-overlap, 0.5px));
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
@media (max-width: 600px) {
  .${e.gridRow} { grid-template-columns: repeat(7, minmax(0, 1fr)); width: 100%; }
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
`}try{p.displayName="DatePicker",p.__docgenInfo={description:`DatePicker-komponent for å velge en dato fra en kalender.
Kalenderen følger ARIA-grid-mønsteret: ett tabstopp, piltaster mellom
dager (på tvers av måneder), Home/End til start/slutt av uken og
PageUp/PageDown mellom måneder.`,displayName:"DatePicker",props:{}}}catch{}const bt=({title:e,...t})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...t,children:[e&&i.jsx("title",{children:e}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V4.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V4.25H19.5C20.1904 4.25 20.75 4.80964 20.75 5.5V18.5C20.75 19.1904 20.1904 19.75 19.5 19.75H4.5C3.80964 19.75 3.25 19.1904 3.25 18.5V5.5C3.25 4.80964 3.80964 4.25 4.5 4.25H8.25V3C8.25 2.58579 8.58579 2.25 9 2.25ZM15.75 7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V5.75H9.75V7C9.75 7.41421 9.41421 7.75 9 7.75C8.58579 7.75 8.25 7.41421 8.25 7V5.75H4.75V9.25H19.25V5.75H15.75V7ZM4.75 18.25V10.75H19.25V18.25H4.75ZM6.75 13C6.75 12.5858 7.08579 12.25 7.5 12.25H8.5C8.91421 12.25 9.25 12.5858 9.25 13C9.25 13.4142 8.91421 13.75 8.5 13.75H7.5C7.08579 13.75 6.75 13.4142 6.75 13ZM10.75 13C10.75 12.5858 11.0858 12.25 11.5 12.25H12.5C12.9142 12.25 13.25 12.5858 13.25 13C13.25 13.4142 12.9142 13.75 12.5 13.75H11.5C11.0858 13.75 10.75 13.4142 10.75 13ZM15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13C14.75 13.4142 15.0858 13.75 15.5 13.75H16.5C16.9142 13.75 17.25 13.4142 17.25 13C17.25 12.5858 16.9142 12.25 16.5 12.25H15.5ZM10.75 16C10.75 15.5858 11.0858 15.25 11.5 15.25H12.5C12.9142 15.25 13.25 15.5858 13.25 16C13.25 16.4142 12.9142 16.75 12.5 16.75H11.5C11.0858 16.75 10.75 16.4142 10.75 16ZM15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16C14.75 16.4142 15.0858 16.75 15.5 16.75H16.5C16.9142 16.75 17.25 16.4142 17.25 16C17.25 15.5858 16.9142 15.25 16.5 15.25H15.5ZM6.75 16C6.75 15.5858 7.08579 15.25 7.5 15.25H8.5C8.91421 15.25 9.25 15.5858 9.25 16C9.25 16.4142 8.91421 16.75 8.5 16.75H7.5C7.08579 16.75 6.75 16.4142 6.75 16Z",fill:"currentColor"})]});bt.displayName="CalendarIcon";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,{expect:l,within:F,userEvent:x,fn:me}=__STORYBOOK_MODULE_TEST__,sn={title:"Components/DatePicker",component:p,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{initialDate:{control:{type:"date"},description:"Initial month to display in the calendar."},selectedDate:{control:{type:"date"},description:"The currently selected date (primarily for standalone calendar stories)."},onDateSelect:{action:"dateSelected",description:"Callback function when a date is selected in the calendar."},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Color scheme",defaultValue:"neutral"}}},U={name:"Calendar Only (Default)",render:e=>{const[t,a]=m.useState(e.selectedDate||null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date,selectedDate:null,onDateSelect:j("dateSelected")}},Z={name:"Calendar Only (Selected)",render:e=>{const[t,a]=m.useState(e.selectedDate||new Date),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2026,5,15),selectedDate:new Date(2026,5,15),onDateSelect:j("dateSelected")}},J={name:"Calendar Only (Previous Month)",render:e=>{const[t,a]=m.useState(e.selectedDate||null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:da(new Date),selectedDate:null,onDateSelect:j("dateSelected")}},ee={name:"Calendar Only (Custom Size/Color)",render:e=>{const[t,a]=m.useState(e.selectedDate||new Date),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date,selectedDate:new Date,"data-size":"lg","data-color":"additional-color-ocean",onDateSelect:j("dateSelected")}},cn=e=>{const[t,a]=m.useState(e.selectedDate&&T(e.selectedDate)?e.selectedDate:null),[n,r]=m.useState(t?C(t,"dd.MM.yyyy",{locale:X}):""),o=u=>{a(u),j("dateSelected (Calendar)")(u)},h=(u,b)=>{r(b);const D=Qt(b,"dd.MM.yyyy",new Date,{locale:X});T(D)&&b.length===10?(!t||!ce(D,t))&&(a(D),j("inputParsedAndDateSelected (Input)")(D)):b===""&&t!==null&&(a(null),j("inputCleared (Input)")())};m.useEffect(()=>{const u=t?C(t,"dd.MM.yyyy",{locale:X}):"";u!==n&&r(u)},[t,n]);const g=t?C(t,"PPP",{locale:X}):"Ingen dato valgt";return i.jsxs("div",{style:{display:"inline-block",fontFamily:"sans-serif"},children:[i.jsxs("p",{style:{marginBottom:"10px",fontSize:"14px",minHeight:"20px"},children:["Valgt dato: ",i.jsx("strong",{children:g})]}),i.jsx("div",{style:{marginBottom:"10px"},children:i.jsx(Gt,{"aria-label":"Velg dato (dd.mm.åååå)",value:n,onChange:h,placeholder:"dd.mm.åååå",suffixIcon:i.jsx(bt,{}),"data-size":e["data-size"],"data-color":e["data-color"]})}),i.jsx(p,{...e,selectedDate:t,onDateSelect:o,initialDate:t||e.initialDate||new Date})]})},te={name:"Example Combined Input + Calendar",render:e=>i.jsx(cn,{...e}),args:{initialDate:new Date},argTypes:{initialDate:{control:{type:"date"}},selectedDate:{table:{disable:!0}},onDateSelect:{table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"]}}},z={name:"Test: Date Selection",render:e=>{const[t,a]=m.useState(null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:me()},play:async({canvasElement:e,args:t})=>{const n=F(e).getByRole("gridcell",{name:"15. januar 2025"});await x.click(n),l(t.onDateSelect).toHaveBeenCalled(),l(n).toHaveAttribute("aria-selected","true")}},L={name:"Test: Grid Semantics",render:e=>i.jsx(p,{...e}),args:{initialDate:new Date(2025,0,15)},play:async({canvasElement:e})=>{const t=F(e),a=t.getByRole("grid",{name:/januar 2025/i});l(a).toBeInTheDocument(),l(t.getAllByRole("columnheader").length).toBe(7),l(t.getAllByRole("row").length).toBe(6);const n=a.querySelectorAll('[tabindex="0"]');l(n.length).toBe(1),l(n[0]).toHaveAccessibleName("15. januar 2025");const r=a.querySelectorAll('[aria-disabled="true"]');l(r.length).toBeGreaterThan(0),r.forEach(o=>{l(o).not.toHaveAttribute("tabindex")})}},A={name:"Test: Arrow Key Navigation",render:e=>{const[t,a]=m.useState(null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:me()},play:async({canvasElement:e,args:t})=>{const a=F(e),n=e.ownerDocument,r=()=>{var h;return(h=n.activeElement)==null?void 0:h.getAttribute("data-date")};a.getByRole("gridcell",{name:"15. januar 2025"}).focus(),await x.keyboard("{ArrowRight}"),l(r()).toBe("2025-01-16"),await x.keyboard("{ArrowDown}"),l(r()).toBe("2025-01-23"),await x.keyboard("{ArrowLeft}"),l(r()).toBe("2025-01-22"),await x.keyboard("{ArrowUp}"),l(r()).toBe("2025-01-15"),a.getByRole("gridcell",{name:"31. januar 2025"}).focus(),await x.keyboard("{ArrowRight}"),l(r()).toBe("2025-02-01"),l(a.getByRole("grid",{name:/februar 2025/i})).toBeInTheDocument(),await x.keyboard("{PageDown}"),l(r()).toBe("2025-03-01"),await x.keyboard("{Enter}"),l(t.onDateSelect).toHaveBeenCalled();const o=t.onDateSelect.mock.lastCall[0];l(o.getFullYear()).toBe(2025),l(o.getMonth()).toBe(2),l(o.getDate()).toBe(1)}},I={name:"Test: Month Navigation",render:e=>{const[t,a]=m.useState(null);return i.jsx(p,{...e,selectedDate:t,onDateSelect:a})},args:{initialDate:new Date(2025,5,15)},play:async({canvasElement:e})=>{const t=F(e),a=()=>{const o=e.querySelector('[class*="monthYear"]');return(o==null?void 0:o.textContent)||""};l(a()).toContain("2025"),l(a().toLowerCase()).toContain("juni");const n=t.getByRole("button",{name:/neste/i});await x.click(n),l(a().toLowerCase()).toContain("juli");const r=t.getByRole("button",{name:/forrige/i});await x.click(r),await x.click(r),l(a().toLowerCase()).toContain("mai")}},W={name:"Test: Space Selection",render:e=>{const[t,a]=m.useState(null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(p,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:me()},play:async({canvasElement:e,args:t})=>{const n=F(e).getByRole("gridcell",{name:"10. januar 2025"});n.focus(),await x.keyboard(" "),l(t.onDateSelect).toHaveBeenCalled(),l(n).toHaveAttribute("aria-selected","true")}},Y={name:"Test: Today Highlight",render:e=>{const[t,a]=m.useState(null);return i.jsx(p,{...e,selectedDate:t,onDateSelect:a})},args:{initialDate:new Date},play:async({canvasElement:e})=>{var n;const t=e.querySelectorAll('[aria-current="date"]');l(t.length).toBe(1);const a=t[0];l((n=a.textContent)==null?void 0:n.trim()).toBe(new Date().getDate().toString()),l(a).not.toHaveAttribute("aria-disabled")}},ln=()=>{const{setLanguage:e}=jt();return i.jsx("button",{type:"button",onClick:()=>e("EN"),children:"Switch to English"})},ae={name:"Test: Follows UI Language",render:e=>i.jsxs(Tt,{children:[i.jsx(ln,{}),i.jsx(p,{...e})]}),args:{initialDate:new Date(2025,0,15)},play:async({canvasElement:e})=>{const t=F(e);l(t.getByRole("grid",{name:/januar 2025/i})).toBeInTheDocument(),l(t.getAllByRole("columnheader")[0]).toHaveTextContent(/^Ma/),await x.click(t.getByRole("button",{name:"Switch to English"}));const a=await t.findByRole("grid",{name:/january 2025/i});l(a).toBeInTheDocument(),l(t.getByRole("gridcell",{name:"15 January 2025"})).toBeInTheDocument(),l(t.getAllByRole("columnheader")[0]).toHaveTextContent(/^Mo/)}};var Se,xe,Ce;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var ke,Me,Be;Z.parameters={...Z.parameters,docs:{...(ke=Z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
    // Pinned to a fixed PAST date, not new Date(): this story is a visual
    // regression target, and a today-based date moved the selected/today
    // markers every day — the baseline broke three days after it was taken.
    // A past month stays identical forever (today never re-enters it).
    initialDate: new Date(2026, 5, 15),
    selectedDate: new Date(2026, 5, 15),
    onDateSelect: action('dateSelected')
  }
}`,...(Be=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Ee,Pe,Te;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Pe=J.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var je,Oe,He;ee.parameters={...ee.parameters,docs:{...(je=ee.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(He=(Oe=ee.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var _e,Ne,Re;te.parameters={...te.parameters,docs:{...(_e=te.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Re=(Ne=te.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var ze,Le,Ae,Ie,We;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ae=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source},description:{story:`Tests that clicking a date cell triggers the onDateSelect callback
and visually marks the date as selected.`,...(We=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:We.description}}};var Ye,qe,Fe,$e,Ve;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
    // 1 header + 5 uker: januar 2025 (on 1. jan – fre 31. jan) fyller
    // nøyaktig fem rader — gridet slutter nå ved månedens siste uke i
    // stedet for å alltid rendre 42 celler.
    expect(canvas.getAllByRole('row').length).toBe(6);

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
}`,...(Fe=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source},description:{story:`The calendar follows the ARIA grid pattern: one grid labelled by the
month header, 7 column headers, a single tab stop (roving tabindex),
and out-of-month cells disabled in every modality.`,...(Ve=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:Ve.description}}};var Ge,Qe,Ke,Xe,Ue;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Ke.source},description:{story:`Arrow keys move focus between days, End jumps to the end of the week,
PageDown moves a month ahead (the view follows), and Enter selects the
focused day.`,...(Ue=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:Ue.description}}};var Ze,Je,et,tt,at;I.parameters={...I.parameters,docs:{...(Ze=I.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(et=(Je=I.parameters)==null?void 0:Je.docs)==null?void 0:et.source},description:{story:"Tests month navigation using the previous/next buttons.",...(at=(tt=I.parameters)==null?void 0:tt.docs)==null?void 0:at.description}}};var nt,rt,ot,st,it;W.parameters={...W.parameters,docs:{...(nt=W.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(rt=W.parameters)==null?void 0:rt.docs)==null?void 0:ot.source},description:{story:"Space selects the focused date, like Enter.",...(it=(st=W.parameters)==null?void 0:st.docs)==null?void 0:it.description}}};var ct,lt,dt,ut,mt;Y.parameters={...Y.parameters,docs:{...(ct=Y.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=Y.parameters)==null?void 0:lt.docs)==null?void 0:dt.source},description:{story:`Today's date is marked with aria-current="date".`,...(mt=(ut=Y.parameters)==null?void 0:ut.docs)==null?void 0:mt.description}}};var ht,gt,ft;ae.parameters={...ae.parameters,docs:{...(ht=ae.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: 'Test: Follows UI Language',
  render: args => <LanguageProvider>
      <LanguageSwitcher />
      <DatePicker {...args} />
    </LanguageProvider>,
  args: {
    initialDate: new Date(2025, 0, 15)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Mounted in Norwegian
    expect(canvas.getByRole('grid', {
      name: /januar 2025/i
    })).toBeInTheDocument();
    expect(canvas.getAllByRole('columnheader')[0]).toHaveTextContent(/^Ma/);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Switch to English'
    }));
    const grid = await canvas.findByRole('grid', {
      name: /january 2025/i
    });
    expect(grid).toBeInTheDocument();
    expect(canvas.getByRole('gridcell', {
      name: '15 January 2025'
    })).toBeInTheDocument();
    // Weekday headers follow too, and the week still starts on Monday (en-GB)
    expect(canvas.getAllByRole('columnheader')[0]).toHaveTextContent(/^Mo/);
  }
}`,...(ft=(gt=ae.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};const dn=["DefaultCalendar","CalendarWithSelectedDate","CalendarStartingInPreviousMonth","CalendarWithCustomSizeAndColor","CombinedInputAndCalendar","TestDateSelection","TestGridSemantics","TestArrowKeyNavigation","TestMonthNavigation","TestSpaceSelection","TestTodayHighlight","TestFollowsUiLanguage"],fn=Object.freeze(Object.defineProperty({__proto__:null,CalendarStartingInPreviousMonth:J,CalendarWithCustomSizeAndColor:ee,CalendarWithSelectedDate:Z,CombinedInputAndCalendar:te,DefaultCalendar:U,TestArrowKeyNavigation:A,TestDateSelection:z,TestFollowsUiLanguage:ae,TestGridSemantics:L,TestMonthNavigation:I,TestSpaceSelection:W,TestTodayHighlight:Y,__namedExportsOrder:dn,default:sn},Symbol.toStringTag,{value:"Module"}));export{Z as C,fn as D,U as a,ee as b,te as c};
