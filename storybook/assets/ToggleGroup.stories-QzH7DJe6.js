import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-D4lIrffr.js";import{c as M}from"./lite-DaUVFjkg.js";import{R as L,a as B}from"./RovingFocusItem-CQ3tg9z1.js";import{B as R}from"./Button-_80U_wOV.js";import{T as v}from"./index-tKn8NwD3.js";import{u as d}from"./useId-Dtjwz75n.js";import{S as $}from"./EnvelopeClosed-BjY-vqgD.js";import{D as U}from"./Divider-ZGno9OH3.js";import{P as F}from"./Paragraph-CJciD5B6.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-Cb-ENzfG.js";import"./Spinner-Dj2HLJn9.js";import"./floating-ui.dom-D8S3B1vO.js";const V=i.createContext({}),W=i.forwardRef(function({children:l,value:o,defaultValue:e,onChange:r,name:n,className:f,...c},C){const _=i.useId(),A=o!==void 0,[D,H]=i.useState(e);let h=r;return A||(h=I=>{H(I),r==null||r(I)},o=D),a.jsx(V.Provider,{value:{value:o,defaultValue:e,name:n??`togglegroup-name-${_}`,onChange:h},children:a.jsx(L,{asChild:!0,activeValue:o,orientation:"ambiguous",children:a.jsxs("div",{className:M("ds-togglegroup",f),role:"radiogroup",ref:C,...c,children:[n&&a.jsx("input",{type:"hidden",name:n,value:o}),l]})})})}),N=t=>{const{...l}=t,o=i.useId(),e=i.useContext(V),r=t.value??o,n=e.value===r,f=`togglegroup-item-${i.useId()}`;return{...l,active:n,value:r,buttonProps:{id:f,"aria-checked":n,"aria-current":n,role:"radio",name:e.name,onClick:()=>{var c;(c=e.onChange)==null||c.call(e,r)}}}},q=i.forwardRef(function(l,o){const{active:e,buttonProps:r,value:n}=N(l);return a.jsx(B,{asChild:!0,value:n,children:a.jsx(R,{variant:e?"primary":"tertiary",ref:o,...l,...r})})}),P=Object.assign(W,{Item:q});P.Item.displayName="ToggleGroup.Item";var J=function(t,l){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const K=i.forwardRef((t,l)=>{var{title:o,titleId:e}=t,r=J(t,["title","titleId"]);let n=d();return n=o?e||"title-"+n:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},r),o?i.createElement("title",{id:n},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.25a.75.75 0 0 1 .75.75v1.25h5.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-5.75v2.5h2.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-2.75V20a.75.75 0 0 1-1.5 0v-1.25H8.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h2.75v-2.5H5.5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h5.75V4a.75.75 0 0 1 .75-.75m-.75 11.5h-2v2.5h2zm1.5 2.5h2v-2.5h-2zm-6.5-10.5h5v2.5h-5zm6.5 0v2.5h5v-2.5z",clipRule:"evenodd"}))});var Q=function(t,l){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const X=i.forwardRef((t,l)=>{var{title:o,titleId:e}=t,r=Q(t,["title","titleId"]);let n=d();return n=o?e||"title-"+n:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},r),o?i.createElement("title",{id:n},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25M6.25 6A.75.75 0 0 1 7 5.25h13a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75zm1.5.75v2.5h11.5v-2.5zM7 13.25a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75zm.75 4v-2.5h5.5v2.5z",clipRule:"evenodd"}))});var Y=function(t,l){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const Z=i.forwardRef((t,l)=>{var{title:o,titleId:e}=t,r=Y(t,["title","titleId"]);let n=d();return n=o?e||"title-"+n:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},r),o?i.createElement("title",{id:n},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M20 20.75a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-.75.75M17.75 10a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 4 5.25h13a.75.75 0 0 1 .75.75zm-1.5-.75v-2.5H4.75v2.5zm.75 9.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-7a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm-.75-4v2.5h-5.5v-2.5z",clipRule:"evenodd"}))});var ee=function(t,l){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const te=i.forwardRef((t,l)=>{var{title:o,titleId:e}=t,r=ee(t,["title","titleId"]);let n=d();return n=o?e||"title-"+n:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},r),o?i.createElement("title",{id:n},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-.25V19A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19V8.75H4A.75.75 0 0 1 3.25 8zm2.5 4.75h12.5V19a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25zm-1-4v2.5h14.5v-2.5zm9.25 8.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var re=function(t,l){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const oe=i.forwardRef((t,l)=>{var{title:o,titleId:e}=t,r=re(t,["title","titleId"]);let n=d();return n=o?e||"title-"+n:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},r),o?i.createElement("title",{id:n},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.286 11.483a.75.75 0 0 1 .099-.33l4.5-7.795a2.75 2.75 0 0 1 4.763 2.75l-4.5 7.795a.75.75 0 0 1-.236.25l-3.732 2.465a.75.75 0 0 1-1.162-.671zm1.486.266-.167 2.79L14.937 13l3.028-5.243-2.165-1.25zm6.577-6.39-.634 1.097-2.165-1.25.634-1.098a1.25 1.25 0 1 1 2.165 1.25M12.5 4.75H5.75v15.5h11.5V15.5a.75.75 0 0 1 1.5 0v5c0 .69-.56 1.25-1.25 1.25h-12c-.69 0-1.25-.56-1.25-1.25v-16c0-.69.56-1.25 1.25-1.25h7a.75.75 0 0 1 0 1.5",clipRule:"evenodd"}))});var le=function(t,l){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const ne=i.forwardRef((t,l)=>{var{title:o,titleId:e}=t,r=le(t,["title","titleId"]);let n=d();return n=o?e||"title-"+n:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},r),o?i.createElement("title",{id:n},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.317 4.32a.75.75 0 0 0-1.023.932L7.704 12l-2.41 6.748a.75.75 0 0 0 1.023.932l15-7a.75.75 0 0 0 0-1.36zm2.712 6.93L7.31 6.44 19.227 12 7.31 17.56l1.719-4.81H12.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))}),s=P,je={title:"Components/ToggleGroup",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},u={name:"Example Default",render:t=>a.jsxs(s,{...t,children:[a.jsx(s.Item,{value:"innboks",children:"Innboks"}),a.jsx(s.Item,{value:"utkast",children:"Utkast"}),a.jsx(s.Item,{value:"arkiv",children:"Arkiv"}),a.jsx(s.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-size":"md","data-color":"neutral"}},g={name:"Example Icon Only with Tooltip",render:t=>a.jsxs(s,{...t,children:[a.jsx(v,{content:"Venstrestilt",children:a.jsx(s.Item,{value:"option-1",children:a.jsx(X,{title:"Venstrestilt",fontSize:"1.5rem"})})}),a.jsx(v,{content:"Midtstilt",children:a.jsx(s.Item,{value:"option-2",children:a.jsx(K,{title:"Midtstilt",fontSize:"1.5rem"})})}),a.jsx(v,{content:"Høyrestilt",children:a.jsx(s.Item,{value:"option-3",children:a.jsx(Z,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-size":"md","data-color":"accent"}},m={name:"Example Controlled with Icons",render:t=>{const[l,o]=i.useState("utkast");return a.jsxs(a.Fragment,{children:[a.jsxs(s,{...t,value:l,onChange:o,children:[a.jsxs(s.Item,{value:"innboks",children:[a.jsx($,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),a.jsxs(s.Item,{value:"utkast",children:[a.jsx(oe,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),a.jsxs(s.Item,{value:"arkiv",children:[a.jsx(te,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),a.jsxs(s.Item,{value:"sendt",children:[a.jsx(ne,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),a.jsx(U,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),a.jsxs(F,{children:["Du har valgt: ",l]}),a.jsx(R,{"data-size":"sm",onClick:()=>o("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-size":"md","data-color":"brand1"}},p={name:"Example Large Size",render:t=>a.jsxs(s,{...t,children:[a.jsx(s.Item,{value:"large1",children:"Large Option 1"}),a.jsx(s.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-size":"lg","data-color":"neutral"}};var b,x,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Default',
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>\r
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>\r
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>\r
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>\r
    </ToggleGroup>,
  args: {
    defaultValue: 'innboks',
    name: 'folder-toggle',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,O,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example Icon Only with Tooltip',
  render: args => <ToggleGroup {...args}>\r
      <Tooltip content="Venstrestilt">\r
        <ToggleGroup.Item value="option-1">\r
          <AlignLeftIcon title="Venstrestilt" fontSize="1.5rem" />\r
        </ToggleGroup.Item>\r
      </Tooltip>\r
      <Tooltip content="Midtstilt">\r
        <ToggleGroup.Item value="option-2">\r
          <AlignCenterIcon title="Midtstilt" fontSize="1.5rem" />\r
        </ToggleGroup.Item>\r
      </Tooltip>\r
      <Tooltip content="Høyrestilt">\r
        <ToggleGroup.Item value="option-3">\r
          <AlignRightIcon title="Høyrestilt" fontSize="1.5rem" />\r
        </ToggleGroup.Item>\r
      </Tooltip>\r
    </ToggleGroup>,
  args: {
    defaultValue: 'option-1',
    name: 'alignment-icon-toggle',
    'data-size': 'md',
    // Example size
    'data-color': 'accent' // Example color
  }
}`,...(w=(O=g.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var T,z,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Example Controlled with Icons',
  render: args => {
    const [value, setValue] = useState<string>('utkast');
    return <>\r
        <ToggleGroup {...args} value={value} onChange={setValue}>\r
          <ToggleGroup.Item value="innboks">\r
            <EnvelopeClosedIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Innboks\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="utkast">\r
            <DocPencilIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Utkast\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="arkiv">\r
            <ArchiveIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Arkiv\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="sendt">\r
            <PaperplaneIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Sendt\r
          </ToggleGroup.Item>\r
        </ToggleGroup>\r
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />\r
        <Paragraph>Du har valgt: {value}</Paragraph>\r
        <Button data-size="sm" onClick={() => setValue('arkiv')} style={{
        marginTop: 'var(--ds-size-2)'
      }}>\r
          Velg Arkiv\r
        </Button>\r
      </>;
  },
  args: {
    name: 'controlled-folder-toggle-icons',
    'data-size': 'md',
    'data-color': 'brand1'
  }
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var G,E,k;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Example Large Size',
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>\r
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>\r
    </ToggleGroup>,
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(k=(E=p.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const Oe=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize"];export{m as ControlledWithIcons,u as Default,g as IconOnlyWithTooltip,p as LargeSize,Oe as __namedExportsOrder,je as default};
