import{j as s,r as m}from"./iframe-Cr0d-POo.js";import{B as De}from"./tooltip-DrR4BEE7.js";import{u as jt,L as Ot,a as Ht}from"./LanguageContext-Cd5DUwPQ.js";import{t as M,c as _,g as pe,m as _t,a as pt,b as Nt,d as Rt,e as zt,f as Lt,h as At,i as O,j as Wt,k as It,w as Yt,l as qt,n as L,o as $,p as Ft,q as $t,r as Vt,s as Gt,u as Q,v as X,x as Qt,y as me,D as Xt,z as Kt}from"./index-axBxV8N_.js";function he(e,t,a){const n=M(e,a==null?void 0:a.in);if(isNaN(t))return _(e,NaN);if(!t)return n;const r=n.getDate(),o=_(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const h=o.getDate();return r>=h?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}function de(e,...t){const a=_.bind(null,t.find(n=>typeof n=="object"));return t.map(a)}function ce(e,t){const a=M(e,t==null?void 0:t.in);return a.setHours(0,0,0,0),a}function Ut(e,t,a){const[n,r]=de(a==null?void 0:a.in,e,t),o=ce(n),h=ce(r),g=+o-pe(o),u=+h-pe(h);return Math.round((g-u)/_t)}function Zt(e){return _(e,Date.now())}function le(e,t,a){const[n,r]=de(a==null?void 0:a.in,e,t);return+ce(n)==+ce(r)}function Jt(e,t){const a=M(e,t==null?void 0:t.in),n=a.getMonth();return a.setFullYear(a.getFullYear(),n+1,0),a.setHours(23,59,59,999),a}function ea(e,t){const[a,n]=de(e,t.start,t.end);return{start:a,end:n}}function ta(e,t){const{start:a,end:n}=ea(t==null?void 0:t.in,e);let r=+a>+n;const o=r?+a:+n,h=r?n:a;h.setHours(0,0,0,0);let g=1;const u=[];for(;+h<=o;)u.push(_(a,h)),h.setDate(h.getDate()+g),h.setHours(0,0,0,0);return r?u.reverse():u}function j(e,t){const a=M(e,t==null?void 0:t.in);return a.setDate(1),a.setHours(0,0,0,0),a}function aa(e,t){const a=M(e,t==null?void 0:t.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function wt(e,t){var g,u,p,y;const a=pt(),n=(t==null?void 0:t.weekStartsOn)??((u=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:u.weekStartsOn)??a.weekStartsOn??((y=(p=a.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??0,r=M(e,t==null?void 0:t.in),o=r.getDay(),h=(o<n?-7:0)+6-(o-n);return r.setDate(r.getDate()+h),r.setHours(23,59,59,999),r}function na(e,t){const a=M(e,t==null?void 0:t.in);return Ut(a,aa(a))+1}function d(e,t){const a=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return a+n}const E={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return d(t==="yy"?n%100:n,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):d(a+1,2)},d(e,t){return d(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return d(e.getHours()%12||12,t.length)},H(e,t){return d(e.getHours(),t.length)},m(e,t){return d(e.getMinutes(),t.length)},s(e,t){return d(e.getSeconds(),t.length)},S(e,t){const a=t.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,a-3));return d(r,t.length)}},z={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},we={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return E.y(e,t)},Y:function(e,t,a,n){const r=Lt(e,n),o=r>0?r:1-r;if(t==="YY"){const h=o%100;return d(h,2)}return t==="Yo"?a.ordinalNumber(o,{unit:"year"}):d(o,t.length)},R:function(e,t){const a=zt(e);return d(a,t.length)},u:function(e,t){const a=e.getFullYear();return d(a,t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return d(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return d(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return E.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return d(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const r=Rt(e,n);return t==="wo"?a.ordinalNumber(r,{unit:"week"}):d(r,t.length)},I:function(e,t,a){const n=Nt(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):d(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):E.d(e,t)},D:function(e,t,a){const n=na(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):d(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return d(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return d(o,t.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),r=n===0?7:n;switch(t){case"i":return String(r);case"ii":return d(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let r;switch(n===12?r=z.noon:n===0?r=z.midnight:r=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let r;switch(n>=17?r=z.evening:n>=12?r=z.afternoon:n>=4?r=z.morning:r=z.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return E.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):E.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):d(n,t.length)},k:function(e,t,a){let n=e.getHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):d(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):E.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):E.s(e,t)},S:function(e,t){return E.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return ve(n);case"XXXX":case"XX":return P(n);case"XXXXX":case"XXX":default:return P(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return ve(n);case"xxxx":case"xx":return P(n);case"xxxxx":case"xxx":default:return P(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+be(n,":");case"OOOO":default:return"GMT"+P(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+be(n,":");case"zzzz":default:return"GMT"+P(n,":")}},t:function(e,t,a){const n=Math.trunc(+e/1e3);return d(n,t.length)},T:function(e,t,a){return d(+e,t.length)}};function be(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),o=n%60;return o===0?a+String(r):a+String(r)+t+d(o,2)}function ve(e,t){return e%60===0?(e>0?"-":"+")+d(Math.abs(e)/60,2):P(e,t)}function P(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=d(Math.trunc(n/60),2),o=d(n%60,2);return a+r+t+o}const ra=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,oa=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sa=/^'([^]*?)'?$/,ia=/''/g,ca=/[a-zA-Z]/;function k(e,t,a){var y,B,G,N,R,re,oe,se;const n=pt(),r=(a==null?void 0:a.locale)??n.locale??At,o=(a==null?void 0:a.firstWeekContainsDate)??((B=(y=a==null?void 0:a.locale)==null?void 0:y.options)==null?void 0:B.firstWeekContainsDate)??n.firstWeekContainsDate??((N=(G=n.locale)==null?void 0:G.options)==null?void 0:N.firstWeekContainsDate)??1,h=(a==null?void 0:a.weekStartsOn)??((re=(R=a==null?void 0:a.locale)==null?void 0:R.options)==null?void 0:re.weekStartsOn)??n.weekStartsOn??((se=(oe=n.locale)==null?void 0:oe.options)==null?void 0:se.weekStartsOn)??0,g=M(e,a==null?void 0:a.in);if(!O(g))throw new RangeError("Invalid time value");let u=t.match(oa).map(D=>{const f=D[0];if(f==="p"||f==="P"){const v=qt[f];return v(D,r.formatLong)}return D}).join("").match(ra).map(D=>{if(D==="''")return{isToken:!1,value:"'"};const f=D[0];if(f==="'")return{isToken:!1,value:la(D)};if(we[f])return{isToken:!0,value:D};if(f.match(ca))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:D}});r.localize.preprocessor&&(u=r.localize.preprocessor(g,u));const p={firstWeekContainsDate:o,weekStartsOn:h,locale:r};return u.map(D=>{if(!D.isToken)return D.value;const f=D.value;(!(a!=null&&a.useAdditionalWeekYearTokens)&&Wt(f)||!(a!=null&&a.useAdditionalDayOfYearTokens)&&It(f))&&Yt(f,t,String(e));const v=we[f[0]];return v(g,f,r.localize,p)}).join("")}function la(e){const t=e.match(sa);return t?t[1].replace(ia,"'"):e}function da(e,t){const a=M(e,t==null?void 0:t.in),n=a.getFullYear(),r=a.getMonth(),o=_(a,0);return o.setFullYear(n,r+1,0),o.setHours(0,0,0,0),o.getDate()}function ie(e,t,a){const[n,r]=de(a==null?void 0:a.in,e,t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function ua(e,t){return le(_(e,e),Zt(e))}function ma(e,t,a){return L(e,-40,a)}function ha(e,t,a){const n=M(e,a==null?void 0:a.in);return n.setDate(t),n}function Se(e,t,a){return he(e,-1,a)}const ga={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},fa={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ya={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Da={date:$({formats:ga,defaultWidth:"full"}),time:$({formats:fa,defaultWidth:"full"}),dateTime:$({formats:ya,defaultWidth:"full"})},pa={code:"en-GB",formatDistance:Gt,formatLong:Da,formatRelative:Vt,localize:$t,match:Ft,options:{weekStartsOn:1,firstWeekContainsDate:4}},wa={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ba=(e,t,a)=>{let n;const r=wa[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},va={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Sa={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},xa={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ca={date:$({formats:va,defaultWidth:"full"}),time:$({formats:Sa,defaultWidth:"full"}),dateTime:$({formats:xa,defaultWidth:"full"})},ka={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ma=(e,t,a,n)=>ka[e],Ba={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Ea={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ta={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Pa={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ja={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Oa=(e,t)=>Number(e)+".",Ha={ordinalNumber:Oa,era:Q({values:Ba,defaultWidth:"wide"}),quarter:Q({values:Ea,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Q({values:Ta,defaultWidth:"wide"}),day:Q({values:Pa,defaultWidth:"wide"}),dayPeriod:Q({values:ja,defaultWidth:"wide"})},_a=/^(\d+)\.?/i,Na=/\d+/i,Ra={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},za={any:[/^f/i,/^e/i]},La={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Aa={any:[/1/i,/2/i,/3/i,/4/i]},Wa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Ia={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ya={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},qa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Fa={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},$a={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Va={ordinalNumber:Qt({matchPattern:_a,parsePattern:Na,valueCallback:e=>parseInt(e,10)}),era:X({matchPatterns:Ra,defaultMatchWidth:"wide",parsePatterns:za,defaultParseWidth:"any"}),quarter:X({matchPatterns:La,defaultMatchWidth:"wide",parsePatterns:Aa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:X({matchPatterns:Wa,defaultMatchWidth:"wide",parsePatterns:Ia,defaultParseWidth:"any"}),day:X({matchPatterns:Ya,defaultMatchWidth:"wide",parsePatterns:qa,defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:Fa,defaultMatchWidth:"any",parsePatterns:$a,defaultParseWidth:"any"})},U={code:"nb",formatDistance:ba,formatLong:Ca,formatRelative:Ma,localize:Ha,match:Va,options:{weekStartsOn:1,firstWeekContainsDate:4}},bt=({title:e,...t})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...t,children:[e&&s.jsx("title",{children:e}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.952 6.96459C16.6103 6.62289 16.0563 6.62289 15.7146 6.96459L9.2979 13.3813C8.95621 13.723 8.95621 14.277 9.2979 14.6187L15.7146 21.0354C16.0563 21.3771 16.6103 21.3771 16.952 21.0354C17.2937 20.6937 17.2937 20.1396 16.952 19.7979L11.1541 14L16.952 8.20203C17.2937 7.86032 17.2937 7.3063 16.952 6.96459Z",fill:"currentColor"})]});bt.displayName="ChevronLeftIcon";const vt=({title:e,...t})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...t,children:[e&&s.jsx("title",{children:e}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z",fill:"currentColor"})]});vt.displayName="ChevronRightIcon";const Ga="_calendarContainer_ubequ_8",Qa="_calendarHeader_ubequ_29",Xa="_monthYear_ubequ_36",Ka="_navigationButtons_ubequ_47",Ua="_gridWrapper_ubequ_56",Za="_gridRow_ubequ_67",Ja="_dayNameCell_ubequ_83",en="_dateCell_ubequ_101",tn="_dateNumberContainer_ubequ_137",an="_otherMonth_ubequ_150",nn="_disabled_ubequ_150",rn="_selectedDate_ubequ_179",on="_todayDate_ubequ_256",w={calendarContainer:Ga,calendarHeader:Qa,monthYear:Xa,navigationButtons:Ka,gridWrapper:Ua,gridRow:Za,dayNameCell:Ja,dateCell:en,dateNumberContainer:tn,otherMonth:an,disabled:nn,selectedDate:rn,todayDate:on},sn=(e,t)=>{const a=j(e),n=me(a,{locale:t}),r=wt(Jt(e),{locale:t});return ta({start:n,end:r})},xe=e=>e&&e.charAt(0).toUpperCase()+e.slice(1),K=(e,t)=>{const a=Math.min(e.getDate(),da(t));return ha(j(t),a)},b=({initialDate:e=new Date,selectedDate:t=null,onDateSelect:a,"data-color":n,"data-size":r})=>{const{t:o,language:h}=jt(),g=h==="EN"?pa:U;m.useEffect(()=>{const i="rk-datepicker-inline-styles";if(typeof document>"u"||document.getElementById(i))return;const c=cn(w),x=document.createElement("style");x.id=i,x.textContent=c,document.head.prepend(x)},[]);const[u,p]=m.useState(j(t&&O(t)?t:e)),[y,B]=m.useState(()=>t&&O(t)?t:e),G=m.useRef(null),N=m.useRef(!1);m.useEffect(()=>{if(t&&O(t)){B(t);const i=j(t);p(c=>ie(i,c)?c:i)}},[t]),m.useEffect(()=>{var c;if(!N.current)return;N.current=!1;const i=(c=G.current)==null?void 0:c.querySelector(`[data-date="${k(y,"yyyy-MM-dd")}"]`);i==null||i.focus()},[y,u]);const R=m.useMemo(()=>sn(u,g),[u,g]),re=m.useMemo(()=>{const i=[];for(let c=0;c<R.length;c+=7)i.push(R.slice(c,c+7));return i},[R]),oe=m.useMemo(()=>{const i=me(new Date,{locale:g});return Array.from({length:7}).map((c,x)=>{const C=k(L(i,x),"EEEEEE",{locale:g});return xe(C)})},[g]),se=m.useCallback(()=>{p(i=>{const c=j(Se(i));return B(x=>K(x,c)),c})},[]),D=m.useCallback(()=>{p(i=>{const c=j(he(i,1));return B(x=>K(x,c)),c})},[]),f=m.useCallback(i=>{B(i),a==null||a(i)},[a]),v=m.useCallback(i=>{N.current=!0,B(i),p(c=>ie(i,c)?c:j(i))},[]),xt=m.useCallback((i,c)=>{switch(i.key){case"Enter":case" ":i.preventDefault(),f(c);return;case"ArrowLeft":i.preventDefault(),v(L(c,-1));return;case"ArrowRight":i.preventDefault(),v(L(c,1));return;case"ArrowUp":i.preventDefault(),v(L(c,-7));return;case"ArrowDown":i.preventDefault(),v(L(c,7));return;case"Home":i.preventDefault(),v(me(c,{locale:g}));return;case"End":i.preventDefault(),v(wt(c,{locale:g}));return;case"PageUp":i.preventDefault(),v(K(c,Se(c)));return;case"PageDown":i.preventDefault(),v(K(c,he(c,1)));return}},[f,v,g]),Ct=k(u,"MMMM",{locale:g}),kt=k(u,"yyyy",{locale:g}),Mt=`${xe(Ct)} ${kt}`,fe=m.useId(),Bt=ie(y,u)?y:K(y,u);return s.jsxs("div",{className:w.calendarContainer,"data-color":n,"data-size":r,children:[s.jsxs("div",{className:w.calendarHeader,children:[s.jsx("span",{className:w.monthYear,id:fe,"aria-live":"polite",children:Mt}),s.jsxs("div",{className:w.navigationButtons,children:[s.jsx(De,{variant:"tertiary",icon:!0,onClick:se,"aria-label":o("datePicker.previousMonth"),children:s.jsx(bt,{})}),s.jsx(De,{variant:"tertiary",icon:!0,onClick:D,"aria-label":o("datePicker.nextMonth"),children:s.jsx(vt,{})})]})]}),s.jsxs("div",{role:"grid","aria-labelledby":fe,className:w.gridWrapper,ref:G,children:[s.jsx("div",{role:"row",className:w.gridRow,children:oe.map(i=>s.jsx("div",{role:"columnheader",className:w.dayNameCell,children:i},i))}),re.map((i,c)=>{var x;return s.jsx("div",{role:"row",className:w.gridRow,children:i.map(C=>{const T=ie(C,u),ue=t&&O(t)&&le(C,t),ye=ua(C),Et=T&&le(C,Bt),Tt=[w.dateCell,T?"":w.otherMonth,ue?w.selectedDate:"",ye&&!ue?w.todayDate:""].filter(Boolean).join(" ");return s.jsx("div",{role:"gridcell",className:Tt,"data-date":k(C,"yyyy-MM-dd"),onClick:T?()=>f(C):void 0,onKeyDown:T?Pt=>xt(Pt,C):void 0,tabIndex:T?Et?0:-1:void 0,"aria-selected":T?!!ue:void 0,"aria-disabled":!T||void 0,"aria-current":ye?"date":void 0,"aria-label":k(C,"PPP",{locale:g}),children:s.jsx("span",{className:w.dateNumberContainer,children:k(C,"d")})},C.toISOString())})},((x=i[0])==null?void 0:x.toISOString())??c)})]})]})};b.displayName="DatePicker";function cn(e){return`
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
`}const St=({title:e,...t})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...t,children:[e&&s.jsx("title",{children:e}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V4.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V4.25H19.5C20.1904 4.25 20.75 4.80964 20.75 5.5V18.5C20.75 19.1904 20.1904 19.75 19.5 19.75H4.5C3.80964 19.75 3.25 19.1904 3.25 18.5V5.5C3.25 4.80964 3.80964 4.25 4.5 4.25H8.25V3C8.25 2.58579 8.58579 2.25 9 2.25ZM15.75 7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V5.75H9.75V7C9.75 7.41421 9.41421 7.75 9 7.75C8.58579 7.75 8.25 7.41421 8.25 7V5.75H4.75V9.25H19.25V5.75H15.75V7ZM4.75 18.25V10.75H19.25V18.25H4.75ZM6.75 13C6.75 12.5858 7.08579 12.25 7.5 12.25H8.5C8.91421 12.25 9.25 12.5858 9.25 13C9.25 13.4142 8.91421 13.75 8.5 13.75H7.5C7.08579 13.75 6.75 13.4142 6.75 13ZM10.75 13C10.75 12.5858 11.0858 12.25 11.5 12.25H12.5C12.9142 12.25 13.25 12.5858 13.25 13C13.25 13.4142 12.9142 13.75 12.5 13.75H11.5C11.0858 13.75 10.75 13.4142 10.75 13ZM15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13C14.75 13.4142 15.0858 13.75 15.5 13.75H16.5C16.9142 13.75 17.25 13.4142 17.25 13C17.25 12.5858 16.9142 12.25 16.5 12.25H15.5ZM10.75 16C10.75 15.5858 11.0858 15.25 11.5 15.25H12.5C12.9142 15.25 13.25 15.5858 13.25 16C13.25 16.4142 12.9142 16.75 12.5 16.75H11.5C11.0858 16.75 10.75 16.4142 10.75 16ZM15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16C14.75 16.4142 15.0858 16.75 15.5 16.75H16.5C16.9142 16.75 17.25 16.4142 17.25 16C17.25 15.5858 16.9142 15.25 16.5 15.25H15.5ZM6.75 16C6.75 15.5858 7.08579 15.25 7.5 15.25H8.5C8.91421 15.25 9.25 15.5858 9.25 16C9.25 16.4142 8.91421 16.75 8.5 16.75H7.5C7.08579 16.75 6.75 16.4142 6.75 16Z",fill:"currentColor"})]});St.displayName="CalendarIcon";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,{expect:l,within:V,userEvent:S,fn:ge}=__STORYBOOK_MODULE_TEST__,ln={title:"Components/DatePicker",component:b,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{initialDate:{control:{type:"date"},description:"Initial month to display in the calendar."},selectedDate:{control:{type:"date"},description:"The currently selected date (primarily for standalone calendar stories)."},onDateSelect:{action:"dateSelected",description:"Callback function when a date is selected in the calendar."},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Color scheme",defaultValue:"neutral"}}},Z={name:"Calendar Only (Default)",render:e=>{const[t,a]=m.useState(e.selectedDate||null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date,selectedDate:null,onDateSelect:H("dateSelected")}},J={name:"Calendar Only (Selected)",render:e=>{const[t,a]=m.useState(e.selectedDate||new Date),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2026,5,15),selectedDate:new Date(2026,5,15),onDateSelect:H("dateSelected")}},ee={name:"Calendar Only (Previous Month)",render:e=>{const[t,a]=m.useState(e.selectedDate||null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:ma(new Date),selectedDate:null,onDateSelect:H("dateSelected")}},te={name:"Calendar Only (Custom Size/Color)",render:e=>{const[t,a]=m.useState(e.selectedDate||new Date),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date,selectedDate:new Date,"data-size":"lg","data-color":"additional-color-ocean",onDateSelect:H("dateSelected")}},dn=e=>{const[t,a]=m.useState(e.selectedDate&&O(e.selectedDate)?e.selectedDate:null),[n,r]=m.useState(t?k(t,"dd.MM.yyyy",{locale:U}):""),o=u=>{a(u),H("dateSelected (Calendar)")(u)},h=(u,p)=>{r(p);const y=Kt(p,"dd.MM.yyyy",new Date,{locale:U});O(y)&&p.length===10?(!t||!le(y,t))&&(a(y),H("inputParsedAndDateSelected (Input)")(y)):p===""&&t!==null&&(a(null),H("inputCleared (Input)")())};m.useEffect(()=>{const u=t?k(t,"dd.MM.yyyy",{locale:U}):"";u!==n&&r(u)},[t,n]);const g=t?k(t,"PPP",{locale:U}):"Ingen dato valgt";return s.jsxs("div",{style:{display:"inline-block",fontFamily:"sans-serif"},children:[s.jsxs("p",{style:{marginBottom:"10px",fontSize:"14px",minHeight:"20px"},children:["Valgt dato: ",s.jsx("strong",{children:g})]}),s.jsx("div",{style:{marginBottom:"10px"},children:s.jsx(Xt,{"aria-label":"Velg dato (dd.mm.åååå)",value:n,onChange:h,placeholder:"dd.mm.åååå",suffixIcon:s.jsx(St,{}),"data-size":e["data-size"],"data-color":e["data-color"]})}),s.jsx(b,{...e,selectedDate:t,onDateSelect:o,initialDate:t||e.initialDate||new Date})]})},ae={name:"Example Combined Input + Calendar",render:e=>s.jsx(dn,{...e}),args:{initialDate:new Date},argTypes:{initialDate:{control:{type:"date"}},selectedDate:{table:{disable:!0}},onDateSelect:{table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"]}}},A={name:"Test: Date Selection",render:e=>{const[t,a]=m.useState(null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:ge()},play:async({canvasElement:e,args:t})=>{const n=V(e).getByRole("gridcell",{name:"15. januar 2025"});await S.click(n),l(t.onDateSelect).toHaveBeenCalled(),l(n).toHaveAttribute("aria-selected","true")}},W={name:"Test: Grid Semantics",render:e=>s.jsx(b,{...e}),args:{initialDate:new Date(2025,0,15)},play:async({canvasElement:e})=>{const t=V(e),a=t.getByRole("grid",{name:/januar 2025/i});l(a).toBeInTheDocument(),l(t.getAllByRole("columnheader").length).toBe(7),l(t.getAllByRole("row").length).toBe(6);const n=a.querySelectorAll('[tabindex="0"]');l(n.length).toBe(1),l(n[0]).toHaveAccessibleName("15. januar 2025");const r=a.querySelectorAll('[aria-disabled="true"]');l(r.length).toBeGreaterThan(0),r.forEach(o=>{l(o).not.toHaveAttribute("tabindex")})}},I={name:"Test: Arrow Key Navigation",render:e=>{const[t,a]=m.useState(null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:ge()},play:async({canvasElement:e,args:t})=>{const a=V(e),n=e.ownerDocument,r=()=>{var h;return(h=n.activeElement)==null?void 0:h.getAttribute("data-date")};a.getByRole("gridcell",{name:"15. januar 2025"}).focus(),await S.keyboard("{ArrowRight}"),l(r()).toBe("2025-01-16"),await S.keyboard("{ArrowDown}"),l(r()).toBe("2025-01-23"),await S.keyboard("{ArrowLeft}"),l(r()).toBe("2025-01-22"),await S.keyboard("{ArrowUp}"),l(r()).toBe("2025-01-15"),a.getByRole("gridcell",{name:"31. januar 2025"}).focus(),await S.keyboard("{ArrowRight}"),l(r()).toBe("2025-02-01"),l(a.getByRole("grid",{name:/februar 2025/i})).toBeInTheDocument(),await S.keyboard("{PageDown}"),l(r()).toBe("2025-03-01"),await S.keyboard("{Enter}"),l(t.onDateSelect).toHaveBeenCalled();const o=t.onDateSelect.mock.lastCall[0];l(o.getFullYear()).toBe(2025),l(o.getMonth()).toBe(2),l(o.getDate()).toBe(1)}},Y={name:"Test: Month Navigation",render:e=>{const[t,a]=m.useState(null);return s.jsx(b,{...e,selectedDate:t,onDateSelect:a})},args:{initialDate:new Date(2025,5,15)},play:async({canvasElement:e})=>{const t=V(e),a=()=>{const o=e.querySelector('[class*="monthYear"]');return(o==null?void 0:o.textContent)||""};l(a()).toContain("2025"),l(a().toLowerCase()).toContain("juni");const n=t.getByRole("button",{name:/neste/i});await S.click(n),l(a().toLowerCase()).toContain("juli");const r=t.getByRole("button",{name:/forrige/i});await S.click(r),await S.click(r),l(a().toLowerCase()).toContain("mai")}},q={name:"Test: Space Selection",render:e=>{const[t,a]=m.useState(null),n=r=>{var o;a(r),(o=e.onDateSelect)==null||o.call(e,r)};return s.jsx(b,{...e,selectedDate:t,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:ge()},play:async({canvasElement:e,args:t})=>{const n=V(e).getByRole("gridcell",{name:"10. januar 2025"});n.focus(),await S.keyboard(" "),l(t.onDateSelect).toHaveBeenCalled(),l(n).toHaveAttribute("aria-selected","true")}},F={name:"Test: Today Highlight",render:e=>{const[t,a]=m.useState(null);return s.jsx(b,{...e,selectedDate:t,onDateSelect:a})},args:{initialDate:new Date},play:async({canvasElement:e})=>{var n;const t=e.querySelectorAll('[aria-current="date"]');l(t.length).toBe(1);const a=t[0];l((n=a.textContent)==null?void 0:n.trim()).toBe(new Date().getDate().toString()),l(a).not.toHaveAttribute("aria-disabled")}},un=()=>{const{setLanguage:e}=Ht();return s.jsx("button",{type:"button",onClick:()=>e("EN"),children:"Switch to English"})},ne={name:"Test: Follows UI Language",render:e=>s.jsxs(Ot,{children:[s.jsx(un,{}),s.jsx(b,{...e})]}),args:{initialDate:new Date(2025,0,15)},play:async({canvasElement:e})=>{const t=V(e);l(t.getByRole("grid",{name:/januar 2025/i})).toBeInTheDocument(),l(t.getAllByRole("columnheader")[0]).toHaveTextContent(/^Ma/),await S.click(t.getByRole("button",{name:"Switch to English"}));const a=await t.findByRole("grid",{name:/january 2025/i});l(a).toBeInTheDocument(),l(t.getByRole("gridcell",{name:"15 January 2025"})).toBeInTheDocument(),l(t.getAllByRole("columnheader")[0]).toHaveTextContent(/^Mo/)}};var Ce,ke,Me;Z.parameters={...Z.parameters,docs:{...(Ce=Z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Me=(ke=Z.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Be,Ee,Te;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(Ee=J.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Pe,je,Oe;ee.parameters={...ee.parameters,docs:{...(Pe=ee.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Oe=(je=ee.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var He,_e,Ne;te.parameters={...te.parameters,docs:{...(He=te.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ne=(_e=te.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Re,ze,Le;ae.parameters={...ae.parameters,docs:{...(Re=ae.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Le=(ze=ae.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Ae,We,Ie,Ye,qe;A.parameters={...A.parameters,docs:{...(Ae=A.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ie=(We=A.parameters)==null?void 0:We.docs)==null?void 0:Ie.source},description:{story:`Tests that clicking a date cell triggers the onDateSelect callback
and visually marks the date as selected.`,...(qe=(Ye=A.parameters)==null?void 0:Ye.docs)==null?void 0:qe.description}}};var Fe,$e,Ve,Ge,Qe;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ve=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source},description:{story:`The calendar follows the ARIA grid pattern: one grid labelled by the
month header, 7 column headers, a single tab stop (roving tabindex),
and out-of-month cells disabled in every modality.`,...(Qe=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.description}}};var Xe,Ke,Ue,Ze,Je;I.parameters={...I.parameters,docs:{...(Xe=I.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ue=(Ke=I.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source},description:{story:`Arrow keys move focus between days, End jumps to the end of the week,
PageDown moves a month ahead (the view follows), and Enter selects the
focused day.`,...(Je=(Ze=I.parameters)==null?void 0:Ze.docs)==null?void 0:Je.description}}};var et,tt,at,nt,rt;Y.parameters={...Y.parameters,docs:{...(et=Y.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=Y.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:"Tests month navigation using the previous/next buttons.",...(rt=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:rt.description}}};var ot,st,it,ct,lt;q.parameters={...q.parameters,docs:{...(ot=q.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=q.parameters)==null?void 0:st.docs)==null?void 0:it.source},description:{story:"Space selects the focused date, like Enter.",...(lt=(ct=q.parameters)==null?void 0:ct.docs)==null?void 0:lt.description}}};var dt,ut,mt,ht,gt;F.parameters={...F.parameters,docs:{...(dt=F.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
    const todayCell = todayCells[0]!;
    expect(todayCell.textContent?.trim()).toBe(new Date().getDate().toString());
    expect(todayCell).not.toHaveAttribute('aria-disabled');
  }
}`,...(mt=(ut=F.parameters)==null?void 0:ut.docs)==null?void 0:mt.source},description:{story:`Today's date is marked with aria-current="date".`,...(gt=(ht=F.parameters)==null?void 0:ht.docs)==null?void 0:gt.description}}};var ft,yt,Dt;ne.parameters={...ne.parameters,docs:{...(ft=ne.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Dt=(yt=ne.parameters)==null?void 0:yt.docs)==null?void 0:Dt.source}}};const mn=["DefaultCalendar","CalendarWithSelectedDate","CalendarStartingInPreviousMonth","CalendarWithCustomSizeAndColor","CombinedInputAndCalendar","TestDateSelection","TestGridSemantics","TestArrowKeyNavigation","TestMonthNavigation","TestSpaceSelection","TestTodayHighlight","TestFollowsUiLanguage"],Dn=Object.freeze(Object.defineProperty({__proto__:null,CalendarStartingInPreviousMonth:ee,CalendarWithCustomSizeAndColor:te,CalendarWithSelectedDate:J,CombinedInputAndCalendar:ae,DefaultCalendar:Z,TestArrowKeyNavigation:I,TestDateSelection:A,TestFollowsUiLanguage:ne,TestGridSemantics:W,TestMonthNavigation:Y,TestSpaceSelection:q,TestTodayHighlight:F,__namedExportsOrder:mn,default:ln},Symbol.toStringTag,{value:"Module"}));export{J as C,Dn as D,Z as a,te as b,ae as c};
