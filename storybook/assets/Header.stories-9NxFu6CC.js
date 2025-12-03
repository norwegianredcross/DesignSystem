import{r as u,j as e}from"./iframe-03EQUTJ1.js";import{L as C}from"./index-BIl4jmu7.js";import{B as m}from"./index-DqcL3zKF.js";import{A as I}from"./index-B4SL0qEx.js";import{B as M}from"./index-BAy7UyfC.js";import{P as O}from"./index-BzWRbxqX.js";import{S as H,a as W,b as P}from"./XMark-CUf0iCb9.js";import"./preload-helper-Dp1pzeXC.js";import"./link-WAWwgQP6.js";import"./index-BbH8Xka2.js";import"./lite-DaUVFjkg.js";import"./button-CgeO43jc.js";import"./spinner-DXETOzjG.js";import"./use-merge-refs-B839QqbL.js";import"./paragraph-BEv1Hr-O.js";import"./useId-CfkpAiHf.js";const V="_header_1xtaq_1",A="_headerInner_1xtaq_9",E="_logo_1xtaq_23",z="_actions_1xtaq_38",D="_userInfo_1xtaq_45",F="_userName_1xtaq_51",R="_loginLink_1xtaq_58",G="_loginText_1xtaq_67",K="_underline_1xtaq_74",X="_searchButtonWrapper_1xtaq_80",$="_buttonText_1xtaq_84",J="_menuButton_1xtaq_89",Q="_menuOverlay_1xtaq_94",U="_menuContent_1xtaq_112",a={header:V,headerInner:A,logo:E,actions:z,userInfo:D,userName:F,loginLink:R,loginText:G,underline:K,searchButtonWrapper:X,buttonText:$,menuButton:J,menuOverlay:Q,menuContent:U},l=({activePage:c,setPage:d,children:N,showBadge:k=!0,showSearch:S=!0,showLogin:L=!0})=>{const[r,i]=u.useState(!1);u.useEffect(()=>{i(!1)},[c]);const q=T=>{d&&(T.preventDefault(),d("home")),i(!1)};return e.jsxs("header",{className:a.header,children:[e.jsxs("div",{className:a.headerInner,children:[e.jsx(C,{href:"/",className:a.logo,"aria-label":"Norges Røde Kors Hjem",onClick:q,children:e.jsx("img",{src:"./logo-red-cross.svg",alt:""})}),e.jsxs("div",{className:a.actions,children:[e.jsxs("div",{className:a.userInfo,children:[e.jsx(O,{"data-size":"md",className:a.userName,children:"Frodo Baggins"}),e.jsx(I,{"aria-label":"Frodo Baggins","data-color":"main",variant:"circle",initials:"FB",children:k&&e.jsx(M,{count:19,"data-color":"danger",variant:"base"})})]}),L&&e.jsxs("a",{href:"#",className:a.loginLink,children:[e.jsx("span",{className:a.loginText,children:"Logg inn"}),e.jsx("div",{className:a.underline})]}),S&&e.jsx("div",{className:a.searchButtonWrapper,children:e.jsxs(m,{variant:"secondary","data-color":"main","data-size":"md","aria-label":"Søk",children:[e.jsx(H,{"aria-hidden":!0}),e.jsx("span",{className:a.buttonText,children:"Søk"})]})}),e.jsxs(m,{variant:"primary","data-color":"main","data-size":"md",onClick:()=>i(!r),"aria-expanded":r,"aria-label":r?"Lukk meny":"Åpne meny",className:a.menuButton,children:[r?e.jsx(W,{"aria-hidden":!0}):e.jsx(P,{"aria-hidden":!0}),e.jsx("span",{className:a.buttonText,children:r?"Lukk":"Meny"})]})]})]}),r&&e.jsx("div",{className:a.menuOverlay,children:e.jsx("div",{className:a.menuContent,children:N})})]})};try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!1,type:{name:"string"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!1,type:{name:"(pageName: string) => void"}},showBadge:{defaultValue:{value:"true"},description:"",name:"showBadge",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"true"},description:"",name:"showSearch",required:!1,type:{name:"boolean"}},showLogin:{defaultValue:{value:"true"},description:"",name:"showLogin",required:!1,type:{name:"boolean"}}}}}catch{}const ge={title:"Components/Header",component:l,parameters:{layout:"fullscreen"},argTypes:{showBadge:{control:"boolean",description:"Toggle the notification badge on the avatar"},showSearch:{control:"boolean",description:"Toggle the search button visibility"},showLogin:{control:"boolean",description:"Toggle the login link visibility"}}},n={args:{showBadge:!0,showSearch:!0,showLogin:!0}},s={args:{showBadge:!1,showSearch:!0,showLogin:!0}},o={args:{showBadge:!1,showSearch:!1,showLogin:!1}},t={args:{showBadge:!0,showSearch:!0,showLogin:!0,children:e.jsxs("div",{style:{padding:"2rem",background:"var(--ds-color-neutral-background-subtle)"},children:[e.jsx("h2",{children:"Menu Content Area"}),e.jsx("p",{children:"This is where navigation links or other menu items would go."})]})}};var h,g,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showBadge: true,
    showSearch: true,
    showLogin: true
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var x,_,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    showSearch: true,
    showLogin: true
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var v,w,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    showSearch: false,
    showLogin: false
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var j,B,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showBadge: true,
    showSearch: true,
    showLogin: true,
    children: <div style={{
      padding: '2rem',
      background: 'var(--ds-color-neutral-background-subtle)'
    }}>
        <h2>Menu Content Area</h2>
        <p>This is where navigation links or other menu items would go.</p>
      </div>
  }
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const pe=["Default","NoBadge","Minimal","WithMenuContent"];export{n as Default,o as Minimal,s as NoBadge,t as WithMenuContent,pe as __namedExportsOrder,ge as default};
