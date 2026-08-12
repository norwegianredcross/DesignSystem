import{j as i,r as d}from"./iframe-I___ixCb.js";import{B as ne}from"./tooltip-CukUlLeP.js";import{u as Je}from"./LanguageContext-BEFye4tW.js";import{t as B,c as H,g as re,m as et,a as tt,b as at,d as nt,e as rt,f as ot,i as j,h as st,j as it,w as ct,k as lt,l as dt,n as ee,o as J,p as z,q as L,r as ut,s as Re,D as mt,u as ht}from"./index-Cj4XDmXd.js";function Ae(e,a,t){const n=B(e,t==null?void 0:t.in);if(isNaN(a))return H(e,NaN);if(!a)return n;const r=n.getDate(),o=H(e,n.getTime());o.setMonth(n.getMonth()+a+1,0);const l=o.getDate();return r>=l?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}function Z(e,...a){const t=H.bind(null,a.find(n=>typeof n=="object"));return a.map(t)}function G(e,a){const t=B(e,a==null?void 0:a.in);return t.setHours(0,0,0,0),t}function ft(e,a,t){const[n,r]=Z(t==null?void 0:t.in,e,a),o=G(n),l=G(r),m=+o-re(o),u=+l-re(l);return Math.round((m-u)/et)}function gt(e){return H(e,Date.now())}function te(e,a,t){const[n,r]=Z(t==null?void 0:t.in,e,a);return+G(n)==+G(r)}function yt(e,a){const[t,n]=Z(e,a.start,a.end);return{start:t,end:n}}function Dt(e,a){const{start:t,end:n}=yt(a==null?void 0:a.in,e);let r=+t>+n;const o=r?+t:+n,l=r?n:t;l.setHours(0,0,0,0);let m=1;const u=[];for(;+l<=o;)u.push(H(t,l)),l.setDate(l.getDate()+m),l.setHours(0,0,0,0);return r?u.reverse():u}function O(e,a){const t=B(e,a==null?void 0:a.in);return t.setDate(1),t.setHours(0,0,0,0),t}function bt(e,a){const t=B(e,a==null?void 0:a.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function pt(e,a){const t=B(e,a==null?void 0:a.in);return ft(t,bt(t))+1}function c(e,a){const t=e<0?"-":"",n=Math.abs(e).toString().padStart(a,"0");return t+n}const x={y(e,a){const t=e.getFullYear(),n=t>0?t:1-t;return c(a==="yy"?n%100:n,a.length)},M(e,a){const t=e.getMonth();return a==="M"?String(t+1):c(t+1,2)},d(e,a){return c(e.getDate(),a.length)},a(e,a){const t=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,a){return c(e.getHours()%12||12,a.length)},H(e,a){return c(e.getHours(),a.length)},m(e,a){return c(e.getMinutes(),a.length)},s(e,a){return c(e.getSeconds(),a.length)},S(e,a){const t=a.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,t-3));return c(r,a.length)}},P={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},oe={G:function(e,a,t){const n=e.getFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(e,a,t){if(a==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return t.ordinalNumber(r,{unit:"year"})}return x.y(e,a)},Y:function(e,a,t,n){const r=rt(e,n),o=r>0?r:1-r;if(a==="YY"){const l=o%100;return c(l,2)}return a==="Yo"?t.ordinalNumber(o,{unit:"year"}):c(o,a.length)},R:function(e,a){const t=nt(e);return c(t,a.length)},u:function(e,a){const t=e.getFullYear();return c(t,a.length)},Q:function(e,a,t){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,a,t){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return c(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,a,t){const n=e.getMonth();switch(a){case"M":case"MM":return x.M(e,a);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(e,a,t){const n=e.getMonth();switch(a){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(e,a,t,n){const r=at(e,n);return a==="wo"?t.ordinalNumber(r,{unit:"week"}):c(r,a.length)},I:function(e,a,t){const n=tt(e);return a==="Io"?t.ordinalNumber(n,{unit:"week"}):c(n,a.length)},d:function(e,a,t){return a==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):x.d(e,a)},D:function(e,a,t){const n=pt(e);return a==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):c(n,a.length)},E:function(e,a,t){const n=e.getDay();switch(a){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(e,a,t,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(o);case"ee":return c(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(e,a,t,n){const r=e.getDay(),o=(r-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(o);case"cc":return c(o,a.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(e,a,t){const n=e.getDay(),r=n===0?7:n;switch(a){case"i":return String(r);case"ii":return c(r,a.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(e,a,t){const r=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,a,t){const n=e.getHours();let r;switch(n===12?r=P.noon:n===0?r=P.midnight:r=n/12>=1?"pm":"am",a){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,a,t){const n=e.getHours();let r;switch(n>=17?r=P.evening:n>=12?r=P.afternoon:n>=4?r=P.morning:r=P.night,a){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,a,t){if(a==="ho"){let n=e.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return x.h(e,a)},H:function(e,a,t){return a==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):x.H(e,a)},K:function(e,a,t){const n=e.getHours()%12;return a==="Ko"?t.ordinalNumber(n,{unit:"hour"}):c(n,a.length)},k:function(e,a,t){let n=e.getHours();return n===0&&(n=24),a==="ko"?t.ordinalNumber(n,{unit:"hour"}):c(n,a.length)},m:function(e,a,t){return a==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):x.m(e,a)},s:function(e,a,t){return a==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):x.s(e,a)},S:function(e,a){return x.S(e,a)},X:function(e,a,t){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(a){case"X":return ie(n);case"XXXX":case"XX":return C(n);case"XXXXX":case"XXX":default:return C(n,":")}},x:function(e,a,t){const n=e.getTimezoneOffset();switch(a){case"x":return ie(n);case"xxxx":case"xx":return C(n);case"xxxxx":case"xxx":default:return C(n,":")}},O:function(e,a,t){const n=e.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+se(n,":");case"OOOO":default:return"GMT"+C(n,":")}},z:function(e,a,t){const n=e.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+se(n,":");case"zzzz":default:return"GMT"+C(n,":")}},t:function(e,a,t){const n=Math.trunc(+e/1e3);return c(n,a.length)},T:function(e,a,t){return c(+e,a.length)}};function se(e,a=""){const t=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),o=n%60;return o===0?t+String(r):t+String(r)+a+c(o,2)}function ie(e,a){return e%60===0?(e>0?"-":"+")+c(Math.abs(e)/60,2):C(e,a)}function C(e,a=""){const t=e>0?"-":"+",n=Math.abs(e),r=c(Math.trunc(n/60),2),o=c(n%60,2);return t+r+a+o}const wt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,xt=/^'([^]*?)'?$/,St=/''/g,Ct=/[a-zA-Z]/;function S(e,a,t){var b,$,R,A,k,Q,X,K;const n=lt(),r=(t==null?void 0:t.locale)??n.locale??ot,o=(t==null?void 0:t.firstWeekContainsDate)??(($=(b=t==null?void 0:t.locale)==null?void 0:b.options)==null?void 0:$.firstWeekContainsDate)??n.firstWeekContainsDate??((A=(R=n.locale)==null?void 0:R.options)==null?void 0:A.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((Q=(k=t==null?void 0:t.locale)==null?void 0:k.options)==null?void 0:Q.weekStartsOn)??n.weekStartsOn??((K=(X=n.locale)==null?void 0:X.options)==null?void 0:K.weekStartsOn)??0,m=B(e,t==null?void 0:t.in);if(!j(m))throw new RangeError("Invalid time value");let u=a.match(vt).map(h=>{const s=h[0];if(s==="p"||s==="P"){const p=dt[s];return p(h,r.formatLong)}return h}).join("").match(wt).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const s=h[0];if(s==="'")return{isToken:!1,value:Mt(h)};if(oe[s])return{isToken:!0,value:h};if(s.match(Ct))throw new RangeError("Format string contains an unescaped latin alphabet character `"+s+"`");return{isToken:!1,value:h}});r.localize.preprocessor&&(u=r.localize.preprocessor(m,u));const D={firstWeekContainsDate:o,weekStartsOn:l,locale:r};return u.map(h=>{if(!h.isToken)return h.value;const s=h.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&st(s)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&it(s))&&ct(s,a,String(e));const p=oe[s[0]];return p(m,s,r.localize,D)}).join("")}function Mt(e){const a=e.match(xt);return a?a[1].replace(St,"'"):e}function ce(e,a,t){const[n,r]=Z(t==null?void 0:t.in,e,a);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function kt(e,a){return te(H(e,e),gt(e))}function Pt(e,a,t){return ee(e,-40,t)}function Ot(e,a,t){return Ae(e,-1,t)}const Et={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Tt=(e,a,t)=>{let n;const r=Et[e];return typeof r=="string"?n=r:a===1?n=r.one:n=r.other.replace("{{count}}",String(a)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},_t={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Nt={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},jt={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ht={date:J({formats:_t,defaultWidth:"full"}),time:J({formats:Nt,defaultWidth:"full"}),dateTime:J({formats:jt,defaultWidth:"full"})},Bt={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},zt=(e,a,t,n)=>Bt[e],Lt={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Yt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Wt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},It={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},qt={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Vt=(e,a)=>Number(e)+".",Ft={ordinalNumber:Vt,era:z({values:Lt,defaultWidth:"wide"}),quarter:z({values:Yt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:z({values:Wt,defaultWidth:"wide"}),day:z({values:It,defaultWidth:"wide"}),dayPeriod:z({values:qt,defaultWidth:"wide"})},$t=/^(\d+)\.?/i,Rt=/\d+/i,At={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Qt={any:[/^f/i,/^e/i]},Xt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Kt={any:[/1/i,/2/i,/3/i,/4/i]},Gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Zt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ut={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Jt={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ea={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ta={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},aa={ordinalNumber:ut({matchPattern:$t,parsePattern:Rt,valueCallback:e=>parseInt(e,10)}),era:L({matchPatterns:At,defaultMatchWidth:"wide",parsePatterns:Qt,defaultParseWidth:"any"}),quarter:L({matchPatterns:Xt,defaultMatchWidth:"wide",parsePatterns:Kt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:L({matchPatterns:Gt,defaultMatchWidth:"wide",parsePatterns:Zt,defaultParseWidth:"any"}),day:L({matchPatterns:Ut,defaultMatchWidth:"wide",parsePatterns:Jt,defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:ea,defaultMatchWidth:"any",parsePatterns:ta,defaultParseWidth:"any"})},w={code:"nb",formatDistance:Tt,formatLong:Ht,formatRelative:zt,localize:Ft,match:aa,options:{weekStartsOn:1,firstWeekContainsDate:4}},Qe=({title:e,...a})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...a,children:[e&&i.jsx("title",{children:e}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.952 6.96459C16.6103 6.62289 16.0563 6.62289 15.7146 6.96459L9.2979 13.3813C8.95621 13.723 8.95621 14.277 9.2979 14.6187L15.7146 21.0354C16.0563 21.3771 16.6103 21.3771 16.952 21.0354C17.2937 20.6937 17.2937 20.1396 16.952 19.7979L11.1541 14L16.952 8.20203C17.2937 7.86032 17.2937 7.3063 16.952 6.96459Z",fill:"currentColor"})]});Qe.displayName="ChevronLeftIcon";const Xe=({title:e,...a})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 28 28",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...a,children:[e&&i.jsx("title",{children:e}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z",fill:"currentColor"})]});Xe.displayName="ChevronRightIcon";const na="_calendarContainer_htlea_1",ra="_calendarHeader_htlea_16",oa="_monthYear_htlea_23",sa="_navigationButtons_htlea_34",ia="_grid_htlea_43",ca="_dayNameCell_htlea_51",la="_dateCell_htlea_69",da="_dateNumberContainer_htlea_95",ua="_otherMonth_htlea_108",ma="_disabled_htlea_108",ha="_selectedDate_htlea_134",f={calendarContainer:na,calendarHeader:ra,monthYear:oa,navigationButtons:sa,grid:ia,dayNameCell:ca,dateCell:la,dateNumberContainer:da,otherMonth:ua,disabled:ma,selectedDate:ha},fa=e=>{const a=O(e),t=Re(a,{locale:w}),n=ee(t,41);return Dt({start:t,end:n})},le=e=>e&&e.charAt(0).toUpperCase()+e.slice(1),y=({initialDate:e=new Date,selectedDate:a=null,onDateSelect:t,"data-color":n,"data-size":r})=>{const{t:o}=Je();d.useEffect(()=>{const s="rk-datepicker-inline-styles";if(typeof document>"u"||document.getElementById(s))return;const p=ga(f),v=document.createElement("style");v.id=s,v.textContent=p,document.head.appendChild(v)},[]);const[l,m]=d.useState(O(a&&j(a)?a:e));d.useEffect(()=>{if(a&&j(a)){const s=O(a);ce(s,l)||m(s)}},[a]);const u=d.useMemo(()=>O(new Date),[]),D=d.useMemo(()=>!1,[l,u]),b=d.useMemo(()=>fa(l),[l]),$=d.useMemo(()=>{const s=Re(new Date,{locale:w});return Array.from({length:7}).map((p,v)=>{const U=S(ee(s,v),"EEEEEE",{locale:w});return le(U)})},[]),R=d.useCallback(()=>{D||m(s=>O(Ot(s)))},[D]),A=d.useCallback(()=>{m(s=>O(Ae(s,1)))},[]),k=d.useCallback(s=>{t&&t(s)},[t]),Q=d.useCallback((s,p)=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),k(p))},[k]),X=S(l,"MMMM",{locale:w}),K=S(l,"yyyy",{locale:w}),h=`${le(X)} ${K}`;return i.jsxs("div",{className:f.calendarContainer,"data-color":n,"data-size":r,children:[i.jsxs("div",{className:f.calendarHeader,children:[i.jsx("span",{className:f.monthYear,children:h}),i.jsxs("div",{className:f.navigationButtons,children:[i.jsx(ne,{variant:"tertiary",icon:!0,onClick:R,"aria-label":o("datePicker.previousMonth"),disabled:D,children:i.jsx(Qe,{})}),i.jsx(ne,{variant:"tertiary",icon:!0,onClick:A,"aria-label":o("datePicker.nextMonth"),children:i.jsx(Xe,{})})]})]}),i.jsx("div",{className:f.grid,children:$.map(s=>i.jsx("div",{className:f.dayNameCell,children:s},s))}),i.jsx("div",{className:f.grid,children:b.map(s=>{const p=ce(s,l),v=a&&j(a)&&te(s,a),U=kt(s),Ze=[f.dateCell,p?"":f.otherMonth,v?f.selectedDate:"",U&&!v?f.todayDate:""].filter(Boolean).join(" ");return i.jsx("div",{className:Ze,onClick:()=>k(s),onKeyDown:Ue=>Q(Ue,s),role:"button",tabIndex:0,"aria-pressed":v??!1,"aria-label":S(s,"PPP",{locale:w}),children:i.jsx("span",{className:f.dateNumberContainer,children:S(s,"d")})},s.toISOString())})})]})};y.displayName="DatePicker";function ga(e){return`
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
.${e.grid} {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  text-align: center;
  overflow: hidden;
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
    font-size: var(--ds-body-2xs-font-size, 12px);
  }
  .${e.dateCell} {
    padding: var(--ds-size-2, 8px);
    font-size: var(--ds-body-2xs-font-size, 12px);
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
`}try{y.displayName="DatePicker",y.__docgenInfo={description:"DatePicker-komponent for å velge en dato fra en kalender.",displayName:"DatePicker",props:{}}}catch{}const Ke=({title:e,...a})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none","aria-hidden":e?void 0:!0,focusable:"false",...a,children:[e&&i.jsx("title",{children:e}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V4.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V4.25H19.5C20.1904 4.25 20.75 4.80964 20.75 5.5V18.5C20.75 19.1904 20.1904 19.75 19.5 19.75H4.5C3.80964 19.75 3.25 19.1904 3.25 18.5V5.5C3.25 4.80964 3.80964 4.25 4.5 4.25H8.25V3C8.25 2.58579 8.58579 2.25 9 2.25ZM15.75 7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V5.75H9.75V7C9.75 7.41421 9.41421 7.75 9 7.75C8.58579 7.75 8.25 7.41421 8.25 7V5.75H4.75V9.25H19.25V5.75H15.75V7ZM4.75 18.25V10.75H19.25V18.25H4.75ZM6.75 13C6.75 12.5858 7.08579 12.25 7.5 12.25H8.5C8.91421 12.25 9.25 12.5858 9.25 13C9.25 13.4142 8.91421 13.75 8.5 13.75H7.5C7.08579 13.75 6.75 13.4142 6.75 13ZM10.75 13C10.75 12.5858 11.0858 12.25 11.5 12.25H12.5C12.9142 12.25 13.25 12.5858 13.25 13C13.25 13.4142 12.9142 13.75 12.5 13.75H11.5C11.0858 13.75 10.75 13.4142 10.75 13ZM15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13C14.75 13.4142 15.0858 13.75 15.5 13.75H16.5C16.9142 13.75 17.25 13.4142 17.25 13C17.25 12.5858 16.9142 12.25 16.5 12.25H15.5ZM10.75 16C10.75 15.5858 11.0858 15.25 11.5 15.25H12.5C12.9142 15.25 13.25 15.5858 13.25 16C13.25 16.4142 12.9142 16.75 12.5 16.75H11.5C11.0858 16.75 10.75 16.4142 10.75 16ZM15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16C14.75 16.4142 15.0858 16.75 15.5 16.75H16.5C16.9142 16.75 17.25 16.4142 17.25 16C17.25 15.5858 16.9142 15.25 16.5 15.25H15.5ZM6.75 16C6.75 15.5858 7.08579 15.25 7.5 15.25H8.5C8.91421 15.25 9.25 15.5858 9.25 16C9.25 16.4142 8.91421 16.75 8.5 16.75H7.5C7.08579 16.75 6.75 16.4142 6.75 16Z",fill:"currentColor"})]});Ke.displayName="CalendarIcon";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,{expect:g,within:ae,userEvent:F,fn:Ge}=__STORYBOOK_MODULE_TEST__,ya={title:"Components/DatePicker (Calendar)",component:y,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{initialDate:{control:{type:"date"},description:"Initial month to display in the calendar."},selectedDate:{control:{type:"date"},description:"The currently selected date (primarily for standalone calendar stories)."},onDateSelect:{action:"dateSelected",description:"Callback function when a date is selected in the calendar."},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color scheme",defaultValue:"neutral"}}},Y={name:"Calendar Only (Default)",render:e=>{const[a,t]=d.useState(e.selectedDate||null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(y,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date,selectedDate:null,onDateSelect:M("dateSelected")}},W={name:"Calendar Only (Selected)",render:e=>{const[a,t]=d.useState(e.selectedDate||new Date),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(y,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date,selectedDate:new Date,onDateSelect:M("dateSelected")}},I={name:"Calendar Only (Previous Month)",render:e=>{const[a,t]=d.useState(e.selectedDate||null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(y,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:Pt(new Date),selectedDate:null,onDateSelect:M("dateSelected")}},q={name:"Calendar Only (Custom Size/Color)",render:e=>{const[a,t]=d.useState(e.selectedDate||new Date),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(y,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date,selectedDate:new Date,"data-size":"lg","data-color":"brand2",onDateSelect:M("dateSelected")}},Da=e=>{const[a,t]=d.useState(e.selectedDate&&j(e.selectedDate)?e.selectedDate:null),[n,r]=d.useState(a?S(a,"dd.MM.yyyy",{locale:w}):""),o=u=>{t(u),M("dateSelected (Calendar)")(u)},l=(u,D)=>{r(D);const b=ht(D,"dd.MM.yyyy",new Date,{locale:w});j(b)&&D.length===10?(!a||!te(b,a))&&(t(b),M("inputParsedAndDateSelected (Input)")(b)):D===""&&a!==null&&(t(null),M("inputCleared (Input)")())};d.useEffect(()=>{const u=a?S(a,"dd.MM.yyyy",{locale:w}):"";u!==n&&r(u)},[a,n]);const m=a?S(a,"PPP",{locale:w}):"Ingen dato valgt";return i.jsxs("div",{style:{display:"inline-block",fontFamily:"sans-serif"},children:[i.jsxs("p",{style:{marginBottom:"10px",fontSize:"14px",minHeight:"20px"},children:["Valgt dato: ",i.jsx("strong",{children:m})]}),i.jsx("div",{style:{marginBottom:"10px"},children:i.jsx(mt,{"aria-label":"Velg dato (dd.mm.åååå)",value:n,onChange:l,placeholder:"dd.mm.åååå",suffixIcon:i.jsx(Ke,{}),"data-size":e["data-size"],"data-color":e["data-color"]})}),i.jsx(y,{...e,selectedDate:a,onDateSelect:o,initialDate:a||e.initialDate||new Date})]})},V={name:"Example Combined Input + Calendar",render:e=>i.jsx(Da,{...e}),args:{initialDate:new Date},argTypes:{initialDate:{control:{type:"date"}},selectedDate:{table:{disable:!0}},onDateSelect:{table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"]}}},E={name:"Test: Date Selection",render:e=>{const[a,t]=d.useState(null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(y,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:Ge()},play:async({canvasElement:e,args:a})=>{const r=ae(e).getAllByRole("button").find(o=>o.textContent==="15");g(r).toBeTruthy(),await F.click(r),g(a.onDateSelect).toHaveBeenCalled(),g(r).toHaveAttribute("aria-pressed","true")}},T={name:"Test: Month Navigation",render:e=>{const[a,t]=d.useState(null);return i.jsx(y,{...e,selectedDate:a,onDateSelect:t})},args:{initialDate:new Date(2025,5,15)},play:async({canvasElement:e})=>{const a=ae(e),t=()=>{const o=e.querySelector('[class*="monthYear"]');return(o==null?void 0:o.textContent)||""};g(t()).toContain("2025"),g(t().toLowerCase()).toContain("juni");const n=a.getByRole("button",{name:/neste/i});await F.click(n),g(t().toLowerCase()).toContain("juli");const r=a.getByRole("button",{name:/forrige/i});await F.click(r),await F.click(r),g(t().toLowerCase()).toContain("mai")}},_={name:"Test: Keyboard Navigation",render:e=>{const[a,t]=d.useState(null),n=r=>{var o;t(r),(o=e.onDateSelect)==null||o.call(e,r)};return i.jsx(y,{...e,selectedDate:a,onDateSelect:n})},args:{initialDate:new Date(2025,0,15),onDateSelect:Ge()},play:async({canvasElement:e,args:a})=>{const r=ae(e).getAllByRole("button").find(o=>o.textContent==="10");g(r).toBeTruthy(),r.focus(),await F.keyboard("{Enter}"),g(a.onDateSelect).toHaveBeenCalled(),g(r).toHaveAttribute("aria-pressed","true")}},N={name:"Test: Today Highlight",render:e=>{const[a,t]=d.useState(null);return i.jsx(y,{...e,selectedDate:a,onDateSelect:t})},args:{initialDate:new Date},play:async({canvasElement:e})=>{var l;const t=new Date().getDate().toString(),n=e.querySelectorAll('[role="button"]'),r=Array.from(n).find(m=>{var b;const u=((b=m.textContent)==null?void 0:b.trim())===t,D=m.className.includes("otherMonth");return u&&!D});g(r).toBeTruthy();const o=r.getAttribute("aria-label")||"";g(o).toBeTruthy(),g((l=r.textContent)==null?void 0:l.trim()).toBe(t)}};var de,ue,me;Y.parameters={...Y.parameters,docs:{...(de=Y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=Y.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,fe,ge;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,De,be;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(De=I.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var pe,we,ve;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
    'data-color': 'brand2',
    onDateSelect: action('dateSelected')
  }
}`,...(ve=(we=q.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var xe,Se,Ce;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral']
    }
  }
}`,...(Ce=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Me,ke,Pe,Oe,Ee;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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

    // Find all date cells in the current month (not other month)
    const dateCells = canvas.getAllByRole('button');
    // Find a date cell that shows "15" (middle of month, always visible)
    const day15Cell = dateCells.find(cell => cell.textContent === '15');
    expect(day15Cell).toBeTruthy();

    // Click on day 15
    await userEvent.click(day15Cell!);

    // Verify the callback was called
    expect(args.onDateSelect).toHaveBeenCalled();

    // Verify the cell is now marked as selected (has aria-pressed="true")
    expect(day15Cell).toHaveAttribute('aria-pressed', 'true');
  }
}`,...(Pe=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source},description:{story:`Tests that clicking a date cell triggers the onDateSelect callback
and visually marks the date as selected.`,...(Ee=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.description}}};var Te,_e,Ne,je,He;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source},description:{story:"Tests month navigation using the previous/next buttons.",...(He=(je=T.parameters)==null?void 0:je.docs)==null?void 0:He.description}}};var Be,ze,Le,Ye,We;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Test: Keyboard Navigation',
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

    // Find a date cell
    const dateCells = canvas.getAllByRole('button');
    const day10Cell = dateCells.find(cell => cell.textContent === '10');
    expect(day10Cell).toBeTruthy();

    // Focus the cell
    day10Cell!.focus();

    // Press Enter to select
    await userEvent.keyboard('{Enter}');

    // Verify the callback was called
    expect(args.onDateSelect).toHaveBeenCalled();

    // Verify the cell is selected
    expect(day10Cell).toHaveAttribute('aria-pressed', 'true');
  }
}`,...(Le=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:Le.source},description:{story:"Tests keyboard navigation - pressing Enter or Space selects a date.",...(We=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:We.description}}};var Ie,qe,Ve,Fe,$e;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
    const today = new Date();
    const todayDate = today.getDate().toString();

    // Use querySelectorAll to find date cell buttons in the current month
    const dateCells = canvasElement.querySelectorAll('[role="button"]');
    const todayCell = Array.from(dateCells).find(cell => {
      // Match by text content (day number) and verify it's not an other-month cell
      const hasCorrectDate = cell.textContent?.trim() === todayDate;
      const isOtherMonth = cell.className.includes('otherMonth');
      return hasCorrectDate && !isOtherMonth;
    });
    expect(todayCell).toBeTruthy();

    // Verify the cell has an aria-label containing today's date
    const ariaLabel = todayCell!.getAttribute('aria-label') || '';
    expect(ariaLabel).toBeTruthy();

    // Verify this is indeed a cell for today's date number
    expect(todayCell!.textContent?.trim()).toBe(todayDate);
  }
}`,...(Ve=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source},description:{story:"Tests that today's date is visually distinguished.",...($e=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:$e.description}}};const ba=["DefaultCalendar","CalendarWithSelectedDate","CalendarStartingInPreviousMonth","CalendarWithCustomSizeAndColor","CombinedInputAndCalendar","TestDateSelection","TestMonthNavigation","TestKeyboardNavigation","TestTodayHighlight"],Sa=Object.freeze(Object.defineProperty({__proto__:null,CalendarStartingInPreviousMonth:I,CalendarWithCustomSizeAndColor:q,CalendarWithSelectedDate:W,CombinedInputAndCalendar:V,DefaultCalendar:Y,TestDateSelection:E,TestKeyboardNavigation:_,TestMonthNavigation:T,TestTodayHighlight:N,__namedExportsOrder:ba,default:ya},Symbol.toStringTag,{value:"Module"}));export{W as C,Sa as D,Y as a,q as b,V as c};
