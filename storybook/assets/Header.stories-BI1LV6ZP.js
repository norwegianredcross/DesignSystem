import{r as u,j as e}from"./iframe-BdlBVaMh.js";import{L as I}from"./index-DlF_-yak.js";import{B as m}from"./index-CwQn3zYp.js";import{A as M}from"./index-CP0efanY.js";import{B as O}from"./index-Cfh8PGJE.js";import{P as H}from"./index-D-BKqzwW.js";import{S as V,a as W,b as P}from"./XMark-D3nGVcpO.js";import"./preload-helper-Dp1pzeXC.js";import"./link-BxOwBFmK.js";import"./index-B0SzS9-D.js";import"./lite-DaUVFjkg.js";import"./button-CgDlDh-U.js";import"./spinner-BnHiu9Ma.js";import"./use-merge-refs-CuM6pwJa.js";import"./paragraph-Cyb83jPL.js";import"./useId-BgFlaxqf.js";const A="_header_1xtaq_1",E="_headerInner_1xtaq_9",z="_logo_1xtaq_23",D="_actions_1xtaq_38",F="_userInfo_1xtaq_45",R="_userName_1xtaq_51",U="_loginLink_1xtaq_58",G="_loginText_1xtaq_67",K="_underline_1xtaq_74",X="_searchButtonWrapper_1xtaq_80",$="_buttonText_1xtaq_84",J="_menuButton_1xtaq_89",Q="_menuOverlay_1xtaq_94",Y="_menuContent_1xtaq_112",a={header:A,headerInner:E,logo:z,actions:D,userInfo:F,userName:R,loginLink:U,loginText:G,underline:K,searchButtonWrapper:X,buttonText:$,menuButton:J,menuOverlay:Q,menuContent:Y},l=({activePage:c,setPage:d,children:N,showUser:k=!0,showBadge:S=!0,showSearch:L=!0,showLogin:q=!0})=>{const[r,i]=u.useState(!1);u.useEffect(()=>{i(!1)},[c]);const T=C=>{d&&(C.preventDefault(),d("home")),i(!1)};return e.jsxs("header",{className:a.header,children:[e.jsxs("div",{className:a.headerInner,children:[e.jsx(I,{href:"/",className:a.logo,"aria-label":"Norges Røde Kors Hjem",onClick:T,children:e.jsx("img",{src:"./logo-red-cross.svg",alt:""})}),e.jsxs("div",{className:a.actions,children:[k&&e.jsxs("div",{className:a.userInfo,children:[e.jsx(H,{"data-size":"md",className:a.userName,children:"Frodo Baggins"}),e.jsx(M,{"aria-label":"Frodo Baggins","data-color":"main",variant:"circle",initials:"FB",children:S&&e.jsx(O,{count:19,"data-color":"danger",variant:"base"})})]}),q&&e.jsxs("a",{href:"#",className:a.loginLink,children:[e.jsx("span",{className:a.loginText,children:"Logg inn"}),e.jsx("div",{className:a.underline})]}),L&&e.jsx("div",{className:a.searchButtonWrapper,children:e.jsxs(m,{variant:"secondary","data-color":"main","data-size":"md","aria-label":"Søk",children:[e.jsx(V,{"aria-hidden":!0}),e.jsx("span",{className:a.buttonText,children:"Søk"})]})}),e.jsxs(m,{variant:"primary","data-color":"main","data-size":"md",onClick:()=>i(!r),"aria-expanded":r,"aria-label":r?"Lukk meny":"Åpne meny",className:a.menuButton,children:[r?e.jsx(W,{"aria-hidden":!0}):e.jsx(P,{"aria-hidden":!0}),e.jsx("span",{className:a.buttonText,children:r?"Lukk":"Meny"})]})]})]}),r&&e.jsx("div",{className:a.menuOverlay,children:e.jsx("div",{className:a.menuContent,children:N})})]})};try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!1,type:{name:"string"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!1,type:{name:"(pageName: string) => void"}},showUser:{defaultValue:{value:"true"},description:"",name:"showUser",required:!1,type:{name:"boolean"}},showBadge:{defaultValue:{value:"true"},description:"",name:"showBadge",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"true"},description:"",name:"showSearch",required:!1,type:{name:"boolean"}},showLogin:{defaultValue:{value:"true"},description:"",name:"showLogin",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"Components/Header",component:l,parameters:{layout:"fullscreen"},argTypes:{showBadge:{control:"boolean",description:"Toggle the notification badge on the avatar"},showSearch:{control:"boolean",description:"Toggle the search button visibility"},showLogin:{control:"boolean",description:"Toggle the login link visibility"}}},s={args:{showBadge:!0,showSearch:!0,showLogin:!0}},n={args:{showBadge:!1,showSearch:!0,showLogin:!0}},o={args:{showBadge:!1,showSearch:!1,showLogin:!1}},t={args:{showBadge:!0,showSearch:!0,showLogin:!0,children:e.jsxs("div",{style:{padding:"2rem",background:"var(--ds-color-neutral-background-subtle)"},children:[e.jsx("h2",{children:"Menu Content Area"}),e.jsx("p",{children:"This is where navigation links or other menu items would go."})]})}};var h,g,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showBadge: true,
    showSearch: true,
    showLogin: true
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var x,_,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    showSearch: true,
    showLogin: true
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var w,v,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    showSearch: false,
    showLogin: false
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,B,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showBadge: true,
    showSearch: true,
    showLogin: true,
    children: <div style={{
      padding: '2rem',
      background: 'var(--ds-color-neutral-background-subtle)'
    }}>\r
        <h2>Menu Content Area</h2>\r
        <p>This is where navigation links or other menu items would go.</p>\r
      </div>
  }
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const xe=["Default","NoBadge","Minimal","WithMenuContent"];export{s as Default,o as Minimal,n as NoBadge,t as WithMenuContent,xe as __namedExportsOrder,pe as default};
